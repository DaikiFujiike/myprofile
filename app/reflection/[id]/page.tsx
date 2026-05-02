import { notFound } from "next/navigation";
import { EmotionalTag } from "@/components/EmotionalTag";
import { ReflectionDigestCard } from "@/components/ReflectionDigestCard";
import { getSessionById } from "@/lib/mockData";

export default async function ReflectionDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const session = getSessionById(id);

  if (!session) return notFound();

  return (
    <main>
      <h1>{session.title}</h1>
      <p>{session.date}</p>

      <section>
        <h2>会話ログ</h2>
        <ul>
          {session.conversationLog.map((line, idx) => (
            <li key={`${session.id}-${idx}`}>
              <strong>{line.speaker === "user" ? "あなた" : "コーチ"}:</strong> {line.message}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>要約</h2>
        <p>{session.summary}</p>
      </section>

      <ReflectionDigestCard digest={session.digest} />

      <section>
        <h3>感情タグ</h3>
        {session.emotionalTags.map((tag) => (
          <EmotionalTag key={tag} tag={tag} />
        ))}
      </section>

      <section>
        <h3>次アクション</h3>
        <p>{session.nextStep}</p>
      </section>

      <section>
        <h3>追記メモ</h3>
        <p>{session.memo}</p>
      </section>
    </main>
  );
}
