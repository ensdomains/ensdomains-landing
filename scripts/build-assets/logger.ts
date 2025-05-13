import { env } from 'node:process'
import { inspect } from 'node:util'

// ANSI color codes for terminal output
const Colors = {
  reset: '\x1b[0m',
  // Foreground colors
  black: '\x1b[30m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
  gray: '\x1b[90m',
  // Background colors
  bgBlack: '\x1b[40m',
  bgRed: '\x1b[41m',
  bgGreen: '\x1b[42m',
  bgYellow: '\x1b[43m',
  bgBlue: '\x1b[44m',
  bgMagenta: '\x1b[45m',
  bgCyan: '\x1b[46m',
  bgWhite: '\x1b[47m',
  // Styles
  bold: '\x1b[1m',
  dim: '\x1b[2m',
  italic: '\x1b[3m',
  underline: '\x1b[4m',
} as const

// Log levels with their corresponding colors and priority
export const LogLevels = {
  DEBUG: {
    priority: 0,
    color: Colors.gray,
    label: 'DEBUG',
    labelColor: Colors.dim + Colors.gray,
  },
  INFO: {
    priority: 1,
    color: Colors.blue,
    label: 'INFO',
    labelColor: Colors.bold + Colors.blue,
  },
  SUCCESS: {
    priority: 2,
    color: Colors.green,
    label: 'SUCCESS',
    labelColor: Colors.bold + Colors.green,
  },
  WARN: {
    priority: 3,
    color: Colors.yellow,
    label: 'WARN',
    labelColor: Colors.bold + Colors.yellow,
  },
  ERROR: {
    priority: 4,
    color: Colors.red,
    label: 'ERROR',
    labelColor: Colors.bold + Colors.red,
  },
  FATAL: {
    priority: 5,
    color: Colors.bgRed + Colors.white,
    label: 'FATAL',
    labelColor: Colors.bold + Colors.bgRed + Colors.white,
  },
} as const

type LogLevel = keyof typeof LogLevels

// Logger configuration from environment variables
const config = {
  minLevel: (env.LOG_LEVEL?.toUpperCase() || 'INFO') as LogLevel,
  useColors: env.LOG_COLORS !== 'false',
  showTimestamp: env.LOG_TIMESTAMP !== 'false',
  showLabels: env.LOG_LABELS !== 'false',
  timestampFormat: env.LOG_TIMESTAMP_FORMAT || 'HH:mm:ss.SSS',
}

// Utility to format timestamps
const formatTimestamp = (date: Date): string => {
  const pad = (n: number) => n.toString().padStart(2, '0')
  const hours = pad(date.getHours())
  const minutes = pad(date.getMinutes())
  const seconds = pad(date.getSeconds())
  const milliseconds = date.getMilliseconds().toString().padStart(3, '0')
  return config.useColors
    ? Colors.dim +
        `[${hours}:${minutes}:${seconds}.${milliseconds}]` +
        Colors.reset
    : `[${hours}:${minutes}:${seconds}.${milliseconds}]`
}

// Utility to format objects and errors
const formatValue = (value: unknown): string => {
  if (value instanceof Error) {
    const errorString = inspect(value, {
      showHidden: true,
      depth: 2,
      colors: true,
    })
    return config.useColors
      ? Colors.red + Colors.dim + errorString + Colors.reset
      : errorString
  }

  if (typeof value === 'object') {
    const objString = inspect(value, {
      showHidden: true,
      depth: 2,
      colors: true,
    })
    return config.useColors ? Colors.dim + objString + Colors.reset : objString
  }
  return String(value)
}

// Main logger class
class Logger {
  private static instance: Logger
  private scopeColor: string
  private scopeName: string | undefined

  private constructor(scopeName?: string, scopeColor?: string) {
    this.scopeName = scopeName
    this.scopeColor = scopeColor || ''
  }

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger()
    }
    return Logger.instance
  }

  private shouldLog(level: LogLevel): boolean {
    return LogLevels[level].priority >= LogLevels[config.minLevel].priority
  }

  private formatMessage(
    level: LogLevel,
    message: unknown,
    ...args: unknown[]
  ): string {
    const timestamp = config.showTimestamp ? formatTimestamp(new Date()) : ''
    const levelInfo = LogLevels[level]
    const label = config.showLabels
      ? config.useColors
        ? `${levelInfo.labelColor}[${levelInfo.label}]${Colors.reset} `
        : `[${levelInfo.label}] `
      : ''

    const scope =
      this.scopeName && config.useColors
        ? `${this.scopeColor}[${this.scopeName}]${Colors.reset} `
        : this.scopeName
          ? `[${this.scopeName}] `
          : ''

    const formattedMessage = formatValue(message)
    const formattedArgs = args.map((arg) => formatValue(arg)).join(' ')

    const parts = [
      timestamp,
      label,
      scope,
      formattedMessage,
      formattedArgs,
    ].filter(Boolean)

    return parts.join('')
  }

  private log(level: LogLevel, message: unknown, ...args: unknown[]): void {
    if (!this.shouldLog(level)) return

    const formattedMessage = this.formatMessage(level, message, ...args)
    const stream =
      LogLevels[level].priority >= LogLevels.ERROR.priority
        ? process.stderr
        : process.stdout

    stream.write(formattedMessage + '\n')
  }

  debug(message: unknown, ...args: unknown[]): void {
    this.log('DEBUG', message, ...args)
  }

  info(message: unknown, ...args: unknown[]): void {
    this.log('INFO', message, ...args)
  }

  success(message: unknown, ...args: unknown[]): void {
    this.log('SUCCESS', message, ...args)
  }

  warn(message: unknown, ...args: unknown[]): void {
    this.log('WARN', message, ...args)
  }

  error(message: unknown, ...args: unknown[]): void {
    this.log('ERROR', message, ...args)
  }

  fatal(message: unknown, ...args: unknown[]): void {
    this.log('FATAL', message, ...args)
  }

  // Utility methods
  group(label?: string): void {
    if (label) this.info(label)
    console.group()
  }

  groupEnd(): void {
    console.groupEnd()
  }

  // Create a scoped logger with a prefix
  scope(prefix: string): Logger {
    // Rotate through colors for different scopes
    const scopeColors = [
      Colors.cyan,
      Colors.magenta,
      Colors.yellow,
      Colors.green,
      Colors.blue,
    ]
    const colorIndex =
      Math.abs(
        prefix.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0),
      ) % scopeColors.length
    const scopeColor = Colors.bold + scopeColors[colorIndex]

    return new Logger(prefix, scopeColor)
  }
}

// Export a singleton instance
export const logger = Logger.getInstance()

// Example usage:
/*
logger.debug('Debug message')
logger.info('Info message')
logger.success('Success message')
logger.warn('Warning message')
logger.error('Error message')
logger.fatal('Fatal message')

const scopedLogger = logger.scope('MyModule')
scopedLogger.info('Scoped message')

logger.group('Group label')
logger.info('Grouped message')
logger.groupEnd()
*/
