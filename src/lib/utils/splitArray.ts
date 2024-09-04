export const splitArray = <T>(array: T[], cols = 3): T[][] => {
  const result = Array.from({ length: cols }, () => []) as T[][]

  array.forEach((value, index) => {
    const subArrayIndex = index % cols
    result[subArrayIndex].push(value)
  })

  return result
}
