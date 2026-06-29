'use client';

export const dynamic = 'force-dynamic';

import {
  Typography,
  Button,
  Row,
  Col,
  Statistic,
  Tag,
  Collapse,
  Steps,
  Space,
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
  BulbOutlined,
  HeartOutlined,
  ToolOutlined,
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
    glow: 'rgba(239, 68, 68, 0.15)',
  },
  {
    icon: <ShoppingCartOutlined />,
    stat: '70% abandoned',
    title: 'Cart Abandonment',
    description: 'Most carts are abandoned before checkout completes',
    color: '#F59E0B',
    glow: 'rgba(245, 158, 11, 0.15)',
  },
  {
    icon: <LinkOutlined />,
    stat: '30% of returns',
    title: 'Sizing Returns',
    description: 'Wrong sizing is the number one return reason',
    color: '#7C3AED',
    glow: 'rgba(124, 58, 237, 0.15)',
  },
  {
    icon: <DisconnectOutlined />,
    stat: '5-15% of traffic',
    title: '404 Errors',
    description: 'Broken links silently waste your ad spend',
    color: '#EF4444',
    glow: 'rgba(239, 68, 68, 0.15)',
  },
];

const differentiators = [
  {
    icon: <RocketOutlined />,
    title: 'Under 20KB Each',
    description: 'Our apps add less weight than a single product image. Competitors add 150-300KB.',
    gradient: 'linear-gradient(135deg, #00D4AA, #00A3D4)',
  },
  {
    icon: <SafetyOutlined />,
    title: 'Zero Data Scopes',
    description: 'Most of our apps need NO data access permissions. Your store stays completely private.',
    gradient: 'linear-gradient(135deg, #4FC3F7, #7C3AED)',
  },
  {
    icon: <CodeOutlined />,
    title: 'Theme App Extension',
    description: 'We never edit your theme files. Uninstall means clean removal. Zero orphaned code.',
    gradient: 'linear-gradient(135deg, #FFD93D, #FF6B6B)',
  },
  {
    icon: <GiftOutlined />,
    title: 'Free Forever Plans',
    description: 'Every app has a genuinely useful free tier. Not a crippled 7-day trial.',
    gradient: 'linear-gradient(135deg, #FF6B9D, #FFD93D)',
  },
];

const stats = [
  { value: 8, label: 'Production Apps', suffix: '' },
  { value: 20, label: 'KB Max Size', suffix: 'KB' },
  { value: 0, label: 'Paid Dependencies', suffix: '' },
  { value: 100, label: 'Free Tier Coverage', suffix: '%' },
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
    <div style={{ background: '#0A0E27' }}>
      {/* ========================================
          HERO SECTION
          ======================================== */}
      <section
        className="bg-mesh-1"
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          padding: '120px 24px 80px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Grid background pattern */}
        <div className="grid-pattern" style={{
          position: 'absolute', inset: 0,
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
        }} />

        {/* Floating glow orbs */}
        <div className="glow-orb animate-float-slow" style={{
          top: '10%', right: '5%',
          width: 400, height: 400,
          background: '#00D4AA',
        }} />
        <div className="glow-orb animate-float" style={{
          bottom: '10%', left: '5%',
          width: 350, height: 350,
          background: '#0F3460',
        }} />

        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          {/* Badge */}
          <div className="animate-fadeInUp" style={{ marginBottom: 32 }}>
            <span className="badge-glow">
              <span className="badge-dot" />
              8 Lightweight Shopify Apps
            </span>
          </div>

          {/* Headline */}
          <h1
            className="animate-fadeInUp delay-200"
            style={{
              fontSize: 'clamp(36px, 7vw, 72px)',
              fontWeight: 900,
              lineHeight: 1.05,
              marginBottom: 24,
              color: '#FFFFFF',
              letterSpacing: '-0.02em',
            }}
          >
            Shopify Apps That
            <br />
            <span className="text-gradient-brand">Don&apos;t Slow You Down</span>
          </h1>

          {/* Subheadline */}
          <p
            className="animate-fadeInUp delay-300"
            style={{
              fontSize: 'clamp(16px, 2vw, 22px)',
              color: 'rgba(232, 234, 246, 0.6)',
              maxWidth: 650,
              margin: '0 auto 40px',
              lineHeight: 1.6,
            }}
          >
            Speed, conversion, and growth tools for your store.
            Each app is under 20KB. Zero bloat, zero dependencies.
          </p>

          {/* CTAs */}
          <div className="animate-fadeInUp delay-400" style={{ marginBottom: 48 }}>
            <Space size="large" wrap>
              <Link href="/apps">
                <Button
                  type="primary"
                  size="large"
                  icon={<ArrowRightOutlined />}
                  className="btn-glow"
                  style={{ height: 56, paddingInline: 36, fontSize: 16, borderRadius: 14 }}
                >
                  Browse All Apps
                </Button>
              </Link>
              <Link href="/pricing">
                <Button
                  size="large"
                  ghost
                  style={{
                    height: 56, paddingInline: 36, fontSize: 16, borderRadius: 14,
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                    color: '#E8EAF6',
                  }}
                >
                  Compare Pricing
                </Button>
              </Link>
            </Space>
          </div>

          {/* Trust badges */}
          <div className="animate-fadeInUp delay-500" style={{
            display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap',
          }}>
            {['Free Plans Available', '7-Day Pro Trial', 'Cancel Anytime', 'No Credit Card Required'].map((item) => (
              <div key={item} style={{
                display: 'flex', alignItems: 'center', gap: 6,
                color: 'rgba(232, 234, 246, 0.5)', fontSize: 14,
              }}>
                <CheckCircleOutlined style={{ color: '#00D4AA' }} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          STATS BAR
          ======================================== */}
      <section style={{
        padding: '60px 24px',
        background: '#0D1129',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
      }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <Row gutter={[48, 32]}>
            {stats.map((stat, idx) => (
              <Col xs={12} lg={6} key={idx} style={{ textAlign: 'center' }}>
                <div className="animate-fadeInUp" style={{
                  animationDelay: `${idx * 0.1}s`,
                  opacity: 0,
                }}>
                  <div style={{
                    fontSize: 'clamp(32px, 5vw, 48px)',
                    fontWeight: 900,
                    background: 'linear-gradient(135deg, #00D4AA 0%, #4FC3F7 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    lineHeight: 1,
                    marginBottom: 8,
                  }}>
                    {stat.value}{stat.suffix}
                  </div>
                  <div style={{
                    color: 'rgba(232, 234, 246, 0.4)',
                    fontSize: 13,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                  }}>
                    {stat.label}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* ========================================
          PROBLEM SECTION
          ======================================== */}
      <section className="section bg-mesh-2" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="dot-pattern" style={{
          position: 'absolute', inset: 0, opacity: 0.5,
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <span className="badge-glow" style={{ marginBottom: 20, display: 'inline-flex' }}>
              The Problem
            </span>
            <h2 style={{
              fontSize: 'clamp(28px, 5vw, 44px)',
              fontWeight: 800,
              color: '#FFFFFF',
              marginBottom: 16,
            }}>
              Your Store Is Bleeding Money
            </h2>
            <p style={{
              fontSize: 18,
              color: 'rgba(232, 234, 246, 0.5)',
              maxWidth: 500,
              margin: '0 auto',
            }}>
              Here is what is quietly costing you sales right now:
            </p>
          </div>

          <Row gutter={[24, 24]}>
            {problems.map((problem, idx) => (
              <Col xs={24} sm={12} lg={6} key={problem.title}>
                <div
                  className="feature-card animate-fadeInUp"
                  style={{
                    animationDelay: `${idx * 0.1}s`,
                    opacity: 0,
                    textAlign: 'center',
                  }}
                >
                  <div style={{
                    width: 64, height: 64, borderRadius: 18,
                    background: `linear-gradient(135deg, ${problem.glow}, transparent)`,
                    border: `1px solid ${problem.color}30`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 28, color: problem.color,
                    margin: '0 auto 20px',
                  }}>
                    {problem.icon}
                  </div>
                  <div style={{
                    fontSize: 24, fontWeight: 800, color: problem.color,
                    marginBottom: 8,
                  }}>
                    {problem.stat}
                  </div>
                  <div style={{
                    fontSize: 16, fontWeight: 600, color: '#FFFFFF',
                    marginBottom: 6,
                  }}>
                    {problem.title}
                  </div>
                  <Text style={{ fontSize: 14, color: 'rgba(232, 234, 246, 0.45)' }}>
                    {problem.description}
                  </Text>
                </div>
              </Col>
            ))}
          </Row>

          <div style={{ textAlign: 'center', marginTop: 56 }}>
            <p style={{
              fontSize: 20, fontWeight: 600,
              color: '#FFFFFF',
            }}>
              We built 8 apps that fix all of these.{' '}
              <span className="text-gradient-brand">Without adding new problems.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ========================================
          APP SHOWCASE
          ======================================== */}
      <section className="section" style={{ background: '#0A0E27', position: 'relative', overflow: 'hidden' }}>
        <div className="glow-orb" style={{
          top: '20%', right: '-5%',
          width: 500, height: 500,
          background: '#0F3460',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="badge-glow" style={{ marginBottom: 20, display: 'inline-flex' }}>
              <span className="badge-dot" />
              Our Apps
            </span>
            <h2 style={{
              fontSize: 'clamp(28px, 5vw, 44px)',
              fontWeight: 800,
              color: '#FFFFFF',
              marginBottom: 16,
            }}>
              One App for Every Problem
            </h2>
            <p style={{
              fontSize: 18, color: 'rgba(232, 234, 246, 0.5)',
              maxWidth: 500, margin: '0 auto',
            }}>
              Pick what you need. Each app works independently.
            </p>
          </div>

          <Row gutter={[24, 24]}>
            {apps.map((app) => (
              <Col xs={24} sm={12} lg={6} key={app.id}>
                <AppCard app={app} />
              </Col>
            ))}
          </Row>

          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <Link href="/apps">
              <Button
                type="primary"
                size="large"
                icon={<ArrowRightOutlined />}
                className="btn-glow"
                style={{ height: 52, paddingInline: 32, fontSize: 15, borderRadius: 12 }}
              >
                View All Apps
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================
          DIFFERENTIATORS
          ======================================== */}
      <section className="section bg-mesh-1" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="grid-pattern" style={{
          position: 'absolute', inset: 0, opacity: 0.3,
          maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 60%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 60%)',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <span className="badge-glow" style={{ marginBottom: 20, display: 'inline-flex' }}>
              Why Choose Us
            </span>
            <h2 style={{
              fontSize: 'clamp(28px, 5vw, 44px)',
              fontWeight: 800, color: '#FFFFFF', marginBottom: 16,
            }}>
              Why Our Apps Are Different
            </h2>
            <p style={{
              fontSize: 18, color: 'rgba(232, 234, 246, 0.5)',
              maxWidth: 500, margin: '0 auto',
            }}>
              We obsess over what other app makers ignore.
            </p>
          </div>

          <Row gutter={[24, 24]}>
            {differentiators.map((item, idx) => (
              <Col xs={24} sm={12} lg={6} key={item.title}>
                <div
                  className="feature-card animate-fadeInUp"
                  style={{
                    animationDelay: `${idx * 0.1}s`,
                    opacity: 0,
                    textAlign: 'center',
                  }}
                >
                  <div style={{
                    width: 64, height: 64, borderRadius: 18,
                    background: item.gradient,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 28, color: '#FFFFFF',
                    margin: '0 auto 24px',
                    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3)',
                  }}>
                    {item.icon}
                  </div>
                  <h3 style={{
                    fontSize: 18, fontWeight: 700, color: '#FFFFFF',
                    marginBottom: 12,
                  }}>
                    {item.title}
                  </h3>
                  <Text style={{ fontSize: 14, color: 'rgba(232, 234, 246, 0.5)', lineHeight: 1.7 }}>
                    {item.description}
                  </Text>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* ========================================
          HOW IT WORKS
          ======================================== */}
      <section className="section" style={{ background: '#0D1129', position: 'relative' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <span className="badge-glow" style={{ marginBottom: 20, display: 'inline-flex' }}>
              Quick Start
            </span>
            <h2 style={{
              fontSize: 'clamp(28px, 5vw, 44px)',
              fontWeight: 800, color: '#FFFFFF',
            }}>
              Running in 3 Steps
            </h2>
          </div>

          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <Steps
              current={2}
              direction="horizontal"
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
        </div>
      </section>

      {/* ========================================
          CTA SECTION
          ======================================== */}
      <section className="bg-gradient-cta" style={{
        padding: '100px 24px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div className="glow-orb animate-pulse-soft" style={{
          top: '0', left: '50%', transform: 'translateX(-50%)',
          width: 600, height: 300,
          background: '#00D4AA',
        }} />
        <div className="dot-pattern" style={{
          position: 'absolute', inset: 0, opacity: 0.2,
        }} />

        <div style={{ maxWidth: 700, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <h2 style={{
            fontSize: 'clamp(32px, 6vw, 56px)',
            fontWeight: 900, color: '#FFFFFF',
            marginBottom: 20, lineHeight: 1.1,
          }}>
            Ready to Make Your
            <br />
            <span className="text-gradient-brand">Store Better?</span>
          </h2>
          <p style={{
            fontSize: 20, color: 'rgba(232, 234, 246, 0.5)',
            marginBottom: 40,
          }}>
            Free plans. No credit card required. Cancel anytime.
          </p>
          <Space size="large" wrap>
            <Link href="/apps">
              <Button
                type="primary"
                size="large"
                icon={<ArrowRightOutlined />}
                className="btn-glow"
                style={{ height: 60, paddingInline: 40, fontSize: 17, borderRadius: 14 }}
              >
                Browse All Apps
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="large"
                ghost
                style={{
                  height: 60, paddingInline: 40, fontSize: 17, borderRadius: 14,
                  borderColor: 'rgba(255, 255, 255, 0.2)', color: '#E8EAF6',
                }}
              >
                Talk to Us
              </Button>
            </Link>
          </Space>
        </div>
      </section>

      {/* ========================================
          FAQ SECTION
          ======================================== */}
      <section className="section" style={{ background: '#0A0E27' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="badge-glow" style={{ marginBottom: 20, display: 'inline-flex' }}>
              FAQ
            </span>
            <h2 style={{
              fontSize: 'clamp(28px, 5vw, 44px)',
              fontWeight: 800, color: '#FFFFFF',
            }}>
              Questions?
            </h2>
          </div>

          <Collapse
            items={faqItems}
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: 16,
              overflow: 'hidden',
            }}
          />
        </div>
      </section>
    </div>
  );
}
