//================>>>>>>>>> 1  to 10 Using For loop;
document.write("<h1> Question-01 </h1>")

for (var i = 0; i < 10; i++){
    document.write(i + '<br/>' )
}


//================>>>>>>>>> TABLE

document.write("<h1> Question-02 </h1>")


let userNumber = prompt("Type  Number for Multiplication Table");
let tableLength =  prompt("Type  Number of Table Length");
for (var i = 1; i <= tableLength; i++){
    document.write(`${userNumber} X ${i} =   ${userNumber * tableLength} <br> `)
}


//================>>>>>>>>> Loop On Array

document.write("<h1> Question-03 </h1>")
  let fruit = ['Apple', 'Mango ', 'Banana  ','Orange  ','StrawBerry ']

  for (let i = 0; i < fruit.length; i++){
    document.write(fruit[i] + "<br/>" )
}


  for (let i = 0; i < fruit.length; i++){
      document.write(`Element At Index ${i} is ${fruit[i]} <br/> `)
  }

//================>>>>>>>>> 

document.write("<h1> Question-04 </h1>")

document.write("<br/><h1>Counting:</h1>")

for (let i = 0; i <= 15; i++){
document.write(i + ',')

}

document.write("<br/><h1> Reverse Counting:</h1>")
for (let i = 15; i >= 1; i--){
    document.write(i + ',')
    }
    
document.write("<br/><h1>Even Number :</h1>")
for (let i = 0; i <= 20; i++){
    if (i % 2 == 0 ){
        document.write(i+ ",");
    }
}
   
document.write("<br/> <h1>Odd Number :</h1>")
for (let i = 0; i <= 20; i++){
    if (i % 2 == 1 ){
        document.write(i+ ",");
    }
}


//================>>>>>>>>> 
document.write("<h1> Question-07 </h1>")
let bakeryItems = ['cake', 'pastery', 'chips', 'patties']
let costumerIte = prompt("type Your Favorit Item liek : Cake/Pastery/Chips...")
for (let i = 0; i < bakeryItems.length; i++){
    if (bakeryItems[i] === costumerIte){
        document.write(`Your Item ${costumerIte} is in Index ${i} `)
    }
 
}

if (bakeryItems[i] != costumerIte){
    document.write(`Your Item ${costumerIte} is Not Avaiabe in our Store `)
}