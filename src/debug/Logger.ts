import Reactotron from 'reactotron-react-native';

function logMessage(
  message: string,
  logFunc: {
    /* (message?: any, ...optionalParams: any[]): void;
    (message?: any, ...optionalParams: any[]): void;
    (message?: any, ...optionalParams: any[]): void;
    (message?: any, ...optionalParams: any[]): void;*/
    (message?: any, ...optionalParams: any[]): void;
    (arg0: string, arg1: undefined): void;
  },
  ...rest: string[]
) {
  if (!message) {
    logFunc('An error has occured while logging message. Message is undefined');
  }
  let index = -1;
  let argCount = 0;
  while (true) {
    index = message.indexOf('{}', index + 1);
    if (index >= 0) {
      argCount++;
    } else {
      break;
    }
  }
  for (let i = 0; i < argCount; i++) {
    message = message.replace('{}', rest[i]);
  }

  if (argCount < rest.length) {
    logFunc(message, ...rest.slice(argCount, rest.length));
  } else {
    console.log('LOG function' + message);
    logFunc(message);
  }
}

export const Logger = {
  log: function (message: string, ...rest: any) {
    logMessage(message, console.log, ...rest);
  },

  debug: function (message: string, ...rest: any) {
    // By default a no-op unless activated
    // We keep the method signature here for type checking purposes
    logMessage(message, console.warn, ...rest);
    Reactotron.debug!(message + ' ' + rest);
  },

  warn: function (message: string, ...rest: any) {
    logMessage(message, console.warn, ...rest);
    Reactotron.warn!(message + ' ' + rest);
  },

  error: function (message: string, ...rest: any) {
    logMessage(message, console.error, ...rest);
    Reactotron.error!(message, rest);
  },

  _disableDebugLogging: function () {
    Logger.debug = () => {};
  },

  _enableDebugLogging: function () {
    Logger.debug = function (message: string, ...rest) {
      logMessage(message, console.log, ...rest);
      Reactotron.debug!(message + ' ' + rest);
    };
  },

  display: function (tag: string, message: string, ...rest: any) {
    Reactotron.display({
      name: tag,
      preview: message,
      value: {
        message,
        data: rest,
      },
      important: true,
    });
  },
};

export function debugLog(debug: any, message: string, ...rest: any[]) {
  if (debug) {
    Logger.debug(message, ...rest);
  }
}
