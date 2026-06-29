'use client';

import { Card, Typography, Image } from 'antd';
import { PictureOutlined } from '@ant-design/icons';

const { Text, Paragraph } = Typography;

interface VisualSlotProps {
  src?: string;
  alt: string;
  prompt?: string;
  brandColor: string;
  width?: number | string;
  height?: number | string;
}

/**
 * Displays an image if available, otherwise shows a placeholder
 * with the visual generation prompt so Sajal knows what to create.
 */
export function VisualSlot({
  src,
  alt,
  prompt,
  brandColor,
  width = '100%',
  height = 240,
}: VisualSlotProps) {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        style={{ width, height, objectFit: 'cover', borderRadius: 8 }}
      />
    );
  }

  return (
    <Card
      style={{
        width,
        height,
        border: `2px dashed ${brandColor}40`,
        background: `${brandColor}08`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '1.5rem',
      }}
      bodyStyle={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      }}
    >
      <PictureOutlined style={{ fontSize: 32, color: `${brandColor}60`, marginBottom: 12 }} />
      <Text type="secondary" style={{ fontSize: 14, fontWeight: 500 }}>
        {alt}
      </Text>
      {prompt && (
        <Paragraph
          type="secondary"
          style={{
            fontSize: 11,
            marginTop: 8,
            maxWidth: 300,
            color: '#9CA3AF',
            lineHeight: 1.4,
          }}
        >
          {prompt}
        </Paragraph>
      )}
    </Card>
  );
}
