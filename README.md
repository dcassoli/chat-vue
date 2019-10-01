Chat simples utilizando Websocket, Vue.JS e PHP

O Websocket  é um protocolo que nos permite abrir uma comunicação bidirecional com o servidor utilizando um único soquete TCP (Transmission Control Protocol) através do navegador. Sendo assim, tanto o cliente quanto o servidor podem enviar informações entre si a qualquer momento.

No lado cliente utilizaremos o Vue.JS para facilitar a construção da interface do chat, além de manter um código mais organizado.

No lado servidor utilizaremos o Ratchet que é uma biblioteca PHP que nos permite construir um servidor de Websocket de um jeito descomplicado.

No diretório server:
Basta rodar "composer install" no terminal.

Agora precisamos executar este arquivo para iniciar nosso servidor de Websocket. 
Para isso você precisa ir até o terminal, navegar até a pasta dele e executar o comando abaixo:

$ php server.php

Pronto, agora nosso servidor de Websocket foi iniciado.

Para executar o projeto, rodar a URL:
localhost:8080

========================================================

Simple chat using Websocket, Vue.JS and PHP

Websocket is a protocol that allows us to open two-way communication with the server using a single Transmission Control Protocol (TCP) socket through the browser. Therefore, both client and server can send information to each other at any time.

On the client side we will use Vue.JS to make it easier to build the chat interface, as well as to maintain a more organized code.

On the server side we will use Ratchet which is a PHP library that allows us to build a websocket server in an uncomplicated way.

In the server directory: Just run "composer install" on the terminal.

Now we need to run this file to start our Websocket server. For this you need to go to the terminal, navigate to its folder and execute the command below:

$ php server.php

Okay, now our Websocket server has started.

To run the project, run the URL: 
localhost: 8080

