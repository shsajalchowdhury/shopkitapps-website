'use client';

import { List, Card, Typography, Tag, Row, Col, Avatar, Space } from 'antd';
import {
  ClockCircleOutlined,
  CalendarOutlined,
  ArrowRightOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import { getAllPosts, getAllCategories } from '@/lib/blog';

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

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  return (
    <div style={{ background: '#F8FAFC', minHeight: '100vh' }}>
      {/* Hero Section */}
      <div
        style={{
          background: 'linear-gradient(135deg, #0F3460 0%, #1a4a7a 100%)',
          padding: '80px 24px',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <Title
            level={1}
            style={{
              color: '#FFFFFF',
              fontSize: 42,
              fontWeight: 800,
              marginBottom: 16,
            }}
          >
            The ShopKitApps Blog
          </Title>
          <Paragraph
            style={{
              color: 'rgba(255, 255, 255, 0.85)',
              fontSize: 18,
              marginBottom: 32,
            }}
          >
            Insights, guides, and strategies to help you build a faster, more
            profitable Shopify store.
          </Paragraph>
          <Space size={[8, 8]} wrap>
            {categories.map((cat) => (
              <Tag
                key={cat}
                style={{
                  borderRadius: 16,
                  padding: '4px 14px',
                  fontSize: 13,
                  border: '1px solid rgba(255,255,255,0.3)',
                  background: 'rgba(255,255,255,0.1)',
                  color: '#FFFFFF',
                }}
              >
                {cat}
              </Tag>
            ))}
          </Space>
        </div>
      </div>

      {/* Blog List */}
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '48px 24px' }}>
        <Title
          level={2}
          style={{
            fontSize: 28,
            fontWeight: 700,
            color: '#0F3460',
            marginBottom: 32,
          }}
        >
          Latest Articles
        </Title>

        <List
          grid={{
            gutter: 24,
            xs: 1,
            sm: 1,
            md: 2,
            lg: 2,
            xl: 3,
          }}
          dataSource={posts}
          renderItem={(post) => (
            <List.Item style={{ marginBottom: 24 }}>
              <Link href={`/blog/${post.slug}`} style={{ display: 'block' }}>
                <Card
                  hoverable
                  style={{
                    height: '100%',
                    borderRadius: 12,
                    border: '1px solid #E5E7EB',
                    overflow: 'hidden',
                  }}
                  bodyStyle={{ padding: 24 }}
                >
                  <div style={{ marginBottom: 12 }}>
                    <Tag
                      style={{
                        borderRadius: 16,
                        padding: '2px 12px',
                        fontSize: 12,
                        fontWeight: 600,
                        border: 'none',
                        background:
                          (categoryColors[post.category] || '#0F3460') + '15',
                        color: categoryColors[post.category] || '#0F3460',
                      }}
                    >
                      {post.category}
                    </Tag>
                  </div>

                  <Title
                    level={4}
                    style={{
                      fontSize: 18,
                      fontWeight: 700,
                      color: '#0F3460',
                      marginBottom: 8,
                      lineHeight: 1.4,
                    }}
                    ellipsis={{ rows: 2 }}
                  >
                    {post.title}
                  </Title>

                  <Paragraph
                    style={{
                      color: '#6B7280',
                      fontSize: 14,
                      lineHeight: 1.6,
                      marginBottom: 16,
                    }}
                    ellipsis={{ rows: 3 }}
                  >
                    {post.excerpt}
                  </Paragraph>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginTop: 'auto',
                    }}
                  >
                    <Space size={8} align="center">
                      <Avatar
                        size={32}
                        src={post.author.avatar}
                        alt={post.author.name}
                      />
                      <div>
                        <Text
                          style={{
                            display: 'block',
                            fontSize: 13,
                            fontWeight: 600,
                            color: '#374151',
                            lineHeight: 1.2,
                          }}
                        >
                          {post.author.name}
                        </Text>
                        <Text
                          style={{
                            fontSize: 12,
                            color: '#9CA3AF',
                            lineHeight: 1.2,
                          }}
                        >
                          {post.author.role}
                        </Text>
                      </div>
                    </Space>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 16,
                      marginTop: 16,
                      paddingTop: 16,
                      borderTop: '1px solid #F3F4F6',
                    }}
                  >
                    <Space size={4} align="center">
                      <CalendarOutlined style={{ color: '#9CA3AF', fontSize: 13 }} />
                      <Text style={{ fontSize: 12, color: '#9CA3AF' }}>
                        {new Date(post.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </Text>
                    </Space>
                    <Space size={4} align="center">
                      <ClockCircleOutlined style={{ color: '#9CA3AF', fontSize: 13 }} />
                      <Text style={{ fontSize: 12, color: '#9CA3AF' }}>
                        {post.readTime}
                      </Text>
                    </Space>
                  </div>
                </Card>
              </Link>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}
