const { verify } = require("jsonwebtoken");
const AppError = require("../utils/AppError");
const authConfig = require("../configs/auth");

function ensureAuthenticated(request, response, next){

    // O token do usuário vai estar no cabeçalho do corpo de requisição, dentro de authorization
    const authHeader = request.headers.authorization;

    if(!authHeader){
        throw new AppError("JWT Token não informado", 401);
    }

    // Pegar a string do header e passar ela para dentro de uma variavel no vetor usando o split
    const [, token] = authHeader.split(" ");

    // Verificar se é um token válido
    try {
       const {sub: user_id} = verify(token, authConfig.jwt.secret);

       // Quardar no banco em formato de número
       request.user = {
        id: Number(user_id),
       };

       // Para chamar a função destino
       return next();

    } catch (error) {
        throw new AppError("JWT Token inválido", 401);       
    }
}

module.exports = ensureAuthenticated;