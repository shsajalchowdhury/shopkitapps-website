'use client';

import React, { useState } from 'react';
import { Layout, Menu, Typography, Grid, Drawer, Button } from 'antd';
import {
  RocketOutlined,
  BookOutlined,
  QuestionCircleOutlined,
  ThunderboltOutlined,
  MenuOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { docs } from '@/data/docs';

const { Sider, Content } = Layout;
const { Title, Text } = Typography;
const { useBreakpoint } = Grid;

const appGuideItems = docs
  .filter((doc) => doc.category === 'App Guides')
  .map((doc) => ({
    key: `/docs/${doc.slug}`,
    label: <Link href={`/docs/${doc.slug}`}>{doc.title}</Link>,
  }));

const sidebarMenuItems = [
  {
    key: 'getting-started',
    icon: <RocketOutlined />,
    label: <Link href="/docs/getting-started">Getting Started</Link>,
  },
  {
    key: 'app-guides',
    icon: <BookOutlined />,
    label: 'App Guides',
    children: appGuideItems,
  },
  {
    key: 'faq',
    icon: <QuestionCircleOutlined />,
    label: <Link href="/docs/faq">FAQ</Link>,
  },
  {
    key: 'changelog',
    icon: <ThunderboltOutlined />,
    label: <Link href="/docs/changelog">Changelog</Link>,
  },
];

function getSelectedKey(pathname: string): string {
  if (pathname.startsWith('/docs/getting-started')) return 'getting-started';
  if (pathname.startsWith('/docs/faq')) return 'faq';
  if (pathname.startsWith('/docs/changelog')) return 'changelog';
  if (pathname.startsWith('/docs/')) return pathname.replace('/docs/', '');
  return 'docs';
}

function getOpenKeys(pathname: string): string[] {
  if (
    pathname.startsWith('/docs/') &&
    !pathname.startsWith('/docs/getting-started') &&
    !pathname.startsWith('/docs/faq') &&
    !pathname.startsWith('/docs/changelog') &&
    pathname !== '/docs'
  ) {
    return ['app-guides'];
  }
  return [];
}

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const screens = useBreakpoint();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const selectedKey = getSelectedKey(pathname);
  const openKeys = getOpenKeys(pathname);

  const menu = (
    <Menu
      mode="inline"
      selectedKeys={[selectedKey]}
      defaultOpenKeys={openKeys}
      items={sidebarMenuItems}
      style={{
        borderRight: 'none',
        paddingTop: 16,
      }}
    />
  );

  return (
    <Layout style={{ minHeight: '100vh', background: '#F8FAFC' }}>
      <Header />
      <Layout style={{ marginTop: 64 }}>
        {!screens.md ? (
          <>
            <div style={{ padding: '16px 24px 0', background: '#FFFFFF' }}>
              <Button
                icon={<MenuOutlined />}
                onClick={() => setDrawerOpen(true)}
                style={{ marginBottom: 8 }}
              >
                Documentation Menu
              </Button>
            </div>
            <Drawer
              title="Documentation"
              placement="left"
              onClose={() => setDrawerOpen(false)}
              open={drawerOpen}
              width={280}
              styles={{ body: { padding: 0 } }}
            >
              {menu}
            </Drawer>
          </>
        ) : (
          <Sider
            width={280}
            style={{
              background: '#FFFFFF',
              borderRight: '1px solid #E8E8E8',
              overflow: 'auto',
              height: 'calc(100vh - 64px)',
              position: 'sticky',
              top: 64,
            }}
          >
            {menu}
          </Sider>
        )}
        <Layout style={{ background: '#F8FAFC' }}>
          <Content
            style={{
              padding: screens.md ? '48px 56px' : '24px 16px',
              maxWidth: 900,
              margin: '0 auto',
              width: '100%',
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
      <Footer />
    </Layout>
  );
}
