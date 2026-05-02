import Link from "next/link";
import type { ReflectionSession } from "@/lib/mockData";

export function ReflectionCard({ session }: { session: ReflectionSession }) {
  return (
    <article>
      <h3>{session.title}</h3>
      <p>{session.date}</p>
      <p>{session.summary}</p>
      <Link href={`/reflection/${session.id}`}>詳細を見る</Link>
    </article>
  );
}
