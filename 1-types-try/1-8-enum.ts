{
  // enum
  // There is no enum concept in JS.
  // jsstryle
  const DAYSJS = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNSDAY: 2 });
  const day1 = DAYSJS.MONDAY;

  // ts-style
  enum DAYS {
    Monday, // = 0 or set string manually.
    Tuesday,
    Wednsday,
    Thursday,
    Friday,
    Satarday,
    Sunday,
  }

  console.log(DAYS.Monday);

  let day = DAYS.Monday;
  day = 10; // NG
  console.log(day);

  // Union is better than enum.
  type Days = "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun";
  let day2: Days = "Mon";
}
