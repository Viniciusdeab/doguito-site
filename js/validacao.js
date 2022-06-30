export function valida(input) {
    const tipoDeInput = input.dataset.tipo;

    if (validadores[tipoDeInput]) {
        validadores[tipoDeInput](input)
    }

    if (input.validity.valid){
        input.parentElement.classList.remove('input-container--invalido');
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = ''
    } else {
        input.parentElement.classList.add('input-container--invalido');
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = mostraMensagemDeErro(tipoDeInput, input);

    }
}

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'customError'
];

const mensagensDeErro = {
    nome: {
        valueMissing: 'O campo nome não pode estar vazio.'
    },
    email: {
        valueMissing: 'O campo de email não pode estar vazio.',
        typeMismatch: 'O email digitado não é valido.'
    },
    senha: {
        valueMissing: 'O campo de senha não pode esta vazio',
        patternMismatch: 'A senha deve conter entre 6 a 12 caracteres, deve conter pelo menos uma letra maiúscula, um número e não símbolos.'
    },
    dataNascimento: {
        valueMissing: 'O campo de data não pode esta vazio',
        customError: 'Você deve ser maior de 18 anos para se cadastrar.'
    }
}

const validadores = {
    dataNascimento: input => validaDataNascimanto(input)
}

function mostraMensagemDeErro (tipoDeInput, input){
    let mensagem = '';

    tiposDeErro.forEach(erro => {
        if(input.validity[erro]){
            mensagem = mensagensDeErro[tipoDeInput][erro]
        }
    });

    return mensagem;
}

function validaDataNascimanto(input) {
    const dataRecebida = new Date(input.value);
    let mensagem = '';

    if (!maiorQue18(dataRecebida)) {
        mensagem = 'Você deve ser maior de 18 anos para se cadastrar';
    }

    input.setCustomValidity(mensagem);

}

function maiorQue18(data) {
    const dataAtual = new Date;
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCFullMonth(), data.getUTCFullDate());

    return dataMais18 <= dataAtual;
}

function validaCPF(input){
    const cpfFormatado = input.value.replace(/\d/g, '');
    let mensagem = '';

    input.setCustomValidity(mensagem);

}

function checaCPFRepetidos(cpf) {
    const valoresREpetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ]
}