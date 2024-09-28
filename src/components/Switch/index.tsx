import React from 'react'
import './index.scss'
import { Switch as AntdSwitch, SwitchProps } from 'antd'

import cx from 'utils/cx'

export default function Switch({ className, ...props }: SwitchProps) {
  return <AntdSwitch {...props} className={cx('switch', className)} />
}
