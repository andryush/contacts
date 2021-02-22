export const findNationality = (shortName, list) => {
  for (let i = 0; i < list.length; i++) {
    if (list[i].alpha_2_code === shortName) {
      return list[i].nationality;
    }
  }
  return "Not found";
};

export const dateConverter = (data) => {
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const date = new Date(data);
  const dayOfWeek = daysOfWeek[date.getDay()];
  const yearDayMonth = date.toLocaleDateString("en-US");
  const timeString = data
    .substring(data.indexOf("T") + 1, data.indexOf("."))
    .split(":");
  let [hours, minutes, seconds] = timeString;
  hours = Number(hours);
  let amPM = "";
  if (hours > 12) {
    hours = hours - 12;
    amPM = "PM";
  } else {
    amPM = "AM";
  }
  return `${dayOfWeek}, ${yearDayMonth}, ${hours}:${minutes}:${seconds} ${amPM}`;
};
