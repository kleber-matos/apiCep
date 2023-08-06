// https://viacep.com.br/ws/01001000/json/
//01001000

async function buscaCep(cep) {
  try {
    const consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const converte = await consultaCEP.json();
    console.log(converte);

    if (converte.erro) {
      throw Error("Cep não existe!!!");
    }

    const cidade = document.getElementById("cidade");
    const logradouro = document.getElementById("logradouro");
    const bairro = document.getElementById("bairro");

    cidade.value = converte.localidade;
    logradouro.value = converte.logradouro;
    bairro.value = converte.bairro;
  } catch (erro) {
    console.log(erro);
  }
}

const cep = document.getElementById("cep");
cep.addEventListener("focusout", () => buscaCep(cep.value));
