'use client'

import { useContext } from 'react'
import './index.scss'
import cx from 'utils/cx'

import { MyContext } from 'storage'

import Logo from 'layout/Logo'

export default function Header() {
  const { layoutSetting } = useContext(MyContext)
  const theme = layoutSetting?.theme

  return (
    <header className={cx('header header-a', theme)}>
      <Logo />
    </header>
  )
}
