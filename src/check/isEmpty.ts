// Función que verifica si un array o un objeto está vacío y devuelve true o false si lo está o no.
export function isEmpty (object: unknown): boolean {
  const safeObject = object
  const isCountable = safeObject instanceof Object || safeObject instanceof Array
  if (!isCountable) return true
  return Object.entries(safeObject).length === 0
}
