import { arraylable } from './arraylable'

export function sum(data: number[]): number {
  return arraylable(data).reduce((acc, item) => acc + item, 0)
}
