class Personnage {
    constructor(name,hp){
        this.name =name
        this.hp = hp

    }
}
 

let John = new Personnage ("John","10")

const Anissa = new Musique("Anissa-Wejdenne")
let music =[("Anissa-Wejdene"),("Lithium","Nirvana"),("Solo" , "Future"),( "Rock Steady","The Whispers"),( "She Can't Love You","Chemise")]

class trajet {
    constructor(radio, feux, changements){
        this.radio = radio
        this.feux =feux
        this.changements =changements
    }
}

let Trajet = true ;
let Feux = 30;
let Changements = 0;
 

while (feux >0 && John.hp > 0) {
    let currentSong = music [Math.floor(Math.random() * music.lenght)];
    console.log(" Le son est" + currentSong + feux + "feux rouges restant")
}


if (musique == "Anissa-Wejdenne") {
    console.log(Personnage.name + "perd 1 hp");
     }

    if (this.feux <=0){
        console.log("John est arrivé chez lui")
        if (John.hp <= 0)
        console.log("Explosion !")
     }



    



