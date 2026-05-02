export type ActionItemStatus = "pending" | "done";

export type ActionItem = {
  id: string;
  title: string;
  dueDate: string;
  status: ActionItemStatus;
};

export type ReflectionSession = {
  id: string;
  title: string;
  date: string;
  tags: string[];
  summary: string;
  nextStep: string;
  conversationLog: { speaker: "user" | "coach"; message: string }[];
  digest: string;
  emotionalTags: string[];
  memo: string;
};

export const todaysQuestion = "今日、理想の自分に近づくために一つだけ手放すとしたら何ですか？";

export const actionItems: ActionItem[] = [
  { id: "a1", title: "朝10分のジャーナリングを継続する", dueDate: "2026-05-02", status: "pending" },
  { id: "a2", title: "振り返りで出た課題を1つ上司に相談する", dueDate: "2026-05-03", status: "pending" },
  { id: "a3", title: "先延ばしタスクを30分だけ着手する", dueDate: "2026-04-30", status: "done" },
];

export const reflectionSessions: ReflectionSession[] = [
  {
    id: "r1",
    title: "先延ばしの原因を深掘りしたセッション",
    date: "2026-04-30",
    tags: ["仕事", "習慣", "自己効力感"],
    summary: "完璧主義が着手のハードルを上げていたことを特定し、小さく始めるルールを設定した。",
    nextStep: "朝一で2分だけ着手する“起動タスク”を明日から3日続ける。",
    conversationLog: [
      { speaker: "user", message: "やるべきことは分かっているのに手が止まります。" },
      { speaker: "coach", message: "止まる直前の頭の中にどんな言葉がありますか？" },
      { speaker: "user", message: "中途半端にやるくらいなら後でちゃんと、です。" },
    ],
    digest: "“完璧で始める”ではなく“未完成で始める”に認知を転換。行動単位を2分に縮小したことが鍵。",
    emotionalTags: ["不安", "安心", "前向き"],
    memo: "2分着手ができた日は、終わった後に必ず自己承認の一言を書く。",
  },
  {
    id: "r2",
    title: "人間関係のモヤモヤを言語化したセッション",
    date: "2026-04-27",
    tags: ["対人", "境界線", "自己表現"],
    summary: "相手に合わせすぎる癖を認識し、Iメッセージで気持ちを伝える練習方針を立てた。",
    nextStep: "次回ミーティングで“私は〜と感じた”を1回使う。",
    conversationLog: [
      { speaker: "user", message: "断るのが苦手で、後から疲れてしまいます。" },
      { speaker: "coach", message: "断れないとき、守れていない自分のニーズは何でしょう？" },
    ],
    digest: "“嫌われたくない”の裏にある価値観は“調和”。調和を保ちながら自己尊重する表現を練習。",
    emotionalTags: ["戸惑い", "納得"],
    memo: "短文テンプレ:『今は対応が難しいです。○日までに回答します。』",
  },
];

export const getSessionById = (id: string) => reflectionSessions.find((s) => s.id === id);

export const toggleActionItemStatus = (items: ActionItem[], id: string) =>
  items.map((item) =>
    item.id === id ? { ...item, status: item.status === "pending" ? "done" : "pending" } : item,
  );
