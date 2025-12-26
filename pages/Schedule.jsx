import { useEffect } from "react";
import ScheduleTemplate from "../src/Schedule/template";
import "../src/Schedule/styles.css";
import { initSchedule, cleanupSchedule } from "../src/Schedule/behavior";

export default function Schedule() {
  useEffect(() => {
    initSchedule();
    return () => cleanupSchedule();
  }, []);

  return <ScheduleTemplate />;
}
