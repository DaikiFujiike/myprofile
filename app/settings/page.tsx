'use client';import { createClient } from '@/lib/supabase/client';
export default function S(){const out=async()=>{await createClient().auth.signOut();location.href='/login'};return <main className='p-8'><div className='card'><button onClick={out} className='px-4 py-2 rounded-xl border'>ログアウト</button></div></main>}
