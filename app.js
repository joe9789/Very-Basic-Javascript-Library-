

/* function buid(){
    var arr=[];

    for(var i=0;i<5;i++){
        arr.push(
            (function(j){
                return function(){
                    console.log(j);
                }
            }(i))
        )
    }

    return arr;
}

var fs=build();

fs[0]();
fs[1]();
fs[2]();

function greet(lan){
    return function(fname,lname){
        if(lan==='en'){
            console.log("Hello "+fname+" "+lname);
        }

        if(lan==='es'){
            console.log("Hola "+fname+" "+lname);
        }
    }
}

var greeten=greet('en');
var greetes=greet('es');

greeten('joshua ','melvin');
greetes('joshua','melvin');

function sayLater(){
    setTimeout(function(){
        console.log('hello');
    },300);
}

sayLater();

console.log('hello');

var obj={
    firstName:'Joshua',
    lastName:'Melvin',
    getFname:function(){
        return this.firstName+" "+this.lastName;
    }
}

var getobj=function(lname,fname){
    console.log(this.getFname());
    console.log(fname+" "+lname);
    console.log("------------------");
};

var getobj2=getobj.bind(person);

getobj2('melvin','benhar');

getobj.call(obj,'en','es');
//diffrence between call and apply is that we should pass the arguments as array
getobj.apply(obj,['es','en']);

(function(lname,fname){
    console.log(this.getFname());
    console.log(fname+" "+lname);
    console.log("------------------");
}).apply(obj,['en','es']);

var funbrrw={
    firstName:'melvin',
    lastName:'benhar'
}
//function borrowing
obj.getFname.apply(funbrw);

//function currying
//creating the copy of the function but with some preset parameters
//usefull for mathematical situations
function mult(a,b){
    return a*b;
}
//setting the parameter for a as 2 always
var multby2=mult.bind(this,2);
//passing parameter for b
multby2(4);

//thus apply and call invoke the functions sets up this keyword(object) and let to pass the parameters for it
//bind creats an copy of the function and set some default parametrs
//also called functions currying

//functional programming
function maparr(arr,fn){
    var newArr=[];

    for(var i=0;i<newArr.length;i++){
        newArr.push(
            fn(arr[i])
        )
    }

    return newArr;
}

var arr=[1,2,3,4,5];

var arr2=maparr(arr,function(item){
    return item+2;
});

console.log(arr2);
//checks and stores the boolean value in the array
 arr2=maparr(arr,function(item){
    return item > 2;
});

 checkdynamic=function(limiter,item){
    return item > limiter;
};

arr2=maparr(arr,checkdynamic.bind(this,1));

console.log(arr2);

simplifiedCheck=function(limiter){
    return function(item,limiter){
        return item>limiter;
    }
}.bind(this,limiter);

arr2=maparr(arr,simplifiedCheck(1));

/**
 * Reflection:-An object can look at itself listing and changing its properties
 * and methods
 */

//  var obj1={
//      fname:'joshua',
//      lname:'melvin',
//      getFullName:function(){
//          this.fname+ " "+this.lname;
//      }
//  }

//  var obj2={
//      fname:'melvin',
//      lname:'benhar'
//  }

//  obj2.__proto__=obj1;

//  function contructor

//  function obj(fname,lname){
//      this.fname=fname;
//      this.lname=lname;

//  }
// reason for making a function to a prototype is that giving a method to 
// function contructor will take up memory space and this will not help when
// we have lot of objects,from perfomance point of view
//  obj.prototype.getFullName=function(){
//      return this.fname+" "+this.lname;
//  }

//  var obj1=new obj('joshua','melvin');

//  var obj2=new obj('kick','buttowski');

//  polyfill:-add in a new feature which javascript engine may lack

//  if(!Object.create){
//      Object.create=function(o){
//         if(arguments.length > 1){
//             throw new Exception('argumets greater then one cannot create an object');
//         }

//         function F() { };
//         F.prototype=0;
//         return new F();
//      }
//  }

//  Object.create() and pure prototypal

// var obj={
//     firstName:'joshua',
//     lastName:'melvin',
//     greet:function(){
//         this.firstName+" "+this.lastName;
//     }
// };

// var newObj=Object.create(obj);
// newObj.firstName='ben';
// newObj.lastName='ronan';

var test=_ml('Joshua','Melvin','hn');
test.greet().setLanguage('hn').greet(true);

$('#sub').on('click',function(){
    var test1=_ml('joshua','melvin');
    $('#lang').hide();
    test1.setLanguage($('#lang').val()).HTMLGreet('#greet').log();
});
$(document).ready(function(){
    $('#id').on('click',function(){
        $(this).html('hello world');
    })
})


