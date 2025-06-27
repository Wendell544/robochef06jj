
// Array de receitas para café da manhã (15 receitas)
const receitasManha = [
    {
        nome: "Omelete de Espinafre",
        ingredientes: ["2 ovos", "1 xícara de espinafre fresco", "2 colheres de queijo cottage", "Sal e pimenta", "1 colher de chá de azeite"],
        preparo: "1. Bata os ovos em uma tigela.\n2. Aqueça o azeite em frigideira antiaderente.\n3. Adicione espinafre e refogue por 1 minuto.\n4. Despeje os ovos e espalhe uniformemente.\n5. Quando começar a firmar, adicione o queijo cottage.\n6. Dobre a omelete ao meio e sirva.",
        tempo: "10 minutos",
        beneficio: "Rico em proteínas e baixo carboidrato"
    },
    {
        nome: "Mingau de Aveia",
        ingredientes: ["1/2 xícara de aveia em flocos", "1 xícara de leite desnatado", "1 banana amassada", "1 colher de chá de canela", "1 colher de sopa de sementes de chia"],
        preparo: "1. Misture todos os ingredientes em uma panela.\n2. Leve ao fogo médio, mexendo sempre.\n3. Cozinhe por 5-7 minutos até engrossar.\n4. Sirva quente com frutas frescas.",
        tempo: "10 minutos",
        beneficio: "Rico em fibras e energia sustentável"
    },
    {
        nome: "Iogurte com Frutas e Granola",
        ingredientes: ["1 pote de iogurte grego natural", "1/2 xícara de frutas picadas (morango, mirtilo)", "2 colheres de granola caseira", "1 colher de chá de mel"],
        preparo: "1. Coloque o iogurte no fundo de uma tigela.\n2. Adicione as frutas picadas.\n3. Polvilhe a granola por cima.\n4. Regue com mel e sirva imediatamente.",
        tempo: "5 minutos",
        beneficio: "Rico em proteínas e probióticos"
    },
    {
        nome: "Vitamina de Banana e Amendoim",
        ingredientes: ["1 banana congelada", "1 colher de sopa de pasta de amendoim", "200ml de leite desnatado", "1 colher de chá de cacau em pó"],
        preparo: "1. Coloque todos os ingredientes no liquidificador.\n2. Bata até obter uma textura cremosa.\n3. Se necessário, adicione um pouco de água.\n4. Sirva imediatamente.",
        tempo: "5 minutos",
        beneficio: "Fonte de energia e gorduras saudáveis"
    },
    {
        nome: "Tapioca de Queijo Branco",
        ingredientes: ["3 colheres de goma de tapioca", "2 colheres de queijo minas light", "1 pitada de orégano", "1 colher de chá de azeite"],
        preparo: "1. Peneire a tapioca em frigideira quente.\n2. Cozinhe por 1 minuto de cada lado.\n3. Adicione o queijo e o orégano.\n4. Dobre ao meio e sirva quente.",
        tempo: "8 minutos",
        beneficio: "Sem glúten e baixo teor de gordura"
    },
    {
        nome: "Panqueca de Banana e Aveia",
        ingredientes: ["1 banana madura", "2 colheres de aveia", "1 ovo", "1 colher de chá de fermento", "1 pitada de canela"],
        preparo: "1. Amasse a banana em uma tigela.\n2. Adicione os demais ingredientes e misture bem.\n3. Despeje pequenas porções em frigideira antiaderente.\n4. Cozinhe por 2 minutos de cada lado.\n5. Sirva com frutas frescas.",
        tempo: "15 minutos",
        beneficio: "Sem açúcar e rico em fibras"
    },
    {
        nome: "Ovos Mexidos com Tomate",
        ingredientes: ["2 ovos", "1 tomate picado", "1/4 de cebola picada", "Salsinha fresca", "Sal e pimenta"],
        preparo: "1. Bata os ovos em uma tigela.\n2. Refogue a cebola em frigideira antiaderente.\n3. Adicione o tomate e cozinhe por 1 minuto.\n4. Despeje os ovos e mexa até cozinhar.\n5. Tempere com sal, pimenta e salsinha.",
        tempo: "10 minutos",
        beneficio: "Proteína de alta qualidade"
    },
    {
        nome: "Pão Integral com Abacate",
        ingredientes: ["2 fatias de pão integral", "1/2 abacate", "Suco de 1/2 limão", "Pimenta do reino", "Sementes de gergelim"],
        preparo: "1. Toque o pão até ficar crocante.\n2. Amasse o abacate com suco de limão.\n3. Espalhe sobre as torradas.\n4. Tempere com pimenta e sementes de gergelim.",
        tempo: "7 minutos",
        beneficio: "Gorduras saudáveis e fibras"
    },
    {
        nome: "Smoothie Verde",
        ingredientes: ["1 xícara de espinafre fresco", "1/2 maçã verde", "1/2 pepino", "Suco de 1 limão", "200ml de água de coco"],
        preparo: "1. Lave bem todos os ingredientes.\n2. Pique a maçã e o pepino.\n3. Coloque tudo no liquidificador e bata até ficar homogêneo.\n4. Sirva gelado.",
        tempo: "8 minutos",
        beneficio: "Desintoxicante e rico em nutrientes"
    },
    {
        nome: "Crepioca de Frango",
        ingredientes: ["2 colheres de goma de tapioca", "1 ovo", "1/4 de xícara de frango desfiado", "Orégano", "Sal"],
        preparo: "1. Misture a tapioca e o ovo.\n2. Despeje em frigideira quente e espalhe.\n3. Cozinhe por 1 minuto de cada lado.\n4. Recheie com frango desfiado e orégano.\n5. Dobre e sirva.",
        tempo: "12 minutos",
        beneficio: "Alta proteína e baixo carboidrato"
    },
    {
        nome: "Overnight Oats",
        ingredientes: ["1/2 xícara de aveia", "1/2 xícara de leite desnatado", "1 colher de chia", "1 colher de mel", "Frutas frescas"],
        preparo: "1. Misture todos os ingredientes em um pote.\n2. Tampe e leve à geladeira durante a noite.\n3. No dia seguinte, adicione frutas frescas.\n4. Misture bem e sirva.",
        tempo: "5 minutos (preparo noturno)",
        beneficio: "Prático e rico em fibras"
    },
    {
        nome: "Waffle Integral",
        ingredientes: ["1 xícara de farinha integral", "1 ovo", "3/4 xícara de leite desnatado", "1 colher de chá de fermento", "1 colher de chá de essência de baunilha"],
        preparo: "1. Misture todos os ingredientes.\n2. Aqueça a waffleira e unte levemente.\n3. Despeje porções de massa e cozinhe até dourar.\n4. Sirva com frutas frescas.",
        tempo: "20 minutos",
        beneficio: "Integral e sem açúcar adicionado"
    },
    {
        nome: "Omelete de Micro-ondas",
        ingredientes: ["2 ovos", "2 colheres de queijo ralado", "1 colher de requeijão light", "Tomate cereja picado", "Orégano"],
        preparo: "1. Bata os ovos em uma tigela própria para micro-ondas.\n2. Adicione os demais ingredientes e misture.\n3. Leve ao micro-ondas por 2 minutos em potência alta.\n4. Espere 1 minuto antes de servir.",
        tempo: "5 minutos",
        beneficio: "Super rápido e proteico"
    },
    {
        nome: "Sanduíche Natural de Frango",
        ingredientes: ["2 fatias de pão integral", "1/4 de peito de frango grelhado", "1 folha de alface", "2 rodelas de tomate", "1 colher de mostarda"],
        preparo: "1. Toque o pão levemente.\n2. Espalhe a mostarda em uma fatia.\n3. Arrume o frango desfiado, alface e tomate.\n4. Feche o sanduíche e corte ao meio.",
        tempo: "10 minutos",
        beneficio: "Proteína magra e saciante"
    },
    {
        nome: "Mingau de Chia",
        ingredientes: ["3 colheres de sementes de chia", "1 xícara de leite vegetal", "1 colher de mel", "1/2 colher de chá de canela", "Frutas vermelhas"],
        preparo: "1. Misture a chia com o leite vegetal.\n2. Adicione mel e canela.\n3. Deixe na geladeira por 15 minutos.\n4. Misture novamente e sirva com frutas.",
        tempo: "5 minutos (mais 15 de geladeira)",
        beneficio: "Rico em ômega-3 e fibras"
    }
];

// Array de receitas para almoço (15 receitas)
const receitasAlmoco = [
    {
        nome: "Frango Grelhado com Legumes",
        ingredientes: ["1 peito de frango", "1 abobrinha", "1 cenoura", "1 pimentão", "Azeite", "Ervas finas", "Sal e pimenta"],
        preparo: "1. Corte o frango em tiras e tempere.\n2. Corte os legumes em palitos.\n3. Grelhe o frango em frigideira antiaderente.\n4. Refogue os legumes com um fio de azeite.\n5. Sirva o frango sobre os legumes.",
        tempo: "25 minutos",
        beneficio: "Proteína magra e baixo carboidrato"
    },
    {
        nome: "Salada de Quinoa e Grão-de-Bico",
        ingredientes: ["1 xícara de quinoa cozida", "1/2 xícara de grão-de-bico cozido", "Tomate cereja", "Pepino", "Salsinha", "Azeite e limão"],
        preparo: "1. Misture todos os ingredientes em uma tigela grande.\n2. Tempere com azeite, limão, sal e pimenta.\n3. Deixe na geladeira por 15 minutos antes de servir.",
        tempo: "20 minutos",
        beneficio: "Proteína vegetal completa"
    },
    {
        nome: "Filé de Peixe ao Forno",
        ingredientes: ["2 filés de pescada", "Suco de 1 limão", "1 colher de azeite", "Alho picado", "Tomilho", "Sal e pimenta"],
        preparo: "1. Tempere o peixe com todos os ingredientes.\n2. Coloque em assadeira forrada com papel manteiga.\n3. Asse a 200°C por 15-20 minutos.\n4. Sirva com legumes cozidos no vapor.",
        tempo: "30 minutos",
        beneficio: "Ômega-3 e baixo teor calórico"
    },
    {
        nome: "Arroz Integral com Brócolis",
        ingredientes: ["1 xícara de arroz integral", "2 xícaras de água", "1 brócolis", "1 dente de alho", "1 colher de azeite", "Sal"],
        preparo: "1. Cozinhe o arroz integral conforme instruções.\n2. Separe os floretes de brócolis.\n3. Refogue o alho no azeite.\n4. Adicione o brócolis e cozinhe por 5 minutos.\n5. Misture com o arroz cozido e sirva.",
        tempo: "40 minutos",
        beneficio: "Fibras e nutrientes essenciais"
    },
    {
        nome: "Strogonoff de Frango Light",
        ingredientes: ["400g de peito de frango", "1 cebola", "2 dentes de alho", "1 colher de mostarda", "1 colher de ketchup", "1 pote de iogurte natural", "Cogumelos"],
        preparo: "1. Corte o frango em cubos e tempere.\n2. Refogue a cebola e alho no azeite.\n3. Adicione o frango e doure.\n4. Acrescente os cogumelos e molhos.\n5. Por último, adicione o iogurte e aqueça sem ferver.\n6. Sirva com arroz integral.",
        tempo: "35 minutos",
        beneficio: "Versão saudável do clássico"
    },
    {
        nome: "Moqueca de Peixe Light",
        ingredientes: ["2 postas de peixe branco", "1 cebola", "1 pimentão", "2 tomates", "Leite de coco light", "Coentro", "Azeite de dendê"],
        preparo: "1. Arrume camadas de cebola, pimentão e tomate em panela.\n2. Coloque o peixe por cima.\n3. Adicione o leite de coco e um fio de dendê.\n4. Cozinhe em fogo baixo por 20 minutos.\n5. Finalize com coentro.",
        tempo: "40 minutos",
        beneficio: "Saboroso e rico em proteínas"
    },
    {
        nome: "Espaguete de Abobrinha",
        ingredientes: ["2 abobrinhas", "1 xícara de molho de tomate caseiro", "Alho picado", "Manjericão fresco", "Queijo parmesão ralado"],
        preparo: "1. Corte as abobrinhas em tiras finas com um descascador.\n2. Refogue o alho no azeite.\n3. Adicione as tiras de abobrinha e cozinhe por 3 minutos.\n4. Misture o molho de tomate e aqueça.\n5. Finalize com manjericão e queijo.",
        tempo: "20 minutos",
        beneficio: "Baixo carboidrato e leve"
    },
    {
        nome: "Frango Xadrez",
        ingredientes: ["400g de peito de frango", "1 pimentão amarelo", "1 pimentão vermelho", "1 cebola", "Broto de bambu", "Molho shoyu light", "Gengibre"],
        preparo: "1. Corte o frango e os vegetais em cubos.\n2. Refogue o frango em wok com pouco óleo.\n3. Adicione os vegetais e refogue rapidamente.\n4. Tempere com shoyu e gengibre ralado.\n5. Sirva com arroz integral.",
        tempo: "30 minutos",
        beneficio: "Preparo rápido e nutritivo"
    },
    {
        nome: "Omelete de Forno",
        ingredientes: ["4 ovos", "1/2 xícara de leite desnatado", "Tomate picado", "Cebola picada", "Queijo minas light", "Orégano"],
        preparo: "1. Bata os ovos com o leite.\n2. Adicione os vegetais picados.\n3. Despeje em refratário untado.\n4. Asse a 180°C por 20 minutos.\n5. Corte em quadrados e sirva.",
        tempo: "30 minutos",
        beneficio: "Alta proteína e versátil"
    },
    {
        nome: "Salada de Atum",
        ingredientes: ["1 lata de atum light", "Alface crespa", "Tomate", "Pepino", "Milho", "Azeitonas", "Limão e azeite"],
        preparo: "1. Lave e pique as folhas e vegetais.\n2. Misture todos os ingredientes em uma tigela.\n3. Tempere com limão, azeite, sal e pimenta.\n4. Adicione o atum escorrido por último.",
        tempo: "15 minutos",
        beneficio: "Rápido e rico em ômega-3"
    },
    {
        nome: "Wrap de Folhas",
        ingredientes: ["Folhas de alface americana", "Peito de frango grelhado", "Cenoura ralada", "Pepino em tiras", "Abacate", "Iogurte natural"],
        preparo: "1. Lave e seque as folhas de alface.\n2. Arrume o frango desfiado e os vegetais.\n3. Adicione fatias de abacate.\n4. Regue com iogurte natural.\n5. Enrole como um wrap e sirva.",
        tempo: "20 minutos",
        beneficio: "Sem carboidratos e refrescante"
    },
    {
        nome: "Frango ao Curry",
        ingredientes: ["400g de peito de frango", "1 cebola", "1 colher de curry em pó", "1 lata de tomate pelado", "Leite de coco light", "Coentro"],
        preparo: "1. Doure o frango em cubos e reserve.\n2. Refogue a cebola e adicione o curry.\n3. Volte o frango e acrescente o tomate.\n4. Cozinhe por 15 minutos.\n5. Adicione leite de coco e coentro.",
        tempo: "35 minutos",
        beneficio: "Sabor marcante e proteico"
    },
    {
        nome: "Berinjela Assada",
        ingredientes: ["1 berinjela grande", "Molho de tomate", "Queijo minas light", "Manjericão", "Azeite"],
        preparo: "1. Corte a berinjela em rodelas grossas.\n2. Arrume em assadeira, cubra com molho.\n3. Adicione pedaços de queijo e manjericão.\n4. Regue com azeite e asse a 200°C por 25 minutos.",
        tempo: "40 minutos",
        beneficio: "Vegetariano e nutritivo"
    },
    {
        nome: "Peixe Grelhado com Salada",
        ingredientes: ["2 filés de peixe branco", "Mix de folhas verdes", "Tomate", "Pepino", "Azeitonas", "Limão e azeite"],
        preparo: "1. Tempere o peixe com limão e ervas.\n2. Grelhe por 4 minutos de cada lado.\n3. Prepare a salada com os vegetais.\n4. Regue a salada com limão e azeite.\n5. Sirva o peixe sobre a salada.",
        tempo: "25 minutos",
        beneficio: "Leve e rico em proteínas"
    },
    {
        nome: "Frango com Batata Doce",
        ingredientes: ["2 sobrecoxas de frango", "2 batatas doces", "Alecrim", "Alho", "Azeite", "Sal e pimenta"],
        preparo: "1. Tempere o frango com alho, alecrim, sal e pimenta.\n2. Corte as batatas em cubos.\n3. Arrume em assadeira com o frango.\n4. Regue com azeite e asse a 200°C por 40 minutos.\n5. Vire na metade do tempo.",
        tempo: "50 minutos",
        beneficio: "Equilíbrio proteína-carboidrato"
    }
];

// Array de receitas para lanche da tarde (15 receitas)
const receitasTarde = [
    {
        nome: "Mix de Castanhas",
        ingredientes: ["1 punhado de castanha de caju", "1 punhado de amêndoas", "1 punhado de nozes", "1 colher de uvas passas"],
        preparo: "1. Misture todos os ingredientes em um potinho.\n2. Consuma uma porção (cerca de 30g) como lanche.",
        tempo: "2 minutos",
        beneficio: "Gorduras saudáveis e energia"
    },
    {
        nome: "Frutas com Pasta de Amendoim",
        ingredientes: ["1 maçã ou banana", "1 colher de pasta de amendoim integral"],
        preparo: "1. Corte a fruta em pedaços.\n2. Mergulhe os pedaços na pasta de amendoim.\n3. Consuma imediatamente.",
        tempo: "5 minutos",
        beneficio: "Combinação saciante"
    },
    {
        nome: "Iogurte com Sementes",
        ingredientes: ["1 pote de iogurte natural", "1 colher de sementes de chia", "1 colher de sementes de linhaça"],
        preparo: "1. Coloque o iogurte em uma tigela.\n2. Adicione as sementes e misture bem.\n3. Deixe descansar por 5 minutos antes de consumir.",
        tempo: "7 minutos",
        beneficio: "Probióticos e ômega-3"
    },
    {
        nome: "Bolo de Caneca Proteico",
        ingredientes: ["1 ovo", "2 colheres de aveia", "1 colher de proteína em pó", "1 colher de cacau", "1/2 colher de fermento"],
        preparo: "1. Misture todos os ingredientes em uma caneca.\n2. Leve ao micro-ondas por 2 minutos.\n3. Espere esfriar por 1 minuto e consuma.",
        tempo: "5 minutos",
        beneficio: "Alto teor proteico"
    },
    {
        nome: "Ovos Cozidos",
        ingredientes: ["2 ovos"],
        preparo: "1. Coloque os ovos em uma panela com água fria.\n2. Leve ao fogo até ferver.\n3. Conte 8 minutos após começar a ferver.\n4. Desligue, escorra e coloque em água fria.\n5. Descascue e consuma com sal e pimenta.",
        tempo: "15 minutos",
        beneficio: "Proteína completa e prática"
    },
    {
        nome: "Cookie de Aveia",
        ingredientes: ["1 banana amassada", "1/2 xícara de aveia", "1 colher de pasta de amendoim", "1 colher de uvas passas", "Canela"],
        preparo: "1. Misture todos os ingredientes.\n2. Forme pequenos cookies em assadeira.\n3. Asse a 180°C por 15 minutos.\n4. Deixe esfriar antes de consumir.",
        tempo: "25 minutos",
        beneficio: "Sem açúcar e rico em fibras"
    },
    {
        nome: "Palitinhos de Legumes com Homus",
        ingredientes: ["Cenoura", "Pepino", "Aipo", "1/2 xícara de homus caseiro"],
        preparo: "1. Corte os legumes em palitos.\n2. Prepare o homus (ou use pronto).\n3. Mergulhe os palitos no homus e consuma.",
        tempo: "10 minutos",
        beneficio: "Fibras e proteína vegetal"
    },
    {
        nome: "Smoothie de Morango",
        ingredientes: ["1 xícara de morangos congelados", "1/2 banana", "200ml de leite desnatado", "1 colher de chia"],
        preparo: "1. Coloque todos os ingredientes no liquidificador.\n2. Bata até obter consistência cremosa.\n3. Sirva imediatamente.",
        tempo: "5 minutos",
        beneficio: "Antioxidantes e refrescante"
    },
    {
        nome: "Torrada com Ricota",
        ingredientes: ["1 fatia de pão integral", "2 colheres de ricota", "Tomilho", "Pimenta do reino"],
        preparo: "1. Toque o pão.\n2. Espalhe a ricota sobre o pão.\n3. Tempere com tomilho e pimenta.\n4. Consuma imediatamente.",
        tempo: "5 minutos",
        beneficio: "Proteína e baixa caloria"
    },
    {
        nome: "Banana Assada com Canela",
        ingredientes: ["1 banana nanica", "1 colher de chá de canela", "1 colher de chá de mel"],
        preparo: "1. Coloque a banana com casca em assadeira.\n2. Asse a 180°C por 15 minutos.\n3. Retire, corte ao meio no sentido longitudinal.\n4. Polvilhe canela e regue com mel.",
        tempo: "20 minutos",
        beneficio: "Sobremesa saudável"
    },
    {
        nome: "Pão de Queijo Light",
        ingredientes: ["1 xícara de polvilho doce", "1/2 xícara de queijo minas light", "1 ovo", "1 colher de chá de fermento"],
        preparo: "1. Misture todos os ingredientes.\n2. Faça bolinhas e coloque em forma.\n3. Asse a 200°C por 20 minutos.\n4. Espere esfriar um pouco antes de consumir.",
        tempo: "30 minutos",
        beneficio: "Versão light do clássico"
    },
    {
        nome: "Vitamina de Abacate",
        ingredientes: ["1/2 abacate", "200ml de leite desnatado", "Suco de 1/2 limão", "1 colher de mel"],
        preparo: "1. Retire a polpa do abacate.\n2. Coloque todos os ingredientes no liquidificador.\n3. Bata até ficar cremoso.\n4. Sirva gelado.",
        tempo: "7 minutos",
        beneficio: "Gorduras saudáveis"
    },
    {
        nome: "Sanduíche de Atum",
        ingredientes: ["2 fatias de pão integral", "1 lata de atum light", "1 colher de maionese light", "Alface", "Tomate"],
        preparo: "1. Misture o atum escorrido com a maionese.\n2. Espalhe sobre uma fatia de pão.\n3. Adicione alface e tomate.\n4. Feche o sanduíche e corte ao meio.",
        tempo: "10 minutos",
        beneficio: "Prático e rico em proteínas"
    },
    {
        nome: "Barrinha de Cereal Caseira",
        ingredientes: ["1 xícara de aveia", "1/2 xícara de amendoim", "1/4 de xícara de mel", "2 colheres de pasta de amendoim", "1 colher de chia"],
        preparo: "1. Misture todos os ingredientes.\n2. Pressione em forma forrada com papel manteiga.\n3. Leve à geladeira por 2 horas.\n4. Corte em barras e armazene.",
        tempo: "15 minutos (mais 2h geladeira)",
        beneficio: "Sem conservantes"
    },
    {
        nome: "Maçã com Canela",
        ingredientes: ["1 maçã", "1 colher de chá de canela"],
        preparo: "1. Lave bem a maçã.\n2. Corte em fatias ou cubos.\n3. Polvilhe com canela.\n4. Consuma imediatamente.",
        tempo: "5 minutos",
        beneficio: "Fibra e baixa caloria"
    }
];

// Array de receitas para jantar (15 receitas)
const receitasNoite = [
    {
        nome: "Sopa de Frango com Legumes",
        ingredientes: ["1 peito de frango", "2 batatas", "1 cenoura", "1 chuchu", "Salsão", "Salsinha", "Sal e pimenta"],
        preparo: "1. Cozinhe o frango em água com sal.\n2. Retire o frango e desfie.\n3. Adicione os legumes picados ao caldo.\n4. Cozinhe até os legumes ficarem macios.\n5. Volte o frango desfiado.\n6. Finalize com salsinha picada.",
        tempo: "40 minutos",
        beneficio: "Leve e nutritiva"
    },
    {
        nome: "Salada de Frango Grelhado",
        ingredientes: ["1 peito de frango grelhado", "Mix de folhas", "Tomate", "Pepino", "Milho", "Azeite e limão"],
        preparo: "1. Corte o frango em tiras.\n2. Prepare a salada com as folhas e vegetais.\n3. Adicione o frango por cima.\n4. Tempere com azeite, limão, sal e pimenta.",
        tempo: "20 minutos",
        beneficio: "Proteína magra e leve"
    },
    {
        nome: "Omelete de Vegetais",
        ingredientes: ["2 ovos", "1/4 de pimentão", "1/4 de cebola", "2 cogumelos", "Orégano", "Azeite"],
        preparo: "1. Pique os vegetais em cubinhos.\n2. Refogue rapidamente com azeite.\n3. Bata os ovos e despeje sobre os vegetais.\n4. Cozinhe até firmar e vire para dourar dos dois lados.\n5. Sirva com salada verde.",
        tempo: "15 minutos",
        beneficio: "Jantar rápido e proteico"
    },
    {
        nome: "Filé de Frango com Salada",
        ingredientes: ["1 filé de frango", "Alface", "Rúcula", "Tomate", "Pepino", "Vinagrete de limão"],
        preparo: "1. Tempere o frango e grelhe.\n2. Prepare a salada com os vegetais.\n3. Corte o frango em fatias.\n4. Arrume sobre a salada e regue com vinagrete.",
        tempo: "25 minutos",
        beneficio: "Baixo carboidrato"
    },
    {
        nome: "Salmão Grelhado com Aspargos",
        ingredientes: ["1 filé de salmão", "6 aspargos", "Azeite", "Alho", "Limão", "Sal e pimenta"],
        preparo: "1. Tempere o salmão com limão, sal e pimenta.\n2. Grelhe o salmão por 4 minutos de cada lado.\n3. Refogue os aspargos com alho e azeite.\n4. Sirva o salmão com os aspargos.",
        tempo: "20 minutos",
        beneficio: "Rico em ômega-3"
    },
    {
        nome: "Wrap de Alface com Frango",
        ingredientes: ["Folhas de alface", "Frango desfiado", "Cenoura ralada", "Pepino em tiras", "Molho de iogurte"],
        preparo: "1. Lave e seque as folhas de alface.\n2. Arrume o frango e vegetais no centro.\n3. Regue com molho de iogurte.\n4. Enrole como um wrap e sirva.",
        tempo: "15 minutos",
        beneficio: "Sem carboidratos"
    },
    {
        nome: "Crepioca Recheada",
        ingredientes: ["2 colheres de tapioca", "1 ovo", "Requeijão light", "Peito de peru", "Orégano"],
        preparo: "1. Misture tapioca e ovo.\n2. Despeje em frigideira quente.\n3. Vire quando começar a dourar.\n4. Recheie com requeijão e peito de peru.\n5. Dobre e sirva com salada.",
        tempo: "12 minutos",
        beneficio: "Prático e versátil"
    },
    {
        nome: "Ovos Pochê com Espinafre",
        ingredientes: ["2 ovos", "2 xícaras de espinafre", "1 colher de vinagre", "Sal e pimenta"],
        preparo: "1. Aqueça água com vinagre até quase ferver.\n2. Quebre os ovos cuidadosamente na água.\n3. Cozinhe por 3-4 minutos.\n4. Retire com escumadeira.\n5. Sirva sobre espinafre refogado.",
        tempo: "15 minutos",
        beneficio: "Proteína de alta qualidade"
    },
    {
        nome: "Quiche de Legumes",
        ingredientes: ["2 ovos", "1/2 xícara de leite", "Brócolis", "Tomate", "Cebola", "Queijo minas light"],
        preparo: "1. Bata ovos com leite.\n2. Adicione legumes picados.\n3. Despeje em refratário untado.\n4. Asse a 180°C por 25 minutos.\n5. Espere 5 minutos antes de cortar.",
        tempo: "35 minutos",
        beneficio: "Versátil e nutritivo"
    },
    {
        nome: "Frango ao Molho de Tomate",
        ingredientes: ["2 sobrecoxas de frango", "1 lata de tomate pelado", "Cebola", "Alho", "Manjericão", "Azeite"],
        preparo: "1. Doure o frango em panela.\n2. Adicione cebola e alho refogados.\n3. Junte o tomate e manjericão.\n4. Cozinhe em fogo baixo por 30 minutos.\n5. Sirva com vegetais cozidos.",
        tempo: "45 minutos",
        beneficio: "Clássico saudável"
    },
    {
        nome: "Salada de Lentilha",
        ingredientes: ["1 xícara de lentilha cozida", "Tomate", "Pepino", "Cebola roxa", "Salsinha", "Limão e azeite"],
        preparo: "1. Misture todos os ingredientes em tigela.\n2. Tempere com limão, azeite, sal e pimenta.\n3. Deixe na geladeira por 15 minutos antes de servir.",
        tempo: "20 minutos",
        beneficio: "Proteína vegetal e fibras"
    },
    {
        nome: "Abobrinha Recheada",
        ingredientes: ["2 abobrinhas", "Carne moída magra", "Cebola", "Alho", "Molho de tomate", "Queijo ralado"],
        preparo: "1. Corte as abobrinhas ao meio e retire o miolo.\n2. Refogue a carne com cebola e alho.\n3. Recheie as abobrinhas.\n4. Cubra com molho de tomate e queijo.\n5. Asse a 200°C por 25 minutos.",
        tempo: "45 minutos",
        beneficio: "Baixo carboidrato"
    },
    {
        nome: "Peixe Assado com Legumes",
        ingredientes: ["2 filés de peixe", "Batata", "Cenoura", "Abobrinha", "Azeite", "Ervas finas"],
        preparo: "1. Corte os legumes em cubos.\n2. Tempere o peixe e os legumes.\n3. Arrume em assadeira forrada.\n4. Asse a 200°C por 25 minutos.\n5. Sirva com limão.",
        tempo: "35 minutos",
        beneficio: "Completo e leve"
    },
    {
        nome: "Frango com Brócolis",
        ingredientes: ["1 peito de frango", "1 brócolis", "Alho", "Gengibre", "Molho shoyu light", "Óleo de gergelim"],
        preparo: "1. Corte o frango em cubos.\n2. Separe o brócolis em floretes.\n3. Refogue o alho e gengibre.\n4. Adicione o frango e doure.\n5. Junte o brócolis e cozinhe por 5 minutos.\n6. Tempere com shoyu e gergelim.",
        tempo: "25 minutos",
        beneficio: "Rápido e nutritivo"
    },
    {
        nome: "Omelete de Forno",
        ingredientes: ["3 ovos", "1/2 xícara de leite", "Tomate seco", "Espinafre", "Queijo feta", "Orégano"],
        preparo: "1. Bata os ovos com leite.\n2. Adicione os demais ingredientes picados.\n3. Despeje em refratário untado.\n4. Asse a 180°C por 20 minutos.\n5. Corte em quadrados e sirva.",
        tempo: "30 minutos",
        beneficio: "Versátil e proteico"
    }
];

const chatContainer = document.getElementById('chatContainer');
const responseButtons = document.getElementById('responseButtons');
const statusText = document.getElementById('statusText');
const statusIndicator = document.getElementById('statusIndicator');

let periodoAtual = '';
let receitasMostradas = [];

function adicionarMensagem(texto, isUser = false) {
    const mensagemDiv = document.createElement('div');
    mensagemDiv.className = `mensagem ${isUser ? 'usuario' : 'robo'}`;
    
    const avatarDiv = document.createElement('div');
    avatarDiv.className = 'avatar';
    avatarDiv.textContent = isUser ? '👤' : '🤖';
    
    const textoDiv = document.createElement('div');
    textoDiv.className = 'texto';
    
    const paragrafo = document.createElement('p');
    paragrafo.textContent = texto;
    
    textoDiv.appendChild(paragrafo);
    mensagemDiv.appendChild(avatarDiv);
    mensagemDiv.appendChild(textoDiv);
    
    chatContainer.appendChild(mensagemDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function limparBotoesResposta() {
    responseButtons.innerHTML = '';
}

function adicionarBotoesResposta(botoes) {
    limparBotoesResposta();
    botoes.forEach(botao => {
        const button = document.createElement('button');
        button.textContent = botao.texto;
        button.className = botao.secundario ? 'btn-resposta secundario' : 'btn-resposta';
        button.addEventListener('click', botao.acao);
        responseButtons.appendChild(button);
    });
}

function getReceitasPorPeriodo(periodo) {
    switch(periodo) {
        case 'manha': return receitasManha;
        case 'almoco': return receitasAlmoco;
        case 'tarde': return receitasTarde;
        case 'noite': return receitasNoite;
        default: return [];
    }
}

function getNomePeriodo(periodo) {
    const periodos = {
        manha: 'Café da Manhã',
        almoco: 'Almoço',
        tarde: 'Lanche da Tarde',
        noite: 'Jantar'
    };
    return periodos[periodo];
}

function getPeriodoAtual() {
    const horaAtual = new Date().getHours();
    if (horaAtual >= 5 && horaAtual < 10) return 'manha';
    if (horaAtual >= 10 && horaAtual < 14) return 'almoco';
    if (horaAtual >= 14 && horaAtual < 18) return 'tarde';
    return 'noite';
}

function mostrarReceitas(periodo) {
    periodoAtual = periodo;
    const todasReceitas = getReceitasPorPeriodo(periodo);
    const periodoDoDia = getPeriodoAtual();
    
    if (periodo !== periodoDoDia) {
        const periodoNome = getNomePeriodo(periodo).toLowerCase();
        const mensagem = `Hmm... vi que você está procurando receitas para ${periodoNome}, mas agora é hora do ${getNomePeriodo(periodoDoDia).toLowerCase()}! 😊\n\nManter a rotina é importante para uma alimentação saudável. Deseja ver sugestões para agora ou prefere continuar com ${periodoNome}?`;
        adicionarMensagem(mensagem, false);
        
        adicionarBotoesResposta([
            { 
                texto: `Ver ${getNomePeriodo(periodoDoDia)}`, 
                acao: () => mostrarReceitas(periodoDoDia)
            },
            { 
                texto: `Continuar com ${getNomePeriodo(periodo)}`, 
                acao: () => mostrarOpcoesReceitas(periodo),
                secundario: true
            }
        ]);
        return;
    }
    
    mostrarOpcoesReceitas(periodo);
}

function mostrarOpcoesReceitas(periodo) {
    const todasReceitas = getReceitasPorPeriodo(periodo);
    let receitasDisponiveis = todasReceitas.filter(r => !receitasMostradas.includes(r.nome));
    
    if (receitasDisponiveis.length < 2) {
        receitasMostradas = [];
        receitasDisponiveis = todasReceitas;
    }
    
    const receitasEmbaralhadas = [...receitasDisponiveis].sort(() => 0.5 - Math.random());
    const receitasSelecionadas = receitasEmbaralhadas.slice(0, 2);
    
    receitasSelecionadas.forEach(r => receitasMostradas.push(r.nome));
    
    adicionarMensagem(`Aqui estão minhas sugestões para ${getNomePeriodo(periodo).toLowerCase()}:`, false);
    
    receitasSelecionadas.forEach(receita => {
        const mensagemDiv = document.createElement('div');
        mensagemDiv.className = 'mensagem robo';
        
        const avatarDiv = document.createElement('div');
        avatarDiv.className = 'avatar';
        avatarDiv.textContent = '🤖';
        
        const textoDiv = document.createElement('div');
        textoDiv.className = 'texto';
        
        const titulo = document.createElement('h3');
        titulo.textContent = receita.nome;
        
        const receitaDiv = document.createElement('div');
        receitaDiv.className = 'receita';
        
        const infoDiv = document.createElement('div');
        infoDiv.className = 'info-receita';
        infoDiv.innerHTML = `
            <div class="info-item">⏱️ <span>${receita.tempo}</span></div>
            <div class="info-item">🍽️ <span>${receita.porcoes}</span></div>
            <div class="info-item">📊 <span>${receita.dificuldade}</span></div>
            <div class="info-item">🔥 <span>${receita.calorias} kcal</span></div>
        `;
        
        const ingredientesDiv = document.createElement('div');
        ingredientesDiv.className = 'ingredientes';
        ingredientesDiv.innerHTML = `
            <h4>📋 Ingredientes:</h4>
            <ul>${receita.ingredientes.map(ing => `<li>${ing}</li>`).join('')}</ul>
        `;
        
        receitaDiv.appendChild(infoDiv);
        receitaDiv.appendChild(ingredientesDiv);
        
        textoDiv.appendChild(titulo);
        textoDiv.appendChild(receitaDiv);
        mensagemDiv.appendChild(avatarDiv);
        mensagemDiv.appendChild(textoDiv);
        
        chatContainer.appendChild(mensagemDiv);
    });
    
    const botoes = receitasSelecionadas.map(receita => ({
        texto: `Ver ${receita.nome}`,
        acao: () => mostrarReceitaCompleta(receita)
    }));
    
    botoes.push({
        texto: "Mostrar outras opções",
        acao: () => mostrarOpcoesReceitas(periodo),
        secundario: true
    });
    
    botoes.push({
        texto: "Voltar ao menu",
        acao: mostrarMenuPrincipal,
        secundario: true
    });
    
    adicionarBotoesResposta(botoes);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function mostrarReceitaCompleta(receita) {
    const mensagemDiv = document.createElement('div');
    mensagemDiv.className = 'mensagem robo';
    
    const avatarDiv = document.createElement('div');
    avatarDiv.className = 'avatar';
    avatarDiv.textContent = '🤖';
    
    const textoDiv = document.createElement('div');
    textoDiv.className = 'texto';
    
    const titulo = document.createElement('h3');
    titulo.textContent = receita.nome;
    
    const receitaDiv = document.createElement('div');
    receitaDiv.className = 'receita';
    
    const infoDiv = document.createElement('div');
    infoDiv.className = 'info-receita';
    infoDiv.innerHTML = `
        <div class="info-item">⏱️ <span>${receita.tempo}</span></div>
        <div class="info-item">🍽️ <span>${receita.porcoes}</span></div>
        <div class="info-item">📊 <span>${receita.dificuldade}</span></div>
        <div class="info-item">🔥 <span>${receita.calorias} kcal</span></div>
    `;
    
    const ingredientesDiv = document.createElement('div');
    ingredientesDiv.className = 'ingredientes';
    ingredientesDiv.innerHTML = `
        <h4>📋 Ingredientes:</h4>
        <ul>${receita.ingredientes.map(ing => `<li>${ing}</li>`).join('')}</ul>
    `;
    
    const preparoDiv = document.createElement('div');
    preparoDiv.className = 'preparo';
    preparoDiv.innerHTML = `
        <h4>👩‍🍳 Modo de preparo:</h4>
        <p>${receita.preparo.replace(/\n/g, '<br>')}</p>
    `;
    
    const nutricaoDiv = document.createElement('div');
    nutricaoDiv.className = 'info-receita';
    nutricaoDiv.innerHTML = `
        <div class="info-item">💪 <span>Proteínas: ${receita.proteinas}</span></div>
        <div class="info-item">🍞 <span>Carboidratos: ${receita.carboidratos}</span></div>
        <div class="info-item">🥑 <span>Gorduras: ${receita.gordura}</span></div>
    `;
    
    const dicasDiv = document.createElement('div');
    dicasDiv.className = 'dicas';
    dicasDiv.innerHTML = `
        <h4>💡 Dicas:</h4>
        <p>${receita.dicas}</p>
    `;
    
    receitaDiv.appendChild(infoDiv);
    receitaDiv.appendChild(ingredientesDiv);
    receitaDiv.appendChild(preparoDiv);
    receitaDiv.appendChild(nutricaoDiv);
    receitaDiv.appendChild(dicasDiv);
    
    textoDiv.appendChild(titulo);
    textoDiv.appendChild(receitaDiv);
    mensagemDiv.appendChild(avatarDiv);
    mensagemDiv.appendChild(textoDiv);
    
    chatContainer.appendChild(mensagemDiv);
    
    adicionarBotoesResposta([
        { 
            texto: "Ver mais opções", 
            acao: () => mostrarOpcoesReceitas(periodoAtual)
        },
        { 
            texto: "Voltar ao menu", 
            acao: mostrarMenuPrincipal,
            secundario: true
        }
    ]);
    
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function mostrarMenuPrincipal() {
    adicionarMensagem("Qual refeição você gostaria de ver?", false);
    adicionarBotoesResposta([
        { texto: "Café da Manhã", acao: () => mostrarReceitas('manha') },
        { texto: "Almoço", acao: () => mostrarReceitas('almoco') },
        { texto: "Lanche da Tarde", acao: () => mostrarReceitas('tarde') },
        { texto: "Jantar", acao: () => mostrarReceitas('noite') }
    ]);
}

function iniciarApp() {
    setTimeout(() => {
        statusText.textContent = 'Digitando...';
        setTimeout(() => {
            statusText.textContent = 'Online';
            mostrarMenuPrincipal();
        }, 1500);
    }, 500);
}

window.addEventListener('online', () => {
    statusText.textContent = 'Online';
    statusIndicator.style.color = '#4CAF50';
});

window.addEventListener('offline', () => {
    statusText.textContent = 'Offline';
    statusIndicator.style.color = '#F44336';
    adicionarMensagem('Estou offline, mas você pode ver as receitas já carregadas!', false);
});

document.addEventListener('DOMContentLoaded', iniciarApp);