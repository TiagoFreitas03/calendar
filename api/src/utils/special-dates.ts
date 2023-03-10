import { SpecialDate } from "../interfaces/SpecialDate"

/** datas especiais fixas no */
export const specialDates: SpecialDate[] = [
	// Janeiro
		{ day: 1, month: 0, name: 'Confraternização', type: 'FN' },
		{ day: 1, month: 0, name: 'Ano-Novo', type: 'DC' },
	// Março
		{ day: 8, month: 2, name: 'Dia Internacional da Mulher', type: 'DC' },
	// Abril
		{ day: 21, month: 3, name: 'Tiradentes', type: 'FN' },
		{ day: 19, month: 3, name: 'Dia do Índio', type: 'DC' },
		{ day: 22, month: 3, name: 'Descobrimento do Brasil', type: 'DC' },
	// Maio
		{ day: 1, month: 4, name: 'Dia do Trabalho', type: 'FN' },
	// Junho
		{ day: 12, month: 5, name: 'Dia dos Namorados', type: 'DC' },
		{ day: 24, month: 5, name: 'Dia de São João', type: 'DC' },
	// Julho
		{ day: 9, month: 6, name: 'Dia da Revolução Constitucionalista', type: 'DC' },
		{ day: 20, month: 6, name: 'Dia do Amigo e Internacional da Amizade', type: 'DC' },
	// Agosto
		{ day: 22, month: 7, name: 'Dia do Folclore', type: 'DC' },
		{ day: 25, month: 7, name: 'Dia do Soldado', type: 'DC' },
	// Setembro
		{ day: 7, month: 8, name: 'Independência do Brasil', type: 'FN' },
		{ day: 21, month: 8, name: 'Dia da Árvore', type: 'DC' },
	// Outubro
		{ day: 12, month: 9, name: 'Nossa Senhora Aparecida', type: 'FN' },
		{ day: 12, month: 9, name: 'Dia das Crianças', type: 'DC' },
		{ day: 15, month: 9, name: 'Dia do Professor', type: 'DC' },
		{ day: 31, month: 9, name: 'Dia das Bruxas (Halloween)', type: 'DC' },
		{ day: 31, month: 9, name: 'Dia do Saci', type: 'DC' },
		{ day: 28, month: 9, name: 'Dia do Servidor Público', type: 'PF' },
	// Novembro
		{ day: 2, month: 10, name: 'Finados', type: 'FN' },
		{ day: 15, month: 10, name: 'Proclamação da República', type: 'FN' },
		{ day: 1, month: 10, name: 'Dia de Todos os Santos', type: 'DC' },
		{ day: 19, month: 10, name: 'Dia da Bandeira', type: 'DC' },
		{ day: 20, month: 10, name: 'Dia Nacional da Consciência Negra', type: 'DC' },
	// Dezembro
		{ day: 25, month: 11, name: 'Natal', type: 'FN' },
		{ day: 24, month: 11, name: 'Véspera de Natal', type: 'DC' },
		{ day: 31, month: 11, name: 'Véspera de Ano-Novo', type: 'DC' }
]
