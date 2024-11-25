export interface CalendarData {
  [key: number]: CalendarEntry;
}

const POTM = [
  "helene",
  "kedson",
  "thomas",
  "andrea",
  "peter",
  "georg",
  "milica",
  "EMPTY",
  "imre",
  "kevin",
  "johannes",
  "sheila",
  "alex",
  "christopher",
  "EMPTY",
  "lorenz",
  "dennis",
  "venkat",
  "katya",
  "filip",
  "merci",
  "EMPTY",
  "henry",
  "zsofi",
];

export type CalendarEntry =
  | { type: "potm"; day: number; image: string; image_uncovered: string }
  | {
      type: "empty";
      day: number;
    };

const data: CalendarData = POTM.reduce(
  (acc: CalendarData, curr: string, index: number) => {
    if (curr === "EMPTY") {
      acc[index] = {
        type: "empty",
        day: index + 1,
      };
    } else {
      acc[index] = {
        type: "potm",
        day: index + 1,
        image: `${curr}.png`,
        image_uncovered: `${curr}_uncovered.png`,
      };
    }
    return acc;
  },
  {}
);

export default data;
