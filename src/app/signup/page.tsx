import { auth } from '@/auth/lucia';
import * as context from 'next/headers';
import Form from '@/components/form';
import Link from 'next/link';
import { redirect } from 'next/navigation';

const Page = async () => {
  const authRequest = auth.handleRequest('GET', context);
  const session = await authRequest.validate();
  if (session) redirect('/');
  return (
    <div className="flex flex-col gap-6 mt-8">
      <h1 className="text-3xl font-semibold mb-4">Sign up</h1>
      <Form action="/api/signup">
        <div className="flex flex-col gap-4">
          <label htmlFor="username" className="text-sm text-gray-600 mb-1">
            Username
          </label>
          <input
            name="username"
            id="username"
            className="border rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="password" className="text-sm text-gray-600 mb-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="border rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 mt-2"
        >
          Sign up
        </button>
      </Form>
      <p className="mt-2 text-sm text-gray-600">
        Already have an account?{' '}
        <Link href="/login" className="text-blue-500 hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default Page;
