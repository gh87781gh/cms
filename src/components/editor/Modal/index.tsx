import React from 'react'
import './index.scss'
import { Modal as AntdModal, ModalProps } from 'antd'

export default function Modal({ ...props }: ModalProps) {
  return <AntdModal {...props} />
}
