// Array de receitas com mais detalhes
const receitasManha = [
    {
        nome: "Vitamina de Banana com Aveia",
        ingredientes: ["1 banana madura", "2 colheres de sopa de aveia", "200ml de leite (pode ser vegetal)", "1 colher de chá de mel (opcional)"],
        preparo: "1. Descasque a banana e corte em pedaços.\n2. Coloque todos os ingredientes no liquidificador.\n3. Bata em velocidade alta por 1-2 minutos até ficar cremoso.\n4. Se preferir mais gelado, adicione cubos de gelo antes de bater.\n5. Sirva imediatamente em um copo alto.",
        calorias: 210,
        tempo: "5 minutos",
        porcoes: "1 porção",
        dificuldade: "Fácil",
        gordura: "3g",
        proteinas: "8g",
        carboidratos: "42g",
        dicas: "Para uma versão vegana, substitua o leite por leite de amêndoa e o mel por xarope de agave. Adicione uma colher de chia para aumentar o teor de fibras."
    },
    {
        nome: "Omelete de Espinafre (Vegetariano)",
        ingredientes: ["2 ovos", "1 xícara de espinafre fresco", "1/4 de xícara de tomate picado", "2 colheres de sopa de queijo ralado", "Sal e pimenta a gosto", "1 colher de chá de azeite"],
        preparo: "1. Em uma tigela, bata os ovos com sal e pimenta.\n2. Aqueça o azeite em uma frigideira antiaderente em fogo médio.\n3. Adicione o espinafre e o tomate, refogue por 1-2 minutos até murchar.\n4. Despeje os ovos batidos sobre os vegetais.\n5. Espalhe o queijo ralado uniformemente.\n6. Cozinhe por 3-4 minutos até a base dourar.\n7. Com uma espátula, dobre a omelete ao meio.\n8. Cozinhe por mais 1 minuto e sirva quente.",
        calorias: 180,
        tempo: "10 minutos",
        porcoes: "1 porção",
        dificuldade: "Fácil",
        gordura: "12g",
        proteinas: "14g",
        carboidratos: "4g",
        dicas: "Para uma omelete mais fofa, adicione uma colher de água aos ovos batidos. Você pode substituir o espinafre por outras folhas como rúcula ou couve."
    },
    {
        nome: "Tofu Scramble (Vegano)",
        ingredientes: ["200g de tofu firme escorrido", "1/2 pimentão vermelho picado", "1/2 cebola roxa picada", "1 colher de chá de cúrcuma", "1 colher de sopa de levedura nutricional", "Sal e pimenta a gosto", "1 colher de sopa de azeite"],
        preparo: "1. Amasse o tofu com um garfo até obter uma textura de ovos mexidos.\n2. Aqueça o azeite em frigideira e refogue a cebola por 2 minutos.\n3. Adicione o pimentão e cozinhe por mais 3 minutos.\n4. Incorpore o tofu, cúrcuma, sal e pimenta.\n5. Cozinhe por 5-7 minutos mexendo ocasionalmente.\n6. Finalize com levedura nutricional e sirva com torradas integrais.",
        calorias: 220,
        tempo: "15 minutos",
        porcoes: "2 porções",
        dificuldade: "Fácil",
        gordura: "15g",
        proteinas: "16g",
        carboidratos: "8g",
        dicas: "Para um sabor extra, adicione cogumelos picados ou espinafre. Sirva com abacate fatiado para gorduras saudáveis."
    },
    {
        nome: "Panquecas de Aveia e Banana",
        ingredientes: ["1 banana madura", "2 ovos", "1/2 xícara de aveia em flocos", "1 colher de chá de canela", "1 colher de chá de fermento", "1 pitada de sal", "Óleo de coco para untar"],
        preparo: "1. Amasse a banana em uma tigela.\n2. Adicione os ovos e misture bem.\n3. Incorpore a aveia, canela, fermento e sal.\n4. Aqueça uma frigideira antiaderente com um pouco de óleo.\n5. Despeje porções da massa e cozinhe por 2-3 minutos de cada lado.\n6. Sirva com frutas frescas e mel.",
        calorias: 320,
        tempo: "20 minutos",
        porcoes: "2 porções",
        dificuldade: "Fácil",
        gordura: "10g",
        proteinas: "12g",
        carboidratos: "45g",
        dicas: "Para versão vegana, substitua os ovos por 2 colheres de chia hidratadas em 6 colheres de água. Adicione gotas de baunilha para aroma."
    },
    {
        nome: "Pudim de Chia com Frutas",
        ingredientes: ["3 colheres de sopa de sementes de chia", "1 xícara de leite vegetal", "1 colher de sopa de mel", "1/2 xícara de frutas vermelhas frescas", "1 colher de chá de essência de baunilha"],
        preparo: "1. Em um pote, misture chia, leite vegetal, mel e baunilha.\n2. Mexa bem e deixe na geladeira por 4 horas ou durante a noite.\n3. Antes de servir, misture novamente e cubra com frutas.\n4. Adicione granola caseira para crocância.",
        calorias: 180,
        tempo: "5 minutos (mais tempo de geladeira)",
        porcoes: "1 porção",
        dificuldade: "Fácil",
        gordura: "8g",
        proteinas: "6g",
        carboidratos: "22g",
        dicas: "Para variedade, experimente diferentes leites vegetais e frutas da estação. Adicione raspas de limão para frescor."
    },
    {
        nome: "Torrada Integral com Abacate",
        ingredientes: ["2 fatias de pão integral", "1/2 abacate maduro", "Suco de 1/2 limão", "Pimenta do reino moída", "Sal marinho", "Sementes de gergelim"],
        preparo: "1. Toque o pão até ficar crocante.\n2. Amasse o abacate com garfo e misture com suco de limão.\n3. Espalhe sobre as torradas.\n4. Tempere com sal, pimenta e sementes de gergelim.\n5. Decore com microgreens ou rúcula.",
        calorias: 250,
        tempo: "10 minutos",
        porcoes: "1 porção",
        dificuldade: "Fácil",
        gordura: "15g",
        proteinas: "7g",
        carboidratos: "25g",
        dicas: "Para proteína extra, adicione ovo pochê ou fatias de tofu grelhado. Use pimenta caiena para um toque picante."
    },
    {
        nome: "Iogurte Grego com Granola e Frutas",
        ingredientes: ["1 pote de iogurte grego natural", "1/2 xícara de granola caseira", "1/2 xícara de frutas picadas (manga, morango, kiwi)", "1 colher de sopa de mel", "1 colher de sopa de castanhas picadas"],
        preparo: "1. Em uma taça, coloque o iogurte no fundo.\n2. Adicione uma camada de granola.\n3. Coloque as frutas por cima.\n4. Regue com mel e finalize com castanhas.\n5. Sirva imediatamente.",
        calorias: 280,
        tempo: "5 minutos",
        porcoes: "1 porção",
        dificuldade: "Fácil",
        gordura: "10g",
        proteinas: "15g",
        carboidratos: "35g",
        dicas: "Para versão vegana, substitua iogurte grego por iogurte de coco. Faça sua própria granola com aveia, nozes e mel."
    },
    {
        nome: "Crepioca de Queijo Branco",
        ingredientes: ["2 colheres de sopa de tapioca", "1 ovo", "2 colheres de sopa de queijo minas frescal picado", "Sal a gosto", "Orégano", "1 colher de chá de azeite"],
        preparo: "1. Misture todos os ingredientes até formar uma massa homogênea.\n2. Aqueça uma frigideira antiaderente com azeite.\n3. Despeje a massa e espalhe uniformemente.\n4. Cozinhe por 2 minutos de cada lado.\n5. Sirva com tomate cereja e manjericão.",
        calorias: 210,
        tempo: "10 minutos",
        porcoes: "1 porção",
        dificuldade: "Fácil",
        gordura: "11g",
        proteinas: "12g",
        carboidratos: "18g",
        dicas: "Adicione espinafre picado para mais nutrientes. Substitua queijo por tofu para versão vegana."
    },
    {
        nome: "Smoothie Bowl Tropical",
        ingredientes: ["1 banana congelada", "1/2 xícara de manga congelada", "1/4 de abacate", "1/2 xícara de leite de coco", "Coberturas: kiwi, morango, coco ralado, sementes de chia"],
        preparo: "1. Bata todos os ingredientes no liquidificador até cremoso.\n2. Despeje em uma tigela.\n3. Decore generosamente com as coberturas.\n4. Sirva imediatamente com colher.",
        calorias: 320,
        tempo: "10 minutos",
        porcoes: "1 porção",
        dificuldade: "Fácil",
        gordura: "14g",
        proteinas: "5g",
        carboidratos: "48g",
        dicas: "Congele frutas maduras para textura perfeita. Adicione proteína em pó vegetal para refeição completa."
    },
    {
        nome: "Overnight Oats com Maçã e Canela",
        ingredientes: ["1/2 xícara de aveia em flocos", "1/2 xícara de leite vegetal", "1/4 de maçã picada", "1 colher de sopa de mel", "1 colher de chá de canela", "1 colher de sopa de nozes picadas"],
        preparo: "1. Em um pote, misture aveia, leite, mel e canela.\n2. Tampe e leve à geladeira durante a noite.\n3. No dia seguinte, adicione maçã picada e nozes.\n4. Misture bem antes de servir.",
        calorias: 290,
        tempo: "5 minutos (mais tempo de geladeira)",
        porcoes: "1 porção",
        dificuldade: "Fácil",
        gordura: "8g",
        proteinas: "7g",
        carboidratos: "50g",
        dicas: "Para variedade, experimente pera assada ou banana. Adicione linhaça moída para ômega-3."
    },
    {
        nome: "Waffles Integrais",
        ingredientes: ["1 xícara de farinha integral", "1 ovo", "3/4 xícara de leite", "1 colher de sopa de óleo de coco", "1 colher de chá de fermento", "1 pitada de sal", "1 colher de chá de essência de baunilha"],
        preparo: "1. Misture todos os ingredientes até formar massa homogênea.\n2. Aqueça a waffleira e unte levemente.\n3. Despeje porções de massa e feche.\n4. Cozinhe por 3-5 minutos até dourar.\n5. Sirva com frutas frescas.",
        calorias: 280,
        tempo: "20 minutos",
        porcoes: "2 waffles",
        dificuldade: "Médio",
        gordura: "9g",
        proteinas: "8g",
        carboidratos: "42g",
        dicas: "Congele waffles extras para dias corridos. Substitua 1/4 da farinha por farelo de aveia para mais fibras."
    },
    {
        nome: "Ovos Benedict Light",
        ingredientes: ["2 ovos", "1 muffin integral", "2 fatias de peito de peru defumado", "1/4 de abacate", "Salsinha picada", "Molho: 1 iogurte grego, suco de limão, mostarda dijon"],
        preparo: "1. Prepare ovos pochê em água com vinagre.\n2. Toque o muffin e cubra com peru e abacate.\n3. Coloque os ovos por cima.\n4. Misture ingredientes do molho e regue.\n5. Finalize com salsinha.",
        calorias: 320,
        tempo: "25 minutos",
        porcoes: "1 porção",
        dificuldade: "Médio",
        gordura: "18g",
        proteinas: "22g",
        carboidratos: "20g",
        dicas: "Para versão vegana, substitua ovos por tofu marinado e peru por cogumelos grelhados."
    },
    {
        nome: "Bolo de Caneca Proteico",
        ingredientes: ["1 ovo", "2 colheres de aveia", "1 colher de proteína em pó sabor baunilha", "1/2 banana amassada", "1 colher de chá de fermento", "1 colher de chá de canela", "Gotas de chocolate 70%"],
        preparo: "1. Misture todos os ingredientes em uma caneca grande.\n2. Micro-ondas por 2 minutos em potência alta.\n3. Espere esfriar por 1 minuto.\n4. Decore com frutas ou iogurte.",
        calorias: 250,
        tempo: "5 minutos",
        porcoes: "1 porção",
        dificuldade: "Fácil",
        gordura: "8g",
        proteinas: "20g",
        carboidratos: "25g",
        dicas: "Adicione nozes picadas para crocância. Substitua ovo por 1 colher de chia hidratada para versão vegana."
    },
    {
        nome: "Sanduíche de Ricota com Tomate Seco",
        ingredientes: ["2 fatias de pão integral", "3 colheres de ricota fresca", "1 colher de tomate seco picado", "Folhas de manjericão", "Pimenta preta", "1 colher de azeite"],
        preparo: "1. Misture ricota, tomate seco e manjericão.\n2. Tempere com pimenta e azeite.\n3. Espalhe sobre uma fatia de pão.\n4. Cubra com a outra fatia e corte diagonalmente.\n5. Sirva com mix de folhas verdes.",
        calorias: 280,
        tempo: "10 minutos",
        porcoes: "1 porção",
        dificuldade: "Fácil",
        gordura: "12g",
        proteinas: "14g",
        carboidratos: "30g",
        dicas: "Adicione rúcula ou espinafre cru para mais nutrientes. Use pão de centeio para sabor diferenciado."
    },
    {
        nome: "Shakshuka Vegetariana",
        ingredientes: ["2 ovos", "1 lata de tomates pelados", "1/2 pimentão vermelho picado", "1/2 cebola picada", "1 dente de alho picado", "1 colher de chá de cominho", "Páprica defumada", "Coentro fresco", "Azeite"],
        preparo: "1. Refogue cebola, alho e pimentão em azeite.\n2. Adicione tomates, cominho e páprica. Cozinhe por 10 min.\n3. Abra espaços na panela e quebre os ovos.\n4. Tampe e cozinhe até ovos atingirem ponto desejado.\n5. Finalize com coentro e sirva com pão integral.",
        calorias: 300,
        tempo: "25 minutos",
        porcoes: "2 porções",
        dificuldade: "Médio",
        gordura: "18g",
        proteinas: "14g",
        carboidratos: "20g",
        dicas: "Adicione espinafre ou couve nos últimos minutos. Para versão vegana, substitua ovos por cubos de tofu."
    }
];

const receitasAlmoco = [
    {
        nome: "Arroz Integral com Legumes (Vegetariano)",
        ingredientes: ["1 xícara de arroz integral", "2 xícaras de água", "1 cenoura média picada", "1/2 xícara de ervilhas frescas ou congeladas", "1/2 xícara de milho", "1 cebola picada", "2 dentes de alho picados", "1 colher de sopa de azeite", "Sal e pimenta a gosto", "Salsinha fresca para decorar"],
        preparo: "1. Lave bem o arroz integral em água corrente.\n2. Em uma panela, aqueça o azeite e refogue a cebola e o alho até dourar.\n3. Adicione a cenoura e refogue por 2 minutos.\n4. Acrescente o arroz e mexa bem para envolver nos temperos.\n5. Adicione a água, sal e pimenta, e tampe a panela.\n6. Cozinhe em fogo baixo por 25-30 minutos.\n7. Quando faltar 10 minutos, adicione as ervilhas e o milho.\n8. Desligue o fogo e deixe descansar por 5 minutos.\n9. Sirva quente, decorado com salsinha picada.",
        calorias: 300,
        tempo: "40 minutos",
        porcoes: "2 porções",
        dificuldade: "Médio",
        gordura: "4g",
        proteinas: "8g",
        carboidratos: "60g",
        dicas: "Para uma versão mais proteica, adicione cubos de tofu ou frango desfiado. Se preferir legumes crocantes, adicione-os nos últimos 5 minutos de cozimento."
    },
    {
        nome: "Bowl de Quinoa com Abóbora Assada (Vegano)",
        ingredientes: ["1 xícara de quinoa cozida", "200g de abóbora kabocha em cubos", "1 beterraba cozida picada", "1/2 abacate fatiado", "1 xícara de broto de feijão", "Molho: 2 colheres de tahine, suco de limão, água, alho em pó"],
        preparo: "1. Asse abóbora com azeite e sal a 200°C por 25 min.\n2. Prepare quinoa conforme instruções da embalagem.\n3. Monte o bowl com quinoa, abóbora, beterraba, abacate e brotos.\n4. Misture ingredientes do molho e regue sobre o bowl.\n5. Finalize com sementes de girassol.",
        calorias: 420,
        tempo: "35 minutos",
        porcoes: "2 porções",
        dificuldade: "Fácil",
        gordura: "18g",
        proteinas: "12g",
        carboidratos: "55g",
        dicas: "Adicione grão-de-bico assado para mais proteína. Use diferentes vegetais assados conforme disponibilidade."
    },
    {
        nome: "Salmão Grelhado com Aspargos",
        ingredientes: ["2 filés de salmão (150g cada)", "1 maço de aspargos verdes", "2 colheres de sopa de azeite", "Suco de 1 limão", "1 colher de chá de ervas finas", "Sal e pimenta", "Batatas baby assadas"],
        preparo: "1. Tempere salmão com suco de limão, sal, pimenta e ervas.\n2. Grelhe em frigideira antiaderente 4-5 min cada lado.\n3. Refogue aspargos em azeite com alho por 5 min.\n4. Sirva com batatas baby assadas com alecrim.",
        calorias: 450,
        tempo: "25 minutos",
        porcoes: "2 porções",
        dificuldade: "Médio",
        gordura: "25g",
        proteinas: "35g",
        carboidratos: "20g",
        dicas: "Para crosta crocante, pressione salmão na frigideira. Substitua batatas por quinoa para refeição low-carb."
    },
    {
        nome: "Lentilha com Vegetais",
        ingredientes: ["1 xícara de lentilhas verdes", "2 xícaras de água", "1 cenoura picada", "1 talo de salsão picado", "1 tomate picado", "1 cebola picada", "2 dentes de alho", "1 folha de louro", "Cominho em pó", "Azeite"],
        preparo: "1. Refogue cebola, alho e salsão em azeite.\n2. Adicione cenoura e tomate, cozinhe por 5 min.\n3. Acrescente lentilhas, água, louro e cominho.\n4. Cozinhe por 25-30 min até lentilhas macias.\n5. Ajuste temperos e sirva com arroz integral.",
        calorias: 350,
        tempo: "40 minutos",
        porcoes: "3 porções",
        dificuldade: "Fácil",
        gordura: "5g",
        proteinas: "18g",
        carboidratos: "58g",
        dicas: "Adicione espinafre nos últimos 5 minutos. Sirva com iogurte natural para cremosidade."
    },
    {
        nome: "Frango ao Curry com Leite de Coco",
        ingredientes: ["400g de peito de frango em cubos", "1 lata de leite de coco light", "1 cebola picada", "2 dentes de alho", "1 colher de sopa de curry em pó", "1 pimentão amarelo picado", "1 colher de sopa de gengibre ralado", "1 colher de sopa de óleo de coco", "Coentro fresco"],
        preparo: "1. Doure frango no óleo de coco e reserve.\n2. Refogue cebola, alho, gengibre e pimentão.\n3. Adicione curry e frigue por 1 minuto.\n4. Volte frango à panela e adicione leite de coco.\n5. Cozinhe em fogo baixo por 15 minutos.\n6. Finalize com coentro e sirva com arroz basmati.",
        calorias: 380,
        tempo: "35 minutos",
        porcoes: "3 porções",
        dificuldade: "Médio",
        gordura: "18g",
        proteinas: "30g",
        carboidratos: "20g",
        dicas: "Adicione abobrinha ou berinjela para mais vegetais. Use curry tailandês para sabor diferente."
    },
    {
        nome: "Risoto de Cogumelos (Vegetariano)",
        ingredientes: ["1 xícara de arroz arbóreo", "300g de cogumelos mistos fatiados", "1 cebola pequena picada", "2 dentes de alho", "1/2 xícara de vinho branco seco", "4 xícaras de caldo de legumes", "2 colheres de sopa de manteiga", "1/4 de xícara de queijo parmesão ralado", "Salsinha picada"],
        preparo: "1. Refogue cebola e alho em manteiga até transparentes.\n2. Adicione cogumelos e cozinhe até murchar.\n3. Incorpore arroz e mexa por 2 min.\n4. Adicione vinho e deixe evaporar.\n5. Adicione caldo quente aos poucos, mexendo sempre.\n6. Cozinhe por 18-20 min até arroz al dente.\n7. Desligue e misture parmesão e salsinha.",
        calorias: 420,
        tempo: "40 minutos",
        porcoes: "3 porções",
        dificuldade: "Médio",
        gordura: "15g",
        proteinas: "10g",
        carboidratos: "60g",
        dicas: "Para versão vegana, substitua manteiga por azeite e queijo por levedura nutricional."
    },
    {
        nome: "Tacos de Camarão com Abacate",
        ingredientes: ["300g de camarões médios limpos", "8 tortilhas de milho", "1 abacate amassado", "1 xícara de repolho roxo ralado", "1 manga em cubos", "Suco de 1 limão", "Coentro", "Pimenta caiena", "Azeite"],
        preparo: "1. Tempere camarões com suco de limão, alho e pimenta.\n2. Grelhe camarões em frigideira quente por 2 min cada lado.\n3. Aqueça tortilhas conforme instruções.\n4. Monte tacos com abacate, repolho, manga e camarões.\n5. Finalize com coentro e molho picante.",
        calorias: 380,
        tempo: "25 minutos",
        porcoes: "2 porções",
        dificuldade: "Médio",
        gordura: "15g",
        proteinas: "25g",
        carboidratos: "40g",
        dicas: "Use tortilhas de couve para versão low-carb. Adicione feijão preto para mais proteína vegetal."
    },
    {
        nome: "Stir-fry de Tofu com Vegetais",
        ingredientes: ["300g de tofu firme em cubos", "2 colheres de sopa de molho de soja", "1 colher de sopa de mel", "1 pimentão vermelho em tiras", "1 cenoura em rodelas finas", "1 xícara de brócolis", "1 colher de chá de gengibre ralado", "2 dentes de alho", "1 colher de chá de óleo de gergelim", "Castanha de caju"],
        preparo: "1. Marine tofu em metade do molho de soja por 15 min.\n2. Doure tofu em wok com óleo e reserve.\n3. Refogue alho e gengibre por 30 segundos.\n4. Adicione vegetais e refogue por 5 min.\n5. Volte tofu, adicione molho restante e mel.\n6. Cozinhe por mais 3 min e finalize com óleo de gergelim e cajus.",
        calorias: 320,
        tempo: "30 minutos",
        porcoes: "2 porções",
        dificuldade: "Médio",
        gordura: "16g",
        proteinas: "18g",
        carboidratos: "25g",
        dicas: "Adicione abóbora japonesa ou cogumelos shiitake. Sirve com arroz integral ou quinoa."
    },
    {
        nome: "Moqueca de Palmito (Vegano)",
        ingredientes: ["2 latas de palmito pupunha em rodelas", "1 cebola em rodelas", "1 pimentão vermelho em rodelas", "2 tomates sem sementes picados", "1 lata de leite de coco", "Suco de 1 limão", "Azeite de dendê", "Coentro", "Arroz integral"],
        preparo: "1. Refogue cebola e pimentão em azeite por 5 min.\n2. Adicione tomate e cozinhe até desmanchar.\n3. Acrescente palmito, suco de limão e leite de coco.\n4. Cozinhe em fogo baixo por 15 min.\n5. Finalize com dendê e coentro.\n6. Sirva com arroz integral e farofa de aveia.",
        calorias: 350,
        tempo: "35 minutos",
        porcoes: "3 porções",
        dificuldade: "Médio",
        gordura: "20g",
        proteinas: "8g",
        carboidratos: "40g",
        dicas: "Adicione banana-da-terra cozida para sabor tradicional. Use cogumelos para textura carnuda."
    },
    {
        nome: "Frango Assado com Batatas",
        ingredientes: ["4 sobrecoxas de frango", "4 batatas médias em cubos", "2 cenouras em rodelas", "1 cebola em oito partes", "Raminhos de alecrim", "3 dentes de alho amassados", "Azeite", "Páprica defumada", "Sal e pimenta"],
        preparo: "1. Tempere frango com alho, páprica, sal e pimenta.\n2. Em assadeira, misture vegetais com azeite e alecrim.\n3. Arrume frango sobre vegetais.\n4. Asse a 200°C por 45-50 min até dourado.\n5. Vire os pedaços na metade do tempo.",
        calorias: 480,
        tempo: "60 minutos",
        porcoes: "4 porções",
        dificuldade: "Fácil",
        gordura: "22g",
        proteinas: "35g",
        carboidratos: "35g",
        dicas: "Adicione batata-doce para mais nutrientes. Sirva com salada verde para refeição completa."
    },
    {
        nome: "Cuscuz Marroquino com Legumes",
        ingredientes: ["2 xícaras de cuscuz integral", "2 xícaras de caldo de legumes", "1 berinjela em cubos", "1 abobrinha em cubos", "1/2 xícara de passas", "Canela em pó", "Cominho", "Hortelã fresca", "Azeite"],
        preparo: "1. Asse berinjela e abobrinha com azeite por 20 min.\n2. Hidrate cuscuz com caldo quente por 5 min.\n3. Solte os grãos com garfo.\n4. Misture legumes assados, passas e especiarias.\n5. Finalize com hortelã picada e azeite.",
        calorias: 320,
        tempo: "30 minutos",
        porcoes: "4 porções",
        dificuldade: "Fácil",
        gordura: "8g",
        proteinas: "9g",
        carboidratos: "60g",
        dicas: "Adicione grão-de-bico cozido para mais proteína. Sirva frio como salada ou quente como acompanhamento."
    },
    {
        nome: "Bife Acebolado com Purê de Mandioquinha",
        ingredientes: ["4 bifes de patinho (150g cada)", "2 cebolas grandes em rodelas", "1 kg de mandioquinha", "1/2 xícara de leite desnatado", "1 colher de sopa de manteiga", "Salsa picada", "Caldo de carne light", "Azeite"],
        preparo: "1. Cozinhe mandioquinha até macia e faça purê com leite e manteiga.\n2. Tempere bifes e grelhe por 3 min cada lado.\n3. Refogue cebolas em azeite até caramelizar.\n4. Adicione caldo de carne e reduza.\n5. Sirve bifes com cebolas e purê, finalizado com salsa.",
        calorias: 520,
        tempo: "45 minutos",
        porcoes: "4 porções",
        dificuldade: "Médio",
        gordura: "22g",
        proteinas: "40g",
        carboidratos: "40g",
        dicas: "Use cogumelos portobello para versão vegetariana. Adicione noz-moscada ao purê para sabor extra."
    },
    {
        nome: "Salada de Grão-de-Bico com Atum",
        ingredientes: ["1 lata de grão-de-bico escorrido", "1 lata de atum light escorrido", "1 pepino picado", "1 tomate sem sementes picado", "1/4 de cebola roxa picada", "Suco de 1 limão", "2 colheres de sopa de azeite", "Hortelã fresca", "Sal e pimenta"],
        preparo: "1. Misture todos os ingredientes em uma tigela grande.\n2. Tempere com suco de limão, azeite, sal e pimenta.\n3. Deixe na geladeira por 30 min para sabores se misturarem.\n4. Sirva sobre folhas verdes com fatias de pão integral.",
        calorias: 280,
        tempo: "15 minutos",
        porcoes: "2 porções",
        dificuldade: "Fácil",
        gordura: "12g",
        proteinas: "20g",
        carboidratos: "25g",
        dicas: "Adicione azeitonas ou alcaparras para sabor mediterrâneo. Substitua atum por tofu para versão vegetariana."
    },
    {
        nome: "Escondidinho de Carne Moída com Batata-Doce",
        ingredientes: ["500g de carne moída magra", "1 kg de batata-doce", "1 cebola picada", "2 dentes de alho", "1 tomate picado", "1/2 xícara de ervilhas", "1 colher de sopa de azeite", "Queijo cottage", "Salsinha"],
        preparo: "1. Cozinhe batatas-doces até macias e faça purê.\n2. Refogue carne moída com cebola, alho e tomate.\n3. Adicione ervilhas e temperos.\n4. Em refratário, coloque carne, cubra com purê e queijo cottage.\n5. Asse a 180°C por 20 min até dourar.\n6. Finalize com salsinha.",
        calorias: 380,
        tempo: "60 minutos",
        porcoes: "4 porções",
        dificuldade: "Médio",
        gordura: "15g",
        proteinas: "25g",
        carboidratos: "40g",
        dicas: "Use lentilhas cozidas em vez de carne para versão vegana. Adicione cenoura ralada ao refogado."
    },
    {
        nome: "Ratatouille Assado (Vegetariano)",
        ingredientes: ["1 berinjela", "2 abobrinhas", "2 tomates", "1 pimentão vermelho", "1 pimentão amarelo", "1 cebola", "3 dentes de alho", "Manjericão fresco", "Tomilho", "Azeite", "Molho de tomate"],
        preparo: "1. Corte todos os vegetais em rodelas finas.\n2. Em refratário, espalhe molho de tomate no fundo.\n3. Arrume rodelas alternadas verticalmente.\n4. Regue com azeite e tempere com ervas.\n5. Cubra com papel alumínio e asse a 180°C por 40 min.\n6. Remova alumínio e asse por mais 10 min.\n7. Sirva com polenta cremosa.",
        calorias: 220,
        tempo: "60 minutos",
        porcoes: "4 porções",
        dificuldade: "Médio",
        gordura: "10g",
        proteinas: "5g",
        carboidratos: "30g",
        dicas: "Adicione fatias de batata-doce para variedade. Sirva com queijo feta para sabor extra."
    }
];

const receitasTarde = [
    {
        nome: "Smoothie de Frutas Vermelhas",
        ingredientes: ["1 xícara de frutas vermelhas congeladas (morango, framboesa, amora)", "1/2 xícara de iogurte natural", "1/2 xícara de leite (ou leite vegetal)", "1 colher de sopa de mel ou xarope de bordo", "Folhas de hortelã para decorar"],
        preparo: "1. Coloque todas as frutas congeladas no liquidificador.\n2. Adicione o iogurte, o leite e o mel.\n3. Bata em velocidade alta por 1-2 minutos até obter uma textura cremosa.\n4. Se necessário, adicione mais leite para ajustar a consistência.\n5. Despeje em um copo alto e decore com folhas de hortelã.\n6. Sirva imediatamente com um canudo reutilizável.",
        calorias: 180,
        tempo: "5 minutos",
        porcoes: "1 porção",
        dificuldade: "Fácil",
        gordura: "2g",
        proteinas: "6g",
        carboidratos: "35g",
        dicas: "Para um smoothie mais nutritivo, adicione uma colher de semente de linhaça ou chia. Se preferir mais doce, aumente a quantidade de mel."
    },
    {
        nome: "Cookies de Aveia e Banana (Vegetariano)",
        ingredientes: ["2 bananas maduras amassadas", "1 xícara de aveia em flocos", "1/4 de xícara de uvas passas", "1 colher de chá de canela", "1 colher de chá de essência de baunilha", "2 colheres de sopa de chips de chocolate amargo"],
        preparo: "1. Pré-aqueça forno a 180°C.\n2. Misture todos os ingredientes até formar massa homogênea.\n3. Faça bolinhas e achate em assadeira forrada.\n4. Asse por 12-15 min até bordas dourarem.\n5. Deixe esfriar antes de servir.",
        calorias: 120,
        tempo: "25 minutos",
        porcoes: "8 cookies",
        dificuldade: "Fácil",
        gordura: "3g",
        proteinas: "3g",
        carboidratos: "22g",
        dicas: "Adicione nozes picadas para crocância. Substitua chips de chocolate por frutas secas para versão mais saudável."
    },
    {
        nome: "Pão de Queijo Fit",
        ingredientes: ["1 xícara de polvilho doce", "1/2 xícara de queijo minas light ralado", "1/2 xícara de requeijão light", "1 ovo", "1 colher de chá de fermento", "Orégano"],
        preparo: "1. Pré-aqueça forno a 200°C.\n2. Misture todos os ingredientes até formar massa homogênea.\n3. Faça bolinhas e coloque em forma untada.\n4. Asse por 15-20 min até dourarem.\n5. Sirva quente.",
        calorias: 85,
        tempo: "30 minutos",
        porcoes: "10 unidades",
        dificuldade: "Fácil",
        gordura: "3g",
        proteinas: "6g",
        carboidratos: "10g",
        dicas: "Adicione ervas finas ou pimenta calabresa para sabor diferente. Congele cru e asse quando quiser."
    },
    {
        nome: "Bolinho de Frango com Batata-Doce",
        ingredientes: ["1 batata-doce cozida e amassada", "1 peito de frango cozido e desfiado", "1/2 cebola picada", "2 colheres de sopa de salsinha", "1 ovo", "Farinha de rosca integral", "Azeite"],
        preparo: "1. Misture batata, frango, cebola, salsinha e ovo.\n2. Faça bolinhos e passe na farinha de rosca.\n3. Asse em forma untada a 200°C por 20 min.\n4. Vire na metade do tempo.\n5. Sirva com molho de iogurte.",
        calorias: 150,
        tempo: "40 minutos",
        porcoes: "8 bolinhos",
        dificuldade: "Médio",
        gordura: "5g",
        proteinas: "12g",
        carboidratos: "15g",
        dicas: "Substitua frango por grão-de-bico para versão vegana. Adicione cenoura ralada à massa."
    },
    {
        nome: "Barrinha de Cereais Caseira",
        ingredientes: ["1 xícara de aveia", "1/2 xícara de amêndoas picadas", "1/4 de xícara de sementes de abóbora", "1/4 de xícara de uvas passas", "1/4 de xícara de damascos picados", "1/4 de xícara de mel", "2 colheres de sopa de pasta de amendoim"],
        preparo: "1. Pré-aqueça forno a 180°C.\n2. Misture ingredientes secos em uma tigela.\n3. Aqueça mel e pasta de amendoim até líquidos.\n4. Junte mistura seca e mexa bem.\n5. Pressione em forma quadrada forrada.\n6. Asse por 15-20 min.\n7. Corte em barras antes de esfriar completamente.",
        calorias: 180,
        tempo: "30 minutos",
        porcoes: "10 barras",
        dificuldade: "Fácil",
        gordura: "8g",
        proteinas: "5g",
        carboidratos: "25g",
        dicas: "Use diferentes combinações de nozes e frutas secas. Adicione proteína em pó para barrinha proteica."
    },
    {
        nome: "Tapioca Recheada com Banana e Canela",
        ingredientes: ["4 colheres de sopa de goma de tapioca", "1 banana fatiada", "1 colher de chá de canela", "1 colher de chá de óleo de coco", "1 colher de sopa de coco ralado"],
        preparo: "1. Peneire tapioca em frigideira antiaderente quente.\n2. Cozinhe por 2 min, vire e cozinhe mais 1 min.\n3. Recheie com banana, canela e coco ralado.\n4. Dobre e sirva imediatamente.",
        calorias: 210,
        tempo: "10 minutos",
        porcoes: "1 porção",
        dificuldade: "Fácil",
        gordura: "5g",
        proteinas: "1g",
        carboidratos: "45g",
        dicas: "Adicione pasta de amendoim para mais proteína. Use banana congelada para textura de sorvete."
    },
    {
        nome: "Muffins de Ovos e Espinafre",
        ingredientes: ["4 ovos", "1 xícara de espinafre picado", "1/4 de xícara de queijo feta esfarelado", "1/4 de cebola roxa picada", "Sal e pimenta", "Orégano"],
        preparo: "1. Pré-aqueça forno a 180°C.\n2. Misture todos os ingredientes em tigela.\n3. Despeje em forminhas para muffin untadas.\n4. Asse por 20-25 min até firmes.\n5. Deixe esfriar antes de desenformar.",
        calorias: 90,
        tempo: "35 minutos",
        porcoes: "6 muffins",
        dificuldade: "Fácil",
        gordura: "6g",
        proteinas: "7g",
        carboidratos: "2g",
        dicas: "Adicione tomate seco ou azeitonas para sabor mediterrâneo. Congele e aqueça quando precisar."
    },
    {
        nome: "Palitos de Batata-Doce Assados",
        ingredientes: ["2 batatas-doces grandes", "1 colher de sopa de azeite", "1 colher de chá de páprica defumada", "1/2 colher de chá de alho em pó", "Sal marinho", "Alecrim seco"],
        preparo: "1. Pré-aqueça forno a 200°C.\n2. Corte batatas em palitos finos.\n3. Misture com temperos e azeite.\n4. Arrume em assadeira em camada única.\n5. Asse por 25-30 min, virando na metade.\n6. Sirva com homus ou guacamole.",
        calorias: 120,
        tempo: "40 minutos",
        porcoes: "2 porções",
        dificuldade: "Fácil",
        gordura: "4g",
        proteinas: "2g",
        carboidratos: "20g",
        dicas: "Corte uniformemente para cozimento igual. Adicione pimenta caiena para versão picante."
    },
    {
        nome: "Crepioca de Frango Desfiado",
        ingredientes: ["2 colheres de sopa de tapioca", "1 ovo", "1/4 de xícara de frango desfiado", "1 colher de sopa de milho", "Salsinha picada", "Pimenta calabresa"],
        preparo: "1. Misture tapioca e ovo até homogêneo.\n2. Despeje em frigideira antiaderente quente.\n3. Quando começar a dourar, vire.\n4. Recheie com frango, milho e temperos.\n5. Dobre e sirva quente.",
        calorias: 220,
        tempo: "15 minutos",
        porcoes: "1 porção",
        dificuldade: "Fácil",
        gordura: "8g",
        proteinas: "18g",
        carboidratos: "20g",
        dicas: "Use atum ou tofu em vez de frango. Adicione requeijão light para cremosidade."
    },
    {
        nome: "Frozen de Iogurte com Frutas",
        ingredientes: ["2 potes de iogurte natural", "1 xícara de frutas vermelhas congeladas", "1 banana congelada", "1 colher de sopa de mel", "Granola para servir"],
        preparo: "1. Bata todos os ingredientes no processador.\n2. Continue batendo até cremoso.\n3. Coloque em taças e decore com granola.\n4. Sirva imediatamente.",
        calorias: 160,
        tempo: "5 minutos",
        porcoes: "2 porções",
        dificuldade: "Fácil",
        gordura: "2g",
        proteinas: "6g",
        carboidratos: "30g",
        dicas: "Use diferentes combinações de frutas congeladas. Adicione chocolate amargo derretido por cima."
    },
    {
        nome: "Sanduíche de Ricota e Mel",
        ingredientes: ["2 fatias de pão integral", "3 colheres de ricota fresca", "1 colher de sopa de mel", "Canela em pó", "Nozes picadas"],
        preparo: "1. Toque levemente o pão.\n2. Espalhe ricota sobre uma fatia.\n3. Regue com mel e polvilhe canela e nozes.\n4. Cubra com outra fatia de pão e corte ao meio.",
        calorias: 250,
        tempo: "5 minutos",
        porcoes: "1 porção",
        dificuldade: "Fácil",
        gordura: "8g",
        proteinas: "10g",
        carboidratos: "35g",
        dicas: "Adicione fatias de pera ou maçã para crocância. Use pão de centeio para sabor diferenciado."
    },
    {
        nome: "Bolinho de Chuva Saudável",
        ingredientes: ["1 xícara de farinha integral", "1 ovo", "1/2 xícara de leite", "1 colher de chá de fermento", "1 banana amassada", "Canela", "Óleo de coco"],
        preparo: "1. Misture todos os ingredientes até massa homogênea.\n2. Aqueça óleo em panela funda.\n3. Frite colheradas de massa até dourarem.\n4. Escorra em papel toalha.\n5. Polvilhe com canela e açúcar de coco.",
        calorias: 85,
        tempo: "20 minutos",
        porcoes: "10 bolinhos",
        dificuldade: "Fácil",
        gordura: "3g",
        proteinas: "3g",
        carboidratos: "12g",
        dicas: "Asse em forminha untada para versão light. Adicione gotas de chocolate ou frutas secas."
    },
    {
        nome: "Veggie Wrap (Vegano)",
        ingredientes: ["1 tortilha integral grande", "2 colheres de homus", "1/4 de abacate fatiado", "1/2 cenoura ralada", "1/4 de pepino em tiras", "Folhas de espinafre", "Broto de alfafa"],
        preparo: "1. Espalhe homus sobre a tortilha.\n2. Arrume todos os vegetais em camadas.\n3. Enrole firmemente.\n4. Corte ao meio e sirva com palito para manter formato.",
        calorias: 280,
        tempo: "10 minutos",
        porcoes: "1 porção",
        dificuldade: "Fácil",
        gordura: "15g",
        proteinas: "8g",
        carboidratos: "30g",
        dicas: "Adicione tofu grelhado ou grão-de-bico para mais proteína. Use diferentes vegetais crus."
    },
    {
        nome: "Maçã Assada com Canela",
        ingredientes: ["2 maçãs vermelhas", "2 colheres de sopa de aveia", "1 colher de sopa de nozes picadas", "1 colher de sopa de mel", "1 colher de chá de canela", "1 colher de chá de manteiga"],
        preparo: "1. Retire miolo das maçãs mantendo base intacta.\n2. Misture aveia, nozes, mel e metade da canela.\n3. Recheie as maçãs com a mistura.\n4. Coloque manteiga sobre cada maçã.\n5. Asse a 180°C por 25-30 min.\n6. Polvilhe canela restante antes de servir.",
        calorias: 180,
        tempo: "40 minutos",
        porcoes: "2 porções",
        dificuldade: "Fácil",
        gordura: "6g",
        proteinas: "2g",
        carboidratos: "35g",
        dicas: "Sirva com iogurte grego ou sorvete de coco. Adicione passas ou cranberries ao recheio."
    },
    {
        nome: "Picolé de Iogurte e Frutas",
        ingredientes: ["1 pote de iogurte natural", "1/2 xícara de frutas picadas (manga, kiwi, morango)", "1 colher de sopa de mel", "Forminhas para picolé"],
        preparo: "1. Misture iogurte e mel.\n2. Distribua frutas nas forminhas.\n3. Despeje iogurte sobre as frutas.\n4. Insira palitos e congele por 4 horas.\n5. Para desenformar, passe forminhas em água morna.",
        calorias: 70,
        tempo: "10 minutos (mais tempo de congelamento)",
        porcoes: "4 picolés",
        dificuldade: "Fácil",
        gordura: "1g",
        proteinas: "3g",
        carboidratos: "12g",
        dicas: "Faça camadas alternadas de iogurte e frutas. Use frutas congeladas para textura mais cremosa."
    }
];

const receitasNoite = [
    {
        nome: "Sopa de Legumes",
        ingredientes: ["2 batatas médias descascadas e picadas", "2 cenouras médias descascadas e picadas", "1 abobrinha média picada", "1 cebola picada", "2 dentes de alho picados", "1 litro de caldo de legumes caseiro", "2 colheres de sopa de azeite", "Sal e pimenta a gosto", "Salsinha fresca picada", "1 folha de louro"],
        preparo: "1. Em uma panela grande, aqueça o azeite em fogo médio.\n2. Adicione a cebola e o alho, refogue por 2-3 minutos até perfumar.\n3. Acrescente as batatas e cenouras, mexendo bem.\n4. Refogue por mais 5 minutos.\n5. Adicione o caldo de legumes e a folha de louro.\n6. Deixe ferver, reduza o fogo e cozinhe por 15 minutos com a panela semi-tampada.\n7. Adicione a abobrinha e cozinhe por mais 10 minutos.\n8. Tempere com sal e pimenta.\n9. Retire a folha de louro.\n10. Sirva quente, polvilhada com salsinha fresca.",
        calorias: 150,
        tempo: "40 minutos",
        porcoes: "4 porções",
        dificuldade: "Fácil",
        gordura: "1g",
        proteinas: "4g",
        carboidratos: "32g",
        dicas: "Para uma sopa cremosa, bata metade da sopa no liquidificador antes de servir. Adicione proteína com cubos de frango cozido ou grão-de-bico."
    },
    {
        nome: "Quiche de Espinafre sem Massa (Vegetariano)",
        ingredientes: ["4 ovos", "1 xícara de leite desnatado", "2 xícaras de espinafre fresco", "1/2 cebola picada", "1/2 xícara de queijo minas light picado", "Noz-moscada", "Sal e pimenta"],
        preparo: "1. Pré-aqueça forno a 180°C.\n2. Refogue cebola e espinafre em frigideira.\n3. Bata ovos, leite e temperos.\n4. Em refratário, distribua espinafre e queijo.\n5. Despeje mistura de ovos.\n6. Asse por 30-35 min até firmar.\n7. Deixe descansar 5 min antes de cortar.",
        calorias: 180,
        tempo: "45 minutos",
        porcoes: "4 fatias",
        dificuldade: "Fácil",
        gordura: "10g",
        proteinas: "14g",
        carboidratos: "8g",
        dicas: "Adicione cogumelos ou tomate seco. Sirva com salada verde para refeição leve."
    },
    {
        nome: "Frango Grelhado com Brócolis",
        ingredientes: ["2 filés de frango (150g cada)", "1 cabeça de brócolis", "2 dentes de alho picados", "1 colher de sopa de azeite", "Suco de 1 limão", "Páprica", "Sal e pimenta"],
        preparo: "1. Tempere frango com suco de limão, alho, páprica, sal e pimenta.\n2. Grelhe em frigideira 6-7 min cada lado.\n3. Cozinhe brócolis no vapor por 5 min.\n4. Salteie brócolis com azeite e alho por 2 min.\n5. Sirva frango sobre cama de brócolis.",
        calorias: 280,
        tempo: "25 minutos",
        porcoes: "2 porções",
        dificuldade: "Fácil",
        gordura: "10g",
        proteinas: "40g",
        carboidratos: "10g",
        dicas: "Marine frango por 30 min para mais sabor. Adicione batata-doce assada como acompanhamento."
    },
    {
        nome: "Salada de Lentilhas com Atum",
        ingredientes: ["1 xícara de lentilhas cozidas", "1 lata de atum light escorrido", "1/2 pepino picado", "1/2 pimentão vermelho picado", "2 colheres de sopa de azeitonas picadas", "Suco de 1 limão", "1 colher de sopa de azeite", "Hortelã fresca"],
        preparo: "1. Misture todos os ingredientes em tigela grande.\n2. Tempere com suco de limão, azeite, sal e pimenta.\n3. Deixe na geladeira por 30 min.\n4. Finalize com hortelã picada antes de servir.",
        calorias: 300,
        tempo: "15 minutos",
        porcoes: "2 porções",
        dificuldade: "Fácil",
        gordura: "10g",
        proteinas: "25g",
        carboidratos: "30g",
        dicas: "Adicione ovo cozido picado para mais proteína. Use grão-de-bico em vez de lentilhas para variedade."
    },
    {
        nome: "Berinjela Recheada (Vegetariano)",
        ingredientes: ["2 berinjelas médias", "1 xícara de quinoa cozida", "1/2 cebola picada", "2 tomates picados", "1/2 xícara de queijo minas light", "Manjericão fresco", "Azeite", "Nozes picadas"],
        preparo: "1. Corte berinjelas ao meio e retire polpa.\n2. Asse cascas a 200°C por 10 min.\n3. Refogue polpa picada com cebola e tomate.\n4. Misture quinoa, queijo, manjericão e temperos.\n5. Recheie as cascas e polvilhe nozes.\n6. Asse por 20 min até gratinar.\n7. Sirva com salada verde.",
        calorias: 320,
        tempo: "50 minutos",
        porcoes: "4 metades",
        dificuldade: "Médio",
        gordura: "15g",
        proteinas: "12g",
        carboidratos: "35g",
        dicas: "Para versão vegana, substitua queijo por tofu amassado. Adicione cogumelos ao recheio."
    },
    {
        nome: "Peixe Assado com Legumes",
        ingredientes: ["2 filés de pescada (150g cada)", "1 abobrinha em rodelas", "1 cenoura em rodelas finas", "1 cebola em gomos", "Suco de 1 limão", "Azeite", "Ervas finas", "Papel manteiga"],
        preparo: "1. Tempere peixe com suco de limão e ervas.\n2. Em papel manteiga, arrume legumes.\n3. Coloque peixe sobre legumes e regue com azeite.\n4. Feche o papel formando pacote.\n5. Asse a 200°C por 20 min.\n6. Abra cuidadosamente antes de servir.",
        calorias: 250,
        tempo: "30 minutos",
        porcoes: "2 porções",
        dificuldade: "Fácil",
        gordura: "8g",
        proteinas: "30g",
        carboidratos: "15g",
        dicas: "Use diferentes peixes brancos. Adicione tomate cereja e azeitonas para sabor mediterrâneo."
    },
    {
        nome: "Strogonoff de Cogumelos (Vegano)",
        ingredientes: ["300g de cogumelos paris fatiados", "1 cebola picada", "2 dentes de alho", "1 colher de sopa de extrato de tomate", "1 xícara de creme de castanhas", "1 colher de sopa de mostarda dijon", "Salsinha", "Arroz integral"],
        preparo: "1. Refogue cebola e alho em azeite.\n2. Adicione cogumelos e cozinhe até murchar.\n3. Incorpore extrato de tomate e mostarda.\n4. Adicione creme de castanhas e cozinhe por 5 min.\n5. Tempere com sal, pimenta e salsinha.\n6. Sirva com arroz integral e batata palha de forno.",
        calorias: 280,
        tempo: "25 minutos",
        porcoes: "2 porções",
        dificuldade: "Médio",
        gordura: "18g",
        proteinas: "8g",
        carboidratos: "25g",
        dicas: "Adicione palmito picado para variedade. Use creme de soja caso não tenha castanhas."
    },
    {
        nome: "Frango Xadrez Light",
        ingredientes: ["400g de peito de frango em cubos", "1 pimentão verde em cubos", "1 pimentão vermelho em cubos", "1 cebola em cubos", "1 colher de sopa de gengibre ralado", "2 colheres de sopa de molho shoyu light", "1 colher de chá de óleo de gergelim", "Castanha de caju"],
        preparo: "1. Tempere frango com shoyu e reserve.\n2. Refogue vegetais em wok com pouco óleo.\n3. Adicione frango e cozinhe até dourado.\n4. Finalize com gergelim e cajus.\n5. Sirva com arroz integral.",
        calorias: 320,
        tempo: "30 minutos",
        porcoes: "3 porções",
        dificuldade: "Médio",
        gordura: "10g",
        proteinas: "35g",
        carboidratos: "20g",
        dicas: "Adicione abacaxi fresco para toque agridoce. Use amendoim se não tiver castanha de caju."
    },
    {
        nome: "Nhoque de Batata-Doce com Manjericão",
        ingredientes: ["2 batatas-doces cozidas", "1 ovo", "3/4 de xícara de farinha integral", "Sal", "Molho de tomate caseiro", "Folhas de manjericão"],
        preparo: "1. Amasse batatas ainda quentes.\n2. Misture ovo, farinha e sal até massa homogênea.\n3. Faça rolinhos e corte em pedaços.\n4. Cozinhe em água fervente até subirem.\n5. Escorra e sirve com molho de tomate e manjericão.",
        calorias: 380,
        tempo: "50 minutos",
        porcoes: "3 porções",
        dificuldade: "Médio",
        gordura: "5g",
        proteinas: "10g",
        carboidratos: "75g",
        dicas: "Para versão vegana, substitua ovo por 1 colher de linhaça moída hidratada. Gratine com queijo cottage."
    },
    {
        nome: "Wrap de Alface com Frango",
        ingredientes: ["8 folhas grandes de alface americana", "1 peito de frango grelhado desfiado", "1/2 pepino em palito", "1 cenoura ralada", "1 abacate fatiado", "Molho: iogurte grego, suco de limão, endro"],
        preparo: "1. Prepare molho misturando ingredientes.\n2. Arrume folhas de alface como concha.\n3. Coloque frango, vegetais e abacate.\n4. Regue com molho.\n5. Enrole como tacos e sirva.",
        calorias: 280,
        tempo: "20 minutos",
        porcoes: "2 porções",
        dificuldade: "Fácil",
        gordura: "15g",
        proteinas: "25g",
        carboidratos: "15g",
        dicas: "Substitua frango por grão-de-bico temperado. Adicione quinoa cozida para mais nutrientes."
    },
    {
        nome: "Omelete de Forno com Vegetais",
        ingredientes: ["4 ovos", "1/2 xícara de leite", "1/2 xícara de brócolis cozido", "1/4 de xícara de tomate picado", "2 colheres de sopa de queijo ralado", "Cebolinha", "Manteiga para untar"],
        preparo: "1. Pré-aqueça forno a 180°C.\n2. Bata ovos e leite.\n3. Misture vegetais e cebolinha.\n4. Despeje em refratário untado.\n5. Polvilhe queijo.\n6. Asse por 20-25 min até firmar.\n7. Corte em quadrados.",
        calorias: 180,
        tempo: "35 minutos",
        porcoes: "4 porções",
        dificuldade: "Fácil",
        gordura: "12g",
        proteinas: "12g",
        carboidratos: "5g",
        dicas: "Adicione espinafre ou cogumelos. Sirva com salada para jantar leve."
    },
    {
        nome: "Abobrinha Recheada com Quinoa (Vegano)",
        ingredientes: ["2 abobrinhas italianas", "1 xícara de quinoa cozida", "1/2 cebola picada", "1 dente de alho", "1/2 pimentão amarelo picado", "2 colheres de sopa de castanhas picadas", "Salsinha", "Molho de tomate"],
        preparo: "1. Corte abobrinhas ao meio e retire polpa.\n2. Asse cascas a 200°C por 10 min.\n3. Refogue polpa picada com vegetais.\n4. Misture quinoa, castanhas e salsinha.\n5. Recheie abobrinhas e cubra com molho.\n6. Asse por 20 min.\n7. Finalize com folhas de manjericão.",
        calorias: 220,
        tempo: "50 minutos",
        porcoes: "4 metades",
        dificuldade: "Médio",
        gordura: "10g",
        proteinas: "8g",
        carboidratos: "30g",
        dicas: "Adicione tofu defumado picado ao recheio. Polvilhe levedura nutricional antes de servir."
    },
    {
        nome: "Salmão ao Molho de Mostarda e Mel",
        ingredientes: ["2 filés de salmão (150g cada)", "2 colheres de sopa de mostarda dijon", "1 colher de sopa de mel", "Suco de 1/2 limão", "Aspargos verdes", "Batata-doce assada"],
        preparo: "1. Misture mostarda, mel e suco de limão.\n2. Pincele salmão com a mistura.\n3. Asse a 200°C por 12-15 min.\n4. Grelhe aspargos com azeite e alho.\n5. Sirva com batata-doce em cubos assada.",
        calorias: 420,
        tempo: "30 minutos",
        porcoes: "2 porções",
        dificuldade: "Fácil",
        gordura: "22g",
        proteinas: "30g",
        carboidratos: "25g",
        dicas: "Adicione raspas de limão antes de servir. Substitua batata-doce por purê de couve-flor para low-carb."
    },
    {
        nome: "Creme de Abóbora com Gengibre",
        ingredientes: ["500g de abóbora cabotiá em cubos", "1 cebola picada", "1 dente de alho", "1 colher de chá de gengibre ralado", "2 xícaras de caldo de legumes", "1/2 xícara de leite de coco", "Noz-moscada", "Sementes de abóbora"],
        preparo: "1. Asse abóbora com azeite a 200°C por 25 min.\n2. Refogue cebola, alho e gengibre.\n3. Adicione abóbora assada e caldo.\n4. Cozinhe por 10 min e bata no liquidificador.\n5. Volte à panela, adicione leite de coco e temperos.\n6. Sirva com sementes de abóbora tostadas.",
        calorias: 180,
        tempo: "45 minutos",
        porcoes: "3 porções",
        dificuldade: "Fácil",
        gordura: "10g",
        proteinas: "4g",
        carboidratos: "20g",
        dicas: "Adicione cenoura para mais doçura. Sirva com croutons integrais caseiros."
    },
    {
        nome: "Frango ao Molho de Laranja",
        ingredientes: ["400g de peito de frango em tiras", "Suco de 2 laranjas", "Raspas de 1 laranja", "1 colher de sopa de mel", "1 colher de sopa de gengibre ralado", "1 pimentão vermelho em tiras", "Broto de bambu", "Gergelim preto"],
        preparo: "1. Doure frango em wok e reserve.\n2. Refogue pimentão por 3 min.\n3. Adicione suco, raspas, mel e gengibre.\n4. Cozinhe até reduzir pela metade.\n5. Volte frango e broto de bambu, cozinhe por 5 min.\n6. Finalize com gergelim.\n7. Sirva com arroz integral.",
        calorias: 350,
        tempo: "30 minutos",
        porcoes: "3 porções",
        dificuldade: "Médio",
        gordura: "8g",
        proteinas: "35g",
        carboidratos: "30g",
        dicas: "Adicione castanhas de caju para crocância. Use abacaxi fresco para versão agridoce."
    }
];


// Elementos do DOM
const chatContainer = document.getElementById('chatContainer');
const responseButtons = document.getElementById('responseButtons');
const statusText = document.getElementById('statusText');
const statusIndicator = document.getElementById('statusIndicator');

// Variáveis de estado
let periodoAtual = '';
let receitasMostradas = [];
let respostasRobo = [
    "Aqui estão minhas sugestões:",
    "Que tal uma destas opções?",
    "Tenho ótimas ideias para você:",
    "Preparei estas sugestões deliciosas:",
    "Veja estas opções saudáveis:",
    "Que tal experimentar uma destas?"
];

// Funções de utilidade
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

function mostrarReceitas(periodo) {
    periodoAtual = periodo;
    const todasReceitas = getReceitasPorPeriodo(periodo);
    
    // Selecionar 2 receitas aleatórias que ainda não foram mostradas
    let receitasDisponiveis = todasReceitas.filter(r => !receitasMostradas.includes(r.nome));
    
    // Se já mostramos todas, reinicia
    if (receitasDisponiveis.length < 2) {
        receitasMostradas = [];
        receitasDisponiveis = todasReceitas;
    }
    
    // Embaralha as receitas disponíveis
    const receitasEmbaralhadas = [...receitasDisponiveis].sort(() => 0.5 - Math.random());
    const receitasSelecionadas = receitasEmbaralhadas.slice(0, 2);
    
    // Adiciona às receitas mostradas
    receitasSelecionadas.forEach(r => receitasMostradas.push(r.nome));
    
    // Mensagem do robô com variação
    const mensagemAleatoria = respostasRobo[Math.floor(Math.random() * respostasRobo.length)];
    adicionarMensagem(mensagemAleatoria, false);
    
    // Exibe as receitas
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
    
    // Adiciona botões de resposta
    const botoes = receitasSelecionadas.map((receita, index) => ({
        texto: `Ver ${receita.nome}`,
        acao: () => mostrarReceitaCompleta(receita)
    }));
    
    botoes.push({
        texto: "Nenhuma dessas, mostrar outras",
        acao: () => mostrarReceitas(periodo),
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
    
    // Botões após mostrar receita completa
    adicionarBotoesResposta([
        { 
            texto: "Ver mais opções", 
            acao: () => mostrarReceitas(periodoAtual)
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

// Inicialização
function iniciarApp() {
    // Simular status online
    setTimeout(() => {
        statusText.textContent = 'Digitando...';
        setTimeout(() => {
            statusText.textContent = 'Online';
            mostrarMenuPrincipal();
        }, 1500);
    }, 500);
}

// Verificar status online/offline
window.addEventListener('online', () => {
    statusText.textContent = 'Online';
    statusIndicator.style.color = '#4CAF50';
});

window.addEventListener('offline', () => {
    statusText.textContent = 'Offline';
    statusIndicator.style.color = '#F44336';
    adicionarMensagem('Estou offline no momento, mas você ainda pode ver as receitas já carregadas!', false);
});

// Iniciar o aplicativo
document.addEventListener('DOMContentLoaded', iniciarApp);