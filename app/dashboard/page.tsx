import { ActionItemCard } from "@/components/ActionItemCard";
import { DailyQuestionCard } from "@/components/DailyQuestionCard";
import { Header } from "@/components/Header";
import { ReflectionCard } from "@/components/ReflectionCard";
import { Sidebar } from "@/components/Sidebar";
import Link from "next/link";
import { reflectionSessions, todaysQuestion } from "@/lib/mockData";

export default function DashboardPage() {
  return (
    <main>
      <Header />
      <Sidebar />
      <DailyQuestionCard question={todaysQuestion} />
      <section>
        <h2>最近の対話</h2>
        {reflectionSessions.slice(0, 2).map((session) => (
          <ReflectionCard key={session.id} session={session} />
        ))}
      </section>
      <ActionItemCard showOnlyPending />
      <section>
        <h2>今日の状態メモ導線</h2>
        <p>いまの気分・体調・集中度を30秒で記録しましょう。</p>
        <Link href="/reflection/new">状態メモを残す</Link>
      </section>
    </main>
  );
}
