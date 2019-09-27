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

