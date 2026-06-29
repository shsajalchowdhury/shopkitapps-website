'use client';

import { Typography, Input, Button, Space, Divider } from 'antd';
import Link from 'next/link';
import { ThunderboltOutlined, TwitterOutlined, GithubOutlined, MailOutlined } from '@ant-design/icons';
import { site } from '@/lib/apps';

const { Text } = Typography;

export function Footer() {
  const footerNav = site.navigation.footer;

  return (
    <footer style={{
      background: '#060A1F',
      borderTop: '1px solid rgba(255, 255, 255, 0.06)',
      padding: '80px 48px 40px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative glow orbs */}
      <div className="glow-orb" style={{
        top: '-100px', left: '10%',
        width: 300, height: 300,
        background: '#00D4AA',
      }} />

      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '48px',
        position: 'relative',
        zIndex: 1,
      }}>
        {/* Brand Column */}
        <div>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
            <div style={{
              width: 40, height: 40, borderRadius: 12,
              background: 'linear-gradient(135deg, #00D4AA, #00A3D4)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 20px rgba(0, 212, 170, 0.3)',
            }}>
              <ThunderboltOutlined style={{ fontSize: 22, color: '#FFFFFF' }} />
            </div>
            <span style={{
              fontWeight: 800, fontSize: 20,
              background: 'linear-gradient(135deg, #FFFFFF, #00D4AA)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              ShopKitApps
            </span>
          </Link>
          <Text style={{ color: 'rgba(232, 234, 246, 0.5)', display: 'block', marginBottom: 20, fontSize: 14, lineHeight: 1.7 }}>
            {site.tagline}
          </Text>
          <Space size="middle">
            {[
              { icon: <TwitterOutlined />, label: 'Twitter' },
              { icon: <GithubOutlined />, label: 'GitHub' },
              { icon: <MailOutlined />, label: 'Email' },
            ].map((social, i) => (
              <a
                key={i}
                href="#"
                aria-label={social.label}
                style={{
                  width: 38, height: 38, borderRadius: 10,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: 'rgba(232, 234, 246, 0.6)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(0, 212, 170, 0.15)';
                  e.currentTarget.style.borderColor = 'rgba(0, 212, 170, 0.4)';
                  e.currentTarget.style.color = '#00D4AA';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.color = 'rgba(232, 234, 246, 0.6)';
                }}
              >
                {social.icon}
              </a>
            ))}
          </Space>
        </div>

        {/* Dynamic Footer Columns */}
        {Object.entries(footerNav).map(([title, links]) => (
          <div key={title}>
            <Text strong style={{
              color: '#FFFFFF',
              display: 'block',
              marginBottom: 20,
              fontSize: 14,
              textTransform: 'uppercase',
              letterSpacing: '0.8px',
            }}>
              {title}
            </Text>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {links.map((link) => (
                <Link key={link.href} href={link.href}>
                  <Text style={{
                    color: 'rgba(232, 234, 246, 0.5)',
                    fontSize: 14,
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#00D4AA'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(232, 234, 246, 0.5)'; }}
                  >
                    {link.label}
                  </Text>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="divider-glow" style={{ maxWidth: 1200, margin: '48px auto 24px' }} />

      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 16,
        position: 'relative',
        zIndex: 1,
      }}>
        <Text style={{ color: 'rgba(232, 234, 246, 0.35)', fontSize: 13 }}>
          (c) {new Date().getFullYear()} ShopKitApps. Built for Shopify merchants.
        </Text>
        <Text style={{ color: 'rgba(232, 234, 246, 0.35)', fontSize: 13 }}>
          Theme App Extensions. Clean uninstall guaranteed.
        </Text>
      </div>
    </footer>
  );
}
