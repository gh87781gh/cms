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

const ITEMS = [
  {
    id: 1,
    text: 'Write a cool JS library'
  },
  {
    id: 2,
    text: 'Make it generic enough'
  },
  {
    id: 3,
    text: 'Write README'
  },
  {
    id: 4,
    text: 'Create some examples'
  },
  {
    id: 5,
    text: 'Spam in Twitter and IRC to promote it'
  },
  {
    id: 6,
    text: '???'
  },
  {
    id: 7,
    text: 'PROFIT'
  }
]

export default function EditorHome() {
  const { layoutSetting, setLayoutSetting } = useContext(MyContext) as {
    layoutSetting: LayoutSettingType
    setLayoutSetting: React.Dispatch<React.SetStateAction<LayoutSettingType>>
  }

  const onChange = (key: string, value: number) => {
    setLayoutSetting((prev) => ({
      ...prev,
      [key]: value
    }))
  }

  const generateColor = (key: string, color: string) => {
    const colors = generate(color)
    setLayoutSetting((prev) => ({
      ...prev,
      [key]: colors[5]
    }))
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
      {layoutSetting.homepageViews.map(
        (view: ViewTypeMap[ViewType], index: number) => {} //TODO 要做 DND 排列component
      )}
    </>
  )
}
