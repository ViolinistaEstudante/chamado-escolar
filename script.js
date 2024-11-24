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
    { quote: "Cada um tem a visão da montanha que subiu", author: "Profª Karine - História", imageUrl: "https://github.com/user-attachments/assets/b52ed346-3b8a-439e-8408-9fdf48bab63c"},
    { quote: "A vontade de se preparar precisa ser maior que a vontade de vencer", author: "Profª Elisângela - Português", imageUrl: "https://github.com/user-attachments/assets/ac668320-b7cd-4c5e-b8c8-5154e43493e2"},
    { quote: "A vontade de se preparar precisa ser maior que a vontade de vencer", author: "Profª Elisabeth - História", imageUrl: "https://github.com/user-attachments/assets/ac668320-b7cd-4c5e-b8c8-5154e43493e2"},
    { quote: "A vida torna-se mais simples quando o foco está bem definido", author: "Prof° José Gabriel - Geografia", imageUrl:"https://github.com/user-attachments/assets/b1537056-9bd3-42a0-9795-fadfacfcb497"},
    { quote: "Supere os obstáculos, quebre as barreiras, dê o melhor de si, expanda sua consciência através do conhecimento, pois ele liberta!", author: "Profª Marisa - Sociologia", imageUrl: "https://github.com/user-attachments/assets/931925f4-35f0-45bb-b6cd-3c7f9ecf0492"},
    { quote: "Cultive seu próprio jardim, em vez de esperar que alguém traga flores.", author: "Prof° Alex - Matemática II", imageUrl: "https://github.com/user-attachments/assets/819ef951-3eb2-4264-9ccf-670253ddefa5"},
    { quote: "Seu talento é a chave para abrir novas portas. Continue criando!", author: "Profª Raiandra - Arte", imageUrl: "https://github.com/user-attachments/assets/13daf562-935a-413c-bd73-1d2cdeb8fb19"},
    { quote: "Viver é algo raro no mundo; muitas pessoas apenas existem", author: "Profª Andréia - Português I", imageUrl: "https://github.com/user-attachments/assets/9e483056-09d3-4417-8e18-81bcc89bde06"},
    { quote: "Nesse mundo, o sucesso começa pela nossa intenção; e tudo se determina pelo nosso espírito.", author: "Prof° Ederson - Educação Financeira", imageUrl: "https://github.com/user-attachments/assets/45a8f439-2143-469e-8d29-ee590170381b"},
    { quote: "Cada dia na escola é uma nova oportunidade para aprender, crescer e construir o futuro que você sonha", author: "Profª Patrícia - Matemática", imageUrl:"https://github.com/user-attachments/assets/894a5dd5-3a91-4349-ac5f-f2b3367ad0ed"},

];

const studentQuotes = [
    { quote: "Seu futuro começa com um simples passo em direção ao conhecimento.", author: "Estudantes", imageUrl: "https://github.com/user-attachments/assets/f4eb6355-86cd-4569-8e38-c3d60f2861c1" },
    { quote: "Seja curioso, seja criativo, seja bem-sucedido. Tudo isso começa com o ato de estudar", author:"Estudantes", imageUrl: "https://github.com/user-attachments/assets/e4e76ff1-d3ca-4167-83c4-1b2c31708fb4" },
    { quote: "Aproveite as oportunidades, em vez de esperar apenas pelo que deseja.", author: "Estudantes", imageUrl: "https://github.com/user-attachments/assets/d21bb987-b54b-48d0-afdf-d592cfbb0e18"}
];

const externalAuthorQuotes = [
    { quote: "Não deixe que o medo de errar o impeça de tentar.", author: "- Brian Tracy", imageUrl: "https://github.com/user-attachments/assets/a63c9604-79e7-4b84-99e4-4fb2a013a8f9" },
    { quote: "A chave do sucesso é a persistência.", author: "- Napoleon Hill", imageUrl: "https://github.com/user-attachments/assets/318ac348-fd0c-42ac-a4d0-e9b2a55c3de7" },
    { quote: "Você é capaz de muito mais do que imagina.", author: "- Zig Ziglar", imageUrl: "https://github.com/user-attachments/assets/c706da90-c2ec-4af0-a3a8-2157a9d87dab" },
    { quote: "Sempre há um caminho quando há vontade.", author: "- Pablo Neruda", imageUrl: "https://github.com/user-attachments/assets/62185634-8cb5-468e-bd21-ed2560ed3255" },
    { quote: "A única limitação que você tem é a que você impõe a si mesmo.", author: "- Les Brown", imageUrl: "https://github.com/user-attachments/assets/495ead9b-fdf8-4df3-9abf-b278104fddc7" },
    { quote: "Não deixe que o passado determine o seu futuro.", author: "- Eckhart Tolle", imageUrl: "https://github.com/user-attachments/assets/132d21a6-1b4e-43ef-af79-746c57f26a50" },
    { quote: "O sucesso é a soma de pequenos esforços repetidos dia após dia.", author: "- Robert Collier", imageUrl: "https://github.com/user-attachments/assets/ade78109-632d-487f-a140-ea146cccfdc2" },
];

const geralQuotes = [
    { quote: "Ser pontual é demonstrar respeito pelo tempo dos outros e pelo próprio compromisso com os seus objetivos.", author: "Cb. Romoaldo", imageUrl: "https://github.com/user-attachments/assets/d5d546f0-3c14-424d-b185-c7f2fa8b14ed"},
    { quote: "Não falte, para que sua falta não faça falta.", author: "Cb. Hartman", imageUrl: "https://github.com/user-attachments/assets/7d69b531-0244-4085-9ec3-1ac4cf3f0012"},
    { quote: "O conhecimento não é algo que adquire sem esforço, demanda tempo, dedicação e abdicação", author: "Ten. Rossi", imageUrl: "https://github.com/user-attachments/assets/865d7c6d-3843-4bcc-ad30-4a39f56f0e09"},
    { quote: "Você é capaz de ir além do que imagina", author: "Pedagoga Direne", imageUrl: "https://github.com/user-attachments/assets/17a92454-ff8a-481f-9559-94a8f47b1788"},
    { quote: "É preciso amar as pessoas como se não houvesse amanhã.", author: "Pedagoga Elisa", imageUrl: "https://github.com/user-attachments/assets/d23b654c-de63-4745-93de-94c4a8fcd5f1"},
    { quote: "Pra quem tem fé, a vida não tem fim.", author: "Pedagoga Fernanda", imageUrl: "https://github.com/user-attachments/assets/8d3db4f3-5be3-4079-87a7-10eec261699f"},
    {quote : "Todos os dias você se supera de alguma forma. Valorize suas pequenas vitórias", author: "Pedagoga Manuella", imageUrl: "https://github.com/user-attachments/assets/54f204f0-9c8c-436a-a3b7-8c430d7efef5"}
]

// Variáveis globais para rastrear a posição atual da frase
let currentIndex = 0;
let currentQuotesArray = [];

// Função para exibir a próxima frase em sequência
function displayNextQuote() {
    const selectedGroup = document.getElementById('quote-group').value;
    
    // Seleciona o grupo de frases com base na escolha
    if (selectedGroup === 'professors') {
        currentQuotesArray = professorQuotes;
    } else if (selectedGroup === 'students') {
        currentQuotesArray = studentQuotes;
    } else if (selectedGroup === 'external') {
        currentQuotesArray = externalAuthorQuotes;
    } else if (selectedGroup === 'geral') {
        currentQuotesArray = geralQuotes;
    } else {
        currentQuotesArray = [...professorQuotes, ...studentQuotes, ...externalAuthorQuotes, ...geralQuotes];
    }

    // Exibe a próxima frase na sequência
    const selectedQuote = currentQuotesArray[currentIndex];

    const quoteElement = document.querySelector('.quote');
    const authorElement = document.querySelector('.author');
    const imageElement = document.querySelector('.quote-image');

    quoteElement.textContent = selectedQuote.quote;
    authorElement.textContent = selectedQuote.author;
    imageElement.src = selectedQuote.imageUrl;
    imageElement.style.display = 'block';

    // Atualiza o índice para a próxima frase
    currentIndex++;

    // Se o índice exceder o número de frases, volta para o início
    if (currentIndex >= currentQuotesArray.length) {
        currentIndex = 0;
    }
}

// Adicionar evento de clique ao botão "Nova Frase"
document.getElementById('new-quote').addEventListener('click', displayNextQuote);

// Exibir a primeira frase
displayNextQuote();

// Adicionar evento de mudança ao seletor de grupo de frases
document.getElementById('quote-group').addEventListener('change', function() {
    // Resetar o índice ao mudar de grupo para evitar mostrar a frase errada
    currentIndex = 0;
    displayNextQuote();
});

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
