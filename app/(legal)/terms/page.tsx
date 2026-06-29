'use client';

export const dynamic = 'force-dynamic';

import { Typography, Card, Row, Col } from 'antd';

const { Title, Paragraph, Text } = Typography;

export default function TermsPage() {
  const sections = [
    {
      title: 'Acceptance of Terms',
      content: 'By installing or using any ShopKitApps application, you agree to these Terms of Service. If you do not agree, please uninstall the app immediately.',
    },
    {
      title: 'License',
      content: 'We grant you a non-exclusive, non-transferable license to use our apps on your Shopify store for the duration of your subscription. Free plan users receive a perpetual license for free-tier features.',
    },
    {
      title: 'Acceptable Use',
      content: 'You agree to: use our apps only on Shopify stores you own or are authorized to manage, not reverse engineer or redistribute our code, not use our apps for illegal or harmful activities, and comply with all applicable laws and Shopify terms.',
    },
    {
      title: 'Pricing and Billing',
      content: 'Paid plans are billed monthly through Shopify. Pricing is displayed on each app listing and our pricing page. Free plans remain free with no time limit. Paid plans include a 7-day free trial. You can cancel anytime.',
    },
    {
      title: 'Refunds',
      content: 'We offer a 14-day money-back guarantee on all paid plans. If you are not satisfied, contact us at hello@shopkitapps.com for a full refund within 14 days of payment.',
    },
    {
      title: 'Limitation of Liability',
      content: 'Our apps are provided "as is" without warranties of any kind. We are not liable for indirect, incidental, or consequential damages. Our total liability shall not exceed the amount you paid in the 30 days preceding the claim.',
    },
    {
      title: 'Intellectual Property',
      content: 'All apps, code, designs, and content are the intellectual property of ShopKitApps. You retain all rights to your store data and customer information.',
    },
    {
      title: 'Termination',
      content: 'You may cancel your subscription at any time. We reserve the right to terminate service for violations of these terms. Upon termination, Theme App Extensions are cleanly removed from your store.',
    },
    {
      title: 'Changes to Terms',
      content: 'We may update these terms periodically. Continued use after changes constitutes acceptance. We will notify you of significant changes via email.',
    },
  ];

  return (
    <div style={{ padding: '80px 24px' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <Title level={1}>Terms of Service</Title>
        <Text type="secondary">Last updated: June 29, 2026</Text>

        <Card style={{ marginTop: 24, marginBottom: 32, borderRadius: 12, background: '#FFF7E6', borderColor: '#F59E4B30' }}>
          <Paragraph style={{ marginBottom: 0 }}>
            <strong>Please read carefully.</strong> These terms govern your use of all ShopKitApps Shopify applications.
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
          <Title level={5} style={{ color: '#FFFFFF', marginBottom: 8 }}>Need clarification?</Title>
          <Text style={{ color: '#FFFFFFCC' }}>
            Email us at hello@shopkitapps.com with any questions about these terms.
          </Text>
        </Card>
      </div>
    </div>
  );
}
