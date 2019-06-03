class Cheval{

    constructor(name){
        this.name=name;
    }

    dormir(){
        console.log(`${this.name} dors....`);
    }

    galoper(){
        console.log('je galope');
    }
}

class Zebre extends Cheval{
    constructor(name){
super(name);
    }

    dormir(){
        super.dormir();
        console.log('..... couché');

    }
}

const monCheval=new Cheval('bob le cheval');
const monZebre=new Zebre('zob le zebre');

monCheval.dormir();
monZebre.dormir();
