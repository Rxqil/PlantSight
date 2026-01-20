import dynamic from "next/dynamic";
import { saveEvent } from "../lib/offlineEvents";
import { syncEvents } from "../lib/sync";

const QrReader = dynamic(() => import("react-qr-reader"), {
  ssr: false
});

export default function Scan() {
  const handleScan = async (data) => {
    if (!data) return;
    const payload = JSON.parse(data);

    await saveEvent({
      user_id: 1,
      zone_id: payload.zone_id,
      event_type: payload.event_type
    });

    await syncEvents();
    alert("Scan recorded");
  };

  return <QrReader onScan={handleScan} />;
}
