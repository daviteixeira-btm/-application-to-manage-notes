class SessionsController {

    // Função para criar uma seção
    async create(request, response) {
        const { email, password } = request.body;
        
        return response.json({ email, password})
    }
}

module.exports = SessionsController;