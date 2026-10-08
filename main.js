let inp1 = document.getElementById("inp1");
let inp2 = document.getElementById("inp2");

let somabt = document.getElementById("somabt");
let subtractbt = document.getElementById("subtractbt");
let multiplybt = document.getElementById("multiplybt");
let dividebt = document.getElementById("dividebt");
let allbt = document.getElementById("allbt");

let result = document.getElementById("result");
let verResult = document.getElementById("verResult");

verResult.addEventListener("click", function () {
    // 1. Verifica se algum campo está vazio
    if (inp1.value === "" || inp2.value === "") {
        result.innerHTML = "Please enter both numbers.";
    } 
    // 2. CORRIGIDO: Em JavaScript usa-se "else if" separado
    else {
        // Busca o rádio que está marcado (checked) com o name "operacao"
        let selectedOperation = document.querySelector('input[name="operacao"]:checked');
        
        // Se nenhum rádio for encontrado, avisa o usuário e para a execução
        if (!selectedOperation) {
            result.innerHTML = "Please select an operation.";
            return;
        }

        // Executa o cálculo baseado no "value" do rádio selecionado
        switch (selectedOperation.value) {
            case "somar":
                result.innerHTML = parseFloat(inp1.value) + parseFloat(inp2.value);
                break;
            case "subtrair":
                result.innerHTML = parseFloat(inp1.value) - parseFloat(inp2.value);
                break;
            case "multiplicar":
                result.innerHTML = parseFloat(inp1.value) * parseFloat(inp2.value);
                break;
            case "dividir":
                // Dica extra: você pode tratar a divisão por zero aqui se quiser!
                result.innerHTML = parseFloat(inp1.value) / parseFloat(inp2.value);
                break;
            case "todos":
                result.innerHTML = "Soma: " + (parseFloat(inp1.value) + parseFloat(inp2.value)) + "<br>" +
                    "Subtração: " + (parseFloat(inp1.value) - parseFloat(inp2.value)) + "<br>" +
                    "Produto: " + (parseFloat(inp1.value) * parseFloat(inp2.value)) + "<br>" +
                    "Quociente: " + (parseFloat(inp1.value) / parseFloat(inp2.value));
                break;
        }
    }
});

