let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor=200;
for(let index=0; index<numbers.length; index++){
    if(menor >= numbers[index]){
        menor = numbers[index];
    }
}
console.log(menor);
// console.log(numbers[numbers.length-1]);