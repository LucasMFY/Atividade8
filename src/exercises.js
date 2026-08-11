function b01Soma(a, b) {
  return a + b;
}

function b02ParOuImpar(a) {
  return a%2==0?"par":"impar";
}

function b03MaiorDeDois(a, b) {
  return a>=b?a:b;
}

function b04ContarAteN(a) {
  let array = [];
  for (let index = 1; index <= a; index++) {
    array[index-1] = index;    
  }
  return array;
}

function b05SomaDe1AteN(a) {
  let soma = 0;
  for (let index = 1; index <= a; index++){
    soma+=index;
  }
  return soma;
}

function b06Tabuada(a) {
  let array = [];
  for(let i=1; i<11; i++){
    array[i-1] = a*i;
  }
  return array;
}

function b07ParesAteN(a) {
  let array = [];
  let index = 0;
  for(let i=2; i<=a; i=i+2){
    array[index] = i;
    index++;
  }
  return array;
}

function b08ContarVogais(frase) {
  //let array = [...frase]; //frase.split('');
  let vogais = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];
  let contagem = 0;
  for(let i=0; i<frase.length; i++){
    if(vogais.includes(frase.charAt(i))){contagem++;}
  }
  return contagem;
}

function b09InverterTexto(texto) {
  return texto.split('').reverse().join('');  
}

function b10MaiorNumero(array) {
  return array.reduce( (maior, atual) => atual>maior?atual:maior);
}

function b11MenorNumero(array) {
  return array.reduce( (menor, atual) => atual<menor?atual:menor);
}

function b12DobrarNumeros(array) {
  return array.map(item => item*2);
}

function b13FiltrarPares(array) {
  return array.filter(item => item%2==0);
}

function b14SomarArray(array) {
  return array.reduce( (soma, atual) => soma+atual, 0 );
}

function b15EncontrarNome(array, busca) {
  return array.find( item => item == busca);
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
