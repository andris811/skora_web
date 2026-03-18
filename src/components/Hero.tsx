'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative bg-[#0f0a19] text-gray-100 overflow-hidden border-b border-[#2d2340]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="opacity-0 animate-fade-in-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              {t('title')}
              <span className="block text-[#a855f7]">{t('subtitle')}</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-100 mb-8 leading-relaxed">
              {t('description')}
            </p>
            <a
              href="https://apps.apple.com/us/app/skora-tabletop/id6759514964"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#a855f7] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#9333ea] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              {t('downloadButton')}
            </a>
          </div>
          <div className="opacity-0 animate-fade-in-right flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[320px] sm:max-w-[400px]">
              <Image
                src="/appIcon.png"
                alt={t('title')}
                width={400}
                height={400}
                className="w-full h-auto rounded-[3rem] opacity-90"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
