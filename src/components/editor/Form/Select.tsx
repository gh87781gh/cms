import React from 'react'
import './index.scss'
import { Select as AntdSelect, SelectProps } from 'antd'

export default function Select({ ...props }: SelectProps) {
  return <AntdSelect style={{ width: '100%' }} {...props} />
}
