'use client';

import { Tag, Button, Typography, Row } from 'antd';
import {
  ThunderboltOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import type { AppData } from '@/lib/apps';

const { Text, Title } = Typography;

const iconMap: Record<string, React.ReactNode> = {
  thunderbolt: <ThunderboltOutlined />,
  ruler: <ThunderboltOutlined />,
  link: <ThunderboltOutlined />,
  'shopping-cart': <ThunderboltOutlined />,
  calendar: <ThunderboltOutlined />,
  shield: <ThunderboltOutlined />,
  robot: <ThunderboltOutlined />,
  message: <ThunderboltOutlined />,
};

export function AppCard({ app }: { app: AppData }) {
  return (
    <Link href={`/apps/${app.slug}`} style={{ display: 'block', height: '100%' }}>
      <div
        className="feature-card"
        style={{
          height: '100%',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Icon + Category */}
        <Row align="middle" justify="space-between" style={{ marginBottom: 20 }}>
          <div
            style={{
              width: 56, height: 56, borderRadius: 16,
              background: `linear-gradient(135deg, ${app.color}40, ${app.color}10)`,
              border: `1px solid ${app.color}30`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: app.color, fontSize: 26,
              boxShadow: `0 4px 20px ${app.color}20`,
            }}
          >
            {iconMap[app.icon] || <ThunderboltOutlined />}
          </div>
          <Tag style={{
            borderRadius: 100,
            padding: '2px 12px',
            fontSize: 11,
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            background: `${app.color}15`,
            color: app.color,
            border: `1px solid ${app.color}30`,
          }}>
            {app.category}
          </Tag>
        </Row>

        {/* Name + Tagline */}
        <Title level={4} style={{ marginBottom: 4, marginTop: 0, fontSize: 20 }}>
          {app.name}
        </Title>
        <Text style={{
          fontSize: 14,
          display: 'block',
          marginBottom: 20,
          color: 'rgba(232, 234, 246, 0.5)',
        }}>
          {app.tagline}
        </Text>

        {/* Features (first 3) */}
        <div style={{ marginBottom: 24, flex: 1 }}>
          {app.features.slice(0, 3).map((feature) => (
            <div
              key={feature}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                marginBottom: 8,
              }}
            >
              <CheckCircleOutlined style={{ color: '#00D4AA', fontSize: 14 }} />
              <Text style={{ fontSize: 13, color: 'rgba(232, 234, 246, 0.6)' }}>
                {feature}
              </Text>
            </div>
          ))}
        </div>

        {/* Footer */}
        <Row align="middle" justify="space-between" style={{ marginTop: 'auto' }}>
          <div style={{ display: 'flex', gap: 8 }}>
            <Tag style={{
              borderRadius: 100,
              background: 'rgba(0, 212, 170, 0.1)',
              color: '#00D4AA',
              border: '1px solid rgba(0, 212, 170, 0.3)',
              fontSize: 11,
            }}>
              Free Plan
            </Tag>
            <Tag style={{
              borderRadius: 100,
              background: 'rgba(255, 255, 255, 0.05)',
              color: 'rgba(232, 234, 246, 0.5)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              fontSize: 11,
            }}>
              {app.size}
            </Tag>
          </div>
          <Button
            type="link"
            size="small"
            icon={<ArrowRightOutlined />}
            style={{ color: app.color, fontWeight: 600 }}
          >
            View
          </Button>
        </Row>
      </div>
    </Link>
  );
}
