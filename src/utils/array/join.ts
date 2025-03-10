/**
 * Joins elements of an array with a separator value between each element
 *
 * @example
 * // Returns [1, '+', 2, '+', 3]
 * joinArray([1, 2, 3], '+')
 *
 * @example
 * // Can be used with JSX elements
 * joinArray(
 *   users.map(user => <UserLink user={user} />),
 *   <span>, </span>
 * )
 *
 * @param array - The array of elements to join
 * @param joiner - The separator value to insert between elements
 * @returns A new array with the joiner value inserted between each element of the input array
 * @typeParam K - Type of elements in the input array
 * @typeParam V - Type of the joiner value
 */
export const joinArray = <K, V>(array: K[], joiner: V): (K | V)[] => {
  const result: (K | V)[] = []

  for (let index = 0; index < array.length; index++) {
    result.push(array[index])

    if (index < array.length - 1) {
      result.push(joiner)
    }
  }

  return result
}
