var app = new Vue({

    // Elemento que o aplicativo será iniciado
    el: "#app",

    // Propriedades do aplicativo
    data: {
        user: 'Anônimo',
        text: null,
        messages: [],
        ws: null,
    },

    // Quando iniciado o aplicativo
    created() {
        // Inicia a conexão com o websocket
        this.connect();
    },

    // Métodos do aplicatvo
    methods: {

        // Método responsável por iniciar conexão com o websocket
        connect(onOpen) {

            // Conectando
            this.ws = new WebSocket('ws://localhost:8282');

            // Evento que será chamado ao abrir conexão
            this.ws.onopen = function() {
                this.addSuccessNotification('Conectado');
                // Se houver método de retorno
                if (onOpen) {
                    onOpen();
                }
            };

            // Evento que será chamado quando houver erro na conexão
            this.ws.onerror = function() {
                this.addErrorNotification('Não foi possível conectar-se ao servidor');
            };

            // Evento que será chamado quando recebido dados do servidor
            this.ws.onmessage = function(e) {
                this.addMessage(JSON.parse(e.data));
            };

        },

        // Método responsável por adicionar uma mensagem de usuário
        addMessage(data) {
            this.messages.push(data);
            this.scrollDown();
        },

        // Método responsável por adicionar uma notificação de sucesso
        addSuccessNotification(text) {
            this.addMessage({color: 'green', text: text});
        },

        // Método responsável por adicionar uma notificação de erro
        addErrorNotification(text) {
            this.addMessage({color: 'red', text: text});
        },

        // Método responsável por enviar uma mensagem
        sendMessage() {

            // Se não houver o texto da mensagem ou o nome de usuário
            if (!this.text || !this.user) {
                // Saindo do método
                return;
            }

            // Se a conexão não estiver aberta
            if (this.ws.readyState !== this.ws.OPEN) {

                // Exibindo notificação de erro
                this.addErrorNotification('Problemas na conexão. Tentando reconectar...');

                // Tentando conectar novamente e caso tenha sucesso
                // envia a mensagem novamente
                this.connect(() => {
                    this.sendMessage();
                });

                // Saindo do método
                return;
            }

            // Envia os dados para o servidor através do websocket
            this.ws.send(JSON.stringify({
                user: this.user,
                text: this.text,
            }));

            // Limpando texto da mensagem
            this.text = null;

        },

        // Método responsável por "rolar" a scroll do chat para baixo
        scrollDown() {
            var container = this.$el.querySelector('#messages');
            container.scrollTop = container.scrollHeight;
        },

    }

});