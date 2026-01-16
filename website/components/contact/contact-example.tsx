/**
 * Contact Page Example
 *
 * This file demonstrates how to use the contact components together
 * to create a complete contact page.
 */

import { ContactHero, ContactForm, ContactInfo } from './index';
import { Container } from '@/components/layout/Container';

export default function ContactPageExample() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <ContactHero />

      {/* Main Content */}
      <Container className="py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h2>
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Contact Information
            </h2>
            <ContactInfo />
          </div>
        </div>
      </Container>
    </div>
  );
}
