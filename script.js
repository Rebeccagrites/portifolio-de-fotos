const defaultConfig = {
  site_title: "Meu Portfólio Musical",
  site_subtitle: "Uma jornada através da música e da vida 🎵",
  familia_title: "Família",
  amigos_title: "Amigos",
  igreja_title: "Igreja",
  jocum_title: "JOCUM",
  escola_title: "Escola",
  curso_title: "Curso",
  rl_title: "R e L",
  background_color: "#667eea",
  card_color: "#9333ea",
  text_color: "#7c3aed",
  font_family: "Segoe UI"
};

const config = window.elementSdk?.config || { ...defaultConfig };

// Dados das galerias de fotos
const galleries = {
  familia: [
    { icon: '👨‍👩‍👧‍👦', caption: 'Família Unida', description: 'Nosso maior tesouro' },
    { icon: '❤️', caption: 'Amor Infinito', description: 'Sentimento que nos conecta' },
    { icon: '🏠', caption: 'Nosso Lar', description: 'Onde tudo começa' },
    { icon: '🎂', caption: 'Celebrações', description: 'Festas e alegrias' },
    { icon: '🌟', caption: 'Momentos Especiais', description: 'Memórias que ficam' },
    { icon: '💝', caption: 'Carinho e Apoio', description: 'Sempre presentes' },
    { icon: '🍽️', caption: 'Refeições Juntos', description: 'Conversas à mesa' },
    { icon: '🎄', caption: 'Natal em Família', description: 'Tradições e união' }
  ],
  amigos: [
    { icon: '🤝', caption: 'Amizade Verdadeira', description: 'Laços para vida toda' },
    { icon: '🎉', caption: 'Diversão Juntos', description: 'Risadas garantidas' },
    { icon: '☕', caption: 'Conversas Profundas', description: 'Confidências e conselhos' },
    { icon: '🎮', caption: 'Jogando Juntos', description: 'Competições amigáveis' },
    { icon: '🌈', caption: 'Momentos Coloridos', description: 'Aventuras inesquecíveis' },
    { icon: '💪', caption: 'Apoio Mútuo', description: 'Sempre ali quando preciso' },
    { icon: '🎬', caption: 'Cinema e Séries', description: 'Maratonas divertidas' },
    { icon: '🍕', caption: 'Comidas Favoritas', description: 'Pizzas e lanches' }
  ],
  igreja: [
    { icon: '🙏', caption: 'Oração e Louvor', description: 'Adoração sincera' },
    { icon: '✝️', caption: 'Fé e Esperança', description: 'Fundamento da vida' },
    { icon: '📖', caption: 'Estudo Bíblico', description: 'Aprendendo a Palavra' },
    { icon: '🕊️', caption: 'Paz Interior', description: 'Encontro com Deus' },
    { icon: '🎤', caption: 'Adoração', description: 'Música que eleva' },
    { icon: '💒', caption: 'Comunhão', description: 'Corpo de Cristo unido' },
    { icon: '🎹', caption: 'Ministério Musical', description: 'Servindo com música' },
    { icon: '🌅', caption: 'Culto ao Amanhecer', description: 'Início do dia com Deus' }
  ],
  jocum: [
    { icon: '🌍', caption: 'Missões pelo Mundo', description: 'Levando amor a todos' },
    { icon: '❤️‍🔥', caption: 'Paixão por Jesus', description: 'Amor que transforma' },
    { icon: '🚀', caption: 'Aventuras Missionárias', description: 'Desbravando novos lugares' },
    { icon: '🤲', caption: 'Servindo com Amor', description: 'Mãos que abençoam' },
    { icon: '🌱', caption: 'Crescimento Espiritual', description: 'Amadurecendo na fé' },
    { icon: '🎯', caption: 'Propósito e Visão', description: 'Foco no Reino' },
    { icon: '✈️', caption: 'Viagens Missionárias', description: 'Indo até os confins' },
    { icon: '📣', caption: 'Evangelização', description: 'Compartilhando o amor' }
  ],
  escola: [
    { icon: '📚', caption: 'Aprendizado', description: 'Busca por conhecimento' },
    { icon: '✏️', caption: 'Estudos', description: 'Dedicação e foco' },
    { icon: '🎓', caption: 'Conquistas', description: 'Fruto do esforço' },
    { icon: '🏆', caption: 'Sucessos', description: 'Resultados alcançados' },
    { icon: '👨‍🎓', caption: 'Graduação', description: 'Sonho realizado' },
    { icon: '🌟', caption: 'Excelência', description: 'Sempre buscando o melhor' },
    { icon: '📝', caption: 'Provas e Trabalhos', description: 'Desafios superados' },
    { icon: '👥', caption: 'Colegas de Classe', description: 'Amigos de jornada' }
  ],
  curso: [
    { icon: '💻', caption: 'Tecnologia', description: 'Mundo digital' },
    { icon: '🎨', caption: 'Criatividade', description: 'Inovação e arte' },
    { icon: '📊', caption: 'Desenvolvimento', description: 'Crescimento contínuo' },
    { icon: '🔬', caption: 'Pesquisa', description: 'Buscando soluções' },
    { icon: '🎯', caption: 'Objetivos', description: 'Metas claras' },
    { icon: '💡', caption: 'Ideias Brilhantes', description: 'Inspiração constante' },
    { icon: '🚀', caption: 'Projetos', description: 'Colocando em prática' },
    { icon: '🏅', caption: 'Certificação', description: 'Conquista profissional' }
  ],
  rl: [
    { icon: '💕', caption: 'Amor Especial', description: 'Sentimento único' },
    { icon: '🌹', caption: 'Romance', description: 'Gestos de carinho' },
    { icon: '💑', caption: 'Cumplicidade', description: 'Parceria verdadeira' },
    { icon: '✨', caption: 'Magia', description: 'Momentos encantados' },
    { icon: '🎶', caption: 'Nossa Música', description: 'Trilha sonora do amor' },
    { icon: '💞', caption: 'Conexão Única', description: 'Almas conectadas' },
    { icon: '🌙', caption: 'Noites Estreladas', description: 'Conversas ao luar' },
    { icon: '💐', caption: 'Flores e Surpresas', description: 'Pequenos gestos' }
  ]
};

function createMusicalNotes() {
  const notesContainer = document.getElementById('musicalNotes');
  const notes = ['🎵', '🎶', '🎼', '🎹', '🎸'];
  const numberOfNotes = 20;

  for (let i = 0; i < numberOfNotes; i++) {
    const note = document.createElement('div');
    note.className = 'note';
    note.textContent = notes[Math.floor(Math.random() * notes.length)];
    note.style.left = Math.random() * 100 + '%';
    note.style.top = Math.random() * 100 + '%';
    note.style.animationDelay = Math.random() * 5 + 's';
    note.style.animationDuration = (10 + Math.random() * 10) + 's';
    notesContainer.appendChild(note);
  }
}

function openSection(sectionName) {
  // Esconde página principal
  document.getElementById('mainContainer').classList.add('hidden');
  
  // Mostra página da seção
  const sectionPage = document.getElementById(sectionName + 'Page');
  sectionPage.classList.add('active');
  
  // Carrega galeria
  loadGallery(sectionName);
  
  // Scroll para o topo
  window.scrollTo(0, 0);
}

function closeSection() {
  // Esconde todas as páginas de seção
  const sectionPages = document.querySelectorAll('.section-page');
  sectionPages.forEach(page => page.classList.remove('active'));
  
  // Mostra página principal
  document.getElementById('mainContainer').classList.remove('hidden');
  
  // Scroll para o topo
  window.scrollTo(0, 0);
}

function loadGallery(sectionName) {
  const galleryContainer = document.getElementById(sectionName + 'Gallery');
  galleryContainer.innerHTML = '';
  
  const photos = galleries[sectionName];
  
  photos.forEach(photo => {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.innerHTML = `
      <div class="gallery-icon">${photo.icon}</div>
      <div class="gallery-caption">${photo.caption}</div>
      <div class="gallery-description">${photo.description}</div>
    `;
    galleryContainer.appendChild(item);
  });
}

async function onConfigChange(config) {
  const customFont = config.font_family || defaultConfig.font_family;
  const baseFontStack = 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif';
  document.body.style.fontFamily = `${customFont}, ${baseFontStack}`;

  const bgColor = config.background_color || defaultConfig.background_color;
  const cardColor = config.card_color || defaultConfig.card_color;
  document.body.style.background = `linear-gradient(135deg, ${bgColor} 0%, ${cardColor} 100%)`;

  // Atualiza páginas de seção
  const sectionPages = document.querySelectorAll('.section-page');
  sectionPages.forEach(page => {
    page.style.background = `linear-gradient(135deg, ${bgColor} 0%, ${cardColor} 100%)`;
  });

  document.getElementById('siteTitle').textContent = config.site_title || defaultConfig.site_title;
  document.getElementById('siteSubtitle').textContent = config.site_subtitle || defaultConfig.site_subtitle;
  document.getElementById('familiaTitle').textContent = config.familia_title || defaultConfig.familia_title;
  document.getElementById('amigosTitle').textContent = config.amigos_title || defaultConfig.amigos_title;
  document.getElementById('igrejaTitle').textContent = config.igreja_title || defaultConfig.igreja_title;
  document.getElementById('jocumTitle').textContent = config.jocum_title || defaultConfig.jocum_title;
  document.getElementById('escolaTitle').textContent = config.escola_title || defaultConfig.escola_title;
  document.getElementById('cursoTitle').textContent = config.curso_title || defaultConfig.curso_title;
  document.getElementById('rlTitle').textContent = config.rl_title || defaultConfig.rl_title;

  const sectionTitles = document.querySelectorAll('.section-title');
  sectionTitles.forEach(title => {
    title.style.color = config.text_color || defaultConfig.text_color;
  });

  const sectionCards = document.querySelectorAll('.section-card');
  sectionCards.forEach(card => {
    card.style.borderColor = config.card_color || defaultConfig.card_color;
  });

  const galleryCaptions = document.querySelectorAll('.gallery-caption');
  galleryCaptions.forEach(caption => {
    caption.style.color = config.text_color || defaultConfig.text_color;
  });
}

if (window.elementSdk) {
  window.elementSdk.init({
    defaultConfig,
    onConfigChange,
    mapToCapabilities: (config) => ({
      recolorables: [
        {
          get: () => config.background_color || defaultConfig.background_color,
          set: (value) => {
            config.background_color = value;
            window.elementSdk.setConfig({ background_color: value });
          }
        },
        {
          get: () => config.card_color || defaultConfig.card_color,
          set: (value) => {
            config.card_color = value;
            window.elementSdk.setConfig({ card_color: value });
          }
        },
        {
          get: () => config.text_color || defaultConfig.text_color,
          set: (value) => {
            config.text_color = value;
            window.elementSdk.setConfig({ text_color: value });
          }
        }
      ],
      borderables: [],
      fontEditable: {
        get: () => config.font_family || defaultConfig.font_family,
        set: (value) => {
          config.font_family = value;
          window.elementSdk.setConfig({ font_family: value });
        }
      },
      fontSizeable: undefined
    }),
    mapToEditPanelValues: (config) => new Map([
      ["site_title", config.site_title || defaultConfig.site_title],
      ["site_subtitle", config.site_subtitle || defaultConfig.site_subtitle],
      ["familia_title", config.familia_title || defaultConfig.familia_title],
      ["amigos_title", config.amigos_title || defaultConfig.amigos_title],
      ["igreja_title", config.igreja_title || defaultConfig.igreja_title],
      ["jocum_title", config.jocum_title || defaultConfig.jocum_title],
      ["escola_title", config.escola_title || defaultConfig.escola_title],
      ["curso_title", config.curso_title || defaultConfig.curso_title],
      ["rl_title", config.rl_title || defaultConfig.rl_title]
    ])
  });
}

// Funções globais para serem acessíveis pelo onclick no HTML
window.openSection = openSection;
window.closeSection = closeSection;

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  createMusicalNotes();
  onConfigChange(config);
});
