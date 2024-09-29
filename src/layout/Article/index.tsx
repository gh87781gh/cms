'use client'

import { useContext } from 'react'
import './index.scss'
import cx from 'utils/cx'
import PerfectScrollbar from 'react-perfect-scrollbar'

import { MyContext } from 'storage'

export default function Article({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const { layoutSetting } = useContext(MyContext)
  const theme = layoutSetting?.theme

  return (
    <article className={cx('article', theme)}>
      <PerfectScrollbar>
        <div className='article-container'>{children}</div>
      </PerfectScrollbar>
    </article>
  )
}
