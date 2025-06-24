// Primeira opção

import {soma, sub} from './operacoesESM.js';

console.log(soma(2, 3));
console.log(sub(2, 3));

// Segunda opção

import * as operacoes from './operacoesESM.js';

console.log(operacoes.soma(2, 3));
console.log(operacoes.sub(2, 3));

// Terceira opção

import bobagem, {sub} from './operacoesESM.js';

console.log(bobagem(2, 3));
console.log(sub(2, 3));

// Quarta opção

import { Calculadora } from './operacoesESM.js';

const calculadora = new Calculadora();
console.log(calculadora.soma(2, 3));
console.log(calculadora.sub(2, 3));


