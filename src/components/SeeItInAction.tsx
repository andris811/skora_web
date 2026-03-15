'use client';

import ScrollAnimation from './ScrollAnimation';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';

export default function SeeItInAction() {
  const t = useTranslations('seeItInAction');
  const locale = useLocale();

  const screenshots = [
    {
      title: t('screenshots.dailyCheckIn.title'),
      description: t('screenshots.dailyCheckIn.description'),
      placeholder: t('screenshots.dailyCheckIn.placeholder'),
      imagePath: `/images/${locale}/daily_${locale}.png`
    },
    {
      title: t('screenshots.easyOnboarding.title'),
      description: t('screenshots.easyOnboarding.description'),
      placeholder: t('screenshots.easyOnboarding.placeholder'),
      imagePath: `/images/${locale}/onboard_${locale}.png`
    },
    {
      title: t('screenshots.settings.title'),
      description: t('screenshots.settings.description'),
      placeholder: t('screenshots.settings.placeholder'),
      imagePath: `/images/${locale}/settings_${locale}.png`
    }
  ];

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-[#0f0a19] border-t border-[#2d2340]">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {screenshots.map((screenshot, index) => (
            <ScrollAnimation key={index} delay={index * 200}>
              <div className="flex flex-col max-w-xs mx-auto lg:max-w-none">
                <div className="bg-gray-900 p-2 rounded-[2.75rem] shadow-2xl mb-6">
                  <div className="aspect-[1290/2796] rounded-[2.5rem] overflow-hidden bg-white">
                    <Image
                      src={screenshot.imagePath}
                      alt={screenshot.title}
                      width={1290}
                      height={2796}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-100 mb-2 text-center">
                  {screenshot.title}
                </h3>
                <p className="text-gray-300 text-center">
                  {screenshot.description}
                </p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
