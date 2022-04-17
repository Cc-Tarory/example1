// this的应用
// var x = 1, y = z = 0;
// y = add(x);
// function add(n){
//     return n = n + 3;
// }
// z = add(x);
// console.log(x,y,z);

// 闭包:当内部函数被保存到外部时，将会生成闭包。
// 闭包会导致原有作用域链不释放，造成内存泄漏。
// function test(){
//     let temp = 100;
//     function a(){
//         console.log(temp);
//     }
//     return a;
// }
// var demo = test();
// demo();

// 原型与原型链
// 原型：是一个对象，属性和方法是公共的。可以理解为public
// 例如Person.prototype它既是原型，也是对象，，是function对象的一个属性，定义了构造函数制造出的对象的公共祖先，该构造函数产生的对象都可继承该原型的属性和方法。
// 如下，
// function Person() {};
//  var p1 = new Person();
// 2.原型的constructor指向关联的构造函数
// console.log(Person.prototype.constructor === Person) ;
// 3.实例的constructor指向构造函数
// console.log(p1.constructor === Person) ;
// 实例的__proto__(隐性属性)指针指向原型对象
// console.log(p1.__proto__ === Person.prototype);

// 原型链：js每次获取自身属性实际上就是链路过程。
// 当它自身找不到，就会往原型对象找，原型对象中找不到
// 原型对象找不到就会往其的原型对象上找，直致到原型链的顶端Object的原型。
// Person是一个构造函数，由function Function(){}实例化而来
// 所以Person的隐性属性指向Function的原型对象
// console.log(Person.__proto__ === Function.prototype);
// console.log(Function.prototype.__proto__ === Object.prototype);
// console.log(Person.prototype.__proto__ === Object.prototype);
// console.log(Object.prototype.__proto__ === null);
// console.log(Object.prototype);输出Object{}

// 原型可以改变,以下原型链示例
// function Person() {};
// function student(){};
// student.prototype = new Person();
// let p2 = new student();
// console.log(p2.__proto__ === student.prototype);
// console.log(p2.__proto__.__proto__ === Person.prototype);
// console.log(p2.__proto__.__proto__.__proto__ === Object.prototype);
