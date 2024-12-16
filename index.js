// ticket pricing

function getTicketPrice() {
  const age = parseInt(prompt("Please enter your age:"), 10);

  let ticketPrice;
  if (age <= 12) {
    ticketPrice = 10;
  } else if (age >= 13 && age <= 17) {
    ticketPrice = 15;
  } else if (age >= 18) {
    ticketPrice = 20;
  } else {
    console.log("Invalid age entered.");
    return;
  }

  console.log(`The ticket price for age ${age} is $${ticketPrice}.`);
}

getTicketPrice();

// Weather Clothing Adviser

function weatherClothingAdviser() {
  const temperature = parseInt(
    prompt("Enter the current temperature (in °C):"),
    10
  );

  const isRaining = prompt("Is it raining? (yes or no):").toLowerCase();

  let advice;

  if (temperature < 10) {
    advice = "It's cold outside. Wear a heavy coat, scarf, and gloves.";
    if (isRaining === "yes") {
      advice += " Don't forget a waterproof jacket and boots.";
    }
  } else if (temperature >= 10 && temperature <= 20) {
    advice = "It's cool outside. Wear a light jacket or sweater.";
    if (isRaining === "yes") {
      advice += " Take an umbrella or a raincoat.";
    }
  } else {
    advice =
      "It's warm outside. You can wear light clothing like a t-shirt and shorts.";
    if (isRaining === "yes") {
      advice += " Bring an umbrella just in case.";
    }
  }

  console.log(advice);
}

weatherClothingAdviser();

// power function
function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  }

  return base * power(base, exponent - 1);
}

const base = parseFloat(prompt("Enter the base number:"));
const exponent = parseInt(
  prompt("Enter the exponent (non-negative integer):"),
  10
);

if (exponent >= 0) {
  console.log(
    `${base} raised to the power of ${exponent} is ${power(base, exponent)}`
  );
} else {
  console.log("Please enter a non-negative integer for the exponent.");
}

// Palindrome Checker

function isPalindrome(str) {
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  function checkRecursive(cleanStr, start, end) {
    if (start >= end) {
      return true;
    }

    if (cleanStr[start] !== cleanStr[end]) {
      return false;
    }

    return checkRecursive(cleanStr, start + 1, end - 1);
  }

  return checkRecursive(cleanStr, 0, cleanStr.length - 1);
}

const input = prompt("Enter a string to check if it's a palindrome:");
if (isPalindrome(input)) {
  console.log(`"${input}" is a palindrome.`);
} else {
  console.log(`"${input}" is not a palindrome.`);
}
