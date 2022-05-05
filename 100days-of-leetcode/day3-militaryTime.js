/*
 * toMillitaryTime: Given a string in civilian time format and returns the time in military format.
 *
 * Signature: (time = String) -> String
 *
 * Examples:
 * 1. toMillitaryTime("9:45am") -> "0945"
 * 2. toMillitaryTime("12:00am") -> "0000"
 * 3. toMillitaryTime("12:00pm") -> "1200"
 * 4. toMillitaryTime("4:01pm") -> "1601"
 *
 * Hints:
 * 1. What are the edge-cases to be aware of?
 * 2. Regular expressions may be helpful for parsing.
 * 3. Look into the % operator.
 */

//Convert civilian time string to military time format.


// FUNCTION WITHOUT REGULAR EXPRESSIONS

function toMilitaryTime(string){
  //parse input string (split it)
  let parts = string.split(":");
  let hours = parts[0];
  let minutes = parts[1].substring(0, 2);
  let period = parts[1].substring(2, 4);

  //if period is am, hours will return 0 concat hours if hours are <9 else just return hours
  if (period === "am") {
    if(hours < 10 && hours >= 0) {
      return "0".concat(hours).concat(minutes);
    } else if (hours >= 10 && hours < 12) {
      return hours.concat(minutes);
    } else if (hours === "12") {
      //EDGE CASE FOR 12:00AM
      return "00".concat(minutes);
    } else {
      return "ERROR: Invalid time.";
    }
  //else if period is pm
  } else if (period === "pm") {
    //if hours is not 12, return hours + 12 concated with minutes
    if (hours < 12 && hours >= 0) {
      return JSON.stringify(Number(hours) + 12).concat(minutes);
    //else return hours concated with minutes
    } else if (hours === "12") {
      //EDGE CASE FOR HOURS 12-12:59PM.
      return hours.concat(minutes);
    } else {
      return "ERROR: Invalid time."
    }
  }
}

//FUNCTION w/ REGULAR EXPRESSION
let TIME_REGEX = /^(1[0-2]|0?[1-9]):([0-5][0-9])( ?[ap]m)$/

let parseCivilianTime = (time) => {
  let [, hours, minutes, period] = time.match(TIME_REGEX);
  return {
    hours: Number(hours),
    minutes, 
    period: period.toUpperCase(),
  };
};

let toMilitaryTime = (time) => {
  let { hours, minutes, period } = parseCivilianTime(time);
  let militaryHours = (hours % 12) + (period === "PM" ? 12 : 0);

  return militaryHours.toString().padStart(2, "0") + minutes;
};



//TEST SUITE
[
  ["9:45am", "0945"],
  ["11:59am", "1159"],
  ["12:00am", "0000"],
  ["12:01am", "0001"],
  ["12:00pm", "1200"],
  ["4:01pm", "1601"],
].forEach(([input, expected]) => {
  let output = toMilitaryTime(input);
  console.log(output, expected);
})




// console.log(toMilitaryTime("9:45am"));
// console.log(toMilitaryTime("11:59am"));
// console.log(toMilitaryTime("12:00am"));
// console.log(toMilitaryTime("12:01am"));
// console.log(toMilitaryTime("12:00pm"));
// console.log(toMilitaryTime("4:01pm"));
// console.log(toMilitaryTime("44:01pm"));
// console.log(toMilitaryTime("-10:01am"));
