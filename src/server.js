import { create } from 'venom-bot';
import { stages, getStage } from './stages.js';

create({
    session: 'store',
    multidevice: true,
    headless: false,
  })
  .then((client) => start(client))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });


function start(client) {
    client.onMessage((message) => {
      if (!message.isGroupMsg) {
        if (message.body == 'start') {
          var menu = '👋 Olá, Espero que você esteja bem \n\n, sou o * assistente virtual * da Proex.\n * Posso te ajudar ?* 🙋‍♂️ \n---------------------------------\n1 - ```Programas e Projetos```\n 2 - ```Cursos e Eventos```\n 3 - ```Produtos e Prestação de serviços```\n 4 - ```PIBEX```\n 5 - ```Estágio Não Obrigatório```\n\nEscolha uma das Opções';
          client.sendText(message.from, menu).then(() => {
            console.log('Message sent.');
          }).catch(error => console.error('Error when sending message', error));
        //vocês vão comentar o que tá dentro do bloco if (!message.isGroupMsg) { } e colocar esse codigo aqui:
          if (message.body == '1'){
            let msg = '🚨  Programas e Projetos  🚨\n\n';
            msg += '*a)* Subimissão de programa e projeto\n*b)* Encerramento de programa e projeto\n*c)* Renovação de programas e projetos\n * d)* Treinamentos em programas e projetos'
            msg += '\nPara ir ao site da proex, *acesse*: https://proex.ufra.edu.br/\n\n⚠️ ```APENAS UMA OPÇÃO POR VEZ``` \n*Digite a opção ao qual deseja:*';

            client.sendText(message.from, msg).then(() => {
            }).catch(error => console.error('Error when sending message', error));
            if (message.body == 'a'){
              client.sendText(message.from, 'opção a').then(() => {
              }).catch(error => console.error('Error when sending message', error));
            if (message.body == 'b') {
              client.sendText(message.from, 'opção b').then(() => {
              }).catch(error => console.error('Error when sending message', error));
            }
          }
        
          if (message.body == '2') {
          
            client.sendText(message.from, "opção 2").then(() => {
            }).catch(error => console.error('Error when sending message', error));
          }
        
          if (message.body == '3') {
          
            client.sendText(message.from, "opção 3").then(() => {
            }).catch(error => console.error('Error when sending message', error));
          }
        
          if (message.body == '4') {
          
            client.sendText(message.from, "opção 4").then(() => {
            }).catch(error => console.error('Error when sending message', error));
          }
        
          if (message.body == '5') {
          
            client.sendText(message.from, "opção 5").then(() => {
            }).catch(error => console.error('Error when sending message', error));
          }
        }
      }
}});
};