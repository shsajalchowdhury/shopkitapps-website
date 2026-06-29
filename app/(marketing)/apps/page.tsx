'use client';

export const dynamic = 'force-dynamic';

import { Typography, Row, Col } from 'antd';
import { apps } from '@/lib/apps';
import { AppCard } from '@/components/shared/AppCard';

const { Title, Paragraph } = Typography;

export default function AppsPage() {
  return (
    <div className="bg-mesh-1" style={{ padding: '120px 24px 100px', position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
      <div className="glow-orb" style={{
        top: '5%', right: '10%',
        width: 400, height: 400,
        background: '#00D4AA',
      }} />
      <div className="container" style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="badge-glow" style={{ marginBottom: 20, display: 'inline-flex' }}>
            <span className="badge-dot" />
            All Apps
          </span>
          <h1 style={{
            fontSize: 'clamp(32px, 6vw, 56px)',
            fontWeight: 900, color: '#FFFFFF',
            marginBottom: 16, lineHeight: 1.1,
          }}>
            Every App, Built{' '}
            <span className="text-gradient-brand">Featherweight</span>
          </h1>
          <p style={{
            fontSize: 18, color: 'rgba(232, 234, 246, 0.5)',
            maxWidth: 500, margin: '0 auto',
          }}>
            8 lightweight apps. Each under 20KB. Each with a free plan.
          </p>
        </div>

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
