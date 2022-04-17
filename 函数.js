// 函数表达式
// var a = function(){
//     let sum = 0;
//     for(let i = 1 ; i<101 ; i++){
//         sum += i;
//     }
//     return sum
// }
// console.log(a());

// 数组
// 简单求最大值
// let a = [2,6,1,77,25,52,3]
// function getMax(){
//     let b = a[0] ;
//     for(let i = 1; i < a.length; i++){
//         if(a[i] > b){
//             b = a[i] ;
//         }
//     }
//     console.log(b); 
// }
// getMax();

// 数组筛选数组大于10的放入新数组
// let a = [1,0,6,1,77,52,0,0,25,7];
// let b = [];
// function getNum(){
//     for(let i = 0; i < a.length; i++){
//         if(a[i] >= 10){
//         //    b.push(a[i]);
//         b[b.length] = a[i];
//         }
//     }
// }
// getNum();

// 数组去重或者利用filter等其他方法
// let a = [1,0,6,1,77,52,0,0,25,7];
// let b = [];
// function delNum(){
//     for(let i = 0; i < a.length; i++){
//         if(a.indexOf(a[i]) == i){
//             b.push(a[i]);
//         }
//     }
//     console.log(b);
// }
// delNum();

// s数组翻转(倒序法)
// 或者利用一个新数组直接从最后一位插入到新数组中
// let arr = ['ab','new','ji','gugu','huhu','bianbian'];
// function getArr(){
//     let temp = 0;
//     for(let i = 0; i < arr.length/2; i++){
//         temp = arr[i];
//         arr[i] = arr[arr.length-i-1];
//         arr[arr.length-i-1] = temp;
//     }
//     console.log(arr);
// }
// getArr();

// 数组冒泡法
// let arr = [1,0,6,65,20];
// function selArr(){
//     let temp = 0;
//     for(let i = 0; i <= arr.length; i++){
//     for(let j = 0; j <arr.length - i - 1;j++){
//         if(arr[j] > arr[j+1]){
//             temp = arr[j];
//             arr[j] = arr[j+1];
//             arr[j+1] = temp;
//         }
//     }
// }
//     console.log(arr);
// }
// selArr();

// 递归
// function fb(n){
//     if(n==1 || n ==2){
//         return 1;
//     }
//     return fb(n-1)+fb(n-2);
// }
// console.log(fb(3));