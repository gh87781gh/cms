import './index.scss'
import Image from 'next/image'

import { BannerViewType } from 'config/types'

type PropsType = {
  view: BannerViewType | null
}

export default function Banner(props: PropsType) {
  return (
    <div className='banner-b'>
      <div className='banner-b-left'>
        <div className='banner-b-left-top'>
          {props.view?.images?.[0] && (
            <div className='img-box'>
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
            <div className='img-box'>
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
          <div className='img-box'>
            <Image src={props.view?.images?.[2]} alt='banner-b-center' fill />
          </div>
        )}
      </div>
      <div className='banner-b-right'>
        <div className='banner-b-right-top'>
          {props.view?.images?.[3] && (
            <div className='img-box'>
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
            <div className='img-box'>
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
