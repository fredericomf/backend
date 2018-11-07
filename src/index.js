const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// NOTA_ESTUDO: O comando abaixo serve, basicamente, para extrair o servidor HTTP criado com "const app = express()"
const server = require('http').Server(app);

// NOTA_ESTUDO: O comando abaixo serve para que o nosso app escute agora o protocolo WS (WebSocket) além do HTTP comum.
const io = require('socket.io')(server);


// Pelo curso foi utilizada a conta gratuita da www.mlab.com. (ESTUDAR COMO CONECTAR NO LOCALHOST)
mongoose.connect('mongodb://goweek:goweek123@ds255253.mlab.com:55253/fredericomf-goweek-backend', {
    useNewUrlParser: true
});

/** 
 * NOTA_ESTUDO: 
 * 
 * Técnica do MIDDLEWARE (INTERCEPTADOR) para disponibilizar o "io" em todo o app
 * 
 * Para que o MIDDLEWARE não interrompa o processamento do BACKEND é muito importante receber um terceiro
 * parâmetro chamado "next". Assim ele trata o que precisa e depois realoca a fila (volta ao fluxo normal)
 * */ 
app.use((req, res, next) => {
    req.io = io;

    return next();
});

app.use(cors()); // Dependência para liberar o uso da nossa aplicação por outras aplicações

/**
 * NOTA_ESTUDO:
 * Ao aplicar o comando app.use(express.json()) eu estou dizendo ao EXPRESS que todas as requisições que eu fizer transitarão usando JSON.
 */
app.use(express.json());

app.use(require('./routes'));

// Alocando a aplicação para escutar uma porta
server.listen(3000, () => {

    // Função de callback que será executada quando o nosso servidor subir.
    console.log('Server started on port 3000');

});