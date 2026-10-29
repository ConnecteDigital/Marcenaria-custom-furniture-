// Dados centrais da empresa. Altere aqui e o site inteiro é atualizado.
import { SITE_URL } from './url.mjs';

// WhatsApp no formato 55 + DDD + número, só dígitos
const WHATSAPP_DIGITS = '5562982038597';

export const site = {
  name: 'Marcenaria Custom Furniture',
  url: SITE_URL,
  city: 'Goiânia',
  state: 'GO',
  whatsappDigits: WHATSAPP_DIGITS,
  phoneDisplay: '(62) 98203-8597',
  // Botão de ligação no formato pedido pelo cliente
  tel: 'tel:062 98203-8597',
  description:
    'Marcenaria Custom Furniture: móveis planejados sob medida, conserto de móveis planejados danificados, fabricação de móveis em geral e manutenção em móveis de entrega de imobiliária. Do projeto à execução.',
};

export const DEFAULT_WHATSAPP_MESSAGE =
  'Olá! Vim pelo site da Marcenaria Custom Furniture e gostaria de um orçamento.';

export function whatsappUrl(message: string = DEFAULT_WHATSAPP_MESSAGE) {
  return `https://api.whatsapp.com/send?phone=${site.whatsappDigits}&text=${encodeURIComponent(message)}`;
}

// Tag do Google (gtag.js) e contêiner do Google Tag Manager.
// Deixe vazio ('') enquanto o cliente não mandar os códigos: nada é carregado.
export const googleTagId = '';
export const gtmId = '';
