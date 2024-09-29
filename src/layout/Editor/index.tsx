'use client'

import { useContext, useState } from 'react'
import './index.scss'
import { generate } from '@ant-design/colors'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { useRouter } from 'next/navigation'
import { MyContext } from 'storage'
import { match } from 'ts-pattern'
import {
  FormGroup,
  FormGroupContent,
  Select,
  Checkbox,
  InputNumber
} from 'components/editor/Form'
import ColorPicker from 'components/editor/ColorPicker'
import Switch from 'components/Switch'
import { LayoutModule, LayoutSettingType } from 'layout/LayoutTemplate/types'
import { BtnGroup, BtnPrimary, BtnOutline } from 'components/Button'
import config from 'config'

import EditorLayout from './EditorLayout'
import EditorHome from './EditorHome'

enum LevelEnum {
  Layout,
  Home
}

export default function Editor() {
  const router = useRouter()
  const { layoutSetting, setLayoutSetting } = useContext(MyContext) as {
    layoutSetting: LayoutSettingType
    setLayoutSetting: React.Dispatch<React.SetStateAction<LayoutSettingType>>
  }

  const [level, setLevel] = useState<LevelEnum>(LevelEnum.Layout)

  const resetConfig = () => {
    setLayoutSetting({ ...config })
  }
  return (
    <div className='editor'>
      <div className='editor-content'>
        <PerfectScrollbar>
          <h1>Editor mode</h1>
          <BtnGroup>
            <BtnOutline
              size='large'
              active={level === LevelEnum.Layout}
              onClick={() => setLevel(LevelEnum.Layout)}
            >
              Layout Setting
            </BtnOutline>
            <BtnOutline
              size='large'
              active={level === LevelEnum.Home}
              onClick={() => setLevel(LevelEnum.Home)}
            >
              Home page
            </BtnOutline>
          </BtnGroup>
          {match(level)
            .with(LevelEnum.Layout, () => (
              <>
                <h2>Layout Setting</h2>
                <EditorLayout />
              </>
            ))
            .with(LevelEnum.Home, () => (
              <>
                <h2>Home Page</h2>
                <EditorHome />
              </>
            ))
            .otherwise(() => null)}
        </PerfectScrollbar>
      </div>
      <div className='editor-footer'>
        <BtnGroup>
          <BtnOutline size='large' onClick={() => router.push('/')}>
            Exit
          </BtnOutline>
          <BtnOutline size='large' onClick={resetConfig}>
            Reset
          </BtnOutline>
          <BtnPrimary size='large'>Save</BtnPrimary>
        </BtnGroup>
      </div>
    </div>
  )
}
