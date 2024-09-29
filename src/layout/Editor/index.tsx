'use client'

import { useContext, useState, useRef, useEffect } from 'react'
import './index.scss'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'

import { MyContext } from 'storage'
import { match } from 'ts-pattern'
import { LayoutSettingType } from 'layout/LayoutTemplate/types'
import { BtnGroup, BtnPrimary, BtnOutline } from 'components/Button'
import Modal from 'components/editor/Modal'
import config from 'config'
import EditorLayout from './EditorLayout'
import EditorHome from './EditorHome'

enum LevelEnum {
  Layout,
  Home
}

export default function Editor() {
  const JSONRef = useRef<any>(null)
  const router = useRouter()
  const { layoutSetting, setLayoutSetting } = useContext(MyContext) as {
    layoutSetting: LayoutSettingType
    setLayoutSetting: React.Dispatch<React.SetStateAction<LayoutSettingType>>
  }

  const [level, setLevel] = useState<LevelEnum>(LevelEnum.Layout)

  const resetConfig = () => {
    setLayoutSetting({ ...config })
  }

  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    if (JSONRef.current) {
      JSONRef.current.textContent = JSON.stringify(layoutSetting, null, 4)
    }
  }, [layoutSetting, JSONRef.current])

  return (
    <div className='editor'>
      <PerfectScrollbar>
        <div className='editor-content'>
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
        </div>
        <div className='editor-footer'>
          <BtnGroup>
            <BtnOutline size='large' onClick={() => router.push('/')}>
              Exit
            </BtnOutline>
            <BtnOutline size='large' onClick={resetConfig}>
              Reset
            </BtnOutline>
            <BtnPrimary size='large' onClick={() => setIsModalOpen(true)}>
              Save
            </BtnPrimary>
          </BtnGroup>
        </div>
      </PerfectScrollbar>
      <Modal
        title='Save Result'
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <pre ref={JSONRef} />
      </Modal>
    </div>
  )
}
