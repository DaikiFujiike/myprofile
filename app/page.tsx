import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      <h1>Reflective Coach</h1>
      <p>ダッシュボードに移動してください。</p>
      <Link href="/dashboard">ダッシュボードへ</Link>
    </main>
  );
}
