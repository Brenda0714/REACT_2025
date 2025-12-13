

//*03 OBJETOS LITERALES */

const ironman = {
    firstName: 'Tony',
    lastName: 'Stark',
    age: 45,
};
 //? Operador Spread (...) -> Toma todas las propiedades de Ironman y las coloque en Spiderman 
 //? rompe la referencia al primer nivel
const spiderman = {...ironman}; 

spiderman.firstName = 'Peter';
spiderman.lastName = 'Parker';
spiderman.age = 22;

console.log(ironman, spiderman);


const ironman2 = {
    firstName: 'Tony',
    lastName: 'Stark',
    age: 45,
    address: {
        postalCode: 'ABC123',
        city: 'New York',
    },
};
 //? StructuredClone () -> poder clonar a profundidad un objeto
 //? rompe la referencia con todas sus propiedades anidadas
const spiderman2 = structuredClone(ironman2); 

spiderman2.firstName = 'Peter';
spiderman2.lastName = 'Parker';
spiderman2.age = 22;
spiderman2.address.city = 'San Jose';

console.log(ironman2, spiderman2);

//*03.2 INTERFACES DE TYPESCRIPT */

interface Person {
    firstName: string;
    lastName: string;
    age: number;

    adress?: Address;
}

interface Address {
        postalCode: string;
        city: string;
}

const ironman3: Person = {
    firstName: "Tony",
    lastName: "Stark",
    age: 45,
    adress: {
        postalCode: "ABC123",
        city: "York",
    }

};

const spiderman3: Person = {
    firstName: "Peter",
    lastName: "Parker",
    age: 22
}

console.log(ironman3, spiderman3);
