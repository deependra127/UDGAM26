import { useEffect } from "react";
import ScheduleTemplate from "../src/Schedule/template";
import "../src/Schedule/styles.css";
import { InitSchedule, CleanupSchedule } from "../src/Schedule/behavior";

export default function Schedule() {
  // useEffect(() => {
  //   InitSchedule();
  //   return () => CleanupSchedule();
  // }, []);

  // return <ScheduleTemplate />;
  return(
        <div id="Sponsors" className="w-full h-[100vh] text-[#FFF9F0] font-[Creato_Display] text-[10.85vw] font-black leading-normal p-0 flex justify-center items-center">
            Coming Soon...
        </div>
    )
}
