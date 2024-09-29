import './index.scss'
import { InputNumber as AntdInputNumber, InputNumberProps } from 'antd'

export default function InputNumber({ ...props }: InputNumberProps) {
  return <AntdInputNumber {...props} />
}
