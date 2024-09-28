'use client'

import { useContext } from 'react'
import './index.scss'

import cx from 'utils/cx'
import { IconLogo } from 'utils/icons'
import { MyContext } from 'storage'

type Props = {
  className?: string
}

export default function Logo(props: Props) {
  const { layoutSetting } = useContext(MyContext)
  const theme = layoutSetting?.theme
  return (
    <IconLogo
      className={cx('sidebar-logo sidebar-b', theme, props.className)}
    />
  )
}
