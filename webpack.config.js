/*Webpack converte arquivos de design
 e fotos para linguagem que os
  navegadores entendam*/

const path = require('path');//essa linha importa(usar nesse arquivo o path) o módulo path(caminho de arquivo).

module.exports={
  //entry é a entrada do principal arquivo da aplicação
  entry:path.resolve(__dirname,'src','index.js'),//procura o arquivo index.js dentro do diretorio todo,dirname e dentro do src
 //Output: Qual arquivo vai ser gerado depois de convertido
  output:{
    path:path.resolve(__dirname,'public'),
    filename:'bundle.js'
  },
  devServer:{
    contentBase: path.resolve(__dirname,'public'),//contentBase:caminho para diretorios publicos na aplicação
  },
  //regras do webpack
  module:{
    rules:[
      {
        test:/\.js$/,//se termina com js ele converte
        exclude: /node_modules/,//excluir pasta padrão
        use:{
          loader:'babel-loader',//e usar conversão
        }
      },
        {
          test:/\.css$/,
          exclude:/node_modules/,
          use:[
            {loader:'style-loader'},//por no html
            {loader: 'css-loader'},//e usar conversão
          ]
        },
        {
          test:/.*\.(gif|png|jpe?g)$/i,//formatos de imagem e i é o case sensitive
          use: {
            loader:'file-loader',
          }
        }
      
    ]
  }
};