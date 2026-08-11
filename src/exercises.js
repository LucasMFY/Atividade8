function b01Soma(a, b) {
}

function b02ParOuImpar(a) {
}

function b03MaiorDeDois(a, b) {
}

function b04ContarAteN(a) {
}

function b05SomaDe1AteN(a) {
}

function b06Tabuada(a) {
}

function b07ParesAteN(a) {
}

function b08ContarVogais(frase) {
}

function b09InverterTexto(texto) {
}

function b10MaiorNumero(array) {
}

function b11MenorNumero(array) {
}

function b12DobrarNumeros(array) {
}

function b13FiltrarPares(array) {
}

function b14SomarArray(array) {
}

function b15EncontrarNome(array, busca) {
}

function b16TemNegativo(array) {
  return array.some( item => item<0 );
}

function b17TodosPositivos(array) {
  return array.every( item => item>0 );
}

function b18PrimeiroMaiorQue(array, limite) {
  return array.find( item => item>limite );
}

function b19ContarPalavras(frase) {
  return frase.trim().split(/\s+/).length;
}

function b20Capitalizar(frase) {
  //return frase.split('')[0].toUpperCase() + frase.slice(1);
  //return frase.slice(0)[0].toUpperCase() + frase.slice(1);
  return frase.charAt(0).toUpperCase() + frase.slice(1);
}

function b21RemoverDuplicados(array){
  return [...new Set(array)];
}

function b22CriarMapaDePrecos(produtos) {
  const mapa = new Map();

  for (const produto of produtos) {
    mapa.set(produto.nome, produto.preco);
  }

  return mapa;
}

function b23PegarValorObjeto(objeto, chave) {
  return objeto[chave];
}

function b24SomarValoresObjeto(objeto) {
  let soma = 0;
  for (const chave in objeto) {    
    if (typeof objeto[chave] === "number"){
      soma+=objeto[chave];
    }
  }
  return soma;
}

function b25MesDaData(data) {
  return data.getMonth()+1;
}

function b26FormatarDataBR(data) {
  const dia = String(data.getDate() + 1).padStart(2, '0');
  const mes = String(data.getMonth() + 1).padStart(2, '0');
  const ano = data.getFullYear();

  return `${dia}/${mes}/${ano}`;
}

function b27EhBissexto(ano) {
  return ano % 400 === 0 || (ano % 4 === 0 && ano % 100 !== 0);
}

function b28UltimoItem(lista) {
  return lista[lista.length-1];
}

function b29GerarRange(inicio, fim) {
  let lista = [];
  for(let i=inicio; i<=fim; i++){
    lista[i-inicio] = i;
  }
  return lista;
}

function b30Media(lista) {
  return lista.reduce( (soma, item) => soma+item )/lista.length;
}

function b31ClassificarNota(nota) {
  let status;
  if(nota>=7){status="aprovado";}
  else if(nota>=5){status="recuperacao";}
  else{status="reprovado";}
  return status;
}

function b32JuntarNomes(lista) {
  return lista.join(', ');
}

function b33ContemPropriedade(objeto, propriedade) {
  return !(objeto[propriedade] === undefined);
}

module.exports = {
  b01Soma,
  b02ParOuImpar,
  b03MaiorDeDois,
  b04ContarAteN,
  b05SomaDe1AteN,
  b06Tabuada,
  b07ParesAteN,
  b08ContarVogais,
  b09InverterTexto,
  b10MaiorNumero,
  b11MenorNumero,
  b12DobrarNumeros,
  b13FiltrarPares,
  b14SomarArray,
  b15EncontrarNome,
  b16TemNegativo,
  b17TodosPositivos,
  b18PrimeiroMaiorQue,
  b19ContarPalavras,
  b20Capitalizar,
  b21RemoverDuplicados,
  b22CriarMapaDePrecos,
  b23PegarValorObjeto,
  b24SomarValoresObjeto,
  b25MesDaData,
  b26FormatarDataBR,
  b27EhBissexto,
  b28UltimoItem,
  b29GerarRange,
  b30Media,
  b31ClassificarNota,
  b32JuntarNomes,
  b33ContemPropriedade,
};
