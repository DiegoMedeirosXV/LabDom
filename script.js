// ===============================================
// LabDOM - Parte 2
// Exercícios 1 a 25 + desafio extra
// ===============================================

// Exercício 1: Alterando Texto e Cor
function alterarTextoCor() {
    let texto = document.getElementById("texto");
    texto.innerText = "O texto foi alterado com JavaScript!";
    texto.style.color = "blue";
}

// Exercício 2: Criando e Removendo Elementos
function adicionarElemento() {
    let container = document.getElementById("container");
    let paragrafo = document.createElement("p");
    paragrafo.innerText = "Este parágrafo foi criado pelo JavaScript.";
    container.appendChild(paragrafo);
}

function removerElemento() {
    let container = document.getElementById("container");

    if (container.lastElementChild) {
        container.lastElementChild.remove();
    } else {
        alert("Não existe parágrafo para remover.");
    }
}

// Exercício 3: Lista Interativa
function adicionarItem() {
    let campo = document.getElementById("itemInput");
    let nome = campo.value.trim();

    if (nome === "") {
        alert("Digite um item.");
        return;
    }

    let item = document.createElement("li");
    item.innerText = nome;
    document.getElementById("lista").appendChild(item);
    campo.value = "";
}

// Exercício 4: Bhaskara
function calcularBhaskara() {
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    let c = Number(document.getElementById("c").value);
    let resultado = document.getElementById("resultadoBhaskara");

    if (document.getElementById("a").value === "" ||
        document.getElementById("b").value === "" ||
        document.getElementById("c").value === "") {
        resultado.innerText = "Preencha os valores de a, b e c.";
        resultado.style.color = "red";
        return;
    }

    if (a === 0) {
        resultado.innerText = "O valor de a não pode ser zero.";
        resultado.style.color = "red";
        return;
    }

    let delta = (b * b) - (4 * a * c);

    if (delta < 0) {
        resultado.innerText = "Não existem raízes reais.";
        resultado.style.color = "red";
    } else if (delta === 0) {
        let x = -b / (2 * a);
        resultado.innerText = "Uma raiz real: x = " + x;
        resultado.style.color = "blue";
    } else {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        resultado.innerText = "Duas raízes reais: x1 = " + x1 + " e x2 = " + x2;
        resultado.style.color = "darkgreen";
    }
}

// Exercício 5: Consumo de Combustível
function calcularConsumo() {
    let distancia = Number(document.getElementById("distancia").value);
    let consumo = Number(document.getElementById("consumo").value);
    let capacidade = Number(document.getElementById("capacidade").value);
    let preco = Number(document.getElementById("precoGasolina").value);
    let resultado = document.getElementById("resultadoConsumo");

    if (document.getElementById("distancia").value === "" ||
        document.getElementById("consumo").value === "" ||
        document.getElementById("capacidade").value === "" ||
        document.getElementById("precoGasolina").value === "") {
        resultado.innerText = "Preencha todos os campos.";
        return;
    }

    if (distancia < 0 || consumo <= 0 || capacidade <= 0 || preco < 0) {
        resultado.innerText = "Informe valores válidos.";
        return;
    }

    let litros = distancia / consumo;
    let custo = litros * preco;
    let tanques = litros / capacidade;

    resultado.innerHTML =
        "Litros necessários: " + litros.toFixed(2) + " L<br>" +
        "Custo estimado: R$ " + custo.toFixed(2) + "<br>" +
        "Quantidade de tanques: " + tanques.toFixed(2) +
        " (capacidade total equivalente).";
}

// Exercício 6: Par ou Ímpar
function verificarParImpar() {
    let campo = document.getElementById("numeroParImpar");

    if (campo.value === "") {
        alert("Digite um número.");
        return;
    }

    let numero = Number(campo.value);

    if (numero % 2 === 0) {
        alert("O número " + numero + " é par.");
    } else {
        alert("O número " + numero + " é ímpar.");
    }
}

// Exercício 7: Maior de Três Números
function verificarMaior() {
    let campo1 = document.getElementById("num1").value;
    let campo2 = document.getElementById("num2").value;
    let campo3 = document.getElementById("num3").value;
    let resultado = document.getElementById("resultadoMaior");

    if (campo1 === "" || campo2 === "" || campo3 === "") {
        resultado.innerText = "Preencha os três números.";
        return;
    }

    let maior = Math.max(Number(campo1), Number(campo2), Number(campo3));
    resultado.innerText = "O maior número é: " + maior;
}

// Exercício 8: Média de Notas
function calcularMedia() {
    let campo1 = document.getElementById("nota1").value;
    let campo2 = document.getElementById("nota2").value;
    let campo3 = document.getElementById("nota3").value;
    let resultado = document.getElementById("resultadoMedia");

    if (campo1 === "" || campo2 === "" || campo3 === "") {
        resultado.innerText = "Preencha as três notas.";
        return;
    }

    let nota1 = Number(campo1);
    let nota2 = Number(campo2);
    let nota3 = Number(campo3);

    if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 ||
        nota3 < 0 || nota3 > 10) {
        resultado.innerText = "As notas devem estar entre 0 e 10.";
        return;
    }

    let media = (nota1 + nota2 + nota3) / 3;

    if (media >= 7) {
        resultado.innerText = "Média: " + media.toFixed(2) + " - Aprovado";
    } else if (media >= 5) {
        resultado.innerText = "Média: " + media.toFixed(2) + " - Recuperação";
    } else {
        resultado.innerText = "Média: " + media.toFixed(2) + " - Reprovado";
    }
}

// Exercício 9: Tabuada
function gerarTabuada() {
    let campo = document.getElementById("numeroTabuada");
    let lista = document.getElementById("resultadoTabuada");

    if (campo.value === "") {
        alert("Digite um número.");
        return;
    }

    let numero = Number(campo.value);
    lista.innerHTML = "";

    for (let i = 1; i <= 10; i++) {
        let item = document.createElement("li");
        item.innerText = numero + " x " + i + " = " + (numero * i);
        lista.appendChild(item);
    }
}

// Exercício 10: Contador
function contarNumeros() {
    let campoInicio = document.getElementById("inicio").value;
    let campoFim = document.getElementById("fim").value;
    let resultado = document.getElementById("resultadoContador");

    if (campoInicio === "" || campoFim === "") {
        resultado.innerText = "Preencha o início e o fim.";
        return;
    }

    let inicio = Number(campoInicio);
    let fim = Number(campoFim);
    let menor = Math.min(inicio, fim);
    let maior = Math.max(inicio, fim);
    let numeros = [];

    for (let i = menor; i <= maior; i++) {
        numeros.push(i);
    }

    resultado.innerText = numeros.join(", ");
}

// Exercício 11: Verificar Palíndromo
function verificarPalindromo() {
    let texto = document.getElementById("textoPalindromo").value;
    let normalizado = texto.toLowerCase().normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]/g, "");

    if (normalizado === "") {
        alert("Digite uma palavra ou frase.");
        return;
    }

    let invertido = normalizado.split("").reverse().join("");

    if (normalizado === invertido) {
        alert("É um palíndromo!");
    } else {
        alert("Não é um palíndromo.");
    }
}

// Exercício 12: IMC
function calcularIMC() {
    let pesoCampo = document.getElementById("peso").value;
    let alturaCampo = document.getElementById("altura").value;
    let resultado = document.getElementById("resultadoIMC");

    if (pesoCampo === "" || alturaCampo === "") {
        resultado.innerText = "Preencha o peso e a altura.";
        return;
    }

    let peso = Number(pesoCampo);
    let altura = Number(alturaCampo);

    if (peso <= 0 || altura <= 0) {
        resultado.innerText = "Informe peso e altura válidos.";
        return;
    }

    let imc = peso / (altura * altura);
    let classificacao;

    if (imc < 18.5) {
        classificacao = "Baixo peso";
    } else if (imc < 25) {
        classificacao = "Normal";
    } else if (imc < 30) {
        classificacao = "Sobrepeso";
    } else {
        classificacao = "Obesidade";
    }

    resultado.innerHTML = '<span class="imc-resultado">IMC: ' +
        imc.toFixed(2) + " – " + classificacao + "</span>";
}

// Exercício 13: Criação Dinâmica de Botão
function criarBotao() {
    let area = document.getElementById("areaBotoes");
    let botao = document.createElement("button");

    botao.innerText = "Novo botão";
    botao.addEventListener("click", function() {
        alert("Novo botão clicado!");
    });

    area.appendChild(botao);
}

// Exercício 14: Contador de Cliques
let quantidadeCliques = 0;

function contarCliques() {
    quantidadeCliques++;
    document.getElementById("contadorCliques").innerText = quantidadeCliques;
}

// Exercício 15: Relógio Digital
function mostrarHora() {
    let agora = new Date();
    document.getElementById("horaAtual").innerText =
        agora.toLocaleTimeString("pt-BR", { hour12: false });
}

// Exercício 16: Mostrar e esconder conteúdo
function alternarTexto() {
    let texto = document.getElementById("texto16");

    if (texto.style.display === "none") {
        texto.style.display = "block";
    } else {
        texto.style.display = "none";
    }
}

// Exercício 17: Alterar tema da página
function alterarTema() {
    document.body.classList.toggle("tema-escuro");
}

// Exercício 18: Contador com + e -
let valorContador = 0;

function alterarContador(valor) {
    if (valorContador + valor >= 0) {
        valorContador += valor;
    }

    document.getElementById("contador18").innerText = valorContador;
}

// Exercícios 19 e 20: Lista de alunos com remoção individual
function adicionarAluno() {
    let campo = document.getElementById("nomeAluno");
    let nome = campo.value.trim();

    if (nome === "") {
        alert("Digite o nome do aluno.");
        return;
    }

    let item = document.createElement("li");
    let texto = document.createElement("span");
    let botao = document.createElement("button");

    texto.innerText = nome;
    botao.innerText = "Remover";

    botao.addEventListener("click", function() {
        item.remove();
    });

    item.appendChild(texto);
    item.appendChild(botao);
    document.getElementById("listaAlunos").appendChild(item);
    campo.value = "";
}

// Exercício 21: Destacar todos os parágrafos
function destacarParagrafos() {
    let paragrafos = document.querySelectorAll(".texto21");

    paragrafos.forEach(function(paragrafo) {
        paragrafo.classList.toggle("destaque");
    });
}

// Exercício 22: Calculadora simples
function calcular(operacao) {
    let campo1 = document.getElementById("numero1").value;
    let campo2 = document.getElementById("numero2").value;
    let resultado = document.getElementById("resultado22");

    if (campo1 === "" || campo2 === "") {
        resultado.innerText = "Digite os dois números.";
        return;
    }

    let numero1 = Number(campo1);
    let numero2 = Number(campo2);
    let valor;

    if (operacao === "+") {
        valor = numero1 + numero2;
    } else if (operacao === "-") {
        valor = numero1 - numero2;
    } else if (operacao === "*") {
        valor = numero1 * numero2;
    } else if (operacao === "/") {
        if (numero2 === 0) {
            resultado.innerText = "Não é possível dividir por zero.";
            return;
        }
        valor = numero1 / numero2;
    }

    resultado.innerText = "Resultado: " + valor;
}

// Exercício 23: Filtro de nomes
let alunos = ["Ana", "Bruno", "Carlos", "Daniel", "Fernanda", "João", "Lucas", "Maria"];

function mostrarAlunos(nomes) {
    let lista = document.getElementById("listaFiltro");
    lista.innerHTML = "";

    nomes.forEach(function(nome) {
        let item = document.createElement("li");
        item.innerText = nome;
        lista.appendChild(item);
    });
}

mostrarAlunos(alunos);

document.getElementById("buscaAluno").addEventListener("input", function() {
    let busca = this.value.toLowerCase();
    let encontrados = alunos.filter(function(nome) {
        return nome.toLowerCase().includes(busca);
    });

    mostrarAlunos(encontrados);
});

// Exercício 24: Cadastro de produtos
let produtos = [];

function adicionarProduto() {
    let campoNome = document.getElementById("nomeProduto");
    let campoPreco = document.getElementById("precoProduto");
    let nome = campoNome.value.trim();
    let precoDigitado = campoPreco.value;

    if (nome === "" || precoDigitado === "") {
        alert("Preencha o nome e o preço do produto.");
        return;
    }

    let preco = Number(precoDigitado);

    if (preco < 0 || !Number.isFinite(preco)) {
        alert("Digite um preço válido.");
        return;
    }

    produtos.push({ nome: nome, preco: preco });
    campoNome.value = "";
    campoPreco.value = "";
    mostrarProdutos();
}

function mostrarProdutos() {
    let lista = document.getElementById("listaProdutos");
    let total = 0;
    lista.innerHTML = "";

    produtos.forEach(function(produto) {
        let item = document.createElement("li");
        item.innerText = produto.nome + " - R$ " + produto.preco.toFixed(2);
        lista.appendChild(item);
        total += produto.preco;
    });

    document.getElementById("totalProdutos").innerText =
        "Total: R$ " + total.toFixed(2).replace(".", ",");
}

// Exercício 25: Mini lista de tarefas + desafio extra
function adicionarTarefa() {
    let campo = document.getElementById("novaTarefa");
    let nome = campo.value.trim();

    if (nome === "") {
        alert("Digite uma tarefa.");
        return;
    }

    let linha = document.createElement("div");
    linha.classList.add("linha-tarefa");

    let texto = document.createElement("span");
    texto.innerText = nome;

    let botaoConcluir = document.createElement("button");
    botaoConcluir.innerText = "Concluir";
    botaoConcluir.addEventListener("click", function() {
        texto.classList.toggle("concluida");
        atualizarResumo();
    });

    let botaoExcluir = document.createElement("button");
    botaoExcluir.innerText = "Excluir";
    botaoExcluir.classList.add("botao-remover");
    botaoExcluir.addEventListener("click", function() {
        linha.remove();
        atualizarResumo();
    });

    linha.appendChild(texto);
    linha.appendChild(botaoConcluir);
    linha.appendChild(botaoExcluir);
    document.getElementById("listaTarefas").appendChild(linha);

    campo.value = "";
    atualizarResumo();
}

// Desafio extra: atualizar total, concluídas e pendentes
function atualizarResumo() {
    let tarefas = document.querySelectorAll("#listaTarefas .linha-tarefa");
    let concluidas = document.querySelectorAll("#listaTarefas .concluida");
    let total = tarefas.length;
    let quantidadeConcluidas = concluidas.length;
    let pendentes = total - quantidadeConcluidas;

    document.getElementById("totalTarefas").innerText =
        "Total de tarefas: " + total;
    document.getElementById("concluidas").innerText =
        "Tarefas concluídas: " + quantidadeConcluidas;
    document.getElementById("pendentes").innerText =
        "Tarefas pendentes: " + pendentes;
}
