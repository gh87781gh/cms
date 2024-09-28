'use client'

import { useContext } from 'react'
import './index.scss'
import cx from 'utils/cx'
import { IconLogo } from 'utils/icons'
import { match } from 'ts-pattern'

import { MyContext } from 'storage'
import { LayoutModule } from 'layout/LayoutTemplate/types'

import HeaderA from './Header.A'
import HeaderB from './Header.B'

export default function Header() {
  const { layoutSetting } = useContext(MyContext)
  const theme = layoutSetting?.theme
  const layout = layoutSetting?.layout
  return match(layout)
    .with(LayoutModule.headerFirst, () => <HeaderA theme={theme} />)
    .with(LayoutModule.sidebarFirst, () => <HeaderB theme={theme} />)
    .otherwise(() => null)
}
