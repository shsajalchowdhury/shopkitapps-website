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

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-inter: ${inter.style.fontFamily};
        }
        body {
          font-family: ${inter.style.fontFamily};
          background: #0A0E27;
          color: #E8EAF6;
        }
      `}</style>
      <AntdRegistry>
        <ConfigProvider
          theme={{
            algorithm: theme.darkAlgorithm,
            token: {
              colorPrimary: '#00D4AA',
              colorSuccess: '#00D4AA',
              colorWarning: '#F59E0B',
              colorError: '#E94560',
              colorInfo: '#4FC3F7',
              colorBgBase: '#0A0E27',
              colorTextBase: '#E8EAF6',
              fontFamily: inter.style.fontFamily,
              fontSize: 16,
              borderRadius: 10,
              borderRadiusLG: 14,
              controlHeight: 40,
              controlHeightLG: 48,
              colorBgContainer: 'rgba(255, 255, 255, 0.04)',
              colorBgElevated: 'rgba(255, 255, 255, 0.06)',
              colorBorder: 'rgba(255, 255, 255, 0.1)',
              colorBorderSecondary: 'rgba(255, 255, 255, 0.06)',
              colorBgLayout: '#0A0E27',
            },
          }}
        >
          {children}
        </ConfigProvider>
      </AntdRegistry>
    </>
  );
}
