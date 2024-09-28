import { useContext } from 'react'
import './index.scss'
import { match } from 'ts-pattern'

import { MyContext } from 'storage'
import { LayoutModule } from 'layout/LayoutTemplate/types'

import HeaderA from './Header.A'
import HeaderB from './Header.B'

export default function Header() {
  const { layoutSetting } = useContext(MyContext)
  const layout = layoutSetting?.layout

  return match(layout)
    .with(LayoutModule.a, () => <HeaderA />)
    .with(LayoutModule.b, () => <HeaderB />)
    .otherwise(() => null)
}
