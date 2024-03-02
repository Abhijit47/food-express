export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function sendResponse(
  status,
  statusCode,
  message,
  data,
  currentPage,
  currentResult,
  totalPage,
  totalRecord,
) {
  return new Response(
    JSON.stringify(
      {
        status: status,
        message: message,
        data: data,
        currentPage: currentPage,
        currentResult: currentResult,
        totalPage: totalPage,
        totalRecord: totalRecord,
      },
      "",
      2,
    ),
    { status: statusCode, headers: { "Content-Type": "application/json" } },
  );
}

export function customDate(date = Date) {
  const newDate = date ?? new Date();

  return new Date(newDate).toLocaleDateString("en-IN", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "2-digit",
    // dateStyle: "short",
  });
}

export function calcDateTime(date) {
  const localDateTime = date ?? new Date();

  return new Date(localDateTime).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function calcYear(date = Date) {
  const year = date || new Date();
  return new Intl.DateTimeFormat("en-IN", { year: "numeric" }).format(
    new Date(year),
  );
}

export function calcDayMonth(date = Date) {
  const dayMonth = date || new Date(date);
  return new Intl.DateTimeFormat("en-IN", {
    month: "short",
    day: "numeric",
  }).format(new Date(dayMonth));
}

export function maskString(str = "") {
  if (typeof str === "undefined") {
    return "No id provided";
  }

  if (str.length !== 24) {
    return "invalid string length";
  }

  return "xxxx" + str.slice(-4);
}

export function createIngredients(recipe = {}) {
  if (Object.keys(recipe).length <= 0) {
    return "No recipe ingredients provided";
  } else {
    const ingredients = Object.entries(recipe)
      .filter((entry) => entry[0].startsWith("ingredient") && entry[1] !== "")
      .map((ing) => {
        const ingArr = ing[1].split(",").map((el) => el.trim());

        if (ingArr.length !== 3) {
          return "Wrong ingredient format! Please use the correct format :)";
        }

        const [quantity, unit, description] = ingArr;

        return { quantity: quantity ? +quantity : null, unit, description };
      });
    return ingredients;
  }

  // Special thanks to my tutor Jonas Schmedttmann who created this type of logic i have some modification and re-use it.
}

const array = [15, 16, 17, 18, 19];

function reducer(accumulator, currentValue, index) {
  const returns = accumulator + currentValue;
  console.log(
    `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
  );
  return returns;
}

// array.reduce(reducer);

export function lowerCase(str = "") {
  return str.toLowerCase();
}

export function upperCase(str = "") {
  return str.toUpperCase();
}

export function capitalize(str = "") {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
