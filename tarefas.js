var tarefas = [
  {
    nome: 'Comprar leite',
    categoria: 'compras',
    realizada: false
  },
  {
    nome: 'Escutar chimbinha',
    categoria: 'lazer',
    realizada: true
  }
];

function limparTarefasPagina() {
  ul = document.querySelector('#lista-tarefas');

  ul.innerHTML = '';
}

function insereTarefaNaPagina(tarefa) {
  ul = document.querySelector('#lista-tarefas');
  element = document.createElement('li');
  element.innerHTML = tarefa.nome;
  element.classList.add('item-tarefa');
  element.classList.add(`categoria-${tarefa.categoria}`);

  if (tarefa.realizada) {
    element.classList.add('marcado');
  }

  ul.appendChild(element);
}

function incluirTarefa() {
  nomeElement = document.querySelector('#nova-tarefa-nome');
  categoria = document.querySelector('#nova-tarefa-categoria').value;

  tarefa = {
    nome: nomeElement.value,
    categoria: categoria,
    realizada: false
  };

  tarefas.push(tarefa);

  this.insereTarefaNaPagina(tarefa);

  nomeElement.value = '';
  nomeElement.focus();
}

this.limparTarefasPagina();

tarefas.forEach(insereTarefaNaPagina);

botaoIncluir = document.querySelector('#incluir-nova-tarefa');
botaoIncluir.addEventListener("click", () => this.incluirTarefa());

nomeElement = document.querySelector('#nova-tarefa-nome');
nomeElement.addEventListener("keyup", event => {
  if (event.key === 'Enter') {
    this.incluirTarefa();
  }
});