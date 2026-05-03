'use client';

import { useState } from 'react';

export default function NewPage() {
  const [input, setInput] = useState('');
  const [res, setRes] = useState('');
  const [loading, setLoading] = useState(false);

  const send = async () => {
    if (!input || loading) return;
    setLoading(true);

    const reply = `受け取りました。\n\n要約: ${input.slice(0, 80)}${input.length > 80 ? '…' : ''}\n\n次の一手: いま書いた内容を3分で1つだけ行動に変えるとしたら何をしますか？`;
    setRes(reply);
    setLoading(false);
  };

  return (
    <main className='max-w-4xl mx-auto p-8'>
      <div className='card space-y-3'>
        <textarea value={input} onChange={e => setInput(e.target.value)} className='w-full min-h-32 border rounded-xl p-3' />
        <button onClick={send} disabled={!input || loading} className='px-4 py-2 rounded-xl bg-accent text-white'>
          {loading ? '送信中' : '送信'}
        </button>
        {res && <pre className='whitespace-pre-wrap text-sm'>{res}</pre>}
      </div>
    </main>
  );
}
