class Processor{
    static Process(data){
        var rows = data.split("\r\n")
        var splitData = []

        rows.forEach( row => {
            var column = row.split(";")
            splitData.push(column)
        });
        return splitData
    }
}

module.exports = Processor