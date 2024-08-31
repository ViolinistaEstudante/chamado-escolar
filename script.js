// Adicionando uma propriedade de curtidas a cada citação
const professorQuotes = [
    { quote: "A motivação te leva a começar. A determinação te faz continuar", author: "Profª Gabriela - Português", imageUrl: "https://github.com/user-attachments/assets/7beadd45-a8c0-4a32-b08a-b5fb68e8a9d5", likes: 0 },
    { quote: "Vencer é uma mistura de luta, esforço, otimismo e não desistir nunca", author: "Prof° Élio - Biologia", imageUrl: "https://github.com/user-attachments/assets/4e06e268-e806-446c-a7c7-20b6d77debc9", likes: 0 },
    { quote: "Estude, pois a caneta é mais leve do que a pá", author: "Profª Karol - Física", imageUrl:"https://github.com/user-attachments/assets/6e02acc5-539b-40cc-acca-9cbf3ab51c0e", likes: 0 },
    { quote: "O que você está fazendo por você?", author: "Prof° Sidnei - Filosofia", imageUrl:"https://github.com/user-attachments/assets/bd123016-890b-4fc6-8aac-6bee695fe979", likes: 0 },
    { quote: "Superação é quando te amassa a alma, e você ainda briga.", author: "Profª Danielli - Ed. Física", imageUrl: "https://github.com/user-attachments/assets/f0ab9563-62d6-4e06-adf8-3fde80361d7b", likes: 0 },
    { quote: "Precisamos de vocês alunos, para o nosso futuro", author: "Profª Maria Marli - Inglês", imageUrl: "https://github.com/user-attachments/assets/af2ef0e4-e59a-4454-84d7-e45c7892661c", likes: 0 },
    { quote: "União, dedicação, são fundamentais para seu futuro.", author: "Profº Luiz Paulo - Geografia", imageUrl: "https://github.com/user-attachments/assets/180fd87c-3a2d-47cf-8a54-3b418d51e358", likes: 0 },
    { quote: "A educação pode ser a única ponte entre você e o sucesso", author: "Profª Érica - Química", imageUrl: "https://github.com/user-attachments/assets/d1411788-65c6-441d-ba79-e6ba5c9f6759", likes: 0 },
    { quote: "Apenas a educação tem o poder de livrar!", author: "Prof° Victor - Matemática", imageUrl: "https://github.com/user-attachments/assets/acf3075d-b8da-46d1-9493-9a61a567af25", likes: 0 },
    { quote: "Cada um tem a visão da montanha que subiu", author: "Profª Karine - História", imageUrl: "https://github.com/user-attachments/assets/b52ed346-3b8a-439e-8408-9fdf48bab63c", likes: 0 },
    { quote: "A vontade de se preparar precisa ser maior que a vontade de vencer", author: "Profª Elisângela - Português", imageUrl: "https://github.com/user-attachments/assets/ac668320-b7cd-4c5e-b8c8-5154e43493e2", likes: 0 },
    { quote: "Acredite e confie em seu potencial", author: "Profª Elisabeth - História", imageUrl: "https://github.com/user-attachments/assets/829e198e-6eab-4875-9004-b4a6fbdbbcda", likes: 0 }
];

const studentQuotes = [
    { quote: "Seu futuro começa com um simples passo em direção ao conhecimento.", author: "Estudantes - 2°C", imageUrl: "https://github.com/user-attachments/assets/f4eb6355-86cd-4569-8e38-c3d60f2861c1", likes: 0 },
    { quote: "Seja curioso, seja criativo, seja bem-sucedido. Tudo isso começa com o ato de estudar", author:"Estudantes - 2°C", imageUrl: "https://github.com/user-attachments/assets/e4e76ff1-d3ca-4167-83c4-1b2c31708fb4", likes: 0 },
];

const externalAuthorQuotes = [
    { quote: "Não deixe que o medo de errar o impeça de tentar.", author: "- Brian Tracy", imageUrl: "https://github.com/user-attachments/assets/a63c9604-79e7-4b84-99e4-4fb2a013a8f9", likes: 0 },
    { quote: "A chave do sucesso é a persistência.", author: "- Napoleon Hill", imageUrl: "https://github.com/user-attachments/assets/318ac348-fd0c-42ac-a4d0-e9b2a55c3de7", likes: 0 },
    { quote: "Você é capaz de muito mais do que imagina.", author: "- Zig Ziglar", imageUrl: "https://github.com/user-attachments/assets/c706da90-c2ec-4af0-a3a8-2157a9d87dab", likes: 0 },
    { quote: "Sempre há um caminho quando há vontade.", author: "- Pablo Neruda", imageUrl: "https://github.com/user-attachments/assets/62185634-8cb5-468e-bd21-ed2560ed3255", likes: 0 },
    { quote: "A única limitação que você tem é a que você impõe a si mesmo.", author: "- Les Brown", imageUrl: "https://github.com/user-attachments/assets/495ead9b-fdf8-4df3-9abf-b278104fddc7", likes: 0 },
    { quote: "Não deixe que o passado determine o seu futuro.", author: "- Eckhart Tolle", imageUrl: "https://github.com/user-attachments/assets/132d21a6-1b4e-43ef-af79-746c57f26a50", likes: 0 },
    { quote: "O sucesso é a soma de pequenos esforços repetidos dia após dia.", author: "- Robert Collier", imageUrl: "https://github.com/user-attachments/assets/ade78109-632d-487f-a140-ea146cccfdc2", likes: 0 },
];

// Variável para armazenar a citação atual
let currentQuote = null;

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
    currentQuote = quotesArray[randomIndex];

    const quoteElement = document.querySelector('.quote');
    const authorElement = document.querySelector('.author');
    const imageElement = document.querySelector('.quote-image');
    const likeNumberElement = document.querySelector('#number');

    quoteElement.textContent = currentQuote.quote;
    authorElement.textContent = currentQuote.author;
    imageElement.src = currentQuote.imageUrl;
    imageElement.style.display = 'block';
    likeNumberElement.textContent = currentQuote.likes;
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

// Adicionar evento de clique ao botão de curtidas
const button = document.querySelector('#like');
button.addEventListener('click', () => {
    if (currentQuote) {
        currentQuote.likes += 1;
        document.querySelector('#number').textContent = currentQuote.likes;
    }
});
