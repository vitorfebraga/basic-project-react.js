/*O babel é uma ferramenta de conversão 
de código Javascript para código que o navegador entenda pois os
 navegadores ainda não entendem
o Js6
Embaixo segue as configurações do babel
*/
module.exports={/*exporta configurações de terceiros
  //presets são configurações de funcionalidade de 
  terceiros que podem ser reusadas*/
  presets: ['@babel/preset-env',/*Converte a linguagem de um javascript
   mais moderno 
  de acordo com o ambiente
  (navegador),com o que ele não entende,'env'=ambiente*/
'@babel/preset-react'],/*Adiciona funcionalidades do react,que é uma ferramenta
 para fazer sites usada pelo Facebook,netflix e etc*/
};