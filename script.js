// Array de receitas para café da manhã (15)
const receitasManha = [
    {
        nome: "Omelete de Espinafre e Queijo Feta",
        ingredientes: ["2 ovos", "1 xícara de espinafre fresco", "2 colheres de queijo feta", "1 colher de chá de azeite", "Sal e pimenta"],
        preparo: "1. Bata os ovos com sal e pimenta. 2. Aqueça o azeite em frigideira antiaderente. 3. Adicione o espinafre e refogue até murchar. 4. Despeje os ovos, espalhe o queijo feta. 5. Cozinhe por 3-4 minutos até firmar. Dobre ao meio e sirva.",
        calorias: 210,
        tempo: "10 minutos",
        porcoes: "1 porção",
        dificuldade: "Fácil",
        gordura: "15g",
        proteinas: "14g",
        carboidratos: "3g",
        dicas: "Adicione tomate picado para mais sabor. Use claras para menos calorias.",
        beneficio: "Rico em proteínas, baixo carboidrato"
    },
    {
        nome: "Vitamina de Abacate Energética",
        ingredientes: ["1/2 abacate", "1 banana", "200ml de leite de amêndoa", "1 colher de chia", "1 colher de mel"],
        preparo: "1. Coloque todos os ingredientes no liquidificador. 2. Bata até ficar homogêneo. 3. Sirva imediatamente.",
        calorias: 280,
        tempo: "5 minutos",
        porcoes: "1 porção",
        dificuldade: "Fácil",
        gordura: "15g",
        proteinas: "5g",
        carboidratos: "35g",
        dicas: "Adicione cubos de gelo para versão refrescante",
        beneficio: "Gorduras saudáveis, muita saciedade"
    },
    {
        nome: "Panqueca de Banana e Aveia",
        ingredientes: ["1 banana", "2 ovos", "3 colheres de aveia", "1 colher de chá de canela"],
        preparo: "1. Amasse a banana. 2. Misture com ovos, aveia e canela. 3. Despeje porções em frigideira quente. 4. Cozinhe 2-3 minutos de cada lado.",
        calorias: 230,
        tempo: "15 minutos",
        porcoes: "2 panquecas",
        dificuldade: "Fácil",
        gordura: "8g",
        proteinas: "10g",
        carboidratos: "30g",
        dicas: "Sirva com frutas frescas",
        beneficio: "Fibras, sem açúcar"
    },
    {
        nome: "Iogurte com Granola Caseira",
        ingredientes: ["1 pote de iogurte grego", "3 colheres de granola caseira", "1/2 xícara de frutas vermelhas", "1 colher de sementes de linhaça"],
        preparo: "1. Em uma tigela, coloque o iogurte. 2. Adicione a granola e as frutas. 3. Polvilhe as sementes.",
        calorias: 250,
        tempo: "5 minutos",
        porcoes: "1 porção",
        dificuldade: "Fácil",
        gordura: "8g",
        proteinas: "15g",
        carboidratos: "30g",
        dicas: "Faça sua granola com aveia, nozes e mel",
        beneficio: "Probióticos, proteína"
    },
    {
        nome: "Tapioca Recheada com Frango",
        ingredientes: ["3 colheres de goma de tapioca", "1/2 xícara de frango desfiado", "1 colher de requeijão light", "Orégano"],
        preparo: "1. Espalhe a goma em frigideira quente. 2. Cozinhe por 2 minutos. 3. Vire e recheie com frango e requeijão. 4. Dobre e sirva.",
        calorias: 280,
        tempo: "10 minutos",
        porcoes: "1 porção",
        dificuldade: "Fácil",
        gordura: "6g",
        proteinas: "22g",
        carboidratos: "35g",
        dicas: "Adicione tomate picado ao recheio",
        beneficio: "Sem glúten, alta proteína"
    },
    {
        nome: "Overnight Oats de Maçã e Canela",
        ingredientes: ["1/2 xícara de aveia", "1/2 xícara de leite", "1/2 maçã ralada", "1 colher de chá de canela", "1 colher de mel"],
        preparo: "1. Misture todos os ingredientes em um pote. 2. Leve à geladeira durante a noite. 3. Sirva frio.",
        calorias: 260,
        tempo: "5 minutos (mais descanso)",
        porcoes: "1 porção",
        dificuldade: "Fácil",
        gordura: "5g",
        proteinas: "8g",
        carboidratos: "45g",
        dicas: "Adicione nozes picadas antes de servir",
        beneficio: "Fibras, preparo antecipado"
    },
    {
        nome: "Ovos Mexidos com Tomate",
        ingredientes: ["2 ovos", "1 tomate picado", "Cebolinha", "1 colher de chá de azeite"],
        preparo: "1. Bata os ovos. 2. Aqueça o azeite. 3. Refogue o tomate por 2 min. 4. Adicione os ovos e mexa até cozinhar. 5. Finalize com cebolinha.",
        calorias: 190,
        tempo: "8 minutos",
        porcoes: "1 porção",
        dificuldade: "Fácil",
        gordura: "13g",
        proteinas: "12g",
        carboidratos: "5g",
        dicas: "Adicione uma pitada de pimenta do reino",
        beneficio: "Proteína de qualidade, baixo carboidrato"
    },
    {
        nome: "Smoothie Verde Energético",
        ingredientes: ["1 banana", "1 xícara de couve", "200ml de água de coco", "1 colher de chia", "Suco de 1/2 limão"],
        preparo: "1. Bata todos os ingredientes no liquidificador. 2. Sirva imediatamente.",
        calorias: 150,
        tempo: "5 minutos",
        porcoes: "1 porção",
        dificuldade: "Fácil",
        gordura: "2g",
        proteinas: "4g",
        carboidratos: "35g",
        dicas: "Adicione gengibre ralado para sabor extra",
        beneficio: "Vitaminas, hidratação"
    },
    {
        nome: "Torrada Integral com Abacate",
        ingredientes: ["2 fatias de pão integral", "1/2 abacate", "Suco de limão", "Sal e pimenta", "Sementes de gergelim"],
        preparo: "1. Toque o pão. 2. Amasse o abacate com limão. 3. Espalhe sobre o pão. 4. Tempere com sal, pimenta e gergelim.",
        calorias: 250,
        tempo: "5 minutos",
        porcoes: "1 porção",
        dificuldade: "Fácil",
        gordura: "15g",
        proteinas: "7g",
        carboidratos: "25g",
        dicas: "Adicione tomate cereja fatiado",
        beneficio: "Gorduras saudáveis, fibras"
    },
    {
        nome: "Pudim de Chia com Frutas",
        ingredientes: ["3 colheres de chia", "1 xícara de leite vegetal", "1 colher de mel", "1/2 xícara de frutas picadas"],
        preparo: "1. Misture chia, leite e mel. 2. Leve à geladeira por 4h. 3. Sirva com frutas.",
        calorias: 180,
        tempo: "5 minutos (mais descanso)",
        porcoes: "1 porção",
        dificuldade: "Fácil",
        gordura: "8g",
        proteinas: "6g",
        carboidratos: "20g",
        dicas: "Faça uma camada de iogurte antes das frutas",
        beneficio: "Ômega-3, antioxidantes"
    },
    {
        nome: "Crepioca de Queijo e Tomate",
        ingredientes: ["2 colheres de tapioca", "1 ovo", "2 colheres de queijo minas", "Tomate picado", "Orégano"],
        preparo: "1. Misture tapioca e ovo. 2. Despeje na frigideira. 3. Quando dourar, vire. 4. Recheie com queijo e tomate. 5. Dobre e sirva.",
        calorias: 220,
        tempo: "10 minutos",
        porcoes: "1 porção",
        dificuldade: "Fácil",
        gordura: "10g",
        proteinas: "12g",
        carboidratos: "20g",
        dicas: "Adicione manjericão fresco",
        beneficio: "Sem glúten, proteína"
    },
    {
        nome: "Waffle Integral Proteico",
        ingredientes: ["1/2 xícara de aveia", "1 ovo", "1/4 de xícara de leite", "1 colher de proteína em pó", "1 colher de chá de fermento"],
        preparo: "1. Bata todos os ingredientes. 2. Despeje na waffleira. 3. Cozinhe por 5 minutos. 4. Sirva com frutas.",
        calorias: 280,
        tempo: "15 minutos",
        porcoes: "1 waffle",
        dificuldade: "Fácil",
        gordura: "10g",
        proteinas: "20g",
        carboidratos: "25g",
        dicas: "Use banana amassada para substituir o ovo",
        beneficio: "Alta proteína, saciedade"
    },
    {
        nome: "Ovos Benedict Light",
        ingredientes: ["2 ovos", "1 muffin integral", "2 fatias de peito de peru", "1/4 de abacate", "Molho de iogurte"],
        preparo: "1. Prepare ovos pochê. 2. Toque o muffin. 3. Monte com peru, abacate e ovos. 4. Regue com molho de iogurte.",
        calorias: 320,
        tempo: "20 minutos",
        porcoes: "1 porção",
        dificuldade: "Médio",
        gordura: "18g",
        proteinas: "22g",
        carboidratos: "20g",
        dicas: "Adicione espinafre fresco",
        beneficio: "Proteína completa, gorduras boas"
    },
    {
        nome: "Shakshuka Vegetariana",
        ingredientes: ["2 ovos", "1 lata de tomates pelados", "1/2 pimentão", "1/2 cebola", "Cominho", "Coentro"],
        preparo: "1. Refogue cebola e pimentão. 2. Adicione tomates e cominho. 3. Abra espaço para os ovos. 4. Cozinhe até ovos firmarem. 5. Finalize com coentro.",
        calorias: 300,
        tempo: "25 minutos",
        porcoes: "2 porções",
        dificuldade: "Médio",
        gordura: "18g",
        proteinas: "14g",
        carboidratos: "20g",
        dicas: "Sirva com pão integral",
        beneficio: "Vegetais, proteína"
    },
    {
        nome: "Bolo de Caneca Proteico",
        ingredientes: ["1 ovo", "2 colheres de aveia", "1 colher de proteína em pó", "1/2 banana", "1 colher de fermento"],
        preparo: "1. Misture todos os ingredientes. 2. Coloque em caneca. 3. Microondas por 2 minutos. 4. Espere esfriar.",
        calorias: 250,
        tempo: "5 minutos",
        porcoes: "1 porção",
        dificuldade: "Fácil",
        gordura: "8g",
        proteinas: "20g",
        carboidratos: "25g",
        dicas: "Adicione gotas de chocolate 70%",
        beneficio: "Alta proteína, preparo rápido"
    }
];

// Array de receitas para almoço (15)
const receitasAlmoco = [
    {
        nome: "Frango Grelhado com Legumes",
        ingredientes: ["1 filé de frango", "1 abobrinha", "1 cenoura", "1 pimentão", "Azeite", "Ervas finas"],
        preparo: "1. Tempere o frango. 2. Corte legumes em rodelas. 3. Grelhe frango 6-7 min cada lado. 4. Asse legumes com azeite e ervas por 20 min.",
        calorias: 350,
        tempo: "30 minutos",
        porcoes: "1 porção",
        dificuldade: "Fácil",
        gordura: "12g",
        proteinas: "35g",
        carboidratos: "20g",
        dicas: "Use alecrim fresco para mais sabor",
        beneficio: "Alta proteína, baixa caloria"
    },
    {
        nome: "Bowl de Quinoa com Salmão",
        ingredientes: ["1/2 xícara de quinoa", "1 filé de salmão", "1 beterraba", "1/2 abacate", "Mix de folhas", "Molho de iogurte"],
        preparo: "1. Cozinhe quinoa. 2. Asse salmão e beterraba. 3. Monte bowl com quinoa, folhas, salmão e beterraba. 4. Adicione abacate e molho.",
        calorias: 480,
        tempo: "35 minutos",
        porcoes: "1 porção",
        dificuldade: "Médio",
        gordura: "25g",
        proteinas: "30g",
        carboidratos: "35g",
        dicas: "Toste a quinoa antes de cozinhar",
        beneficio: "Ômega-3, fibras"
    },
    {
        nome: "Moqueca de Peixe Light",
        ingredientes: ["2 filés de peixe branco", "1 cebola", "1 pimentão", "1 tomate", "Leite de coco light", "Coentro", "Dendê"],
        preparo: "1. Refogue cebola, pimentão e tomate. 2. Adicione peixe e cozinhe por 5 min. 3. Acrescente leite de coco. 4. Cozinhe por 10 min. 5. Finalize com coentro e dendê.",
        calorias: 320,
        tempo: "30 minutos",
        porcoes: "2 porções",
        dificuldade: "Médio",
        gordura: "15g",
        proteinas: "30g",
        carboidratos: "15g",
        dicas: "Sirva com arroz integral",
        beneficio: "Proteína magra, gorduras boas"
    },
    {
        nome: "Lentilha com Legumes",
        ingredientes: ["1 xícara de lentilhas", "1 cenoura", "1 abobrinha", "1 tomate", "Cebola", "Alho", "Louro"],
        preparo: "1. Refogue cebola e alho. 2. Adicione legumes picados. 3. Acrescente lentilhas e água. 4. Cozinhe por 25 min. 5. Ajuste temperos.",
        calorias: 350,
        tempo: "40 minutos",
        porcoes: "3 porções",
        dificuldade: "Fácil",
        gordura: "3g",
        proteinas: "18g",
        carboidratos: "60g",
        dicas: "Adicione espinafre no final",
        beneficio: "Fibras, proteína vegetal"
    },
    {
        nome: "Frango Xadrez Light",
        ingredientes: ["300g de frango", "1 pimentão", "1 cebola", "Brócolis", "Molho shoyu light", "Gengibre", "Alho"],
        preparo: "1. Corte frango e legumes. 2. Refogue alho e gengibre. 3. Doure frango. 4. Adicione legumes e cozinhe. 5. Tempere com shoyu.",
        calorias: 320,
        tempo: "30 minutos",
        porcoes: "3 porções",
        dificuldade: "Médio",
        gordura: "8g",
        proteinas: "35g",
        carboidratos: "25g",
        dicas: "Adicione castanha de caju",
        beneficio: "Baixa caloria, proteína"
    },
    {
        nome: "Risoto de Cogumelos Fit",
        ingredientes: ["1 xícara de arroz arbóreo", "300g de cogumelos", "Caldo de legumes", "Cebola", "Alho", "Salsinha", "Queijo parmesão"],
        preparo: "1. Refogue cebola e alho. 2. Adicione arroz. 3. Acrescente caldo aos poucos. 4. Quando quase pronto, adicione cogumelos. 5. Finalize com salsinha e parmesão.",
        calorias: 380,
        tempo: "35 minutos",
        porcoes: "3 porções",
        dificuldade: "Médio",
        gordura: "12g",
        proteinas: "10g",
        carboidratos: "55g",
        dicas: "Use mix de cogumelos",
        beneficio: "Fibras, baixa gordura"
    },
    {
        nome: "Peixe Assado com Batata-Doce",
        ingredientes: ["2 filés de peixe", "2 batatas-doces", "Aspargos", "Limão", "Ervas finas", "Azeite"],
        preparo: "1. Corte batatas em cubos. 2. Tempere peixe com limão e ervas. 3. Arrume em assadeira com batatas e aspargos. 4. Regue com azeite. 5. Asse a 200°C por 25 min.",
        calorias: 350,
        tempo: "40 minutos",
        porcoes: "2 porções",
        dificuldade: "Fácil",
        gordura: "10g",
        proteinas: "30g",
        carboidratos: "35g",
        dicas: "Adicione tomate cereja",
        beneficio: "Ômega-3, baixa caloria"
    },
    {
        nome: "Strogonoff de Frango Light",
        ingredientes: ["400g de frango", "1 cebola", "200g de cogumelos", "1 colher de mostarda", "1 caixa de creme de leite light", "Molho de tomate"],
        preparo: "1. Doure frango e reserve. 2. Refogue cebola e cogumelos. 3. Volte frango. 4. Adicione molho de tomate e mostarda. 5. Cozinhe por 10 min. 6. Desligue e misture creme.",
        calorias: 380,
        tempo: "35 minutos",
        porcoes: "3 porções",
        dificuldade: "Médio",
        gordura: "18g",
        proteinas: "35g",
        carboidratos: "15g",
        dicas: "Sirva com arroz integral",
        beneficio: "Proteína, sem fritura"
    },
    {
        nome: "Berinjela Recheada",
        ingredientes: ["2 berinjelas", "300g de carne moída magra", "1 cebola", "2 tomates", "Queijo minas", "Manjericão"],
        preparo: "1. Corte berinjelas ao meio e retire polpa. 2. Refogue carne com cebola, tomate e polpa. 3. Recheie as berinjelas. 4. Cubra com queijo. 5. Asse a 180°C por 30 min.",
        calorias: 320,
        tempo: "50 minutos",
        porcoes: "4 porções",
        dificuldade: "Médio",
        gordura: "15g",
        proteinas: "25g",
        carboidratos: "25g",
        dicas: "Adicione ricota ao recheio",
        beneficio: "Vegetais, proteína"
    },
    {
        nome: "Salada de Grão-de-Bico com Atum",
        ingredientes: ["1 lata de grão-de-bico", "1 lata de atum", "Pepino", "Tomate", "Cebola roxa", "Azeitonas", "Azeite", "Limão"],
        preparo: "1. Misture todos os ingredientes. 2. Tempere com azeite e limão. 3. Deixe gelar por 30 min.",
        calorias: 280,
        tempo: "15 minutos",
        porcoes: "2 porções",
        dificuldade: "Fácil",
        gordura: "12g",
        proteinas: "20g",
        carboidratos: "25g",
        dicas: "Adicione pimentão amarelo",
        beneficio: "Proteína, fibras"
    },
    {
        nome: "Frango ao Curry com Legumes",
        ingredientes: ["400g de frango", "1 batata-doce", "1 cenoura", "1 cebola", "1 colher de curry", "Leite de coco light"],
        preparo: "1. Doure frango e reserve. 2. Refogue legumes. 3. Volte frango. 4. Adicione curry e leite de coco. 5. Cozinhe por 15 min.",
        calorias: 380,
        tempo: "40 minutos",
        porcoes: "3 porções",
        dificuldade: "Médio",
        gordura: "15g",
        proteinas: "30g",
        carboidratos: "30g",
        dicas: "Adicione ervilhas no final",
        beneficio: "Anti-inflamatório, proteína"
    },
    {
        nome: "Escondidinho de Carne Moída",
        ingredientes: ["500g de carne moída", "1 kg de batata-doce", "Queijo cottage", "Cebola", "Alho", "Molho de tomate"],
        preparo: "1. Cozinhe e amasse batata-doce. 2. Refogue carne com cebola e alho. 3. Em refratário, coloque carne, cubra com purê e queijo. 4. Asse a 180°C por 20 min.",
        calorias: 380,
        tempo: "60 minutos",
        porcoes: "4 porções",
        dificuldade: "Médio",
        gordura: "15g",
        proteinas: "25g",
        carboidratos: "40g",
        dicas: "Adicione milho ao recheio",
        beneficio: "Fibras, proteína"
    },
    {
        nome: "Tacos de Frango com Abacate",
        ingredientes: ["8 tortilhas de milho", "300g de frango desfiado", "1 abacate", "Repolho roxo", "Coentro", "Molho de iogurte"],
        preparo: "1. Reaqueça frango. 2. Amasse abacate. 3. Monte tacos com frango, abacate, repolho e coentro. 4. Regue com molho.",
        calorias: 380,
        tempo: "20 minutos",
        porcoes: "2 porções",
        dificuldade: "Fácil",
        gordura: "18g",
        proteinas: "25g",
        carboidratos: "35g",
        dicas: "Adicione feijão preto",
        beneficio: "Gorduras boas, proteína"
    },
    {
        nome: "Salmão ao Molho de Mostarda",
        ingredientes: ["2 filés de salmão", "2 colheres de mostarda", "Suco de limão", "Mel", "Aspargos", "Batata assada"],
        preparo: "1. Misture mostarda, suco de limão e mel. 2. Pincele salmão. 3. Asse a 200°C por 15 min. 4. Sirva com aspargos e batata.",
        calorias: 450,
        tempo: "30 minutos",
        porcoes: "2 porções",
        dificuldade: "Fácil",
        gordura: "25g",
        proteinas: "35g",
        carboidratos: "25g",
        dicas: "Adicione endro ao molho",
        beneficio: "Ômega-3, proteína"
    },
    {
        nome: "Ratatouille Assado",
        ingredientes: ["1 berinjela", "1 abobrinha", "1 pimentão", "2 tomates", "Cebola", "Alho", "Manjericão", "Azeite"],
        preparo: "1. Corte vegetais em rodelas. 2. Arrume em camadas em refratário. 3. Regue com azeite e temperos. 4. Asse a 180°C por 40 min. 5. Finalize com manjericão.",
        calorias: 220,
        tempo: "50 minutos",
        porcoes: "4 porções",
        dificuldade: "Médio",
        gordura: "10g",
        proteinas: "5g",
        carboidratos: "30g",
        dicas: "Sirva com queijo feta",
        beneficio: "Vegetais, baixa caloria"
    }
];

// Array de receitas para lanche da tarde (15)
const receitasTarde = [
    {
        nome: "Cookies de Aveia e Banana",
        ingredientes: ["2 bananas", "1 xícara de aveia", "2 colheres de uvas passas", "Canela", "Gotas de chocolate 70%"],
        preparo: "1. Amasse bananas. 2. Misture com outros ingredientes. 3. Forme cookies. 4. Asse a 180°C por 15 min.",
        calorias: 120,
        tempo: "25 minutos",
        porcoes: "8 cookies",
        dificuldade: "Fácil",
        gordura: "3g",
        proteinas: "3g",
        carboidratos: "22g",
        dicas: "Adicione nozes picadas",
        beneficio: "Sem açúcar, fibras"
    },
    {
        nome: "Smoothie de Frutas Vermelhas",
        ingredientes: ["1 xícara de frutas vermelhas", "1/2 banana", "1/2 xícara de iogurte", "1 colher de mel"],
        preparo: "1. Bata todos os ingredientes. 2. Sirva gelado.",
        calorias: 180,
        tempo: "5 minutos",
        porcoes: "1 porção",
        dificuldade: "Fácil",
        gordura: "2g",
        proteinas: "6g",
        carboidratos: "35g",
        dicas: "Adicione linhaça moída",
        beneficio: "Antioxidantes, probióticos"
    },
    {
        nome: "Pão de Queijo Fit",
        ingredientes: ["1 xícara de polvilho", "1/2 xícara de queijo minas", "1/2 xícara de requeijão light", "1 ovo", "Fermento"],
        preparo: "1. Misture todos os ingredientes. 2. Faça bolinhas. 3. Asse a 200°C por 15 min.",
        calorias: 85,
        tempo: "30 minutos",
        porcoes: "10 unidades",
        dificuldade: "Fácil",
        gordura: "3g",
        proteinas: "6g",
        carboidratos: "10g",
        dicas: "Adicione orégano",
        beneficio: "Sem glúten, proteína"
    },
    {
        nome: "Bolinho de Frango com Batata-Doce",
        ingredientes: ["1 batata-doce cozida", "1 peito de frango cozido", "1 ovo", "Farinha de rosca integral"],
        preparo: "1. Amasse batata. 2. Misture com frango desfiado e ovo. 3. Faça bolinhos. 4. Passe na farinha. 5. Asse por 20 min.",
        calorias: 150,
        tempo: "40 minutos",
        porcoes: "8 bolinhos",
        dificuldade: "Médio",
        gordura: "5g",
        proteinas: "12g",
        carboidratos: "15g",
        dicas: "Sirva com molho de iogurte",
        beneficio: "Proteína, fibras"
    },
    {
        nome: "Barrinha de Cereais Caseira",
        ingredientes: ["1 xícara de aveia", "1/2 xícara de amêndoas", "1/4 de xícara de sementes", "1/4 de xícara de tâmaras", "2 colheres de mel"],
        preparo: "1. Misture secos. 2. Aqueça mel. 3. Junte e pressione em forma. 4. Asse por 15 min. 5. Corte em barras.",
        calorias: 180,
        tempo: "30 minutos",
        porcoes: "10 barras",
        dificuldade: "Fácil",
        gordura: "8g",
        proteinas: "5g",
        carboidratos: "25g",
        dicas: "Adicione coco ralado",
        beneficio: "Energia, fibras"
    },
    {
        nome: "Tapioca com Banana e Canela",
        ingredientes: ["3 colheres de tapioca", "1 banana", "Canela", "Coco ralado"],
        preparo: "1. Prepare tapioca. 2. Recheie com banana e canela. 3. Polvilhe coco ralado.",
        calorias: 210,
        tempo: "10 minutos",
        porcoes: "1 porção",
        dificuldade: "Fácil",
        gordura: "5g",
        proteinas: "1g",
        carboidratos: "45g",
        dicas: "Adicione pasta de amendoim",
        beneficio: "Sem glúten, energia rápida"
    },
    {
        nome: "Muffins de Ovos e Espinafre",
        ingredientes: ["4 ovos", "1 xícara de espinafre", "1/4 de xícara de queijo feta", "Cebolinha"],
        preparo: "1. Pré-aqueça forno. 2. Misture ingredientes. 3. Despeje em forminhas. 4. Asse por 20 min.",
        calorias: 90,
        tempo: "30 minutos",
        porcoes: "6 muffins",
        dificuldade: "Fácil",
        gordura: "6g",
        proteinas: "7g",
        carboidratos: "2g",
        dicas: "Adicione tomate seco",
        beneficio: "Proteína, baixo carboidrato"
    },
    {
        nome: "Palitos de Batata-Doce Assados",
        ingredientes: ["2 batatas-doces", "1 colher de azeite", "Páprica", "Alho em pó", "Alecrim"],
        preparo: "1. Corte em palitos. 2. Misture com temperos e azeite. 3. Asse a 200°C por 25 min.",
        calorias: 120,
        tempo: "35 minutos",
        porcoes: "2 porções",
        dificuldade: "Fácil",
        gordura: "4g",
        proteinas: "2g",
        carboidratos: "20g",
        dicas: "Sirva com homus",
        beneficio: "Fibras, vitamina A"
    },
    {
        nome: "Sanduíche de Ricota e Mel",
        ingredientes: ["2 fatias de pão integral", "3 colheres de ricota", "1 colher de mel", "Canela", "Nozes"],
        preparo: "1. Espalhe ricota no pão. 2. Regue com mel. 3. Polvilhe canela e nozes.",
        calorias: 250,
        tempo: "5 minutos",
        porcoes: "1 porção",
        dificuldade: "Fácil",
        gordura: "8g",
        proteinas: "10g",
        carboidratos: "35g",
        dicas: "Adicione fatias de maçã",
        beneficio: "Cálcio, energia"
    },
    {
        nome: "Frozen de Iogurte com Frutas",
        ingredientes: ["1 pote de iogurte grego", "1 xícara de frutas congeladas", "1 colher de mel"],
        preparo: "1. Bata no processador. 2. Coloque em taças. 3. Sirva.",
        calorias: 160,
        tempo: "5 minutos",
        porcoes: "2 porções",
        dificuldade: "Fácil",
        gordura: "2g",
        proteinas: "6g",
        carboidratos: "30g",
        dicas: "Adicione granola",
        beneficio: "Probióticos, sem açúcar"
    },
    {
        nome: "Maçã Assada com Canela",
        ingredientes: ["2 maçãs", "2 colheres de aveia", "1 colher de nozes", "1 colher de mel", "Canela"],
        preparo: "1. Retire miolo das maçãs. 2. Misture recheio. 3. Recheie maçãs. 4. Asse a 180°C por 25 min.",
        calorias: 180,
        tempo: "35 minutos",
        porcoes: "2 porções",
        dificuldade: "Fácil",
        gordura: "6g",
        proteinas: "2g",
        carboidratos: "35g",
        dicas: "Sirva com iogurte",
        beneficio: "Fibras, sobremesa saudável"
    },
    {
        nome: "Crepioca de Frango Desfiado",
        ingredientes: ["2 colheres de tapioca", "1 ovo", "1/2 xícara de frango desfiado", "Salsinha"],
        preparo: "1. Prepare crepioca. 2. Recheie com frango. 3. Dobre e sirva.",
        calorias: 220,
        tempo: "15 minutos",
        porcoes: "1 porção",
        dificuldade: "Fácil",
        gordura: "8g",
        proteinas: "18g",
        carboidratos: "20g",
        dicas: "Adicione milho ao recheio",
        beneficio: "Proteína, sem glúten"
    },
    {
        nome: "Picolé de Iogurte e Frutas",
        ingredientes: ["1 pote de iogurte", "1/2 xícara de frutas picadas", "1 colher de mel"],
        preparo: "1. Misture iogurte e mel. 2. Coloque frutas em forminhas. 3. Despeje iogurte. 4. Congele por 4h.",
        calorias: 70,
        tempo: "10 minutos",
        porcoes: "4 picolés",
        dificuldade: "Fácil",
        gordura: "1g",
        proteinas: "3g",
        carboidratos: "12g",
        dicas: "Use diferentes camadas de frutas",
        beneficio: "Probióticos, sobremesa light"
    },
    {
        nome: "Veggie Wrap",
        ingredientes: ["1 tortilha integral", "2 colheres de homus", "1/4 de abacate", "Cenoura ralada", "Pepino", "Folhas verdes"],
        preparo: "1. Espalhe homus na tortilha. 2. Arrume vegetais. 3. Enrole firmemente.",
        calorias: 280,
        tempo: "10 minutos",
        porcoes: "1 porção",
        dificuldade: "Fácil",
        gordura: "15g",
        proteinas: "8g",
        carboidratos: "30g",
        dicas: "Adicione grão-de-bico",
        beneficio: "Vegetais, gorduras boas"
    },
    {
        nome: "Bolinho de Chuva Saudável",
        ingredientes: ["1 xícara de farinha integral", "1 ovo", "1/2 xícara de leite", "1 banana", "Fermento", "Canela"],
        preparo: "1. Misture ingredientes. 2. Frite colheradas em pouco óleo. 3. Escorra. 4. Polvilhe canela.",
        calorias: 85,
        tempo: "20 minutos",
        porcoes: "10 bolinhos",
        dificuldade: "Fácil",
        gordura: "3g",
        proteinas: "3g",
        carboidratos: "12g",
        dicas: "Asse em forno para versão light",
        beneficio: "Fibras, sem açúcar"
    }
];

// Array de receitas para jantar (15)
const receitasNoite = [
    {
        nome: "Sopa de Legumes com Frango",
        ingredientes: ["2 batatas", "2 cenouras", "1 abobrinha", "Cebola", "Alho", "Caldo de legumes", "Peito de frango", "Salsinha"],
        preparo: "1. Refogue cebola e alho. 2. Adicione legumes picados. 3. Acrescente caldo e frango. 4. Cozinhe por 25 min. 5. Finalize com salsinha.",
        calorias: 250,
        tempo: "40 minutos",
        porcoes: "4 porções",
        dificuldade: "Fácil",
        gordura: "5g",
        proteinas: "20g",
        carboidratos: "30g",
        dicas: "Adicione couve picada no final",
        beneficio: "Leve, hidratante"
    },
    {
        nome: "Quiche de Espinafre sem Massa",
        ingredientes: ["4 ovos", "1 xícara de leite", "2 xícaras de espinafre", "1/2 cebola", "Queijo minas", "Noz-moscada"],
        preparo: "1. Pré-aqueça forno. 2. Refogue cebola e espinafre. 3. Bata ovos e leite. 4. Em refratário, coloque vegetais e queijo. 5. Despeje ovos. 6. Asse por 30 min.",
        calorias: 180,
        tempo: "45 minutos",
        porcoes: "4 fatias",
        dificuldade: "Fácil",
        gordura: "10g",
        proteinas: "14g",
        carboidratos: "8g",
        dicas: "Adicione tomate seco",
        beneficio: "Proteína, sem carboidrato"
    },
    {
        nome: "Salmão Grelhado com Brócolis",
        ingredientes: ["2 filés de salmão", "1 brócolis", "Alho", "Azeite", "Limão", "Páprica"],
        preparo: "1. Tempere salmão. 2. Grelhe por 4-5 min cada lado. 3. Cozinhe brócolis no vapor. 4. Salteie com alho e azeite.",
        calorias: 350,
        tempo: "25 minutos",
        porcoes: "2 porções",
        dificuldade: "Fácil",
        gordura: "22g",
        proteinas: "30g",
        carboidratos: "10g",
        dicas: "Adicione amêndoas laminadas",
        beneficio: "Ômega-3, proteína"
    },
    {
        nome: "Salada de Lentilhas com Atum",
        ingredientes: ["1 xícara de lentilhas cozidas", "1 lata de atum", "Pepino", "Tomate", "Cebola roxa", "Azeite", "Limão"],
        preparo: "1. Misture todos os ingredientes. 2. Tempere. 3. Deixe gelar.",
        calorias: 300,
        tempo: "15 minutos",
        porcoes: "2 porções",
        dificuldade: "Fácil",
        gordura: "10g",
        proteinas: "25g",
        carboidratos: "30g",
        dicas: "Adicione ovo cozido",
        beneficio: "Proteína, fibras"
    },
    {
        nome: "Frango ao Molho de Laranja",
        ingredientes: ["400g de frango", "Suco de 2 laranjas", "Raspas de laranja", "Gengibre", "Pimentão", "Arroz integral"],
        preparo: "1. Doure frango e reserve. 2. Refogue pimentão. 3. Adicione suco e raspas. 4. Cozinhe até reduzir. 5. Volte frango e cozinhe por 5 min.",
        calorias: 350,
        tempo: "30 minutos",
        porcoes: "3 porções",
        dificuldade: "Médio",
        gordura: "8g",
        proteinas: "35g",
        carboidratos: "30g",
        dicas: "Adicione castanha de caju",
        beneficio: "Vitamina C, proteína"
    },
    {
        nome: "Abobrinha Recheada com Quinoa",
        ingredientes: ["2 abobrinhas", "1 xícara de quinoa cozida", "1/2 cebola", "Tomate", "Queijo minas", "Manjericão"],
        preparo: "1. Corte abobrinhas ao meio e retire polpa. 2. Refogue polpa com cebola e tomate. 3. Misture com quinoa. 4. Recheie abobrinhas. 5. Cubra com queijo. 6. Asse por 20 min.",
        calorias: 220,
        tempo: "45 minutos",
        porcoes: "4 porções",
        dificuldade: "Médio",
        gordura: "10g",
        proteinas: "8g",
        carboidratos: "30g",
        dicas: "Adiciente nozes ao recheio",
        beneficio: "Vegetais, proteína vegetal"
    },
    {
        nome: "Peixe Assado com Legumes",
        ingredientes: ["2 filés de peixe", "1 abobrinha", "1 cenoura", "1 cebola", "Limão", "Ervas", "Papel manteiga"],
        preparo: "1. Tempere peixe. 2. Corte legumes. 3. Arrume em papel manteiga. 4. Coloque peixe. 5. Feche pacote. 6. Asse a 200°C por 20 min.",
        calorias: 250,
        tempo: "30 minutos",
        porcoes: "2 porções",
        dificuldade: "Fácil",
        gordura: "8g",
        proteinas: "30g",
        carboidratos: "15g",
        dicas: "Adicione tomate cereja",
        beneficio: "Leve, proteína magra"
    },
    {
        nome: "Strogonoff de Cogumelos Vegano",
        ingredientes: ["300g de cogumelos", "Cebola", "Alho", "Extrato de tomate", "Creme de castanhas", "Arroz integral"],
        preparo: "1. Refogue cebola e alho. 2. Adicione cogumelos. 3. Incorpore extrato. 4. Adicione creme de castanhas. 5. Cozinhe por 5 min.",
        calorias: 280,
        tempo: "25 minutos",
        porcoes: "2 porções",
        dificuldade: "Médio",
        gordura: "18g",
        proteinas: "8g",
        carboidratos: "25g",
        dicas: "Adicione palmito",
        beneficio: "Vegetariano, rico em nutrientes"
    },
    {
        nome: "Nhoque de Batata-Doce",
        ingredientes: ["2 batatas-doces", "1 ovo", "3/4 xícara de farinha", "Molho de tomate", "Manjericão"],
        preparo: "1. Cozinhe e amasse batatas. 2. Misture com ovo e farinha. 3. Faça nhoques. 4. Cozinhe em água fervente. 5. Sirva com molho.",
        calorias: 380,
        tempo: "50 minutos",
        porcoes: "3 porções",
        dificuldade: "Médio",
        gordura: "5g",
        proteinas: "10g",
        carboidratos: "75g",
        dicas: "Gratine com queijo cottage",
        beneficio: "Fibras, vitamina A"
    },
    {
        nome: "Wrap de Alface com Frango",
        ingredientes: ["8 folhas de alface", "1 peito de frango grelhado", "Pepino", "Cenoura", "Abacate", "Molho de iogurte"],
        preparo: "1. Desfie frango. 2. Corte vegetais em palitos. 3. Monte wraps com ingredientes. 4. Regue com molho.",
        calorias: 280,
        tempo: "20 minutos",
        porcoes: "2 porções",
        dificuldade: "Fácil",
        gordura: "15g",
        proteinas: "25g",
        carboidratos: "15g",
        dicas: "Adicione quinoa cozida",
        beneficio: "Leve, baixo carboidrato"
    },
    {
        nome: "Omelete de Forno com Vegetais",
        ingredientes: ["4 ovos", "1/2 xícara de leite", "Brócolis", "Tomate", "Queijo", "Cebolinha"],
        preparo: "1. Pré-aqueça forno. 2. Bata ovos e leite. 3. Misture vegetais. 4. Despeje em refratário. 5. Polvilhe queijo. 6. Asse por 20 min.",
        calorias: 180,
        tempo: "30 minutos",
        porcoes: "4 porções",
        dificuldade: "Fácil",
        gordura: "12g",
        proteinas: "12g",
        carboidratos: "5g",
        dicas: "Adicione espinafre",
        beneficio: "Proteína, vegetais"
    },
    {
        nome: "Creme de Abóbora com Gengibre",
        ingredientes: ["500g de abóbora", "Cebola", "Alho", "Gengibre", "Caldo de legumes", "Leite de coco"],
        preparo: "1. Asse abóbora. 2. Refogue cebola, alho e gengibre. 3. Adicione abóbora e caldo. 4. Cozinhe. 5. Bata no liquidificador. 6. Volte ao fogo com leite de coco.",
        calorias: 180,
        tempo: "45 minutos",
        porcoes: "3 porções",
        dificuldade: "Fácil",
        gordura: "10g",
        proteinas: "4g",
        carboidratos: "20g",
        dicas: "Adicione noz-moscada",
        beneficio: "Conforto, vitamina A"
    },
    {
        nome: "Frango ao Molho de Ervas",
        ingredientes: ["400g de frango", "1 cebola", "Alho", "Ervas frescas", "Caldo de legumes", "Batata-doce"],
        preparo: "1. Doure frango. 2. Refogue cebola e alho. 3. Adicione caldo e ervas. 4. Cozinhe por 15 min. 5. Sirva com batata-doce assada.",
        calorias: 350,
        tempo: "35 minutos",
        porcoes: "3 porções",
        dificuldade: "Fácil",
        gordura: "10g",
        proteinas: "35g",
        carboidratos: "25g",
        dicas: "Use mix de ervas: sálvia, tomilho",
        beneficio: "Proteína, baixa gordura"
    },
    {
        nome: "Salada Caesar Light",
        ingredientes: ["Mix de folhas", "Peito de frango grelhado", "Croutons integrais", "Molho: iogurte grego, alho, anchova, limão"],
        preparo: "1. Misture folhas com croutons. 2. Adicione frango em tiras. 3. Regue com molho. 4. Polvilhe queijo parmesão.",
        calorias: 320,
        tempo: "20 minutos",
        porcoes: "2 porções",
        dificuldade: "Fácil",
        gordura: "15g",
        proteinas: "30g",
        carboidratos: "20g",
        dicas: "Adicione ovo cozido",
        beneficio: "Proteína, vegetais"
    },
    {
        nome: "Lasanha de Berinjela Light",
        ingredientes: ["2 berinjelas", "300g de carne moída", "Molho de tomate", "Ricota", "Queijo muçarela light"],
        preparo: "1. Corte berinjelas em fatias. 2. Refogue carne com molho. 3. Monte camadas: berinjela, carne, ricota. 4. Repita. 5. Finalize com muçarela. 6. Asse por 30 min.",
        calorias: 380,
        tempo: "60 minutos",
        porcoes: "4 porções",
        dificuldade: "Médio",
        gordura: "18g",
        proteinas: "28g",
        carboidratos: "25g",
        dicas: "Pré-cozinhe as berinjelas",
        beneficio: "Vegetais, proteína"
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