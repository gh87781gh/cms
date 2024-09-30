'use client'

import { useContext, useState, useRef, useEffect } from 'react'
import './index.scss'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { useRouter } from 'next/navigation'

import { MyContext } from 'storage'
import { match } from 'ts-pattern'
import { LayoutSettingType } from 'layout/LayoutTemplate/types'
import { BtnGroup, BtnPrimary, BtnOutline } from 'components/Button'
import { Select } from 'components/editor/Form'
import Modal from 'components/editor/Modal'
import { config } from 'config'
import EditorLayout from './EditorLayout'
import EditorHome from './EditorHome'

enum LevelEnum {
  LayoutSetting = 'LayoutSetting',
  HomePage = 'HomePage'
}

export default function Editor() {
  const JSONRef = useRef<any>(null)
  const router = useRouter()
  const { layoutSetting, setLayoutSetting } = useContext(MyContext) as {
    layoutSetting: LayoutSettingType
    setLayoutSetting: React.Dispatch<React.SetStateAction<LayoutSettingType>>
  }

  const [level, setLevel] = useState<LevelEnum>(LevelEnum.LayoutSetting)

  const resetConfig = () => {
    setLayoutSetting({ ...config })
  }

  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    if (JSONRef.current && isModalOpen) {
      JSONRef.current.textContent = JSON.stringify(layoutSetting, null, 4)
    }
  }, [layoutSetting, isModalOpen])

  return (
    <div className='editor'>
      <PerfectScrollbar>
        <div className='editor-content'>
          <h1>Editor mode</h1>
          <Select
            value={level}
            onChange={(value) => setLevel(value)}
            options={Object.keys(LevelEnum).map((key) => ({
              label: key,
              value: LevelEnum[key as keyof typeof LevelEnum]
            }))}
          />
          <h2>{LevelEnum[level]}</h2>
          {match(level)
            .with(LevelEnum.LayoutSetting, () => <EditorLayout />)
            .with(LevelEnum.HomePage, () => <EditorHome />)
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
        width={800}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <div style={{ width: '100%', height: 700, overflow: 'auto' }}>
          <pre ref={JSONRef} />
        </div>
      </Modal>
    </div>
  )
}
