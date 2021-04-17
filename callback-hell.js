const empleados = [
{   id: 1,
    nombre: 'Tomas'
},
{
    id: 2,
    nombre: 'Marta'
},
{
    id: 3,
    nombre: 'Juan'
}
]
const sueldos = [
{
    id: 1,
    sueldo: 1500
},
{
    id: 2,
    sueldo: 200

}
]

 const getEmpleadoById = (id,callback) =>
 {
     //Se recorre el array de empleados uno por uno
     //se va a ejecutar la funcion (e) => por cada uno de ellos
     // Si es verdadero se guarda en empleado
    const empleado = empleados.find((e) => e.id === id);
    //Si encuentro un empleado voy a hacer que se ejecuta 
    //la funcion pasada por parametro con el empleado encontrado
    if (empleado){
        callback(null,empleado);
    }
    else{
    //cuando el empleado es undefined
    callback(new Error("El empleado no existe"));
    }
 } 
const id =5;

const getSalarioById = (id,callback)=>{
    const sueldo = sueldos.find((e) => e.id === id)
    if (sueldo){
        callback(null,sueldo)
    }
    else{
        callback(new Error("El sueldo no existe"))
    }
}



//e -> empleado
//Le pasamos por parametro el error

 getEmpleadoById(id,(error,empleado) => {
     if(error){
         console.log('ERROR!!');
        console.log(error);
         return;
     }
     console.log(`El empleado: ${empleado.nombre}...`)
 }) 

getSalarioById(id,(error,sueldo)=>{
    if(error){
        console.log('ERROR!!');
        console.log(error)
        return;
    }
    console.log(`sueldo: ${sueldo.sueldo}`)

})

