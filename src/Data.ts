import christopher from "../resources/images/christopher.png";

export interface CalendarData {
  [key: number]: CalendarEntry;
}

export interface CalendarEntry {
  image: string;
}

const data: CalendarData = {
  0: {
    image: christopher,
  },
};

export default data;
