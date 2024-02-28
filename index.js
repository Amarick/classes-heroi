class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
  
      if (this.tipo === "mago") {
        ataque = "usou magia";
      } else if (this.tipo === "guerreiro") {
        ataque = "usou espada";
      } else if (this.tipo === "monge") {
        ataque = "usou artes marciais";
      } else if (this.tipo === "ninja") {
        ataque = "usou shuriken";
      } else {
        ataque = "ataque desconhecido";
      }
  
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  const ataques = {
    mago: "usou magia",
    guerreiro: "usou espada",
    monge: "usou artes marciais",
    ninja: "usou shuriken",
  };
  
  function obterAtaque(tipo) {
    if (tipo === "mago") {
      return ataques.mago;
    } else if (tipo === "guerreiro") {
      return ataques.guerreiro;
    } else if (tipo === "monge") {
      return ataques.monge;
    } else if (tipo === "ninja") {
      return ataques.ninja;
    } else {
      return "ataque desconhecido";
    }
  }
  
  const mago = new Heroi("Makima", 22, "mago");
  const guerreiro = new Heroi("Guts", 30, "guerreiro");
  const monge = new Heroi("Ryu", 25, "monge");
  const ninja = new Heroi("Madara", 20, "ninja");
  
  mago.atacar();
  guerreiro.atacar();
  monge.atacar();
  ninja.atacar();
  