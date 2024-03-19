class Turma {
  #codigo;
  #nota;

  constructor(codigo, nota) {
    this.#codigo = codigo;
    this.#nota = nota;
  }

  get nota() {
    return this.#nota;
  }

  set nota(nota) {
    this.#nota = nota;
  }

  get codigo() {
    return this.#codigo;
  }

  set codigo(codigo) {
    this.#codigo = codigo;
  }

  aprovado() {
    return this.#nota >= 6.0;
  }
}

module.exports = Turma;
