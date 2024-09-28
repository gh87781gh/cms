'use client'

import { useState } from 'react'
import 'react-perfect-scrollbar/dist/css/styles.css'
import PerfectScrollbar from 'react-perfect-scrollbar'
import './index.scss'
import Header from 'layout/Header'
import Sidebar from 'layout/Sidebar'
import { match } from 'ts-pattern'
import { ConfigProvider } from 'antd'

import { MyContext } from 'storage'
import { LayoutSettingType, LayoutModule } from './types'

import styles from 'app/variablesExport.module.scss'

export default function LayoutTemplate({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const [layoutSetting, setLayoutSetting] = useState<LayoutSettingType>({
    theme: 'light',
    layout: LayoutModule.a
  })

  return (
    <MyContext.Provider value={{ layoutSetting, setLayoutSetting }}>
      <ConfigProvider
        theme={{
          token: {
            /* here is antd global tokens */
            colorPrimary: styles.colorPrimary,
            colorPrimaryBg: styles.colorPrimary
          },
          components: {
            Switch: {}
          }
        }}
      >
        <main className='main'>
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
