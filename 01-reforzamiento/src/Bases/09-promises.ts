//*09 PROMESAS */

const myPromise = new Promise<number>((resolve, reject) =>{
    setTimeout(() =>{
        //! QUIERO MI DINERO !!
        resolve(100);
        reject('mi amigo se perdio');
    },2000); //2 segundos
});

myPromise.then(
    myMoneyIsBack => {
        console.log(`Tengo mi dinero ${ myMoneyIsBack }`)
})
.catch((reason) =>{
        console.warn(reason);

})
.finally(()=> {
    console.log('Pues a seguir con mi vida');
})