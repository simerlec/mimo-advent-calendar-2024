export interface CalendarData {
  [key: number]: CalendarEntry;
}

const POTM = [
  "-k6x0ur", // helene
  "2030i5z", // christopher
  "1ooz9d", // kevin
  "-ndf2qx", // andrea
  "1rfwng", // peter
  "1mhnwm", // georg
  "-hrhnt5", // milica
  "EMPTY",
  "1xd93", // imre
  "-ego3r0", // thomas
  "-nualxw", // johannes
  "-exw6qa", // sheila
  "1kwambv", // alex
  "-irwz5k", // kedson
  "EMPTY",
  "-i54rem", // lorenz
  "-m321w5", // dennis
  "-dk8x7l", // venkat
  "1ome7a", // katya
  "1m0cts", // filip
  "1pshc0", // merci
  "EMPTY", // EMPTY
  "1n1frs", // henry
  "1x6opl", // zsofi
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
