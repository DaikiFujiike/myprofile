import './globals.css';
import Link from 'next/link';
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang='ja'><body><header className='border-b border-border bg-card'><div className='max-w-6xl mx-auto p-4 flex justify-between'><Link href='/'>SelfTalkLab</Link><nav className='space-x-4 text-sm'><Link href='/login'>ログイン</Link><Link href='/signup'>登録</Link></nav></div></header>{children}</body></html>}
