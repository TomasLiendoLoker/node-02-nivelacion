// es una funcion que va a ejecutar una funcion callback despues
// de un determinado tiempo
// un callback es una funcion que se pasa como parametro a otra funcion para que
// la ejecute la otra funcion
// callback se llama a la funcion que va como parametro
// es una funcion que se va a ejecutar en el futuro generalmente no sabemos cuando
// con el timeout lo se porque seteo que sucede a cada cierto momento

/* setTimeout(()=>{
    console.log('Hola Mundo');
},2000);
 */

/* const saludar = () =>console.log('Hola mundo');
setTimeout(saludar,2000)
 */

const getUsuarioById = (id, callback) =>{
    const user = {
        id,
        nombre: 'Tomas'
    }
    setTimeout(()=>{

      callback(user);  
    
    },1000)
}

//Esta funcion esta simulando de que se va a buscar un usuario a la BD,archivo,etc (1 seg)
//Donde va a devolver ese usuario (id = 1) que vendría a ser un objeto
//Despues de 1segundo me devuelve el usuario pero si lo hacemo secuencial el console.log me va
// a devolver undefined porque voy a querer mostrar ese objeto que todavia no logre obtener
//Entonces por eso usamos la callback
//getUsuarioById (Buscame el objeto id 1, funcion a ejecutar cuando tenga el objeto en memoria (1s))
getUsuarioById(1, (usuario) => {

    console.log(usuario.nombre)
});






