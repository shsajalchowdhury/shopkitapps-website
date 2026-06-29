'use client';

import React from 'react';
import { Card, Typography, Row, Col, Tag, Space } from 'antd';
import {
  RocketOutlined,
  BookOutlined,
  QuestionCircleOutlined,
  ThunderboltOutlined,
  ArrowRightOutlined,
} from '@ant-design/icons';
import Link from 'next/link';

const { Title, Paragraph, Text } = Typography;

const docCards = [
  {
    key: 'getting-started',
    title: 'Getting Started',
    description: 'Learn how to install, configure, and set up ShopKitApps on your Shopify store in minutes.',
    href: '/docs/getting-started',
    icon: <RocketOutlined style={{ fontSize: 32, color: '#0F3460' }} />,
    tag: 'New here? Start here',
  },
  {
    key: 'app-guides',
    title: 'App Guides',
    description: 'Detailed documentation for every ShopKitApps product: installation, configuration, and troubleshooting.',
    href: '/docs/swiftify',
    icon: <BookOutlined style={{ fontSize: 32, color: '#0F3460' }} />,
    tag: '8 guides',
  },
  {
    key: 'faq',
    title: 'FAQ',
    description: 'Answers to the most common questions about ShopKitApps, pricing, compatibility, and support.',
    href: '/docs/faq',
    icon: <QuestionCircleOutlined style={{ fontSize: 32, color: '#0F3460' }} />,
    tag: '10 questions',
  },
  {
    key: 'changelog',
    title: 'Changelog',
    description: 'Track new features, improvements, and bug fixes across all ShopKitApps products.',
    href: '/docs/changelog',
    icon: <ThunderboltOutlined style={{ fontSize: 32, color: '#0F3460' }} />,
    tag: 'Latest updates',
  },
];

export const dynamic = 'force-dynamic';

export default function DocsPage() {
  return (
    <div>
      <div style={{ marginBottom: 40 }}>
        <Title level={1} style={{ fontSize: 36, fontWeight: 700, color: '#0F3460', marginBottom: 12 }}>
          Documentation
        </Title>
        <Paragraph style={{ fontSize: 16, color: '#666', maxWidth: 600 }}>
          Everything you need to get the most out of ShopKitApps. Browse guides, find answers, and stay updated.
        </Paragraph>
      </div>

      <Row gutter={[24, 24]}>
        {docCards.map((card) => (
          <Col xs={24} sm={12} key={card.key}>
            <Link href={card.href}>
              <Card
                hoverable
                style={{
                  height: '100%',
                  borderColor: '#E8E8E8',
                  borderRadius: 12,
                  transition: 'all 0.3s ease',
                }}
                styles={{ body: { padding: 28 } }}
              >
                <Space direction="vertical" size={16} style={{ width: '100%' }}>
                  {card.icon}
                  <div>
                    <Space align="center" style={{ marginBottom: 8 }}>
                      <Title level={3} style={{ margin: 0, color: '#0F3460' }}>
                        {card.title}
                      </Title>
                    </Space>
                    <Tag
                      color="#00D4AA"
                      style={{ color: '#FFFFFF', border: 'none', marginBottom: 8, fontSize: 12 }}
                    >
                      {card.tag}
                    </Tag>
                  </div>
                  <Paragraph style={{ color: '#666', marginBottom: 0 }}>
                    {card.description}
                  </Paragraph>
                  <Space style={{ color: '#0F3460', fontWeight: 600 }}>
                    <Text strong style={{ color: '#0F3460' }}>
                      Explore
                    </Text>
                    <ArrowRightOutlined style={{ fontSize: 12 }} />
                  </Space>
                </Space>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
}
