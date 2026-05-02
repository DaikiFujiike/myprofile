"use client";

import { useMemo, useState } from "react";
import { actionItems, toggleActionItemStatus } from "@/lib/mockData";

export function ActionItemCard({ showOnlyPending = false }: { showOnlyPending?: boolean }) {
  const [items, setItems] = useState(actionItems);
  const filtered = useMemo(
    () => (showOnlyPending ? items.filter((item) => item.status === "pending") : items),
    [items, showOnlyPending],
  );

  return (
    <section>
      <h3>{showOnlyPending ? "未完了アクション" : "アクション一覧"}</h3>
      <ul>
        {filtered.map((item) => (
          <li key={item.id}>
            <label>
              <input
                type="checkbox"
                checked={item.status === "done"}
                onChange={() => setItems((prev) => toggleActionItemStatus(prev, item.id))}
              />
              {item.title}（期限: {item.dueDate}）
            </label>
          </li>
        ))}
      </ul>
    </section>
  );
}
