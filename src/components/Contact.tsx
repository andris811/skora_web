'use client';

import ScrollAnimation from './ScrollAnimation';
import { useTranslations } from 'next-intl';

export default function Contact() {
  const t = useTranslations('contact');

  return (
    <section id="contact" className="py-20 sm:py-24 lg:py-32 bg-[#0f0a19] border-t border-[#2d2340]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-100 mb-4">
              {t('title')}
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
          </div>
        </ScrollAnimation>

        <div className="max-w-2xl mx-auto">
          <ScrollAnimation delay={200}>
<div className="bg-[#1a1425] border border-[#2d2340] rounded-2xl p-8 hover:shadow-2xl hover:border-[#a855f7]/50 transition-all duration-300">
              <div className="text-center">
                <div className="inline-flex p-4 bg-[#a855f7]/10 rounded-full mb-4">
                  <svg className="h-8 w-8 text-[#a855f7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-100 mb-2">{t('supportTitle')}</h3>
                <p className="text-gray-300 mb-4">{t('supportDescription')}</p>
                <a
                  href="mailto:avdev2024@gmail.com"
                  className="text-[#a855f7] hover:text-[#c084fc] font-medium transition-colors"
                >
                  avdev2024@gmail.com
                </a>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
