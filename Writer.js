const fs = require("fs")
const util = require("util")

class Writer{
    constructor(){
        this.writer = util.promisify(fs.writeFile)
    }
    async Writer(filename, data){
        try{
            await this.writer(filename, data)
            return true
        }catch(err){
            return false
        }
    }
}

module.exports = Writer