/**
 * Analytics helpers — GA4 (G-K0CJRZQJR4) + Google Ads (AW-18248373757)
 *
 * Usage:
 *   import { trackWhatsAppClick, trackPackageView } from '@/lib/analytics';
 */

const GA4_ID = 'G-K0CJRZQJR4';
const ADS_ID = 'AW-18248373757';

// Google Ads conversion label for WhatsApp click
const ADS_WHATSAPP_CONVERSION = 'AW-18248373757/Mb5tCObU3cIcEP2rwP1D';

function gtag(...args) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag(...args);
  }
}

/** Generic GA4 event */
export function trackEvent(eventName, params = {}) {
  gtag('event', eventName, params);
}

/**
 * Track a route change as a GA4 page_view.
 * Called automatically by ScrollManager in App.js.
 */
export function trackPageView(path, title) {
  gtag('config', GA4_ID, {
    page_path: path,
    page_title: title || document.title,
  });
}

/**
 * Track a WhatsApp button click.
 * @param {string} source  - e.g. 'header' | 'package_card' | 'contact_section' | 'promo_popup'
 * @param {string} [packageName] - optional package name associated with the click
 */
export function trackWhatsAppClick(source, packageName) {
  trackEvent('whatsapp_click', {
    event_category: 'engagement',
    event_label: packageName || source,
    source,
    package_name: packageName || '',
  });

  // Google Ads conversion
  gtag('event', 'conversion', {
    send_to: ADS_WHATSAPP_CONVERSION,
    value: 1.0,
    currency: 'BRL',
  });
}

/**
 * Track when a user views a package / experience detail.
 * Follows GA4 ecommerce schema.
 */
export function trackPackageView(packageId, packageName, category) {
  trackEvent('view_item', {
    event_category: 'ecommerce',
    items: [
      {
        item_id: String(packageId),
        item_name: packageName,
        item_category: category,
      },
    ],
  });
}

/**
 * Track filter interaction on ExperienciasPage.
 * @param {'region'|'category'} filterType
 * @param {string} filterValue
 */
export function trackFilterChange(filterType, filterValue) {
  trackEvent('filter_applied', {
    event_category: 'navigation',
    filter_type: filterType,
    filter_value: filterValue,
  });
}


