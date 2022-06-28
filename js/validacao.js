export function valida(input){
    const tipoDeInput = input.dataset.tipo;    

    if(validadores[tipoDeInput]){
        validadores[tipoDeInput](input);
    }
}

const validadores = {
    dataNascimento:input => validaDataNascimanto(input)
}


function validaDataNascimanto (input){
    const dataRecebida = new Date(input.value);
    let mensagem = '';

    if(!maiorQue18(dataRecebida)){
        mensagem = 'Você deve ser maior de 18 anos para se cadastrar';
    }

    input.setCustomValidity(mensagem);

}

function maiorQue18(data){
    const dataAtual = new Date;
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCFullMonth(), data.getUTCFullDate());

    return dataMais18 <= dataAtual;
}