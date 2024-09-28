'use client'

import { useContext } from 'react'
import './index.scss'
import cx from 'utils/cx'
import Link from 'next/link'

import { MyContext } from 'storage'

export default function Sidebar() {
  const { layoutSetting } = useContext(MyContext)
  const theme = layoutSetting?.theme

  return (
    <aside className={cx('sidebar', theme)}>
      <ul className='sidebar-list'>
        <li>
          <Link href='/' className={theme}>
            Sports
          </Link>
        </li>
        <li>
          <Link href='/' className={theme}>
            Casino
          </Link>
        </li>
        <li>
          <Link href='/' className={theme}>
            Promotions
          </Link>
        </li>
        <li>
          <Link href='/' className={theme}>
            VIP
          </Link>
        </li>
      </ul>
    </aside>
  )
}
