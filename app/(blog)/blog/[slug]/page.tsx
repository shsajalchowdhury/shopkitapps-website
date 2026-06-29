'use client';

import { useParams, useRouter } from 'next/navigation';
import {
  Typography,
  Tag,
  Row,
  Col,
  Avatar,
  Divider,
  Space,
  Card,
  Button,
  Skeleton,
} from 'antd';
import {
  ClockCircleOutlined,
  CalendarOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  TwitterOutlined,
  LinkedinOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import { getPostBySlug, getRelatedPosts } from '@/lib/blog';

export const dynamic = 'force-dynamic';

const { Title, Paragraph, Text } = Typography;

const categoryColors: Record<string, string> = {
  Speed: '#0F3460',
  Performance: '#00D4AA',
  SEO: '#7C3AED',
  Conversion: '#E11D48',
  UX: '#2563EB',
  Sales: '#059669',
  Security: '#DC2626',
  AI: '#9333EA',
  Communication: '#0891B2',
  Guides: '#D97706',
};

export default function BlogPostPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '120px 24px' }}>
        <Title level={2} style={{ color: '#0F3460' }}>
          Article Not Found
        </Title>
        <Paragraph style={{ color: '#6B7280', marginBottom: 24 }}>
          The article you are looking for does not exist or has been moved.
        </Paragraph>
        <Link href="/blog">
          <Button type="primary" icon={<ArrowLeftOutlined />}>
            Back to Blog
          </Button>
        </Link>
      </div>
    );
  }

  const relatedPosts = getRelatedPosts(slug, 3);
  const catColor = categoryColors[post.category] || '#0F3460';

  return (
    <div style={{ background: '#F8FAFC', minHeight: '100vh' }}>
      {/* Hero Header */}
      <div
        style={{
          background: 'linear-gradient(135deg, #0F3460 0%, #1a4a7a 100%)',
          padding: '80px 24px 64px',
        }}
      >
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <Link href="/blog">
            <Button
              type="text"
              icon={<ArrowLeftOutlined />}
              style={{
                color: 'rgba(255,255,255,0.8)',
                marginBottom: 24,
                padding: '0',
                fontSize: 14,
              }}
            >
              Back to Blog
            </Button>
          </Link>

          <Tag
            style={{
              borderRadius: 16,
              padding: '4px 14px',
              fontSize: 13,
              fontWeight: 600,
              border: 'none',
              background: 'rgba(255,255,255,0.15)',
              color: '#FFFFFF',
              marginBottom: 16,
            }}
          >
            {post.category}
          </Tag>

          <Title
            level={1}
            style={{
              color: '#FFFFFF',
              fontSize: 36,
              fontWeight: 800,
              lineHeight: 1.3,
              marginBottom: 20,
            }}
          >
            {post.title}
          </Title>

          <Paragraph
            style={{
              color: 'rgba(255, 255, 255, 0.85)',
              fontSize: 17,
              lineHeight: 1.7,
              marginBottom: 24,
            }}
          >
            {post.excerpt}
          </Paragraph>

          <Space size={24} align="center">
            <Space size={12} align="center">
              <Avatar
                size={44}
                src={post.author.avatar}
                alt={post.author.name}
              />
              <div>
                <Text
                  style={{
                    display: 'block',
                    color: '#FFFFFF',
                    fontSize: 14,
                    fontWeight: 600,
                    lineHeight: 1.3,
                  }}
                >
                  {post.author.name}
                </Text>
                <Text
                  style={{
                    display: 'block',
                    color: 'rgba(255,255,255,0.7)',
                    fontSize: 13,
                    lineHeight: 1.3,
                  }}
                >
                  {post.author.role}
                </Text>
              </div>
            </Space>

            <Divider type="vertical" style={{ background: 'rgba(255,255,255,0.2)' }} />

            <Space size={6} align="center">
              <CalendarOutlined style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14 }} />
              <Text style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13 }}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </Text>
            </Space>

            <Space size={6} align="center">
              <ClockCircleOutlined style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14 }} />
              <Text style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13 }}>
                {post.readTime}
              </Text>
            </Space>
          </Space>
        </div>
      </div>

      {/* Article Content */}
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '48px 24px' }}>
        <Card
          style={{
            borderRadius: 12,
            border: '1px solid #E5E7EB',
            padding: '12px 0',
          }}
          bodyStyle={{ padding: '32px 40px' }}
        >
          {post.content.map((paragraph, idx) => (
            <Paragraph
              key={idx}
              style={{
                fontSize: 17,
                lineHeight: 1.85,
                color: '#374151',
                marginBottom: idx === post.content.length - 1 ? 0 : 24,
              }}
            >
              {paragraph}
            </Paragraph>
          ))}
        </Card>

        {/* Share Section */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 16,
            marginTop: 32,
          }}
        >
          <Text style={{ color: '#6B7280', fontSize: 14, fontWeight: 500 }}>
            Share this article:
          </Text>
          <Space size={12}>
            <Button
              shape="circle"
              icon={<TwitterOutlined />}
              style={{ border: '1px solid #D1D5DB', color: '#6B7280' }}
            />
            <Button
              shape="circle"
              icon={<LinkedinOutlined />}
              style={{ border: '1px solid #D1D5DB', color: '#6B7280' }}
            />
          </Space>
        </div>

        {/* Author Bio */}
        <Card
          style={{
            marginTop: 40,
            borderRadius: 12,
            border: '1px solid #E5E7EB',
            background: '#FFFFFF',
          }}
          bodyStyle={{ padding: 32 }}
        >
          <Row gutter={[24, 16]} align="middle">
            <Col xs={24} sm={6} md={5} style={{ textAlign: 'center' }}>
              <Avatar
                size={88}
                src={post.author.avatar}
                alt={post.author.name}
                style={{ border: '3px solid #0F3460' }}
              />
            </Col>
            <Col xs={24} sm={18} md={19}>
              <Text
                style={{
                  display: 'block',
                  fontSize: 12,
                  color: '#9CA3AF',
                  textTransform: 'uppercase',
                  letterSpacing: 1,
                  marginBottom: 4,
                }}
              >
                Written by
              </Text>
              <Title
                level={4}
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: '#0F3460',
                  marginBottom: 4,
                }}
              >
                {post.author.name}
              </Title>
              <Text
                style={{
                  display: 'block',
                  fontSize: 13,
                  color: '#00D4AA',
                  fontWeight: 600,
                  marginBottom: 12,
                }}
              >
                {post.author.role}
              </Text>
              <Paragraph
                style={{
                  fontSize: 15,
                  lineHeight: 1.7,
                  color: '#6B7280',
                  marginBottom: 0,
                }}
              >
                {post.author.bio}
              </Paragraph>
            </Col>
          </Row>
        </Card>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 24px 80px' }}>
          <Divider
            style={{ borderColor: '#E5E7EB', marginBottom: 40 }}
          />
          <Title
            level={3}
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: '#0F3460',
              marginBottom: 32,
            }}
          >
            Related Articles
          </Title>

          <Row gutter={[24, 24]}>
            {relatedPosts.map((rp) => (
              <Col xs={24} sm={12} md={8} key={rp.slug}>
                <Link href={`/blog/${rp.slug}`} style={{ display: 'block' }}>
                  <Card
                    hoverable
                    style={{
                      height: '100%',
                      borderRadius: 12,
                      border: '1px solid #E5E7EB',
                    }}
                    bodyStyle={{ padding: 24 }}
                  >
                    <Tag
                      style={{
                        borderRadius: 16,
                        padding: '2px 12px',
                        fontSize: 12,
                        fontWeight: 600,
                        border: 'none',
                        background:
                          (categoryColors[rp.category] || '#0F3460') + '15',
                        color: categoryColors[rp.category] || '#0F3460',
                        marginBottom: 12,
                      }}
                    >
                      {rp.category}
                    </Tag>
                    <Title
                      level={5}
                      style={{
                        fontSize: 16,
                        fontWeight: 700,
                        color: '#0F3460',
                        marginBottom: 8,
                        lineHeight: 1.4,
                      }}
                      ellipsis={{ rows: 2 }}
                    >
                      {rp.title}
                    </Title>
                    <Paragraph
                      style={{
                        color: '#6B7280',
                        fontSize: 13,
                        lineHeight: 1.6,
                        marginBottom: 16,
                      }}
                      ellipsis={{ rows: 2 }}
                    >
                      {rp.excerpt}
                    </Paragraph>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 12,
                          color: '#9CA3AF',
                        }}
                      >
                        {new Date(rp.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                        })}
                      </Text>
                      <Text style={{ fontSize: 12, color: '#D1D5DB' }}>|</Text>
                      <Text style={{ fontSize: 12, color: '#9CA3AF' }}>
                        {rp.readTime}
                      </Text>
                    </div>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </div>
      )}
    </div>
  );
}
