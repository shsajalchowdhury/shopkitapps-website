'use client';

export const dynamic = 'force-dynamic';




import {
  Typography,
  Button,
  Row,
  Col,
  Card,
  Statistic,
  Tag,
  Collapse,
  Steps,
  Space,
  Divider,
} from 'antd';
import {
  ThunderboltOutlined,
  ShoppingCartOutlined,
  LinkOutlined,
  DisconnectOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  RocketOutlined,
  SafetyOutlined,
  CodeOutlined,
  GiftOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import { apps } from '@/lib/apps';
import { AppCard } from '@/components/shared/AppCard';

const { Title, Paragraph, Text } = Typography;

const problems = [
  {
    icon: <ThunderboltOutlined />,
    stat: '7% fewer sales',
    title: 'Slow Store',
    description: 'Every 1 second of delay costs you 7% in conversions',
    color: '#EF4444',
  },
  {
    icon: <ShoppingCartOutlined />,
    stat: '70% abandoned',
    title: 'Cart Abandonment',
    description: 'Most carts are abandoned before checkout',
    color: '#F59E0B',
  },
  {
    icon: <LinkOutlined />,
    stat: '30% of returns',
    title: 'Sizing Returns',
    description: 'Wrong sizing is the top return reason',
    color: '#7C3AED',
  },
  {
    icon: <DisconnectOutlined />,
    stat: '5-15% of traffic',
    title: '404 Errors',
    description: 'Broken links waste your ad spend',
    color: '#EF4444',
  },
];

const differentiators = [
  {
    icon: <RocketOutlined />,
    title: 'Under 20KB Each',
    description: 'Our apps add less weight than a single product image. Competitors add 150-300KB.',
  },
  {
    icon: <SafetyOutlined />,
    title: 'Zero Scopes Needed',
    description: 'Most of our apps need NO data access permissions. Your store stays private.',
  },
  {
    icon: <CodeOutlined />,
    title: 'Theme App Extension',
    description: 'We never edit your theme files. Uninstall means clean removal. No orphaned code.',
  },
  {
    icon: <GiftOutlined />,
    title: 'Free Forever Plans',
    description: 'Every app has a genuinely useful free tier. Not a crippled 7-day trial.',
  },
];

const faqItems = [
  {
    key: '1',
    label: 'Do these apps slow down my store?',
    children: 'No. Each app is under 20KB. Combined, they add less weight than one competitor app. We use Theme App Extensions which are loaded asynchronously by Shopify.',
  },
  {
    key: '2',
    label: 'Can I use these apps on any theme?',
    children: 'Yes. All apps use Shopify Theme App Extensions and work on any theme, including Dawn, Impulse, Debutify, and custom themes.',
  },
  {
    key: '3',
    label: 'What happens if I uninstall?',
    children: 'Nothing breaks. We use Theme App Extensions, so uninstalling cleanly removes everything. No orphaned code, no broken templates.',
  },
  {
    key: '4',
    label: 'Do you offer refunds?',
    children: 'Yes. 14-day money-back guarantee on all paid plans, no questions asked.',
  },
  {
    key: '5',
    label: 'Is there a free plan?',
    children: 'Yes, every app has a free-forever plan with genuine functionality, not just a trial.',
  },
  {
    key: '6',
    label: 'Do you support Shopify Plus?',
    children: 'Yes. All apps work on Shopify Plus. Contact us for Plus-specific volume pricing.',
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Section 1: Hero */}
      <section
        style={{
          padding: '80px 24px',
          background: 'linear-gradient(180deg, #F8F9FA 0%, #FFFFFF 100%)',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <Tag
            color="blue"
            style={{
              fontSize: 14,
              padding: '4px 16px',
              borderRadius: 20,
              marginBottom: 24,
            }}
          >
            8 Lightweight Shopify Apps
          </Tag>
          <Title
            level={1}
            style={{
              fontSize: 'clamp(32px, 6vw, 56px)',
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: 16,
            }}
          >
            Shopify Apps That Don&apos;t Slow You Down
          </Title>
          <Paragraph
            style={{
              fontSize: 'clamp(16px, 2vw, 20px)',
              color: '#6B7280',
              maxWidth: 600,
              margin: '0 auto 32px',
            }}
          >
            Speed, conversion, and growth tools for your store. Each app is under 20KB.
            Zero bloat, zero dependencies.
          </Paragraph>
          <Space size="large" wrap>
            <Link href="/apps">
              <Button type="primary" size="large" icon={<ArrowRightOutlined />}>
                Browse All Apps
              </Button>
            </Link>
            <Link href="/pricing">
              <Button size="large">Compare Pricing</Button>
            </Link>
          </Space>
          <div
            style={{
              marginTop: 32,
              display: 'flex',
              gap: 24,
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <Tag icon={<CheckCircleOutlined />} color="success">Free Plans Available</Tag>
            <Tag icon={<CheckCircleOutlined />} color="success">7-Day Pro Trial</Tag>
            <Tag icon={<CheckCircleOutlined />} color="success">Cancel Anytime</Tag>
          </div>
        </div>
      </section>

      {/* Section 2: Problem Agitation */}
      <section className="section" style={{ padding: '80px 24px' }}>
        <div className="container" style={{ maxWidth: 1200, margin: '0 auto' }}>
          <Title level={2} style={{ textAlign: 'center', marginBottom: 8 }}>
            Your Shopify Store Is Bleeding Money
          </Title>
          <Paragraph
            style={{
              textAlign: 'center',
              fontSize: 18,
              color: '#6B7280',
              marginBottom: 48,
            }}
          >
            Here&apos;s what&apos;s costing you sales right now:
          </Paragraph>
          <Row gutter={[24, 24]}>
            {problems.map((problem) => (
              <Col xs={24} sm={12} lg={6} key={problem.title}>
                <Card
                  style={{
                    height: '100%',
                    borderColor: `${problem.color}30`,
                    borderRadius: 12,
                  }}
                >
                  <div style={{ fontSize: 32, color: problem.color, marginBottom: 16 }}>
                    {problem.icon}
                  </div>
                  <Statistic
                    title={problem.title}
                    value={problem.stat}
                    valueStyle={{ color: problem.color, fontSize: 20 }}
                  />
                  <Text type="secondary" style={{ fontSize: 14 }}>
                    {problem.description}
                  </Text>
                </Card>
              </Col>
            ))}
          </Row>
          <Paragraph
            style={{
              textAlign: 'center',
              fontSize: 18,
              marginTop: 40,
              fontWeight: 500,
            }}
          >
            We built 8 apps that fix all of these. Without adding new problems.
          </Paragraph>
        </div>
      </section>

      {/* Section 3: App Showcase Grid */}
      <section
        style={{
          padding: '80px 24px',
          background: '#F8F9FA',
        }}
      >
        <div className="container" style={{ maxWidth: 1200, margin: '0 auto' }}>
          <Title level={2} style={{ textAlign: 'center', marginBottom: 8 }}>
            One App for Every Problem. All Featherweight.
          </Title>
          <Paragraph
            style={{
              textAlign: 'center',
              fontSize: 18,
              color: '#6B7280',
              marginBottom: 48,
            }}
          >
            Pick what you need. Each app works independently.
          </Paragraph>
          <Row gutter={[24, 24]}>
            {apps.map((app) => (
              <Col xs={24} sm={12} lg={6} key={app.id}>
                <AppCard app={app} />
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* Section 4: Differentiators */}
      <section className="section" style={{ padding: '80px 24px' }}>
        <div className="container" style={{ maxWidth: 1200, margin: '0 auto' }}>
          <Title level={2} style={{ textAlign: 'center', marginBottom: 8 }}>
            Why Our Apps Are Different
          </Title>
          <Paragraph
            style={{
              textAlign: 'center',
              fontSize: 18,
              color: '#6B7280',
              marginBottom: 48,
            }}
          >
            We obsess over what other app makers ignore.
          </Paragraph>
          <Row gutter={[24, 24]}>
            {differentiators.map((item) => (
              <Col xs={24} sm={12} lg={6} key={item.title}>
                <Card
                  style={{
                    height: '100%',
                    borderRadius: 12,
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: 14,
                      background: '#0F346015',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 16px',
                      fontSize: 24,
                      color: '#0F3460',
                    }}
                  >
                    {item.icon}
                  </div>
                  <Title level={4} style={{ marginBottom: 8 }}>
                    {item.title}
                  </Title>
                  <Text type="secondary">{item.description}</Text>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* Section 5: How It Works */}
      <section
        style={{
          padding: '80px 24px',
          background: '#F8F9FA',
        }}
      >
        <div className="container" style={{ maxWidth: 1000, margin: '0 auto' }}>
          <Title level={2} style={{ textAlign: 'center', marginBottom: 48 }}>
            Running in 3 Steps
          </Title>
          <Steps
            current={2}
            items={[
              {
                title: 'Install',
                description: 'Pick an app from Shopify App Store. Click "Add app." Done in 30 seconds.',
                icon: <RocketOutlined />,
              },
              {
                title: 'Configure',
                description: 'Toggle features on. Customize colors and messages. No code needed.',
                icon: <SafetyOutlined />,
              },
              {
                title: 'Results',
                description: 'App works automatically. See results in your dashboard.',
                icon: <CheckCircleOutlined />,
              },
            ]}
          />
        </div>
      </section>

      {/* Section 6: Final CTA */}
      <section
        style={{
          padding: '80px 24px',
          background: '#0F3460',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <Title level={2} style={{ color: '#FFFFFF', marginBottom: 16 }}>
            Ready to Make Your Store Better?
          </Title>
          <Paragraph
            style={{
              color: '#9CA3AF',
              fontSize: 18,
              marginBottom: 32,
            }}
          >
            Free plans. No credit card required. Cancel anytime.
          </Paragraph>
          <Link href="/apps">
            <Button
              type="primary"
              size="large"
              icon={<ArrowRightOutlined />}
              style={{
                background: '#E94560',
                borderColor: '#E94560',
                height: 56,
                paddingInline: 32,
                fontSize: 16,
              }}
            >
              Browse All Apps
            </Button>
          </Link>
        </div>
      </section>

      {/* Section 7: FAQ */}
      <section className="section" style={{ padding: '80px 24px' }}>
        <div className="container" style={{ maxWidth: 800, margin: '0 auto' }}>
          <Title level={2} style={{ textAlign: 'center', marginBottom: 48 }}>
            Questions?
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
    </div>
  );
}
