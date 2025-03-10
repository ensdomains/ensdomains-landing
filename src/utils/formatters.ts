export const formatDate = (date: Date | string) => {
  if (typeof date === 'string') {
    date = new Date(date)
  }

  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export const titleCase = (s?: string) =>
  s
    ? s
        .replace(/^[_-]*(.)/, (_, c) => c.toUpperCase()) // Initial char (after -/_)
        .replace(/[_-]+(.)/g, (_, c) => ' ' + c.toUpperCase()) // First char after each -/_
        .replace(/([a-z])([A-Z])/g, '$1 $2') // Space between lower and uppercase
    : ''
