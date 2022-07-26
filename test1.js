// // var user={
// //     name:'Gaurav',
// //     Age:21
// // }
// // let clone=user;
// // clone.name="Amit";
// // console.log(user.name);



// // TO CLONE ALL VALUES OF ONE OBJECT TO OTHER OBJECT

// // let user={
// //     name:'Gaurav',
// //     Age:21
// // }

// // let clone ={};
// // for(let key in user){
// // clone[key]=user[key];
// // }
// // clone.name="Amit";


// // Object.assign(user,{name:"Tripathi"})

// // console.log(clone.name);
// // console.log(user.name);
// // console.log(user.name);

// // let user={
// //     name:"GAurav",
// //     Age:33
// // }
// // let clone=Object.assign({},user);
// // alert(clone.name);
// // let x=7;
// //  function getName(){
// //     console.log("Gaurav");

// //  }



// // getName();


// // function ab(){
// //     console.log("Ram")
// // }

// // ab()
// // let a=29;
// // function fun(){
// //     console.log("You are in fun")
// // }
// // function ab(){
// //     ac();
// //     function ac(){
// //         ad();
// //         function ad(){
// //             console.log(fun());
// //         }
// //     }
// // }
// // ab();

// // console.log(b);
// // var a=10;
// // let b=20;
// // const c=30;

// // function ab(){
// //     console.log(a);
// //     console.log(b);
// //     console.log(c);
// //     let fg=50;
// // }

// // ab();

// // console.log(a);
// // let a=10;

// // const a=100;
// // function x(){
// //     var a=1000;
// //     console.log(a);

// // }
// // x();
// // console.log(a);




// // THIS IS THE WORK STARTING POSITION//

// //1. Create a function to find a factorial of a number

// // let a=5;
// // var sum=1;
// // for(let i=a;i>=1;i--){
// // sum=sum*i;
// // }
// // console.log(sum);

// //2.Create a function to print fibonacci series separated by comma



// // function z(){
// //     var b=3000;
// // function x(){
// //     var a=7;
// //      function y(){
// //         console.log(a+" "+b);
// //     }
// //     a=100;
// //     a=4000;
// //     a=1;
// //     y();
// // }
// // return x();
// // }
// // var f=z();



// // let obj={
// //     age:20,
// //     Name:"Devashish",
// //     Salary:500000000,

// // };
// // console.log(obj.age);
// // console.log(obj);
// // const myCar = new Object("Maruti");
// // //obj.myCar="Maruti";
// // console.log(obj);


// // let obj=new Object;
// // obj.name="gaurav";
// // obj.age=21;
// // obj.address="c/15 Nehru Vikar"

// // console.log(obj.address);



// // var str=new String("Gaurav");
// // console.log(str.length)

// // let user=new Object();
// // user.name="John";
// // user.surname="Smith"
// // user.name="pete";
// // console.log(user.name);


// // let salaries = {
// //     John: 100,
// //     Ann: 160,
// //     Pete: 130
// //   }
// // let sm=salaries.John+salaries.Ann+salaries.Pete;
// // console.log(sm)




// // let menu = {
// //     width: 200,
// //     height: 300,
// //     title: "My menu"
// //   };

// //   function multiplyNumeric(menu){
// //     menu.height=menu.height*2;
// //     menu.width=menu.width*2;

// // }



// // multiplyNumeric(menu);
// // console.log(menu.height,menu.width,menu.title);


// // SET TIME OUT FUNCIONS

// // function ab(){
// //   setTimeout(function x(){console.log("Sitaram")},10000);

// //   }
// // ab();


// // let a={
// //   name:"Gaurav",
// //   Age:23
// // }
// // key="Age";
// // console.log("name" in a);


// // let ab=prompt("Enter a number");

// // user={
// //     xyz:"Gaurav",
// //     key:ab
// // }
// // console.log(user.xyz)
// // console.log(user['key'])

// // Object pass value in key by reference while let,var,boolen takes value in its variable

// // let obj={
// //     name:"Gaurav",
// //     Age:22
// // }
// // let obj1={
// //     name:"Shitanshu"
// // }
// // // let obj1={
// // //     name:"Gaurav",
// // //     Age:22
// // // }
// // // obj=obj1;
// // // console.log(obj==obj1);

// // for(let i in obj1 ){
// //     console.log(obj);
// // }

// // let objx={
// //     name:"Age"
// // }

// // let obj={
// //     name:"Gaurav",
// //     Age:21,
// //     this.ram="Shyam"
// // }

// // let clone={};
// // for(let i in obj){
// //     clone[i]=obj[i];
// // }

// // for(let i in objx){
// //     console.log(clone)
// // }

// // let obj={
// //     name:"Gaurav",
// //     Age:22,
// //     fun: function(){
// //         return console.log(this.name);
// //     }
// //  }
// // obj.fun();



// // function x(){



// //     function ab(){

// //         function ac() {
// //         console.log("Prya");    
// //         }
// //         ac();
// //     }        

// //     ab();
// // }
// // x();
// // let a;
// // let obj={
// //     name :"Gaurav",
// //     age : 23,
// //     sex : "Male",
// //     height:21,
// // }


// // function ab(){
// //     console.log(this.age)
// //     console.log(this.name)

// // }

// // function sum(){
// //     var add=2+2;
// //     console.log(add);
// //     console.log(this)
// // }



// // sum();


// // const thapa={
// //     name:"Vinod",
// //     qualification:"BCA",
// //     sum: function(){
// //         var add=2+2;
// //         console.log(add)
// //         console.log(this.name);

// //     }

// // }

// // let ab={
// //     age:322,
// //     name:"Gaurav",
// //     abc :function(){
// //         return this.age;
// //     }
// // }
// // ab.abc();

// // function User(name,age,gender){
// //     this.name=name;
// //     this.age=age;
// //     this.gender=gender;
// //     console.log(this.name);
// //     console.log(this.age);
// //     console.log(this.gender);
// // }
// // let user1 = new User("Gaurav",22,"Male");
// // let user2 = new User("jack",23,"Male");
// // let user3 = new User("jacky",34,"Female");
// // let user4 = new User("jackie",22,"Female");


// // function User(name){
// //     this.name=name;
// //     this.sayHi=function(){
// //         console.log("This is first alert");
// //     }
// // }
// // let john = new User("John");
// // john.sayHi();


// // function calculator(){

// //     let a=+prompt("Enter first number")
// //     let b=+prompt("Enter Second number")
// //     let take=confirm("Enter ok to sum and cancel to multiply")
// //     if(take==true){
// //         sum(a,b);}
// //         else{
// //             multi(a,b);
// //         }

// //     function sum(a,b){
// //         let sum = a+b;
// //         alert(sum);
// // }

// //     function multi(a,b){
// //     let msum=a*b;
// //     alert(msum);
// //     }

// // }
// // calculator();

// // function User(name,a,b){
// //     this.name=name,
// //     this.a=a,
// //     this.b=b,

// //     this.fun=function(){
// //         console.log(this.name);
// //         console.log(this.a+this.b);

// //     }
// // }





// // let obj1=new User("a",21,22)

// // let obj2=new User("b",22,23)
// // let obj3=new User("c",23,32)
// // let obj4=new User("d",34,45)
// // let obj5=new User("e",54,56)

// // obj1.fun();
// // obj2.fun();
// // obj3.fun();
// // obj4.fun();
// // obj5.fun();


// // obj1.printt();





// // let a;

// // console.log(null>=0);

// // let obj={
// //     name:"gaurav",
// //     Age:21,
// //     Address:"C-15"
// // }

// // let key=Object.values(obj);

// // console.log(key)


// // function Obj(name){
// //     this.name=name,
// //     x=()=> {
// //     console.log(this.name);

// // }
// // }
// // let a=new Obj("gaurav");
// // a.x();


// // const ab={
// //     name:'Gaurav',
// //     Age:32
// // }
// // Object.freeze(ab);
// // ab.name="Rakesh";
// // console.log(ab.name)
// 'use strict';

// // let obj={
// //     name:"Gaurav"
// // }

// // obj.name="Sajid"
// // console.log(obj.name)
// // const obj={
// //     name:"Gaurav"
// // }
// // console.log(obj)


// //LITRAL TYPE OF OBJECT DECLEARACTION 

// // const course={
// //     lectures:10,
// //     section:3,
// //     title:"Javascritpt",
// //     nodes:{
// //         introduction:"Welcome to JS"
// //     },
// //     enrol(){
// //         console.log("You are successfully enrolled")
// //     }
// // }
// // course.price=999;

// // console.log(course)

// // function abc(title){
// //     return {

// //     title:  title  ,

// //     enrol(){
// //         console.log("You are successfully enrolled")
// //     }
// // }

// // }


// // const course=abc("Javascript");
// // console.log(course);


// // CONSTRUCTOR FUNCTION



// // function sum(){
// //     let sum=0;
// //     sum=arguments[0]+arguments[1]+arguments[2]+arguments[3]
// //     console.log(sum)
// // };
// // sum(2,5,6,7);




// // function Course(title){
// //     this.title=title,
// //     this.enroll=function(){
// //         console.log("You are enrolled")
// //     }
// // }
// // // const course=new Course("javascript");
// // // console.log(course.constructor)


// // console.log(typeof(Course))



// // let number =10;
// // //PASS BY VALUE
// // let number2=number;
// // number=22210;
// // console.log(number)
// // console.log(number2)



// //REFERENCE DATA TYPE

// // let obj={
// //     number:10
// // }
// // Object.freeze(obj);
// // let obj1=obj;

// // console.log(obj);
// // // console.log(obj1);
// // const course={
// //     name:"Javascript"

// // }
// // course.name="HHHH"
// // const course2=Object.assign({},course)

// // console.log(course2)


// // for(let key in course){
// //     console.log(key,course[key])
// // }



// // let obj = { name: 'Klaus' };
// // function mutate(o) {
// //     let copy = { ...o };
// //     copy.name = 'Peter';

// //     console.log(copy);
// //     return copy;
// //   }

// // mutate(obj);

// // obj.name="Radha";
// // console.log(obj);



// // "use strict";
// // const getPrivateObj=function(){
// //     const privateobj={
// //         secretNum:3141,
// //         phrase:"My name is Gaurav"
// //     };
// //     return function(){
// //         return {...privateobj};
// //     }    
// // }();
// // let obj=getPrivateObj();
// // obj.secretNum=3333;
// // console.log(getPrivateObj());

// // function x(y){
// // console.log(y)
// // }
// // function y(){

// // }
// // let x= function(){
// //     console.log("aurav")
// // }


// // document.getElementById("clickp").addEventListener("click",function x(){
// //     console.log("Gaurav")
// // });

// // const person={
// //     nae:"Dom",
// //     aae:28
// // }



// // const ab=person.abc? person.abc:undefined;
// // console.log(ab)

// // let a=20;
// // let b=30;

// // let x=(a>b)?true:false;
// // console.log(x)

// // function User(name,age,sex){
// //     this.name=name;
// //     this.age=age;
// //     this.sex=sex

// //     this.a=function(){
// //         return {
// //         ab: "You are in function",sex:this.sex
// //     }
// // }
// // }


// // let a1=new User("Gaurav",22,"M");


// // for(let i in a1){
// //     console.log(a1[i])
// // }
// // console.log(a1.a());
// // console.log(a1.a());
// // console.log(a2.User.a());
// // console.log(a3.User.a());
// // console.log(a4.User.a());
// // console.log(a5.User.a());
// // console.log(a6.User.a());

// // function Strudent(name,age){
// //     this.name=name;
// //     this.age=age
// // }

// // Strudent.prototype.sex="Male";

// // let a1=new Strudent("Gaurav",21);

// // for(let i in a1){
// //     console.log(a1[i]);
// // }


// // let str="Gaurav";
// // str.test=5;
// // console.log(str.test)


// // let a=5;
// // BigInt b=1000000000000000000000;
// // let a=255
// // console.log(255..toString(16))



// // let a=+0.1;
// // let b=+0.2;
// // let sum=a+b;
// // console.log(sum.toFixed(1)==0.3)

// // let a=parseInt("13333opsilsjsicx")

// // console.log(a)
// // let min=1,max=1000;
// // let a=Math.random(1,1000);
// // console.log(Math.round(a));

// // let a=Number(prompt("Enter a number"));
// // let b=Number(prompt("Enter second number"));
// // alert(a+b);
// // let x=0;
// // function readNumber(){
// //     let a=+prompt("Enter a number");
// //     if(isFinite(a)==true){
// //         alert(a);
// //     }
// //     else{
// //         while(x==0){
// //             let a=+prompt("Enter a number");
// //             if(isFinite(a)==false){
// //                 let a=+prompt("Enter a number");
// //             }
// //             else{
// //                 ++x;
// //                 alert(a);                
// //             }
// //         }

// //     }
// // }

// // readNumber();


// // function Randomm(min,max){
// //     return Math.round(min+Math.random()*(max-min));

// // }

// // console.log(Randomm(1,5));
// // let list=`name:*pete
// // *gaurav
// // *chitranshu `;
// // console.log( "\u00A9" ); // ©
// // console.log( "\u{20331}" ); // 佫, a rare Chinese hieroglyph (long Unicode)
// // console.log( "\u{1F60D}" ); // 😍, a smiling face symbol (another long Unicode)


// // let str='Hello';
// // for(let i in str){
// //     console.log(str[i])
// // }


// // let str="My name is Gaurav";
// // if(str.indexOf("Gaurav")!=-1){
// //     console.log("Found")
// // }

// // let str="My name is gaurav";
// // console.log("#".codePointAt(0))
// // console.log('a'>'A')

// // let str = '';

// // for (let i = 65; i <= 220; i++) {
// //   str += String.fromCodePoint(i);
// // }
// // console.log( str );

// // console.log(String.fromCodePoint(2))
// // let str="gaurav"
// // ucFirst(str)
// // var str1;
// // function ucFirst(str){
// //     str1=str[0].toUpperCase()+str.slice(1);
// // }

// // console.log(str1)

// // let str="XXX"
// // var x;
// // function checkSpam(str){
// //     let a=str;
// //     if(a=="XXX" || a=="Vigra"){
// //         x=true;
// //     }
// //     else{
// //         x=false;
// //     }
// //     return x;
// // }

// // console.log(checkSpam(str));
// // let str="Gaurav";
// // let maxlength=+20;
// // var str1;
// // function truncate(str, maxlength){
// //        if(str.length==maxlength){
// //         console.log("True")
// //        }
// //        else{
// //         let len=str.length;

// //        }
// // }

// // truncate(str,maxlength);



// // function truncate(str, maxlength) {
// //     return (str.length > maxlength) ?
// //       str.slice(0, maxlength - 1) + '…' : str;
// //   }

// //  console.log(truncate("Gaurav",20))

// // let str="$120"
// // function  extractCurrencyValue(str){
// //       let str1=str.slice(1,str.length);
// //       console.log(str1)
// // }

// // extractCurrencyValue(str)
// //PUSH POP 


// // let fruits=["a","b","c","d"];
// // fruits.pop();
// // console.log(fruits)
// // fruits.push("d");
// // console.log(fruits)
//  // SHIFT AND UNSHIFT

// //  let fruits=["a","b","c","d"];
// // fruits.shift();
// // console.log(fruits)
// // fruits.unshift("a")
// // console.log(fruits)

// //HOW TO MAKE A QUEUE


// // let fruits=["a","b","c","d"];
// // console.log(fruits);








// // fruits.shift();
// // fruits.push("e");
// // console.log(fruits);

// // fruits.shift();
// // fruits.push("f");
// // console.log(fruits);

// // fruits.shift();

// // fruits.push("g");

// //console.log(fruits);



// // let fruits=["a","b","c","d"];
// // fruits.unshift("Start")
// // fruits.shift();
// // console.log(fruits)


// // let arr=new Array("Jazz","Blues")
// // console.log(arr)
// // arr.push("Rock-n-Roll");


// // console.log(arr)
// // let i=Math.floor(arr.length/2);
// // arr[i]="classics";
// // console.log(arr)
// // arr.shift();
// // console.log(arr);
// // arr.unshift("Raggae");
// // arr.unshift("Rap");
// // console.log(arr)

// // let arr = ["a", "b"];

// // arr.push(function() {
// //   console.log( this );
// // });

// // arr[2](); // ?


// // function sumInput(){
// //     for
// // }


// // let arr=[];
// // let i=0;
// // let j=0;
// // while(i==0){

// // }

// // function af(){
// //   console.log(x)
// // }
// // console.log(x)
// // af()let 
// // let sum=0;

// // function sumInput(a){
// //     for(let i=0;i<a.length;i++){
// //         sum=sum+a[i]
// //     }
// //     alert(sum)
// // }



// /////         *************ASK**************************8


// // function sumInput(a){

// //         alert(a.length)

// // }


// // let i=0;
// // var j=0;
// // let a=[];
// // a[j]=prompt("Enter a number")
// // while(true){
// //     if(a[j]=== null || a[j]=== ""){
// //         sumInput(a)
// //         break;
// //     }
// //     else if(isFinite(a[j])==false){
// //         sumInput(a)
// //         break;
// //     }
// //     else{
// //         j++;
// //         a[j]=+prompt("Enter a number");
// //     }
// // }

// // let value;
// // let number=[];
// // while(true){
// //     value=prompt("ENter a number");

// //     if(value===null||value===""||!isFinite(value))break;
// //     number.push(value)
// // }


// // for(let i=0;i<number.length;i++){
// //     alert(number[i])
// // }
// // let sum=0;
// // let max=0;
// // let arr = [100, -9, 2, -3, 5];
// // for(let i=0;i<arr.length;i++){
// //     for(let j=0;j<arr.length;j++){
// //         if(i!=j){
// //         sum=arr[i]+arr[j];
// //         }

// //         if(max<sum){
// //             max=sum;
// //         }

// //     }

// // }

// // console.log(max)
// // let a=["gaurav","Gaurav","Shitanshu","Tripathi",22234,3,4,5,6,7]
// // let abc=a.splice(2,0,"Gauuuuurav");
// // console.log(a)

// // let arr=[1,2];
// // let arr2=[3,45,6,67,7,7,33]
// // console.log(arr.concat(arr2));

// // // arr.splice(1,1)
// // // arr.splice(3,0,"Gaurav","Tripathi")
// // // console.log(arr)
// // let sum=0;
// // arr.forEach(function(value){
// //     sum=sum+value;
// // });
// // console.log(sum)

// // let a=[1,2,34,5,6,4,4]


// // function ab(x,a){
// //     return x>a;
// // }

// // console.log(a.find(ab(22,0,a)))



// // let arr=[11,12,13,14,15,16,17,18,19,20];
// // console.log(arr.every(checkAge));

// // function checkAge(age){
// //     return age<22
// // }

// // let arr=[1,2,3,4,5,6,7,8,9]
// // arr.splice(2,4)

// // console.log(arr)


// // const ages = [3, 10, 18, 20,22,23,345,5555];


// //     console.log(ages.filter(checkAge=>checkAge>18));

// // let sum=0

// // const arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,222,334,44,4,45,55,5,5,5,55,555555]
// // function check(value){
// //     sum=sum+value

// // }

// // arr.forEach(check)
// // console.log(sum)

// let  arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,222,334,44,4,45,55,5,5,5,55,555555]
// // const arr2=["Gaurav","Shitanshu"]

// // // console.log(arr.indexOf(45))
// // // console.log(Array.isArray(arr));
// // console.log(arr.join(arr2))


// // const arr=["Apple","Banana","Orange"]
// // const arr2=["Pineapple"]

// // console.log(arr.join(arr2))
// let ab;
// var iterator=arr.keys();
// for(let key in iterator){
//     console.log(key)
// }


// containing some elements.
// var A = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,222,334,44,4,45,55,5,5,5,55,555555];
// var val = [];
// var key=[]; 
// // array.keys() method is called
// for (let i=0;i<A.length;i++) {

// val[i]=A[i];

// key[i]= A.keys[i];
// }
// // printing index array using the iterator
// for (let i=0;i<A.length;i++) {
//  console.log("Key"+" "+key[i]+" "+"Value"+" "+val[i]);
// }


// let mapop=new Map();
// mapop.set("a","Gaurav");
// mapop.set("b","Shitanshu");
// mapop.set("c","chitranshu");
// mapop.set("d","shivanshu");
// mapop.set("e","Himanshu");
// mapop.set("f","chiklandu");
// mapop.set("g","pandu");

// // mapop.forEach((key,value)=>{
// //     console.log(value ,key)
// // })


// for(let i=0;i<mapop.size;i++)
// {
//     console.log(mapop.get)
// }
// let x=[];
// let jon;
// function camelize(value){
//     let val=value.split("-")
//     for(let i=0;i<val.length;i++){
//         x[i]=val[i]
//     }

//     for(let i=0;i<val.length;i++){
//         jon=x[i].join(x[i+1])
//     }
//     console.log(jon);
// }



// camelize("My-name-is-gaurav")
// let j=0;
// let x=[];
// function filterRange(arr,a,b){
//       for(let i=0;i<arr.length;i++){
//         if(arr[i]>=a && arr[i]<=b){
//             x[j]=arr[i];
//             j++;
//         }
//       }
// }

// let arr1=[5,3,8,1]
// filterRange(arr1,1,4)

// for(let i=0;i<x.length;i++){
//     console.log(x[i])
// }
// let x=0;
// let xx=[];
// function filterRangeInPlace(arr,a,b){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]<a || arr[i]>b){
//            arr.splice(i,1)
//         }
//     }

// }

// let arr=[5,3,8,1]
// filterRangeInPlace(arr,1,4)
// console.log(arr)


// let arr = [5, 2, 1, -10, 8];
// let temp;
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr.length;j++){
//     if(arr[i]<arr[j]){
//         temp=arr[i];
//         arr[i]=arr[i+1];
//         arr[i+1]=temp;

//     }
// }
// }

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i])
// }

// let arr = [5, 2, 1, -10, 8];
// let arr1=arr.sort();
// for(let i=arr1.length-1;i>=0;i--){
//     console.log(arr1[i])
// }

// let mapp= new Map();
// mapp.set("Name","John");
// mapp.set("Bhosdiwala","Mery");
// mapp.set("Chutiya","Pete");

// // console.log(mapp.values())
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [pete, john, mary];

// let arr = new Array();
// arr[0] = { "id": users[0].age, "fullName": users[0].name };
// arr[1] = { "id": users[1].age, "fullName": users[1].name };
// arr[2] = { "id": users[2].age, "fullName": users[2].name };

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i].id > arr[i + 1].id) {
//         temp = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = temp;
//     }
// }

// console.log(arr);
// let temp;
// let x;
// let arr = [1,2,3,4,5];

// let a= Math.floor(Math.random()*10);


// if(a>=0 && a<=3){
//     for(let i=0;i<3;i++){
//         x=arr.shift(arr[0]);
//         arr.push(x);
//     }
// }
// else if(a>=3 && a<=6){
//     for(let i=0;i<4;i++){
//         x=arr.shift(arr[0]);
//         arr.push(x);
//     }
// }
// else{
//     for(let i=0;i<1;i++){
//         x=arr.shift(arr[0]);
//         arr.push(x);
//     }
// }

// console.log(arr);








// let arr=["a","b","c"];
// let x=arr.shift(arr[0]);
// arr.push(x)

// console.log(arr)


// let arr=[1,2,3,4,5,6]
// console.log(Math.random() - 0.5

// console.log(0.2+0.3==0.5)


// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 30 };

// let x=john.age+pete.age+mary.age;
// console.log(Math.floor(x/3))


//console.log(Math.round(4.7))




// let temp;
// let x;
// let arr = [1,2,3,4,5];

// let a= Math.floor(Math.random()*10);


// if(a>=0 && a<=3){
//     console.log(arr)
// }
// else if(a>=3 && a<=6){
//     for(let i=0;i<4;i++){
//         x=arr.shift(arr[0]);
//         arr.push(x);
//     }
// }
// else{
//     for(let i=0;i<1;i++){
//         x=arr.shift(arr[0]);
//         arr.push(x);
//     }
// }

// console.log(arr);


// let users = [
//     {id: 'john', name: "John Smith", age: 20},
//     {id: 'ann', name: "Ann Smith", age: 24},
//     {id: 'pete', name: "Pete Peterson", age: 31},
//   ];
// let john=users[0];
// let ann=users[1];
// let pete=users[2];

//   console.log(john);
//   console.log(ann);
//   console.log(pete);

// let a=4444444444444777777899999999999999999999977777777777777777777777444444444n;
// let b=4444449999998888888888888888888889999999999999999999999999994444444444444444n;

// console.log(a+b);

// let a=0.2;
// let b=0.2;
// let c=a+b;
// if(c===0.4){
//   console.log("yes");
// }
// else{
//     console.log("no")
// }


// let a=[1,2,3,45,6,877,7];
// let y=a[Symbol.iterator]();
// y.next()
// console.log(y.next().value)
// console.log(y.next().value)
// console.log(y.next().value)
// console.log(y.next().value)
// y.next().value
// console.log(y.next().value)
// console.log(y.next().value)


// var a=0.1;
// var b=0.2;

// console.log((a+b).toFixed(1))

// let a=Symbol("Gaurav");
// // let b=1;
// // // a=Symbol("Sitaram")
// // console.log(a==b);
// // console.log(b);
// alert("Sitaram")
// alert(a.description )

// let a=Symbol("AGGG");
// let x={
//     name:"Gaurav",
//     class:22,

// }
// x[a]=2333
// console.log(x)

// let a="abcdefghijklmnopqrstuvwxyz"

// for(let i of a){
//     console.log(i)
// }




// // let abc={
// //     "name":"Gaurav",
// //     "name":"Shitanshu"
// // }

// // console.log(abc)

// // let abcd=new Map([
// //     [1,"GAurav"],
// //     [2,"GAurav"],
// //     [3,"GAurav"],
// //     [4,"GAurav"],
// //     [5,"GAurav"],

// // ]);
// // abcd.set("name","Gaurav");
// // abcd.set("name","shitanshu");
// // console.log(abcd)


// let a={
//     "name":"Gaurav"
// }
// let b={
//     "a":"Chandresh",
//     "b":"Shikhar"
// }
// // Object.entries(b);
// // let people={};
// // people[a]="Detective";
// // people[b]="pretective";
// // people[b]="chandresh sir";

// // console.log(people)
// // console.log(people[b])
// let arr=Object.entries(b)
// // arr.push(Array.from(b.values));
// // // arr[1]=b;
// // console.log(arr)
// // for(let i of arr.entries()){
// //     console.log()
// // }

// console.log(arr)


// let arr=[1,2,3,4];
// let b  = [6,7,8,9]
// let map = new Map()
// for(let i in arr){
//     map.set(arr[i],b[i])
// }
// // let obj = Object.fromEntries(Array.from(map));

// // console.log(map.entries())
// // console.log(Object.fromEntries);

// let arr1=Array.from(map)
// let obj2={};
// for(let i in arr1){
//          Object.assign(obj2[i],arr1[i])
// }

// console.log(obj2)

// let arr = ["nap", "hop", "PAN", "ear", "era", "oph","jhop","hojp","teaijch","chjetai"];
// let arr1;
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i].toLowerCase();
// }
// let k = 0;
// let firsttake;
// let secondtake;
// let leng, leng1;
// for (let ab = 0; ab < arr.length; ab++) {
//     leng = arr[ab].length;
   
//     for (let bc = 0; bc < arr.length; bc++) {
        
//         leng1 = arr[bc].length;
//         if (ab == bc) {

//         }
//         else if (leng == leng1) {
//             for (let i in arr[ab]) {
//                 firsttake = arr[ab].charAt(i);
//                 for (let j in arr[bc]) {
//                     secondtake = arr[bc].charAt(j)
//                     if (firsttake == secondtake) {
//                         k++;
//                     }
//                 }
//             }
//         }
//             if (k == leng) {
//                 console.log(arr[ab])
//             }
//           k=0;
//         }
//     }

        
// let map = new Map();

// map.set("name", "John");

// let keys =Array.from( map.keys());

// // Error: keys.push is not a function
// keys.push("more");

// console.log(keys)

// 
// It cantains only unique vale
// // object 
// let obj2={
//     "name":"Gaurav"
// }
// let myarr=[1,2,3,4,5,5]
// let obj=new Set(myarr);
// obj.add("Gaurav")
// obj.add("Gaurav")
// obj.add(obj2)
// console.log(obj.size)
// obj.delete(5)
// obj.delete(obj2)
// console.log(obj)
// console.log(obj.has(2))

// for(let i of obj){
//     console.log(i)
// }

// obj.forEach((element)=>{
//     console.log(element)
// })
// MAP 

// let mymap = new Map([["a","Ajay"],["b","Gaurav"]]);
// mymap.set("a","Chandresh")

// // console.log(mymap.get("a"))

// for(let [key,value] of mymap){
//     console.log(value)
// }

// mymap.forEach((key,value)=>{
//     console.log(value,key)
// })

// let ws = new WeakSet();
// let obj={
//     "Name":'gauarv'
// }
// ws.add(obj);
// console.log(ws.has(obj))


// let wm=new WeakMap();
// var obj1={};
// var obj2={};
// var obj3={};
// wm.set(obj1,"Gaurav");
// console.log(wm.get(obj1));

// let a={
//     "name":"Gaurav",
//     "Age":27,
//     "Gender":"Male"
// }

// let b=Object.entries(a);

// let b=[1,2,3,4,5,67,8,8]

// let c = Object.fromEntries(b);
// console.log(c)



// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
//   };
// // function sumSalaries(x){
//     let sum=0;
//     let val=Object.values(x);
//     for(let i of val){
//             sum=sum+i
//     }
//     console.log(sum)
// }



//   console.log( sumSalaries(salaries) );
// console.log(count(salaries));
// function count(x){
//     return Object.keys(x).length;
// }


// let a="gaurav tripath"
// let x=a.split("")
// console.log(x)

// let d=new Date("2017-01-26");
// console.log(d)

// let date = new Date(2016, 1, 28);
// date.setDate(date.getDate() + 2);

// let date=Date.now();
// console.log(date);

let xyz={
    "name":"Gaurav",
    "Age":22,
    "Gender":"M",
    "Work":"Software Developer"
}

let jsonex=JSON.stringify(xyz);
for(let i of jsonex){
    console.log(jsonex.charAt(i));
}















