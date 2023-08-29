let students = [
  {
    name: "Alex",
    noteOne: 9,
    noteTwo: 5,
  },
  {
    name: "Ana",
    noteOne: 10,
    noteTwo: 7, 
  },
  {
    name: "João",
    noteOne: 7,
    noteTwo: 7,
  },
  {
    name: "Maria",
    noteOne: 4,
    noteTwo: 6,
  },
  {
    name: "Paula",
    noteOne: 3,
    noteTwo: 4,
  },
]

function calcula_media (noteOne, noteTwo){
  return ((noteOne + noteTwo) / 2).toFixed(2)
}


for (let i = 0; i < students.length; i++) {
  
  let student = students[i];
  let media = calcula_media(student.noteOne, student.noteTwo);
  if (media >= 7) {
    alert("a média do aluno(a) " + student.name + " é: " + media + " você foi aprovado(a)")
  } else {
    alert("a média do aluno(a) " + student.name + " é: " + media + " você foi reprovado(a)")
  }

}
