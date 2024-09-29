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
    <div className='banner-a'>
      <div
        className='banner-a-left'
        style={{
          borderTopLeftRadius: borderRadiusLG,
          borderBottomLeftRadius: borderRadiusLG
        }}
      >
        {props.view?.images?.[0] && (
          <Image src={props.view?.images?.[0]} alt='banner-a-left' />
        )}
      </div>
      <div className='banner-a-right'>
        <div
          className='banner-a-right-top'
          style={{
            borderTopRightRadius: borderRadiusLG
          }}
        >
          {props.view?.images?.[1] && (
            <Image src={props.view?.images?.[1]} alt='banner-a-right-top' />
          )}
        </div>
        <div
          className='banner-a-right-bottom'
          style={{
            borderBottomRightRadius: borderRadiusLG
          }}
        >
          {props.view?.images?.[2] && (
            <Image src={props.view?.images?.[2]} alt='banner-a-right-bottom' />
          )}
        </div>
      </div>
    </div>
  )
}
