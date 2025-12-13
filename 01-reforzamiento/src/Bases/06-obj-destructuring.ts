//*06 DESTRUCTURACCION DE OBJETOS */

const person = {
    name: 'Tony',
    age: 45,
    key: 'Ironman',
};


//?esto es destructuracion
const { age,key,name} = person;


// const name = person.name;
// const age = person.age;
// const key = person.key;

console.log({name,age,key});


interface Hero{
    name: string;
    age: number;
    key: string;
    rank?: string;
}

const useContext = ({key,name,age,rank = 'sin rango'}: Hero) =>{


    return{
        keyName: key,
        user: {
            name,
            age
        },
        rank:rank,
    };
}


const context = useContext(person);

const {
    rank, 
    keyName, 
    user,
} = useContext(person);


const {name: newName} = user;


console.log(context);

console.log({rank, keyName, newName});
