/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/accessible-emoji */

import React, { FunctionComponent, useEffect } from "react";
import { render } from "react-dom";
import { MdClose } from "react-icons/md";
import cornerDecoration from "./../resources/corner-decoration3.png";
import santa from "./../resources/santa.png";
import merry from "./../resources/merry.png";
import squirrel from "./../resources/squirrel.png";
import data, { CalendarEntry } from "./Data";
import { tsParticles } from "tsparticles";
import { TS_PARTICLES_CONFIG } from "./tsparticles.config";

const App: FunctionComponent = () => {
  let search = window.location.search;
  let params = new URLSearchParams(search);
  let dayNumber = params.get("day");

  const [selectedDay, setSelectedDay] = React.useState<number | null>(
    getSelectedDayFromURL
  );

  function getSelectedDayFromURL() {
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let dayNumber = params.get("day");
    return dayNumber
      ? isNaN(Number(dayNumber))
        ? null
        : Math.max(0, Number(dayNumber) - 1)
      : null;
  }

  function onPopState() {
    setSelectedDay(getSelectedDayFromURL());
  }

  useEffect(() => {
    tsParticles.load("tsparticles", TS_PARTICLES_CONFIG as any);
    window.addEventListener("popstate", onPopState);
    return () => {
      window.removeEventListener("popstate", onPopState);
    };
  }, []);

  function onDayClick(index: number) {
    // NOTE: date check
    const currentDay = new Date();
    if (
      import.meta.env.VITE_DISABLE_DATE_CHECK !== "true" &&
      process.env.NODE_ENV === "production" &&
      (index + 1 > currentDay.getDate() || currentDay.getMonth() !== 11)
    ) {
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
      <div id="snow" className="-z-1"></div>
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
};

const Modal = ({
  calendarEntry,
  isShown,
  closeModal,
}: {
  calendarEntry: CalendarEntry;
  isShown: boolean;
  closeModal: () => void;
}) => {
  if (!isShown) {
    return null;
  }

  function onCloseModal(event: any) {
    event.preventDefault();
    document.body.style.overflow = "auto";
    closeModal();
  }

  return (
    <div
      onClick={(e) => onCloseModal(e)}
      className="fixed w-screen h-screen top-0 flex items-center justify-center z-30 p-4 bg-gray-800 bg-opacity-50 fadeIn"
    >
      <div
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        className="flex flex-col relative shadow bg-white rounded-md pt-10 pb-5 px-10 modal-width box-border overflow-y-auto max-h-full sm:max-h-[75%] "
      >
        <button
          onClick={(e) => onCloseModal(e)}
          className="absolute top-3 right-3 text-2xl self-end hover:text-red-700"
        >
          <MdClose></MdClose>
        </button>
        {calendarEntry ? (
          <div>
            <img
              src={calendarEntry.image}
              alt="delicious looking food"
              className="rounded-lg object-cover w-1/3 min-w-[100%] md:float-right md:min-w-[250px] md:ml-6 max-h-[400px]
              "
            />
            <h2>{calendarEntry.name}</h2>
            <h3>Ingredients</h3>
            <ul>
              {calendarEntry.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <h3>Instructions ({calendarEntry.instructions.length} steps)</h3>
            <ol className="mt-4 space-y-2">
              {calendarEntry.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
            {calendarEntry.story && (
              <>
                <h3>The Story</h3>
                <p>{calendarEntry.story}</p>
              </>
            )}
          </div>
        ) : (
          <>
            <img
              src={squirrel}
              alt="squirrel"
              className="rounded-lg object-cover self-center"
            ></img>
            <p className="mt-2 text-center">No peeking you nosy squirrel 😘 </p>
          </>
        )}
      </div>
    </div>
  );
};

render(<App />, document.getElementById("root"));
