# Projeto: Storage 
**Nome:** Giovanna Farias
**RGM:** 114.113
**Tema:** Carrinho de compras.

## Explicação da interface criada
A interface simula a página final de um carrinho de compras. Apresenta o item solicitado - e sua quantidade - e o resumo financeiro com desconto e taxa extra, finalizando com a opção de pagamento.

## Componentes Bootstrap utilizados
Foram utilizadas as classes padrão: `navbar`, `container`, `row`, `col`, `card`, `alert`, `badge`, `button` e `footer`.

## Diferença entre let, const e var
*   **var:** Forma antiga, apresentada apenas para contexto histórico.
*   **let:** Cria variáveis que podem ter valor atribuído alterado no decorrer do código.
*   **const:** Usada para criar valores constantes que não podem ser alterados depois de definidos.

## Tipos de dados utilizados
*   **String:** Textos (ex: nome do produto).
*   **Number:** Números (ex: preço do produto).
*   **Boolean:** Verdadeiro/Falso (ex: frete).
*   **Null:** Valor nulo ou vazio (ex: cupom).

## Explicação da condição com if/else
Na primeira condição, o código confere se o valor total dos produtos selecionados é maior ou igual a 250. Se a condição for verdadeira (`if`), se aplica um desconto de 10% sobre o valor. Na segunda condição, o código confere se o valor total da compra é maior ou igual a 300. Se for verdadeiro, é apresentada a mensagem informando o frete grátis. Se for falsa, o bloco `else` é acionado, indicando que a oferta não está disponível.

## Maior dificuldade encontrada
"Traduzir" as classes bootstrap e entender como funciona a organização delas dentro do código

## Como a dificuldade foi resolvida
Lendo a documentação das classes em questão (quem diria né) e usando o auxílio da IA pra compreender o uso de algumas