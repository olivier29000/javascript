

/** Changer de contexte */

const monObjet = {
    name: 'dark vador',
    color: 'black'
};

var name = 'luke';

function appelerName(){
    console.log(this.name, this);
}

const f=appelerName.bind(monObjet);
f();

window.appelerName();
appelerName();

//le call permet de définir le contexte du "this"
window.appelerName.call(monObjet);
window.appelerName.bind(monObjet);