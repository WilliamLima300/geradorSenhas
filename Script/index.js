// Selecionar os elementos pela ID do form
const PwEl = document.getElementById("ps");
const copyEl = document.getElementById("copy");
const lenEl = document.getElementById("len");
const upperEl = document.getElementById("upper");
const lowerEl = document.getElementById("lower");
const symbolEl = document.getElementById("symbol");
const generateEl = document.getElementById("generate");
const numberEl = document.getElementById("number");

//Atribuir as letras Maisculas,minusculas,numeros e caracteres a serem usados
const upperLetters = "ABCDEFGHIJKLMNOPQSRTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbol = "~!@#$%^&*()_+=|";

//Função para pegar letras minusculas aleatorias
function getLowercase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

//Função para pegar letras maiusculas aleatorias
function getUppercase() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

//Função para pegar numeros aleatorias
function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

//Função para pegar caracteres aleatorias
function getSymbol() {
    return symbol[Math.floor(Math.random() * symbol.length)];
}

//Função para gerar a senha

function generatePassword() {
    const len = lenEl.value;

    
    let password = "";

    for (let i = 0; i < len; i++) {
    const x = generateX();
    
    password += x;
    
    }

    PwEl.innerText = password;
    
}

// verificar e adicionar ao array todas marcações ex: maisculas,minusculas...

function generateX() {

    const xs = [];

    if (upperEl.checked) {
    xs.push(getUppercase());
    
    }

    if (lowerEl.checked) {
    xs.push(getLowercase());
    }

    if (numberEl.checked) {
    xs.push(getNumber());
    }

    if (symbolEl.checked) {
    xs.push(getSymbol());
    }

    if (xs.length === 0) return "";

    return xs[Math.floor(Math.random() * xs.length)];
    
}

    
    //mostrar a senha gerada

    generateEl.addEventListener("click", generatePassword);
    
   
    copyEl.addEventListener("click", () => {

    const textarea = document.createElement("textarea");
    const password = PwEl.innerText;
    
    
    if (!password) {
    return;
    }
    
    
    textarea.value = password;
    
    // configurações do botao de copia da senha gerada
    
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();

    alert("A senha foi copiada!");
});
