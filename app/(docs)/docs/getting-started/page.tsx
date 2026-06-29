'use client';

import React from 'react';
import { Typography, Steps, Alert, Card, Divider, Tag, Space } from 'antd';
import {
  ShopOutlined,
  SettingOutlined,
  CodeOutlined,
  DeleteOutlined,
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

export const dynamic = 'force-dynamic';

export default function GettingStartedPage() {
  return (
    <div>
      <div style={{ marginBottom: 40 }}>
        <Tag color="#00D4AA" style={{ color: '#FFFFFF', border: 'none', marginBottom: 12 }}>
          Getting Started
        </Tag>
        <Title level={1} style={{ fontSize: 32, fontWeight: 700, color: '#0F3460', marginBottom: 12 }}>
          Getting Started with ShopKitApps
        </Title>
        <Paragraph style={{ fontSize: 16, color: '#666', maxWidth: 640 }}>
          Follow this guide to install ShopKitApps on your Shopify store, configure your settings, and start using Theme App Extensions in minutes.
        </Paragraph>
      </div>

      <Card style={{ marginBottom: 32, borderColor: '#E8E8E8', borderRadius: 12 }} styles={{ body: { padding: 32 } }}>
        <Space align="center" style={{ marginBottom: 24 }}>
          <ShopOutlined style={{ fontSize: 24, color: '#0F3460' }} />
          <Title level={2} style={{ margin: 0, color: '#0F3460' }}>Installation</Title>
        </Space>

        <Steps
          direction="vertical"
          current={3}
          items={[
            {
              title: 'Choose Your Apps',
              description: 'Browse the ShopKitApps dashboard and select the apps you want to install. Each app can be installed independently, so you only add what you need. Click "Install" on any app to begin the OAuth flow.',
            },
            {
              title: 'Authorize with Shopify',
              description: 'You will be redirected to the Shopify OAuth consent screen. Review the requested scopes (such as read_products or write_theme) and click "Install App" to grant permissions for your store.',
            },
            {
              title: 'Enable Theme App Extensions',
              description: 'After authorization, go to your Shopify admin > Online Store > Themes > Customize > App Embeds and toggle on the newly installed ShopKitApps extensions. This step injects the app widgets into your theme without code changes.',
            },
          ]}
        />
      </Card>

      <Card style={{ marginBottom: 32, borderColor: '#E8E8E8', borderRadius: 12 }} styles={{ body: { padding: 32 } }}>
        <Space align="center" style={{ marginBottom: 24 }}>
          <SettingOutlined style={{ fontSize: 24, color: '#0F3460' }} />
          <Title level={2} style={{ margin: 0, color: '#0F3460' }}>Configuration</Title>
        </Space>

        <Paragraph style={{ fontSize: 15, color: '#444', marginBottom: 16 }}>
          Each ShopKitApps product has its own configuration panel accessible from the dashboard sidebar. Common settings you can configure across apps include:
        </Paragraph>

        <ul style={{ paddingLeft: 24, marginBottom: 16, lineHeight: 2 }}>
          <li><Text strong>Display settings:</Text> Customize widget placement, colors, and text to match your brand.</li>
          <li><Text strong>Behavior rules:</Text> Set triggers, thresholds, and conditions for when each app activates.</li>
          <li><Text strong>Notifications:</Text> Configure email, SMS, or WhatsApp alerts for key events.</li>
          <li><Text strong>Performance:</Text> Enable caching, lazy loading, and CDN delivery for optimal speed.</li>
          <li><Text strong>Access control:</Text> Manage team members and their permission levels per app.</li>
        </ul>

        <Alert
          type="info"
          showIcon
          message="Configuration changes apply instantly"
          description="Most settings take effect immediately on your live store. Changes that require theme modification may take up to 60 seconds to propagate through the Shopify CDN."
          style={{ marginTop: 16 }}
        />
      </Card>

      <Card style={{ marginBottom: 32, borderColor: '#E8E8E8', borderRadius: 12 }} styles={{ body: { padding: 32 } }}>
        <Space align="center" style={{ marginBottom: 24 }}>
          <CodeOutlined style={{ fontSize: 24, color: '#0F3460' }} />
          <Title level={2} style={{ margin: 0, color: '#0F3460' }}>Theme App Extensions</Title>
        </Space>

        <Paragraph style={{ fontSize: 15, color: '#444', marginBottom: 16 }}>
          ShopKitApps uses Shopify Theme App Extensions (the modern, safe way to inject functionality into themes). This means:
        </Paragraph>

        <ul style={{ paddingLeft: 24, marginBottom: 16, lineHeight: 2 }}>
          <li><Text strong>No code editing required:</Text> App blocks are added via the Shopify Theme Editor drag-and-drop interface.</li>
          <li><Text strong>No leftover code:</Text> When you uninstall, all app code is automatically removed from your theme.</li>
          <li><Text strong>Theme compatible:</Text> Works with all Shopify-supported themes ( Dawn, Sense, Refresh, and most custom themes).</li>
          <li><Text strong>Performance safe:</Text> Extensions load asynchronously and do not block your theme rendering.</li>
        </ul>

        <Alert
          type="success"
          showIcon
          message="App Embeds must be enabled"
          description="After installation, go to Online Store > Themes > Customize > App Embeds and toggle on each ShopKitApps extension. The app will not function until this is enabled."
          style={{ marginTop: 16 }}
        />
      </Card>

      <Card style={{ marginBottom: 32, borderColor: '#E8E8E8', borderRadius: 12 }} styles={{ body: { padding: 32 } }}>
        <Space align="center" style={{ marginBottom: 24 }}>
          <DeleteOutlined style={{ fontSize: 24, color: '#0F3460' }} />
          <Title level={2} style={{ margin: 0, color: '#0F3460' }}>Uninstalling</Title>
        </Space>

        <Paragraph style={{ fontSize: 15, color: '#444', marginBottom: 16 }}>
          To uninstall a ShopKitApps product from your store:
        </Paragraph>

        <ol style={{ paddingLeft: 24, marginBottom: 16, lineHeight: 2 }}>
          <li>Go to your Shopify admin {'>'} Apps and click "Remove" next to the ShopKitApps product you want to uninstall.</li>
          <li>Confirm the removal. Shopify will revoke all granted scopes for that app.</li>
          <li>Navigate to Online Store {'>'} Themes {'>'} Customize {'>'} App Embeds and toggle off the corresponding extension.</li>
          <li>Optionally remove any app blocks from your theme templates via the Theme Editor.</li>
        </ol>

        <Alert
          type="warning"
          showIcon
          message="Data retention"
          description="Your app data (settings, configurations, analytics) is retained for 30 days after uninstallation in case you reinstall. After 30 days, all data is permanently deleted."
          style={{ marginTop: 16 }}
        />
      </Card>

      <Divider />
      <Paragraph style={{ color: '#999', fontSize: 14 }}>
        Need more help? Visit our <a href="/docs/faq" style={{ color: '#0F3460' }}>FAQ</a> or contact support at support@shopkitapps.com
      </Paragraph>
    </div>
  );
}
