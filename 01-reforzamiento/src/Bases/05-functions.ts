

//*05 FUNCIONES */

function greet ( name: string) : string {
    return `Hola ${ name }`;
}

const greet2 = (name: string): string =>{
    return `Hola ${ name }`;

}

const message = greet('Goku');
const message2 = greet2('Vegeta');

console.log(message, message2);


function getUser(){
    return {
        uid: 'ABC-123',
        username: 'El_nUMBER',
    }
}

const getUser2 = () =>{
        return {
        uid: '567',
        username: 'Abyy',
    }
}

const user = getUser();
const user2 = getUser2();

console.log(user, user2);



//*05 FUNCIONES CON MULTIPLES RETORNOS */


const multiple = (name: string) =>`Hola ${ name }`

console.log(multiple);


const myNumbers: number[]= [1,2,3,4,5];

// myNumbers.forEach(function (value){
//     console.log({ value });
// });


myNumbers.forEach((value) => {
    console.log({value})
})
