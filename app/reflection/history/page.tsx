import Link from "next/link";
import { reflectionSessions } from "@/lib/mockData";
import { EmotionalTag } from "@/components/EmotionalTag";

export default function ReflectionHistoryPage() {
  return (
    <main>
      <h1>セッション履歴</h1>
      {reflectionSessions.map((session) => (
        <article key={session.id}>
          <h2>{session.title}</h2>
          <p>{session.date}</p>
          <div>{session.tags.map((tag) => <EmotionalTag key={tag} tag={tag} />)}</div>
          <p>要約: {session.summary}</p>
          <p>次の一手: {session.nextStep}</p>
          <Link href={`/reflection/${session.id}`}>セッション詳細へ</Link>
        </article>
      ))}
    </main>
  );
}
