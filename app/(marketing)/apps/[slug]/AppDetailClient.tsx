'use client';

import {
  Typography,
  Button,
  Row,
  Col,
  Card,
  Tag,
  Statistic,
  Table,
  Collapse,
  Steps,
  Space,
  Rate,
} from 'antd';
import {
  CheckCircleOutlined,
  ArrowRightOutlined,
  ThunderboltOutlined,
  SafetyOutlined,
  RocketOutlined,
  StarOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import { apps, getAppBySlug, getRelatedApps, formatPrice } from '@/lib/apps';
import type { AppData } from '@/lib/apps';
import { AppCard } from '@/components/shared/AppCard';
import { VisualSlot } from '@/components/shared/VisualSlot';
import type { Metadata } from 'next';

const { Title, Paragraph, Text } = Typography;

export function generateStaticParams() {
  return apps.map((app) => ({ slug: app.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const app = getAppBySlug(params.slug);
  if (!app) return { title: 'App Not Found' };

  return {
    title: `${app.name} - ${app.tagline}`,
    description: app.copy.heroSubHeadline,
  };
}

export function AppDetailClient({ app }: { app: AppData }) {
  if (!app) return null;

  const related = getRelatedApps(app.slug, 3);

  const pricingTiers = Object.entries(app.pricing).map(([tier, price]) => ({
    tier: tier.charAt(0).toUpperCase() + tier.slice(1),
    price,
    features: app.features.slice(0, tier === 'free' ? 3 : tier === 'pro' ? 5 : 6),
  }));

  const comparisonData = [
    { feature: 'Script size', [app.name]: app.size, 'Competitor A': '150-200KB', 'Competitor B': '100-150KB' },
    { feature: 'Free plan', [app.name]: 'Yes', 'Competitor A': 'Limited', 'Competitor B': 'No' },
    { feature: 'Scopes needed', [app.name]: app.scopes || 'None', 'Competitor A': '3-5', 'Competitor B': '5-8' },
    { feature: 'Clean uninstall', [app.name]: 'Yes', 'Competitor A': 'No', 'Competitor B': 'No' },
    { feature: 'Theme App Extension', [app.name]: 'Yes', 'Competitor A': 'No', 'Competitor B': 'Partial' },
  ];

  const faqItems = [
    {
      key: '1',
      label: `How does ${app.name} work?`,
      children: app.copy.solution,
    },
    {
      key: '2',
      label: 'Will this slow down my store?',
      children: `No. ${app.name} is only ${app.size}, which is lighter than a single product image. It loads asynchronously.`,
    },
    {
      key: '3',
      label: `Do I need any coding knowledge?`,
      children: 'No. The app works out of the box. Toggle features on or off in the dashboard. No code changes needed.',
    },
    {
      key: '4',
      label: 'What happens when I uninstall?',
      children: 'Nothing breaks. We use Theme App Extensions, so uninstalling cleanly removes everything. No orphaned code.',
    },
    {
      key: '5',
      label: 'Can I use this on any Shopify theme?',
      children: 'Yes. The app works with all themes including Dawn, Impulse, Debutify, and custom themes.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        style={{
          padding: '64px 24px',
          background: `linear-gradient(135deg, ${app.color}08 0%, #FFFFFF 100%)`,
        }}
      >
        <div className="container" style={{ maxWidth: 1200, margin: '0 auto' }}>
          <Row gutter={[48, 32]} align="middle">
            <Col xs={24} lg={14}>
              <Tag color={app.color} style={{ marginBottom: 16, borderRadius: 4 }}>
                {app.category}
              </Tag>
              <Title level={1} style={{ marginBottom: 16, fontSize: 'clamp(28px, 4vw, 42px)' }}>
                {app.copy.heroHeadline}
              </Title>
              <Paragraph
                style={{ fontSize: 18, color: '#6B7280', marginBottom: 32 }}
              >
                {app.copy.heroSubHeadline}
              </Paragraph>
              <Space size="large" wrap>
                <Link href={app.appStoreUrl}>
                  <Button
                    type="primary"
                    size="large"
                    icon={<ArrowRightOutlined />}
                    style={{ background: app.color, borderColor: app.color, height: 52, paddingInline: 32 }}
                  >
                    {app.copy.cta}
                  </Button>
                </Link>
                <Button size="large" href="#how-it-works">
                  See How It Works
                </Button>
              </Space>
              <div style={{ marginTop: 24, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <Tag icon={<CheckCircleOutlined />} color="success">Free Plan</Tag>
                <Tag icon={<CheckCircleOutlined />} color="success">7-Day Pro Trial</Tag>
                <Tag icon={<CheckCircleOutlined />} color="success">Cancel Anytime</Tag>
                <Tag icon={<CheckCircleOutlined />} color="success">No Credit Card</Tag>
              </div>
            </Col>
            <Col xs={24} lg={10}>
              <VisualSlot
                src={undefined}
                alt={`${app.name} hero visual`}
                prompt={`Hero visual for ${app.name}: ${app.tagline}. Brand color: ${app.color}`}
                brandColor={app.color}
                height={320}
              />
            </Col>
          </Row>
        </div>
      </section>

      {/* Metrics Bar */}
      <section
        style={{
          padding: '32px 24px',
          background: '#1A1A2E',
        }}
      >
        <div className="container" style={{ maxWidth: 1200, margin: '0 auto' }}>
          <Row gutter={[16, 16]} justify="center" align="middle">
            <Col xs={12} md={6}>
              <Statistic title="Script Size" value={app.size} valueStyle={{ color: '#FFFFFF' }} />
            </Col>
            <Col xs={12} md={6}>
              <Statistic title="Scopes" value={app.scopes ? app.scopes.split(', ').length : 0} suffix={app.scopes ? 'permissions' : ' - None!'} valueStyle={{ color: '#FFFFFF' }} />
            </Col>
            <Col xs={12} md={6}>
              <Statistic title="Setup" value="1-Click" valueStyle={{ color: '#FFFFFF' }} />
            </Col>
            <Col xs={12} md={6}>
              <Statistic title="Free Plan" value="Yes" valueStyle={{ color: '#00D4AA' }} />
            </Col>
          </Row>
        </div>
      </section>

      {/* Problem + Solution */}
      <section className="section" style={{ padding: '80px 24px' }}>
        <div className="container" style={{ maxWidth: 1000, margin: '0 auto' }}>
          <Row gutter={[32, 32]}>
            <Col xs={24} md={12}>
              <Card
                style={{
                  borderColor: '#EF444430',
                  background: '#EF444408',
                  height: '100%',
                }}
              >
                <Title level={4} style={{ color: '#EF4444', marginBottom: 8 }}>
                  The Problem
                </Title>
                <Paragraph style={{ fontSize: 16, color: '#4B5563' }}>
                  {app.copy.painPoint}
                </Paragraph>
                <VisualSlot
                  src={undefined}
                  alt="Problem illustration"
                  prompt={`Problem visual for ${app.name}: ${app.copy.painPoint}`}
                  brandColor="#EF4444"
                  height={200}
                />
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card
                style={{
                  borderColor: '#00D4AA30',
                  background: '#00D4AA08',
                  height: '100%',
                }}
              >
                <Title level={4} style={{ color: '#00D4AA', marginBottom: 8 }}>
                  Our Solution
                </Title>
                <Paragraph style={{ fontSize: 16, color: '#4B5563' }}>
                  {app.copy.solution}
                </Paragraph>
                <VisualSlot
                  src={undefined}
                  alt="Solution illustration"
                  prompt={`Solution visual for ${app.name}: ${app.copy.solution}`}
                  brandColor="#00D4AA"
                  height={200}
                />
              </Card>
            </Col>
          </Row>
        </div>
      </section>

      {/* Features Deep Dive */}
      <section style={{ padding: '80px 24px', background: '#F8F9FA' }}>
        <div className="container" style={{ maxWidth: 1200, margin: '0 auto' }}>
          <Title level={2} style={{ textAlign: 'center', marginBottom: 48 }}>
            Features That Matter
          </Title>
          <Row gutter={[24, 24]}>
            {app.features.map((feature, idx) => (
              <Col xs={24} sm={12} lg={8} key={feature}>
                <Card style={{ height: '100%', borderRadius: 12 }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 12,
                    }}
                  >
                    <div
                      style={{
                        minWidth: 40,
                        height: 40,
                        borderRadius: 10,
                        background: `${app.color}15`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: app.color,
                        fontSize: 18,
                      }}
                    >
                      <CheckCircleOutlined />
                    </div>
                    <div>
                      <Title level={5} style={{ marginBottom: 4 }}>
                        {feature}
                      </Title>
                      <Text type="secondary" style={{ fontSize: 14 }}>
                        Built to be simple, fast, and reliable.
                      </Text>
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="section" style={{ padding: '80px 24px' }}>
        <div className="container" style={{ maxWidth: 900, margin: '0 auto' }}>
          <Title level={2} style={{ textAlign: 'center', marginBottom: 48 }}>
            How It Works
          </Title>
          <Steps
            current={2}
            direction="vertical"
            items={[
              {
                title: 'Install from Shopify App Store',
                description: 'Click "Add app" on the Shopify App Store listing. Takes 30 seconds.',
                icon: <RocketOutlined />,
              },
              {
                title: 'Configure your settings',
                description: 'Toggle features on or off. Customize colors, messages, and display rules.',
                icon: <SafetyOutlined />,
              },
              {
                title: 'See results automatically',
                description: 'The app runs silently in the background. Check your dashboard for impact.',
                icon: <ThunderboltOutlined />,
              },
            ]}
          />
        </div>
      </section>

      {/* Pricing */}
      <section style={{ padding: '80px 24px', background: '#F8F9FA' }}>
        <div className="container" style={{ maxWidth: 1100, margin: '0 auto' }}>
          <Title level={2} style={{ textAlign: 'center', marginBottom: 8 }}>
            Simple, Transparent Pricing
          </Title>
          <Paragraph style={{ textAlign: 'center', fontSize: 18, color: '#6B7280', marginBottom: 48 }}>
            Start free. Upgrade when you grow.
          </Paragraph>
          <Row gutter={[24, 24]} justify="center">
            {pricingTiers.map((tier, idx) => {
              const isPopular = tier.tier === 'Pro';
              return (
                <Col xs={24} sm={8} key={tier.tier}>
                  <Card
                    style={{
                      height: '100%',
                      borderRadius: 12,
                      borderColor: isPopular ? app.color : '#E5E7EB',
                      borderWidth: isPopular ? 2 : 1,
                      position: 'relative',
                    }}
                  >
                    {isPopular && (
                      <Tag
                        color={app.color}
                        style={{
                          position: 'absolute',
                          top: -12,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          borderRadius: 4,
                        }}
                      >
                        Most Popular
                      </Tag>
                    )}
                    <Title level={4} style={{ marginBottom: 4 }}>
                      {tier.tier}
                    </Title>
                    <Title level={1} style={{ marginBottom: 4, color: app.color }}>
                      {formatPrice(tier.price)}
                    </Title>
                    <div style={{ marginTop: 24, marginBottom: 24 }}>
                      {tier.features.map((f) => (
                        <div
                          key={f}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 8,
                            marginBottom: 8,
                          }}
                        >
                          <CheckCircleOutlined style={{ color: app.color }} />
                          <Text style={{ fontSize: 14 }}>{f}</Text>
                        </div>
                      ))}
                    </div>
                    <Link href={app.appStoreUrl}>
                      <Button
                        block
                        size="large"
                        type={isPopular ? 'primary' : 'default'}
                        style={isPopular ? { background: app.color, borderColor: app.color } : {}}
                      >
                        Start Free Trial
                      </Button>
                    </Link>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section" style={{ padding: '80px 24px' }}>
        <div className="container" style={{ maxWidth: 900, margin: '0 auto' }}>
          <Title level={2} style={{ textAlign: 'center', marginBottom: 32 }}>
            How We Compare
          </Title>
          <Table
            dataSource={comparisonData}
            pagination={false}
            size="middle"
            columns={[
              { title: 'Feature', dataIndex: 'feature', key: 'feature' },
              {
                title: app.name,
                dataIndex: app.name,
                key: app.name,
                render: (val: string) => (
                  <Text strong style={{ color: app.color }}>{val}</Text>
                ),
              },
              { title: 'Competitor A', dataIndex: 'Competitor A', key: 'ca' },
              { title: 'Competitor B', dataIndex: 'Competitor B', key: 'cb' },
            ]}
          />
        </div>
      </section>

      {/* Cross-Sell */}
      {related.length > 0 && (
        <section style={{ padding: '80px 24px', background: '#F8F9FA' }}>
          <div className="container" style={{ maxWidth: 1200, margin: '0 auto' }}>
            <Title level={2} style={{ textAlign: 'center', marginBottom: 48 }}>
              You Might Also Like
            </Title>
            <Row gutter={[24, 24]}>
              {related.map((relApp) => (
                <Col xs={24} sm={8} key={relApp.id}>
                  <AppCard app={relApp} />
                </Col>
              ))}
            </Row>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="section" style={{ padding: '80px 24px' }}>
        <div className="container" style={{ maxWidth: 800, margin: '0 auto' }}>
          <Title level={2} style={{ textAlign: 'center', marginBottom: 48 }}>
            Frequently Asked Questions
          </Title>
          <Collapse
            items={faqItems}
            style={{
              background: '#FFFFFF',
              border: '1px solid #E5E7EB',
              borderRadius: 12,
            }}
          />
        </div>
      </section>

      {/* Final CTA */}
      <section
        style={{
          padding: '80px 24px',
          background: app.color,
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <Title level={2} style={{ color: '#FFFFFF', marginBottom: 16 }}>
            {app.copy.cta}
          </Title>
          <Paragraph style={{ color: '#FFFFFFCC', fontSize: 18, marginBottom: 32 }}>
            Takes 30 seconds. No credit card. Cancel anytime.
          </Paragraph>
          <Link href={app.appStoreUrl}>
            <Button
              size="large"
              style={{
                background: '#FFFFFF',
                borderColor: '#FFFFFF',
                height: 56,
                paddingInline: 32,
                fontSize: 16,
                fontWeight: 600,
              }}
              icon={<ArrowRightOutlined />}
            >
              {app.copy.cta}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
