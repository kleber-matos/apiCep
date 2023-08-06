// https://viacep.com.br/ws/01001000/json/
//01001000
// CEP não encontrado. tente novamente!

async function buscaCep(cep) {
  const mensagem = document.getElementById("erro");
  mensagem.innerHTML = "";

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
    // alert("CEP NÃO ENCONTRADO");

    cidade.value = "";
    logradouro.value = "";
    bairro.value = "";

    mensagem.innerHTML = `
    <span>
        CEP não encontrado. tente novamente!
    </span>
    `;
  }
}

const cep = document.getElementById("cep");
cep.addEventListener("focusout", () => buscaCep(cep.value));
