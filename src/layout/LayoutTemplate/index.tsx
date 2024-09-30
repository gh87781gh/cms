'use client'

import 'react-perfect-scrollbar/dist/css/styles.css'
import './index.scss'
import { useState, useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import { match } from 'ts-pattern'

import Header from 'layout/Header'
import Sidebar from 'layout/Sidebar'
import { ConfigProvider } from 'antd'
import { MyContext } from 'storage'
import { LayoutSettingType, LayoutModule } from './types'
import cx from 'utils/cx'
import { config, SetCSSVars } from 'config'

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
  const cssVars = useMemo(() => layoutSetting.cssVars, [layoutSetting])

  return (
    <MyContext.Provider value={{ layoutSetting, setLayoutSetting }}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: cssVars.primaryColor,
            colorPrimaryBg: cssVars.primaryColor,
            borderRadius: cssVars.borderRadius,
            borderRadiusSM: cssVars.borderRadius * 0.5,
            borderRadiusLG: cssVars.borderRadius * 2
          },
          components: {
            Button: {
              primaryColor: cssVars.btnTextColor
            }
          }
        }}
      >
        <SetCSSVars config={layoutSetting} />
        {isAdmin && <Editor />}
        <main className={cx(isAdmin ? 'main-editor' : 'main')}>
          {match(layoutSetting.layout)
            .with(LayoutModule.a, () => (
              <>
                <Header />
                <div className={cx('container-a', isAdmin ? 'admin' : '')}>
                  <Sidebar />
                  <div className='container-a-main'>{children}</div>
                </div>
              </>
            ))
            .with(LayoutModule.b, () => (
              <div className='container-b'>
                <Sidebar />
                <div className='container-b-content'>
                  <Header />
                  <div className='container-b-main'>{children}</div>
                </div>
              </div>
            ))
            .otherwise(() => null)}
        </main>
      </ConfigProvider>
    </MyContext.Provider>
  )
}
