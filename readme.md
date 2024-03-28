# Pasos para crear nuestra lib

## Vite

- "rápido"
- rollup
- Muchas tecnologías / frameworks

```
  npm create vite@latest
  yarn create vite@latest
```

## Three-shaking

> Live code inclusion

Es una forma de "eliminar" el código muerto / no utilizado

```
  import button from 'awesome-lib'
  import {button} from 'awesome-lib'
  import * as AwesomeLib from 'awesome-lib'
```

## Todo paquete que se respete

- EsLint .eslintrc --> npm init @eslint/config (seguir pasos)
- Prettier .prettier --> npm install --save-dev prettier
- Husky + commitlint (commits semánticos)
- Versionado semántico
- Tests
- Readme

## Dependencias a instalar

```
  npm install --save-dev @types/node vite-plugin-dts
```

## Vite plugin dts

Cuando queremos compartir librerías o paquetes que se escribieron en TS se necesita incluir un archivo de definición (.dts) de forma separada a nuestro bundle (index.js, bundle.js) esto nos ayudará a ver los tipos de nuestra función que estemos consumiendo de nuestro paquete.

index.d.ts: archivo de definición de tipos

## Bundling

Para crear una aplicación que sea distribuible se deben realizar ciertas configuraciones en el bundling final

## Husky

Una herramienta que te ayuda a correr scripts en diferentes estadios de la aplicación

Para correr el programa de husky-init el proyecto necesita ser un repo

```
  git init
  npx husky-init && npm install
```

- pre-commit
- pre-push

```
  npm install --save-dev @commitlint/config-conventional
  npm install --save-dev @commitlint/cli

  echo "module.exports = {extends: ['@commitlint/config-contentional']}" > commitlint.config.js
  npx husky add .husky/commit-msg 'npx --no -- commitlint --edit ${1}'
```

## Path alias

```
  npm install --save-dev vite-tsconfig-paths // dtypes
  npm install --save-dev vitest
```

## Utilidades

## Check

- isNullOrUndefined: Es una función que recibe un valor X de tipo unknown y devolvemos un booleano (predicado): True si el value es nulo o undefined, false en caso contrario

- isObject: Es una función que recibe un valor X unknown y devuelve un booleano true si el typeOf es object

## String

- Includes --> Una función que recibe un string y un value a buscar dentro de ese string. Devuelve booleano si el valor encontrado esta en el string
- Capitalize (hola -> Hola)
- reverse
- equalsIgnoreCase: Es una función que recibe dos strings y compara si son iguales aplicando lowercase

## Utils

- canUseDom: Devuelve true si puede utilizarse el DOM (revisa si el objeto window esta definido)

## Arrays

- arraylable: recibe un argumento (genérico o nulo). La función devuelve el mismo array value es un array valido y si el elemento es un no es arraylable devuelve un array vacío [].
- getById
- remove item/s
- find
- getIndexById
- sum
- sumBy
