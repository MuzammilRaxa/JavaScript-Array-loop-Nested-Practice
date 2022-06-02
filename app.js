//1. Declare and initialize an empty multidimensional array.
//(Array of arrays)... ===============>>>>>>>
document.write(
  "<h5>01 : Declare and initialize an empty multidimensional array </h5>"
);

var multiDimentionArray = [[], [], []];
let multiDimentionalArray = [
  ["Muzammil Raza", "Muhammad Iqbal"],
  ["Ahmed Raza", "Muhammad Riaz"],
  ["Afzal", "Hashim"],
];
console.log(multiDimentionalArray);
document.write(multiDimentionalArray);
// 2. Declare and initialize a multidimensional array
// representing the following matrix:
document.write(
  "<h5>02 : Declare and initialize a multidimensional array representing the following matrix: </h5>"
);

let matrix = [
  [0, 1, 2, 3],
  [0, 1, 2, 3],
  [0, 1, 2, 3],
];
console.log(matrix);
document.write("<table border='1px' cellspacing='0px' >");

for (let i = 0; i < matrix.length; i++) {
  document.write("<tr>");
  for (let b = 0; b < matrix[i].length; b++) {
    document.write("<td>" + matrix[i][b] + "</td>");
  }
  // document.write("<br>");
  document.write("</tr>");
}
document.write("</table>");

//================>>>>>>>>> 1  to 10 Counting Using For loop;
document.write(
  "<h5>03 : Write a program to print numeric counting from 1 to 10. </h5>"
);

document.write("<h1> Question-03 </h1>");

for (var i = 0; i < 10; i++) {
  document.write(i + "<br/>");
}

//================>>>>>>>>> TABLE
document.write(
  "<h5>04 : Write a program to print multiplication table of anynumber using for loop. Table number & length should betaken as an input from user. </h5>"
);
document.write("<h1> Question-04 </h1>");

let userNumber = prompt("Type  Number for Multiplication Table");
let tableLength = prompt("Type  Number of Table Length");
for (var i = 1; i <= tableLength; i++) {
  document.write(`${userNumber} X ${i} =   ${userNumber * tableLength} <br> `);
}

//================>>>>>>>>> Loop On Array

document.write(
  "<h5> 05 : Write a program to print items of the following array using for loop:fruits = [“apple”, “banana”, “mango”, “orange”,“strawberry”]  </h5>"
);

document.write("<h1> Question-05 </h1>");
let fruit = ["Apple", "Mango ", "Banana  ", "Orange  ", "StrawBerry "];

for (let i = 0; i < fruit.length; i++) {
  document.write(fruit[i] + "<br/>");
}

for (let i = 0; i < fruit.length; i++) {
  document.write(`Element At Index ${i} is ${fruit[i]} <br/> `);
}

//================>>>>>>>>>

document.write("<h1> Question-06 </h1>");
document.write(
  "<h5> 06 : Generate the following series in your browser. See example output.  </h5>"
);

document.write("<br/><h1>Counting:</h1>");

for (let i = 0; i <= 15; i++) {
  document.write(i + ",");
}

document.write("<br/><h1> Reverse Counting:</h1>");
for (let i = 15; i >= 1; i--) {
  document.write(i + ",");
}

document.write("<br/><h1>Even Number :</h1>");
for (let i = 0; i <= 20; i++) {
  if (i % 2 == 0) {
    document.write(i + ",");
  }
}

document.write("<br/> <h1>Odd Number :</h1>");
for (let i = 0; i <= 20; i++) {
  if (i % 2 == 1) {
    document.write(i + ",");
  }
}

//================>>>>>>>>>
document.write("<h1> Question-07 </h1>");
document.write(
  "<h5> 07 : You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]Write a program to enable “search by user input” in anarray.  </h5>"
);

let bakeryItems = ["cake", "pastery", "chips", "patties"];
let costumerIte = prompt("type Your Favorit Item liek : Cake/Pastery/Chips...");
for (let i = 0; i < bakeryItems.length; i++) {
  if (bakeryItems[i] === costumerIte) {
    document.write(`Your Item ${costumerIte} is in Index ${i} `);
  }
}

if (bakeryItems[i] != costumerIte) {
  document.write(`Your Item ${costumerIte} is Not Avaiabe in our Store `);
}
