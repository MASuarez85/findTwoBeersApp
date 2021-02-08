# findTwoBeersApp

En el siguiente repositorio van a encontrar una aplicacion desarrollada en NodeJS usando TypeScript y Express.

La aplicacion consiste en un metodo POST, que en base a un simple request, devuelve las dos posiciones del array enviado en el body que sumadas resultan en el numero que se envia en el atributo target.


# Primeros pasos

Una vez clonado el repositorio, ejecutar el siguiente comando para instalar las librerias necesarias para la ejecucion:

```````
npm install
````````

Luego de instaladas las librerias, debemos buildear el proyecto previo a su primer ejecucion, lo hacemos de la siguiente manera:

```````
npm run build
````````

Para ejecutar los unit tests, se debe ejecutar el siguiente comando:

```````
npm run test
```````

Por ultimo, para ejecutar el proyecto y dejar todo listo para hacer las llamadas a los endpoints, debemos ejecutar el siguiente comando:

```````
npm run start:watch
````````

Vamos a ver que en la consola se muestra la siguiente leyenda:

```````
REST Server ready and listening at ==> http://localhost:8080
```````


# Detalles del proyecto

La api cuenta con dos endpoints, /findTwoBeers que devuelve aleatoriamente, en cada ejecucion, un par de posiciones del array que se pasa en el request, dando como resultado el target indicado en este mismo

Y por otro lado, y esto es un extra, cuenta con otro endpoint /findTwoBeersAlt que devuelve siempre el mismo par de posiciones que sumadas son igual al target, este endpoint siempre devuelve la misma convinacion independientemente de la cantidad de llamados que hagamos. Las posiciones, por supuesto, varian en base al array enviado en el request.

Cuando ninguno de los elemento enviados en el array del request es igual al target, ambos endpoints devuelven un array vacio.

# Ejemplo de request

```````
{
  "beers": [15, 25, 39, 12,  19, 21, 10, 10], 
  "target": 40
}
```````