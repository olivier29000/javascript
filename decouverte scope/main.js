//"use strict";

//<------------------------------------------------------------------------>

var maVariableQueJaime = 8;

function afficherLaVariable(unParametre) {
    var uneAutreVariable = 'çava?';
    var uneVariableDeMerde = 'je suis un malin';
    console.log(unParametre, maVariableQueJaime, uneAutreVariable);

    if (true) {
        var uneVariableDansLeIf = 'test if';
        console.log(uneVariableDansLeIf);
    }
console.log(uneVariableDansLeIf);
}

afficherLaVariable('coucou');
// console.log(uneVariableDeMerde);
// console.log(uneAutreVariable);


//<------------------------------------------------------------------------>


function utiliserLetEtConst(isOK) {
    if (isOK) {
        let uneVariable=1;
        console.log(uneVariable);
        uneVariable=3
        const uneConstante=9;
        //uneConstante=10;
    }
    //console.log(uneVariable);
}

utiliserLetEtConst(true);

//<------------------------------------------------------------------------>
// this et SCOPE

var prenomWookie='chewie';

function afficher() {
    var prenomWookie='truc';
    console.log(this.prenomWookie);
    console.log(prenomWookie);
}

afficher();

//<------------------------------------------------------------------------>

function unTestThis() {
    console.log(this);
    setTimeout(() => {
        console.log(this);
    }, 1000);
    
}

unTestThis();