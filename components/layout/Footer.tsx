'use client';

import { Layout, Typography, Input, Button, Space, Divider } from 'antd';
import Link from 'next/link';
import { ThunderboltOutlined, TwitterOutlined, GithubOutlined } from '@ant-design/icons';
import { site } from '@/lib/apps';

const { Footer: AntFooter } = Layout;
const { Text, Link: AntLink } = Typography;

export function Footer() {
  const footerNav = site.navigation.footer;

  return (
    <AntFooter
      style={{
        background: '#1A1A2E',
        color: '#FFFFFF',
        padding: '64px 48px 32px',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '48px',
        }}
      >
        {/* Brand Column */}
        <div>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
            <ThunderboltOutlined style={{ fontSize: 24, color: '#FFFFFF' }} />
            <span style={{ fontWeight: 700, fontSize: 18, color: '#FFFFFF' }}>
              ShopKitApps
            </span>
          </Link>
          <Text style={{ color: '#9CA3AF', display: 'block', marginBottom: 16 }}>
            {site.tagline}
          </Text>
          <Space>
            <Button
              type="text"
              size="small"
              icon={<TwitterOutlined />}
              style={{ color: '#9CA3AF' }}
            />
            <Button
              type="text"
              size="small"
              icon={<GithubOutlined />}
              style={{ color: '#9CA3AF' }}
            />
          </Space>
        </div>

        {/* Dynamic Footer Columns */}
        {Object.entries(footerNav).map(([title, links]) => (
          <div key={title}>
            <Text strong style={{ color: '#FFFFFF', display: 'block', marginBottom: 16 }}>
              {title}
            </Text>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {links.map((link) => (
                <Link key={link.href} href={link.href}>
                  <Text style={{ color: '#9CA3AF', fontSize: 14 }}>
                    {link.label}
                  </Text>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Divider style={{ borderColor: '#374151', margin: '48px 0 24px' }} />

      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 16,
        }}
      >
        <Text style={{ color: '#6B7280', fontSize: 14 }}>
          (c) {new Date().getFullYear()} ShopKitApps. Made for Shopify merchants.
        </Text>
        <Text style={{ color: '#6B7280', fontSize: 14 }}>
          All apps use Theme App Extensions. Clean uninstall guaranteed.
        </Text>
      </div>
    </AntFooter>
  );
}
