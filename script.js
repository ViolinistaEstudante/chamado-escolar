// Array de frases de motivação
const quotes = [ 
    { quote: "Acredite em si mesmo e tudo será possível.", author: "- Norman Vincent Peale", imageUrl: "https://github.com/ViolinistaEstudante/chamado-escolar/assets/132099734/d2925680-1845-4954-a0e0-285e2418d4c6" },
    { quote: "Não deixe que o medo de errar o impeça de tentar.", author: "- Brian Tracy", imageUrl: "https://github.com/ViolinistaEstudante/chamado-escolar/assets/132099734/a549b604-4d26-4bf9-be2e-5dce7b4c1f6a" },
    { quote: "A chave do sucesso é a persistência.", author: "- Napoleon Hill", imageUrl: "https://github.com/ViolinistaEstudante/chamado-escolar/assets/132099734/45463c0d-b1b0-4eaf-a498-9cc15d386120" },
    { quote: "Você é capaz de muito mais do que imagina.", author: "- Zig Ziglar", imageUrl: "https://github.com/ViolinistaEstudante/chamado-escolar/assets/132099734/d62ef3a8-9b93-4d64-9e46-e5b6d8818b94" },
    { quote: "Sempre há um caminho quando há vontade.", author: "- Pablo Neruda", imageUrl: "https://github.com/ViolinistaEstudante/chamado-escolar/assets/132099734/9fa9f4b7-0ed4-417b-976e-403d4871c441" },
    { quote: "A única limitação que você tem é a que você impõe a si mesmo.", author: "- Les Brown", imageUrl: "https://github.com/ViolinistaEstudante/chamado-escolar/assets/132099734/91f44058-58c7-4542-831f-5d0d819d9316" },
    { quote: "Não deixe que o passado determine o seu futuro.", author: "- Eckhart Tolle", imageUrl: "https://github.com/ViolinistaEstudante/chamado-escolar/assets/132099734/2b582b9d-cc02-498d-af37-4f76a9732db2" },
    { quote: "O sucesso é a soma de pequenos esforços repetidos dia após dia.", author: "- Robert Collier", imageUrl: "https://github.com/ViolinistaEstudante/chamado-escolar/assets/132099734/4fa48f63-7ef2-4737-9ea6-1e2652af13db" },
    { quote: "Seu futuro começa com um simples passo em direção ao conhecimento.", author: "- 2°C", imageUrl: "https://github.com/ViolinistaEstudante/chamado-escolar/assets/132099734/8bbadf6d-a301-45b0-9538-b725bc0fdd5d" },
    { quote: "Seja curioso, seja criativo, seja bem-sucedido. Tudo isso começa com o ato de estudar", author:"- 2°C", imageUrl: "https://github.com/ViolinistaEstudante/chamado-escolar/assets/132099734/3d50b225-5651-494a-8a1b-6e7ac004cf2b" }
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