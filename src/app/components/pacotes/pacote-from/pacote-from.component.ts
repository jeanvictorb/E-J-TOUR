import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../card/card.component';
import { CommonModule } from '@angular/common';

// Interface para melhor tipagem
interface Package {
  titulo: string;
  descricao: string;
  atividades: string[];
  imagem: string;
  categoria?: string; // Opcional para filtros
  destaque?: 'novo' | 'popular'; // Opcional para badges
}

@Component({
  selector: 'app-pacote-from',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './pacote-from.component.html',
  styleUrl: './pacote-from.component.scss',
})
export class PacoteFromComponent implements OnInit {
  // Lista completa de pacotes
  allPackages: Package[] = [
    {
      titulo: 'Aventura nas Cataratas',
      descricao:
        'Explore as Cataratas do Iguaçu de forma emocionante, combinando trilhas, passeios de barco e um voo panorâmico sobre as quedas d.água.',
      atividades: [
        'Macuco Safari',
        'Trilha nas Cataratas do Iguaçu',
        'Voo de Helicóptero sobre as Cataratas',
      ],
      imagem: './../assets/imgPackage/aventura_nas_cataratas.png',
      categoria: 'aventura',
      destaque: 'popular'
    },
    {
      titulo: 'Explorador da Natureza',
      descricao:
        'Conheça a biodiversidade de Foz do Iguaçu em um passeio que combina fauna e flora preservadas da região.',
      atividades: [
        'Parque das Aves',
        'Itaipu Refúgio Biológico',
        'Cataratas do Iguaçu (lado brasileiro)',
      ],
      imagem: './../assets/imgPackage/explorando_natureza.png',
      categoria: 'natureza'
    },
    {
      titulo: 'Adrenalina Total',
      descricao:
        'Um pacote feito para os amantes de aventura, com atividades cheias de emoção e contato direto com a natureza.',
      atividades: [
        'Macuco Safari',
        'Voo de Helicóptero sobre as Cataratas',
        'Kattamaram II',
      ],
      imagem: './../assets/imgPackage/adrenalina.png',
      categoria: 'aventura',
      destaque: 'novo'
    },
    {
      titulo: 'História e Cultura de Foz',
      descricao:
        'Descubra a riqueza cultural e religiosa de Foz do Iguaçu visitando templos e monumentos históricos.',
      atividades: [
        'Templo Budista',
        'Mesquita Árabe',
        'Marco das Três Fronteiras',
      ],
      imagem: './../assets/imgPackage/historia.png',
      categoria: 'cultural'
    },
    {
      titulo: 'Noite Argentina',
      descricao:
        'Aprecie a cultura argentina com um jantar temático e um show de tango e folclore em Puerto Iguazú.',
      atividades: [
        'Jantar e Show de Tango',
        'Cassino de Puerto Iguazú (opcional)',
      ],
      imagem: './../assets/imgPackage/noite_argentina.png',
      categoria: 'cultural'
    },
    {
      titulo: 'Descobrindo a Argentina',
      descricao:
        'Explore os encantos do lado argentino de Foz do Iguaçu, incluindo as impressionantes Cataratas Argentinas, um passeio pelo centro histórico de Puerto Iguazú e uma experiência gastronômica com pratos típicos.',
      atividades: [
        'Cataratas do Iguaçu - Lado Argentino',
        'City Tour Argentina',
        'Almoço em Puerto Iguazú',
        'Duty Free Shop',
      ],
      imagem: './../assets/imgPackage/descobrindo-argentina.png',
      categoria: 'cultural'
    },
    {
      titulo: 'Aventuras no Paraguai',
      descricao:
        'Descubra um lado cultural e natural do Paraguai que vai além das compras, visitando monumentos históricos, cachoeiras impressionantes e mercados tradicionais.',
      atividades: [
        'City Tour Paraguai',
        'Salto Monday',
        'Catedral de San Blas',
        'Igreja São Lucas',
        'Lago da República',
        'Mercado de Abasto',
      ],
      imagem: './../assets/imgCard/compraspy.jpg',
      categoria: 'cultural'
    },
    {
      titulo: 'Tour Três Fronteiras',
      descricao:
        'Visite os principais pontos turísticos de três países em um único dia, conhecendo o Brasil, Paraguai e Argentina.',
      atividades: [
        'City Tour Foz do Iguaçu',
        'City Tour Paraguai',
        'Marco das Três Fronteiras',
      ],
      imagem: './../assets/imgPackage/fronteiras.png',
      categoria: 'cultural'
    },
    {
      titulo: 'Diversão em Família',
      descricao:
        'Pacote ideal para toda a família, combinando atrações educativas e interativas para crianças e adultos.',
      atividades: ['Parque das Aves', 'Complexo Dreams', 'Wonder Park'],
      imagem: './../assets/imgPackage/diversao.png',
      categoria: 'familia',
      destaque: 'popular'
    },
    {
      titulo: 'Romance nas Cataratas',
      descricao:
        'Um pacote perfeito para casais que desejam momentos especiais em um cenário paradisíaco.',
      atividades: [
        'Pôr do Sol no Parque Nacional do Iguaçu',
        'Jantar no Kattamaram II',
        'Noite nas Cataratas',
      ],
      imagem: './../assets/imgPackage/romance.png',
      categoria: 'romantico'
    },
    {
      titulo: 'Lua de Mel em Foz',
      descricao:
        'Celebre o amor com um pacote exclusivo que inclui experiências únicas e inesquecíveis.',
      atividades: [
        'Voo de Helicóptero sobre as Cataratas',
        'Jantar romântico',
        'Passeio noturno no Marco das Três Fronteiras',
      ],
      imagem: './../assets/imgPackage/lua_mel.png',
      categoria: 'romantico',
      destaque: 'novo'
    },
    {
      titulo: 'Foz do Iguaçu 3 Dias e 2 Noites',
      descricao:
        'Descubra os principais pontos turísticos de Foz do Iguaçu em uma viagem de 3 dias.',
      atividades: [
        'Cataratas do Iguaçu',
        'Itaipu Panorâmica',
        'Parque das Aves',
        'Jantar Temático (opcional)',
      ],
      imagem: './../assets/imgPackage/passeio-3dias.png',
      categoria: 'completo'
    },
    {
      titulo: 'Foz do Iguaçu 5 Dias e 4 Noites',
      descricao:
        'Um roteiro completo para quem quer explorar Foz do Iguaçu com calma e aproveitar todas as atrações.',
      atividades: [
        'Cataratas do Iguaçu',
        'Macuco Safari',
        'Parque das Aves',
        'Itaipu Iluminada',
        'Noite Argentina',
        'City Tour Paraguai',
      ],
      imagem: './../assets/imgPackage/passeio-5dias.png',
      categoria: 'completo',
      destaque: 'popular'
    },
  ];

  // Pacotes exibidos (podem ser filtrados)
  cardpackage: Package[] = [];

  // Categoria ativa do filtro
  activeFilter: string = 'todos';

  ngOnInit(): void {
    // Inicializa com todos os pacotes
    this.cardpackage = this.allPackages;
  }

  // Método para filtrar pacotes (opcional)
  filterPackages(categoria: string): void {
    this.activeFilter = categoria;
    
    if (categoria === 'todos') {
      this.cardpackage = this.allPackages;
    } else {
      this.cardpackage = this.allPackages.filter(
        pkg => pkg.categoria === categoria
      );
    }

    // Scroll suave para o topo da lista
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Método para obter badge (opcional)
  getBadgeClass(destaque?: 'novo' | 'popular'): string {
    if (destaque === 'novo') return 'package-badge new';
    if (destaque === 'popular') return 'package-badge popular';
    return '';
  }

  // Método para ordenar pacotes (opcional)
  sortPackages(order: 'asc' | 'desc'): void {
    this.cardpackage.sort((a, b) => {
      if (order === 'asc') {
        return a.titulo.localeCompare(b.titulo);
      } else {
        return b.titulo.localeCompare(a.titulo);
      }
    });
  }
}