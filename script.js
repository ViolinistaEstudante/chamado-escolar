const professorQuotes = [
    { quote: "A motivação te leva a começar. A determinação te faz continuar", author: "Profª Gabriela - Português", imageUrl: "https://github.com/ViolinistaEstudante/chamado-escolar/assets/132099734/4893694c-68ad-4b24-b941-615997e26c0f"},
    { quote: "Vencer é uma mistura de luta, esforço, otimismo e não desistir nunca", author: "Prof° Élio - Biologia", imageUrl: "https://github.com/ViolinistaEstudante/chamado-escolar/assets/132099734/3a4ce975-9197-4cab-9788-12148020da09"},
    { quote: "Estude, pois a caneta é mais leve do que a pá", author: "Profª Karol - Física", imageUrl:"https://github.com/ViolinistaEstudante/chamado-escolar/assets/132099734/5e994848-48ed-47f6-bf27-b62f0f04dce5"},
    { quote: "O que você está fazendo por você?", author: "Prof° Sidnei - Filosofia", imageUrl:"https://github.com/ViolinistaEstudante/chamado-escolar/assets/132099734/93510724-6223-4ecc-a774-263960d70f78"},
    { quote: "Superação é quando te amassa a alma, e você ainda briga.", author: "Profª Danielli - Ed. Física", imageUrl: "https://github.com/ViolinistaEstudante/chamado-escolar/assets/132099734/7c9e334f-c48d-46bf-972d-e14bbd1d516a"},
    { quote: "Precisamos de vocês alunos, para o nosso futuro", author: "Profª Maria Marli - Inglês", imageUrl: "https://github.com/ViolinistaEstudante/chamado-escolar/assets/132099734/47fffd72-03bb-48c9-8a69-99b8b5ca737a"},
    { quote: "União, dedicação, são fundamentais para seu futuro.", author: "Profº Luiz Paulo - Geografia", imageUrl: "https://github.com/ViolinistaEstudante/chamado-escolar/assets/132099734/a2a4d8ce-66ef-4c2f-84e0-f1f917c98597"},
    { quote: "A educação pode ser a única ponte entre você e o sucesso", author: "Profª Érica - Química", imageUrl: "https://github.com/ViolinistaEstudante/chamado-escolar/assets/132099734/746a148b-3694-48cf-90d3-b5cff8369e49"},
    { quote: "Apenas a educação tem o poder de livrar!", author: "Prof° Victor - Matemática", imageUrl: "https://github.com/ViolinistaEstudante/chamado-escolar/assets/132099734/9141c189-f7cb-463f-b350-6a0a2ba43437"},
    { quote: "Cada um tem a visão da montanha que subiu", author: "Profª Karine - História", imageUrl: "https://github.com/user-attachments/assets/09ad74f4-b902-4cc9-9ea1-88844241567a"}
];

const studentQuotes = [
    { quote: "Seu futuro começa com um simples passo em direção ao conhecimento.", author: "Estudantes - 2°C", imageUrl: "https://github.com/ViolinistaEstudante/chamado-escolar/assets/132099734/4bff56c8-a8fa-42c9-86f8-e7c4576cb00d" },
    { quote: "Seja curioso, seja criativo, seja bem-sucedido. Tudo isso começa com o ato de estudar", author:"Estudantes - 2°C", imageUrl: "https://github.com/ViolinistaEstudante/chamado-escolar/assets/132099734/3edfb72d-daa1-4b94-ae75-ed5fdb83d20f" },
];

const externalAuthorQuotes = [
    { quote: "Não deixe que o medo de errar o impeça de tentar.", author: "- Brian Tracy", imageUrl: "https://github.com/ViolinistaEstudante/chamado-escolar/assets/132099734/62205433-0824-4475-a326-1ff6aecd51af" },
    { quote: "A chave do sucesso é a persistência.", author: "- Napoleon Hill", imageUrl: "https://github.com/ViolinistaEstudante/chamado-escolar/assets/132099734/fb331c24-cbf3-4475-9eac-a7cae9de98db" },
    { quote: "Você é capaz de muito mais do que imagina.", author: "- Zig Ziglar", imageUrl: "https://github.com/ViolinistaEstudante/chamado-escolar/assets/132099734/664e79a9-e6eb-4f13-8c80-fdcc59ba6c26" },
    { quote: "Sempre há um caminho quando há vontade.", author: "- Pablo Neruda", imageUrl: "https://github.com/ViolinistaEstudante/chamado-escolar/assets/132099734/f4bbbbab-4c40-4491-a51b-be48db234a5f" },
    { quote: "A única limitação que você tem é a que você impõe a si mesmo.", author: "- Les Brown", imageUrl: "https://github.com/ViolinistaEstudante/chamado-escolar/assets/132099734/a5c0285b-1234-463b-9f35-5ee278a74842" },
    { quote: "Não deixe que o passado determine o seu futuro.", author: "- Eckhart Tolle", imageUrl: "https://github.com/ViolinistaEstudante/chamado-escolar/assets/132099734/93a62ecd-6e54-4624-a4ee-a0fee75ca746" },
    { quote: "O sucesso é a soma de pequenos esforços repetidos dia após dia.", author: "- Robert Collier", imageUrl: "https://github.com/ViolinistaEstudante/chamado-escolar/assets/132099734/a0a175a4-78b7-4716-bbe5-532925a6103f" },
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
