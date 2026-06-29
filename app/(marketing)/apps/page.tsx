'use client';

export const dynamic = 'force-dynamic';




import { Typography, Row, Col } from 'antd';
import { apps } from '@/lib/apps';
import { AppCard } from '@/components/shared/AppCard';

const { Title, Paragraph } = Typography;

export default function AppsPage() {
  return (
    <div style={{ padding: '80px 24px' }}>
      <div className="container" style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Title level={1} style={{ textAlign: 'center', marginBottom: 8 }}>
          All Shopify Apps
        </Title>
        <Paragraph
          style={{
            textAlign: 'center',
            fontSize: 18,
            color: '#6B7280',
            marginBottom: 48,
          }}
        >
          8 lightweight apps. Each under 20KB. Each with a free plan.
        </Paragraph>
        <Row gutter={[24, 24]}>
          {apps.map((app) => (
            <Col xs={24} sm={12} lg={6} key={app.id}>
              <AppCard app={app} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
