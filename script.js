//mensagem inicial obrigatória
console.log("Atividade grandona!");

var historico = "da época do natã";
console.log(historico);

//tipos de dados
const nomeProduto = "Moletom Preto";
let precoProduto = 189.99;
let quantidadeProduto = 2;
let freteGratis = true;
let cupomDesconto = null;

quantidadeProduto = 3;
console.log(quantidadeProduto);

let totalProdutos = precoProduto * quantidadeProduto
console.log(totalProdutos);

if(totalProdutos >= 250){
    const desconto = 0.1;
    totalProdutos = totalProdutos - totalProdutos *desconto;
    console.log(totalProdutos);
}

const taxaEmbalagem = 5.00;
let totalCompra = totalProdutos + taxaEmbalagem;
console.log(totalCompra);

const maximoParcelas = 3;
let parcela = totalCompra / maximoParcelas;
console.log(parcela);

if (totalCompra >= 300){
    console.log("Frete grátis disponível!");
}
else{
    console.log("Frete grátis não disponível.");
}

const final = `O valor total da compra é de R$ ${totalCompra}, dividido em ${maximoParcelas}x de R$ ${parcela}.`;
console.log(final);