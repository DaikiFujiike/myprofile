'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const AUTH_KEY = 'selftalklab-auth';

export default function AuthForm({ mode }: { mode: 'login' | 'signup' }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (mode === 'signup') {
      localStorage.setItem('selftalklab-user', JSON.stringify({ email }));
      setMsg('登録しました。ログイン画面からログインしてください');
      setLoading(false);
      return;
    }

    localStorage.setItem(AUTH_KEY, '1');
    setMsg('ログインしました');
    setLoading(false);
    router.push('/dashboard');
  };

  return (
    <form onSubmit={submit} className='card max-w-md mx-auto space-y-4'>
      <input className='w-full border rounded-xl p-3' placeholder='email' value={email} onChange={e => setEmail(e.target.value)} />
      <input type='password' className='w-full border rounded-xl p-3' placeholder='password' value={password} onChange={e => setPassword(e.target.value)} />
      <button disabled={loading || !email || !password} className='w-full bg-accent text-white rounded-xl p-3'>
        {loading ? '処理中...' : mode === 'login' ? 'ログイン' : '登録'}
      </button>
      {msg && <p className='text-sm text-muted'>{msg}</p>}
    </form>
  );
}
