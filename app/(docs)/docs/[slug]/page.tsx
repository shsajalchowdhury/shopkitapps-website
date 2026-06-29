'use client';

import React from 'react';
import { Typography, Steps, Alert, Card, Tag, Space, Divider } from 'antd';
import { notFound } from 'next/navigation';
import { getDocBySlug } from '@/lib/docs';

const { Title, Paragraph } = Typography;

export const dynamic = 'force-dynamic';

export default function DocSlugPage({ params }: { params: { slug: string } }) {
  const doc = getDocBySlug(params.slug);

  if (!doc) {
    notFound();
  }

  return (
    <div>
      <div style={{ marginBottom: 40 }}>
        <Tag color="#00D4AA" style={{ color: '#FFFFFF', border: 'none', marginBottom: 12 }}>
          {doc.category}
        </Tag>
        <Title level={1} style={{ fontSize: 32, fontWeight: 700, color: '#0F3460', marginBottom: 12 }}>
          {doc.title}
        </Title>
        <Paragraph style={{ fontSize: 16, color: '#666', maxWidth: 640 }}>
          {doc.description}
        </Paragraph>
      </div>

      {doc.sections.map((section, index) => (
        <Card
          key={index}
          style={{ marginBottom: 24, borderColor: '#E8E8E8', borderRadius: 12 }}
          styles={{ body: { padding: 32 } }}
        >
          <Title level={2} style={{ color: '#0F3460', marginBottom: 16, fontSize: 24 }}>
            {section.heading}
          </Title>
          <Paragraph style={{ fontSize: 15, color: '#444', lineHeight: 1.8, marginBottom: section.steps ? 24 : 16 }}>
            {section.body}
          </Paragraph>

          {section.steps && (
            <Steps
              direction="vertical"
              current={section.steps.length}
              items={section.steps.map((step, i) => ({
                title: `Step ${i + 1}`,
                description: step,
              }))}
              style={{ marginTop: 8 }}
            />
          )}

          {section.alert && (
            <Alert
              type={section.alert.type}
              showIcon
              message={section.alert.message}
              style={{ marginTop: 16, borderRadius: 8 }}
            />
          )}
        </Card>
      ))}

      <Divider />

      <Space direction="vertical" size={4} style={{ width: '100%' }}>
        <Paragraph style={{ color: '#999', fontSize: 14, marginBottom: 0 }}>
          Was this guide helpful? Let us know at support@shopkitapps.com
        </Paragraph>
        <Paragraph style={{ color: '#999', fontSize: 14, marginBottom: 0 }}>
          Browse more guides in the <a href="/docs" style={{ color: '#0F3460' }}>Documentation home</a>
        </Paragraph>
      </Space>
    </div>
  );
}
