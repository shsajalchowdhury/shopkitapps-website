'use client';

import { Card, Tag, Button, Typography, Row, Col } from 'antd';
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
    <Link href={`/apps/${app.slug}`}>
      <Card
        hoverable
        style={{
          height: '100%',
          borderColor: '#E5E7EB',
          borderRadius: 12,
          overflow: 'hidden',
          transition: 'all 0.2s ease',
        }}
        styles={{
          body: { padding: 24 },
        }}
      >
        {/* Icon + Category */}
        <Row align="middle" justify="space-between" style={{ marginBottom: 16 }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: `${app.color}15`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: app.color,
              fontSize: 22,
            }}
          >
            {iconMap[app.icon] || <ThunderboltOutlined />}
          </div>
          <Tag color={app.color} style={{ borderRadius: 4 }}>
            {app.category}
          </Tag>
        </Row>

        {/* Name + Tagline */}
        <Title level={4} style={{ marginBottom: 4, marginTop: 0 }}>
          {app.name}
        </Title>
        <Text type="secondary" style={{ fontSize: 14, display: 'block', marginBottom: 16 }}>
          {app.tagline}
        </Text>

        {/* Features (first 3) */}
        <div style={{ marginBottom: 20 }}>
          {app.features.slice(0, 3).map((feature) => (
            <div
              key={feature}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                marginBottom: 6,
              }}
            >
              <CheckCircleOutlined style={{ color: app.color, fontSize: 14 }} />
              <Text style={{ fontSize: 13, color: '#4B5563' }}>{feature}</Text>
            </div>
          ))}
        </div>

        {/* Footer */}
        <Row align="middle" justify="space-between">
          <div style={{ display: 'flex', gap: 8 }}>
            <Tag color="green">Free Plan</Tag>
            <Tag>{app.size}</Tag>
          </div>
          <Button type="link" size="small" icon={<ArrowRightOutlined />}>
            View
          </Button>
        </Row>
      </Card>
    </Link>
  );
}
