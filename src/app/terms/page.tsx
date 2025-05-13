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

  const termsSections = [
    {
        'heading': 'Introduction',
        'body':
            'Welcome to Windowshop AI (“we,” “us,” or “our”). These Terms of Service (“Terms”) govern your access to and use of our Services. By accessing or using our Services, you agree to be bound by these Terms.',
      },
      {
        'heading': 'Eligibility',
        'body':
            'You must be at least 18 years old to use our Services. By accessing or using Windowshop AI, you represent and warrant that you have the right, authority, and capacity to enter into this agreement.',
      },
      {
        'heading': 'Our Services',
        'body':
            'We provide a digital marketplace connecting users with unique businesses. We facilitate but do not control or endorse transactions between users.',
      },
      {
        'heading': 'User Accounts and Registration',
        'body':
            'You must provide accurate information, secure your account, and notify us of any breach. We may suspend accounts for misleading info.',
      },
      {
        'heading': 'User Responsibilities',
        'body':
            'You are responsible for interactions and shared content. Do not post harmful or illegal content or use our platform unlawfully.',
      },
      {
        'heading': 'Intellectual Property',
        'body':
            'Our content is protected by IP rights. You retain rights to content you upload but grant us a license to use it for platform functionality.',
      },
      {
        'heading': 'Marketplace Transactions',
        'body':
            'Users list and browse products, but transactions are completed externally. We do not process payments or guarantee listed items.',
      },
      {
        'heading': 'Fees and Payments',
        'body':
            'We may charge for premium features. Fees are non-refundable unless otherwise stated. You’ll be notified before charges apply.',
      },
      {
        'heading': 'Limitation of Liability',
        'body':
            'We are not liable for indirect or incidental damages. Our total liability is limited to the amount you paid for our Services, if any.',
      },
      {
        'heading': 'Indemnification',
        'body':
            'You agree to indemnify and hold us harmless from any claims related to your use of the Services or violation of these Terms.',
      },
      {
        'heading': 'Termination',
        'body':
            'We may suspend or terminate your account at any time. Certain provisions, like liability and indemnity, survive termination.',
      },
      {
        'heading': 'Changes to These Terms',
        'body':
            'We may update these Terms periodically. We’ll notify you of changes by updating the “Last Updated” date. Please review regularly.',
      },
      {
        'heading': 'Dispute Resolution',
        'body':
            'Disputes will be resolved by binding arbitration under jurisdiction rules. You waive rights to trial by jury or class action.',
      },
      {
        'heading': 'Governing Law',
        'body':
            'These Terms are governed by the laws of the United Kingdom, without regard to conflict of law principles.',
      },
      {
        'heading': 'Contact Us',
        'body':
            'Questions? Contact support@windowshop.ai or mail: 41 Skyline Village, LimeHarbour, London. E14 9TS.',
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
            <div className="ml-5 text-[#BBDEFB]">Terms</div>
          </Link>
          
          {/* Policy content in a scrollable container */}
          <div className="overflow-y-auto pr-1">
            {termsSections.map((section, index) => (
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