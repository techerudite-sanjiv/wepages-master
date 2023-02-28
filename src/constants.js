export const bookings = [
    {
      name: " niranjan",
      eventStartTime: "9:00",
      eventEndTime: "10:00",
    },
    {
      name: "akshay",
      eventStartTime: "17:00",
      eventEndTime: "18:00",
    },
    {
      name: "piyush",
      eventStartTime: "09:00",
      eventEndTime: "11:00",
    },
    {
      name: "ujjaval",

      eventStartTime: "10:15",
      eventEndTime: "11:00",
    },
   
  ];
  
  export const convertTimeToDecimal = (time) => {
    return time.replace(":", ".");
  };