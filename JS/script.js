//#SNACK 1
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
//CREO UN NUOVO ARRAI DI OGGETTI
// const guestList = guests.map((element,i)=>{
//     return {
//         name: element,
//         seat: i+1,
//         table: tableName
//     }
// })
// console.log(guestList)

//#SNACK 2
const studentsList = [
    {
        id : 213,
        name: 'Marco della Rovere',
        grades: 78
    },
    {
        id : 110,
        name: 'Paola Cortellessa',
        grades: 96
    },
    {
        id : 250,
        name: 'Andrea Mantegna',
        grades: 48
    },
    {
        id : 145,
        name: 'Gaia Borromini',
        grades: 74
    },
    {
        id : 196,
        name: 'Luigi Grimaldello',
        grades: 68
    },
    {
        id : 102,
        name: 'Piero della Francesca',
        grades: 50
    },
    {
        id : 120,
        name: 'Francesca da Polenta',
        grades: 84
    }
]

//CREO ARRAY STUDENTI CONTOTALE VOTI < 70

const over70Grades = studentsList.filter(student =>{
    if(student.grades > 70) return true;
    else false;
})
console.log(over70Grades)



