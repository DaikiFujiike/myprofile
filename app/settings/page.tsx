'use client';

import { useRouter } from 'next/navigation';

const AUTH_KEY = 'selftalklab-auth';

export default function SettingsPage() {
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem(AUTH_KEY);
    router.push('/login');
  };

  return (
    <main className='p-8'>
      <div className='card'>
        <button onClick={logout} className='px-4 py-2 rounded-xl border'>
          ログアウト
        </button>
      </div>
    </main>
  );
}
