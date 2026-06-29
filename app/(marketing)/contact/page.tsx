'use client';

export const dynamic = 'force-dynamic';

import { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Card,
  Typography,
  Row,
  Col,
  Space,
  message,
  Select,
} from 'antd';
import {
  MailOutlined,
  ClockCircleOutlined,
  FileTextOutlined,
  CheckCircleOutlined,
  SendOutlined,
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;

interface ContactFormValues {
  name: string;
  email: string;
  storeUrl?: string;
  subject: string;
  message: string;
}

const subjectOptions = [
  { value: 'sales', label: 'Sales' },
  { value: 'support', label: 'Support' },
  { value: 'partnership', label: 'Partnership' },
  { value: 'bug-report', label: 'Bug Report' },
  { value: 'feature-request', label: 'Feature Request' },
];

const contactMethods = [
  {
    icon: <MailOutlined style={{ fontSize: 28, color: '#0F3460' }} />,
    title: 'Email Us',
    content: 'hello@shopkitapps.com',
    sub: 'We reply to every message personally',
  },
  {
    icon: <ClockCircleOutlined style={{ fontSize: 28, color: '#00D4AA' }} />,
    title: 'Response Time',
    content: 'Within 24 hours',
    sub: 'Usually much faster during business hours',
  },
  {
    icon: <FileTextOutlined style={{ fontSize: 28, color: '#0F3460' }} />,
    title: 'Documentation',
    content: 'docs.shopkitapps.com',
    sub: 'Browse guides, tutorials, and API docs',
    link: 'https://docs.shopkitapps.com',
  },
  {
    icon: <CheckCircleOutlined style={{ fontSize: 28, color: '#00D4AA' }} />,
    title: 'Support Hours',
    content: 'Mon - Fri, 9am - 6pm CET',
    sub: 'Weekend support for urgent issues',
  },
];

export default function ContactPage() {
  const [form] = Form.useForm<ContactFormValues>();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (values: ContactFormValues) => {
    setSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const data = await res.json();

      if (data.ok) {
        message.success('Thanks for reaching out! We will get back to you within 24 hours.');
        form.resetFields();
      } else {
        message.error(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      message.error('Network error. Please check your connection and try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{ background: '#F8FAFC', minHeight: '100vh', padding: '60px 0 80px' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <Title
            level={1}
            style={{
              fontSize: 44,
              fontWeight: 800,
              color: '#0F3460',
              marginBottom: 12,
              letterSpacing: '-0.5px',
            }}
          >
            Get in Touch
          </Title>
          <Paragraph
            style={{
              fontSize: 18,
              color: '#64748B',
              maxWidth: 560,
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            Have a question about our apps, need help, or want to partner with us? We are here and ready to help your Shopify store grow.
          </Paragraph>
        </div>

        {/* Two Column Layout */}
        <Row gutter={[40, 40]} align="top">
          {/* Left: Contact Form */}
          <Col xs={24} lg={14}>
            <Card
              style={{
                borderRadius: 16,
                border: '1px solid #E2E8F0',
                boxShadow: '0 1px 3px rgba(15, 52, 96, 0.06)',
                padding: '8px 4px',
              }}
            >
              <Title
                level={3}
                style={{
                  color: '#0F3460',
                  marginBottom: 24,
                  fontWeight: 700,
                }}
              >
                Send us a message
              </Title>

              <Form
                form={form}
                layout="vertical"
                onFinish={handleSubmit}
                requiredMark="optional"
                size="large"
              >
                <Form.Item
                  name="name"
                  label="Your Name"
                  rules={[{ required: true, message: 'Please enter your name' }]}
                >
                  <Input placeholder="John Doe" />
                </Form.Item>

                <Form.Item
                  name="email"
                  label="Email Address"
                  rules={[
                    { required: true, message: 'Please enter your email' },
                    {
                      type: 'email',
                      message: 'Please enter a valid email address',
                    },
                  ]}
                >
                  <Input placeholder="john@store.com" />
                </Form.Item>

                <Form.Item
                  name="storeUrl"
                  label="Store URL (optional)"
                >
                  <Input placeholder="https://mystore.myshopify.com" />
                </Form.Item>

                <Form.Item
                  name="subject"
                  label="Subject"
                  rules={[{ required: true, message: 'Please select a subject' }]}
                >
                  <Select
                    placeholder="How can we help?"
                    options={subjectOptions}
                  />
                </Form.Item>

                <Form.Item
                  name="message"
                  label="Message"
                  rules={[
                    { required: true, message: 'Please enter your message' },
                    { min: 10, message: 'Message must be at least 10 characters' },
                  ]}
                >
                  <TextArea
                    rows={5}
                    placeholder="Tell us more about what you need..."
                    style={{ resize: 'vertical' }}
                  />
                </Form.Item>

                <Form.Item style={{ marginBottom: 0 }}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={submitting}
                    icon={<SendOutlined />}
                    style={{
                      backgroundColor: '#0F3460',
                      borderColor: '#0F3460',
                      height: 48,
                      paddingInline: 32,
                      borderRadius: 8,
                      fontSize: 16,
                      fontWeight: 600,
                    }}
                  >
                    Send Message
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>

          {/* Right: Alternative Contact Methods */}
          <Col xs={24} lg={10}>
            <Space direction="vertical" size={20} style={{ width: '100%' }}>
              {contactMethods.map((item, idx) => {
                const isLink = !!item.link;
                return (
                  <Card
                    key={idx}
                    hoverable={isLink}
                    style={{
                      borderRadius: 16,
                      border: '1px solid #E2E8F0',
                      boxShadow: '0 1px 3px rgba(15, 52, 96, 0.04)',
                      cursor: isLink ? 'pointer' : 'default',
                    }}
                    onClick={() => {
                      if (item.link) {
                        window.open(item.link, '_blank');
                      }
                    }}
                  >
                    <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                      <div
                        style={{
                          width: 52,
                          height: 52,
                          borderRadius: 12,
                          background: '#F1F5F9',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        {item.icon}
                      </div>
                      <div style={{ flex: 1 }}>
                        <Text
                          strong
                          style={{
                            display: 'block',
                            fontSize: 16,
                            color: '#0F3460',
                            marginBottom: 4,
                          }}
                        >
                          {item.title}
                        </Text>
                        <Text
                          style={{
                            display: 'block',
                            fontSize: 15,
                            color: '#334155',
                            fontWeight: 500,
                          }}
                        >
                          {item.content}
                        </Text>
                        <Text
                          style={{
                            display: 'block',
                            fontSize: 13,
                            color: '#94A3B8',
                            marginTop: 4,
                          }}
                        >
                          {item.sub}
                        </Text>
                      </div>
                    </div>
                  </Card>
                );
              })}

              {/* Quick highlight card */}
              <div
                style={{
                  background: 'linear-gradient(135deg, #0F3460 0%, #1A4A7F 100%)',
                  borderRadius: 16,
                  padding: '28px 24px',
                  textAlign: 'center',
                }}
              >
                <Title
                  level={4}
                  style={{
                    color: '#FFFFFF',
                    marginBottom: 8,
                    fontWeight: 700,
                  }}
                >
                  Trusted by 2,000+ Shopify Stores
                </Title>
                <Paragraph
                  style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontSize: 14,
                    marginBottom: 0,
                  }}
                >
                  Join thousands of merchants growing their business with ShopKitApps
                </Paragraph>
              </div>
            </Space>
          </Col>
        </Row>
      </div>
    </div>
  );
}
