export interface DocArticle {
  slug: string;
  title: string;
  category: string;
  description: string;
  sections: DocSection[];
}

export interface DocSection {
  heading: string;
  body: string;
  steps?: string[];
  alert?: { type: 'info' | 'warning' | 'success'; message: string };
}

export const docs: DocArticle[] = [
  {
    slug: 'swiftify',
    title: 'Swiftify App Guide',
    category: 'App Guides',
    description: 'Speed optimization and performance tuning for your Shopify store.',
    sections: [
      {
        heading: 'Overview',
        body: 'Swiftify optimizes your store performance by compressing assets, lazy-loading images, and minifying CSS and JavaScript. It integrates directly into your Shopify theme via Theme App Extensions, requiring no manual code changes.',
      },
      {
        heading: 'Installation',
        body: 'Install Swiftify from the Shopify App Store or via the ShopKitApps dashboard.',
        steps: [
          'Open the ShopKitApps dashboard and click "Install Swiftify" to launch the OAuth consent screen.',
          'Approve the required scopes (read_theme, write_theme, read_script_tags) and select the target store.',
          'Wait for the app to inject its optimization hooks into your live theme. This typically takes under 30 seconds.',
        ],
      },
      {
        heading: 'Configuration',
        body: 'After installation, configure optimization settings from the Swiftify panel. Options include image compression level, lazy-load thresholds, CSS minification, and JavaScript deferral. Default settings are tuned for most stores and work well out of the box.',
        alert: { type: 'info', message: 'Enable "Aggressive Mode" only if your theme uses minimal custom JavaScript. Some third-party widgets may break under aggressive deferral.' },
      },
      {
        heading: 'Troubleshooting',
        body: 'Common issues and their resolutions.',
        steps: [
          'Layout shift after enabling lazy-load: Add explicit width and height attributes to img tags in your theme files.',
          'JavaScript errors on product pages: Add conflicting scripts to the "Exclude from Defer" list in Settings.',
          'Lighthouse score not improving: Clear your Shopify CDN cache from Settings > Advanced > Purge Cache, then re-run the audit.',
        ],
      },
    ],
  },
  {
    slug: 'fitforge',
    title: 'FitForge App Guide',
    category: 'App Guides',
    description: 'AI-powered size recommendations to reduce returns and boost confidence.',
    sections: [
      {
        heading: 'Overview',
        body: 'FitForge uses machine learning to recommend the best size for each shopper based on their body measurements and your product fit data. The widget appears on product pages and guides customers to the right size in seconds.',
      },
      {
        heading: 'Installation',
        body: 'Install FitForge through the ShopKitApps dashboard or Shopify App Store.',
        steps: [
          'Click "Install FitForge" in the dashboard to start the OAuth flow and select your store.',
          'Grant the required scopes (read_products, write_products, read_customers) for size data processing.',
          'Embed the FitForge widget block into your product template using the Theme Editor drag-and-drop block system.',
        ],
      },
      {
        heading: 'Configuration',
        body: 'Configure FitForge from the dashboard panel. You can set measurement units (metric or imperial), customize widget placement, upload brand-specific size charts, and adjust recommendation confidence thresholds. The default confidence threshold is 75%.',
        alert: { type: 'warning', message: 'FitForge requires at least one size chart per product type to generate recommendations. Products without size charts will not display the widget.' },
      },
      {
        heading: 'Troubleshooting',
        body: 'Common issues and fixes.',
        steps: [
          'Widget not appearing on product pages: Ensure the FitForge block is added to the active product template in Theme Editor.',
          'Inaccurate recommendations: Upload detailed fit data (garment measurements) for each size to improve model accuracy.',
          'Slow widget load time: Enable "Preload Measurements" in Settings to cache size data on page load.',
        ],
      },
    ],
  },
  {
    slug: 'recoverlink',
    title: 'RecoverLink App Guide',
    category: 'App Guides',
    description: 'Automated cart recovery sequences to win back abandoned carts.',
    sections: [
      {
        heading: 'Overview',
        body: 'RecoverLink tracks abandoned carts and sends automated recovery emails and SMS messages at optimal intervals. It includes customizable templates, A/B testing for subject lines, and real-time recovery analytics.',
      },
      {
        heading: 'Installation',
        body: 'Install RecoverLink from the ShopKitApps dashboard.',
        steps: [
          'Click "Install RecoverLink" and complete the OAuth consent for your store.',
          'Approve scopes for read_orders, write_orders, read_customers, and email marketing permissions.',
          'Configure your sender identity (verified domain or Shopify email) to enable recovery message delivery.',
        ],
      },
      {
        heading: 'Configuration',
        body: 'RecoverLink lets you set recovery sequence timing (default: 1 hour, 24 hours, 72 hours), customize email and SMS templates with dynamic discount codes, enable A/B testing for subject lines, and set quiet hours for SMS. You can also configure automatic discount injection for recovery links.',
        alert: { type: 'info', message: 'SMS recovery requires a dedicated sender number. Verify your business profile in Settings > SMS before enabling SMS sequences.' },
      },
      {
        heading: 'Troubleshooting',
        body: 'Common issues and resolutions.',
        steps: [
          'Recovery emails not sending: Verify your sender domain DNS records (SPF, DKIM) in Settings > Email > Domain Verification.',
          'Low recovery rate: Experiment with earlier send times (15 min, 2 hours) and higher discount values in the sequence editor.',
          'Discount codes not applying: Ensure the discount is active in Shopify Discounts and the code matches the template variable exactly.',
        ],
      },
    ],
  },
  {
    slug: 'cartpulse',
    title: 'CartPulse App Guide',
    category: 'App Guides',
    description: 'Dynamic cart incentives and progress bars to increase average order value.',
    sections: [
      {
        heading: 'Overview',
        body: 'CartPulse adds free shipping bars, quantity breaks, BOGO offers, and cart goal progress indicators directly into your cart page or cart drawer. It uses Theme App Extensions for seamless integration without template edits.',
      },
      {
        heading: 'Installation',
        body: 'Install CartPulse through the ShopKitApps dashboard.',
        steps: [
          'Click "Install CartPulse" to launch the OAuth flow for your store.',
          'Approve the required scopes: read_cart, write_cart, read_products, read_checkouts.',
          'Select the cart placement (cart page, cart drawer, or both) during the setup wizard.',
        ],
      },
      {
        heading: 'Configuration',
        body: 'CartPulse offers multiple incentive types: free shipping thresholds, quantity breaks, BOGO deals, and fixed-amount discounts. Configure display options (bar color, text, position), set tier thresholds, and create multiple active campaigns. Campaigns can be scheduled and targeted by customer segment.',
        alert: { type: 'success', message: 'Stores using 2 or more incentive tiers see an average 18% increase in average order value within the first 30 days.' },
      },
      {
        heading: 'Troubleshooting',
        body: 'Common issues and their fixes.',
        steps: [
          'Progress bar not updating: Ensure the cart template includes the CartPulse app block and that AJAX cart refresh is enabled.',
          'Discount not applying at checkout: Verify the automatic discount is created in Shopify and matches the CartPulse incentive settings.',
          'Incentive showing on non-product pages: Adjust the "Display Pages" setting to restrict where the widget appears.',
        ],
      },
    ],
  },
  {
    slug: 'preorder-manager',
    title: 'PreOrder Manager App Guide',
    category: 'App Guides',
    description: 'Accept pre-orders for out-of-stock and upcoming products.',
    sections: [
      {
        heading: 'Overview',
        body: 'PreOrder Manager lets you accept pre-orders when products are out of stock or not yet released. It replaces the "Add to Cart" button with "Pre-Order Now", captures payment upfront or at shipping, and sends automated availability notifications.',
      },
      {
        heading: 'Installation',
        body: 'Install PreOrder Manager from the ShopKitApps dashboard.',
        steps: [
          'Click "Install PreOrder Manager" and authorize the OAuth scopes for your store.',
          'Approve scopes: read_products, write_products, read_orders, read_inventory.',
          'Enable the app embed in your theme via the Theme Editor app embeds panel.',
        ],
      },
      {
        heading: 'Configuration',
        body: 'Configure PreOrder Manager with per-product or per-collection settings. Options include: pre-order button text, charge timing (immediate or on fulfillment), expected ship date display, quantity limits, and customer notification preferences. Global defaults can be overridden at the product level.',
        alert: { type: 'warning', message: 'If you use a payment gateway that does not support authorization holds, set charge timing to "Immediate" to avoid failed pre-order transactions.' },
      },
      {
        heading: 'Troubleshooting',
        body: 'Common issues and solutions.',
        steps: [
          'Pre-order button not showing: Check that the product is marked as out of stock in Shopify and the PreOrder app embed is toggled on.',
          'Customers charged at wrong time: Verify the charge timing setting for the specific product, as global defaults may be overridden.',
          'Notifications not sending: Confirm your email sender domain is verified in Settings > Notifications.',
        ],
      },
    ],
  },
  {
    slug: 'fraudshield',
    title: 'FraudShield App Guide',
    category: 'App Guides',
    description: 'Real-time fraud detection and order risk scoring for Shopify stores.',
    sections: [
      {
        heading: 'Overview',
        body: 'FraudShield analyzes incoming orders against 40+ risk signals including velocity checks, address verification, device fingerprinting, and proxy detection. High-risk orders are automatically flagged for manual review, and you can configure auto-cancel rules for critical risk scores.',
      },
      {
        heading: 'Installation',
        body: 'Install FraudShield through the ShopKitApps dashboard.',
        steps: [
          'Click "Install FraudShield" to begin the OAuth installation flow.',
          'Approve scopes: read_orders, write_orders, read_customers, read_checkouts.',
          'Set your risk threshold levels (Low, Medium, High) during the onboarding wizard.',
        ],
      },
      {
        heading: 'Configuration',
        body: 'FraudShield provides configurable risk rules: set auto-cancel thresholds, create allowlists and blocklists for IPs and emails, enable velocity checks per customer or per address, and customize notification alerts for flagged orders. You can also enable manual review workflows that hold high-risk orders for 24 hours.',
        alert: { type: 'warning', message: 'Auto-cancel rules execute immediately. Test with a low threshold first and monitor for false positives before enabling aggressive auto-cancel.' },
      },
      {
        heading: 'Troubleshooting',
        body: 'Common issues and resolutions.',
        steps: [
          'Legitimate orders flagged as fraud: Add customer IPs and emails to the Allowlist in Settings > Rules.',
          'Risk scores not updating: Ensure Shopify webhook delivery is active in Settings > Webhooks. FraudShield relies on order/create webhooks.',
          'Auto-cancel not triggering: Verify the auto-cancel threshold is set below the risk score of target orders and that the order has not yet been fulfilled.',
        ],
      },
    ],
  },
  {
    slug: 'storecraft-ai',
    title: 'StoreCraft AI App Guide',
    category: 'App Guides',
    description: 'AI content generation for product descriptions, blog posts, and marketing copy.',
    sections: [
      {
        heading: 'Overview',
        body: 'StoreCraft AI generates product descriptions, SEO meta descriptions, blog articles, and ad copy using your brand voice. It pulls product data directly from Shopify and produces content that matches your store tone, keywords, and formatting preferences.',
      },
      {
        heading: 'Installation',
        body: 'Install StoreCraft AI from the ShopKitApps dashboard.',
        steps: [
          'Click "Install StoreCraft AI" to authorize the OAuth connection for your store.',
          'Approve scopes: read_products, write_products, read_content, write_content.',
          'Complete the brand voice setup wizard by providing 2-3 sample descriptions or selecting a preset tone (Professional, Casual, Luxurious, Playful).',
        ],
      },
      {
        heading: 'Configuration',
        body: 'StoreCraft AI settings include: brand voice selection, target keywords for SEO, output length preferences (short, medium, long), tone formality slider, and automatic alt-text generation for product images. You can generate content in bulk for entire collections or individually per product.',
        alert: { type: 'info', message: 'StoreCraft AI uses your product data (title, tags, vendor) as context. Ensure product metadata is complete for the best generation quality.' },
      },
      {
        heading: 'Troubleshooting',
        body: 'Common issues and fixes.',
        steps: [
          'Generated content feels generic: Provide 3-5 example descriptions in the Brand Voice settings to improve output specificity.',
          'API rate limit errors: Reduce bulk generation batch size to 10 products or fewer in Settings > Generation.',
          'Content not publishing to Shopify: Verify the write_products scope was approved during installation and re-authenticate if needed.',
        ],
      },
    ],
  },
  {
    slug: 'whatsapp-notifier',
    title: 'WhatsApp Notifier App Guide',
    category: 'App Guides',
    description: 'Automated WhatsApp notifications for orders, shipping, and abandoned carts.',
    sections: [
      {
        heading: 'Overview',
        body: 'WhatsApp Notifier sends automated order confirmations, shipping updates, delivery notifications, and cart recovery messages via WhatsApp. It uses the official WhatsApp Business API and supports templated messages with dynamic variables, images, and call-to-action buttons.',
      },
      {
        heading: 'Installation',
        body: 'Install WhatsApp Notifier through the ShopKitApps dashboard.',
        steps: [
          'Click "Install WhatsApp Notifier" to start the OAuth flow for your store.',
          'Approve scopes: read_orders, write_orders, read_customers, read_fulfillments.',
          'Connect your WhatsApp Business number by scanning the QR code or entering your phone number for verification.',
        ],
      },
      {
        heading: 'Configuration',
        body: 'WhatsApp Notifier supports multiple notification types: order confirmation, shipping confirmation, out-for-delivery, delivered, review request, and abandoned cart recovery. Configure message templates with dynamic variables (customer name, order number, tracking link), set sending schedules, and enable opt-out links for compliance.',
        alert: { type: 'warning', message: 'WhatsApp requires pre-approved message templates for automated messages. Submit templates for review at least 24 hours before enabling a new notification type.' },
      },
      {
        heading: 'Troubleshooting',
        body: 'Common issues and their solutions.',
        steps: [
          'Messages not sending: Verify your WhatsApp Business number is verified and the template is approved in Settings > Templates.',
          'Low delivery rate: Ensure customers have opted in to WhatsApp notifications at checkout or via the consent checkbox.',
          'Template variable showing as blank: Check that the variable name matches exactly (case-sensitive) with Shopify order attributes.',
        ],
      },
    ],
  },
];
