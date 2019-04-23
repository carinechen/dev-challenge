//Importando npms
const fs = require('fs'); 
const csv = require('fast-csv');

//Lê o arquivo csv
const stream = fs.createReadStream('input.csv');

//Cria uma variavel 
var result = [];

//Deixa o código com espaçamento e alinhamento arruamados
const streamCSV = csv({
    headers: true
})

//Onde ocorre a conversão e armazenamento de dados
.on('data', (data) => result.push (data))

//Faz a saída dos dados em um arquivo JSON
.on('end', () => {    
    fs.writeFileSync('output.json', JSON.stringify(result));
    console.log(result);
});

stream.pipe(streamCSV);

