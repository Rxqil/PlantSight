import { dbPromise } from "./db";

export async function syncEvents() {
  if (!navigator.onLine) return;

  const db = await dbPromise;
  const tx = db.transaction("events", "readwrite");
  const store = tx.objectStore("events");
  const events = await store.getAll();

  for (const event of events) {
    if (!event.synced) {
      await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/events`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(event)
        }
      );
      event.synced = true;
      store.put(event);
    }
  }

  await tx.done;
}
