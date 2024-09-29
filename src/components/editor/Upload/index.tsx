import React, { useRef } from 'react'
import { UploadOutlined } from '@ant-design/icons'
import Image from 'next/image'
import './index.scss'

type PropsType = {
  src: string
  setSrc: (src: string) => void
}

export default function Upload(props: PropsType) {
  const inputEl = useRef<HTMLInputElement>(null)

  const getBase64 = (img: File, callback: (url: string) => void) => {
    const reader = new FileReader()
    reader.addEventListener('load', () => callback(reader.result as string))
    reader.readAsDataURL(img)
  }

  const upload = (event: any) => {
    if (
      event.target.files[0] &&
      event.target.files[0].size > 5000000 //bytes
    ) {
      console.error('The file size exceeds 5mb. Please use another one.')
    } else {
      getBase64(event.target.files[0] as File, (url) => {
        props.setSrc(url)
      })
    }
  }

  return (
    <>
      <div className='upload' onClick={() => inputEl.current?.click()}>
        {props.src ? (
          <div className='upload-image'>
            <Image src={props.src} alt='upload' fill />
          </div>
        ) : (
          <UploadOutlined />
        )}
      </div>
      <input
        ref={inputEl}
        style={{ display: 'none' }}
        type='file'
        accept='.png,.jpg,.jpeg,.bmp'
        multiple={false}
        onChange={upload}
      />
    </>
  )
}
