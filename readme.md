# Js - Utility - venfran

Esta librería proporciona una serie de funciones útiles para trabajar con strings, arrays, validación de datos, comprobación de tipos y manejo de temporizadores en JavaScript.

## Instalación

Puedes instalar esta librería utilizando npm. Ejecuta el siguiente comando en tu terminal:

```bash
npm install venfran-js-utils
```

## Funciones disponibles

### Strings

- **capitalize(str: string): string**: Devuelve una cadena con la primera letra en mayúscula.
- **includes(str: string, substring: string): boolean**: Comprueba si una cadena incluye otra subcadena.

### Arrays

- **arrayable(item: any): boolean**: Comprueba si un elemento es iterable.
- **sum(array: Array<number>): number**: Calcula la suma de los elementos en un array de números.
- **sumBy(array: Array<any>, accessor: Function): number**: Calcula la suma de los elementos en un array aplicando un accessor a cada elemento.

### Check

- **isEmpty(value: unknown): boolean**: Comprueba si un valor es vacío (null, undefined, cadena vacía, array vacío, objeto vacío).
- **isFunction(value: unknown): boolean**: Comprueba si un valor es una función.
- **isNullOrUndefined(value: unknown): boolean**: Comprueba si un valor es nulo o indefinido.
- **isNumber(value: unknown): boolean**: Comprueba si un valor es un número.
- **isObject(value: unknown): boolean**: Comprueba si un valor es un objeto.
- **isObjectLike(value: unknown): boolean**: Comprueba si un valor es un objeto similar.
- **isString(value: unknown): boolean**: Comprueba si un valor es una cadena.

### Timing

- **throttle(func: Function, delay: number): Function**: Devuelve una función que, cuando sea invocada repetidamente, solo permitirá que se ejecute una vez cada `delay` milisegundos.
- **debounce(func: Function, delay: number): Function**: Devuelve una función que retrasa la ejecución de `func` hasta que haya pasado `delay` milisegundos desde la última vez que se llamó a la función devuelta.

### Validators

- **isEmail(email: string): boolean**: Comprueba si una cadena es una dirección de correo electrónico válida.
- **isValidAge(age: number): boolean**: Comprueba si una edad es válida (mayor o igual que 0).
- **isValidPhoneNumber(phoneNumber: string): boolean**: Comprueba si una cadena es un número de teléfono válido.
- **isValidUrl(url: string): boolean**: Comprueba si una cadena es una URL válida.

---

Si necesitas más información sobre cómo utilizar cada función, no dudes en consultar la documentación de cada una de ellas o en contactar a los desarrolladores de esta librería.
