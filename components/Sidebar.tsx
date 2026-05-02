import Link from "next/link";

export function Sidebar() {
  return (
    <aside>
      <nav>
        <ul>
          <li><Link href="/dashboard">ダッシュボード</Link></li>
          <li><Link href="/reflection/history">対話履歴</Link></li>
          <li><Link href="/settings">設定</Link></li>
        </ul>
      </nav>
    </aside>
  );
}
