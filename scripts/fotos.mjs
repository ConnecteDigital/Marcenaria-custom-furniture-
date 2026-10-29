// Otimiza as fotos da pasta fotos/ para src/assets/fotos/ (redimensiona e comprime).
//   fotos/<slug>/      → a primeira foto vira src/assets/fotos/<slug>.jpg (card do serviço)
//   fotos/ambientes/   → cada foto vira src/assets/fotos/ambientes/<nome>.jpg (galeria)
// Fotos já convertidas não são refeitas: para trocar uma foto, apague o .jpg gerado.
import { readdir, mkdir, access } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const ORIGEM = 'fotos';
const DESTINO = 'src/assets/fotos';
const EXTENSOES = new Set(['.jpg', '.jpeg', '.png', '.webp']);

const existe = (p) => access(p).then(() => true, () => false);
const imagens = async (pasta) =>
  (await readdir(pasta)).filter((f) => EXTENSOES.has(path.extname(f).toLowerCase())).sort();

async function converter(origem, destino) {
  if (await existe(destino)) return;
  await sharp(origem)
    .rotate()
    .resize(1600, 1600, { fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: 82, progressive: true, mozjpeg: true })
    .toFile(destino);
  console.log(`foto convertida: ${destino}`);
}

await mkdir(path.join(DESTINO, 'ambientes'), { recursive: true });
if (!(await existe(ORIGEM))) process.exit(0);
const pastas = (await readdir(ORIGEM, { withFileTypes: true })).filter((d) => d.isDirectory());

for (const pasta of pastas) {
  const dir = path.join(ORIGEM, pasta.name);
  const arquivos = await imagens(dir);
  if (pasta.name === 'ambientes') {
    for (const f of arquivos) {
      await converter(path.join(dir, f), path.join(DESTINO, 'ambientes', `${path.parse(f).name}.jpg`));
    }
  } else if (arquivos.length > 0) {
    await converter(path.join(dir, arquivos[0]), path.join(DESTINO, `${pasta.name}.jpg`));
  }
}
