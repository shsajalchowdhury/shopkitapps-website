'use client';

export const dynamic = 'force-dynamic';

import { Typography, Card, Row, Col, List, Tag } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

export default function PrivacyPage() {
  const sections = [
    {
      title: 'Information We Collect',
      content: 'We collect minimal information necessary to provide our services. This includes: your Shopify store URL, app configuration preferences, and basic analytics data (page views, feature usage). We do NOT collect personal customer data from your store.',
    },
    {
      title: 'How We Use Your Information',
      content: 'Information is used solely to: provide and improve our apps, communicate important updates, troubleshoot technical issues, and analyze aggregate usage patterns. We never sell your data to third parties.',
    },
    {
      title: 'Data Storage',
      content: 'All data is stored securely on encrypted servers. App configuration data is stored within your Shopify store metafields whenever possible, meaning it stays in your Shopify ecosystem.',
    },
    {
      title: 'Cookies',
      content: 'Our marketing website uses essential cookies for analytics and session management. We do not use tracking cookies for advertising. You can disable non-essential cookies at any time via the cookie banner.',
    },
    {
      title: 'Third-Party Services',
      content: 'We use Shopify APIs to deliver app functionality. Shopify handles all payment processing and customer data. We do not have access to your customer payment information.',
    },
    {
      title: 'Data Retention',
      content: 'When you uninstall an app, we remove your data within 30 days. Theme App Extensions are automatically cleaned up by Shopify upon uninstallation.',
    },
    {
      title: 'Your Rights',
      content: 'You have the right to: request a copy of your data, request deletion of your data, object to processing, and file a complaint with a supervisory authority. Contact us at privacy@shopkitapps.com to exercise these rights.',
    },
    {
      title: 'Changes to This Policy',
      content: 'We may update this policy from time to time. We will notify you of significant changes via the email associated with your Shopify account or through in-app notifications.',
    },
  ];

  return (
    <div style={{ padding: '80px 24px' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <Title level={1}>Privacy Policy</Title>
        <Text type="secondary">Last updated: June 29, 2026</Text>

        <Card style={{ marginTop: 24, marginBottom: 32, borderRadius: 12, background: '#F0F7FF', borderColor: '#0F346020' }}>
          <Paragraph style={{ marginBottom: 0 }}>
            <strong>Summary:</strong> We collect the minimum data needed to run our apps. We never sell your data. 
            We respect your privacy and give you full control over your information.
          </Paragraph>
        </Card>

        <Row gutter={[24, 24]}>
          {sections.map((section, idx) => (
            <Col span={24} key={idx}>
              <Card style={{ borderRadius: 12 }}>
                <Title level={4} style={{ marginBottom: 8 }}>{section.title}</Title>
                <Paragraph style={{ marginBottom: 0, color: '#4B5563' }}>{section.content}</Paragraph>
              </Card>
            </Col>
          ))}
        </Row>

        <Card style={{ marginTop: 32, borderRadius: 12, background: '#0F3460', borderColor: '#0F3460' }}>
          <Title level={5} style={{ color: '#FFFFFF', marginBottom: 8 }}>Questions?</Title>
          <Text style={{ color: '#FFFFFFCC' }}>
            Email us at privacy@shopkitapps.com and we will respond within 48 hours.
          </Text>
        </Card>
      </div>
    </div>
  );
}
