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
import { LayoutModule, LayoutSettingType } from 'config/types'

export default function EditorLayout() {
  const { layoutSetting, setLayoutSetting } = useContext(MyContext) as {
    layoutSetting: LayoutSettingType
    setLayoutSetting: React.Dispatch<React.SetStateAction<LayoutSettingType>>
  }
  const { cssVars } = layoutSetting

  const onChange = (key: string, value: number | string) => {
    const newCssVars = { ...cssVars, [key]: value }
    setLayoutSetting((prev) => ({
      ...prev,
      cssVars: newCssVars
    }))
  }

  const renderThemeColorPickers = () => {
    return (
      <>
        <label>Colors</label>
        <FormGroupContent>
          <ColorPicker
            style={{ position: 'relative', bottom: '-7px' }}
            value={cssVars.primaryColor}
            format='hex'
            disabledAlpha={true}
            onChange={(value) => {
              const colors = generate(value.toHexString())
              onChange('primaryColor', colors[5])
            }}
          />{' '}
          Primary color
        </FormGroupContent>
        <FormGroupContent>
          <ColorPicker
            style={{ position: 'relative', bottom: '-7px' }}
            value={cssVars.btnTextColor}
            format='hex'
            disabledAlpha={true}
            onChange={(value) => {
              onChange('btnTextColor', value.toHexString())
            }}
          />{' '}
          Primary Button text color
        </FormGroupContent>
      </>
    )
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
          options={Object.keys(LayoutModule).map((key) => ({
            label: key,
            value: LayoutModule[key as keyof typeof LayoutModule]
          }))}
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
      {layoutSetting?.theme === 'dark' ? (
        <FormGroup>
          {renderThemeColorPickers()}
          <FormGroupContent>
            <ColorPicker
              style={{ position: 'relative', bottom: '-7px' }}
              value={cssVars.layoutHeaderBgcDark}
              format='hex'
              disabledAlpha={true}
              onChange={(value) => {
                onChange('layoutHeaderBgcDark', value.toHexString())
              }}
            />{' '}
            Header background color
          </FormGroupContent>
          <FormGroupContent>
            <ColorPicker
              style={{ position: 'relative', bottom: '-7px' }}
              value={cssVars.layoutSidebarBgcDark}
              format='hex'
              disabledAlpha={true}
              onChange={(value) => {
                onChange('layoutSidebarBgcDark', value.toHexString())
              }}
            />{' '}
            Sidebar background color
          </FormGroupContent>
          <FormGroupContent>
            <ColorPicker
              style={{ position: 'relative', bottom: '-7px' }}
              value={cssVars.layoutArticleBgcDark}
              format='hex'
              disabledAlpha={true}
              onChange={(value) => {
                onChange('layoutArticleBgcDark', value.toHexString())
              }}
            />{' '}
            Article background color
          </FormGroupContent>
        </FormGroup>
      ) : (
        <FormGroup>
          {renderThemeColorPickers()}
          <FormGroupContent>
            <ColorPicker
              style={{ position: 'relative', bottom: '-7px' }}
              value={cssVars.layoutHeaderBgcLight}
              format='hex'
              disabledAlpha={true}
              onChange={(value) => {
                onChange('layoutHeaderBgcLight', value.toHexString())
              }}
            />{' '}
            Header background color
          </FormGroupContent>
          <FormGroupContent>
            <ColorPicker
              style={{ position: 'relative', bottom: '-7px' }}
              value={cssVars.layoutSidebarBgcLight}
              format='hex'
              disabledAlpha={true}
              onChange={(value) => {
                onChange('layoutSidebarBgcLight', value.toHexString())
              }}
            />{' '}
            Sidebar background color
          </FormGroupContent>
          <FormGroupContent>
            <ColorPicker
              style={{ position: 'relative', bottom: '-7px' }}
              value={cssVars.layoutArticleBgcLight}
              format='hex'
              disabledAlpha={true}
              onChange={(value) => {
                onChange('layoutArticleBgcLight', value.toHexString())
              }}
            />{' '}
            Article background color
          </FormGroupContent>
        </FormGroup>
      )}

      <FormGroup>
        <label>Border radius</label>
        <FormGroupContent>
          <InputNumber
            min={0}
            precision={0}
            value={Number(cssVars.borderRadiusSM.replace('px', ''))}
            onChange={(value: any) => onChange('borderRadiusSM', `${value}px`)}
          />{' '}
          small size components like Button, Input, Select
        </FormGroupContent>
        <FormGroupContent>
          <InputNumber
            min={0}
            precision={0}
            value={Number(cssVars.borderRadius.replace('px', ''))}
            onChange={(value: any) => onChange('borderRadius', `${value}px`)}
          />{' '}
          base components
        </FormGroupContent>
        <FormGroupContent>
          <InputNumber
            min={0}
            precision={0}
            value={Number(cssVars.borderRadiusLG.replace('px', ''))}
            onChange={(value: any) => onChange('borderRadiusLG', `${value}px`)}
          />{' '}
          some large border components like Banner, Card, Modal
        </FormGroupContent>
      </FormGroup>
    </>
  )
}
