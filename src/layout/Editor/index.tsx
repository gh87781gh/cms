'use client'

import { useContext, useState } from 'react'
import './index.scss'
import { generate } from '@ant-design/colors'

import { MyContext } from 'storage'
import {
  FormGroup,
  FormGroupContent,
  Select,
  Checkbox
} from 'components/editor/Form'
import ColorPicker from 'components/editor/ColorPicker'
import Switch from 'components/Switch'
import { LayoutModule, LayoutSettingType } from 'layout/LayoutTemplate/types'

export default function Editor() {
  const { layoutSetting, setLayoutSetting } = useContext(MyContext) as {
    layoutSetting: LayoutSettingType
    setLayoutSetting: React.Dispatch<React.SetStateAction<LayoutSettingType>>
  }

  const generateColor = (color: string) => {
    const colors = generate(color)
    setLayoutSetting((prev) => ({
      ...prev,
      primaryColor: colors[5]
    }))
  }

  return (
    <div className='editor'>
      <h1>Editor mode</h1>
      <div className='editor-header'></div>
      <FormGroup>
        <label>Layout</label>
        <Select
          value={layoutSetting?.layout}
          onChange={(value) => {
            setLayoutSetting((prev) => ({
              ...prev,
              layout: value
            }))
          }}
          options={[
            {
              label: 'layout a',
              value: LayoutModule.a
            },
            {
              label: 'layout b',
              value: LayoutModule.b
            }
          ]}
        />
      </FormGroup>
      <FormGroup>
        <label>Theme</label>
        <FormGroupContent>
          Light{' '}
          <Switch
            checked={layoutSetting?.theme === 'dark'}
            onChange={(checked) =>
              setLayoutSetting((prev) => ({
                ...prev,
                theme: checked ? 'dark' : 'light'
              }))
            }
          />{' '}
          Dark
        </FormGroupContent>
        <FormGroupContent>
          <Checkbox
            checked={layoutSetting?.isShowThemeSwitch}
            onChange={(e) =>
              setLayoutSetting((prev) => ({
                ...prev,
                isShowThemeSwitch: e.target.checked
              }))
            }
          >
            Show theme switch
          </Checkbox>
        </FormGroupContent>
      </FormGroup>
      <FormGroup>
        <label>PrimaryColor</label>
        <ColorPicker
          defaultValue={layoutSetting?.primaryColor}
          format='hex'
          disabledAlpha={true}
          onChange={(value) => {
            generateColor(value.toHexString())
          }}
        />
      </FormGroup>
    </div>
  )
}
