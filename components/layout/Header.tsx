'use client';

import React, { useState, useEffect } from 'react';
import { Menu, Button, Drawer, Grid } from 'antd';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MenuOutlined, ThunderboltOutlined } from '@ant-design/icons';
import { site } from '@/lib/apps';

const { useBreakpoint } = Grid;

export function Header() {
  const pathname = usePathname();
  const screens = useBreakpoint();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = site.navigation.main.map((item) => ({
    key: item.href,
    label: <Link href={item.href}>{item.label}</Link>,
  }));

  const isMobile = !screens.md;

  if (isMobile) {
    return (
      <>
        <header
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            height: 64,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 16px',
            background: scrolled ? 'rgba(10, 14, 39, 0.9)' : 'rgba(10, 14, 39, 0.6)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
            transition: 'all 0.3s ease',
          }}
        >
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 36, height: 36, borderRadius: 10,
              background: 'linear-gradient(135deg, #00D4AA, #00A3D4)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 15px rgba(0, 212, 170, 0.4)',
            }}>
              <ThunderboltOutlined style={{ fontSize: 20, color: '#FFFFFF' }} />
            </div>
            <span style={{
              fontWeight: 800, fontSize: 18,
              background: 'linear-gradient(135deg, #FFFFFF, #00D4AA)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              ShopKitApps
            </span>
          </Link>
          <Button
            type="text"
            icon={<MenuOutlined />}
            onClick={() => setDrawerOpen(true)}
            style={{ color: '#E8EAF6', fontSize: 20 }}
          />
        </header>
        <div style={{ height: 64 }} />
        <Drawer
          title={
            <span style={{ color: '#FFFFFF', fontWeight: 700 }}>ShopKitApps</span>
          }
          placement="right"
          onClose={() => setDrawerOpen(false)}
          open={drawerOpen}
          styles={{
            body: { padding: 0 },
          }}
        >
          <Menu
            mode="vertical"
            selectedKeys={[pathname]}
            items={navItems}
            style={{ background: 'transparent', border: 'none', padding: 16 }}
          />
        </Drawer>
      </>
    );
  }

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 48px',
          background: scrolled ? 'rgba(10, 14, 39, 0.9)' : 'rgba(10, 14, 39, 0.4)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
          transition: 'all 0.4s ease',
          height: 72,
        }}
      >
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{
            width: 40, height: 40, borderRadius: 12,
            background: 'linear-gradient(135deg, #00D4AA, #00A3D4)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 20px rgba(0, 212, 170, 0.4)',
          }}>
            <ThunderboltOutlined style={{ fontSize: 22, color: '#FFFFFF' }} />
          </div>
          <span style={{
            fontWeight: 800, fontSize: 20,
            background: 'linear-gradient(135deg, #FFFFFF 0%, #00D4AA 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
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
            background: 'transparent',
            maxWidth: 500,
          }}
        />

        <Link href="/apps">
          <Button
            type="primary"
            size="large"
            className="btn-glow"
            style={{
              height: 44,
              paddingInline: 28,
              borderRadius: 12,
              fontWeight: 600,
            }}
          >
            Browse Apps
          </Button>
        </Link>
      </header>
      <div style={{ height: 72 }} />
    </>
  );
}
