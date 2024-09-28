'use client'

import { useContext } from 'react'
import './index.scss'
import cx from 'utils/cx'

import { MyContext } from 'storage'

export default function Article({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const { layoutSetting } = useContext(MyContext)
  const theme = layoutSetting?.theme

  return <article className={cx('article', theme)}>{children}</article>
}
