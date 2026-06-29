'use client';

export const dynamic = 'force-dynamic';




import { Typography, Table, Tag, Card, Row, Col } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import { apps, formatPrice } from '@/lib/apps';

const { Title, Paragraph } = Typography;

export default function PricingPage() {
  const tableData = apps.map((app) => ({
    key: app.id,
    app: app.name,
    category: app.category,
    free: formatPrice(app.pricing.free || 0),
    pro: formatPrice(app.pricing.pro || 0),
    premium: formatPrice(app.pricing.premium || 0),
    color: app.color,
  }));

  const columns = [
    {
      title: 'App',
      dataIndex: 'app',
      key: 'app',
      render: (text: string, record: any) => (
        <span style={{ fontWeight: 600, color: record.color }}>{text}</span>
      ),
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Free',
      dataIndex: 'free',
      key: 'free',
      render: (text: string) => <Tag color="green">{text}</Tag>,
    },
    {
      title: 'Pro',
      dataIndex: 'pro',
      key: 'pro',
    },
    {
      title: 'Premium',
      dataIndex: 'premium',
      key: 'premium',
    },
  ];

  const included = [
    '7-day free trial',
    'Cancel anytime',
    '14-day money-back guarantee',
    'No credit card required for Free',
    'Theme App Extension (clean uninstall)',
  ];

  return (
    <div style={{ padding: '80px 24px' }}>
      <div className="container" style={{ maxWidth: 1000, margin: '0 auto' }}>
        <Title level={1} style={{ textAlign: 'center', marginBottom: 8 }}>
          Pricing
        </Title>
        <Paragraph
          style={{
            textAlign: 'center',
            fontSize: 18,
            color: '#6B7280',
            marginBottom: 48,
          }}
        >
          Every app has a free plan. Upgrade when you grow.
        </Paragraph>

        <Card style={{ borderRadius: 12, marginBottom: 32 }}>
          <Table
            dataSource={tableData}
            columns={columns}
            pagination={false}
            size="middle"
          />
        </Card>

        <Row gutter={[16, 16]} justify="center">
          <Col xs={24} sm={12}>
            <Card style={{ textAlign: 'center', borderRadius: 12 }}>
              <Title level={4}>All plans include</Title>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-start', maxWidth: 300, margin: '0 auto' }}>
                {included.map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <CheckCircleOutlined style={{ color: '#00D4AA' }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
