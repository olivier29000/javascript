

var prenom=prompt('quel est ton prénom');
var taille=prompt('quel est ta taille en centimètres');

if (parseInt(taille)<200||!Number.isInteger(parseInt(taille))) {
    alert('t\'es qu\'un menteur, t\'es pas un wookie')
}
else{

    var jourDeNaissance=prompt('quel est ton jour de naissance (de 1 à 31)');

    if (parseInt(jourDeNaissance)>31 || parseInt(jourDeNaissance<1)||!Number.isInteger(parseInt(jourDeNaissance))) {
        alert('entre 1 et 31 on a dit!')
    } else {
        var moisDeNaissance=prompt('quel est ton mois de naissance\n 0:janvier\n 1:fevrier\n 2:mars\n 3:avril\n 4:mai\n 5:juin\n 6:juillet\n 7:aout\n 8:septembre\n 9:octobre\n 10:novembre\n 11:decembre');
    var anneeDeNaissance=prompt('quel est ton année de naissance');
    var dateDeNaissance=new Date(anneeDeNaissance,moisDeNaissance,jourDeNaissance)
    
    console.log('tu t\'appelles ', prenom,'tu mesures', taille, 'tu es né le', dateDeNaissance);  
    alert('tu t\'appelles ' + prenom + 'tu mesures ' + taille + ' tu es né le' + dateDeNaissance);

    alert(dateDeNaissance.getDate());
    alert(dateDeNaissance.getMonth());
    }
    
    
}









