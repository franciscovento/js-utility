import { arraylable } from './arraylable'

export function sumBy<T>(
  datasource: T[],
  accesor: (item: T) => number
): number {
  return arraylable(datasource).reduce((acc, item) => acc + accesor(item), 0)
}
