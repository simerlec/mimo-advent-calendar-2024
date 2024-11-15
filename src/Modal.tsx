import React from "react";
import { MdClose } from "react-icons/md";
import { CalendarEntry } from "./Data";
import squirrel from "./../resources/squirrel.png";

export default function Modal({
  calendarEntry,
  isShown,
  closeModal,
}: {
  calendarEntry: CalendarEntry;
  isShown: boolean;
  closeModal: () => void;
}) {
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
}
