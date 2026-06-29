'use client';

export const dynamic = 'force-dynamic';

import { Typography, Row, Col, Card, Button, Statistic, Timeline, Tag } from 'antd';
import {
  ThunderboltOutlined,
  LockOutlined,
  DollarOutlined,
  CodeOutlined,
  RocketOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons';
import Link from 'next/link';

const { Title, Paragraph, Text } = Typography;

const brandColors = {
  primary: '#0F3460',
  success: '#00D4AA',
  error: '#E94560',
};

const containerStyle: React.CSSProperties = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 24px',
};

const heroStyle: React.CSSProperties = {
  background: `linear-gradient(135deg, ${brandColors.primary} 0%, #1a4a7f 100%)`,
  padding: '100px 24px 80px',
  borderRadius: '0 0 24px 24px',
  marginBottom: '64px',
  textAlign: 'center',
};

const heroTitleStyle: React.CSSProperties = {
  color: '#fff',
  fontSize: '48px',
  fontWeight: 800,
  lineHeight: 1.2,
  marginBottom: '24px',
};

const heroSubStyle: React.CSSProperties = {
  color: 'rgba(255, 255, 255, 0.85)',
  fontSize: '20px',
  maxWidth: '700px',
  margin: '0 auto 32px',
  lineHeight: 1.6,
};

const sectionTitleStyle: React.CSSProperties = {
  color: brandColors.primary,
  fontSize: '36px',
  fontWeight: 700,
  textAlign: 'center',
  marginBottom: '16px',
};

const sectionSubStyle: React.CSSProperties = {
  textAlign: 'center',
  fontSize: '18px',
  color: '#666',
  maxWidth: '600px',
  margin: '0 auto 48px',
};

const sectionStyle: React.CSSProperties = {
  marginBottom: '80px',
};

const cardStyle: React.CSSProperties = {
  height: '100%',
  borderRadius: '16px',
  border: '1px solid #f0f0f0',
  boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)',
};

const statCardStyle: React.CSSProperties = {
  textAlign: 'center',
  borderRadius: '16px',
  border: '1px solid #f0f0f0',
  boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)',
  padding: '32px 16px',
};

const ctaStyle: React.CSSProperties = {
  background: `linear-gradient(135deg, ${brandColors.primary} 0%, #1a4a7f 100%)`,
  borderRadius: '24px',
  padding: '64px 32px',
  textAlign: 'center',
  marginBottom: '64px',
};

const valueIconStyle: React.CSSProperties = {
  fontSize: '36px',
  marginBottom: '16px',
};

export default function AboutPage() {
  const values = [
    {
      icon: <ThunderboltOutlined style={{ ...valueIconStyle, color: brandColors.success }} />,
      title: 'Speed First',
      description:
        'Every app we build ships under 20KB. We obsess over performance metrics, load times, and Core Web Vitals. A fast store converts better, and our apps should never slow you down.',
    },
    {
      icon: <LockOutlined style={{ ...valueIconStyle, color: brandColors.primary }} />,
      title: 'Privacy by Default',
      description:
        'No tracking scripts. No third-party analytics. No data selling. Your customer data stays on your store. We collect the minimum needed to make our apps work, and nothing more.',
    },
    {
      icon: <DollarOutlined style={{ ...valueIconStyle, color: brandColors.error }} />,
      title: 'Fair Pricing',
      description:
        'Every app has a free plan. Paid plans are priced fairly based on the value delivered, not what the market will bear. No hidden fees. No surprise overages. Cancel anytime.',
    },
    {
      icon: <CodeOutlined style={{ ...valueIconStyle, color: brandColors.success }} />,
      title: 'Open Development',
      description:
        'We build in the open. Roadmaps are public. Changelogs are detailed. Feature requests are heard. We treat merchants as partners, not just customers on a billing sheet.',
    },
  ];

  const timeline = [
    {
      color: brandColors.primary,
      dot: <RocketOutlined style={{ fontSize: '16px' }} />,
      children: (
        <div>
          <Text strong style={{ fontSize: '18px', color: brandColors.primary }}>
            Early 2025: The Idea
          </Text>
          <Paragraph style={{ marginTop: '8px', color: '#555' }}>
            Frustrated with bloated Shopify apps slowing down stores, we set out to build apps that
            respect performance. The core principle was simple: every app under 20KB, zero external
            dependencies.
          </Paragraph>
        </div>
      ),
    },
    {
      color: brandColors.success,
      dot: <CodeOutlined style={{ fontSize: '16px' }} />,
      children: (
        <div>
          <Text strong style={{ fontSize: '18px', color: brandColors.primary }}>
            Mid 2025: First Apps Ship
          </Text>
          <Paragraph style={{ marginTop: '8px', color: '#555' }}>
            The first apps launched on the Shopify App Store. Each one lightweight, focused, and
            solving a single problem well. No feature creep. No unnecessary complexity.
          </Paragraph>
        </div>
      ),
    },
    {
      color: brandColors.error,
      dot: <ThunderboltOutlined style={{ fontSize: '16px' }} />,
      children: (
        <div>
          <Text strong style={{ fontSize: '18px', color: brandColors.primary }}>
            Late 2025: Growing Catalog
          </Text>
          <Paragraph style={{ marginTop: '8px', color: '#555' }}>
            More apps joined the catalog, each sold individually. Merchants started noticing the
            difference: stores stayed fast, dashboards stayed clean, and support actually responded.
          </Paragraph>
        </div>
      ),
    },
    {
      color: brandColors.success,
      dot: <CheckCircleOutlined style={{ fontSize: '16px' }} />,
      children: (
        <div>
          <Text strong style={{ fontSize: '18px', color: brandColors.primary }}>
            2026: 8 Apps and Counting
          </Text>
          <Paragraph style={{ marginTop: '8px', color: '#555' }}>
            Eight apps live on the App Store, all under 20KB, all with free plans. Thousands of
            stores trust ShopKitApps to power their features without weighing down their storefronts.
          </Paragraph>
        </div>
      ),
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section style={heroStyle}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Title style={heroTitleStyle}>
            We believe Shopify apps should be invisible. Not bloated.
          </Title>
          <Paragraph style={heroSubStyle}>
            Our mission is to give Shopify merchants powerful, focused apps that never compromise
            store speed. Every app we build ships under 20KB with zero bloat and zero paid
            dependencies. Performance is not a feature. It is the foundation.
          </Paragraph>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Tag
              style={{
                fontSize: '14px',
                padding: '6px 16px',
                borderRadius: '20px',
                border: 'none',
                background: 'rgba(0, 212, 170, 0.2)',
                color: '#00D4AA',
              }}
            >
              Under 20KB Per App
            </Tag>
            <Tag
              style={{
                fontSize: '14px',
                padding: '6px 16px',
                borderRadius: '20px',
                border: 'none',
                background: 'rgba(255, 255, 255, 0.15)',
                color: '#fff',
              }}
            >
              Zero Paid Dependencies
            </Tag>
            <Tag
              style={{
                fontSize: '14px',
                padding: '6px 16px',
                borderRadius: '20px',
                border: 'none',
                background: 'rgba(233, 69, 96, 0.2)',
                color: '#E94560',
              }}
            >
              Free Plan on Every App
            </Tag>
          </div>
        </div>
      </section>

      <div style={containerStyle}>
        {/* Story Section */}
        <section style={sectionStyle}>
          <Title style={sectionTitleStyle}>Our Story</Title>
          <Paragraph style={sectionSubStyle}>
            How a frustration with slow Shopify apps became a mission.
          </Paragraph>
          <Row gutter={[48, 24]} align="middle">
            <Col xs={24} md={12}>
              <Paragraph style={{ fontSize: '17px', lineHeight: 1.8, color: '#444' }}>
                ShopKitApps started with a simple observation: Shopify stores were getting slower,
                and the culprit was often the apps themselves. Page after page, script after script,
                apps were piling on weight and dragging down performance.
              </Paragraph>
              <Paragraph style={{ fontSize: '17px', lineHeight: 1.8, color: '#444' }}>
                We knew it did not have to be that way. An app that adds a countdown timer does not
                need a 200KB framework. An app that displays trust badges does not need to load
                three external libraries. So we set out to build Shopify apps the right way:
                lightweight, focused, and fast.
              </Paragraph>
              <Paragraph style={{ fontSize: '17px', lineHeight: 1.8, color: '#444' }}>
                Every app in our catalog is built from scratch with a strict size budget of 20KB or
                less. No jQuery. No moment.js. No bloated SDKs. Just clean, purpose-built code that
                solves one problem and gets out of the way. Each app is sold individually, so you
                only install what you need.
              </Paragraph>
            </Col>
            <Col xs={24} md={12}>
              <Card style={cardStyle} bordered={false}>
                <div style={{ textAlign: 'center', padding: '24px 0' }}>
                  <ThunderboltOutlined
                    style={{ fontSize: '64px', color: brandColors.success, marginBottom: '24px' }}
                  />
                  <Title level={3} style={{ color: brandColors.primary, marginBottom: '12px' }}>
                    The 20KB Promise
                  </Title>
                  <Paragraph style={{ fontSize: '16px', color: '#666', lineHeight: 1.7 }}>
                    Every ShopKitApps product ships under 20KB total. That includes JavaScript, CSS,
                    and assets. If an app cannot meet that budget, we rethink the architecture or we
                    do not ship it. This is not a guideline. It is a rule.
                  </Paragraph>
                  <div
                    style={{
                      display: 'flex',
                      gap: '8px',
                      justifyContent: 'center',
                      flexWrap: 'wrap',
                      marginTop: '16px',
                    }}
                  >
                    <Tag color="green">No jQuery</Tag>
                    <Tag color="blue">No Frameworks</Tag>
                    <Tag color="red">No Bloat</Tag>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </section>

        {/* Stats Section */}
        <section style={sectionStyle}>
          <Title style={sectionTitleStyle}>By the Numbers</Title>
          <Paragraph style={sectionSubStyle}>
            Small footprint. Real results.
          </Paragraph>
          <Row gutter={[24, 24]}>
            <Col xs={12} md={6}>
              <Card style={statCardStyle} bordered={false}>
                <Statistic
                  title="Apps Published"
                  value={8}
                  prefix={<RocketOutlined style={{ color: brandColors.primary }} />}
                  valueStyle={{ color: brandColors.primary, fontWeight: 700 }}
                />
              </Card>
            </Col>
            <Col xs={12} md={6}>
              <Card style={statCardStyle} bordered={false}>
                <Statistic
                  title="Max App Size"
                  value={20}
                  suffix="KB"
                  prefix={<ThunderboltOutlined style={{ color: brandColors.success }} />}
                  valueStyle={{ color: brandColors.success, fontWeight: 700 }}
                />
              </Card>
            </Col>
            <Col xs={12} md={6}>
              <Card style={statCardStyle} bordered={false}>
                <Statistic
                  title="Paid Dependencies"
                  value={0}
                  prefix={<DollarOutlined style={{ color: brandColors.error }} />}
                  valueStyle={{ color: brandColors.error, fontWeight: 700 }}
                />
              </Card>
            </Col>
            <Col xs={12} md={6}>
              <Card style={statCardStyle} bordered={false}>
                <Statistic
                  title="Free Plans"
                  value={8}
                  suffix="/ 8"
                  prefix={<CheckCircleOutlined style={{ color: brandColors.success }} />}
                  valueStyle={{ color: brandColors.success, fontWeight: 700 }}
                />
              </Card>
            </Col>
          </Row>
        </section>

        {/* Values Section */}
        <section style={sectionStyle}>
          <Title style={sectionTitleStyle}>What We Stand For</Title>
          <Paragraph style={sectionSubStyle}>
            Four principles that guide every line of code we write.
          </Paragraph>
          <Row gutter={[24, 24]}>
            {values.map((value, index) => (
              <Col xs={24} sm={12} md={6} key={index}>
                <Card style={cardStyle} bordered={false}>
                  <div style={{ textAlign: 'center' }}>
                    {value.icon}
                    <Title level={4} style={{ color: brandColors.primary, marginBottom: '12px' }}>
                      {value.title}
                    </Title>
                    <Paragraph style={{ color: '#666', fontSize: '15px', lineHeight: 1.7 }}>
                      {value.description}
                    </Paragraph>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </section>

        {/* Timeline Section */}
        <section style={sectionStyle}>
          <Title style={sectionTitleStyle}>Our Journey</Title>
          <Paragraph style={sectionSubStyle}>
            From an idea to a catalog of lightweight apps.
          </Paragraph>
          <div style={{ maxWidth: '700px', margin: '0 auto', padding: '24px 0' }}>
            <Timeline items={timeline} mode="left" />
          </div>
        </section>

        {/* CTA Section */}
        <section style={ctaStyle}>
          <Title level={2} style={{ color: '#fff', marginBottom: '16px' }}>
            Try Our Apps Free
          </Title>
          <Paragraph
            style={{
              color: 'rgba(255, 255, 255, 0.85)',
              fontSize: '18px',
              maxWidth: '500px',
              margin: '0 auto 32px',
            }}
          >
            Every app has a free plan. No credit card required. No trial timer ticking down. Pick
            the apps you need and install them individually.
          </Paragraph>
          <Link href="/apps">
            <Button
              type="primary"
              size="large"
              style={{
                background: brandColors.success,
                border: 'none',
                height: '52px',
                padding: '0 40px',
                fontSize: '16px',
                fontWeight: 600,
                borderRadius: '8px',
              }}
              icon={<RocketOutlined />}
            >
              Browse All Apps
            </Button>
          </Link>
        </section>
      </div>
    </div>
  );
}
