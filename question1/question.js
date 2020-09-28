const date = [
  1,
  "2",
  true,
  false,
  "A",
  123,
  undefined,
  null,
  "22",
  6,
  1,
  67,
  { value: "A" },
];

// see readme.md for information
date
  .filter(
    (element) =>
      typeof element === "number" ||
      (typeof element === "string" && !isNaN(Number(element)))
  )
  .sort((a, b) => a - b)
  .map((number) => console.log(number));

console.log("Done");
