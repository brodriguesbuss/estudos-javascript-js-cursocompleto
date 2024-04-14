class CalcController {
  constructor() {
    this._displayCalc = "0";
    this._currentDate;
    this.initialize();
  }

  //Tudo que eu quiser que aconteça assim que começar minha calculadora, eu devo colocar dentro do initialize
  initialize() {
    let displayCalcEl = document.querySelector("#display");
    let dateEl = document.querySelector("#data");
    let timeEl = document.querySelector("#hora");

    displayCalcEl.innerHTML = "4567"
    dateEl.innerHTML= "20/12/1994"
    timeEl.innerHTML = "04:04"
  }

  get displayCalc() {
    return this._displayCalc;
  }

  set displayCalc(valor) {
    this._displayCalc = valor;
  }

  get currentDate() {
    return this._currentDate;
  }

  set currentDate(novaData) {
    this._currentDate = novaData;
  }
}
