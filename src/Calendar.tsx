import React, { useEffect, useState } from "react";
import cornerDecoration from "./../resources/corner-decoration3.png";
import santa from "./../resources/santa.png";
import merry from "./../resources/merry.png";
import data, { doors } from "./Data";
import Modal from "./Modal";
import dayjs from "dayjs";
import mascotSad from "./../resources/mascotSad.png";

export default function CalendarComponent() {
  const [disableDateCheck] = useState(() => {
    const dateCheckDisabled =
      window.location.search.includes("disableDateCheck");
    if (dateCheckDisabled) {
      console.log("[DEBUG]:date check disabled");
    }
    return dateCheckDisabled;
  });
  const [selectedDay, setSelectedDay] = React.useState<number | null>(
    getSelectedDayFromURL
  );

  function checkForFutureDay({ doorNumber }: { doorNumber: number }) {
    return (
      !disableDateCheck &&
      process.env.NODE_ENV === "production" &&
      (doorNumber > dayjs().date() || dayjs().month() !== 11)
    );
  }

  function getSelectedDayFromURL() {
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let dayNumber = params.get("day");

    if (!dayNumber || isNaN(Number(dayNumber))) {
      return null;
    }

    const doorNumber = Math.min(Math.max(1, Number(dayNumber)), 24);

    //prevent peeking at future days
    if (checkForFutureDay({ doorNumber })) {
      return null;
    }

    return doorNumber;
  }

  function onPopState() {
    setSelectedDay(getSelectedDayFromURL());
  }

  useEffect(() => {
    window.addEventListener("popstate", onPopState);
    return () => {
      window.removeEventListener("popstate", onPopState);
    };
  }, []);

  function onDayClick(doorNumber: number) {
    if (checkForFutureDay({ doorNumber })) {
      setSelectedDay(-1);
      return;
    }

    setSelectedDay(doorNumber);
    window.history.pushState(
      null,
      "",
      `${window.location.pathname}?day=${doorNumber}`
    );
    document.body.style.overflow = "hidden";
    document.body.style.position = "relative";
  }

  function shouldDoorBeOpen(doorNumber: number) {
    const currentDay = dayjs().date();
    const currentMonth = dayjs().month();
    return doorNumber < currentDay && currentMonth === 11;
  }

  return (
    <>
      <img
        className="block xl:hidden z-10"
        src={merry}
        alt="merry christmas"
      ></img>
      {disableDateCheck && (
        <p className="text-red-500 text-center py-10">
          [DEBUG]: Date check disabled
        </p>
      )}
      <main>
        {doors.map((doorNumber) => {
          return (
            <article
              key={doorNumber}
              onClick={() => onDayClick(doorNumber)}
              className={
                selectedDay === doorNumber || shouldDoorBeOpen(doorNumber)
                  ? "present present--selected"
                  : "present"
              }
            >
              <div className="present__pane">
                <h2 className="present__date">{doorNumber}</h2>
              </div>
              <div className="present__content">
                {doorNumber === 8 || doorNumber === 15 || doorNumber === 22 ? (
                  <img className="h-20 w-20" src={mascotSad} alt="mascot sad" />
                ) : (
                  <div className="present__bauble">🎁</div>
                )}
                <span className="text-product2-content-secondary absolute bottom-2 right-3">
                  {doorNumber}
                </span>
              </div>
            </article>
          );
        })}
      </main>
      <Modal
        calendarEntry={selectedDay ? data[selectedDay - 1] : null}
        isShown={selectedDay !== null}
        closeModal={() => {
          setSelectedDay(null);
          window.history.pushState(null, "", `${window.location.pathname}`);
        }}
      ></Modal>
      <img
        className="z-10 hidden xl:block absolute -top-10 -left-10 transform -rotate-12 scale-75 pointer-events-none"
        src={merry}
        alt="merry christmas"
      ></img>
      <img
        className="z-10 hidden xl:block absolute origin-top-right transform scale-50 right-0 top-0 rotate-180 -translate-x-1/2 translate-y-1/2 pointer-events-none"
        src={cornerDecoration}
        alt="corner decoration"
      ></img>
      <img
        className="z-10 hidden xl:block absolute origin-top-right transform scale-50 left-0 bottom-0 -translate-x-1/2 translate-y-1/2 pointer-events-none"
        src={cornerDecoration}
        alt="corner decoration"
      ></img>
      <img
        className="z-10 xl:hidden mt-20"
        src={santa}
        alt="corner decoration pointer-events-none"
      ></img>
    </>
  );
}
