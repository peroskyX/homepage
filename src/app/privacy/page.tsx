'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function PrivacyPolicy() {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const privacyPolicySections = [
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
  
  // Determine if tablet layout based on screen width
  const [isTablet, setIsTablet] = useState(false);
  
  useEffect(() => {
    const checkIfTablet = () => {
      setIsTablet(window.innerWidth >= 768); // Common tablet breakpoint
    };
    
    checkIfTablet();
    window.addEventListener('resize', checkIfTablet);
    return () => window.removeEventListener('resize', checkIfTablet);
  }, []);

  return (
    <div className="min-h-screen bg-[#0D47A1] text-white">
      <div className="flex justify-center">
        <div className={`w-full ${isTablet ? 'max-w-3xl' : ''} px-5 py-4`}>
          {/* Header similar to the WordArt section in Flutter */}
          <Link href="/" className="flex items-center mb-6 cursor-pointer">
            <div className="font-bold text-2xl text-[#BBDEFB]">Windowshop.ai</div>
            <div className="ml-5 text-[#BBDEFB]">Privacy Policy</div>
          </Link>
          
          {/* Policy content in a scrollable container */}
          <div className="overflow-y-auto pr-1">
            {privacyPolicySections.map((section, index) => (
              <div key={index} className="mb-6">
                <h2 className="text-lg font-bold text-[#BBDEFB] mb-1.5">{section.heading}</h2>
                <p className="text-base text-white">{section.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}