// Utilize html, css e js para criar uma aplicação de lista de compras
//Esta aplicação deve conter:
//  - Um input do tipo texto;
//  - um botão para adicionar o conteúdo do input em uma lista não ordenada.
//  - um ou mais botões para excluir um elemento específico da lista.
//  - um elemtno de lista não ordenada para mostrar os itens adicionados

const form = document.querySelector("form");
const input = document.querySelector("#input");
const btnAddList = document.querySelector("#adiciona");
const btnRemoveList = document.querySelector("#remove");
const areaLista = document.querySelector(".listaDeCompras");

mostraDadosLocalStorage();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let inputValue = input.value.trim();

  if (!validaCampo() || verificaItemExistente(inputValue)) {
    return;
  }

  insereItemNaLista(inputValue);
  addLocalStorage(inputValue);

  input.value = "";
});

function insereItemNaLista(texto) {
  //let inputValue = input.value.trim();
  let li = document.createElement("li");
  let span = document.createElement("span");
  span.innerText = texto;
  li.appendChild(span);
  const btnDelete = document.createElement("button");
  btnDelete.innerText = "excluir";
  li.appendChild(btnDelete);
  areaLista.appendChild(li);

  btnDelete.addEventListener("click", (event) => {
    console.log("bla");
    const spanText = event.target.previousSibling.innerText;
    event.target.parentElement.remove();

    deletaItemLocalStorage(spanText);
  });
}

function validaCampo() {
  if (input.value == "") {
    input.style.border = "2px solid red";
    alert("Digite algum ítem para adicionar.");
    return false;
  } else {
    return true;
  }
}

function verificaItemExistente(inputValue) {
  const existingItem = areaLista.querySelectorAll(`li span`);
  let result = false;
  existingItem.forEach((item) => {
    if (item.innerText == inputValue) {
      result = true;
      input.style.border = "2px solid red";
      alert("O item já existe na lista.");
    }
  });
  return result;
}

function addLocalStorage(texto) {
  let lista = localStorage.getItem("lista");
  let novaLista = JSON.parse(lista);
  lista ? novaLista.push(texto) : (novaLista = [texto]);
  localStorage.setItem("lista", JSON.stringify(novaLista));
}

function deletaItemLocalStorage(texto) {
  let lista = localStorage.getItem("lista");
  lista = JSON.parse(lista);

  const index = lista.indexOf(texto);
  lista.splice(index, 1);
  localStorage.setItem("lista", JSON.stringify(lista));
  console.log("Item removido com sucesso!");
  console.log(lista);
}

function mostraDadosLocalStorage() {
  let recuperaDados = localStorage.getItem("lista");

  if (recuperaDados) {
    recuperaDados = JSON.parse(recuperaDados);
    recuperaDados.forEach((item) => {
      insereItemNaLista(item);
    });
  } else {
    console.log("Não há dados armazenados no localStorage.");
  }
}
