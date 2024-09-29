import './index.scss'
import { Input as AntdInput, InputProps } from 'antd'

export default function Input({ ...props }: InputProps) {
  return <AntdInput {...props} />
}
