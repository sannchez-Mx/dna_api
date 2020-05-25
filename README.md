DNA-API

    REST API que analiza si una persona tiene mutación genetica basado en su secuencia de ADN.

Instalación:

     Instala dependencias con NPM:
     npm i

inciciar el servidor:
     
     npm start

Mediante POSTMAN agrega el siguiente URL: 

    https://teamknowlogy-dna-api.herokuapp.com/
   
   
Agrega al body la secuencia de ADN a verificar, incluyendo llave "dna".
         
     { “dna”:["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"]}
     
  
Realiza un POST al servicio /mutation:

    POST → /mutation/



