'use client'

import { useContext } from 'react'
import './index.scss'
import cx from 'utils/cx'

import { MyContext } from 'storage'

type PropsType = {
  renderBtns: () => React.ReactNode
}

export default function Header(props: PropsType) {
  const { layoutSetting } = useContext(MyContext)
  const theme = layoutSetting?.theme

  return (
    <header className={cx('header header-b', theme)}>
      {props.renderBtns()}
    </header>
  )
}
