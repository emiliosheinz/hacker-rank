function timeConversion(s = "") {
  const AM = "AM";
  const PM = "PM";

  const replaceHour = (string, hour) => hour + string.substr(2, string.length);
  const removePeriod = (string) => string.replace(AM, "").replace(PM, "");

  const hour = s.substring(0, 2);
  const isPM = s.includes(PM);
  const hourWithoutPeriod = removePeriod(s);

  if (hour === "12") {
    return isPM ? hourWithoutPeriod : replaceHour(hourWithoutPeriod, "00");
  }

  return isPM
    ? replaceHour(hourWithoutPeriod, Number(hour) + 12)
    : hourWithoutPeriod;
}

console.log(timeConversion("12:05:45PM"));
console.log(timeConversion("12:05:45AM"));
console.log(timeConversion("07:05:45PM"));
console.log(timeConversion("07:05:45AM"));
