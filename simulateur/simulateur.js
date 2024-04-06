class Guerrier {
    constructor(name, vie, attack, precision) {
        this.name = name;
        this.vie = vie;
        this.attack = attack;
        this.precision = precision;
    }

    getAttack(adversaire) {
        if (Math.random() < this.precision) {
            console.log(this.name + " frappe " + adversaire.name + " de " + this.attack + " dégâts!");
            adversaire.vie -= this.attack;
            if (adversaire.vie <= 0) console.log(adversaire.name + " perd!");
        } else {
            console.log(this.name + " manque son attaque!");
        }
    }
}

const Simba = new Guerrier("Simba", 100, 10, 0.9),
      Scar = new Guerrier("Scar", 100, 12, 0.5);

while (Simba.vie > 0 && Scar.vie > 0) {
    Simba.getAttack(Scar);
    if (Scar.vie > 0) Scar.getAttack(Simba);
}

console.log(Simba.vie > 0 ? Simba.name + " gagne!" : Scar.name + " gagne!");



