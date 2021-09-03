
// This crash course focuses on the DOM WITHOUT JQUERY. In this part we will talk about what the JavaScript DOM (Document Object Model) is and we will look at the different selectors like 

// We will also look at how to change content and styles via these selectors

//   summary of lec

// 02:45 DOM Introduction
// 04:52 HTML Structure
// 07:07 Examine the Document Object (console.dir() & console.log())
// 15:43 Selectors 
// 15:54        getElementById()
// 22:29        getElementsByClassName()
// 27:11        getElementsByTagName()
// 29:14        querySelector()
// 34:48        querySelectorAll()

// EXAMINE THE DOCUMENT OBJECT //

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
//document.title =  123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
//  document.all[10].textContent = 'Hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// GETELEMENTBYID //
//console.log(document.getElementById('header-title'));
// so we can put it into the variable.

// var headerTitle = document.getElementById('header-title');
// console.log(headerTitle);
// headerTitle.textContent ='Hello';
// headerTitle.innerText = 'GoodBye';
// console.log(headerTitle.textcontent);
// console.log(headerTitle.innerText);

// headerTitle.innerHTML = '<h3>Hello</h3>';

// 3 ways to change the content of header if you assigned id to variable  LIKE ABOVE EX
// 1)variable name.textContent
//2) variable name.innerText
//3) variable name.innerHTML = ...
// if you want to change the style.
// headerTitle.style.borderBottom = 'solid 3px #000'; 
 
// if you want to applay in a header you can do like this.

// var header = document.getElementById('main-header');
// header.style.borderBottom = 'solid 3px #000'; 

// GETElEMENTSBYCLASSNAME//
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// if you want to access indivitual one 
// console.log(items[1]);
// if you want to put some context of that class place you can do like this.
// items[1].textContent = "Hello 2"
// for applayeing the css property you must used camelcased like below
// items[1].style.fontWeight = 'bold';
 // if you want to change the background color you can do like this.
//  items[1].style.backgroundColor = 'yellow';

 // if you do in this way the gives an error. mean you want to applay all one b.color
//  items.style.backgroundColor = '#f4f4f4';
 
 // for solving above prob you can do below.

//  for (var i = 0; i < items.length; i++){
//      items[i].style.backgroundColor = '#f4f4f4';
//  }

// GETELEMENTSBYTAGNAME//

// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(items[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// // Gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < li.length; i++){
//   li[i].style.backgroundColor = '#f4f4f4';
// }

// QUERYSELCETOR //
// you can used any selectors like class name tag name or etc.
// keep in mind used #
//  var header = document.querySelector('#main-header');
//  header.style.borderBottom = 'solid 4px #ccc';

 // now i want give some value to input

//  var input = document.querySelector ('input');
//  input.value = 'Hello World';
 
 // if you want change some property of HTML by using JS.

//  var submit = document.querySelector('input[type="submit"]');
//  submit.value = "SEND";

 // Now i want to take className and apply queryselector.
// keep in mind to used . 
//  var item = document.querySelector('.list-group-item');
//  item.style.color = 'red';
 
 // if you want to apply on last one.
// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

 // if you want to apply on 2nd one. used that: nth-child(2) this is called psudoclass and selector
//  var secondItem = document.querySelector('.list-group-item:nth-child(2)');
//  secondItem.style.color = 'yellow';

 // QUERYSELECTORALL//
 // they work similar like getelementsByclassName or tag name they grab more than one thing.
 // you can put anything class id or tag in a bracket.

//  var titles = document.querySelectorAll('.title');

//  console.log(titles);
//  titles[0].textContent = 'Hello';
//  titles[1].textContent = 'world';

 // if you want to applay in odd number (1 and 3) li or etc.
 var odd = document.querySelectorAll('li:nth-child(odd)');

 // to apply on even
 var even = document.querySelectorAll('li:nth-child(even)');


 for(var i = 0; i < odd.length; i++){
    odd[i].style.backgroundColor = "#f4f4f4";
    even[i].style.backgroundColor = "#ccc";
}

// this is going be to stop this video.

//  In this video we will learn how to traverse and move around the DOM with properties like parentNode, parentElement, nextElementSibling and so on. We will also learn how to insert elements with createElement() and createTextNode()
