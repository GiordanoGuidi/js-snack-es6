const tableName = 'Tavolo Vip';

const guests = [
  'Brad Pitt',
  'Johnny Depp',
  'Lady Gaga',
  'Cristiano Ronaldo',
  'Georgina Rodriguez',
  'Chiara Ferragni',
  'Fedez',
  'George Clooney',
  'Amal Clooney',
  'Maneskin'
];
console.log(guests)
//CREO UN NUOVO ARRAI DI OGGETTI
const guestList = guests.map((element,i)=>{
    return {
        name: element,
        seat: i+1,
        table: tableName
    }
})
console.log(guestList)



