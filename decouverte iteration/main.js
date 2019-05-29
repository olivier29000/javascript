
// var n=0;

// while (n<50) {
    
//     console.log(n);
//     n++;

// }


var unTableau=['thomas','marine','olivier'];
// var deuxTableau=['yonel','kevin','cecile','eloi'];

// for (var index = 0, index2=2; index < unTableau.length && index2 < deuxTableau.length; index++,index2++) {
//     var element = unTableau[index];
//     console.log("element",element);
    
// }
// var i =0;
// while (i<unTableau.length) {
//     console.log(unTableau[i]);
//     i++
// }


var i =0;
unTableau.forEach(function(element){
    unTableau[i]=element+"ok";
    i++;
});


var uneFonction=function(element){
    console.log(element);
}

unTableau.forEach(uneFonction);

unTableau.forEach(function(element){
    console.log(element);
});



