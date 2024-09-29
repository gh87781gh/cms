'use client'

import { useContext } from 'react'
import './index.scss'
import cx from 'utils/cx'

import { MyContext } from 'storage'

import Logo from 'layout/Logo'

type PropsType = {
  renderBtns: () => React.ReactNode
}

export default function Header(props: PropsType) {
  const { layoutSetting } = useContext(MyContext)
  const theme = layoutSetting?.theme

  return (
    <header className={cx('header header-a', theme)}>
      <div className='header-logo'>
        <Logo />
      </div>
      <div className='header-container'>
        <div className='header-container-btns'>{props.renderBtns()}</div>
      </div>
    </header>
  )
}
