import { Component, OnInit, HostListener } from '@angular/core';
import { CardComponent } from '../../card/card.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Interface para melhor tipagem
interface Tour {
  titulo: string;
  descricao: string;
  imagem: string;
  categoria?: string; // Opcional para filtros por categoria
}

@Component({
  selector: 'app-passeio-from',
  standalone: true,
  imports: [CardComponent, CommonModule, FormsModule],
  templateUrl: './passeio-from.component.html',
  styleUrl: './passeio-from.component.scss',
})
export class PasseioFromComponent implements OnInit {
  // Lista completa de passeios
  cardList: Tour[] = [
    {
      titulo: 'AquaFoz - Aquário de Foz do Iguaçu',
      descricao:
        "Explore o maior aquário da região com mais de 300 espécies de água doce e salgada em 3,3 milhões de litros. Uma jornada dos rios Iguaçu e Paraná até os oceanos, com túnel subaquático e experiências imersivas inesquecíveis.",
      imagem: './../assets/img/acquafoz1.png',
      categoria: 'familia'
    },
    {
      titulo: 'Cataratas do Iguaçu - Lado Brasileiro',
      descricao:
        "Explore as impressionantes quedas d'água das Cataratas do Iguaçu pelo lado brasileiro, com vistas panorâmicas e trilhas que proporcionam uma experiência inesquecível.",
      imagem: './../assets/img/cataratas.jpg',
      categoria: 'natureza'
    },
    {
      titulo: 'Circuito Itaipu',
      descricao:
        'Explore a Usina de Itaipu em um circuito que permite conhecer de perto suas operações e sua importância para a geração de energia.',
      imagem: './../assets/img/itaipu.jpg',
      categoria: 'cultura'
    },
    {
      titulo: 'City Tour Foz do Iguaçu',
      descricao:
        'Conheça os principais pontos turísticos de Foz do Iguaçu, incluindo visitas ao Templo Budista, à Mesquita Omar Ibn Al-Khattab e ao Marco das Três Fronteiras, explorando a diversidade cultural e histórica da cidade.',
      imagem: './../assets/imgCard/citytour.png',
      categoria: 'cultura'
    },
    {
      titulo: 'City Tour Paraguai',
      descricao:
        'Descubra um lado diferente do Paraguai, visitando pontos culturais e históricos além das tradicionais compras em Ciudad del Este.',
      imagem: './../assets/imgCard/compraspy.jpg',
      categoria: 'cultura'
    },
    {
      titulo: 'Complexo Dreams',
      descricao:
        'Explore um conjunto de atrações que inclui o Museu de Cera, Maravilhas do Mundo, Vale dos Dinossauros e Dreams Motor Show, oferecendo experiências interativas e educativas para toda a família.',
      imagem: './../assets/imgCard/dreamsland.webp',
      categoria: 'familia'
    },
    {
      titulo: 'Dreams Ice Bar',
      descricao:
        'Experimente um bar totalmente feito de gelo, com esculturas e decorações elaboradas, onde você pode desfrutar de bebidas servidas em copos de gelo em uma atmosfera gelada e deslumbrante.',
      imagem: './../assets/imgCard/ice-bar.webp',
      categoria: 'familia'
    },
    {
      titulo: 'Itaipu Iluminada',
      descricao:
        'Desfrute de um espetáculo noturno onde a barragem da Usina de Itaipu é iluminada com mais de 747 refletores e 112 luminárias, criando uma experiência visual impressionante.',
      imagem: './../assets/imgCard/itaipu_iluminada.png',
      categoria: 'cultura'
    },
    {
      titulo: 'Itaipu Panorâmica',
      descricao:
        'Conheça a grandiosidade da Usina de Itaipu em um tour que oferece vistas abrangentes da barragem, do vertedouro e do lago de Itaipu a partir de pontos de observação estratégicos.',
      imagem: './../assets/imgCard/itaipu_panoramica.jpg',
      categoria: 'cultura'
    },
    {
      titulo: 'Itaipu Refúgio Biológico',
      descricao:
        'Explore a riqueza da biodiversidade local em trilhas ecológicas que passam por áreas de preservação, conhecendo projetos de conservação ambiental e diversas espécies de plantas e animais.',
      imagem: './../assets/imgCard/refugio_biologico.jpeg',
      categoria: 'natureza'
    },
    {
      titulo: 'Kattamaram II',
      descricao:
        'Navegue pelas águas do Rio Iguaçu em um luxuoso barco, desfrutando de vistas panorâmicas das margens brasileiras, argentinas e paraguaias, com opção de buffet a bordo.',
      imagem: './../assets/imgCard/katamaram.png',
      categoria: 'aventura'
    },
    {
      titulo: 'Macuco Safari',
      descricao:
        'Aventure-se em um passeio que combina trilha na floresta e navegação de barco até as quedas das Cataratas do Iguaçu, proporcionando uma experiência emocionante e próxima das águas.',
      imagem: './../assets/imgCard/macuco.webp',
      categoria: 'aventura'
    },
    {
      titulo: 'Maravilhas do Mundo',
      descricao:
        'Faça uma viagem pelos maiores monumentos do planeta em um parque temático que apresenta réplicas detalhadas de ícones como a Torre Eiffel, o Cristo Redentor e a Estátua da Liberdade.',
      imagem: './../assets/imgCard/maravilhas-do-mundo.jpg',
      categoria: 'familia'
    },
    {
      titulo: 'Mesquita Árabe',
      descricao:
        'Visite a Mesquita Omar Ibn Al-Khatab, um ponto turístico que destaca a diversidade cultural de Foz do Iguaçu, com arquitetura impressionante e ambiente de serenidade.',
      imagem: './../assets/img/mesquita.jpg',
      categoria: 'cultura'
    },
    {
      titulo: 'Motor Show',
      descricao:
        'Aprecie uma combinação única de motocicletas, música ao vivo e gastronomia em um ambiente temático que encanta entusiastas de motos e cultura.',
      imagem: './../assets/imgCard/motoshow.jpg',
      categoria: 'familia'
    },
    {
      titulo: 'Museu de Cera',
      descricao:
        'Encontre réplicas realistas de figuras icônicas da cultura pop, história e entretenimento em cenários interativos que permitem fotos memoráveis.',
      imagem: './../assets/imgCard/museucera.jpg',
      categoria: 'familia'
    },
    {
      titulo: 'Noite Argentina - Jantar e Show',
      descricao:
        'Desfrute da cultura argentina em uma noite especial com jantar típico e apresentações de tango e folclore em Puerto Iguazú.',
      imagem: './../assets/imgCard/noite_arg.png',
      categoria: 'cultura'
    },
    {
      titulo: 'Noite nas Cataratas',
      descricao:
        'Experimente uma visita noturna às Cataratas do Iguaçu, contemplando as quedas iluminadas pela lua e por luzes especiais, em uma atmosfera mística e envolvente.',
      imagem: './../assets/imgCard/luar.jpg',
      categoria: 'natureza'
    },
    {
      titulo: 'Parque das Aves',
      descricao:
        'Visite um santuário de conservação com mais de 1.300 aves de 150 espécies diferentes, caminhando por trilhas que passam por viveiros gigantes e interagindo com aves tropicais em seu habitat natural.',
      imagem: './assets/img/bird_park.jpg',
      categoria: 'natureza'
    },
    {
      titulo: 'Pôr do Sol nas Cataratas',
      descricao:
        'Vivencie a mágica do pôr do sol nas Cataratas do Iguaçu, quando as águas refletem os tons dourados e alaranjados do sol, proporcionando uma experiência tranquila e inesquecível.',
      imagem: './../assets/imgCard/por-do-sol-nas-cataratas.jpg',
      categoria: 'natureza'
    },
    {
      titulo: 'Pôr do Sol no Marco das Três Fronteiras',
      descricao:
        'Aprecie um dos mais belos pôr do sol de Foz do Iguaçu, com vista para os rios Iguaçu e Paraná, enquanto aproveita apresentações culturais e gastronomia local.',
      imagem: './../assets/imgCard/por-do-sol-marco.webp',
      categoria: 'natureza'
    },
    {
      titulo: 'Movies Car',
      descricao:
        'Viva a magia do cinema em um dos maiores drive-ins temáticos do Brasil! O Movies Car oferece uma experiência única com shows, personagens e filmes inesquecíveis em um cenário inspirado em Hollywood.',
      imagem: './../assets/imgCard/moviescar.png',
      categoria: 'familia'
    },
    {
      titulo: 'Templo Budista',
      descricao:
        'Visite o Templo Budista de Foz do Iguaçu, admire as estátuas de Buda e a arquitetura tradicional enquanto aprende sobre a filosofia budista em um ambiente de paz e serenidade.',
      imagem: './../assets/imgCard/templobudista.webp',
      categoria: 'cultura'
    },
    {
      titulo: 'Voo de Helicóptero sobre as Cataratas',
      descricao:
        "Tenha uma perspectiva única das Cataratas do Iguaçu em um voo panorâmico de helicóptero, apreciando as quedas d'água e a floresta ao redor de um ângulo privilegiado.",
      imagem: './../assets/imgCard/helicoptero.jpg',
      categoria: 'aventura'
    },
    {
      titulo: 'Wonder Park',
      descricao:
        'Divirta-se em um parque temático que combina atrações como o Movie Cars e o Water Show, oferecendo entretenimento para toda a família.',
      imagem: './../assets/imgCard/wonderpark.webp',
      categoria: 'familia'
    },
  ];

  // Lista filtrada de passeios
  filteredCardList: Tour[] = [];

  // Termo de busca
  searchTerm: string = '';

  // Categoria ativa
  activeCategory: string = 'todos';

  // Controle do botão "voltar ao topo"
  showBackToTop: boolean = false;

  // Loading state (opcional)
  isLoading: boolean = false;

  ngOnInit(): void {
    // Inicializa com todos os passeios
    this.filteredCardList = this.cardList;
  }

  // Detecta scroll para mostrar/ocultar botão "voltar ao topo"
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showBackToTop = window.pageYOffset > 300;
  }

  // Filtra passeios por termo de busca
  filterTours(): void {
    const term = this.searchTerm.toLowerCase().trim();
    
    if (!term) {
      this.filteredCardList = this.cardList;
      return;
    }

    this.filteredCardList = this.cardList.filter(tour =>
      tour.titulo.toLowerCase().includes(term) ||
      tour.descricao.toLowerCase().includes(term)
    );
  }

  // Filtra por categoria (opcional)
  filterByCategory(categoria: string): void {
    this.activeCategory = categoria;
    this.searchTerm = ''; // Limpa busca ao mudar categoria
    
    if (categoria === 'todos') {
      this.filteredCardList = this.cardList;
    } else {
      this.filteredCardList = this.cardList.filter(
        tour => tour.categoria === categoria
      );
    }

    // Scroll suave para o topo
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Limpa a busca
  clearSearch(): void {
    this.searchTerm = '';
    this.filteredCardList = this.cardList;
  }

  // Volta ao topo da página
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Método para ordenar (opcional)
  sortTours(order: 'asc' | 'desc' | 'popular'): void {
    if (order === 'asc') {
      this.filteredCardList.sort((a, b) => a.titulo.localeCompare(b.titulo));
    } else if (order === 'desc') {
      this.filteredCardList.sort((a, b) => b.titulo.localeCompare(a.titulo));
    }
    // Para 'popular', você precisaria ter uma propriedade de popularidade
  }

  // Método para obter contagem por categoria (opcional)
  getCategoryCount(categoria: string): number {
    return this.cardList.filter(tour => tour.categoria === categoria).length;
  }
}