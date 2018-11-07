# BACKEND

## Inicializando o projeto

### Rodar o comando abaixo na pasta do projeto. Isso criará o package.json.

$ yarn init -y


### Instalar nossa primeira dependência. 
O express é um microframework para NODEJS, que permite-nos fazer a parte de roteamento, a parte de VIEW e algumas outras coisas:

$ yarn add express


### Instalar o plugin para comunicação com o banco de dados
O mongoose é um ORM para NODEJS

$ yarn add mongoose


### Instalar a extenção WATCH CODE (nodemon)
O nodemon serve para não precisarmos ficar abrindo e fechando a nossa aplicação quando estivermos alterando código em desenvolvimento.

NOTA: A opção "-D" é para indicar que essa extenção é de DESENVOLVIMENTO. Isso faz com que, quando enviarmos a nossa aplicação para produção, essa extenção será ignorada no processo de instalação.

$ yarn add nodemon -D

Para fazer o monitor funcionar é necessário adicionar uma nova chave no package.json "scripts":
"scripts": {
	"start": "nodemon src/index.js"
}

Rodar com: 
$ yarn start

### Instalar a dependência para trabalhar com o REALTIME

É um miniframework para fazer a comunicação em tempo real com sockets

$ yarn add socket.io


### Instalar dependência para segurança de acesso à aplicação

Basicamente é um módulo de segurança que vamos dizer para a nossa aplicação backend se outras aplicações poderão acessar a nossa aplicação

$ yarn add cors


## Sugestão de aplicativo para trabalhar com desenvolvimento:

INSOMNIA: https://support.insomnia.rest/article/23-installation#linux



