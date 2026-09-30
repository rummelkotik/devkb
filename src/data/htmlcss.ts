import type { SnippetItem } from './linux';

export const HTMLCSS_SNIPPETS: SnippetItem[] = [
  // --- Flexbox ---
  { id: 'c1', subCategory: 'Flexbox', code: 'display: flex;\njustify-content: center;\nalign-items: center;', desc: 'Абсолютное центрирование дочернего элемента по горизонтали и вертикали' },
  { id: 'c2', subCategory: 'Flexbox', code: 'display: flex;\njustify-content: space-between;\nalign-items: center;', desc: 'Разнесение элементов по краям контейнера с выравниванием по центру оси Y' },
  { id: 'c3', subCategory: 'Flexbox', code: 'display: flex;\nflex-direction: column;\ngap: 16px;', desc: 'Колоночное расположение блоков с равными отступами через свойство gap' },
  { id: 'c4', subCategory: 'Flexbox', code: 'display: flex;\nflex-wrap: wrap;\ngap: 12px;', desc: 'Автоматический перенос строк для карточек или тегов' },
  { id: 'c5', subCategory: 'Flexbox', code: 'flex: 1 1 0%;', desc: 'Равномерное распределение ширины между flex-элементами' },
  { id: 'c6', subCategory: 'Flexbox', code: 'flex-shrink: 0;', desc: 'Запретить элементу сжиматься при нехватке места внутри flex-контейнера' },
  { id: 'c7', subCategory: 'Flexbox', code: 'margin-left: auto;', desc: 'Прижать flex-элемент к правому краю контейнера' },
  { id: 'c8', subCategory: 'Flexbox', code: 'align-self: flex-end;', desc: 'Индивидуальное выравнивание одного flex-элемента по поперечной оси' },
  { id: 'c9', subCategory: 'Flexbox', code: 'display: inline-flex;\nalign-items: center;\ngap: 8px;', desc: 'Строчно-блочный флекс-контейнер (удобно для бейджей и кнопок с иконками)' },

  // --- Grid ---
  { id: 'c10', subCategory: 'Grid', code: 'display: grid;\nplace-items: center;', desc: 'Самый короткий способ отцентрировать элемент по обеим осям' },
  { id: 'c11', subCategory: 'Grid', code: 'display: grid;\ngrid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\ngap: 20px;', desc: 'Адаптивная сетка карточек без необходимости писать media queries' },
  { id: 'c12', subCategory: 'Grid', code: 'display: grid;\ngrid-template-columns: 240px 1fr;\nheight: 100vh;', desc: 'Классический макет: фиксированный сайдбар слева и резиновый контент справа' },
  { id: 'c13', subCategory: 'Grid', code: 'display: grid;\ngrid-template-rows: auto 1fr auto;\nmin-height: 100vh;', desc: 'Прижатый футер к низу экрана: Header, Content, Footer' },
  { id: 'c14', subCategory: 'Grid', code: 'grid-column: 1 / -1;', desc: 'Растянуть grid-элемент на всю доступную ширину колонок' },
  { id: 'c15', subCategory: 'Grid', code: 'grid-template-areas:\n  "header header"\n  "sidebar main"\n  "footer footer";', desc: 'Именованные области для визуального проектирования сетки страницы' },
  { id: 'c16', subCategory: 'Grid', code: 'grid-area: sidebar;', desc: 'Привязка элемента к именованной grid-области' },
  { id: 'c17', subCategory: 'Grid', code: 'display: subgrid;', desc: 'Наследование сетки родительского grid-контейнера вложенным элементом' },

  // --- Селекторы и Псевдоклассы ---
  { id: 'c18', subCategory: 'Селекторы', code: ':has(input:checked) {\n  border-color: #388bfd;\n}', desc: 'Родительский селектор: стилизовать блок, если внутри есть отмеченный чекбокс' },
  { id: 'c19', subCategory: 'Селекторы', code: ':is(h1, h2, h3) {\n  font-weight: 700;\n}', desc: 'Группировка селекторов с сохранением минимальной специфичности' },
  { id: 'c20', subCategory: 'Селекторы', code: 'button:not(:disabled):hover {\n  filter: brightness(1.1);\n}', desc: 'Стилизовать hover только для активных кнопок' },
  { id: 'c21', subCategory: 'Селекторы', code: ':focus-visible {\n  outline: 2px solid #58a6ff;\n  outline-offset: 2px;\n}', desc: 'Доступный фокус только при клавиатурной навигации Tab' },
  { id: 'c22', subCategory: 'Селекторы', code: 'input:user-valid {\n  border-color: #2ea043;\n}', desc: 'Валидация поля только после взаимодействия с пользователем' },
  { id: 'c23', subCategory: 'Селекторы', code: 'li:nth-child(even) {\n  background: rgba(255, 255, 255, 0.02);\n}', desc: 'Зебра: подсветка четных элементов списка или строк таблицы' },
  { id: 'c24', subCategory: 'Селекторы', code: 'li:first-child {\n  border-top: none;\n}', desc: 'Стилизация самого первого элемента в группе' },
  { id: 'c25', subCategory: 'Селекторы', code: 'li:last-child {\n  border-bottom: none;\n}', desc: 'Стилизация последнего элемента' },
  { id: 'c26', subCategory: 'Селекторы', code: 'p:empty {\n  display: none;\n}', desc: 'Скрыть пустые параграфы или блоки без контента' },

  // --- Позиционирование и Слойность ---
  { id: 'c27', subCategory: 'Позиция', code: 'position: sticky;\ntop: 0;\nz-index: 10;', desc: 'Прилипающий заголовок/хедер при скролле страницы' },
  { id: 'c28', subCategory: 'Позиция', code: 'position: fixed;\ninset: 0;\nbackground: rgba(0, 0, 0, 0.6);', desc: 'Модальный оверлей на весь экран через современное свойство inset: 0' },
  { id: 'c29', subCategory: 'Позиция', code: 'position: absolute;\ntop: 50%;\nleft: 50%;\ntransform: translate(-50%, -50%);', desc: 'Классическое абсолютное центрирование через transform' },
  { id: 'c30', subCategory: 'Позиция', code: 'isolation: isolate;', desc: 'Создание нового контекста наложения (stacking context) для z-index' },
  { id: 'c31', subCategory: 'Позиция', code: 'pointer-events: none;', desc: 'Отключить реакцию элемента на клики и события курсора мыши' },

  // --- Оформление и Эффекты ---
  { id: 'c32', subCategory: 'Эффекты', code: 'backdrop-filter: blur(12px);\nbackground: rgba(13, 17, 23, 0.75);', desc: 'Эффект матового стекла (glassmorphism)' },
  { id: 'c33', subCategory: 'Эффекты', code: 'box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.5);', desc: 'Мягкая объемная тень для карточки в темной теме' },
  { id: 'c34', subCategory: 'Эффекты', code: 'background: linear-gradient(135deg, #1f6feb, #8957e5);', desc: 'Диагональный градиентный фон' },
  { id: 'c35', subCategory: 'Эффекты', code: 'background: radial-gradient(circle at center, #1b222d 0%, #0d1117 100%);', desc: 'Радиальный виньеточный фон' },
  { id: 'c36', subCategory: 'Эффекты', code: 'mask-image: linear-gradient(to bottom, black 80%, transparent 100%);', desc: 'Мягкое затухание (fade out) контента к нижнему краю' },
  { id: 'c37', subCategory: 'Эффекты', code: 'border-radius: 9999px;', desc: 'Идеально круглая таблетка/бейджик' },

  // --- Типографика и Текст ---
  { id: 'c38', subCategory: 'Текст', code: 'white-space: nowrap;\noverflow: hidden;\ntext-overflow: ellipsis;', desc: 'Обрезка длинной строки троеточием в одну линию' },
  { id: 'c39', subCategory: 'Текст', code: 'display: -webkit-box;\n-webkit-line-clamp: 3;\n-webkit-box-orient: vertical;\noverflow: hidden;', desc: 'Многострочная обрезка текста троеточием (clamp на 3 строки)' },
  { id: 'c40', subCategory: 'Текст', code: 'background: linear-gradient(90deg, #58a6ff, #bc8cff);\n-webkit-background-clip: text;\n-webkit-text-fill-color: transparent;', desc: 'Градиентный текст' },
  { id: 'c41', subCategory: 'Текст', code: 'text-wrap: balance;', desc: 'Балансировка строк заголовков для предотвращения висячих слов' },
  { id: 'c42', subCategory: 'Текст', code: 'font-variant-numeric: tabular-nums;', desc: 'Моноширинные цифры для ровного отображения таймеров и цен в таблицах' },
  { id: 'c43', subCategory: 'Текст', code: 'user-select: none;', desc: 'Запретить пользователю выделять текст мышью' },
  { id: 'c44', subCategory: 'Текст', code: 'letter-spacing: -0.02em;', desc: 'Небольшой отрицательный трекинг для крупных плотных заголовков' },

  // --- Изображения и Мультимедиа ---
  { id: 'c45', subCategory: 'Медиа', code: 'object-fit: cover;\nwidth: 100%;\nheight: 100%;', desc: 'Заполнение контейнера картинкой с сохранением пропорций без искажений' },
  { id: 'c46', subCategory: 'Медиа', code: 'aspect-ratio: 16 / 9;', desc: 'Фиксированное соотношение сторон блока независимо от ширины' },
  { id: 'c47', subCategory: 'Медиа', code: 'aspect-ratio: 1 / 1;\nborder-radius: 50%;', desc: 'Круглый аватар правильной формы' },
  { id: 'c48', subCategory: 'Медиа', code: 'accent-color: #238636;', desc: 'Кастомизация цвета нативных чекбоксов, радиокнопок и слайдеров' },
  { id: 'c49', subCategory: 'Медиа', code: 'caret-color: #58a6ff;', desc: 'Кастомизация цвета мигающего текстового курсора' },

  // --- Адаптивность и Скролл ---
  { id: 'c50', subCategory: 'Скролл', code: 'scroll-behavior: smooth;', desc: 'Плавная анимация прокрутки страницы к якорям' },
  { id: 'c51', subCategory: 'Скролл', code: 'scroll-padding-top: 80px;', desc: 'Отступ сверху при скролле к якорю (чтобы фиксированный хедер не закрывал заголовок)' },
  { id: 'c52', subCategory: 'Скролл', code: 'overscroll-behavior: contain;', desc: 'Предотвратить pull-to-refresh и прокрутку фоновой страницы внутри модалки' },
  { id: 'c53', subCategory: 'Скролл', code: 'scrollbar-width: thin;\nscrollbar-color: #30363d transparent;', desc: 'Кроссбраузерный тонкий скроллбар в стандартах W3C' },
  { id: 'c54', subCategory: 'Адаптивность', code: 'font-size: clamp(1rem, 2.5vw, 2rem);', desc: 'Флюидный размер шрифта, плавно меняющийся от ширины экрана без media queries' },
  { id: 'c55', subCategory: 'Адаптивность', code: '@media (prefers-color-scheme: dark) {\n  :root { color-scheme: dark; }\n}', desc: 'Определение системной темной темы пользователя' },
  { id: 'c56', subCategory: 'Адаптивность', code: '@media (prefers-reduced-motion: reduce) {\n  * { animation: none !important; transition: none !important; }\n}', desc: 'Отключение анимаций для пользователей с чувствительностью к движению' },

  // --- CSS Переменные (Variables) ---
  { id: 'c57', subCategory: 'Переменные', code: ':root {\n  --bg-primary: #0d1117;\n  --text-main: #e6edf3;\n}', desc: 'Объявление глобальных CSS переменных' },
  { id: 'c58', subCategory: 'Переменные', code: 'color: var(--text-main, #ffffff);', desc: 'Использование CSS переменной с fallback значением по умолчанию' },
  { id: 'c59', subCategory: 'Переменные', code: 'color: color-mix(in srgb, #58a6ff 60%, transparent);', desc: 'Подмешивание прозрачности или другого цвета нативно через color-mix' },

  // --- Анимации и Переходы ---
  { id: 'c60', subCategory: 'Анимация', code: 'transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s ease;', desc: 'Плавный пружинящий переход при ховере' },
  { id: 'c61', subCategory: 'Анимация', code: 'will-change: transform;', desc: 'Подсказка браузеру вынести анимацию на видеокарту (GPU layer)' },
  { id: 'c62', subCategory: 'Анимация', code: '@keyframes pulse {\n  0%, 100% { opacity: 1; }\n  50% { opacity: 0.4; }\n}\nanimation: pulse 2s infinite ease-in-out;', desc: 'Бесконечная пульсирующая анимация' },
  { id: 'c63', subCategory: 'Анимация', code: '@keyframes spin {\n  to { transform: rotate(360deg); }\n}\nanimation: spin 1s linear infinite;', desc: 'Вращающийся спиннер загрузки' },
  { id: 'c64', subCategory: 'Анимация', code: 'animation-play-state: paused;', desc: 'Приостановить выполнение CSS анимации' },

  // --- HTML5 Семантика и Структура ---
  { id: 'c65', subCategory: 'HTML5', code: '<meta name="viewport" content="width=device-width, initial-scale=1.0">', desc: 'Обязательный мета-тег для корректного мобильного отображения' },
  { id: 'c66', subCategory: 'HTML5', code: '<dialog id="modal">\n  <form method="dialog">\n    <button>Закрыть</button>\n  </form>\n</dialog>', desc: 'Нативное модальное окно с поддержкой backdrop и закрытия по Esc' },
  { id: 'c67', subCategory: 'HTML5', code: '<details>\n  <summary>Показать подробности</summary>\n  <p>Скрытый контент аккордеона</p>\n</details>', desc: 'Нативный аккордеон без единой строчки JavaScript' },
  { id: 'c68', subCategory: 'HTML5', code: '<picture>\n  <source srcset="img.webp" type="image/webp">\n  <img src="img.jpg" alt="Описание" loading="lazy">\n</picture>', desc: 'Современный тег картинок с fallback форматами и ленивой загрузкой' },
  { id: 'c69', subCategory: 'HTML5', code: '<input type="text" enterkeyhint="search">', desc: 'Кастомизация текста кнопки Enter на мобильной виртуальной клавиатуре' },
  { id: 'c70', subCategory: 'HTML5', code: '<input type="text" autocomplete="one-time-code">', desc: 'Автоподстановка SMS-кода подтверждения из сообщений' },
  { id: 'c71', subCategory: 'HTML5', code: '<input type="number" inputmode="decimal">', desc: 'Отображение клавиатуры с цифрами и точкой на мобильных устройствах' },
  { id: 'c72', subCategory: 'HTML5', code: '<a href="file.pdf" download="report.pdf">Скачать</a>', desc: 'Атрибут принудительного скачивания файла вместо открытия в браузере' },
  { id: 'c73', subCategory: 'HTML5', code: '<a href="https://ext.com" target="_blank" rel="noopener noreferrer">Ссылка</a>', desc: 'Безопасное открытие внешней ссылки в новой вкладке' },

  // --- Доступность (a11y) ---
  { id: 'c74', subCategory: 'Доступность', code: '.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0;\n}', desc: 'Класс для скрытия контента от глаз, но сохранения для скринридеров' },
  { id: 'c75', subCategory: 'Доступность', code: '<button aria-label="Закрыть меню">✕</button>', desc: 'Понятное текстовое описание кнопки-иконки для скринридеров' },
  { id: 'c76', subCategory: 'Доступность', code: '<div role="alert" aria-live="assertive">Ошибка сохранения</div>', desc: 'Мгновенное уведомление скринридера о возникшей ошибке' },

  // --- Производительность и Ресет ---
  { id: 'c77', subCategory: 'Ресет', code: '*, *::before, *::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}', desc: 'Базовый универсальный сброс отступов и установка модели border-box' },
  { id: 'c78', subCategory: 'Ресет', code: 'img, picture, video, canvas, svg {\n  display: block;\n  max-width: 100%;\n}', desc: 'Предотвращение вылезания картинок за пределы экрана и удаление inline-зазоров' },
  { id: 'c79', subCategory: 'Ресет', code: 'content-visibility: auto;', desc: 'Откладывать рендер внеэкранных блоков для колоссального ускорения скролла' },
  { id: 'c80', subCategory: 'Ресет', code: 'contain-intrinsic-size: 0 400px;', desc: 'Резервирование высоты блока при content-visibility во избежание прыжков скролла' },

  // --- Продвинутые приемы верстки ---
  { id: 'c81', subCategory: 'Трюки', code: 'box-shadow: inset 0 0 0 1px #30363d;', desc: 'Внутренняя рамка без увеличения физических габаритов элемента' },
  { id: 'c82', subCategory: 'Трюки', code: 'filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.4));', desc: 'Тень по реальному контуру прозрачного PNG или SVG (в отличие от box-shadow)' },
  { id: 'c83', subCategory: 'Трюки', code: 'clip-path: polygon(0 0, 100% 0, 100% calc(100% - 20px), 0 100%);', desc: 'Скошенный нижний край секции через полигон' },
  { id: 'c84', subCategory: 'Трюки', code: 'cursor: not-allowed;\nopacity: 0.5;', desc: 'Оформление отключенного состояния элемента' },
  { id: 'c85', subCategory: 'Трюки', code: 'resize: vertical;\nmin-height: 100px;', desc: 'Разрешить растягивание textarea только по вертикали' },
  { id: 'c86', subCategory: 'Трюки', code: 'outline: none;\nbox-shadow: 0 0 0 3px rgba(88, 166, 255, 0.3);', desc: 'Светящееся кольцо фокуса вокруг инпута' },
  { id: 'c87', subCategory: 'Трюки', code: 'transform: translateZ(0);', desc: 'Форсированный хак для включения аппаратного ускорения' },
  { id: 'c88', subCategory: 'Трюки', code: 'mix-blend-mode: multiply;', desc: 'Режим наложения слоя на фоновое изображение' },
  { id: 'c89', subCategory: 'Трюки', code: 'counter-reset: step;\nli::before {\n  counter-increment: step;\n  content: counter(step);\n}', desc: 'Кастомная нумерация элементов списка через CSS-счетчики' },
  { id: 'c90', subCategory: 'Трюки', code: 'writing-mode: vertical-rl;', desc: 'Вертикальная ориентация текста (сверху вниз)' },

  // --- Микро-интеракции ---
  { id: 'c91', subCategory: 'Интерактив', code: 'button:active {\n  transform: scale(0.97);\n}', desc: 'Эффект легкого вдавливания кнопки при клике' },
  { id: 'c92', subCategory: 'Интерактив', code: 'a {\n  text-decoration-skip-ink: auto;\n  text-underline-offset: 4px;\n}', desc: 'Красивое подчеркивание ссылок с отступом, не пересекающее выносные элементы букв' },
  { id: 'c93', subCategory: 'Интерактив', code: '::selection {\n  background: #388bfd;\n  color: #ffffff;\n}', desc: 'Кастомизация цвета выделения текста на сайте' },
  { id: 'c94', subCategory: 'Интерактив', code: '::placeholder {\n  color: #6e7681;\n  opacity: 1;\n}', desc: 'Кроссбраузерная стилизация цвета подсказки внутри полей ввода' },
  { id: 'c95', subCategory: 'Интерактив', code: 'touch-action: manipulation;', desc: 'Устранение задержки 300мс при тапе на сенсорных экранах' },
  { id: 'c96', subCategory: 'Интерактив', code: 'overflow-y: scroll;\n-webkit-overflow-scrolling: touch;', desc: 'Плавный инерционный скролл на iOS устройствах' },

  // --- Контейнерные запросы (Container Queries) ---
  { id: 'c97', subCategory: 'Адаптивность', code: 'container-type: inline-size;\ncontainer-name: card;', desc: 'Определение контекста контейнера для Container Queries' },
  { id: 'c98', subCategory: 'Адаптивность', code: '@container card (min-width: 400px) {\n  .content { display: flex; }\n}', desc: 'Адаптация карточки под размер её родителя, а не всего экрана браузера' },

  // --- Защита от переполнения ---
  { id: 'c99', subCategory: 'Текст', code: 'overflow-wrap: break-word;\nhyphens: auto;', desc: 'Автоматический перенос сверхдлинных слов и URL для предотвращения поломки верстки' },
  { id: 'c100', subCategory: 'Текст', code: 'tab-size: 2;', desc: 'Установка размера табуляции для тегов pre и code' },
  { id: 'c101', subCategory: 'Трюки', code: 'min-width: 0;', desc: 'Предотвращение вылезания дочернего flex/grid элемента за границы родителя' },
  { id: 'c102', subCategory: 'Трюки', code: 'field-sizing: content;', desc: 'Нативное автоматическое расширение высоты textarea под вводимый текст без JS' }
];