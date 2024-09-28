import React from 'react'
import './index.scss'
import { ColorPicker as AntdColorPicker, ColorPickerProps } from 'antd'

export default function ColorPicker({ ...props }: ColorPickerProps) {
  return <AntdColorPicker {...props} />
}
