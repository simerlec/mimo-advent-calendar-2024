import christopher from "../resources/images/christopher.png";
import christopher_uncovered from "../resources/images/christopher_uncovered.png";
export interface CalendarData {
  [key: number]: CalendarEntry;
}

export interface CalendarEntry {
  day: number;
  image: string;
  image_uncovered: string;
}

const data: CalendarData = {
  0: {
    day: 1,
    image: christopher,
    image_uncovered: christopher_uncovered,
  },
};

export default data;
