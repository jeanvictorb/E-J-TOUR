import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../card/card.component';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

// Chave de tradução (PACKAGES.<key>.TITLE / .DESC / .ACTIVITIES em public/assets/i18n/*.json)
// + metadados que não mudam por idioma (imagem, categoria, destaque)
interface PackageMeta {
  key: string;
  imagem: string;
  categoria?: string;
  destaque?: 'novo' | 'popular';
}

// Pacote já resolvido no idioma atual, pronto para exibição
interface Package extends PackageMeta {
  titulo: string;
  descricao: string;
  atividades: string[];
}

@Component({
  selector: 'app-pacote-from',
  standalone: true,
  imports: [CardComponent, CommonModule, TranslateModule],
  templateUrl: './pacote-from.component.html',
  styleUrl: './pacote-from.component.scss',
})
export class PacoteFromComponent implements OnInit {
  // Metadados dos pacotes: o texto (título/descrição/atividades) vive nos
  // arquivos de tradução (public/assets/i18n/pt|en|es.json, seção PACKAGES),
  // então atualizar o conteúdo não exige mexer neste componente.
  private packageMeta: PackageMeta[] = [
    { key: 'AVENTURA_CATARATAS', imagem: './../assets/imgPackage/aventura_nas_cataratas.webp', categoria: 'aventura', destaque: 'popular' },
    { key: 'EXPLORADOR_NATUREZA', imagem: './../assets/imgPackage/explorando_natureza.webp', categoria: 'natureza' },
    { key: 'ADRENALINA_TOTAL', imagem: './../assets/imgPackage/adrenalina.webp', categoria: 'aventura', destaque: 'novo' },
    { key: 'HISTORIA_CULTURA', imagem: './../assets/imgPackage/historia.webp', categoria: 'cultural' },
    { key: 'NOITE_ARGENTINA', imagem: './../assets/imgPackage/noite_argentina.webp', categoria: 'cultural' },
    { key: 'DESCOBRINDO_ARGENTINA', imagem: './../assets/imgPackage/descobrindo-argentina.webp', categoria: 'cultural' },
    { key: 'AVENTURAS_PY', imagem: './../assets/imgCard/compraspy.webp', categoria: 'cultural' },
    { key: 'TOUR_FRONTEIRAS', imagem: './../assets/imgPackage/fronteiras.webp', categoria: 'cultural' },
    { key: 'DIVERSAO_FAMILIA', imagem: './../assets/imgPackage/diversao.webp', categoria: 'familia', destaque: 'popular' },
    { key: 'ROMANCE_CATARATAS', imagem: './../assets/imgPackage/romance.webp', categoria: 'romantico' },
    { key: 'LUA_MEL', imagem: './../assets/imgPackage/lua_mel.webp', categoria: 'romantico', destaque: 'novo' },
    { key: 'FOZ_3_DIAS', imagem: './../assets/imgPackage/passeio-3dias.webp', categoria: 'completo' },
    { key: 'FOZ_5_DIAS', imagem: './../assets/imgPackage/passeio-5dias.webp', categoria: 'completo', destaque: 'popular' },
  ];

  // Lista completa de pacotes já traduzidos para o idioma atual
  allPackages: Package[] = [];

  // Pacotes exibidos (podem ser filtrados)
  cardpackage: Package[] = [];

  // Categoria ativa do filtro
  activeFilter: string = 'todos';

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.loadPackages();

    // Recarrega os textos sempre que o idioma mudar
    this.translate.onLangChange.subscribe(() => this.loadPackages());
  }

  private loadPackages(): void {
    this.translate.get('PACKAGES').subscribe((packages: any) => {
      this.allPackages = this.packageMeta.map(meta => {
        const entry = packages?.[meta.key] ?? {};
        return {
          ...meta,
          titulo: entry.TITLE ?? meta.key,
          descricao: entry.DESC ?? '',
          atividades: entry.ACTIVITIES ?? [],
        };
      });
      // Reaplica o filtro ativo com os novos textos
      this.filterPackages(this.activeFilter);
    });
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
