/** @format */

export function getPrevNext(arr, current) {
  const index = arr.indexOf(current);
  if (index === -1) return { prev: null, next: null };

  return {
    prev: index > 0 ? arr[index - 1] : null,
    next: index < arr.length - 1 ? arr[index + 1] : null,
  };
}
