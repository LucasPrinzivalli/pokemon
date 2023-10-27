class Pokemon {
    constructor(name,attack,defense,hp,luck) {
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = hp
        
    }

    attack(PokemonpokemonToAttak) {
        PokemonpokemonToAttak.hp = this.attack-PokemonToAttack.defense
        
    }

    isLucky() {
        return Math.random() < this.luck
    }
}

   const myPokemon1 = new Pokemon ("Leviator","60","40","120","0.8")
   const myPokemon2 = new Pokemon ("Mew","55","50","110","0.7")

   while (myPokemon1.hp > 0 && myPokemon2.hp > 0) {
    // le premier pokemon attaquera le deuxième
    myPokemon1.attackPokemon(myPokemon2)
    console.log( "Leviator attaque Mew")
    console.log( "Mew a X point de vies")
   }

   // le deuxième pokemon attaque
   myPokemon2.attackPokemon(myPokemon1)
   console.log( "Mew attaque Leviator")
   console.log("Leviator a X points de vies")

   if (myPokemon1.hp <=0) {
    console.log ("Leviator est K.O ! Cheh!")
   }

   if (myPokemon2hp <=0) {
    console.log ("Mew is K.O! Cheh!")
   }