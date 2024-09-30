import { useContext } from 'react'
import './index.scss'
import Image from 'next/image'

import { BannerViewType } from 'config/types'
import { MyContext } from 'storage'

type PropsType = {
  view: BannerViewType | null
}

export default function Banner(props: PropsType) {
  const { layoutSetting } = useContext(MyContext)
  const borderRadiusLG = layoutSetting?.borderRadiusLG

  return (
    <div
      className='banner-a'
      style={{ borderRadius: borderRadiusLG, overflow: 'hidden' }}
    >
      <div className='banner-a-left'>
        {props.view?.images?.[0] && (
          <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <Image
              src={props.view?.images?.[0]}
              alt='banner-a-left'
              fill={true}
            />
          </div>
        )}
      </div>
      <div className='banner-a-right'>
        <div className='banner-a-right-top'>
          {props.view?.images?.[1] && (
            <div
              style={{ width: '100%', height: '100%', position: 'relative' }}
            >
              <Image
                src={props.view?.images?.[1]}
                alt='banner-a-right-top'
                fill={true}
              />
            </div>
          )}
        </div>
        <div className='banner-a-right-bottom'>
          {props.view?.images?.[2] && (
            <div
              style={{ width: '100%', height: '100%', position: 'relative' }}
            >
              <Image
                src={props.view?.images?.[2]}
                alt='banner-a-right-bottom'
                fill={true}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
