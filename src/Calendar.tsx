import React, { useEffect, useState } from "react";
import cornerDecoration from "./../resources/corner-decoration3.png";
import santa from "./../resources/santa.png";
import merry from "./../resources/merry.png";
import data from "./Data";
import Modal from "./Modal";

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

  function checkForFutureDay({ index }: { index: number }) {
    const currentDay = new Date();

    return (
      !disableDateCheck &&
      process.env.NODE_ENV === "production" &&
      (index + 1 > currentDay.getDate() || currentDay.getMonth() !== 11)
    );
  }

  function getSelectedDayFromURL() {
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let dayNumber = params.get("day");

    if (isNaN(Number(dayNumber))) {
      return null;
    }

    const index = Math.max(0, Number(dayNumber) - 1);

    //prevent peeking at future days
    if (checkForFutureDay({ index })) {
      return null;
    }

    return dayNumber ? Math.max(0, index) : null;
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

  function onDayClick(index: number) {
    if (checkForFutureDay({ index })) {
      setSelectedDay(-1);
      return;
    }

    setSelectedDay(index);
    window.history.pushState(
      null,
      "",
      `${window.location.pathname}?day=${index + 1}`
    );
    document.body.style.overflow = "hidden";
    document.body.style.position = "relative";
  }

  return (
    <>
      <img
        className="block xl:hidden z-10"
        src={merry}
        alt="merry christmas"
      ></img>
      <main>
        {Array(24)
          .fill(0)
          .map((_, index) => {
            return (
              <article
                key={index}
                onClick={() => onDayClick(index)}
                className={
                  selectedDay === index
                    ? "present present--selected"
                    : "present"
                }
              >
                <div className="present__pane">
                  <h2 className="present__date">{index + 1}</h2>
                </div>
                <div className="present__content">
                  <div className="present__bauble">🎁</div>
                </div>
              </article>
            );
          })}
      </main>
      <Modal
        calendarEntry={data[selectedDay || 0]}
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
