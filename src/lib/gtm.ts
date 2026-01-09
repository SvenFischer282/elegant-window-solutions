/**
 * Google Tag Manager s Consent Mode v2
 * 
 * INŠTRUKCIE:
 * 1. Nahraďte GTM_ID vaším skutočným GTM ID (formát: GTM-XXXXXXX)
 * 2. Voliteľne pridajte GA_MEASUREMENT_ID pre priame Google Analytics meranie
 * 3. GTM sa načíta automaticky po inicializácii consent mode
 */

// Konfigurácia - ZADAJTE VAŠE ID
export const GTM_ID = ''; // Príklad: 'GTM-XXXXXXX'
export const GA_MEASUREMENT_ID = ''; // Voliteľné, príklad: 'G-XXXXXXXXXX'

// Typy
export type ConsentState = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

// Pomocná funkcia pre gtag
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

const gtag = (...args: any[]) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(args);
};

// Inicializácia Google Consent Mode v2 - volať PRED načítaním GTM
export const initConsentMode = () => {
  window.dataLayer = window.dataLayer || [];
  
  // Definícia gtag funkcie
  window.gtag = function() {
    window.dataLayer.push(arguments);
  };
  
  // Default consent state - deny all except necessary (GDPR compliant)
  gtag('consent', 'default', {
    'ad_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'analytics_storage': 'denied',
    'functionality_storage': 'granted',
    'personalization_storage': 'denied',
    'security_storage': 'granted',
    'wait_for_update': 500,
  });
  
  // Nastavenia pre lepšie meranie bez cookies
  gtag('set', 'ads_data_redaction', true);
  gtag('set', 'url_passthrough', true);
  
  // Načítaj GTM ak je nakonfigurované ID
  if (GTM_ID) {
    loadGTM();
  }
  
  // Načítaj GA4 priamo ak je nakonfigurované (voliteľné)
  if (GA_MEASUREMENT_ID) {
    loadGA4();
  }
};

// Dynamické načítanie GTM skriptu
const loadGTM = () => {
  if (!GTM_ID || document.getElementById('gtm-script')) return;
  
  const script = document.createElement('script');
  script.id = 'gtm-script';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  
  window.dataLayer.push({
    'gtm.start': new Date().getTime(),
    event: 'gtm.js'
  });
  
  document.head.appendChild(script);
  
  // Pridaj noscript iframe do body
  const noscript = document.createElement('noscript');
  noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
  document.body.insertBefore(noscript, document.body.firstChild);
  
  console.log('[GTM] Google Tag Manager načítaný:', GTM_ID);
};

// Voliteľné priame načítanie GA4
const loadGA4 = () => {
  if (!GA_MEASUREMENT_ID || document.getElementById('ga4-script')) return;
  
  const script = document.createElement('script');
  script.id = 'ga4-script';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);
  
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID, {
    send_page_view: false // Pageview sa pošle až po consent update
  });
  
  console.log('[GA4] Google Analytics načítané:', GA_MEASUREMENT_ID);
};

// Aktualizácia consent state na základe používateľských preferencií
export const updateConsent = (consent: ConsentState) => {
  gtag('consent', 'update', {
    'ad_storage': consent.marketing ? 'granted' : 'denied',
    'ad_user_data': consent.marketing ? 'granted' : 'denied',
    'ad_personalization': consent.marketing ? 'granted' : 'denied',
    'analytics_storage': consent.analytics ? 'granted' : 'denied',
    'personalization_storage': consent.analytics ? 'granted' : 'denied',
  });
  
  // Pošli pageview ak je povolená analytika
  if (consent.analytics && GA_MEASUREMENT_ID) {
    gtag('event', 'page_view', {
      page_title: document.title,
      page_location: window.location.href,
      page_path: window.location.pathname,
    });
  }
  
  // Pošli event do dataLayer pre GTM
  window.dataLayer.push({
    event: 'consent_update',
    consent_analytics: consent.analytics,
    consent_marketing: consent.marketing,
  });
  
  console.log('[Consent] Aktualizované:', consent);
};

// Sledovanie page views (pre SPA)
export const trackPageView = (path: string) => {
  const savedConsent = localStorage.getItem('cookie-consent');
  if (!savedConsent) return;
  
  const consent: ConsentState = JSON.parse(savedConsent);
  if (!consent.analytics) return;
  
  if (GA_MEASUREMENT_ID) {
    gtag('event', 'page_view', {
      page_title: document.title,
      page_location: window.location.href,
      page_path: path,
    });
  }
  
  // Event pre GTM
  window.dataLayer.push({
    event: 'virtual_pageview',
    page_path: path,
    page_title: document.title,
  });
};

// Vlastné eventy pre konverzie
export const trackEvent = (eventName: string, params?: Record<string, any>) => {
  const savedConsent = localStorage.getItem('cookie-consent');
  if (!savedConsent) return;
  
  const consent: ConsentState = JSON.parse(savedConsent);
  
  // Analytics eventy
  if (consent.analytics) {
    gtag('event', eventName, params);
  }
  
  // Marketing/konverzné eventy
  if (consent.marketing) {
    window.dataLayer.push({
      event: eventName,
      ...params,
    });
  }
};

// Sledovanie konverzií (kontaktný formulár, objednávka, atď.)
export const trackConversion = (conversionType: string, value?: number) => {
  trackEvent('conversion', {
    conversion_type: conversionType,
    value: value,
    currency: 'EUR',
  });
};
