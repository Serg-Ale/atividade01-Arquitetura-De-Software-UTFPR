const Turma = require("./Turma");

class TurmaPresencial extends Turma {
  #frequencia;

  constructor(codigo, nota, frequencia) {
    super(codigo, nota);
    this.#frequencia = frequencia;
  }

  get frequencia() {
    return this.#frequencia;
  }

  set frequencia(frequencia) {
    this.#frequencia = frequencia;
  }

  aprovado() {
    const notaMinimaParaSerAprovado = 6.0,
      frequenciaMinimaParaSerAprovado = 80; // porcentagem

    const aprovadoPorNota = this.nota >= notaMinimaParaSerAprovado,
      aprovadoPorFrequencia =
        this.#frequencia >= frequenciaMinimaParaSerAprovado;

    return aprovadoPorNota && aprovadoPorFrequencia;
  }
}

module.exports = TurmaPresencial;
