import { auth } from '@/auth/lucia';
import * as context from 'next/headers';
import { redirect } from 'next/navigation';

import Form from '@/components/form';
import { cache } from 'react';

export const getPageSession = cache(() => {
  const authRequest = auth.handleRequest('GET', context);
  return authRequest.validate();
});

const Page = async () => {
  const session = await getPageSession();

  if (!session) redirect('/login');
  return (
    <div className="flex flex-col">
      <h1 className="text-xl">Profile</h1>
      <p className="text-lg">User id: {session.user.userId}</p>
      <p className="text-lg">Username: {session.user.username}</p>
      <Form action="/api/logout">
        <input
          type="submit"
          value="Sign out"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 mt-2"
        />
      </Form>
    </div>
  );
};

export default Page;
