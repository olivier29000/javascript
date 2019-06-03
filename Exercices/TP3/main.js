
//3ème facon de créer un objet, avec les class (version ES6 -ECMA 6-):

class Vaisseau {
    /** il y a aussi un constructeur par défaut mais on créer un spéciale */
    constructor(name, size) {
        this.name = name;
        this.size = size;
    }

    autodestruction(){
        console.log('Je m\'auto détruit !');
    }

    fly(){
        console.log(`${this.name} vole, il a une taille de ${this.size} mètres`);
    }

    //getter : renvoie soit l'attribut : encapsulation, et peut améliorer l'attribut avant renvoie
    get monNom(){
        return this.name + ' ...';
    }

    //setter
    set monNom(value){
        this.name = value;
    }
}

const monVaisseau = new Vaisseau ('X-Wing', 120); //comme c'est un const on ne peut pas faire un , c'est équivalent à en java
monVaisseau.fly();

monVaisseau.monNom = 'Ma Valeur'; //utilisation du Setter
console.log(monVaisseau.monNom);

//ne fonctionne pas
//monVaisseau = new Vaisseau ('leVaisseau',19);

//la c'est possible parce qu'on utilise un "let"
let monVaisseau2 = new Vaisseau ('X-Wing', 120);
monVaisseau2 = new Vaisseau ('Faucon', 150);
console.log(monVaisseau2.monNom);



// héritage
class Vaisseau2 extends Vaisseau{
    constructor(name, size, color){
        super(name, size);
        this.color = color;
    }

    //Override : polymorphisme
    fly(){
        super.fly();
        console.log('I believe I can fly again');
    }
}

const unVaisseauEnfant = new Vaisseau2('Falcon', 120, 'blue');
unVaisseauEnfant.fly();