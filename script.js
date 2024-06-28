// document.getElementById('generateTable').addEventListener('click', function() {
//     let userInput = prompt('Please enter a number:');
//     let number = parseInt(userInput);

//     if (!isNaN(number)) {
//         let result = '';
//         for (let i = 1; i <= 12; i++) {
//             result += `${number} * ${i} = ${number * i}<br>`;
//         }
//         document.getElementById('output').innerHTML = `Multiplication Table of ${number}:<br>${result}`;
//     } else {
//         alert('Please enter a valid number');
//     }
// });









































































// question1
// alert("Welcome to  Our Website");
// question2
//  alert("Error! Please Enter a valid password");
// question3
// alert(" hello \n line break is used");
// question4
// alert("HelloWorld");
// alert("This is js assignment");
//  alert("This is question 4");
// question5
// alert("Hello this is multiplication table generator")
// question7
// let username="nisha";
// question8
// let myName="Nisha Ramzan";
// question9
// let titledmessage="hello world";
// alert(titledmessage);
// question10
// let stdName="Ali";
// let stdClass="12";
// let stdAge="19";
// let stdSchool="xyz";
// alert("student name is: " + stdName);
// alert("student class is: " + stdClass);
// alert("student age is: " + stdAge);
// alert("student school is: " + stdSchool);
// question11
// let email="nisharamzan201@gmail.com";
// alert("my email is: " + email);
// question12
// let paragraph=document.getElementById("para");
// paragraph.textContent = "this is upadated in js";
// alert("accessed and updated successfully " );
// question 13
// let display= "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(display);
// question14
// let age=24;
// alert("my age is " + age)


// question15
// let visitCount = localStorage.getItem('visitCount');
// if (visitCount === null) {
//     visitCount = 0;
// } else {
//     visitCount = parseInt(visitCount); 
// }
// visitCount++;
// localStorage.setItem('visitCount', visitCount);
// document.getElementById('visit-message').textContent = `You have visited this site ${visitCount} times`;

// question16
// let birthYear=2000;
// console.log("my birth year is",birthYear);
// question17
// document.getElementById('orderForm').addEventListener('submit', function(event) 

// {
//     event.preventDefault(); 
//     const visitorName = document.getElementById('name').value;
//      const productTitle = document.getElementById('productTitle').value;
//     const quantity = document.getElementById('quantity').value;
//     const orderMessage = `${visitorName} ordered ${quantity} ${productTitle}(s) on XYZ Clothing store`;
//     document.getElementById('orderMessage').textContent = orderMessage;
// });



// question18
// let a,b,c;
// question19
// let legalVaribale= ['firstName', 'age' , 'user_id', '_value', '$totalAmount'];
// let illLegalVaribale =['1stName', 'my name', 'total-amount', '#count', 'break'];
// console.log("legal variables are", legalVaribale);
// console.log("legal variables are", illLegalVaribale);
// // question20
// const allowedCharacters = "<strong>letters, digits, underscores, and dollar signs</strong>";
// const mustBeginWith = "<strong>letter, underscore, or dollar sign</strong>";
// const caseSensitive = "<strong>sensitive</strong>";
// const shouldNotBeKeywords = "<strong>keywords</strong>";

        
// document.write("<p>Variable names can only contain " + allowedCharacters + ". For example $my_1stVariable.</p>");
// document.write("<p>Variables must begin with a " + mustBeginWith + ". For example $name, _name, or name.</p>");
// document.write("<p>Variable names are case " + caseSensitive + ".</p>");
// document.write("<p>Variable names should not be JS " + shouldNotBeKeywords + ".</p>");
//    question21
// let a=6;
// let b=9;
// let c=a%b;
// console.log("mod is", c);
// question22
// // a. Declare a variable
// let num;
// // b. Show the value of the variable after declaration
// document.write("Value after variable declaration is: " + num + "<br>");
// // c. Initialize the variable with some number
// num = 5;
// // d. Show the initial value of the variable
// document.write("Initial value: " + num + "<br>");
// // e. Increment the variable
// num++;
// // f. Show the value of the variable after increment
// document.write("Value after increment is: " + num + "<br>");
// // g. Add 7 to the variable
// num += 7;
// // h. Show the value of the variable after addition
// document.write("Value after addition with 7 is: " + num + "<br>");
// // i. Decrement the variable
// num--;
// // j. Show the value of the variable after decrement
// document.write("Value after decrement is: " + num + "<br>");
// // k. Show the remainder after dividing the variable's value by 3
// let remainder = num % 3;
// // l. Output the remainder
// document.write("The remainder is: " + remainder + "<br>");
// question23
// let movTicket=600;
// let priceOf5= movTicket*5;
// document.write("price of ticket is:",priceOf5)
// question25
// already posted in previous posts
















// js assignment 2
// question 1
// let num1=4;
// let num2=6;
// let a=num1+num2;
// document.write("the value of a is:",a , "<br>");
// document.write("the value of ++a is 11:", ++a,"now the value of a is",a ,"<br>");
// document.write("the value of ++a is 11:", a++,"now the value of a is",a ,"<br>");
// document.write("the value of ++a is 11:", --a,"now the value of a is",a ,"<br>");
// document.write("the value of ++a is 11:", a--,"now the value of a is",a ,"<br>");

// question2
// Initial values
// var a = 2, b = 1;
// document.write("innitial values are:","a=",a, ",","b=",b  ,"<br>");
// // Step 1: --a;
// document.write("Step 1: --a; <br>");
// a = --a;
// document.write("a = " + a + "<br>");
// document.write("<br>");

// // Step 2: --a - --b;
// document.write("Step 2: --a - --b; <br>");
// var step2 = --a - --b;
// document.write("a = " + a + ", b = " + b + "<br>");
// document.write("Result of --a - --b: " + step2 + "<br>");
// document.write("<br>");

// // Step 3: --a - --b + ++b;
// document.write("Step 3: --a - --b + ++b; <br>");
// var step3 = --a - --b + ++b;
// document.write("a = " + a + ", b = " + b + "<br>");
// document.write("Result of --a - --b + ++b: " + step3 + "<br>");
// document.write("<br>");

// // Step 4: --a - --b + ++b + b--;
// document.write("Step 4: --a - --b + ++b + b--; <br>");
// var step4 = --a - --b + ++b + b--;
// document.write("a = " + a + ", b = " + b + "<br>");
// document.write("Result of --a - --b + ++b + b--: " + step4 + "<br>");
// document.write("<br>");

// // Final values
// var result = step4;
// document.write("Final values after execution: <br>");
// document.write("a = " + a + "<br>");
// document.write("b = " + b + "<br>");
// document.write("result = " + result + "<br>");

// question3
// var userName = prompt("Please enter your name:");
// if (userName) {
//     document.write("Hello, " + userName + "! Welcome to our website.");
// }

// question4
var userInput = prompt("Enter a number to display its multiplication table:");
var number = parseInt(userInput);
if (isNaN(number) || number === 0 || userInput === null) {
    number = 5;
}
document.write("<h2>Multiplication Table of " + number + "</h2>");
document.write("<ul>");

for (var i = 1; i <= 10; i++) {
    var result = number * i;
    document.write("<li>" + number + " x " + i + " = " + result + "</li>");
}

document.write("</ul>");





