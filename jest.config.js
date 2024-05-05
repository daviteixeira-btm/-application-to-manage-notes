module.exports = {
  /* Caso ele venha desligado por padrão, se um teste falhar, ele para 
  de executar os testes, ou seja caso ele esteja false, se algum teste der erro ele continua avançando.*/
  bail: true,
  coverageProvider: "v8",
  // Passamos uma expressão regular para dizer qual o padrão dos arquivos de teste
  testMatch: [
    /* Dentro de qualquer pasta, vai ter um arquivo de qualquer nome com a extensão '.spec.js' assim ele 
    ignora os outros arquivos indo direto para os arquivos de teste.
      - Adicionamos a variavel global '<rootDir>' para pegar a raiz do nosso projeto, depois /src/ para 
      pedir ao jest olhar somente os arquivos dentro desta pasta, ignorando arquivos de 
      configurações externa e o node_modules */
    "<rootDir>/src/**/*.spec.js"
  ],
}