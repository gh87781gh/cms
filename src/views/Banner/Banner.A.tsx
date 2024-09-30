import './index.scss'
import Image from 'next/image'

import { BannerViewType } from 'config/types'

type PropsType = {
  view: BannerViewType | null
}

export default function Banner(props: PropsType) {
  return (
    <div className='banner-a'>
      <div className='banner-a-left'>
        {props.view?.images?.[0] && (
          <div className='img-box'>
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
            <div className='img-box'>
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
            <div className='img-box'>
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
