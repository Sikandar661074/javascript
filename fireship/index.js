// console.log(typeof (23));
// x = {};
// x['foo'] = '13'
// console.log(x);
// var bar = String('hello')
// var foo = true
// console.log(bar);

// console.log(typeof (foo));

// // truthy and falsy

// console.log(!! '');
// console.log(!! 'hey');
// console.log(!! 0);
// console.log(!! 1);

// var x = 10;
// if(x==10){
//     x = 1
// }
// else{
//     x=2
// }
// console.log(x);


//   var expression = 40;
//   switch(expression){
//       case (expression < 50) :
//           console.log('fail');
//           break;
//       case (expression=50) :
//           console.log('pass');
//           break;
//  }

// var i=0;
// while(i<5){
//     console.log(i++);
    
// }

// var n=5;
// for(i=0;i<n;i++){
//     console.log(i);
    
// }

// result="";
// var i=0;
// do{
//     i=i+1;
//     result=result+i;
// }while(i<5);
// console.log(result);

    


// // try and catch
// try{
//     console.log(x);
// } catch (error){
//     console.log('broke');
// } finally {
//     console.log('always works');
    
// }

// var g = 'global' ;
// function app(){
//     console.log(g);
    
//     l = 'local' ;
//     console.log(l);
// }
// app()

// var a = 10;
// var b = 20;
// var c = a*b;

// function multiply(){
//     console.log(c);
// }
// multiply()

//  function add(x,y){
//      var c= x + y;
// console.log(c);
//      }
//      add(15,2);
    
    
//    var g='global';
// function app(){
   
//     console.log(g);
    
//     l = 'local' ;
//     console.log(l);
// }
// app()







// practice

var a;
console.log(typeof("hey"));
console.log(typeof("%"));
console.log(typeof(9));
console.log(typeof(true));
console.log(typeof(null));
console.log(typeof(a));


//ifelse
var x=10;
if(x<0){
    console.log("x is negative");
}else if(x>0){
    console.log("x is positive");
}else{
    console.log("x is zero");
    
}
//switch
var animal='dog';
switch(animal){
    case 'cat':
        console.log("meow");
        
     case 'hey':
         console.log("bark");
    
     default :
     console.log("broken");
            
}
//while
var x=0;
while(x<5){
    console.log("current x is "+x);
    x++;
    
}
//dowhile
var x=0;
result=0;
do{
    x++;
    result=result+x;
}while(x<10){
    console.log(result);    
}

//for
var age=10;
for(var i=0;i<age;i++){
    console.log("your age is "+i);
    
}



