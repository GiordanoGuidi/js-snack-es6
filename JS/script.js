// //#SNACK 1
// const tableName = 'Tavolo Vip';

// const guests = [
//   'Brad Pitt',
//   'Johnny Depp',
//   'Lady Gaga',
//   'Cristiano Ronaldo',
//   'Georgina Rodriguez',
//   'Chiara Ferragni',
//   'Fedez',
//   'George Clooney',
//   'Amal Clooney',
//   'Maneskin'
// ];
// console.log(guests)
// CREO UN NUOVO ARRAI DI OGGETTI
// const guestList = guests.map((element,i)=>{
//     return {
//         name: element,
//         seat: i+1,
//         table: tableName
//     }
// })
// console.log(guestList)

// //#SNACK 2
// const studentsList = [
//     {
//         id : 213,
//         name: 'Marco della Rovere',
//         grades: 78
//     },
//     {
//         id : 110,
//         name: 'Paola Cortellessa',
//         grades: 96
//     },
//     {
//         id : 250,
//         name: 'Andrea Mantegna',
//         grades: 48
//     },
//     {
//         id : 145,
//         name: 'Gaia Borromini',
//         grades: 74
//     },
//     {
//         id : 196,
//         name: 'Luigi Grimaldello',
//         grades: 68
//     },
//     {
//         id : 102,
//         name: 'Piero della Francesca',
//         grades: 50
//     },
//     {
//         id : 120,
//         name: 'Francesca da Polenta',
//         grades: 84
//     }
// ]

//CREO ARRAY STUDENTI CONTOTALE VOTI < 70

// const over70Grades = studentsList.filter(student =>{
//     if(student.grades > 70) return true;
//     else false;
// })
// console.log('sono fuori', over70Grades)
// CREO ARRAY CON TOTALE VOTI > A 70 E ID > 120
// const over70GradesAndIdOver120 = over70Grades.filter(student=>{
//     if(student.id > 120) return true;
//     else return false;
// })
// console.log('OVER 70 E 120', over70GradesAndIdOver120)
//CREO ARRAY CON NOMI DEGLI STUDENTI IN MAIUSCOLO
// const studentsNames = studentsList.map(student=>student.name.toUpperCase())
// console.log(studentsNames)
// console.log(studentsList)

//#-------------------------------------------------------

//#SNACK 3
// CREO UN ARRAY DI OGGETTI
const bikes = [
    {
        name: 'marcella',
        weigth: 20
    },
    {
        name: 'jhonny',
        weigth: 15
    },
    {
        name: 'simona',
        weigth: 10
    },
    {
        name: 'clara',
        weigth: 12
    },
    {
        name: 'sonia',
        weigth: 17
    },
]

// CREO UN VALORE DI CONFRONTO
// CREO CICLO PER ITERARE IN OGNI OGGETTO
let lightestbike = bikes[0 ]
bikes.forEach(bike => {
    if( bike.weigth < lightestbike.weigth){
        lightestbike = bike
    }
});
console.log(lightestbike)

//#SNACK 4

// const footballTeam = [
//     {
//         name:'Roma',
//         score: 0,
//         fouls: 0, 
//     },
//     {
//         name:'Atalanta',
//         score: 0,
//         fouls: 0, 
//     },
//     {
//         name:'Latina',
//         score: 0,
//         fouls: 0, 
//     },
//     {
//         name:'Fidene',
//         score: 0,
//         fouls: 0, 
//     },
//     {
//         name:'Atalanta',
//         score: 0,
//         fouls: 0, 
//     },
//     {
//         name:'Regina',
//         score: 0,
//         fouls: 0, 
//     },
// ]

// CREO FUNZIONE PER GENERARE NUMERI RANDOM
// const randomNumberGenerator = () => Math.floor(Math.random() * 100) + 1;
//AGGIUNGIAMO NUMERI RANDOM ALL'INTERNO DEI PUNTI E DEI FALLI SUBITI
// footballTeam.forEach(team => {
//     team.score = randomNumberGenerator();
//     team.fouls = randomNumberGenerator()
// });
// console.log(footballTeam)

// CREO ARRAY CON NOMI E FALLI SUBITI
// const {name,score,fouls} = footballTeam
// const newFootballTeam = footballTeam.map(({name,fouls})=>{
//     return {
//         name,
//         fouls
//     } 
// })
// console.log(newFootballTeam)





