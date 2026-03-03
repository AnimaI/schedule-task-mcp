import type { Locale } from './locales/types.js';
import zh from './locales/zh.js';
import de from './locales/de.js';
import en from './locales/en.js';

const locales: Record<string, Locale> = { zh, de, en };

const lang = (process.env.SCHEDULE_TASK_LANG || 'en').toLowerCase();

/** Active locale — falls back to English if language code is unknown */
export const t: Locale = locales[lang] ?? locales.en;
