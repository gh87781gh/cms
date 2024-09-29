'use client'

import { useContext } from 'react'
import './index.scss'
import { generate } from '@ant-design/colors'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import { MyContext } from 'storage'
import {
  FormGroup,
  FormGroupContent,
  Select,
  Checkbox,
  InputNumber
} from 'components/editor/Form'
import ColorPicker from 'components/editor/ColorPicker'
import Switch from 'components/Switch'
import {
  LayoutModule,
  LayoutSettingType,
  ViewTypeMap,
  ViewType
} from 'layout/LayoutTemplate/types'

import { Container } from 'components/editor/Dnd'

export default function EditorHome() {
  const { layoutSetting, setLayoutSetting } = useContext(MyContext) as {
    layoutSetting: LayoutSettingType
    setLayoutSetting: React.Dispatch<React.SetStateAction<LayoutSettingType>>
  }

  const setViews = (views: ViewTypeMap[ViewType][]) => {
    setLayoutSetting((prev: LayoutSettingType) => ({
      ...prev,
      homepageViews: views
    }))
  }

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <Container
          items={layoutSetting.homepageViews}
          setItems={setViews as React.Dispatch<React.SetStateAction<any[]>>}
        />
      </DndProvider>
    </>
  )
}
