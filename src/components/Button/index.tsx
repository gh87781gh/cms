import { Button, ButtonProps } from 'antd'
import './index.scss'

export function BtnGroup({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div className='btn-group'>{children}</div>
}

export const BtnPrimary = (props: ButtonProps) => (
  <Button type='primary' {...props} />
)
export const BtnOutline = (props: ButtonProps) => {
  return <Button {...props} />
}
// export const BtnDashed = () => <Button type='dashed' />
// export const BtnText = () => <Button type='text' />
// export const BtnLink = () => <Button type='link' />
