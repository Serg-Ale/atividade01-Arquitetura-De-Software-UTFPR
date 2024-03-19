# Exercício proposto

(![image](https://github.com/Serg-Ale/atividade01-Arquitetura-De-Software-UTFPR/assets/74671270/035f0f20-9275-41f2-b77a-ae65616e2bf8)



# Estrutura das Classes em JavaScript

Este projeto consiste em uma estrutura de classes em JavaScript para representar alunos e turmas, com diferentes níveis de encapsulamento e hierarquia entre elas.

## Classes

### `Aluno`

A classe `Aluno` representa um aluno em um sistema educacional. Possui os seguintes atributos:

- `nome`: O nome do aluno.
- `login`: O login do aluno.
- `ra`: O Registro Acadêmico (RA) do aluno.

#### Métodos:

- `constructor(nome, login, ra)`: Construtor da classe `Aluno`, que inicializa os atributos `nome`, `login` e `ra`.
  
### `Turma`

A classe `Turma` representa uma turma genérica. Possui os seguintes atributos:

- `#codigo`: O código identificador da turma.
- `#nota`: A nota da turma.

#### Métodos:

- `constructor(codigo, nota)`: Construtor da classe `Turma`, que inicializa os atributos `#codigo` e `#nota`.
- `get nota()`: Método para obter a nota da turma.
- `set nota(nota)`: Método para definir a nota da turma.
- `get codigo()`: Método para obter o código da turma.
- `set codigo(codigo)`: Método para definir o código da turma.
- `aprovado()`: Método que verifica se a turma está aprovada com base na nota.

### `TurmaPresencial`

A classe `TurmaPresencial` é uma subclasse de `Turma` e representa uma turma presencial, que inclui informações adicionais sobre frequência. Possui os seguintes atributos:

- `#frequencia`: A frequência do aluno na turma presencial.

#### Métodos:

- `constructor(codigo, nota, frequencia)`: Construtor da classe `TurmaPresencial`, que inicializa os atributos `codigo`, `nota` e `frequencia`.
- `get frequencia()`: Método para obter a frequência do aluno na turma presencial.
- `set frequencia(frequencia)`: Método para definir a frequência do aluno na turma presencial.
- `aprovado()`: Método que verifica se o aluno está aprovado na turma presencial, considerando a nota e a frequência.

## Níveis de Encapsulamento e Hierarquia

- **Encapsulamento**: As classes `Turma` e `TurmaPresencial` usam o recurso de campos privados (usando `#`) para encapsular os atributos `#codigo`, `#nota` e `#frequencia`, garantindo que só possam ser acessados dentro das próprias classes.
- **Hierarquia**: A classe `TurmaPresencial` é uma subclasse de `Turma`, o que significa que herda todos os atributos e métodos de `Turma` e pode estender ou modificar seu comportamento conforme necessário.
 de como você pode documentar a estrutura das suas classes em um README.md para facilitar a compreensão e o uso por parte de outros desenvolvedores.
