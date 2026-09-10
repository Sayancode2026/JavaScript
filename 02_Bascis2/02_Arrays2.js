const marvel_heroes=["Ironman","Spiderman","Captain America"]
const dc_heroes=["Batman","Superman","Flash"]

// marvel_heroes.push(dc_heroes)//arr within arr not a good approach
// console.log(marvel_heroes)
// console.log(marvel_heroes[3][2])//Flash

//concat
// const allHeroes=marvel_heroes.concat(dc_heroes)
// console.log(allHeroes)
/* Output:-
[
  'Ironman',
  'Spiderman',
  'Captain America',
  'Batman',
  'Superman',
  'Flash'
]
*/
//spread
const all_new_heros=[...marvel_heroes,...dc_heroes]
console.group(all_new_heros)

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
//flat
const real_another_array=another_array.flat(Infinity)
console.log(real_another_array)// [ 1, 2, 3, 4, 5,6, 7, 6, 7, 4, 5]

console.log(Array.isArray("Sayan"))// false
console.log(Array.from("Sayan"))//convert to array   [ 'S', 'a', 'y', 'a', 'n' ]
console.log(Array.from({name:"Sayan"}))//[]

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));//[ 100, 200, 300 ]






