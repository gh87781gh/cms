import { useContext } from 'react'
import './index.scss'
import Image from 'next/image'

import { BannerViewType } from 'layout/LayoutTemplate/types'
import { MyContext } from 'storage'

type PropsType = {
  view: BannerViewType | null
}

export default function Banner(props: PropsType) {
  const { layoutSetting } = useContext(MyContext)
  const borderRadiusLG = layoutSetting?.borderRadiusLG

  return (
    <div
      className='banner-b'
      style={{ borderRadius: borderRadiusLG, overflow: 'hidden' }}
    >
      <div className='banner-b-left'>
        <div className='banner-b-left-top'>
          {props.view?.images?.[0] && (
            <div
              style={{
                width: '100%',
                height: '100%',
                position: 'relative'
              }}
            >
              <Image
                src={props.view?.images?.[0]}
                alt='banner-b-left-top'
                fill
              />
            </div>
          )}
        </div>
        <div className='banner-b-left-bottom'>
          {props.view?.images?.[1] && (
            <div
              style={{
                width: '100%',
                height: '100%',
                position: 'relative'
              }}
            >
              <Image
                src={props.view?.images?.[1]}
                alt='banner-b-left-bottom'
                fill
              />
            </div>
          )}
        </div>
      </div>
      <div className='banner-b-center'>
        {props.view?.images?.[2] && (
          <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <Image src={props.view?.images?.[2]} alt='banner-b-center' fill />
          </div>
        )}
      </div>
      <div className='banner-b-right'>
        <div className='banner-b-right-top'>
          {props.view?.images?.[3] && (
            <div
              style={{
                width: '100%',
                height: '100%',
                position: 'relative'
              }}
            >
              <Image
                src={props.view?.images?.[3]}
                alt='banner-b-right-top'
                fill
              />
            </div>
          )}
        </div>
        <div className='banner-b-right-bottom'>
          {props.view?.images?.[4] && (
            <div
              style={{
                width: '100%',
                height: '100%',
                position: 'relative'
              }}
            >
              <Image
                src={props.view?.images?.[4]}
                alt='banner-b-right-bottom'
                fill
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
