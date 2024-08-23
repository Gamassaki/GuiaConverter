const pdf = require("html-pdf")

class PDFWrite{
    static WritePDF(filename, html){
        pdf.create(html,{}).toFile(filename, (err) =>{})
    }
}
module.exports = PDFWrite