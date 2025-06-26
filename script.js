 // Array de receitas por período
        const receitasManha = [
            {
                nome: "Vitamina de Banana com Aveia",
                ingredientes: ["banana", "aveia", "leite"],
                preparo: "1. Descasque a banana e coloque no liquidificador.\n2. Adicione a aveia e o leite.\n3. Bata tudo por 2 minutos até obter uma mistura homogênea.\n4. Sirva imediatamente.",
                calorias: 210,
                gordura: "3g",
                proteinas: "8g",
                carboidratos: "42g"
            },
            {
                nome: "Omelete de Espinafre",
                ingredientes: ["ovos", "espinafre", "tomate", "queijo"],
                preparo: "1. Bata os ovos em uma tigela.\n2. Aqueça uma frigideira e refogue o espinafre e o tomate picado.\n3. Despeje os ovos batidos e espalhe o queijo.\n4. Cozinhe até os ovos estarem firmes.",
                calorias: 180,
                gordura: "12g",
                proteinas: "14g",
                carboidratos: "4g"
            },
            {
                nome: "Panqueca de Banana",
                ingredientes: ["banana", "ovo", "aveia"],
                preparo: "1. Amasse a banana e misture com o ovo e a aveia.\n2. Despeje pequenas porções em uma frigideira quente.\n3. Vire quando as bordas estiverem douradas.\n4. Sirva com mel ou frutas.",
                calorias: 150,
                gordura: "5g",
                proteinas: "6g",
                carboidratos: "22g"
            },
            {
                nome: "Tapioca de Frango",
                ingredientes: ["tapioca", "frango cozido", "queijo", "tomate"],
                preparo: "1. Espalhe a tapioca na frigideira e aqueça até formar uma massa.\n2. Adicione o frango desfiado, queijo e tomate.\n3. Dobre ao meio e sirva.",
                calorias: 320,
                gordura: "8g",
                proteinas: "25g",
                carboidratos: "35g"
            },
            {
                nome: "Iogurte com Granola e Frutas",
                ingredientes: ["iogurte natural", "granola", "frutas frescas"],
                preparo: "1. Coloque o iogurte em uma tigela.\n2. Adicione a granola e as frutas picadas.\n3. Misture levemente e sirva.",
                calorias: 280,
                gordura: "7g",
                proteinas: "10g",
                carboidratos: "42g"
            },
            {
                nome: "Pão Integral com Abacate",
                ingredientes: ["pão integral", "abacate", "limão", "sal"],
                preparo: "1. Toste o pão integral.\n2. Amasse o abacate com um pouco de suco de limão e sal.\n3. Espalhe sobre o pão tostado.",
                calorias: 220,
                gordura: "10g",
                proteinas: "6g",
                carboidratos: "28g"
            },
            {
                nome: "Smoothie de Mamão",
                ingredientes: ["mamão", "leite", "aveia", "mel"],
                preparo: "1. Descasque e pique o mamão.\n2. Coloque no liquidificador com leite, aveia e mel.\n3. Bata até ficar homogêneo.",
                calorias: 190,
                gordura: "2g",
                proteinas: "6g",
                carboidratos: "38g"
            },
            {
                nome: "Ovos Mexidos com Tomate",
                ingredientes: ["ovos", "tomate", "cebola", "salsinha"],
                preparo: "1. Refogue a cebola e o tomate picado.\n2. Adicione os ovos batidos e mexa até cozinhar.\n3. Finalize com salsinha picada.",
                calorias: 160,
                gordura: "10g",
                proteinas: "12g",
                carboidratos: "6g"
            },
            {
                nome: "Crepioca de Queijo",
                ingredientes: ["tapioca", "ovo", "queijo"],
                preparo: "1. Misture a tapioca com o ovo.\n2. Despeje na frigideira quente.\n3. Coloque o queijo e dobre ao meio.",
                calorias: 250,
                gordura: "9g",
                proteinas: "11g",
                carboidratos: "32g"
            },
            {
                nome: "Mingau de Aveia",
                ingredientes: ["aveia", "leite", "canela", "mel"],
                preparo: "1. Ferva o leite e adicione a aveia.\n2. Cozinhe por 5 minutos mexendo sempre.\n3. Adicione canela e mel a gosto.",
                calorias: 230,
                gordura: "5g",
                proteinas: "9g",
                carboidratos: "38g"
            }
        ];

        const receitasAlmoco = [
            {
                nome: "Arroz Integral com Legumes",
                ingredientes: ["arroz integral", "cenoura", "ervilha", "milho", "cebola"],
                preparo: "1. Cozinhe o arroz integral.\n2. Refogue a cebola e junte os legumes picados.\n3. Misture o arroz cozido e tempere a gosto.",
                calorias: 300,
                gordura: "4g",
                proteinas: "8g",
                carboidratos: "60g"
            },
            {
                nome: "Frango Grelhado com Batata Doce",
                ingredientes: ["frango", "batata doce", "azeite", "alho"],
                preparo: "1. Tempere o frango com alho e azeite.\n2. Grelhe o frango até dourar.\n3. Cozinhe a batata doce e sirva junto.",
                calorias: 350,
                gordura: "10g",
                proteinas: "30g",
                carboidratos: "35g"
            },
            {
                nome: "Salada de Quinoa",
                ingredientes: ["quinoa", "tomate", "pepino", "limão", "azeitona"],
                preparo: "1. Cozinhe a quinoa e deixe esfriar.\n2. Misture com os legumes picados.\n3. Tempere com limão, azeite e sal.",
                calorias: 280,
                gordura: "8g",
                proteinas: "9g",
                carboidratos: "45g"
            },
            {
                nome: "Peixe Assado com Brócolis",
                ingredientes: ["filé de peixe", "brócolis", "limão", "alho"],
                preparo: "1. Tempere o peixe com limão e alho.\n2. Asse no forno a 180°C por 20 minutos.\n3. Cozinhe o brócolis no vapor e sirva junto.",
                calorias: 250,
                gordura: "6g",
                proteinas: "35g",
                carboidratos: "10g"
            },
            {
                nome: "Strogonoff de Frango Light",
                ingredientes: ["frango", "creme de leite light", "champignon", "cebola"],
                preparo: "1. Refogue o frango com cebola.\n2. Adicione os champignons.\n3. Acrescente o creme de leite e cozinhe por 5 minutos.",
                calorias: 320,
                gordura: "12g",
                proteinas: "28g",
                carboidratos: "15g"
            },
            {
                nome: "Lasanha de Berinjela",
                ingredientes: ["berinjela", "molho de tomate", "queijo", "carne moída"],
                preparo: "1. Corte a berinjela em fatias finas.\n2. Monte camadas de berinjela, carne moída e molho.\n3. Cubra com queijo e asse por 30 minutos.",
                calorias: 280,
                gordura: "14g",
                proteinas: "18g",
                carboidratos: "22g"
            },
            {
                nome: "Risoto de Funghi",
                ingredientes: ["arroz arbóreo", "funghi", "cebola", "vinho branco"],
                preparo: "1. Refogue a cebola e o funghi.\n2. Adicione o arroz e vinho branco.\n3. Cozinhe adicionando caldo aos poucos até cremoso.",
                calorias: 380,
                gordura: "10g",
                proteinas: "8g",
                carboidratos: "65g"
            },
            {
                nome: "Moqueca de Peixe",
                ingredientes: ["peixe", "leite de coco", "pimentão", "tomate", "coentro"],
                preparo: "1. Refogue os legumes.\n2. Adicione o peixe e o leite de coco.\n3. Cozinhe por 15 minutos e finalize com coentro.",
                calorias: 300,
                gordura: "15g",
                proteinas: "25g",
                carboidratos: "12g"
            },
            {
                nome: "Frango Xadrez",
                ingredientes: ["frango", "pimentão", "cebola", "amendoim", "molho shoyu"],
                preparo: "1. Refogue o frango com cebola.\n2. Adicione pimentão e molho shoyu.\n3. Finalize com amendoim torrado.",
                calorias: 290,
                gordura: "11g",
                proteinas: "30g",
                carboidratos: "14g"
            },
            {
                nome: "Salada Caesar Light",
                ingredientes: ["alface", "frango grelhado", "croutons", "molho light"],
                preparo: "1. Misture o alface com o frango picado.\n2. Adicione os croutons e o molho.\n3. Misture delicadamente.",
                calorias: 220,
                gordura: "8g",
                proteinas: "20g",
                carboidratos: "18g"
            }
        ];

        const receitasTarde = [
            {
                nome: "Smoothie de Frutas Vermelhas",
                ingredientes: ["frutas vermelhas", "iogurte natural", "mel"],
                preparo: "1. Coloque as frutas, o iogurte e o mel no liquidificador.\n2. Bata até ficar homogêneo.\n3. Sirva gelado.",
                calorias: 180,
                gordura: "2g",
                proteinas: "6g",
                carboidratos: "35g"
            },
            {
                nome: "Torrada com Abacate",
                ingredientes: ["pão integral", "abacate", "sal", "pimenta"],
                preparo: "1. Toste o pão.\n2. Amasse o abacate e tempere com sal e pimenta.\n3. Passe no pão e sirva.",
                calorias: 220,
                gordura: "10g",
                proteinas: "5g",
                carboidratos: "28g"
            },
            {
                nome: "Bolinho de Banana",
                ingredientes: ["banana", "aveia", "canela"],
                preparo: "1. Amasse a banana e misture com a aveia e canela.\n2. Faça bolinhas e asse em forno preaquecido a 180°C por 15 minutos.",
                calorias: 120,
                gordura: "1g",
                proteinas: "3g",
                carboidratos: "25g"
            },
            {
                nome: "Iogurte com Granola",
                ingredientes: ["iogurte natural", "granola", "mel"],
                preparo: "1. Coloque o iogurte em uma tigela.\n2. Adicione a granola e regue com mel.",
                calorias: 200,
                gordura: "5g",
                proteinas: "8g",
                carboidratos: "32g"
            },
            {
                nome: "Cookies de Aveia",
                ingredientes: ["aveia", "banana", "gotas de chocolate"],
                preparo: "1. Misture a aveia com a banana amassada.\n2. Adicione as gotas de chocolate.\n3. Forme cookies e asse por 15 minutos.",
                calorias: 150,
                gordura: "4g",
                proteinas: "4g",
                carboidratos: "26g"
            },
            {
                nome: "Sanduíche de Frango",
                ingredientes: ["pão integral", "frango desfiado", "alface", "tomate"],
                preparo: "1. Monte o sanduíche com o frango, alface e tomate.\n2. Adicione uma colher de iogurte como maionese.",
                calorias: 280,
                gordura: "6g",
                proteinas: "20g",
                carboidratos: "35g"
            },
            {
                nome: "Pudim de Chia",
                ingredientes: ["sementes de chia", "leite vegetal", "frutas"],
                preparo: "1. Misture a chia com o leite.\n2. Deixe na geladeira por 4 horas.\n3. Adicione frutas antes de servir.",
                calorias: 180,
                gordura: "7g",
                proteinas: "6g",
                carboidratos: "22g"
            },
            {
                nome: "Tapioca Recheada",
                ingredientes: ["tapioca", "queijo branco", "tomate seco"],
                preparo: "1. Prepare a tapioca na frigideira.\n2. Recheie com queijo e tomate seco picado.\n3. Dobre e sirva.",
                calorias: 210,
                gordura: "4g",
                proteinas: "8g",
                carboidratos: "35g"
            },
            {
                nome: "Muffin de Banana",
                ingredientes: ["banana", "farinha integral", "ovo", "fermento"],
                preparo: "1. Amasse as bananas e misture com os ovos.\n2. Adicione farinha e fermento.\n3. Asse em forminhas por 20 minutos.",
                calorias: 190,
                gordura: "3g",
                proteinas: "6g",
                carboidratos: "35g"
            },
            {
                nome: "Mix de Frutas com Mel",
                ingredientes: ["maçã", "pera", "uva", "mel", "canela"],
                preparo: "1. Corte as frutas em cubos.\n2. Regue com mel e polvilhe canela.\n3. Sirva fresco.",
                calorias: 150,
                gordura: "0.5g",
                proteinas: "1g",
                carboidratos: "38g"
            }
        ];

        const receitasNoite = [
            {
                nome: "Sopa de Legumes",
                ingredientes: ["batata", "cenoura", "chuchu", "cebola", "alho"],
                preparo: "1. Refogue a cebola e o alho.\n2. Adicione os legumes picados e água.\n3. Cozinhe até os legumes ficarem macios e tempere.",
                calorias: 150,
                gordura: "1g",
                proteinas: "4g",
                carboidratos: "32g"
            },
            {
                nome: "Omelete de Claras",
                ingredientes: ["claras de ovo", "espinafre", "tomate seco"],
                preparo: "1. Bata as claras.\n2. Adicione o espinafre e o tomate seco picado.\n3. Despeje em uma frigideira antiaderente e cozinhe até firmar.",
                calorias: 120,
                gordura: "0.5g",
                proteinas: "15g",
                carboidratos: "5g"
            },
            {
                nome: "Salada de Atum",
                ingredientes: ["atum em lata", "alface", "tomate", "milho", "azeite"],
                preparo: "1. Misture o atum escorrido com os vegetais.\n2. Tempere com azeite e limão.",
                calorias: 200,
                gordura: "7g",
                proteinas: "20g",
                carboidratos: "12g"
            },
            {
                nome: "Wrap de Frango",
                ingredientes: ["wrap integral", "frango desfiado", "alface", "cenoura ralada"],
                preparo: "1. Espalhe o frango desfiado no wrap.\n2. Adicione alface e cenoura.\n3. Enrole e sirva.",
                calorias: 280,
                gordura: "6g",
                proteinas: "22g",
                carboidratos: "35g"
            },
            {
                nome: "Quiche de Espinafre",
                ingredientes: ["massa integral", "espinafre", "ovos", "leite desnatado"],
                preparo: "1. Forre uma forma com a massa.\n2. Misture o espinafre com ovos e leite.\n3. Despeje na forma e asse por 30 minutos.",
                calorias: 220,
                gordura: "10g",
                proteinas: "12g",
                carboidratos: "20g"
            },
            {
                nome: "Frango ao Curry",
                ingredientes: ["frango", "leite de coco light", "curry", "cebola"],
                preparo: "1. Refogue o frango com cebola.\n2. Adicione o curry e leite de coco.\n3. Cozinhe por 15 minutos.",
                calorias: 250,
                gordura: "9g",
                proteinas: "28g",
                carboidratos: "8g"
            },
            {
                nome: "Beringela Assada",
                ingredientes: ["berinjela", "tomate", "queijo", "manjericão"],
                preparo: "1. Corte a berinjela em rodelas.\n2. Cubra com tomate, queijo e manjericão.\n3. Asse por 20 minutos.",
                calorias: 180,
                gordura: "8g",
                proteinas: "10g",
                carboidratos: "18g"
            },
            {
                nome: "Creme de Abóbora",
                ingredientes: ["abóbora", "cebola", "alho", "gengibre"],
                preparo: "1. Cozinhe a abóbora com cebola, alho e gengibre.\n2. Bata no liquidificador até obter um creme.\n3. Aqueça e sirva.",
                calorias: 150,
                gordura: "3g",
                proteinas: "4g",
                carboidratos: "28g"
            },
            {
                nome: "Sanduíche Natural",
                ingredientes: ["pão integral", "peito de peru", "ricota", "alface"],
                preparo: "1. Monte o sanduíche com peru, ricota e alface.\n2. Adicione uma fatia de tomate se desejar.",
                calorias: 230,
                gordura: "5g",
                proteinas: "18g",
                carboidratos: "30g"
            },
            {
                nome: "Ovos Cozidos com Aspargos",
                ingredientes: ["ovos", "aspargos", "azeite", "pimenta"],
                preparo: "1. Cozinhe os ovos e os aspargos.\n2. Corte os ovos ao meio e sirva com aspargos.\n3. Regue com azeite e pimenta.",
                calorias: 180,
                gordura: "10g",
                proteinas: "15g",
                carboidratos: "8g"
            }
        ];
// Elementos do DOM
const periodoElement = document.getElementById('periodo');
const ingredientesInput = document.getElementById('ingredientesInput');
const buscarReceitasBtn = document.getElementById('buscarReceitas');
const resultadosTitulo = document.getElementById('resultadosTitulo');
const resultadosReceitas = document.getElementById('resultadosReceitas');

// Atualiza o período do dia
function atualizarPeriodo() {
    const hora = new Date().getHours();
    let periodo = '';

    if (hora >= 5 && hora < 11) {
        periodo = 'Manhã (Café da Manhã)';
    } else if (hora >= 11 && hora < 14) {
        periodo = 'Almoço';
    } else if (hora >= 14 && hora < 18) {
        periodo = 'Tarde (Lanche da Tarde)';
    } else {
        periodo = 'Noite (Jantar)';
    }

    periodoElement.textContent = `Período: ${periodo}`;
}

// Função para buscar receitas baseadas no horário e ingredientes
function buscarReceitas() {
    const hora = new Date().getHours();
    let receitasPeriodo = [];
    let periodoTexto = '';

    if (hora >= 5 && hora < 11) {
        receitasPeriodo = receitasManha;
        periodoTexto = 'Café da Manhã';
    } else if (hora >= 11 && hora < 14) {
        receitasPeriodo = receitasAlmoco;
        periodoTexto = 'Almoço';
    } else if (hora >= 14 && hora < 18) {
        receitasPeriodo = receitasTarde;
        periodoTexto = 'Lanche da Tarde';
    } else {
        receitasPeriodo = receitasNoite;
        periodoTexto = 'Jantar';
    }

    const ingredientes = ingredientesInput.value.toLowerCase().split(',').map(item => item.trim());
    const receitasFiltradas = [];

    // Se nenhum ingrediente foi digitado, mostra todas as receitas do período
    if (ingredientes.length === 1 && ingredientes[0] === '') {
        receitasFiltradas.push(...receitasPeriodo);
    } else {
        receitasPeriodo.forEach(receita => {
            const ingredientesReceita = receita.ingredientes.map(ing => ing.toLowerCase());
            // Verifica se pelo menos um ingrediente da lista do usuário está na receita
            const temIngrediente = ingredientes.some(ing => ingredientesReceita.includes(ing));
            if (temIngrediente) {
                receitasFiltradas.push(receita);
            }
        });
    }

    // Limita a 5 receitas para não sobrecarregar a interface
    const receitasExibir = receitasFiltradas.slice(0, 5);
    
    exibirReceitas(receitasExibir, periodoTexto);
}

// Exibe as receitas na tela
function exibirReceitas(receitas, periodoTexto) {
    resultadosReceitas.innerHTML = '';

    if (receitas.length === 0) {
        resultadosReceitas.innerHTML = `
            <div class="nenhuma-receita fade-in">
                <p>Nenhuma receita encontrada com esses ingredientes para ${periodoTexto}.</p>
                <p>Tente outros ingredientes!</p>
            </div>
        `;
        return;
    }

    resultadosTitulo.textContent = `Receitas para ${periodoTexto}`;
    
    receitas.forEach((receita, index) => {
        const delay = index * 100;
        const receitaElement = document.createElement('div');
        receitaElement.className = 'receita fade-in';
        receitaElement.style.animationDelay = `${delay}ms`;
        receitaElement.innerHTML = `
            <h3>🍴 ${receita.nome}</h3>
            <h4>📋 Ingredientes:</h4>
            <ul>${receita.ingredientes.map(ing => `<li>${ing}</li>`).join('')}</ul>
            <h4>👩‍🍳 Modo de preparo:</h4>
            <p>${receita.preparo.replace(/\n/g, '<br>')}</p>
            <div class="info-nutricional">
                <div class="info-item">
                    <span class="info-valor">${receita.calorias}</span>
                    <span class="info-rotulo">Calorias</span>
                </div>
                <div class="info-item">
                    <span class="info-valor">${receita.gordura}</span>
                    <span class="info-rotulo">Gorduras</span>
                </div>
                <div class="info-item">
                    <span class="info-valor">${receita.proteinas}</span>
                    <span class="info-rotulo">Proteínas</span>
                </div>
                <div class="info-item">
                    <span class="info-valor">${receita.carboidratos}</span>
                    <span class="info-rotulo">Carboidratos</span>
                </div>
            </div>
        `;
        resultadosReceitas.appendChild(receitaElement);
    });
}

// Eventos
document.addEventListener('DOMContentLoaded', () => {
    atualizarPeriodo();
    
    // Mostra algumas receitas iniciais
    buscarReceitas();
});

buscarReceitasBtn.addEventListener('click', buscarReceitas);

// Permitir pressionar Enter para buscar
ingredientesInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        buscarReceitas();
    }
});

// Registrar service worker para PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('service-worker.js')
            .then(registration => {
                console.log('Service Worker registrado com sucesso: ', registration.scope);
            })
            .catch(error => {
                console.log('Falha ao registrar Service Worker: ', error);
            });
    });
}