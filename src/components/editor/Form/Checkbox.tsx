import './index.scss'
import { Checkbox as AntdCheckbox, CheckboxProps } from 'antd'
import cx from 'utils/cx'

export default function Checkbox({ className, ...props }: CheckboxProps) {
  return <AntdCheckbox className={cx('checkbox', className)} {...props} />
}
