// Array de frases de motivação
const quotes = [ 
    { quote: "Acredite em si mesmo e tudo será possível.", author: "- Norman Vincent Peale", imageUrl: "https://github.com/ViolinistaEstudante/chamado-escolar/assets/132099734/bf13b71d-84f8-46dd-a187-d07ee79dc9f4" },
    { quote: "Não deixe que o medo de errar o impeça de tentar.", author: "- Brian Tracy", imageUrl: "https://github.com/ViolinistaEstudante/chamado-escolar/assets/132099734/62205433-0824-4475-a326-1ff6aecd51af" },
    { quote: "A chave do sucesso é a persistência.", author: "- Napoleon Hill", imageUrl: "https://github.com/ViolinistaEstudante/chamado-escolar/assets/132099734/fb331c24-cbf3-4475-9eac-a7cae9de98db" },
    { quote: "Você é capaz de muito mais do que imagina.", author: "- Zig Ziglar", imageUrl: "https://github.com/ViolinistaEstudante/chamado-escolar/assets/132099734/664e79a9-e6eb-4f13-8c80-fdcc59ba6c26" },
    { quote: "Sempre há um caminho quando há vontade.", author: "- Pablo Neruda", imageUrl: "https://github.com/ViolinistaEstudante/chamado-escolar/assets/132099734/f4bbbbab-4c40-4491-a51b-be48db234a5f" },
    { quote: "A única limitação que você tem é a que você impõe a si mesmo.", author: "- Les Brown", imageUrl: "https://github.com/ViolinistaEstudante/chamado-escolar/assets/132099734/a5c0285b-1234-463b-9f35-5ee278a74842" },
    { quote: "Não deixe que o passado determine o seu futuro.", author: "- Eckhart Tolle", imageUrl: "https://github.com/ViolinistaEstudante/chamado-escolar/assets/132099734/93a62ecd-6e54-4624-a4ee-a0fee75ca746" },
    { quote: "O sucesso é a soma de pequenos esforços repetidos dia após dia.", author: "- Robert Collier", imageUrl: "https://github.com/ViolinistaEstudante/chamado-escolar/assets/132099734/a0a175a4-78b7-4716-bbe5-532925a6103f" },
    { quote: "Seu futuro começa com um simples passo em direção ao conhecimento.", author: "- 2°C", imageUrl: "https://github.com/ViolinistaEstudante/chamado-escolar/assets/132099734/4bff56c8-a8fa-42c9-86f8-e7c4576cb00d" },
    { quote: "Seja curioso, seja criativo, seja bem-sucedido. Tudo isso começa com o ato de estudar", author:"- 2°C", imageUrl: "https://github.com/ViolinistaEstudante/chamado-escolar/assets/132099734/3edfb72d-daa1-4b94-ae75-ed5fdb83d20f" },
    { quote: "A motivação te leva a começar. A determinação te faz continuar", author: "Profª Gabriela - Português", imageUrl: "https://github.com/ViolinistaEstudante/chamado-escolar/assets/132099734/4893694c-68ad-4b24-b941-615997e26c0f"},
    { quote: "Vencer é uma mistura de luta, esforço, otimismo e não desistir nunca", author: "Prof° Élio - Biologia", imageUrl: "https://github.com/ViolinistaEstudante/chamado-escolar/assets/132099734/3a4ce975-9197-4cab-9788-12148020da09"},
];

// Função para exibir uma nova frase
function displayNewQuote() {
    const quoteElement = document.querySelector('.quote');
    const authorElement = document.querySelector('.author');
    const imageElement = document.querySelector('.quote-image');
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];

    quoteElement.textContent = selectedQuote.quote;
    authorElement.textContent = selectedQuote.author;
    imageElement.src = selectedQuote.imageUrl;
    imageElement.style.display = 'block';
}

// Adicionar evento de clique ao botão "Nova Frase"
document.getElementById('new-quote').addEventListener('click', displayNewQuote);

// Exibir a primeira frase
displayNewQuote();