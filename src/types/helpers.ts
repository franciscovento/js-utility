export type MaybeId = string | number | null | undefined

export interface Identifiable {
  id: MaybeId
}

export type AnyFunction = (...args: unknown[]) => unknown
