import { Component, OnInit, HostListener } from '@angular/core';
import { CardComponent } from '../../card/card.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

// Chave de tradução (TOURS.<key>.TITLE / .DESC em public/assets/i18n/*.json)
// + metadados que não mudam por idioma (imagem, categoria)
interface TourMeta {
  key: string;
  imagem: string;
  categoria?: string;
}

// Passeio já resolvido no idioma atual, pronto para exibição/busca
interface Tour extends TourMeta {
  titulo: string;
  descricao: string;
}

@Component({
  selector: 'app-passeio-from',
  standalone: true,
  imports: [CardComponent, CommonModule, FormsModule, TranslateModule],
  templateUrl: './passeio-from.component.html',
  styleUrl: './passeio-from.component.scss',
})
export class PasseioFromComponent implements OnInit {
  // Metadados dos passeios: o texto (título/descrição) vive nos arquivos de
  // tradução (public/assets/i18n/pt|en|es.json, seção TOURS), então
  // atualizar o conteúdo não exige mexer neste componente.
  private tourMeta: TourMeta[] = [
    { key: 'AQUAFOZ', imagem: './../assets/img/acquafoz1.webp', categoria: 'familia' },
    { key: 'CATARATAS_BR', imagem: './../assets/img/cataratas.webp', categoria: 'natureza' },
    { key: 'ITAIPU_CIRCUITO', imagem: './../assets/img/itaipu.webp', categoria: 'cultura' },
    { key: 'CITY_TOUR_FOZ', imagem: './../assets/imgCard/citytour.webp', categoria: 'cultura' },
    { key: 'CITY_TOUR_PY', imagem: './../assets/imgCard/compraspy.webp', categoria: 'cultura' },
    { key: 'COMPLEXO_DREAMS', imagem: './../assets/imgCard/dreamsland.webp', categoria: 'familia' },
    { key: 'ICE_BAR', imagem: './../assets/imgCard/ice-bar.webp', categoria: 'familia' },
    { key: 'ITAIPU_ILUMINADA', imagem: './../assets/imgCard/itaipu_iluminada.webp', categoria: 'cultura' },
    { key: 'ITAIPU_PANORAMICA', imagem: './../assets/imgCard/itaipu_panoramica.webp', categoria: 'cultura' },
    { key: 'REFUGIO', imagem: './../assets/imgCard/refugio_biologico.webp', categoria: 'natureza' },
    { key: 'KATTAMARAM', imagem: './../assets/imgCard/katamaram.webp', categoria: 'aventura' },
    { key: 'MACUCO', imagem: './../assets/imgCard/macuco.webp', categoria: 'aventura' },
    { key: 'MARAVILHAS', imagem: './../assets/imgCard/maravilhas-do-mundo.webp', categoria: 'familia' },
    { key: 'MESQUITA', imagem: './../assets/img/mesquita.webp', categoria: 'cultura' },
    { key: 'MOTOR_SHOW', imagem: './../assets/imgCard/motoshow.webp', categoria: 'familia' },
    { key: 'MUSEU_CERA', imagem: './../assets/imgCard/museucera.webp', categoria: 'familia' },
    { key: 'NOITE_ARG', imagem: './../assets/imgCard/noite_arg.webp', categoria: 'cultura' },
    { key: 'NOITE_CATARATAS', imagem: './../assets/imgCard/luar.webp', categoria: 'natureza' },
    { key: 'PARQUE_AVES', imagem: './assets/img/bird_park.webp', categoria: 'natureza' },
    { key: 'POR_SOL_CATARATAS', imagem: './../assets/imgCard/por-do-sol-nas-cataratas.webp', categoria: 'natureza' },
    { key: 'POR_SOL_MARCO', imagem: './../assets/imgCard/por-do-sol-marco.webp', categoria: 'natureza' },
    { key: 'MOVIES_CAR', imagem: './../assets/imgCard/moviescar.webp', categoria: 'familia' },
    { key: 'TEMPLO_BUDISTA', imagem: './../assets/imgCard/templobudista.webp', categoria: 'cultura' },
    { key: 'HELICOPTERO', imagem: './../assets/imgCard/helicoptero.webp', categoria: 'aventura' },
    { key: 'WONDER_PARK', imagem: './../assets/imgCard/wonderpark.webp', categoria: 'familia' },
  ];

  // Lista completa de passeios já traduzidos para o idioma atual
  cardList: Tour[] = [];

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

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.loadTours();

    // Recarrega os textos (e reaplica busca/filtro) sempre que o idioma mudar
    this.translate.onLangChange.subscribe(() => this.loadTours());
  }

  private loadTours(): void {
    this.translate.get('TOURS').subscribe((tours: any) => {
      this.cardList = this.tourMeta.map(meta => {
        const entry = tours?.[meta.key] ?? {};
        return {
          ...meta,
          titulo: entry.TITLE ?? meta.key,
          descricao: entry.DESC ?? '',
        };
      });

      // Reaplica filtro/busca ativos com os novos textos
      if (this.searchTerm) {
        this.filterTours();
      } else if (this.activeCategory !== 'todos') {
        this.filterByCategory(this.activeCategory);
      } else {
        this.filteredCardList = this.cardList;
      }
    });
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
