//1ere façon de créer un objet

var wookie = function(name){
    this.name = name;
 };
 
 wookie.prototype.hurler = function(){
    console.log('roaaaar');
 };
 
 wookie.prototype.donnerTaille = function(){
    return 3.50;
 }
 
 wookie.prototype.nbPoils = 3500;
 
 var monObjet = new wookie('chewie');
 
 console.log(monObjet.name);
 monObjet.hurler();
 
 console.log(monObjet.nbPoils);
 console.log(monObjet.donnerTaille());
 
 //----------------------------------------------
 //2ème façon de créer un objet
 
 var jedi = {
    name: 'luke',
    manierSabre: function(){
        console.log('je sais manier mon gros sabre');
    }
 };
 jedi.manierSabre();
 
 //Ajouter une nouvelle méthode (sans prototype)
 jedi.utiliserForce = function(){
    console.log("vive la force !");
 }
 
 //On créer un objet vide
 const unObjetVide = {};
 
 //On ajoute une nouvelle méthode et on utilise les lambdas
 unObjetVide.voler = () => {
    console.log('I believe I can fly');
 };
 
 unObjetVide.voler();
 
 jedi.utiliserForce();
 
 //Récupérer un objet depuis une chaîne JSON
 var objetParse = JSON.parse('{ "name": "coucou" }');
 console.log(objetParse.name);
 
 //----------------------------------------------
 //3ème façon de créer un objet
 
 class Vaisseau {
    constructor(name, size){
        this.name = name;
        this.size = size;
    }
 
    fly() {
        console.log(`${this.name} vole`);
    }
 
    get monNom(){
        return this.name + "...";
    }
    set monNom(value){
        this.name = value;
    }
 }
 const monVaisseau = new Vaisseau('X-Wing', 120);
 monVaisseau.fly();
 
 monVaisseau.monNom = "ma Valeur";
 console.log(monVaisseau.monNom);
 
 //----------------------------------------------
 //4ème façon de créer un objet
 
 var myObject = Object.create(null);
 myObject.direBonjour = function() {
    console.log("yo");
 };
 
 myObject.direBonjour();
 
 //Objet dans objet
 var object = Object.create(monVaisseau);
 monVaisseau.voler = function() {
    console.log("Je vole");
 };
 
 object.voler();
 monVaisseau.voler();