import type { ImageMetadata } from 'astro';

// Fotos otimizadas pelo scripts/fotos.mjs a partir da pasta fotos/ na raiz.
// fotos/<slug-do-serviço>/  → foto do card do serviço (src/assets/fotos/<slug>.jpg)
// fotos/ambientes/<nome>.jpg → galeria de ambientes (src/assets/fotos/ambientes/<nome>.jpg)
const servicoArquivos = import.meta.glob<{ default: ImageMetadata }>('../assets/fotos/*.jpg', { eager: true });
const ambienteArquivos = import.meta.glob<{ default: ImageMetadata }>('../assets/fotos/ambientes/*.jpg', { eager: true });

const altsServicos: Record<string, string> = {
  'moveis-planejados': 'Cozinha planejada com armários em madeira e branco sob medida',
  'conserto-de-moveis-planejados': 'Marceneiro regulando a dobradiça da porta de um armário planejado',
  'fabricacao-de-moveis': 'Móveis em madeira sendo fabricados na oficina de marcenaria',
  'manutencao-imobiliaria': 'Cozinha e lavanderia planejadas de apartamento pronto para a entrega das chaves',
  'projeto-planejamento-execucao': 'Quarto planejado com guarda-roupa e cabeceira sob medida',
};

// Ordem e legendas da galeria (cozinha e quarto já aparecem nos cards de serviço). O nome do arquivo em fotos/ambientes/ deve ser a chave.
export const ambientes: { nome: string; legenda: string; alt: string }[] = [
  { nome: 'closet', legenda: 'Closet', alt: 'Closet planejado com prateleiras, gavetas e cabideiros' },
  { nome: 'sala', legenda: 'Painel de TV', alt: 'Sala com painel de TV e rack planejados' },
  { nome: 'banheiro', legenda: 'Banheiro', alt: 'Banheiro com gabinete planejado sob a pia' },
  { nome: 'escritorio', legenda: 'Home office', alt: 'Home office com bancada e estante planejadas' },
];

export interface Foto {
  src: ImageMetadata;
  alt: string;
}

export function fotoDoServico(slug: string): Foto | undefined {
  const mod = servicoArquivos[`../assets/fotos/${slug}.jpg`];
  if (!mod) return undefined;
  return { src: mod.default, alt: altsServicos[slug] ?? 'Móvel feito pela Marcenaria Custom Furniture' };
}

export function fotosDosAmbientes() {
  return ambientes
    .map((a) => ({ ...a, src: ambienteArquivos[`../assets/fotos/ambientes/${a.nome}.jpg`]?.default }))
    .filter((a): a is typeof a & { src: ImageMetadata } => Boolean(a.src));
}
