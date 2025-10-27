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

const getDayWithOrdinal = (day: number) => {
  if (day > 3 && day < 21) return day + 'th'
  switch (day % 10) {
    case 1:
      return day + 'st'
    case 2:
      return day + 'nd'
    case 3:
      return day + 'rd'
    default:
      return day + 'th'
  }
}

export const formatDateHumanly = (date: Date | string) => {
  if (typeof date === 'string') {
    date = new Date(date)
  }

  const month = date.toLocaleString('en-US', { month: 'long' })
  const day = getDayWithOrdinal(date.getDate())
  const year = date.getFullYear()

  return `${month} ${day} ${year}`
}

export const titleCase = (s?: string) =>
  s
    ? s
        .replace(/^[_-]*(.)/, (_, c) => c.toUpperCase()) // Initial char (after -/_)
        .replace(/[_-]+(.)/g, (_, c) => ' ' + c.toUpperCase()) // First char after each -/_
        .replace(/([a-z])([A-Z])/g, '$1 $2') // Space between lower and uppercase
    : ''
