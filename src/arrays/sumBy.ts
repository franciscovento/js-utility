import { arraylable } from './arraylable'

export function sumBy<T>(
  datasource: T[],
  accessor: (item: T) => number
): number {
  return arraylable(datasource).reduce((acc, item) => acc + accessor(item), 0)
}
