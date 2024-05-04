// Aqui deixamos as configurações de autenticação da aplicação

module.exports = {
    jwt: {
        secret: process.env.AUTH_SECRET || "default",
        expiresIn: "1d"
    }
}