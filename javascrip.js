/**
 * ARQUIVO: script.js
 * FUNÇÃO: Inteligência e Interatividade do Portal AgroPurple
 */

document.addEventListener("DOMContentLoaded", () => {
    inicializarMenu();
    inicializarSimulador();
    inicializarFAQ();
    inicializarFormularioConsultoria();
    simularCotacoesTempoReal();
});

/**
 * 1. Controle do Menu e Rolagem Suave
 */
function inicializarMenu() {
    const links = document.querySelectorAll(".navbar nav a");
    links.forEach(link => {
        link.addEventListener("click", () => {
            links.forEach(l => l.style.color = "#e8daef");
            link.style.color = "#fff";
        });
    });
    console.log("✔ Módulo de navegação carregado.");
}

/**
 * 2. Simulador AgroTech de Produtividade
 */
function inicializarSimulador() {
    const sobreSection = document.querySelector(".about");
    if (!sobreSection) return;

    const simuladorContainer = document.createElement("div");
    simuladorContainer.className = "simulador-box";
    simuladorContainer.innerHTML = `
        <div style="margin-top: 40px; padding: 30px; background: #2e0854; color: white; border-radius: 8px; text-align: left; box-shadow: 0 4px 15px rgba(46,8,84,0.2);">
            <h3 style="color: #bb86fc; margin-bottom: 15px;">📊 Simulador AgroPurple: Agricultura de Precisão</h3>
            <p style="margin-bottom: 20px; font-size: 14px; color: #e8daef;">Insira o tamanho da sua propriedade para estimar o ganho de eficiência com o uso de Drones e IA.</p>
            
            <div style="display: flex; gap: 15px; flex-wrap: wrap; align-items: center;">
                <label for="hectares" style="font-weight: bold;">Hectares da Propriedade:</label>
                <input type="number" id="hectares" placeholder="Ex: 150" style="padding: 10px; border-radius: 4px; border: none; width: 120px; font-size: 16px; color: #333;">
                <button id="btnCalcular" style="padding: 10px 20px; background: #bb86fc; color: #2e0854; border: none; border-radius: 4px; font-weight: bold; cursor: pointer; transition: 0.3s;">Calcular Retorno</button>
            </div>
            
            <div id="resultadoSimulacao" style="margin-top: 20px; font-size: 16px; font-weight: 500; min-height: 24px; color: #fff;"></div>
        </div>
    `;
    sobreSection.appendChild(simuladorContainer);

    const btnCalcular = document.getElementById("btnCalcular");
    const inputHectares = document.getElementById("hectares");
    const divResultado = document.getElementById("resultadoSimulacao");

    btnCalcular.addEventListener("click", () => {
        const valorHectares = parseFloat(inputHectares.value);

        if (isNaN(valorHectares) || valorHectares <= 0) {
            divResultado.innerHTML = "⚠️ Por favor, insira um número válido de hectares.";
            divResultado.style.color = "#ff8a8a";
            return;
        }

        const economiaEstimada = valorHectares * 120;
        divResultado.innerHTML = `✅ <strong>Estimativa de Sucesso:</strong> Sua propriedade de ${valorHectares} hectares pode economizar aproximadamente <strong>R$ ${economiaEstimada.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</strong> por safra reduzindo o desperdício de insumos!`;
        divResultado.style.color = "#bb86fc";
    });
}

/**
 * 3. Efeito Sanfona (Accordion) Inteligente no FAQ
 */
function inicializarFAQ() {
    const itensFaq = document.querySelectorAll(".faq-item");
    
    itensFaq.forEach(item => {
        const resposta = item.querySelector("p");
        const titulo = item.querySelector("h4");
        
        // Estilização inicial via JS para esconder as respostas com elegância
        titulo.style.cursor = "pointer";
        titulo.innerHTML = `➕ ${titulo.innerHTML}`;
        resposta.style.display = "none";
        resposta.style.marginTop = "10px";
        resposta.style.transition = "all 0.3s ease";

        titulo.addEventListener("click", () => {
            const estaAtivo = resposta.style.display === "block";
            
            // Fecha todos os outros antes de abrir o atual
            document.querySelectorAll(".faq-item p").forEach(p => p.style.display = "none");
            document.querySelectorAll(".faq-item h4").forEach(h => h.innerHTML = h.innerHTML.replace("➖", "➕"));

            if (!estaAtivo) {
                resposta.style.display = "block";
                titulo.innerHTML = titulo.innerHTML.replace("➕", "➖");
                item.style.backgroundColor = "#faf8fd";
            } else {
                resposta.style.display = "none";
                titulo.innerHTML = titulo.innerHTML.replace("➖", "➕");
                item.style.backgroundColor = "#fff";
            }
        });
    });
    console.log("✔ Efeito sanfona do FAQ ativado.");
}

/**
 * 4. Formulário Automatizado de Consultoria Agro
 */
function inicializarFormularioConsultoria() {
    const faqSection = document.getElementById("faq");
    if (!faqSection) return;

    const contatoContainer = document.createElement("div");
    contatoContainer.style.maxWidth = "800px";
    contatoContainer.style.margin = "40px auto 0 auto";
    contatoContainer.style.padding = "30px";
    contatoContainer.style.background = "#fff";
    contatoContainer.style.borderRadius = "8px";
    contatoContainer.style.boxShadow = "0 4px 6px rgba(0,0,0,0.05)";
    contatoContainer.style.borderTop = "6px solid #6a1b9a";

    contatoContainer.innerHTML = `
        <h3 style="color: #2e0854; margin-bottom: 10px;">📩 Agendar Consultoria Técnica</h3>
        <p style="color: #666; margin-bottom: 20px; font-size: 14px;">Solicite o contato de um engenheiro agrônomo especialista em tecnologia de precisão.</p>
        
        <form id="formAgro" style="display: flex; flex-direction: column; gap: 15px;">
            <input type="text" id="nomeProdutor" placeholder="Seu Nome Completo" required style="padding: 12px; border: 1px solid #e8daef; border-radius: 4px; font-size: 15px;">
            <input type="email" id="emailProdutor" placeholder="Seu E-mail de Contato" required style="padding: 12px; border: 1px solid #e8daef; border-radius: 4px; font-size: 15px;">
            <button type="submit" style="padding: 12px; background: #6a1b9a; color: white; border: none; border-radius: 4px; font-weight: bold; cursor: pointer; font-size: 16px; transition: 0.3s;">Enviar Pedido de Análise</button>
        </form>
        <div id="msgSucessoForm" style="margin-top: 15px; font-weight: bold; color: #27ae60; display: none;"></div>
    `;

    faqSection.appendChild(contatoContainer);

    const form = document.getElementById("formAgro");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const nome = document.getElementById("nomeProdutor").value;
        const msg = document.getElementById("msgSucessoForm");

        msg.style.display = "block";
        msg.innerHTML = `🎉 Obrigado, ${nome}! Nossa equipe de engenharia entrará em contato em até 24 horas.`;
        form.reset();
    });
}

/**
 * 5. Feed de Atualização de Mercado (Ticker Simulador)
 */
function simularCotacoesTempoReal() {
    console.log("✔ Iniciando monitor de commodities virtuais.");
    
    // Altera sutilmente os textos de mercado a cada 5 segundos para simular dados dinâmicos
    setInterval(() => {
        const itensLista = document.querySelectorAll(".agro-list li");
        if (itensLista.length > 0) {
            const variação = (Math.random() * 0.4 - 0.2).toFixed(2);
            const seta = variação >= 0 ? "📈" : "📉";
            
            // Atualiza visualmente o status da Soja como exemplo de reatividade
            if(itensLista[0]) {
                itensLista[0].innerHTML = `<strong>Soja (Saca 60kg):</strong> Mercado físico operando com estabilidade (${seta} ${variação}% agora).`;
            }
        }
    }, 5000);
}
