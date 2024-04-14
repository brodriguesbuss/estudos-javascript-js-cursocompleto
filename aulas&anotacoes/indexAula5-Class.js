class celular {
  constructor() {
    this.cor = "prata";
  }

  ligar(){
    console.log("uma ligacao");
    return "ligando";
  }
}

let objeto = new celular();
console.log(objeto);
console.log(objeto.ligar());
