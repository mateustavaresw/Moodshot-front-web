export const navLinks = [
  { hash: "#problema", label: "Pesquisa" },
  { hash: "#publico-alvo", label: "Público-Alvo" },
  { hash: "#solucao", label: "Solução" },
  { hash: "#galeria", label: "Galeria" },
  { hash: "#equipe", label: "Nossa Equipe" },
  { hash: "#contato", label: "Contato" },
];

export const research = [
  {
    value: "80%",
    title: "dos participantes",
    text: "Sentem dificuldade em registrar momentos importantes devido à complexidade das câmeras atuais.",
  },
  {
    value: "95%",
    title: "valorizam praticidade",
    text: "Praticamente todos os participantes consideram a praticidade um fator essencial na hora de registrar momentos.",
  },
  {
    value: "60%",
    title: "compartilham momentos",
    text: "A maioria dos participantes compartilha seus momentos nas redes sociais.",
  },
];

export const persona = {
  name: "Mariana",
  details: "21 anos · Universitária · Fotografia e redes sociais",
  story:
    "Frequentemente perco oportunidades de registrar momentos importantes porque a câmera do meu celular possui configurações complexas e pouco intuitivas. Além disso, o aparelho não oferece recomendações automáticas de ajustes para diferentes situações, o que dificulta capturar fotos com rapidez e qualidade. Como resultado, muitas vezes o momento passa antes que eu consiga configurar a câmera adequadamente.",
  needs: [
    "Busca praticidade ao fotografar.",
    "Quer resultados mais personalizados.",
    "Usa a câmera para se expressar.",
    "Valoriza o compartilhamento rápido.",
  ],
};

export const solutions = [
  { title: "IA contextual", text: "Reconhece o contexto do momento para orientar a experiência." },
  { title: "Experiência simples", text: "Menos etapas entre a intenção, o clique e o resultado." },
  { title: "Pronto para compartilhar", text: "Um fluxo pensado para acompanhar a criação de conteúdo." },
];

export const steps = [
  { number: "01", title: "Abra a câmera", text: "Inicie a experiência MoodShot diretamente pela câmera." },
  { number: "02", title: "Escolha o momento", text: "Selecione o mood que representa o que você quer registrar." },
  { number: "03", title: "Veja o preview", text: "Tenha acesso ao preview e à sugestão de legenda." },
  { number: "04", title: "Compartilhe", text: "Finalize o momento e compartilhe com facilidade." },
];

// o id de cada mood eh usado no MoodIcon pra saber qual desenho mostrar
export const moods = [
  {
    id: "festa",
    label: "Festa",
    emoji: "🎉",
    from: "#FF7A00",
    to: "#8B5CF6",
    exif: "ISO 1600 · 1/60 · f/1.8",
    caption: "Filtros vibrantes e enquadramento automático para não perder o clima da balada.",
  },
  {
    id: "estudo",
    label: "Estudo",
    emoji: "📚",
    from: "#168BFF",
    to: "#6BB5FF",
    exif: "ISO 200 · 1/125 · f/4",
    caption: "Modo foco com boa nitidez para registrar anotações, slides e quadros.",
  },
  {
    id: "viagem",
    label: "Viagem",
    emoji: "✈️",
    from: "#8B5CF6",
    to: "#168BFF",
    exif: "ISO 100 · 1/500 · f/8",
    caption: "Sugestão de composição para paisagens e pontos turísticos em segundos.",
  },
  {
    id: "encontro",
    label: "Encontro",
    emoji: "❤️",
    from: "#FF7A00",
    to: "#FF5CA8",
    exif: "ISO 400 · 1/160 · f/1.4",
    caption: "Retratos com profundidade e tons quentes para momentos a dois.",
  },
];

export const innovations = [
  { title: "Inovação de produto", text: "Uma experiência de câmera orientada pelo mood do usuário." },
  { title: "Inovação de experiência", text: "Uma jornada mais direta, intuitiva e visual." },
  { title: "Inovação de valor", text: "Tecnologia conectada aos hábitos de criação e compartilhamento." },
];

export const members = [
  { name: "José Henrique", rm: "RM 569037" },
  { name: "Rafael Rosatti", rm: "RM 571280" },
  { name: "Mateus Rodrigues", rm: "RM 571189" },
  { name: "Matheus Donas", rm: "RM 568626" },
  { name: "Enzo Cassiano", rm: "RM 569630" },
];
