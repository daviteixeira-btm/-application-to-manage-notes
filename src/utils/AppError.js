/* Funcionalidade de tratamento de exceções para que nem um erro derrube 
nossa aplicação. Padronizando o tipo de messagem que vai aparecer quando 
tiver erro na aplicação. */

class AppError {
    message
    statusCode
  
    /* Método que é carregado automaticamente quando uma classe 
    é instânciada, por padraão teremos o status code de 400 que é um erro do cliente. */
    constructor(message, statusCode = 400) {
      this.message = message
      this.statusCode = statusCode
    }
  };
  
  module.exports = AppError;