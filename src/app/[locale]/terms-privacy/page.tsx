'use client';

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useTranslations } from 'next-intl';

export default function TermsPrivacyPage() {
  const tApp = useTranslations();
  const t = useTranslations('terms');

  const renderSection = (section: any, number: string) => {
    if (!section) return null;

    return (
      <div key={number} className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-100 mb-4">
          {number}. {section.title}
        </h3>

        {section.content && (
          <p className="text-gray-300 mb-4 whitespace-pre-line">{section.content}</p>
        )}

        {section.intro && (
          <p className="text-gray-300 mb-3">{section.intro}</p>
        )}

        {section.list && (
          <ul className="list-disc pl-6 space-y-2 mb-4">
            {section.list.map((item: string, idx: number) => (
              <li key={idx} className="text-gray-300">{item}</li>
            ))}
          </ul>
        )}

        {section.outro && (
          <p className="text-gray-300 mb-4">{section.outro}</p>
        )}

        {/* Render subsections */}
        {Object.keys(section).filter(key => key.includes('.')).map(subKey => {
          const subsection = section[subKey];
          return (
            <div key={subKey} className="ml-6 mt-6 mb-6">
              <h4 className="text-xl font-semibold text-gray-200 mb-3">
                {number}.{subKey.split('.')[1]} {subsection.title}
              </h4>
              {subsection.content && (
                <p className="text-gray-300 mb-3">{subsection.content}</p>
              )}
              {subsection.intro && (
                <p className="text-gray-300 mb-3">{subsection.intro}</p>
              )}
              {subsection.list && (
                <ul className="list-disc pl-6 space-y-2 mb-3">
                  {subsection.list.map((item: string, idx: number) => (
                    <li key={idx} className="text-gray-300">{item}</li>
                  ))}
                </ul>
              )}
              {subsection.outro && (
                <p className="text-gray-300 mb-3">{subsection.outro}</p>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  const terms = t.raw('terms') as any;
  const privacy = t.raw('privacy') as any;

  return (
    <div className="min-h-screen bg-[#0f0a19]">
      <Navigation />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-100 mb-4">
          Skora - {t('termsTitle')} & {t('privacyTitle')}
        </h1>
        <p className="text-sm text-gray-400 mb-12">
          Last Updated: {t('lastUpdated')}
        </p>

        {/* Terms of Service Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#a855f7] mb-8 pb-4 border-b border-[#2d2340]">
            {t('termsTitle')}
          </h2>
          <div className="space-y-6">
            {Object.keys(terms)
              .filter(key => !key.includes('.'))
              .sort((a, b) => parseInt(a) - parseInt(b))
              .map(key => renderSection(terms[key], key))}
          </div>
        </section>

        {/* Privacy Policy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#a855f7] mb-8 pb-4 border-b border-[#2d2340]">
            {t('privacyTitle')}
          </h2>
          <div className="space-y-6">
            {Object.keys(privacy)
              .filter(key => !key.includes('.'))
              .sort((a, b) => parseInt(a) - parseInt(b))
              .map(key => renderSection(privacy[key], key))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-[#1a1425] border border-[#2d2340] rounded-2xl p-8 mb-12">
          <p className="text-gray-300 text-center">
            For questions, please contact:{' '}
            <a
              href="mailto:avdev2024@gmail.com"
              className="text-[#a855f7] hover:text-[#9333ea] underline font-semibold"
            >
              avdev2024@gmail.com
            </a>
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
