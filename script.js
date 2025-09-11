const form = document.getElementById("formulario");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const cpf = document.getElementById("cpf");
const datadenascimento = document.getElementById("datadenascimento");

const isMaiorDeIdade = (dataNascimentoString) => {
    const hoje = new Date();
    const dataDezoitoAnosAtras = new Date(hoje.getFullYear() - 18, hoje.getMonth(), hoje.getDate());
    const [ano, mes, dia] = dataNascimentoString.split('-');
    const dataNascimento = new Date(ano, mes - 1, dia);
    return dataNascimento <= dataDezoitoAnosAtras;
};