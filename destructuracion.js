const personaje = {
    nombre: 'Pepe ',
    apellido:'Argento',
    real: 'Guillermo Franchela',
    getDescripcion() {
        return `${nombre} ${apellido} es ${profesion}`
    }
}


/* const nombre = personaje.nombre;
const apellido = personaje.apellido;
const profesion = personaje.profesion; */

//destructuraracion de constante

const{nombre, apellido, profesion} = personaje;

/* 
const imprimirPersonaje = (personaje) => {
    console.log(personaje.nombre,personaje.apellido,personaje.profesion);
};

imprimirPersonaje(personaje); */


//destructuracion en una funcion

const imprimirPersonaje = ({nombre, apellido, profesion}) => {
    console.log(nombre,apellido,profesion);
};

imprimirPersonaje(personaje);

//destructuracion de array 

const personajes = ['Pepe', 'Moni', 'Koki'];

/* const p1 = personaje[0];
const p2 = personaje[1];
const p3 = personaje[2];
 */

/* const[p1,p2,p3] = personajes;
console.log(p1,p2,p3); */

const[,, p3] = personajes;
console.log(p3);








