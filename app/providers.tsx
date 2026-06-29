'use client';

import React from 'react';
import { ConfigProvider, theme } from 'antd';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const sharedTheme = {
  token: {
    colorPrimary: '#0F3460',
    colorSuccess: '#00D4AA',
    colorWarning: '#F59E0B',
    colorError: '#E94560',
    colorInfo: '#0F3460',
    colorTextBase: '#1A1A2E',
    colorBgBase: '#FFFFFF',
    fontFamily: inter.style.fontFamily,
    fontSize: 16,
    borderRadius: 8,
    borderRadiusLG: 12,
    controlHeight: 40,
    controlHeightLG: 48,
  },
};

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-inter: ${inter.style.fontFamily};
        }
        body {
          font-family: ${inter.style.fontFamily};
          background: #FFFFFF;
          color: #1A1A2E;
        }
      `}</style>
      <AntdRegistry>
        <ConfigProvider theme={sharedTheme}>
          {children}
        </ConfigProvider>
      </AntdRegistry>
    </>
  );
}
