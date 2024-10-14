# Lista de Compras com JavaScript e localStorage

Este projeto é uma lista de compras simples implementada usando JavaScript e a API localStorage para persistência de dados.

Funcionalidades
Adiciona itens à lista de compras.
Valida se o campo de entrada está vazio antes de adicionar.
Verifica se o item já existe na lista para evitar duplicatas.
Remove itens da lista.
Salva a lista de compras no localStorage para que ela persista entre recarregamentos da página.
Carrega a lista de compras do localStorage na inicialização da página.
Como usar
Abra o arquivo HTML associado a este código JavaScript.
Digite um item na caixa de texto e clique no botão "Adicionar".
O item será adicionado à lista e salvo no localStorage.
Clique no botão "Excluir" ao lado de um item para removê-lo da lista e do localStorage.
Estrutura do código
O código consiste em várias funções que trabalham juntas para gerenciar a lista de compras:

insereItemNaLista: Cria um elemento <li> para o novo item, adiciona um botão de exclusão e o insere na lista.
validaCampo: Verifica se o campo de entrada está vazio e exibe um alerta se estiver.
verificaItemExistente: Procura por itens existentes na lista e alerta o usuário se uma duplicata for encontrada.
addLocalStorage: Adiciona um novo item a uma lista armazenada no localStorage.
deletaItemLocalStorage: Remove um item específico da lista no localStorage.
mostraDadosLocalStorage: Carrega a lista salva no localStorage e a exibe na página na inicialização.
