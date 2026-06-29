import { Button, Result } from 'antd';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ padding: '80px 24px', display: 'flex', justifyContent: 'center' }}>
      <Result
        status="404"
        title="404"
        subTitle="This page doesn't exist. But our apps can fix 404s on your Shopify store."
        extra={
          <Link href="/">
            <Button type="primary">Back Home</Button>
          </Link>
        }
      />
    </div>
  );
}
