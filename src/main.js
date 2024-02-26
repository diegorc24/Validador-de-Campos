// Vamos importar nosso biblioteca
import validator from 'validator';

// Aqui, vamos selecionar, pelos ids, campos em nossa página
const campoDeTexto = document.querySelector('#value');
const button = document.querySelector('#button');
const seletor = document.querySelector('#option');
const textoDeSaida = document.querySelector('#answer');

const UUID_VERSION = 4;

button.addEventListener('click', (event) => {
  // Vamos usar o preventDefault() para evitar que, ao
  // clicar no botão, ele recarreque a página
  event.preventDefault();

  // Aqui, criamos um objeto cujas chaves são os tipos a
  // Serem validados. Por exemplo, a chave CPF valida se
  // o campoDeTexto.value é um CPF.
  const campos = {
    cpf: validator.isTaxID(campoDeTexto.value, 'pt-BR'),
    hexColor: validator.isEmail(campoDeTexto.value),
    uuid: validator.isUUID(campoDeTexto.value, UUID_VERSION),
    url: validator.isURL(campoDeTexto.value),
  };

  // O objeto 'campos' possui as chaves com o mesmo nome
  // das opções do seletor em nossa página. Assim, podemos
  // selecionar a chave de acordo com o selecionado no HTML
  textoDeSaida.innerHTML = `A validação retornou ${campos[seletor.value]}`;
});
