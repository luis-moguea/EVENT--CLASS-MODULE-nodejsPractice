const EventEmitter = require("events")

class Logger extends EventEmitter { 

    log (message){
        //send a HTTP request
        console.log(message)

        //raise an event with arguments to the listener
        this.emit("test", {id: 1, url: "http//ex..."})
    }

}

module.exports = Logger

