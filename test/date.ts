const string_date = "2023-12-24T00:00:00.000Z";

const date = new Date(string_date);

console.log(date);

console.log(
  Intl.DateTimeFormat("es", {
    timeZone: "GMT",
  }).format(date),
);
