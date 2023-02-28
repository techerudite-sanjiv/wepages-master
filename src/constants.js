export const bookings = [
    {
      name: "Event1",
      eventStartTime: "9:00",
      eventEndTime: "10:00",
    },
    {
      name: "Event2",
      eventStartTime: "17:00",
      eventEndTime: "18:00",
    },
    {
      name: "Event3",
      eventStartTime: "12:00",
      eventEndTime: "13:00",
    },
    {
      name: "Event4",
      eventStartTime: "10:15",
      eventEndTime: "11:00",
    },
   
  ];
  
  export const convertTimeToDecimal = (time) => {
    return time.replace(":", ".");
  };