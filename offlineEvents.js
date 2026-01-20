import { dbPromise } from "./db";

export async function saveEvent(event) {
  const db = await dbPromise;
  await db.add("events", {
    ...event,
    synced: false,
    created_at: new Date().toISOString()
  });
}
