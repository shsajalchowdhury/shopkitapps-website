'use client';

import React from 'react';
import { Typography, Collapse, Space, Tag, Alert } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

export const dynamic = 'force-dynamic';

const faqItems = [
  {
    key: '1',
    label: 'What is ShopKitApps?',
    children: (
      <p>
        ShopKitApps is a suite of 8 Shopify apps designed to help merchants optimize their store performance, recover abandoned carts, increase average order value, accept pre-orders, prevent fraud, generate content, and communicate with customers via WhatsApp. Each app can be installed independently based on your needs.
      </p>
    ),
  },
  {
    key: '2',
    label: 'How much does ShopKitApps cost?',
    children: (
      <p>
        Each ShopKitApps product has its own pricing with a free tier available. Free plans include core features with usage limits. Paid plans unlock advanced features, higher limits, and priority support. You can upgrade, downgrade, or cancel any plan at any time from the dashboard.
      </p>
    ),
  },
  {
    key: '3',
    label: 'Which Shopify plans are supported?',
    children: (
      <p>
        ShopKitApps works with all Shopify plans including Shopify Starter, Basic, Shopify, Advanced, and Shopify Plus. Theme App Extensions are compatible with Online Store 2.0 themes. Some features (like custom checkout integrations) are only available on Shopify Plus.
      </p>
    ),
  },
  {
    key: '4',
    label: 'Do I need coding skills to use ShopKitApps?',
    children: (
      <p>
        No. All ShopKitApps products are designed for merchants with no technical background. Installation is a one-click OAuth process, and configuration is done through intuitive dashboard panels. Theme integration uses Shopify App Blocks (drag-and-drop in the Theme Editor) with no code editing required.
      </p>
    ),
  },
  {
    key: '5',
    label: 'Will ShopKitApps slow down my store?',
    children: (
      <p>
        No. All ShopKitApps products use asynchronous loading and Shopify App Bridges to ensure zero impact on your store performance. Swiftify (our speed optimization app) actively improves your load times. Apps only inject resources on pages where they are active, and assets are served via Shopify CDN.
      </p>
    ),
  },
  {
    key: '6',
    label: 'Can I use ShopKitApps on multiple stores?',
    children: (
      <p>
        Yes. You can connect multiple Shopify stores to a single ShopKitApps account. Each store has independent settings, analytics, and billing. Manage all your stores from one dashboard. Volume discounts are available for merchants managing 3 or more stores.
      </p>
    ),
  },
  {
    key: '7',
    label: 'Is my data secure with ShopKitApps?',
    children: (
      <p>
        Yes. ShopKitApps is GDPR compliant and SOC 2 Type II certified. All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We never store payment information and only access the Shopify scopes you explicitly approve. You can request a full data export or deletion at any time.
      </p>
    ),
  },
  {
    key: '8',
    label: 'What happens to my data if I uninstall an app?',
    children: (
      <p>
        When you uninstall a ShopKitApps product, your data (settings, configurations, analytics) is retained for 30 days in case you reinstall. After 30 days, all associated data is permanently deleted from our servers. Theme modifications made by the app are automatically removed when you uninstall.
      </p>
    ),
  },
  {
    key: '9',
    label: 'How do I get support?',
    children: (
      <p>
        ShopKitApps offers support via three channels: (1) In-app live chat Monday through Friday 9 AM to 6 PM CET, (2) Email support at support@shopkitapps.com with a typical response time of 4 hours, and (3) Priority support for paid plans with guaranteed 1-hour response times. Free plan users have access to documentation and community forums.
      </p>
    ),
  },
  {
    key: '10',
    label: 'Can I customize the apps to match my brand?',
    children: (
      <p>
        Yes. Every ShopKitApps product offers extensive customization options. You can adjust colors, fonts, button text, widget placement, and messaging to match your brand identity. Higher-tier plans support custom CSS injection and white-label options for a fully branded experience.
      </p>
    ),
  },
];

export default function FAQPage() {
  return (
    <div>
      <div style={{ marginBottom: 40 }}>
        <Tag color="#00D4AA" style={{ color: '#FFFFFF', border: 'none', marginBottom: 12 }}>
          FAQ
        </Tag>
        <Title level={1} style={{ fontSize: 32, fontWeight: 700, color: '#0F3460', marginBottom: 12 }}>
          Frequently Asked Questions
        </Title>
        <Paragraph style={{ fontSize: 16, color: '#666', maxWidth: 600 }}>
          Answers to common questions about ShopKitApps products, pricing, compatibility, and support.
        </Paragraph>
      </div>

      <Alert
        type="info"
        showIcon
        message="Can't find what you're looking for?"
        description="Email us at support@shopkitapps.com and we will get back to you within 4 hours."
        style={{ marginBottom: 32, borderRadius: 8 }}
      />

      <Collapse
        items={faqItems}
        accordion
        style={{
          background: '#FFFFFF',
          borderRadius: 12,
          border: '1px solid #E8E8E8',
        }}
      />

      <div style={{ marginTop: 40, textAlign: 'center' }}>
        <Space direction="vertical" size={8}>
          <QuestionCircleOutlined style={{ fontSize: 40, color: '#0F3460' }} />
          <Paragraph style={{ color: '#666', marginBottom: 0 }}>
            Still have questions? Our team is here to help.
          </Paragraph>
          <a
            href="mailto:support@shopkitapps.com"
            style={{ color: '#0F3460', fontWeight: 600, fontSize: 16 }}
          >
            support@shopkitapps.com
          </a>
        </Space>
      </div>
    </div>
  );
}
