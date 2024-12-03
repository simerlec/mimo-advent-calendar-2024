import React from "react";
import { MdClose } from "react-icons/md";
import { CalendarEntry } from "./Data";
import squirrel from "./../resources/squirrel.png";
import mascotSad from "./../resources/mascotSad.png";
import { useEffect, useRef } from "react";
import dayjs from "dayjs";

export default function Modal({
  calendarEntry,
  isShown,
  closeModal,
}: {
  calendarEntry: CalendarEntry | null;
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

  const imgRef = useRef<HTMLImageElement>(null);
  const targetRotation = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef<number>();
  const currentRotation = useRef({ x: 0, y: 0 });

  useEffect(() => {
    function animate() {
      if (!imgRef.current) return;

      currentRotation.current = {
        x:
          currentRotation.current.x +
          (targetRotation.current.x - currentRotation.current.x) * 0.1,
        y:
          currentRotation.current.y +
          (targetRotation.current.y - currentRotation.current.y) * 0.1,
      };

      imgRef.current.style.transform = `perspective(1000px) rotateX(${currentRotation.current.x}deg) rotateY(${currentRotation.current.y}deg)`;
      animationFrameId.current = requestAnimationFrame(animate);
    }

    animationFrameId.current = requestAnimationFrame(animate);
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!imgRef.current) return;

    const rect = imgRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    targetRotation.current = {
      x: ((e.clientY - centerY) / (rect.height / 2)) * -10,
      y: ((e.clientX - centerX) / (rect.width / 2)) * 10,
    };
  }

  function resetRotation() {
    targetRotation.current = { x: 0, y: 0 };
  }

  const imageSrc =
    calendarEntry?.type === "potm"
      ? dayjs().date() > calendarEntry.day
        ? calendarEntry.image_uncovered
        : calendarEntry.image
      : squirrel;

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
        onMouseMove={handleMouseMove}
        onMouseLeave={resetRotation}
        className="flex flex-col relative shadow bg-product2-background-secondary rounded-2xl p-10 sm:px-10 box-border overflow-y-auto max-h-full sm:max-h-[75%]"
      >
        <button
          onClick={(e) => onCloseModal(e)}
          className="absolute top-3 right-3 text-2xl self-end hover:bg-product2-background-secondary rounded-lg p-1 text-product2-content-secondary"
        >
          <MdClose></MdClose>
        </button>
        {calendarEntry ? (
          calendarEntry.type === "potm" ? (
            <img
              ref={imgRef}
              src={imageSrc}
              alt="who is it"
              style={{
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
                willChange: "transform",
                transition: "transform 0.1s",
              }}
              className="max-w-[400px] object-contain filter drop-shadow-lg hover:scale-[102%] transition-all duration-300"
            />
          ) : (
            <div className="flex flex-col items-center space-y-8">
              <img src={mascotSad} alt="mascot sad" />
              <h1 className="text-2xl font-bold text-product2-content-accentLight">
                404 - POTM not found
              </h1>
              <p className="text-lg text-product2-content-primary font">
                Hire more Android devs!
              </p>
            </div>
          )
        ) : (
          <>
            <img
              src={squirrel}
              alt="squirrel"
              className="rounded-lg object-cover self-center"
            ></img>
            <p className="mt-2 text-center text-product2-content-primary">
              No peeking you nosy squirrel 😘
            </p>
          </>
        )}
      </div>
    </div>
  );
}
