type IsNullOrUndefined = null | undefined

export const isNullOrUndefined = (value: unknown): value is IsNullOrUndefined => {
  return value === null || value === undefined
}
