const fs = require('fs');
const path = require('path');

const pagesTranslations = {
    pt: {
        "TOURS_SUBTITLE": "Descubra as maravilhas que Foz do Iguaçu tem a oferecer. Roteiros pensados para criar memórias inesquecíveis.",
        "SEARCH_TOURS": "Pesquisar passeios...",
        "BACK_TO_TOP": "Voltar ao topo",
        "PACKAGES_SUBTITLE": "Escolha o pacote perfeito para sua aventura em Foz do Iguaçu. Experiências inesquecíveis esperando por você!",
        "CTA_TITLE": "Não encontrou o pacote ideal?",
        "CTA_SUBTITLE": "Entre em contato conosco e monte um roteiro personalizado para sua viagem dos sonhos!",
        "CONTACT_US": "Fale Conosco"
    },
    en: {
        "TOURS_SUBTITLE": "Discover the wonders Foz do Iguaçu has to offer. Itineraries designed to create unforgettable memories.",
        "SEARCH_TOURS": "Search tours...",
        "BACK_TO_TOP": "Back to top",
        "PACKAGES_SUBTITLE": "Choose the perfect package for your adventure in Foz do Iguaçu. Unforgettable experiences waiting for you!",
        "CTA_TITLE": "Didn't find the ideal package?",
        "CTA_SUBTITLE": "Contact us and create a customized itinerary for your dream trip!",
        "CONTACT_US": "Contact Us"
    },
    es: {
        "TOURS_SUBTITLE": "Descubre las maravillas que Foz do Iguaçu tiene para ofrecer. Itinerarios diseñados para crear recuerdos inolvidables.",
        "SEARCH_TOURS": "Buscar tours...",
        "BACK_TO_TOP": "Volver arriba",
        "PACKAGES_SUBTITLE": "Elige el paquete perfecto para tu aventura en Foz do Iguaçu. ¡Experiencias inolvidables te esperan!",
        "CTA_TITLE": "¿No encontraste el paquete ideal?",
        "CTA_SUBTITLE": "¡Contáctanos y crea un itinerario personalizado para tu viaje soñado!",
        "CONTACT_US": "Contáctanos"
    }
};

function updateFile(lang) {
    const filePath = path.join(__dirname, 'public/assets/i18n', `${lang}.json`);
    const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    content.PAGES = pagesTranslations[lang];
    fs.writeFileSync(filePath, JSON.stringify(content, null, 2));
    console.log(`Updated ${lang}.json`);
}

updateFile('pt');
updateFile('en');
updateFile('es');
