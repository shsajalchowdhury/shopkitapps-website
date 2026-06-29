'use client';

import React from 'react';
import { Typography, Timeline, Tag, Card, Space } from 'antd';
import {
  RocketOutlined,
  BugOutlined,
  StarOutlined,
  ToolOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

export const dynamic = 'force-dynamic';

const changelogEntries = [
  {
    color: '#00D4AA',
    dot: <RocketOutlined style={{ fontSize: 16 }} />,
    children: (
      <div>
        <Space style={{ marginBottom: 8 }}>
          <Tag color="#00D4AA" style={{ color: '#FFFFFF', border: 'none' }}>v3.2.0</Tag>
          <Text strong style={{ color: '#0F3460' }}>June 24, 2026</Text>
        </Space>
        <div style={{ marginBottom: 12, paddingLeft: 4 }}>
          <Paragraph strong style={{ color: '#0F3460', marginBottom: 8 }}>New: WhatsApp Notifier Now Available</Paragraph>
          <ul style={{ paddingLeft: 20, marginBottom: 0, lineHeight: 1.8 }}>
            <li>Launched WhatsApp Notifier app with order confirmations, shipping updates, and cart recovery via WhatsApp Business API</li>
            <li>Supports templated messages with dynamic variables, images, and CTA buttons</li>
            <li>Includes opt-out compliance links and customer consent management</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    color: '#0F3460',
    dot: <StarOutlined style={{ fontSize: 16 }} />,
    children: (
      <div>
        <Space style={{ marginBottom: 8 }}>
          <Tag color="#0F3460" style={{ color: '#FFFFFF', border: 'none' }}>v3.1.0</Tag>
          <Text strong style={{ color: '#0F3460' }}>June 10, 2026</Text>
        </Space>
        <div style={{ marginBottom: 12, paddingLeft: 4 }}>
          <Paragraph strong style={{ color: '#0F3460', marginBottom: 8 }}>Feature: StoreCraft AI Brand Voice Engine</Paragraph>
          <ul style={{ paddingLeft: 20, marginBottom: 0, lineHeight: 1.8 }}>
            <li>Added Brand Voice setup wizard with preset tones (Professional, Casual, Luxurious, Playful)</li>
            <li>Bulk generation now supports up to 50 products per batch</li>
            <li>New: Automatic alt-text generation for product images</li>
            <li>Improved SEO meta description quality with keyword density optimization</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    color: '#0F3460',
    dot: <ToolOutlined style={{ fontSize: 16 }} />,
    children: (
      <div>
        <Space style={{ marginBottom: 8 }}>
          <Tag color="#0F3460" style={{ color: '#FFFFFF', border: 'none' }}>v3.0.2</Tag>
          <Text strong style={{ color: '#0F3460' }}>May 28, 2026</Text>
        </Space>
        <div style={{ marginBottom: 12, paddingLeft: 4 }}>
          <Paragraph strong style={{ color: '#0F3460', marginBottom: 8 }}>Improvement: FraudShield Risk Engine v2</Paragraph>
          <ul style={{ paddingLeft: 20, marginBottom: 0, lineHeight: 1.8 }}>
            <li>Upaded risk scoring algorithm with 12 new velocity signals</li>
            <li>Added device fingerprinting for repeat offender detection</li>
            <li>Improved allowlist and blocklist management UI</li>
            <li>Reduced false positive rate by 34% compared to v1</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    color: '#FF6B35',
    dot: <BugOutlined style={{ fontSize: 16 }} />,
    children: (
      <div>
        <Space style={{ marginBottom: 8 }}>
          <Tag color="#FF6B35" style={{ color: '#FFFFFF', border: 'none' }}>v3.0.1</Tag>
          <Text strong style={{ color: '#0F3460' }}>May 15, 2026</Text>
        </Space>
        <div style={{ marginBottom: 12, paddingLeft: 4 }}>
          <Paragraph strong style={{ color: '#0F3460', marginBottom: 8 }}>Fixes and Patch Notes</Paragraph>
          <ul style={{ paddingLeft: 20, marginBottom: 0, lineHeight: 1.8 }}>
            <li>Fixed CartPulse progress bar not updating on AJAX cart refresh for Dawn theme v12+</li>
            <li>Resolved PreOrder Manager charge timing override not persisting for individual products</li>
            <li>Fixed RecoverLink SMS quiet hours not respecting customer timezone in edge cases</li>
            <li>Corrected FitForge size chart import failing for CSV files with BOM encoding</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    color: '#00D4AA',
    dot: <RocketOutlined style={{ fontSize: 16 }} />,
    children: (
      <div>
        <Space style={{ marginBottom: 8 }}>
          <Tag color="#00D4AA" style={{ color: '#FFFFFF', border: 'none' }}>v3.0.0</Tag>
          <Text strong style={{ color: '#0F3460' }}>April 30, 2026</Text>
        </Space>
        <div style={{ marginBottom: 12, paddingLeft: 4 }}>
          <Paragraph strong style={{ color: '#0F3460', marginBottom: 8 }}>Major: ShopKitApps v3.0 Platform Launch</Paragraph>
          <ul style={{ paddingLeft: 20, marginBottom: 0, lineHeight: 1.8 }}>
            <li>Complete dashboard redesign with unified navigation across all apps</li>
            <li>Migrated all apps to Theme App Extensions (no more manual code injection)</li>
            <li>New multi-store management: connect and manage unlimited Shopify stores</li>
            <li>Added team member access control with role-based permissions</li>
            <li>New analytics dashboard with cross-app insights and reporting</li>
            <li>Improved OAuth flow with granular scope consent and faster installation</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    color: '#0F3460',
    dot: <CheckCircleOutlined style={{ fontSize: 16 }} />,
    children: (
      <div>
        <Space style={{ marginBottom: 8 }}>
          <Tag color="#0F3460" style={{ color: '#FFFFFF', border: 'none' }}>v2.8.0</Tag>
          <Text strong style={{ color: '#0F3460' }}>April 5, 2026</Text>
        </Space>
        <div style={{ marginBottom: 12, paddingLeft: 4 }}>
          <Paragraph strong style={{ color: '#0F3460', marginBottom: 8 }}>Improvement: Swiftify Performance Optimizations</Paragraph>
          <ul style={{ paddingLeft: 20, marginBottom: 0, lineHeight: 1.8 }}>
            <li>Added "Aggressive Mode" for advanced JavaScript deferral</li>
            <li>New image compression with WebP conversion (saves 35% average file size)</li>
            <li>Implemented critical CSS extraction for above-the-fold rendering</li>
            <li>Added CDN cache purge controls in Settings</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    color: '#0F3460',
    dot: <ToolOutlined style={{ fontSize: 16 }} />,
    children: (
      <div>
        <Space style={{ marginBottom: 8 }}>
          <Tag color="#0F3460" style={{ color: '#FFFFFF', border: 'none' }}>v2.7.0</Tag>
          <Text strong style={{ color: '#0F3460' }}>March 18, 2026</Text>
        </Space>
        <div style={{ marginBottom: 12, paddingLeft: 4 }}>
          <Paragraph strong style={{ color: '#0F3460', marginBottom: 8 }}>Feature: CartPulse Multi-Tier Campaigns</Paragraph>
          <ul style={{ paddingLeft: 20, marginBottom: 0, lineHeight: 1.8 }}>
            <li>Added support for multiple simultaneous incentive campaigns</li>
            <li>New campaign scheduler with start and end dates</li>
            <li>Customer segment targeting (VIP, new, returning)</li>
            <li>A/B testing for incentive offers and messaging</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    color: '#00D4AA',
    dot: <RocketOutlined style={{ fontSize: 16 }} />,
    children: (
      <div>
        <Space style={{ marginBottom: 8 }}>
          <Tag color="#00D4AA" style={{ color: '#FFFFFF', border: 'none' }}>v2.5.0</Tag>
          <Text strong style={{ color: '#0F3460' }}>February 20, 2026</Text>
        </Space>
        <div style={{ marginBottom: 12, paddingLeft: 4 }}>
          <Paragraph strong style={{ color: '#0F3460', marginBottom: 8 }}>New: FitForge AI Size Recommendations</Paragraph>
          <ul style={{ paddingLeft: 20, marginBottom: 0, lineHeight: 1.8 }}>
            <li>Launched FitForge with ML-powered size recommendation engine</li>
            <li>Supports both metric and imperial measurement units</li>
            <li>Brand-specific size chart upload and management</li>
            <li>Confidence threshold configuration (default: 75%)</li>
          </ul>
        </div>
      </div>
    ),
  },
];

export default function ChangelogPage() {
  return (
    <div>
      <div style={{ marginBottom: 40 }}>
        <Tag color="#00D4AA" style={{ color: '#FFFFFF', border: 'none', marginBottom: 12 }}>
          Changelog
        </Tag>
        <Title level={1} style={{ fontSize: 32, fontWeight: 700, color: '#0F3460', marginBottom: 12 }}>
          Product Changelog
        </Title>
        <Paragraph style={{ fontSize: 16, color: '#666', maxWidth: 600 }}>
          New features, improvements, and bug fixes across all ShopKitApps products. Most recent updates are listed first.
        </Paragraph>
      </div>

      <Card style={{ borderColor: '#E8E8E8', borderRadius: 12 }} styles={{ body: { padding: 32 } }}>
        <Timeline items={changelogEntries} />
      </Card>

      <div style={{ marginTop: 32 }}>
        <Space>
          <Tag color="#00D4AA" style={{ color: '#FFFFFF', border: 'none' }}>Major Release</Tag>
          <Tag color="#0F3460" style={{ color: '#FFFFFF', border: 'none' }}>Feature / Improvement</Tag>
          <Tag color="#FF6B35" style={{ color: '#FFFFFF', border: 'none' }}>Bug Fix</Tag>
        </Space>
      </div>
    </div>
  );
}
