import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { auth } from '@/auth';
import { LoginForm } from '@/components/auth/LoginForm';
import { Container } from '@/components/layout';

export const metadata: Metadata = {
  title: 'Login',
  description: 'Sign in to your Kindness for Autism account',
};

export default async function LoginPage({
  searchParams,
}: {
  searchParams: { callbackUrl?: string; error?: string };
}) {
  const session = await auth();

  // Redirect if already logged in
  if (session) {
    redirect(searchParams.callbackUrl || '/dashboard');
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center py-16 lg:py-24">
      <Container className="max-w-md w-full">
        <div className="card card-spacious">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Welcome Back
            </h1>
            <p className="text-gray-600">
              Sign in to your account to continue
            </p>
          </div>

          {searchParams.error && (
            <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200">
              <p className="text-sm text-red-800">
                {searchParams.error === 'CredentialsSignin'
                  ? 'Invalid email or password'
                  : 'An error occurred. Please try again.'}
              </p>
            </div>
          )}

          <LoginForm callbackUrl={searchParams.callbackUrl} />

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <a
                href="/register"
                className="font-semibold text-blue-600 hover:text-blue-700 transition-colors"
              >
                Sign up
              </a>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
