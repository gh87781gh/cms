'use client'

import { useContext } from 'react'
import './index.scss'

import cx from 'utils/cx'
import { IconLogo } from 'utils/icons'
import { MyContext } from 'storage'

export default function Logo() {
  const { layoutSetting } = useContext(MyContext)
  const theme = layoutSetting?.theme
  const primaryColor = layoutSetting?.cssVars.primaryColor

  return <IconLogo className={cx('logo', theme)} color={primaryColor} />
}
