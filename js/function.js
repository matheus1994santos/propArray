const tela0 = document.getElementById('array1');
const tela1 = document.getElementById('array1-a');
const tela2 = document.getElementById('array1-v');
const tela3 = document.getElementById('array1-i');
const tela4 = document.getElementById('array2');
const tela5 = document.getElementById('array2-a');
const tela6 = document.getElementById('array2-v');
const tela7 = document.getElementById('array2-i');
const tela8 = document.getElementById('array3');
const tela9 = document.getElementById('array3-a');
const tela10 = document.getElementById('array3-v');
const tela11 = document.getElementById('array3-i');
const tela12 = document.getElementById('array4');
const tela13 = document.getElementById('array4-a');
const tela14 = document.getElementById('array4-v');
const tela15 = document.getElementById('array4-i');
const tela16 = document.getElementById('array5');
const tela17 = document.getElementById('array5-a');
const tela18 = document.getElementById('array5-v');
const tela19 = document.getElementById('array5-i');
const tela20 = document.getElementById('array6');
const tela21 = document.getElementById('array6-a');
const tela22 = document.getElementById('array6-v');
const tela23 = document.getElementById('array6-i');
const tela24 = document.getElementById('array7');
const tela25 = document.getElementById('array7-a');
const tela26 = document.getElementById('array7-v');
const tela27 = document.getElementById('array7-i');
const tela28 = document.getElementById('array8');
const tela29 = document.getElementById('array8-a');
const tela30 = document.getElementById('array8-v');
const tela31 = document.getElementById('array8-i');
const tela32 = document.getElementById('array9');
const tela33 = document.getElementById('array9-a');
const tela34 = document.getElementById('array9-v');
const tela35 = document.getElementById('array9-i');
const tela36 = document.getElementById('array10');
const tela37 = document.getElementById('array10-a');
const tela38 = document.getElementById('array10-v');
const tela39 = document.getElementById('array10-i');
const tela40 = document.getElementById('array11');
const tela41 = document.getElementById('array11-a');
const tela42 = document.getElementById('array11-v');
const tela43 = document.getElementById('array11-i');
const tela44 = document.getElementById('array12');
const tela45 = document.getElementById('array12-a');
const tela46 = document.getElementById('array12-v');
const tela47 = document.getElementById('array12-i');

var arr1 = [10, 32, 52, 10 ,0];
tela0.innerHTML = arr1;
// find
const test0 = arr1.find(function(){
    return arr1
})
tela1.innerHTML = test0;
// copyWithin
const test1 = arr1.copyWithin(3,3,2);
tela2.innerHTML = test1;
// Entries
const test2 = arr1.entries();
// tela3.innerHTML = test2.next().value; ou

for(let a1 of test2){
    tela3.innerHTML = a1;
    console.log(a1)
}


// -------------------------------------------- ARR2
var arr2 = [13, 2, 982, 0.1 , 120];
tela4.innerHTML = arr2;
//  Every
const test4 = arr2.every(function(){
    return  arr2 <= 10;
})
tela5.innerHTML = test4;
// Fill
var test5 = arr2.fill('a',3,4); // 'a' valor que vai substituir, 3 indice inicial, 4 indice final
console.log(test5)
tela6.innerHTML = test5;
// filter
var test6 = arr2.filter(function(value){
    return value >= 10;
})
tela7.innerHTML = test6;
console.log(test6)


// -------------------------------------------- ARR3
var arr3 = [' Casa', ' Parque', ' Shop', ' Praça' , ' Moro'];
tela8.innerHTML = arr3 ;
// Find
var test7 = arr3.find(function(letra){
    return letra !== ' ' || Number;
})
tela9.innerHTML = '"' + test7 + '"';
console.log(test7)
// findIndex
var test8 = arr1.findIndex(function(){
    if (arr1 % 2 === 0) {
        return 'numero real'
    }
})
tela10.innerHTML = test8;
console.log(test8)
// flat()
var arr3a = [1, 2, [3, 4, [5, 6]]];
var test9 = arr3a.flat(arr3a);
tela11.innerHTML = test9;
console.log(test9);


// -------------------------------------------- ARR4
var arr4 = [10, 23, 32, 43, 2];
tela12.innerHTML = arr4;
// FlatMap
var test10 = arr4.flatMap(x => [x * 2])
tela13.innerHTML = test10;
console.log(test10)
// forEach()
var test11 = arr4.forEach(function(element, index, array){
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        console.log("a[" + index + "] = " + element);
        tela14.innerHTML = "a[" + index + "] = " + element;
    }
})
// From
var test12 = Array.from("matheus");
console.log(test12)
tela15.innerHTML = test12;


// -------------------------------------------- ARR5
var arr5 = [9, 8, 3, 5, 1]
tela16.innerHTML = arr5;
// includes
var test12 = arr5.includes(0)
var test13 = arr5.includes(5)
console.log(test12)
console.log(test13)
tela17.innerHTML = 'O valor 0 é ' + test12 + ' e não esta no Array. E o valor 5 ' + test13 + ' esta no array';
// indexOf
var test14 = arr5.indexOf(5)
console.log(test14)
tela18.innerHTML = ' No array n indice do valor 5 é  ' + test14;
// IsArray
var test15 = Array.isArray([arr5])
tela19.innerHTML = test15;
console.log(test15);


// -------------------------------------------- ARR6
var arr6 = [1, 3, 43, 2, 12]
tela20.innerHTML = arr6;
// join()
var test16 = arr6.join('*');
console.log(test16)
tela21.innerHTML = test16;
// keys()
var test17 = arr6.keys();
console.log(test17.next(Array))
tela22.innerHTML = test17;
// map()
var test18 = arr6.map(function(){
    return arr6 + "---";
})
console.log(test18)
tela23.innerHTML = test18;


// -------------------------------------------- ARR7
var arr7 = [102, 231, 235, 24, 14]
tela24.innerHTML = arr7;
// Array.of()
tela25.innerHTML = Array.of(3,5,9)
console.log(Array.of(3,5,9))
// Pop()
var test19 = arr7.pop();
console.log(test19)
tela26.innerHTML = test19 + ' Array com o pop:' + arr7;
// push()
var test20 = arr7.push(500);
console.log(test20)
tela27.innerHTML = test20 + ' Array com o pop:' + arr7;


// -------------------------------------------- ARR8
var arr8 = [23,52,47,23,1]
tela28.innerHTML = arr8;
// reduce()
var test21 = arr8.reduce(function(reducer){
    return reducer;
});
console.log('Verificando ' + test21)
tela29.innerHTML = test21;
// reverse()
var test22 = arr8.reverse();
console.log(test22);
tela30.innerHTML = test22;
// shift()
var test23 = arr8.shift();
console.log( 'Removeu ' + test23 + '. Novo Array ' + arr8);
tela31.innerHTML = 'Removeu ' + test23 + '. Novo Array ' + arr8;


// -------------------------------------------- ARR9
var arr9 = [9,8,7,6,5]
tela32.innerHTML = arr9;
// slice()
var test24 = arr9.slice(2,5);
console.log(test24);
tela33.innerHTML = 'slice(2,5)// ' + test24;
// some()
var test25 = arr9.some(function(element, index, array){
    return element > 10
});
console.log(test25);
tela34.innerHTML = 'element > 10//-  "' + test25 + '" - porque array ' + arr9;
// sort()
var test26 = arr9.sort();
console.log(test26);
tela35.innerHTML = test26;


// -------------------------------------------- ARR10
var arr10 = ['8',9,'5',5,7, 'baNANA']
tela36.innerHTML = arr10;
// splice()
var test27 = arr10.splice(0, 1, 1)
console.log(' Remove ' + test27 + ' adiciona 1, e agora é ' + arr10);
tela37.innerHTML = test27;
// toLocaleString()
var test28 = arr10.toLocaleString()
console.log(test28);
tela38.innerHTML = test28;
// toString()
var test29 = arr10.toString()
console.log(test29);
tela39.innerHTML = test29;


// -------------------------------------------- ARR10
var arr11 = ['casa', 'Carro', 'Local', 'Pipoca', 'Morro']
tela40.innerHTML = arr11 + ' quantidade ' + arr11.length;
// unshift()
var test30 = arr11.unshift('lapis')
console.log(test30 + ' Quantides. Array agora é ' + arr11 );
tela41.innerHTML = test30;
// values()
var test31 = arr11.values()
console.log(test31.next().value, test31.next().value);
tela42.innerHTML = test31.next().value + ' ' + test31.next().value ;