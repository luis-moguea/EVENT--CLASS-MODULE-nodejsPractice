const EventEmitter = require("events")

const Logger = require("./event-class.js")
const logger = new Logger

//register a listener
logger.on("test", (eventArg) => {
    console.log("Listener logged", eventArg)
})

logger.log("Succeded")
logger.log("Just do it")