import { Metadata } from 'next';
import { Container } from '@/components/layout';
import {
  ContactHero,
  ContactForm,
  ContactInfo,
} from '@/components/contact';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Kindness for Autism. We\'d love to hear from you, whether you have questions, want to share your story, or want to get involved.',
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />

      {/* Main Contact Section */}
      <section className="section">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <ContactInfo />
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="section bg-[var(--color-muted)]">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="card">
                <h3 className="font-semibold mb-2">
                  How can I submit my story of kindness?
                </h3>
                <p className="text-[var(--color-muted-foreground)]">
                  You can submit your story through our contact form above by selecting
                  &quot;Share Your Story&quot; as the subject. We&apos;d love to hear
                  about your experiences with kindness.
                </p>
              </div>
              <div className="card">
                <h3 className="font-semibold mb-2">
                  How do I join the Advisory Committee?
                </h3>
                <p className="text-[var(--color-muted-foreground)]">
                  We&apos;re always looking for dedicated professionals. Send us a message
                  with your background and interest, and we&apos;ll be in touch to discuss
                  opportunities.
                </p>
              </div>
              <div className="card">
                <h3 className="font-semibold mb-2">Is my donation tax-deductible?</h3>
                <p className="text-[var(--color-muted-foreground)]">
                  Yes! Kindness for Autism is a registered nonprofit organization. All
                  donations are tax-deductible to the extent allowed by law. You&apos;ll
                  receive a receipt for your records.
                </p>
              </div>
              <div className="card">
                <h3 className="font-semibold mb-2">
                  Can I volunteer with Kindness for Autism?
                </h3>
                <p className="text-[var(--color-muted-foreground)]">
                  Absolutely! We welcome volunteers for various activities including event
                  support, social media, and community outreach. Contact us to learn about
                  current volunteer opportunities.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="section bg-gradient-to-r from-[var(--color-autism-blue)] to-[var(--color-primary)]">
        <Container>
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Let&apos;s Make a Difference Together</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Whether you want to donate, volunteer, or simply spread the word, every
              action counts. Together, we can create a world filled with more kindness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/donate"
                className="btn btn-lg bg-white text-[var(--color-autism-blue)] hover:bg-gray-100"
              >
                Make a Donation
              </a>
              <a
                href="/stories"
                className="btn btn-lg bg-[var(--color-autism-blue)]/20 text-white border-2 border-white/30 hover:bg-[var(--color-autism-blue)]/30"
              >
                Read Stories
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
