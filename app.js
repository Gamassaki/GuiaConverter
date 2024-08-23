const HtmlParser = require("./HtmlParser")
const PDFWrite = require("./PDFWriter")
const Processor = require("./Processor")
const Reader = require("./Reader")
const Table = require("./Table")
const Writer = require("./Writer")

var leitor = new Reader()
var escritor = new Writer()

async function main() {
    var dados = await leitor.Read("./users.csv") 
    var dadosProcessados = Processor.Process(dados)
    var usuarios = new Table(dadosProcessados)
    var html = await HtmlParser.Parse(usuarios)
    escritor.Writer(Date.now() + ".html", html)
    PDFWrite.WritePDF(Date.now() + ".pdf", html)

}

main()