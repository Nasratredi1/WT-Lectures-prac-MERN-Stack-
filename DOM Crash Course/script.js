
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
//  var odd = document.querySelectorAll('li:nth-child(odd)');

 // to apply on even
//  var even = document.querySelectorAll('li:nth-child(even)');


//  for(var i = 0; i < odd.length; i++){
//     odd[i].style.backgroundColor = "#f4f4f4";
//     even[i].style.backgroundColor = "#ccc";
// }

// this is going be to stop this video.

//  In this video we will learn how to traverse and move around the DOM with properties like parentNode, parentElement, nextElementSibling and so on. We will also learn how to insert elements with createElement() and createTextNode()
// if we the code of html file there is a div of add items
// so h2 is the child of div and form is the sibling of h2

// TRAVERSING THE DOM //
// var itemList = document.querySelector ('#items');
// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

// childNodes
// console.log (itemList.childNodes);

// so you can used children node with replace of this. so it's better to used this.

// console.log (itemList.children);
// if you want to access a specific childere like items 2 you can do like this.

// console.log(itemList.children[1]);
// if you want to give a specific child style
// itemList.children[1].style.backgroundColor = 'yellow';

//FirstChild 
// console.log(itemList.firstChild);

// firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';

//lastChild 
// console.log(itemList.lastChild);

// lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

// nextSibling
// console.log(itemList.nextSibling);
// nextElementSibling
// console.log(itemList.nextElementSibling);

// previoussibling
//  
// previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

// creatElement 
// var newDiv = document.createElement('div');
// you can make a class and give a na me.
// add class
// newDiv.className = 'hello';

// add id
// newDiv.id = 'hello1';

// Add attr 
// newDiv.setAttribute('title', 'Hello Div');

//create text node
// var newDivText = document.createTextNode('Hello World');

// Add text to div
// newDiv.appendChild(newDivText);

// How we insert this into  Dom now this only exist within  Javascript.

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// console.log(newDiv);
// // give font size
// newDiv.style.fontSize = '30px';

// container.insertBefore(newDiv, h1);

// part 2 finish part 3 is started.

//In this lesson in the JavaScript DOM, we will be looking at different events and how to attach them to DOM elements with addEventListener();

// EVENTS.

// You can do like this 
// var button = document.getElementById('button').addEventListener('click', function(){
//     console.log(123);
// });

//or you can call to a function 
// var button = document.getElementById('button').addEventListener('click', buttonClick);
   
// function buttonClick(){
//    console.log('Button Clicked');
// }
   //or you can used the above like we studied in priveious two videos. when you click to button they
//    function buttonClick(){
//     document.getElementById('header-title').textContent = 'changed';
//     document.querySelector('#main').style.backgroundColor = '#f4f4f4';
//  }
   
// function buttonClick(e){
    // console.log(e);
    // console.log(e.target);
    // if we want to get required id
    // console.log(e.target.id);
    // console.log(e.target.className);
    
    // if we want to get classlist(DOMTokenList) like array.
    // console.log(e.target.classList);

    // var output = document.getElementById('output');
    // cancatenation they show your id in your Html page.
    // output.innerHTML = '<h3>'+e.target.id+'</h3>'
    
    // console.log(e.type);
     // position of the mouse in windows.
    // console.log(e.clientX);
    // console.log(e.clientX);
    

    // Mouse position from actual element.
    //console.log(e.offsetX);
    //console.log(e.offsetY);

    // now check the key.
    // console.log(e.altKey);
    // console.log(e.ctrKey);
    // console.log(e.shiftKey);
    
// }

// var button = document.getElementById('button').addEventListener('click', runEvent);

// function runEvent (e){
//     console.log('EVENT TYPE: '+e.type);
// }

// Above three line of code we can write like this. only add button. 

// var button = document.getElementById('button');
// button.addEventListener('click', runEvent);

// function runEvent (e){
//     console.log('EVENT TYPE: '+e.type);
// }

// doble click when you click twice on button then they show this event type
// var button = document.getElementById('button')
//button.addEventListener('dblclick', runEvent);
// when you click down on button then they show the type of event in console.
//button.addEventListener('mousedown', runEvent);
// mouseUp events.
// button.addEventListener('mouseup', runEvent);

// function runEvent (e){
//     console.log('EVENT TYPE: '+e.type);
// }



// var button = document.getElementById('button')
// var box = document.getElementById('box');

//box.addEventListener('mouseenter',runEvent);
// mouseleave event.
//box.addEventListener('mouseleave',runEvent);

// over for any inner elements
//box.addEventListener('mouseover',runEvent);
// when we go to hello and then lefe on that time this event fire.
// box.addEventListener('mouseout',runEvent);

//box.addEventListener('mousemove',runEvent);

// var itemInput = document.querySelector('input[type="text"]');
// var form = document.querySelector('form');




// function runEvent (e){
//     console.log('EVENT TYPE: '+e.type);

   // output.innerHTML = '<h3>MouseX: '+e.offsetX+'</h3><h3>MouseY: '+e.offsetY+'</h3>';
     // when you hover the mouse then they change the color of it.
    //box.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)";
    // or you can change the syle of the body.
    //document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)";
//}




// var button = document.getElementById('button')
// var box = document.getElementById('box');

// var itemInput = document.querySelector('input[type="text"]');
// var form = document.querySelector('form');

// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
//itemInput.addEventListener('keypress', runEvent);
// focus when you click that fire
//itemInput.addEventListener('focus', runEvent);

// blur when you click outside this fire.
//itemInput.addEventListener('blur', runEvent);

// cut and paste event.

// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);

// input event. when you write anything in button box they fired each time.
// itemInput.addEventListener('input', runEvent);




// function runEvent (e){
//     console.log('EVENT TYPE: '+e.type);

    // everything is removed when you write sth and then cut it.
    // document.body.style.display = 'none';

    // if you want to catch which thing you write on on input catch in console. 
   //console.log(e.target.value);

    // directly get which things you write.

   // document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>';

//}

// change event
// above repeated code.
// var button = document.getElementById('button')
// var box = document.getElementById('box');

// var itemInput = document.querySelector('input[type="text"]');
// var form = document.querySelector('form');
// var select = document.querySelector('select');

//select.addEventListener('change', runEvent);
// we can pass input as well
//select.addEventListener('input', runEvent);

// now if we listen to submit there is not something happen for this then we call to a function e.preventDefault .
//form.addEventListener('submit', runEvent);





// function runEvent (e){
//     e.preventDefault();
//     console.log('EVENT TYPE: '+e.type);
 // if you to get a value.
 //console.log(e.target.value);

//}

/* video 3 is finished
video 4 about and last video
In this video we will take what we learned in the last 3 videos and create a simple Item lister project where we can add list items with a form, delete them and filter through them all with vanilla JavaScript and DOM properties and methods.
*/ 

// in this vide when we write something in box of input they add to page and also add del btn on r.h.s.. 
// and how to remove it  and also after 15 min how to filter it.



var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//form submit event
form.addEventListener('submit', addItem);

// Delete Event
itemList.addEventListener('click', removeItem);

// Filter Event
filter.addEventListener('keyup',filterItems);

//Add item
function addItem(e){
    e.preventDefault();

    // console.log(1);

    // gET input value
    var newItem = document.getElementById('item').value;

    // create new li element
    var li = document.createElement('li');

    //add class Name
    li.className = 'list-group-item';
    // console.log(li);

    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));
    
    // append li to list
    itemList.appendChild(li);
   
    // Now if we check it there is no Delete button for this

    // Create del button element
    var deleteBtn = document.createElement('button');

    // Add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    // Append text node 
    deleteBtn.appendChild (document.createTextNode('X'));

    // Append button to li
    li.appendChild(deleteBtn);
}

// Remove Item fun
function removeItem(e){
    // for chacking when we click in any place then they fire we don't want like that we want when we only click on red button.
   //console.log(1);

   // now when we click on red button then fires 
   //    if(e.target.classList.contains('delete')){
   //        console.log(1);
   //    }
   // above code is repeat

   if(e.target.classList.contains('delete')){
       if(confirm('Are You Sure?')){
           var li = e.target.parentElement; // PE is li
           itemList.removeChild(li);
       }
     
    }    
}


// Filter Items
function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // for chacking
    //console.log(text);

    // Get lis
    var items = itemList.getElementsByTagName('li');
    // if we chack this they give us HTMLCOLLECTION for solving we conver to an array.
    //console.log(items);

    //convert to an array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
       // console.log(itemName);
       if(itemName.toLowerCase().indexOf(text) != -1){ // mean if that's match
        item.style.display = 'block';
      } else {
          item.style.display = 'none';// if you serch char like D if that not match then everything removes. b/c display set to none.  or if you serach item 3 only that show other is removed.
      }
    }); 

}

