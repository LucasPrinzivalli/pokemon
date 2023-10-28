// On crée le tueur Jason
//

class Personnage {
    constructor(name,hp){
        this.name =name
        this.hp = hp
 
    }
}
 
let Jason = new personnage.tueur ("Jason","100")

//
// On crée l'équipe 
//

const noms = ["Lucas","Julie","Quentin","Florent","Thomas"]
 let caractéristque = [ Peureux , Sportif , Aventurier,Blonde,nerd]

 class Survivant {
constructor (){
    this.name = noms[Math.floor(Math.random()*noms.length)]
    this.caracteristique = caracteristique[Math. floor (Math.random() * caracteristique.length)]
}
 }
            let survivants = [new Survivant() ,new Survivant () , new Survivant () , new Survivant (), new Survivant ()];
     
     while(tueur.pv>0 && survivants. length > 0){
    let victime = Math.Floor (Math.random() * survivants.length)
    let survivant = survivants[victime]
    let chance = Math.random()
     }

     constsurvivants =[] ;
     for (let i = 0 ; i < 5 ; i++) {
        survivants.push({
            nom: genererNomAleatoire(),
            caracteristique : genererCaracteristiqueAleatoire (),
            probaMourir : 0.2 ,
            probaInfligerDegats : 0.5,
            probaMourireninfligeantDegats : 0.3
        });
    }

    

    if (tueur.pv<1 && survivants.length==0){
         console. log("Tout le monde est mort!")
    }else if (tueur.pv<1){
        console.log(tueur.name + " est mort, mais RIP à") 
    }else if (survivants. length ===0){
         console. log(tueur.name + " à tué tous les survivants , RIP à tous.")
    }
    



