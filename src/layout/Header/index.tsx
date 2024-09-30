import { useContext } from 'react'
import './index.scss'
import { match } from 'ts-pattern'

import { MyContext } from 'storage'
import { LayoutModule } from 'config/types'
import { BtnGroup, BtnPrimary, BtnOutline } from 'components/Button'

import HeaderA from './Header.A'
import HeaderB from './Header.B'

export default function Header() {
  const { layoutSetting } = useContext(MyContext)
  const layout = layoutSetting?.layout

  const renderBtns = () => {
    return (
      <BtnGroup>
        <BtnPrimary>SignUp</BtnPrimary>
        <BtnOutline>Login</BtnOutline>
      </BtnGroup>
    )
  }

  return match(layout)
    .with(LayoutModule.a, () => <HeaderA renderBtns={renderBtns} />)
    .with(LayoutModule.b, () => <HeaderB renderBtns={renderBtns} />)
    .otherwise(() => null)
}
