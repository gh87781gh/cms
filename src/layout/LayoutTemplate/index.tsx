'use client'

import 'react-perfect-scrollbar/dist/css/styles.css'
import './index.scss'
import { useState } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { useSearchParams } from 'next/navigation'
import { match } from 'ts-pattern'

import Header from 'layout/Header'
import Sidebar from 'layout/Sidebar'
import { ConfigProvider } from 'antd'
import { MyContext } from 'storage'
import { LayoutSettingType, LayoutModule } from './types'
import cx from 'utils/cx'
import config from 'config'

import Editor from 'layout/Editor'

export default function LayoutTemplate({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const searchParams = useSearchParams()
  const isAdmin = searchParams.get('admin') === 'true'

  const { ...settings } = config
  const [layoutSetting, setLayoutSetting] = useState<LayoutSettingType>({
    ...settings
  })

  return (
    <MyContext.Provider value={{ layoutSetting, setLayoutSetting }}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: layoutSetting.primaryColor,
            colorPrimaryBg: layoutSetting.primaryColor,
            borderRadius: layoutSetting.borderRadius,
            borderRadiusSM: layoutSetting.borderRadiusSM,
            borderRadiusLG: layoutSetting.borderRadiusLG
          },
          components: {
            Button: {
              primaryColor: layoutSetting.btnTextColor
            }
          }
        }}
      >
        {isAdmin && <Editor />}
        <main className={cx(isAdmin ? 'main-editor' : 'main')}>
          {match(layoutSetting.layout)
            .with(LayoutModule.a, () => (
              <>
                <Header />
                <div className='container-a'>
                  <Sidebar />
                  <div className='container-a-main'>
                    <PerfectScrollbar>{children}</PerfectScrollbar>
                  </div>
                </div>
              </>
            ))
            .with(LayoutModule.b, () => (
              <div className='container-b'>
                <Sidebar />
                <div className='container-b-content'>
                  <Header />
                  <div className='container-b-main'>
                    <PerfectScrollbar>{children}</PerfectScrollbar>
                  </div>
                </div>
              </div>
            ))
            .otherwise(() => null)}
        </main>
      </ConfigProvider>
    </MyContext.Provider>

    // TODO just for example
    // import Image from 'next/image'
    //   <Image
    //   className={styles.logo}
    //   src='https://nextjs.org/icons/next.svg'
    //   alt='Next.js logo'
    //   width={180}
    //   height={38}
    //   priority
    // />
  )
}
