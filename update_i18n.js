const fs = require('fs');
const path = require('path');

const pt = {
    "TOURS": {
        "AQUAFOZ": { "TITLE": "AquaFoz - Aquário de Foz do Iguaçu", "DESC": "Explore o maior aquário da região com mais de 300 espécies de água doce e salgada em 3,3 milhões de litros. Uma jornada dos rios Iguaçu e Paraná até os oceanos, com túnel subaquático e experiências imersivas inesquecíveis." },
        "CATARATAS_BR": { "TITLE": "Cataratas do Iguaçu - Lado Brasileiro", "DESC": "Explore as impressionantes quedas d'água das Cataratas do Iguaçu pelo lado brasileiro, com vistas panorâmicas e trilhas que proporcionam uma experiência inesquecível." },
        "ITAIPU_CIRCUITO": { "TITLE": "Circuito Itaipu", "DESC": "Explore a Usina de Itaipu em um circuito que permite conhecer de perto suas operações e sua importância para a geração de energia." },
        "CITY_TOUR_FOZ": { "TITLE": "City Tour Foz do Iguaçu", "DESC": "Conheça os principais pontos turísticos de Foz do Iguaçu, incluindo visitas ao Templo Budista, à Mesquita Omar Ibn Al-Khattab e ao Marco das Três Fronteiras, explorando a diversidade cultural e histórica da cidade." },
        "CITY_TOUR_PY": { "TITLE": "City Tour Paraguai", "DESC": "Descubra um lado diferente do Paraguai, visitando pontos culturais e históricos além das tradicionais compras em Ciudad del Este." },
        "COMPLEXO_DREAMS": { "TITLE": "Complexo Dreams", "DESC": "Explore um conjunto de atrações que inclui o Museu de Cera, Maravilhas do Mundo, Vale dos Dinossauros e Dreams Motor Show, oferecendo experiências interativas e educativas para toda a família." },
        "ICE_BAR": { "TITLE": "Dreams Ice Bar", "DESC": "Experimente um bar totalmente feito de gelo, com esculturas e decorações elaboradas, onde você pode desfrutar de bebidas servidas em copos de gelo em uma atmosfera gelada e deslumbrante." },
        "ITAIPU_ILUMINADA": { "TITLE": "Itaipu Iluminada", "DESC": "Desfrute de um espetáculo noturno onde a barragem da Usina de Itaipu é iluminada com mais de 747 refletores e 112 luminárias, criando uma experiência visual impressionante." },
        "ITAIPU_PANORAMICA": { "TITLE": "Itaipu Panorâmica", "DESC": "Conheça a grandiosidade da Usina de Itaipu em um tour que oferece vistas abrangentes da barragem, do vertedouro e do lago de Itaipu a partir de pontos de observação estratégicos." },
        "REFUGIO": { "TITLE": "Itaipu Refúgio Biológico", "DESC": "Explore a riqueza da biodiversidade local em trilhas ecológicas que passam por áreas de preservação, conhecendo projetos de conservação ambiental e diversas espécies de plantas e animais." },
        "KATTAMARAM": { "TITLE": "Kattamaram II", "DESC": "Navegue pelas águas do Rio Iguaçu em um luxuoso barco, desfrutando de vistas panorâmicas das margens brasileiras, argentinas e paraguaias, com opção de buffet a bordo." },
        "MACUCO": { "TITLE": "Macuco Safari", "DESC": "Aventure-se em um passeio que combina trilha na floresta e navegação de barco até as quedas das Cataratas do Iguaçu, proporcionando uma experiência emocionante e próxima das águas." },
        "MARAVILHAS": { "TITLE": "Maravilhas do Mundo", "DESC": "Faça uma viagem pelos maiores monumentos do planeta em um parque temático que apresenta réplicas detalhadas de ícones como a Torre Eiffel, o Cristo Redentor e a Estátua da Liberdade." },
        "MESQUITA": { "TITLE": "Mesquita Árabe", "DESC": "Visite a Mesquita Omar Ibn Al-Khatab, um ponto turístico que destaca a diversidade cultural de Foz do Iguaçu, com arquitetura impressionante e ambiente de serenidade." },
        "MOTOR_SHOW": { "TITLE": "Motor Show", "DESC": "Aprecie uma combinação única de motocicletas, música ao vivo e gastronomia em um ambiente temático que encanta entusiastas de motos e cultura." },
        "MUSEU_CERA": { "TITLE": "Museu de Cera", "DESC": "Encontre réplicas realistas de figuras icônicas da cultura pop, história e entretenimento em cenários interativos que permitem fotos memoráveis." },
        "NOITE_ARG": { "TITLE": "Noite Argentina - Jantar e Show", "DESC": "Desfrute da cultura argentina em uma noite especial com jantar típico e apresentações de tango e folclore em Puerto Iguazú." },
        "NOITE_CATARATAS": { "TITLE": "Noite nas Cataratas", "DESC": "Experimente uma visita noturna às Cataratas do Iguaçu, contemplando as quedas iluminadas pela lua e por luzes especiais, em uma atmosfera mística e envolvente." },
        "PARQUE_AVES": { "TITLE": "Parque das Aves", "DESC": "Visite um santuário de conservação com mais de 1.300 aves de 150 espécies diferentes, caminhando por trilhas que passam por viveiros gigantes e interagindo com aves tropicais em seu habitat natural." },
        "POR_SOL_CATARATAS": { "TITLE": "Pôr do Sol nas Cataratas", "DESC": "Vivencie a mágica do pôr do sol nas Cataratas do Iguaçu, quando as águas refletem os tons dourados e alaranjados do sol, proporcionando uma experiência tranquila e inesquecível." },
        "POR_SOL_MARCO": { "TITLE": "Pôr do Sol no Marco das Três Fronteiras", "DESC": "Aprecie um dos mais belos pôr do sol de Foz do Iguaçu, com vista para os rios Iguaçu e Paraná, enquanto aproveita apresentações culturais e gastronomia local." },
        "MOVIES_CAR": { "TITLE": "Movies Car", "DESC": "Viva a magia do cinema em um dos maiores drive-ins temáticos do Brasil! O Movies Car oferece uma experiência única com shows, personagens e filmes inesquecíveis em um cenário inspirado em Hollywood." },
        "TEMPLO_BUDISTA": { "TITLE": "Templo Budista", "DESC": "Visite o Templo Budista de Foz do Iguaçu, admire as estátuas de Buda e a arquitetura tradicional enquanto aprende sobre a filosofia budista em um ambiente de paz e serenidade." },
        "HELICOPTERO": { "TITLE": "Voo de Helicóptero sobre as Cataratas", "DESC": "Tenha uma perspectiva única das Cataratas do Iguaçu em um voo panorâmico de helicóptero, apreciando as quedas d'água e a floresta ao redor de um ângulo privilegiado." },
        "WONDER_PARK": { "TITLE": "Wonder Park", "DESC": "Divirta-se em um parque temático que combina atrações como o Movie Cars e o Water Show, oferecendo entretenimento para toda a família." }
    },
    "PACKAGES": {
        "AVENTURA_CATARATAS": {
            "TITLE": "Aventura nas Cataratas",
            "DESC": "Explore as Cataratas do Iguaçu de forma emocionante, combinando trilhas, passeios de barco e um voo panorâmico sobre as quedas d'água.",
            "ACTIVITIES": ["Macuco Safari", "Trilha nas Cataratas do Iguaçu", "Voo de Helicóptero sobre as Cataratas"]
        },
        "EXPLORADOR_NATUREZA": {
            "TITLE": "Explorador da Natureza",
            "DESC": "Conheça a biodiversidade de Foz do Iguaçu em um passeio que combina fauna e flora preservadas da região.",
            "ACTIVITIES": ["Parque das Aves", "Itaipu Refúgio Biológico", "Cataratas do Iguaçu (lado brasileiro)"]
        },
        "ADRENALINA_TOTAL": {
            "TITLE": "Adrenalina Total",
            "DESC": "Um pacote feito para os amantes de aventura, com atividades cheias de emoção e contato direto com a natureza.",
            "ACTIVITIES": ["Macuco Safari", "Voo de Helicóptero sobre as Cataratas", "Kattamaram II"]
        },
        "HISTORIA_CULTURA": {
            "TITLE": "História e Cultura de Foz",
            "DESC": "Descubra a riqueza cultural e religiosa de Foz do Iguaçu visitando templos e monumentos históricos.",
            "ACTIVITIES": ["Templo Budista", "Mesquita Árabe", "Marco das Três Fronteiras"]
        },
        "NOITE_ARGENTINA": {
            "TITLE": "Noite Argentina",
            "DESC": "Aprecie a cultura argentina com um jantar temático e um show de tango e folclore em Puerto Iguazú.",
            "ACTIVITIES": ["Jantar e Show de Tango", "Cassino de Puerto Iguazú (opcional)"]
        },
        "DESCOBRINDO_ARGENTINA": {
            "TITLE": "Descobrindo a Argentina",
            "DESC": "Explore os encantos do lado argentino de Foz do Iguaçu, incluindo as impressionantes Cataratas Argentinas, um passeio pelo centro histórico de Puerto Iguazú e uma experiência gastronômica com pratos típicos.",
            "ACTIVITIES": ["Cataratas do Iguaçu - Lado Argentino", "City Tour Argentina", "Almoço em Puerto Iguazú", "Duty Free Shop"]
        },
        "AVENTURAS_PY": {
            "TITLE": "Aventuras no Paraguai",
            "DESC": "Descubra um lado cultural e natural do Paraguai que vai além das compras, visitando monumentos históricos, cachoeiras impressionantes e mercados tradicionais.",
            "ACTIVITIES": ["City Tour Paraguai", "Salto Monday", "Catedral de San Blas", "Igreja São Lucas", "Lago da República", "Mercado de Abasto"]
        },
        "TOUR_FRONTEIRAS": {
            "TITLE": "Tour Três Fronteiras",
            "DESC": "Visite os principais pontos turísticos de três países em um único dia, conhecendo o Brasil, Paraguai e Argentina.",
            "ACTIVITIES": ["City Tour Foz do Iguaçu", "City Tour Paraguai", "Marco das Três Fronteiras"]
        },
        "DIVERSAO_FAMILIA": {
            "TITLE": "Diversão em Família",
            "DESC": "Pacote ideal para toda a família, combinando atrações educativas e interativas para crianças e adultos.",
            "ACTIVITIES": ["Parque das Aves", "Complexo Dreams", "Wonder Park"]
        },
        "ROMANCE_CATARATAS": {
            "TITLE": "Romance nas Cataratas",
            "DESC": "Um pacote perfeito para casais que desejam momentos especiais em um cenário paradisíaco.",
            "ACTIVITIES": ["Pôr do Sol no Parque Nacional do Iguaçu", "Jantar no Kattamaram II", "Noite nas Cataratas"]
        },
        "LUA_MEL": {
            "TITLE": "Lua de Mel em Foz",
            "DESC": "Celebre o amor com um pacote exclusivo que inclui experiências únicas e inesquecíveis.",
            "ACTIVITIES": ["Voo de Helicóptero sobre as Cataratas", "Jantar romântico", "Passeio noturno no Marco das Três Fronteiras"]
        },
        "FOZ_3_DIAS": {
            "TITLE": "Foz do Iguaçu 3 Dias e 2 Noites",
            "DESC": "Descubra os principais pontos turísticos de Foz do Iguaçu em uma viagem de 3 dias.",
            "ACTIVITIES": ["Cataratas do Iguaçu", "Itaipu Panorâmica", "Parque das Aves", "Jantar Temático (opcional)"]
        },
        "FOZ_5_DIAS": {
            "TITLE": "Foz do Iguaçu 5 Dias e 4 Noites",
            "DESC": "Um roteiro completo para quem quer explorar Foz do Iguaçu com calma e aproveitar todas as atrações.",
            "ACTIVITIES": ["Cataratas do Iguaçu", "Macuco Safari", "Parque das Aves", "Itaipu Iluminada", "Noite Argentina", "City Tour Paraguai"]
        }
    }
};

const en = {
    "TOURS": {
        "AQUAFOZ": { "TITLE": "AquaFoz - Foz do Iguaçu Aquarium", "DESC": "Explore the largest aquarium in the region with over 300 freshwater and saltwater species in 3.3 million liters. A journey from the Iguaçu and Paraná rivers to the oceans, featuring an underwater tunnel and unforgettable immersive experiences." },
        "CATARATAS_BR": { "TITLE": "Iguazu Falls - Brazilian Side", "DESC": "Explore the impressive waterfalls of Iguazu from the Brazilian side, with panoramic views and trails that provide an unforgettable experience." },
        "ITAIPU_CIRCUITO": { "TITLE": "Itaipu Circuit", "DESC": "Explore the Itaipu Dam on a circuit that allows you to see its operations up close and its importance for power generation." },
        "CITY_TOUR_FOZ": { "TITLE": "City Tour Foz do Iguaçu", "DESC": "Meet the main tourist spots of Foz do Iguaçu, including visits to the Buddhist Temple, Omar Ibn Al-Khattab Mosque, and the Three Borders Landmark, exploring the city's cultural and historical diversity." },
        "CITY_TOUR_PY": { "TITLE": "Paraguay City Tour", "DESC": "Discover a different side of Paraguay, visiting cultural and historical points beyond traditional shopping in Ciudad del Este." },
        "COMPLEXO_DREAMS": { "TITLE": "Dreams Complex", "DESC": "Explore a set of attractions that includes the Wax Museum, Wonders of the World, Dinosaur Valley and Dreams Motor Show, offering interactive and educational experiences for the whole family." },
        "ICE_BAR": { "TITLE": "Dreams Ice Bar", "DESC": "Experience a bar made entirely of ice, with elaborate sculptures and decorations, where you can enjoy drinks served in ice glasses in a freezing and stunning atmosphere." },
        "ITAIPU_ILUMINADA": { "TITLE": "Illuminated Itaipu", "DESC": "Enjoy a night spectacle where the Itaipu Dam is illuminated with over 747 reflectors and 112 luminaires, creating an impressive visual experience." },
        "ITAIPU_PANORAMICA": { "TITLE": "Panoramic Itaipu", "DESC": "Discover the grandeur of the Itaipu Dam on a tour offering comprehensive views of the dam, spillway, and Itaipu Lake from strategic observation points." },
        "REFUGIO": { "TITLE": "Itaipu Biological Refuge", "DESC": "Explore the richness of local biodiversity on ecological trails passing through preservation areas, learning about environmental conservation projects and diverse plant and animal species." },
        "KATTAMARAM": { "TITLE": "Kattamaram II", "DESC": "Navigate the waters of the Iguaçu River on a luxurious boat, enjoying panoramic views of the Brazilian, Argentine, and Paraguayan shores, with an optional onboard buffet." },
        "MACUCO": { "TITLE": "Macuco Safari", "DESC": "Embark on a tour combining a forest trail and boat navigation to the falls of Iguazu, providing an exciting experience close to the waters." },
        "MARAVILHAS": { "TITLE": "Wonders of the World", "DESC": "Take a trip through the planet's greatest monuments in a theme park featuring detailed replicas of icons like the Eiffel Tower, Christ the Redeemer, and the Statue of Liberty." },
        "MESQUITA": { "TITLE": "Arab Mosque", "DESC": "Visit the Omar Ibn Al-Khatab Mosque, a tourist spot highlighting the cultural diversity of Foz do Iguaçu, with impressive architecture and an atmosphere of serenity." },
        "MOTOR_SHOW": { "TITLE": "Motor Show", "DESC": "Enjoy a unique combination of motorcycles, live music, and gastronomy in a themed environment that enchants motorcycle and culture enthusiasts." },
        "MUSEU_CERA": { "TITLE": "Wax Museum", "DESC": "Encounter realistic replicas of iconic figures from pop culture, history, and entertainment in interactive settings allowing memorable photos." },
        "NOITE_ARG": { "TITLE": "Argentine Night - Dinner and Show", "DESC": "Enjoy Argentine culture on a special night with a typical dinner and tango and folklore performances in Puerto Iguazú." },
        "NOITE_CATARATAS": { "TITLE": "Night at the Falls", "DESC": "Experience a night visit to the Iguazu Falls, contemplating the falls illuminated by the moon and special lights, in a mystical and engaging atmosphere." },
        "PARQUE_AVES": { "TITLE": "Bird Park", "DESC": "Visit a conservation sanctuary with over 1,300 birds of 150 different species, walking along trails passing through giant aviaries and interacting with tropical birds in their natural habitat." },
        "POR_SOL_CATARATAS": { "TITLE": "Sunset at the Falls", "DESC": "Experience the magic of the sunset at the Iguazu Falls, when the waters reflect the golden and orange tones of the sun, providing a peaceful and unforgettable experience." },
        "POR_SOL_MARCO": { "TITLE": "Sunset at the Three Borders Landmark", "DESC": "Enjoy one of the most beautiful sunsets in Foz do Iguaçu, overlooking the Iguaçu and Paraná rivers, while enjoying cultural performances and local gastronomy." },
        "MOVIES_CAR": { "TITLE": "Movies Car", "DESC": "Experience the magic of cinema in one of Brazil's largest themed drive-ins! Movies Car offers a unique experience with shows, characters, and unforgettable movies in a Hollywood-inspired setting." },
        "TEMPLO_BUDISTA": { "TITLE": "Buddhist Temple", "DESC": "Visit the Foz do Iguaçu Buddhist Temple, admire the Buddha statues and traditional architecture while learning about Buddhist philosophy in an environment of peace and serenity." },
        "HELICOPTERO": { "TITLE": "Helicopter Flight over the Falls", "DESC": "Get a unique perspective of the Iguazu Falls on a panoramic helicopter flight, enjoying the waterfalls and surrounding forest from a privileged angle." },
        "WONDER_PARK": { "TITLE": "Wonder Park", "DESC": "Have fun in a theme park combining attractions like Movie Cars and Water Show, offering entertainment for the whole family." }
    },
    "PACKAGES": {
        "AVENTURA_CATARATAS": {
            "TITLE": "Adventure at the Falls",
            "DESC": "Explore the Iguazu Falls in an exciting way, combining trails, boat rides, and a panoramic flight over the waterfalls.",
            "ACTIVITIES": ["Macuco Safari", "Iguazu Falls Trail", "Helicopter Flight over the Falls"]
        },
        "EXPLORADOR_NATUREZA": {
            "TITLE": "Nature Explorer",
            "DESC": "Discover the biodiversity of Foz do Iguaçu on a tour combining the region's preserved fauna and flora.",
            "ACTIVITIES": ["Bird Park", "Itaipu Biological Refuge", "Iguazu Falls (Brazilian side)"]
        },
        "ADRENALINA_TOTAL": {
            "TITLE": "Total Adrenaline",
            "DESC": "A package made for adventure lovers, with activities full of emotion and direct contact with nature.",
            "ACTIVITIES": ["Macuco Safari", "Helicopter Flight over the Falls", "Kattamaram II"]
        },
        "HISTORIA_CULTURA": {
            "TITLE": "History and Culture of Foz",
            "DESC": "Discover the cultural and religious richness of Foz do Iguaçu by visiting historical temples and monuments.",
            "ACTIVITIES": ["Buddhist Temple", "Arab Mosque", "Three Borders Landmark"]
        },
        "NOITE_ARGENTINA": {
            "TITLE": "Argentine Night",
            "DESC": "Enjoy Argentine culture with a themed dinner and a tango and folklore show in Puerto Iguazú.",
            "ACTIVITIES": ["Dinner and Tango Show", "Puerto Iguazú Casino (optional)"]
        },
        "DESCOBRINDO_ARGENTINA": {
            "TITLE": "Discovering Argentina",
            "DESC": "Explore the charms of the Argentine side of Foz do Iguaçu, including the impressive Argentine Falls, a tour through the historic center of Puerto Iguazú, and a gastronomic experience with typical dishes.",
            "ACTIVITIES": ["Iguazu Falls - Argentine Side", "Argentina City Tour", "Lunch in Puerto Iguazú", "Duty Free Shop"]
        },
        "AVENTURAS_PY": {
            "TITLE": "Adventures in Paraguay",
            "DESC": "Discover a cultural and natural side of Paraguay that goes beyond shopping, visiting historical monuments, impressive waterfalls, and traditional markets.",
            "ACTIVITIES": ["Paraguay City Tour", "Monday Falls", "San Blas Cathedral", "San Lucas Church", "Republic Lake", "Abasto Market"]
        },
        "TOUR_FRONTEIRAS": {
            "TITLE": "Three Borders Tour",
            "DESC": "Visit the main tourist spots of three countries in a single day, exploring Brazil, Paraguay, and Argentina.",
            "ACTIVITIES": ["Foz do Iguaçu City Tour", "Paraguay City Tour", "Three Borders Landmark"]
        },
        "DIVERSAO_FAMILIA": {
            "TITLE": "Family Fun",
            "DESC": "Ideal package for the whole family, combining educational and interactive attractions for children and adults.",
            "ACTIVITIES": ["Bird Park", "Dreams Complex", "Wonder Park"]
        },
        "ROMANCE_CATARATAS": {
            "TITLE": "Romance at the Falls",
            "DESC": "A perfect package for couples who desire special moments in a heavenly setting.",
            "ACTIVITIES": ["Sunset at the Iguazu National Park", "Dinner at Kattamaram II", "Night at the Falls"]
        },
        "LUA_MEL": {
            "TITLE": "Honeymoon in Foz",
            "DESC": "Celebrate love with an exclusive package including unique and unforgettable experiences.",
            "ACTIVITIES": ["Helicopter Flight over the Falls", "Romantic dinner", "Night tour at the Three Borders Landmark"]
        },
        "FOZ_3_DIAS": {
            "TITLE": "Foz do Iguaçu 3 Days and 2 Nights",
            "DESC": "Discover the main tourist spots of Foz do Iguaçu on a 3-day trip.",
            "ACTIVITIES": ["Iguazu Falls", "Panoramic Itaipu", "Bird Park", "Themed Dinner (optional)"]
        },
        "FOZ_5_DIAS": {
            "TITLE": "Foz do Iguaçu 5 Days and 4 Nights",
            "DESC": "A complete itinerary for those who want to explore Foz do Iguaçu calmly and enjoy all attractions.",
            "ACTIVITIES": ["Iguazu Falls", "Macuco Safari", "Bird Park", "Illuminated Itaipu", "Argentine Night", "Paraguay City Tour"]
        }
    }
};

const es = {
    "TOURS": {
        "AQUAFOZ": { "TITLE": "AquaFoz - Acuario de Foz do Iguaçu", "DESC": "Explora el acuario más grande de la región con más de 300 especies de agua dulce y salada en 3,3 millones de litros. Un viaje desde los ríos Iguaçu y Paraná hasta los océanos, con túnel submarino y experiencias inmersivas inolvidables." },
        "CATARATAS_BR": { "TITLE": "Cataratas del Iguazú - Lado Brasileño", "DESC": "Explora las impresionantes cascadas de las Cataratas del Iguazú desde el lado brasileño, con vistas panorámicas y senderos que brindan una experiencia inolvidable." },
        "ITAIPU_CIRCUITO": { "TITLE": "Circuito Itaipu", "DESC": "Explora la Represa de Itaipu en un circuito que permite conocer de cerca sus operaciones y su importancia para la generación de energía." },
        "CITY_TOUR_FOZ": { "TITLE": "City Tour Foz do Iguaçu", "DESC": "Conoce los principales puntos turísticos de Foz do Iguaçu, incluyendo visitas al Templo Budista, Mezquita Omar Ibn Al-Khattab y el Hito de las Tres Fronteras, explorando la diversidad cultural e histórica de la ciudad." },
        "CITY_TOUR_PY": { "TITLE": "City Tour Paraguay", "DESC": "Descubre un lado diferente de Paraguay, visitando puntos culturales e históricos más allá de las tradicionales compras en Ciudad del Este." },
        "COMPLEXO_DREAMS": { "TITLE": "Complejo Dreams", "DESC": "Explora un conjunto de atracciones que incluye el Museo de Cera, Maravillas del Mundo, Valle de los Dinosaurios y Dreams Motor Show, ofreciendo experiencias interactivas y educativas para toda la familia." },
        "ICE_BAR": { "TITLE": "Dreams Ice Bar", "DESC": "Experimenta un bar hecho completamente de hielo, con elaboradas esculturas y decoraciones, donde puedes disfrutar de bebidas servidas en vasos de hielo en una atmósfera helada e impresionante." },
        "ITAIPU_ILUMINADA": { "TITLE": "Itaipu Iluminada", "DESC": "Disfruta de un espectáculo nocturno donde la represa de Itaipu se ilumina con más de 747 reflectores y 112 luminarias, creando una experiencia visual impresionante." },
        "ITAIPU_PANORAMICA": { "TITLE": "Itaipu Panorámica", "DESC": "Conoce la grandiosidad de la Represa de Itaipu en un tour que ofrece vistas completas de la represa, el vertedero y el lago de Itaipu desde puntos de observación estratégicos." },
        "REFUGIO": { "TITLE": "Refugio Biológico Itaipu", "DESC": "Explora la riqueza de la biodiversidad local en senderos ecológicos que atraviesan áreas de preservación, conociendo proyectos de conservación ambiental y diversas especies de plantas y animales." },
        "KATTAMARAM": { "TITLE": "Kattamaram II", "DESC": "Navega por las aguas del Río Iguazú en un lujoso barco, disfrutando de vistas panorámicas de las costas brasileñas, argentinas y paraguayas, con opción de buffet a bordo." },
        "MACUCO": { "TITLE": "Macuco Safari", "DESC": "Aventúrate en un tour que combina un sendero en el bosque y navegación en barco hasta las cascadas del Iguazú, brindando una experiencia emocionante cerca de las aguas." },
        "MARAVILHAS": { "TITLE": "Maravillas del Mundo", "DESC": "Haz un viaje por los mayores monumentos del planeta en un parque temático que presenta réplicas detalladas de iconos como la Torre Eiffel, el Cristo Redentor y la Estatua de la Libertad." },
        "MESQUITA": { "TITLE": "Mezquita Árabe", "DESC": "Visita la Mezquita Omar Ibn Al-Khatab, un punto turístico que destaca la diversidad cultural de Foz do Iguaçu, con arquitectura impresionante y un ambiente de serenidad." },
        "MOTOR_SHOW": { "TITLE": "Motor Show", "DESC": "Disfruta de una combinación única de motocicletas, música en vivo y gastronomía en un entorno temático que encanta a los entusiastas de las motos y la cultura." },
        "MUSEU_CERA": { "TITLE": "Museo de Cera", "DESC": "Encuentra réplicas realistas de figuras icónicas de la cultura pop, historia y entretenimiento en escenarios interactivos que permiten fotos memorables." },
        "NOITE_ARG": { "TITLE": "Noche Argentina - Cena y Show", "DESC": "Disfruta de la cultura argentina en una noche especial con cena típica y presentaciones de tango y folclore en Puerto Iguazú." },
        "NOITE_CATARATAS": { "TITLE": "Noche en las Cataratas", "DESC": "Experimenta una visita nocturna a las Cataratas del Iguazú, contemplando las cascadas iluminadas por la luna y luces especiales, en una atmósfera mística y envolvente." },
        "PARQUE_AVES": { "TITLE": "Parque de las Aves", "DESC": "Visita un santuario de conservación con más de 1.300 aves de 150 especies diferentes, caminando por senderos que pasan por pajareras gigantes e interactuando con aves tropicales en su hábitat natural." },
        "POR_SOL_CATARATAS": { "TITLE": "Puesta de Sol en las Cataratas", "DESC": "Vive la magia de la puesta de sol en las Cataratas del Iguazú, cuando las aguas reflejan los tonos dorados y anaranjados del sol, brindando una experiencia tranquila e inolvidable." },
        "POR_SOL_MARCO": { "TITLE": "Puesta de Sol en el Hito de las Tres Fronteras", "DESC": "Disfruta de una de las más bellas puestas de sol en Foz do Iguaçu, con vistas a los ríos Iguazú y Paraná, mientras disfrutas de presentaciones culturales y gastronomía local." },
        "MOVIES_CAR": { "TITLE": "Movies Car", "DESC": "¡Vive la magia del cine en uno de los autocines temáticos más grandes de Brasil! Movies Car ofrece una experiencia única con shows, personajes y películas inolvidables en un escenario inspirado en Hollywood." },
        "TEMPLO_BUDISTA": { "TITLE": "Templo Budista", "DESC": "Visita el Templo Budista de Foz do Iguaçu, admira las estatuas de Buda y la arquitectura tradicional mientras aprendes sobre la filosofía budista en un ambiente de paz y serenidad." },
        "HELICOPTERO": { "TITLE": "Vuelo en Helicóptero sobre las Cataratas", "DESC": "Obtén una perspectiva única de las Cataratas del Iguazú en un vuelo panorámico en helicóptero, disfrutando de las cascadas y el bosque circundante desde un ángulo privilegiado." },
        "WONDER_PARK": { "TITLE": "Wonder Park", "DESC": "Diviértete en un parque temático que combina atracciones como Movie Cars y Water Show, ofreciendo entretenimiento para toda la familia." }
    },
    "PACKAGES": {
        "AVENTURA_CATARATAS": {
            "TITLE": "Aventura en las Cataratas",
            "DESC": "Explora las Cataratas del Iguazú de forma emocionante, combinando senderos, paseos en barco y un vuelo panorámico sobre las cascadas.",
            "ACTIVITIES": ["Macuco Safari", "Sendero en las Cataratas del Iguazú", "Vuelo en Helicóptero sobre las Cataratas"]
        },
        "EXPLORADOR_NATUREZA": {
            "TITLE": "Explorador de la Naturaleza",
            "DESC": "Conoce la biodiversidad de Foz do Iguaçu en un tour que combina la fauna y flora preservadas de la región.",
            "ACTIVITIES": ["Parque de las Aves", "Refugio Biológico Itaipu", "Cataratas del Iguazú (lado brasileño)"]
        },
        "ADRENALINA_TOTAL": {
            "TITLE": "Adrenalina Total",
            "DESC": "Un paquete hecho para los amantes de la aventura, con actividades llenas de emoción y contacto directo con la naturaleza.",
            "ACTIVITIES": ["Macuco Safari", "Vuelo en Helicóptero sobre las Cataratas", "Kattamaram II"]
        },
        "HISTORIA_CULTURA": {
            "TITLE": "Historia y Cultura de Foz",
            "DESC": "Descubre la riqueza cultural y religiosa de Foz do Iguaçu visitando templos y monumentos históricos.",
            "ACTIVITIES": ["Templo Budista", "Mezquita Árabe", "Hito de las Tres Fronteras"]
        },
        "NOITE_ARGENTINA": {
            "TITLE": "Noche Argentina",
            "DESC": "Disfruta de la cultura argentina con una cena temática y un show de tango y folclore en Puerto Iguazú.",
            "ACTIVITIES": ["Cena y Show de Tango", "Casino de Puerto Iguazú (opcional)"]
        },
        "DESCOBRINDO_ARGENTINA": {
            "TITLE": "Descubriendo Argentina",
            "DESC": "Explora los encantos del lado argentino de Foz do Iguaçu, incluyendo las impresionantes Cataratas Argentinas, un tour por el centro histórico de Puerto Iguazú y una experiencia gastronómica con platos típicos.",
            "ACTIVITIES": ["Cataratas del Iguazú - Lado Argentino", "City Tour Argentina", "Almuerzo en Puerto Iguazú", "Duty Free Shop"]
        },
        "AVENTURAS_PY": {
            "TITLE": "Aventuras en Paraguay",
            "DESC": "Descubre un lado cultural y natural de Paraguay que va más allá de las compras, visitando monumentos históricos, impresionantes cascadas y mercados tradicionales.",
            "ACTIVITIES": ["City Tour Paraguay", "Saltos del Monday", "Catedral de San Blas", "Iglesia San Lucas", "Lago de la República", "Mercado de Abasto"]
        },
        "TOUR_FRONTEIRAS": {
            "TITLE": "Tour Tres Fronteras",
            "DESC": "Visita los principales puntos turísticos de tres países en un solo día, explorando Brasil, Paraguay y Argentina.",
            "ACTIVITIES": ["City Tour Foz do Iguaçu", "City Tour Paraguay", "Hito de las Tres Fronteras"]
        },
        "DIVERSAO_FAMILIA": {
            "TITLE": "Diversión en Familia",
            "DESC": "Paquete ideal para toda la familia, combinando atracciones educativas e interactivas para niños y adultos.",
            "ACTIVITIES": ["Parque de las Aves", "Complejo Dreams", "Wonder Park"]
        },
        "ROMANCE_CATARATAS": {
            "TITLE": "Romance en las Cataratas",
            "DESC": "Un paquete perfecto para parejas que desean momentos especiales en un escenario paradisíaco.",
            "ACTIVITIES": ["Puesta de Sol en el Parque Nacional do Iguaçu", "Cena en Kattamaram II", "Noche en las Cataratas"]
        },
        "LUA_MEL": {
            "TITLE": "Luna de Miel en Foz",
            "DESC": "Celebra el amor con un paquete exclusivo que incluye experiencias únicas e inolvidables.",
            "ACTIVITIES": ["Vuelo en Helicóptero sobre las Cataratas", "Cena romántica", "Tour nocturno en el Hito de las Tres Fronteras"]
        },
        "FOZ_3_DIAS": {
            "TITLE": "Foz do Iguaçu 3 Días y 2 Noches",
            "DESC": "Descubre los principales puntos turísticos de Foz do Iguaçu en un viaje de 3 días.",
            "ACTIVITIES": ["Cataratas del Iguazú", "Itaipu Panorámica", "Parque de las Aves", "Cena Temática (opcional)"]
        },
        "FOZ_5_DIAS": {
            "TITLE": "Foz do Iguaçu 5 Días y 4 Noches",
            "DESC": "Un itinerario completo para quienes quieren explorar Foz do Iguaçu con calma y disfrutar de todas las atracciones.",
            "ACTIVITIES": ["Cataratas del Iguazú", "Macuco Safari", "Parque de las Aves", "Itaipu Iluminada", "Noche Argentina", "City Tour Paraguay"]
        }
    }
};

function updateFile(filename, newContentData) {
    const filePath = path.join(__dirname, 'public/assets/i18n', filename);
    const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    content.TOURS = newContentData.TOURS;
    content.PACKAGES = newContentData.PACKAGES;
    fs.writeFileSync(filePath, JSON.stringify(content, null, 2));
    console.log(`Updated ${filename}`);
}

updateFile('pt.json', pt);
updateFile('en.json', en);
updateFile('es.json', es);
