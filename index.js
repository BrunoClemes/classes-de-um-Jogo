class heroi{
    constructor(nome, idade, tipo, ataque){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.ataque = ataque

    }

    atacar(tipo, ataque){

        if(this.tipo === "mago"){
            ataque = "magia"
        } else if (this.tipo === "guerreiro"){
            ataque = "espada"
        } else if (this.tipo === "monge"){
            ataque = "artes marciais"
        } else if (this.tipo === "ninja"){
            ataque = "shuriken"
        }
        
        console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
}

let mago = new heroi  ("Dr.Destino", 45, "mago")
let guerreiro = new heroi ("Deadpool", 32, "guerreiro")
let monge = new heroi  ("Shang-Chi", 30, "monge")
let ninja = new heroi  ("Naruto", 18, "ninja")

mago.atacar()
guerreiro.atacar()
monge.atacar()
ninja.atacar()