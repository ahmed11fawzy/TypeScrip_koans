enum Month {
  Jan = 1,
  Feb,
  Mar,
  Apr,
  May,
  Jun,
  Jul,
  Aug,
  Sep,
  Oct,
  Nov,
  Dec,
}

const isItWinter = (month: Month): boolean => {
  switch (month) {
    case Month.Dec:
    case Month.Jan:
    case Month.Feb:
      return true;
    default:
      return false;
  }
};
console.log(isItWinter(Month.Dec));

console.log(isItWinter(11));
