import React from 'react'
import './index.scss'

export function FormGroup({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div className='form-group'>{children}</div>
}

export function FormGroupContent({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div className='form-group-content'>{children}</div>
}
