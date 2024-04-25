/* Com o passar do tempo, a aplicação pode ter diversas rotas, desta 
forma o arquivo de index tendo como objetivo reunir todos os grupos de rotas */

const { Router } = require('express');

const usersRoutes = require('./users.routes');
const notesRoutes = require('./notes.routes');
const tagsRoutes = require('./tags.routes');
const sessionsRoutes = require('./sessions.routes');

const routes = Router();

/* Toda vez que alguem acessar o '/users' vai ser redirecionado 
para o usersRoutes, que é o grupo de rotas do usuário*/
routes.use('/users', usersRoutes);


routes.use('/notes', notesRoutes);
routes.use('/tags', tagsRoutes);
routes.use("/sessions", sessionsRoutes);


module.exports = routes;