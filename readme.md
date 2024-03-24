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
  npx husky-init && npm
```

- pre-commit
- pre-push
