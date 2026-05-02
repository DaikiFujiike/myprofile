"use client";

export function SettingsForm() {
  return (
    <form>
      <label htmlFor="notify">デイリーリマインド</label>
      <select id="notify" name="notify" defaultValue="morning">
        <option value="morning">朝</option>
        <option value="night">夜</option>
      </select>
      <button type="submit">保存</button>
    </form>
  );
}
