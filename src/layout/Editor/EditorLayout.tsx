'use client'

import { useContext } from 'react'
import './index.scss'
import { generate } from '@ant-design/colors'
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
import { LayoutModule, LayoutSettingType } from 'layout/LayoutTemplate/types'

export default function EditorLayout() {
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

  return (
    <>
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
        <label>Colors</label>
        <FormGroupContent>
          <ColorPicker
            style={{ position: 'relative', bottom: '-7px' }}
            value={layoutSetting?.primaryColor}
            format='hex'
            disabledAlpha={true}
            onChange={(value) => {
              generateColor('primaryColor', value.toHexString())
            }}
          />{' '}
          Primary color
        </FormGroupContent>
        <FormGroupContent>
          <ColorPicker
            style={{ position: 'relative', bottom: '-7px' }}
            value={layoutSetting?.btnTextColor}
            format='hex'
            disabledAlpha={true}
            onChange={(value) => {
              generateColor('btnTextColor', value.toHexString())
            }}
          />{' '}
          Primary Button text color
        </FormGroupContent>
      </FormGroup>
      <FormGroup>
        <label>Border radius</label>
        <FormGroupContent>
          <InputNumber
            min={0}
            precision={0}
            value={layoutSetting?.borderRadiusSM}
            onChange={(value: any) => onChange('borderRadiusSM', value)}
          />{' '}
          small size components like Button, Input, Select
        </FormGroupContent>
        <FormGroupContent>
          <InputNumber
            min={0}
            precision={0}
            value={layoutSetting?.borderRadius}
            onChange={(value: any) => onChange('borderRadius', value)}
          />{' '}
          base components
        </FormGroupContent>
        <FormGroupContent>
          <InputNumber
            min={0}
            precision={0}
            value={layoutSetting?.borderRadiusLG}
            onChange={(value: any) => onChange('borderRadiusLG', value)}
          />{' '}
          some large border components like Banner, Card, Modal
        </FormGroupContent>
      </FormGroup>
    </>
  )
}
