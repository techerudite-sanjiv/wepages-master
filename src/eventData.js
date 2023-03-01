export const bookings = [
  {
    name: "Event1",
    eventStartTime: "9:00",
    eventEndTime: "10:00",
  },
  {
    name: "Event2",
    eventStartTime: "12:00",
    eventEndTime: "13:00",
  }, {
    name: "Event2",
    eventStartTime: "14:00",
    eventEndTime: "14:00",
  }, {
    name: "Event2",
    eventStartTime: "15:00",
    eventEndTime: "18:00",
  },
];

export const convertTimeToDecimal = (time) => {
  return time.replace(":", ".");
};