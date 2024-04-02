export const cx = (...classes: (string | undefined)[]) => classes.filter(x => typeof x === 'string').join(' ')
