import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { auth } from '@/auth';
import { RegisterForm } from '@/components/auth/RegisterForm';
import { Container } from '@/components/layout';

export const metadata: Metadata = {
  title: 'Create Account',
  description: 'Join Kindness for Autism and start sharing your story',
};

export default async function RegisterPage() {
  const session = await auth();

  // Redirect if already logged in
  if (session) {
    redirect('/dashboard');
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center py-16 lg:py-24">
      <Container className="max-w-md w-full">
        <div className="card card-spacious">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Create Your Account
            </h1>
            <p className="text-gray-600">
              Join our community and start sharing stories of kindness
            </p>
          </div>

          <RegisterForm />

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <a
                href="/login"
                className="font-semibold text-blue-600 hover:text-blue-700 transition-colors"
              >
                Sign in
              </a>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
