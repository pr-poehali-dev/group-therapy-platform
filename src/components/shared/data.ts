import heroPhoto from "@/assets/photos/hero.webp";
import groupPhoto from "@/assets/photos/group.webp";
import portraitPhoto from "@/assets/photos/portrait.webp";
import journalPhoto from "@/assets/photos/journal.webp";
import onlinePhoto from "@/assets/photos/online.webp";
import review1 from "@/assets/photos/review1.webp";
import review2 from "@/assets/photos/review2.webp";
import review3 from "@/assets/photos/review3.webp";
import review4 from "@/assets/photos/review4.webp";

export const PHOTOS = {
  hero: heroPhoto,
  group: groupPhoto,
  portrait: portraitPhoto,
  journal: journalPhoto,
  online: onlinePhoto,
};

export const PAINS = [
  { icon: "Wind", text: "Тревога не отпускает", color: "bg-lavender-light" },
  { icon: "BatteryLow", text: "Работа забирает все силы", color: "bg-blue-light" },
  { icon: "Wallet", text: "Индивидуальная терапия каждую неделю кажется дорогой", color: "bg-blue-light" },
];

export const STEPS = [
  { num: "01", title: "Оставьте заявку", text: "Это займёт менее 1 минуты" },
  { num: "02", title: "Бережно уточним запрос", text: "Спросим, что вас беспокоит, какой формат удобен" },
  { num: "03", title: "Подберём психолога", text: "Найдём специалиста под ваш запрос и подходящий график." },
  { num: "04", title: "Начинаете работу", text: "Две сессии в месяц и личный чат с психологом между встречами." },
];

export const DIRECTIONS = [
  { emoji: "🌿", title: "Тревога и переживания", desc: "Разбираемся, что вызывает тревогу, и учимся с ней справляться" },
  { emoji: "🔥", title: "Эмоциональное выгорание", desc: "Восстанавливаем ресурс и возвращаем смысл в работу" },
  { emoji: "💬", title: "Отношения", desc: "Разбираем повторяющиеся паттерны в отношениях" },
  { emoji: "💼", title: "Сложности на работе", desc: "Помогаем найти направление и снизить неудовлетворённость" },
  { emoji: "🪞", title: "Самооценка", desc: "Работаем с уверенностью в себе и внутренним критиком" },
  { emoji: "🌙", title: "Одиночество", desc: "Помогаем разобраться в чувствах и наладить контакт с собой и другими" },
  { emoji: "🔄", title: "Изменения в жизни", desc: "Поддержка в период перемен и новых решений" },
  { emoji: "✨", title: "Хочу разобраться в себе", desc: "Для тех, кто просто хочет лучше себя понять" },
];

export const BENEFITS = [
  { icon: "MessageCircle", title: "Можно писать между сессиями", text: "Не нужно сохранять всё до следующего созвона" },
  { icon: "UserCheck", title: "Тот же психолог", text: "Сообщения получает специалист, с которым проходят ваши встречи" },
  { icon: "Clock", title: "Понятные границы", text: "Психолог отвечает в течение суток. Чат не заменяет экстренную помощь" },
];

export const FOR_WHOM = [
  "Давно думаете о терапии, но не знаете, с чего начать",
  "Хотите личного психолога, а не разового специалиста",
  "Важно иметь возможность написать между встречами",
  "Ищете более доступный формат постоянной поддержки",
];

export const REVIEW_SCREENSHOTS = [
  { id: 1, src: review1 },
  { id: 2, src: review2 },
  { id: 3, src: review3 },
  { id: 4, src: review4 },
];

export const FAQS = [
  {
    q: "Чем это отличается от обычных онлайн-сессий?",
    a: "Вы не только встречаетесь с психологом два раза в месяц, но и можете продолжать общение в личном чате между встречами.",
  },
  {
    q: "Кто отвечает мне в чате?",
    a: "Тот же психолог, с которым проходят индивидуальные сессии.",
  },
  {
    q: "Как быстро отвечает психолог?",
    a: "В течение рабочего дня. Чат не предназначен для экстренных ситуаций.",
  },
  {
    q: "Можно ли поменять психолога?",
    a: "Да, если специалист вам не подошёл.",
  },
  {
    q: "Как проходят сессии?",
    a: "Онлайн по видеосвязи, индивидуально с психологом.",
  },
  {
    q: "Можно ли отказаться от следующего месяца?",
    a: "Да. Это не подписка с обязательным продлением — вы решаете, продолжать ли работу дальше.",
  },
];

export type FormData = {
  name: string;
  contact: string;
  topic: string;
  direction: string;
  psychologist: string;
  contactMethod: string;
  comment: string;
};