import day1 from "../resources/images/-k6x0ur.png"; //helene
import day1_uncovered from "../resources/images/-k6x0ur_uncovered.png";
import day2 from "../resources/images/2030i5z.png"; //christopher
import day2_uncovered from "../resources/images/2030i5z_uncovered.png";
import day3 from "../resources/images/1ooz9d.png"; //kevin
import day3_uncovered from "../resources/images/1ooz9d_uncovered.png";
import day4 from "../resources/images/-ndf2qx.png"; //andrea
import day4_uncovered from "../resources/images/-ndf2qx_uncovered.png";
import day5 from "../resources/images/1rfwng.png"; //peter
import day5_uncovered from "../resources/images/1rfwng_uncovered.png";
import day6 from "../resources/images/1mhnwm.png"; //georg
import day6_uncovered from "../resources/images/1mhnwm_uncovered.png";
import day7 from "../resources/images/-hrhnt5.png"; //milica
import day7_uncovered from "../resources/images/-hrhnt5_uncovered.png";
import day9 from "../resources/images/1xd93.png"; //imre
import day9_uncovered from "../resources/images/1xd93_uncovered.png";
import day10 from "../resources/images/-ego3r0.png"; //thomas
import day10_uncovered from "../resources/images/-ego3r0_uncovered.png";
import day11 from "../resources/images/-nualxw.png"; //johannes
import day11_uncovered from "../resources/images/-nualxw_uncovered.png";
import day12 from "../resources/images/-exw6qa.png"; //sheila
import day12_uncovered from "../resources/images/-exw6qa_uncovered.png";
import day13 from "../resources/images/1kwambv.png"; //alex
import day13_uncovered from "../resources/images/1kwambv_uncovered.png";
import day14 from "../resources/images/-irwz5k.png"; //kedson
import day14_uncovered from "../resources/images/-irwz5k_uncovered.png";
import day16 from "../resources/images/-i54rem.png"; //lorenz
import day16_uncovered from "../resources/images/-i54rem_uncovered.png";
import day17 from "../resources/images/-m321w5.png"; //dennis
import day17_uncovered from "../resources/images/-m321w5_uncovered.png";
import day18 from "../resources/images/-dk8x7l.png"; //venkat
import day18_uncovered from "../resources/images/-dk8x7l_uncovered.png";
import day19 from "../resources/images/1ome7a.png"; //katya
import day19_uncovered from "../resources/images/1ome7a_uncovered.png";
import day20 from "../resources/images/1m0cts.png"; //filip
import day20_uncovered from "../resources/images/1m0cts_uncovered.png";
import day21 from "../resources/images/1pshc0.png"; //merci
import day21_uncovered from "../resources/images/1pshc0_uncovered.png";
import day23 from "../resources/images/1n1frs.png"; //henry
import day23_uncovered from "../resources/images/1n1frs_uncovered.png";
import day24 from "../resources/images/1x6opl.png"; //zsofi
import day24_uncovered from "../resources/images/1x6opl_uncovered.png";

export interface CalendarData {
  [key: number]: CalendarEntry;
}

type POTMEntry =
  | {
      type: "potm";
      regular: string;
      uncovered: string;
    }
  | {
      type: "empty";
    };

const POTM: POTMEntry[] = [
  { type: "potm", regular: day1, uncovered: day1_uncovered },
  { type: "potm", regular: day2, uncovered: day2_uncovered },
  { type: "potm", regular: day3, uncovered: day3_uncovered },
  { type: "potm", regular: day4, uncovered: day4_uncovered },
  { type: "potm", regular: day5, uncovered: day5_uncovered },
  { type: "potm", regular: day6, uncovered: day6_uncovered },
  { type: "potm", regular: day7, uncovered: day7_uncovered },
  { type: "empty" },
  { type: "potm", regular: day9, uncovered: day9_uncovered },
  { type: "potm", regular: day10, uncovered: day10_uncovered },
  { type: "potm", regular: day11, uncovered: day11_uncovered },
  { type: "potm", regular: day12, uncovered: day12_uncovered },
  { type: "potm", regular: day13, uncovered: day13_uncovered },
  { type: "potm", regular: day14, uncovered: day14_uncovered },
  { type: "empty" },
  { type: "potm", regular: day16, uncovered: day16_uncovered },
  { type: "potm", regular: day17, uncovered: day17_uncovered },
  { type: "potm", regular: day18, uncovered: day18_uncovered },
  { type: "potm", regular: day19, uncovered: day19_uncovered },
  { type: "potm", regular: day20, uncovered: day20_uncovered },
  { type: "potm", regular: day21, uncovered: day21_uncovered },
  { type: "empty" },
  { type: "potm", regular: day23, uncovered: day23_uncovered },
  { type: "potm", regular: day24, uncovered: day24_uncovered },
];

export type CalendarEntry =
  | { type: "potm"; day: number; image: string; image_uncovered: string }
  | {
      type: "empty";
      day: number;
    };

const data: CalendarData = POTM.reduce(
  (acc: CalendarData, curr, index: number) => {
    if (curr.type === "empty") {
      acc[index] = {
        type: "empty",
        day: index + 1,
      };
    } else {
      acc[index] = {
        type: "potm",
        day: index + 1,
        image: curr.regular,
        image_uncovered: curr.uncovered,
      };
    }
    return acc;
  },
  {}
);

export default data;
