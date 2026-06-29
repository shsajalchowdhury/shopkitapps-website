'use client';

import React, { useState } from 'react';
import { Layout, Menu, Button, Drawer, Grid } from 'antd';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MenuOutlined, ThunderboltOutlined } from '@ant-design/icons';
import { site } from '@/lib/apps';

const { Header: AntHeader } = Layout;
const { useBreakpoint } = Grid;

export function Header() {
  const pathname = usePathname();
  const screens = useBreakpoint();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navItems = site.navigation.main.map((item) => ({
    key: item.href,
    label: <Link href={item.href}>{item.label}</Link>,
  }));

  const isMobile = !screens.md;

  if (isMobile) {
    return (
      <>
        <AntHeader
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 16px',
            background: '#FFFFFF',
            borderBottom: '1px solid #E5E7EB',
            position: 'sticky',
            top: 0,
            zIndex: 100,
            height: 64,
          }}
        >
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <ThunderboltOutlined style={{ fontSize: 24, color: '#0F3460' }} />
            <span style={{ fontWeight: 700, fontSize: 18, color: '#1A1A2E' }}>
              ShopKitApps
            </span>
          </Link>
          <Button
            type="text"
            icon={<MenuOutlined />}
            onClick={() => setDrawerOpen(true)}
          />
        </AntHeader>
        <Drawer
          title="ShopKitApps"
          placement="right"
          onClose={() => setDrawerOpen(false)}
          open={drawerOpen}
        >
          <Menu
            mode="vertical"
            selectedKeys={[pathname]}
            items={navItems}
            style={{ border: 'none' }}
          />
        </Drawer>
      </>
    );
  }

  return (
    <AntHeader
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 48px',
        background: '#FFFFFF',
        borderBottom: '1px solid #E5E7EB',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        height: 72,
      }}
    >
      <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <ThunderboltOutlined style={{ fontSize: 28, color: '#0F3460' }} />
        <span style={{ fontWeight: 700, fontSize: 20, color: '#1A1A2E' }}>
          ShopKitApps
        </span>
      </Link>
      <Menu
        mode="horizontal"
        selectedKeys={[pathname]}
        items={navItems}
        style={{
          flex: 1,
          justifyContent: 'center',
          borderBottom: 'none',
          minWidth: 0,
        }}
      />
      <Link href="/apps">
        <Button type="primary" size="large">
          Browse Apps
        </Button>
      </Link>
    </AntHeader>
  );
}
