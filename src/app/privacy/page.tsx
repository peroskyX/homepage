'use client';

import { JSX, useState } from 'react';
import Link from 'next/link';

// Define types for privacy policy section
interface PrivacyPolicySection {
  heading: string;
  body: string;
  }

// Privacy Policy data
const privacyPolicySections: PrivacyPolicySection[] = [
  {
    heading: 'Introduction',
    body: 'At Windowshop AI ("we," "our," or "us"), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, mobile applications, and services (collectively, the "Services").',
  },
  {
    heading: 'Personal Information',
    body: 'We may collect personal information that you provide directly to us when you register, use, or interact with our Services. This includes your name, email address, contact details, business name and type, location, payment information, and any other information you choose to provide.',
  },
  {
    heading: 'Automatically Collected Information',
    body: 'When you use our Services, we automatically collect device information (e.g., IP address, browser type), usage data (e.g., pages visited, interaction data), and cookies or similar technologies.',
  },
  {
    heading: 'Information from Third Parties',
    body: 'We may collect data from social media platforms, advertising networks, analytics providers, and other partners, based on their policies and your preferences.',
  },
  {
    heading: 'How We Use Your Information',
    body: 'We use your information to provide and improve our Services, process transactions, communicate with you, enhance security, conduct analytics, and for marketing purposes.',
  },
  {
    heading: 'Sharing Your Information',
    body: 'We may share your information with service providers, business partners (with your consent), and legal authorities as required by law.',
  },
  {
    heading: 'Your Choices and Rights',
    body: 'You have the right to access, correct, or delete your data, and opt out of marketing communications or data sales. To exercise your rights, contact us at contact@windowshop.ai.',
  },
  {
    heading: 'Security',
    body: 'We take reasonable measures to protect your information, but no method of transmission over the internet or electronic storage is completely secure.',
  },
  {
    heading: 'International Data Transfers',
    body: 'If you are outside the UK, your data may be processed in the UK or other countries where we operate. By using our Services, you consent to this.',
  },
  {
    heading: 'Data Retention',
    body: 'We retain your data as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.',
  },
  {
    heading: "Children's Privacy",
    body: "Our Services are not intended for children under 16, and we do not knowingly collect personal data from children.",
  },
  {
    heading: 'Third-Party Links',
    body: 'Our Services may contain links to third-party websites. We are not responsible for their privacy practices or content.',
  },
  {
    heading: 'Updates to This Privacy Policy',
    body: 'We may update this Privacy Policy. Changes will be marked by a new "Last Updated" date. Please review this policy regularly.',
  },
  {
    heading: 'Contact Us',
    body: 'If you have questions or concerns about this policy, email us at support@windowshop.ai or write to: 41 Skyline Village, LimeHarbour, London. E14 9TS.',
  },
];

export default function PrivacyPolicy(): JSX.Element {
  const [activeSection, setActiveSection] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
            <Link href="/" className="text-blue-600 hover:text-blue-800">
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              {/* Policy last updated */}
              <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
                <p className="text-sm text-gray-500">
                  Last Updated: May 12, 2025
                </p>
              </div>

              {/* Table of contents on larger screens */}
              <div className="hidden md:block px-4 py-5 sm:px-6">
                <h2 className="text-lg font-medium text-gray-900">Table of Contents</h2>
                <div className="mt-4 grid grid-cols-1 gap-y-2 lg:grid-cols-2 lg:gap-x-8">
                  {privacyPolicySections.map((section, index) => (
                    <div key={index}>
                      <button
                        onClick={() => {
                          const element = document.getElementById(`section-${index}`);
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                        className="text-blue-600 hover:underline text-left"
                      >
                        {section.heading}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Policy sections */}
              <div className="px-4 py-5 divide-y divide-gray-200 sm:px-6">
                {privacyPolicySections.map((section, index) => (
                  <div 
                    key={index} 
                    id={`section-${index}`}
                    className="py-4"
                  >
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                      {section.heading}
                    </h2>
                    <p className="text-gray-700 whitespace-pre-line">{section.body}</p>
                  </div>
                ))}
              </div>

              {/* Mobile accordion version */}
              <div className="md:hidden px-4 py-5 sm:px-6 divide-y divide-gray-200">
                {privacyPolicySections.map((section, index) => (
                  <div key={index} className="py-3">
                    <button
                      onClick={() => setActiveSection(activeSection === index ? null : index)}
                      className="flex justify-between w-full text-left"
                    >
                      <h3 className="text-lg font-medium text-gray-900">{section.heading}</h3>
                      <span>{activeSection === index ? '−' : '+'}</span>
                    </button>
                    {activeSection === index && (
                      <div className="mt-2 text-gray-700">{section.body}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-6 px-4 overflow-hidden sm:px-6 lg:px-8">
          <p className="mt-8 text-center text-base text-gray-500">
            &copy; {new Date().getFullYear()} Windowshop AI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}