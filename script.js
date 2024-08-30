const professorQuotes = [
    { quote: "A motivação te leva a começar. A determinação te faz continuar", author: "Profª Gabriela - Português", imageUrl: "https://github.com/user-attachments/assets/7beadd45-a8c0-4a32-b08a-b5fb68e8a9d5"},
    { quote: "Vencer é uma mistura de luta, esforço, otimismo e não desistir nunca", author: "Prof° Élio - Biologia", imageUrl: "https://github.com/user-attachments/assets/4e06e268-e806-446c-a7c7-20b6d77debc9"},
    { quote: "Estude, pois a caneta é mais leve do que a pá", author: "Profª Karol - Física", imageUrl:"https://github.com/user-attachments/assets/6e02acc5-539b-40cc-acca-9cbf3ab51c0e"},
    { quote: "O que você está fazendo por você?", author: "Prof° Sidnei - Filosofia", imageUrl:"https://github.com/user-attachments/assets/bd123016-890b-4fc6-8aac-6bee695fe979"},
    { quote: "Superação é quando te amassa a alma, e você ainda briga.", author: "Profª Danielli - Ed. Física", imageUrl: "https://github.com/user-attachments/assets/f0ab9563-62d6-4e06-adf8-3fde80361d7b"},
    { quote: "Precisamos de vocês alunos, para o nosso futuro", author: "Profª Maria Marli - Inglês", imageUrl: "https://github.com/user-attachments/assets/af2ef0e4-e59a-4454-84d7-e45c7892661c"},
    { quote: "União, dedicação, são fundamentais para seu futuro.", author: "Profº Luiz Paulo - Geografia", imageUrl: "https://github.com/user-attachments/assets/180fd87c-3a2d-47cf-8a54-3b418d51e358"},
    { quote: "A educação pode ser a única ponte entre você e o sucesso", author: "Profª Érica - Química", imageUrl: "https://github.com/user-attachments/assets/d1411788-65c6-441d-ba79-e6ba5c9f6759"},
    { quote: "Apenas a educação tem o poder de livrar!", author: "Prof° Victor - Matemática", imageUrl: "https://github.com/user-attachments/assets/acf3075d-b8da-46d1-9493-9a61a567af25"},
    { quote: "Cada um tem a visão da montanha que subiu", author: "Profª Karine - História", imageUrl: "https://github.com/user-attachments/assets/b52ed346-3b8a-439e-8408-9fdf48bab63c"}
];

const studentQuotes = [
    { quote: "Seu futuro começa com um simples passo em direção ao conhecimento.", author: "Estudantes - 2°C", imageUrl: "https://github.com/user-attachments/assets/f4eb6355-86cd-4569-8e38-c3d60f2861c1" },
    { quote: "Seja curioso, seja criativo, seja bem-sucedido. Tudo isso começa com o ato de estudar", author:"Estudantes - 2°C", imageUrl: "https://github.com/user-attachments/assets/e4e76ff1-d3ca-4167-83c4-1b2c31708fb4" },
];

const externalAuthorQuotes = [
    { quote: "Não deixe que o medo de errar o impeça de tentar.", author: "- Brian Tracy", imageUrl: "" },
    { quote: "A chave do sucesso é a persistência.", author: "- Napoleon Hill", imageUrl: "" },
    { quote: "Você é capaz de muito mais do que imagina.", author: "- Zig Ziglar", imageUrl: "" },
    { quote: "Sempre há um caminho quando há vontade.", author: "- Pablo Neruda", imageUrl: "" },
    { quote: "A única limitação que você tem é a que você impõe a si mesmo.", author: "- Les Brown", imageUrl: "" },
    { quote: "Não deixe que o passado determine o seu futuro.", author: "- Eckhart Tolle", imageUrl: "" },
    { quote: "O sucesso é a soma de pequenos esforços repetidos dia após dia.", author: "- Robert Collier", imageUrl: "" },
];

// Função para exibir uma nova frase
function displayNewQuote() {
    const selectedGroup = document.getElementById('quote-group').value;
    let quotesArray = [];

    if (selectedGroup === 'professors') {
        quotesArray = professorQuotes;
    } else if (selectedGroup === 'students') {
        quotesArray = studentQuotes;
    } else if (selectedGroup === 'external') {
        quotesArray = externalAuthorQuotes;
    } else {
        quotesArray = [...professorQuotes, ...studentQuotes, ...externalAuthorQuotes];
    }

    const randomIndex = Math.floor(Math.random() * quotesArray.length);
    const selectedQuote = quotesArray[randomIndex];

    const quoteElement = document.querySelector('.quote');
    const authorElement = document.querySelector('.author');
    const imageElement = document.querySelector('.quote-image');

    quoteElement.textContent = selectedQuote.quote;
    authorElement.textContent = selectedQuote.author;
    imageElement.src = selectedQuote.imageUrl;
    imageElement.style.display = 'block';
}

// Adicionar evento de clique ao botão "Nova Frase"
document.getElementById('new-quote').addEventListener('click', displayNewQuote);

// Exibir a primeira frase
displayNewQuote();

// Adicionar evento de mudança ao seletor de grupo de frases
document.getElementById('quote-group').addEventListener('change', displayNewQuote);

// Mostrar o modal
function showModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "block";
}

// Ocultar o modal
function hideModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}
