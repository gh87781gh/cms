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
    <div className='banner-b'>
      <div className='banner-b-left'>
        <div
          className='banner-b-left-top'
          style={{
            borderTopLeftRadius: borderRadiusLG
          }}
        >
          {props.view?.images?.[1] && (
            <Image src={props.view?.images?.[1]} alt='banner-b-left-top' />
          )}
        </div>
        <div
          className='banner-b-left-bottom'
          style={{
            borderBottomLeftRadius: borderRadiusLG
          }}
        >
          {props.view?.images?.[2] && (
            <Image src={props.view?.images?.[2]} alt='banner-b-left-bottom' />
          )}
        </div>
      </div>
      <div className='banner-b-center'>
        {props.view?.images?.[0] && (
          <Image src={props.view?.images?.[0]} alt='banner-b-center' />
        )}
      </div>
      <div className='banner-b-right'>
        <div
          className='banner-b-right-top'
          style={{
            borderTopRightRadius: borderRadiusLG
          }}
        >
          {props.view?.images?.[1] && (
            <Image src={props.view?.images?.[1]} alt='banner-b-right-top' />
          )}
        </div>
        <div
          className='banner-b-right-bottom'
          style={{
            borderBottomRightRadius: borderRadiusLG
          }}
        >
          {props.view?.images?.[2] && (
            <Image src={props.view?.images?.[2]} alt='banner-b-right-bottom' />
          )}
        </div>
      </div>
    </div>
  )
}
