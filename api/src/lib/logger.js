import fs from 'fs'
import path from 'path'
import winston from 'winston'
import { LoggingWinston } from '@google-cloud/logging-winston'
import config from '../config/app'
import { stringify } from 'flatted'

const { combine, timestamp, label, printf, colorize } = winston.format

const logDir = 'logs'

// CreateUser the log directory if it does not exist
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir)
}

let transports;

if (config.get('env') !== 'production') {
  transports = [
    new winston.transports.File({ filename: path.join(logDir, 'error.log'), level: 'error', handleExceptions: true }),
    new winston.transports.File({ filename: path.join(logDir, 'combined.log'), handleExceptions: true }),
    new winston.transports.Console({
      handleExceptions: true
    })
  ]
} else {
  transports = [
    new LoggingWinston(),
  ]
}

const customFormat = printf((info) => {
  let msg = `Process: ${process.pid} ${info.timestamp} [${info.label}] ${info.level}: `
  info = typeof info.message === 'object' ? info.message : info

  msg += info.logTitle ? `${info.logTitle} Message: ${info.message || 'No Message'} ` : info.message || 'No Message '
  msg += info.class ? `class: ${typeof info.class === 'object' ? stringify(info.class) : info.class} ` : ''
  msg += info.context ? `context: ${typeof info.context === 'object' ? stringify(info.context) : info.context} ` : ''
  msg += info.metadata ? `metadata: ${typeof info.metadata === 'object' ? stringify(info.metadata) : info.metadata} ` : ''
  msg += info.tagsCtx ? `tagsCtx: ${typeof info.tagsCtx === 'object' ? stringify(info.tagsCtx) : info.tagsCtx} ` : ''
  msg += info.userCtx ? `userCtx: ${typeof info.userCtx === 'object' ? stringify(info.userCtx) : info.userCtx} ` : ''
  msg += info.exceptionBacktrace ? `exceptionBacktrace: ${typeof info.exceptionBacktrace === 'object' ? stringify(info.exceptionBacktrace) : info.exceptionBacktrace} ` : ''
  msg += info.fault ? `fault: ${typeof info.fault === 'object' ? stringify(info.fault) : info.fault} ` : ''
  return msg
})

const format = combine(
  colorize(),
  label({ label: config.get('app.name') }),
  timestamp(),
  customFormat
)

const logger = winston.createLogger({ transports: transports, exitOnError: false, format })

export default class Logger {
  static _logger = logger

  static info (logTitle, argHash = {}) {
    this.log('info', logTitle, argHash)
  }

  static debug (logTitle, argHash = {}) {
    this.log('debug', logTitle, argHash)
  }

  static error (logTitle, argHash = {}) {
    this.log('error', logTitle, argHash)
  }

  static log (logType, logTitle, argHash = {}) {
    const allArgs = Object.assign({ logTitle }, argHash)
    const logMessage = this.buildMessage(allArgs)
    this.writeToLog(logType, logTitle, logMessage, argHash)
  }

  static writeToLog (logType, logTitle, logMessage, argHash = {}) {
    if (argHash && ['start', 'around'].indexOf(argHash.wrap) !== -1) {
      logger[logType](this.generateWrapStr(logTitle, 'START'))
    } else if (argHash && ['end', 'around'].indexOf(argHash.wrap) !== -1) {
      logger[logType](this.generateWrapStr(logTitle, 'END'))
    } else {
      logger[logType](logMessage)
    }
  }

  static generateWrapStr (logTitle, separatorType) {
    return `${separatorType} ${'='.repeat(15)} ${logTitle.toUpperCase()} ${'='.repeat(15)} ${separatorType}`
  }

  static buildMessage (logAttrs) {
    const msg = { logTitle: logAttrs.logTitle }

    if (logAttrs.klass) { msg.class = logAttrs.klass.name }
    if (logAttrs.message) { msg.message = logAttrs.message }
    if (logAttrs.context) { msg.context = logAttrs.context }
    if (logAttrs.metadata) { msg.metadata = logAttrs.metadata }
    if (logAttrs.tagCtx) { msg.tagsCtx = logAttrs.tagCtx }
    if (logAttrs.userCtx) { msg.userCtx = logAttrs.userCtx }
    if (logAttrs.exception) { msg.exceptionBacktrace = logAttrs.exception.stack }
    if (logAttrs.fault) { msg.fault = logAttrs.fault }
    return msg
  }
}
