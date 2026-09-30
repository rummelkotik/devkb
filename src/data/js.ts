import type { SnippetItem } from './linux';

export const JS_SNIPPETS: SnippetItem[] = [
  // --- Методы массивов ---
  { id: 'j1', subCategory: 'Массивы', code: 'const names = users.map(u => u.name);', desc: 'Трансформация элементов массива в новый массив значений' },
  { id: 'j2', subCategory: 'Массивы', code: 'const active = users.filter(u => u.isActive);', desc: 'Фильтрация элементов массива по предикату' },
  { id: 'j3', subCategory: 'Массивы', code: 'const total = items.reduce((acc, curr) => acc + curr.price, 0);', desc: 'Агрегация массива в единое итоговое значение через reduce' },
  { id: 'j4', subCategory: 'Массивы', code: 'const user = users.find(u => u.id === targetId);', desc: 'Поиск первого элемента, удовлетворяющего условию (или undefined)' },
  { id: 'j5', subCategory: 'Массивы', code: 'const idx = users.findIndex(u => u.id === targetId);', desc: 'Получение индекса первого совпавшего элемента (-1 если не найден)' },
  { id: 'j6', subCategory: 'Массивы', code: 'const hasAdmin = users.some(u => u.role === "admin");', desc: 'Проверка: удовлетворяет ли хотя бы один элемент условию (boolean)' },
  { id: 'j7', subCategory: 'Массивы', code: 'const allValid = inputs.every(i => i.value.trim() !== "");', desc: 'Проверка: удовлетворяют ли абсолютно все элементы условию' },
  { id: 'j8', subCategory: 'Массивы', code: 'const flat = matrix.flat(2);', desc: 'Сплющивание многомерного вложенного массива' },
  { id: 'j9', subCategory: 'Массивы', code: 'const tags = posts.flatMap(p => p.tags);', desc: 'Отображение с одновременным сплющиванием в один проход' },
  { id: 'j10', subCategory: 'Массивы', code: 'const unique = [...new Set(array)];', desc: 'Быстрое удаление дубликатов из массива примитивов' },
  { id: 'j11', subCategory: 'Массивы', code: 'const sorted = [...items].sort((a, b) => a.price - b.price);', desc: 'Безопасная сортировка чисел по возрастанию без мутации оригинала' },
  { id: 'j12', subCategory: 'Массивы', code: 'const sorted = [...items].sort((a, b) => a.name.localeCompare(b.name));', desc: 'Корректная алфавитная сортировка строк с учетом языка' },
  { id: 'j13', subCategory: 'Массивы', code: 'const last = arr.at(-1);', desc: 'Получение последнего элемента массива через современный метод .at(-1)' },
  { id: 'j14', subCategory: 'Массивы', code: 'const grouped = Object.groupBy(items, item => item.category);', desc: 'Нативная группировка массива объектов по ключу' },
  { id: 'j15', subCategory: 'Массивы', code: 'const newArr = arr.toSorted((a, b) => a - b);', desc: 'Нативная иммутабельная сортировка массива без копирования через спред' },
  { id: 'j16', subCategory: 'Массивы', code: 'const newArr = arr.toReversed();', desc: 'Иммутабельный разворот массива в обратном порядке' },
  { id: 'j17', subCategory: 'Массивы', code: 'const newArr = arr.toSpliced(index, count, ...insertItems);', desc: 'Иммутабельное удаление или вставка элементов в массив' },
  { id: 'j18', subCategory: 'Массивы', code: 'const newArr = arr.with(index, newValue);', desc: 'Замена одного элемента массива по индексу без мутации' },
  { id: 'j19', subCategory: 'Массивы', code: 'const chunks = Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));', desc: 'Разбиение большого массива на чанки фиксированного размера' },

  // --- Объекты и Деструктуризация ---
  { id: 'j20', subCategory: 'Объекты', code: 'const { id, name, ...rest } = user;', desc: 'Деструктуризация объекта с остаточными полями в объекте rest' },
  { id: 'j21', subCategory: 'Объекты', code: 'const { id: userId, name: userName = "Guest" } = user;', desc: 'Деструктуризация с переименованием переменной и дефолтным значением' },
  { id: 'j22', subCategory: 'Объекты', code: 'const merged = { ...defaultConfig, ...userConfig };', desc: 'Неглубокое слияние двух объектов через spread-оператор' },
  { id: 'j23', subCategory: 'Объекты', code: 'const clone = structuredClone(originalObject);', desc: 'Нативное глубокое клонирование объектов, массивов, Map, Set и Date' },
  { id: 'j24', subCategory: 'Объекты', code: 'const keys = Object.keys(obj);', desc: 'Получение массива всех строковых ключей объекта' },
  { id: 'j25', subCategory: 'Объекты', code: 'const values = Object.values(obj);', desc: 'Получение массива всех значений объекта' },
  { id: 'j26', subCategory: 'Объекты', code: 'const entries = Object.entries(obj);', desc: 'Преобразование объекта в массив пар [ключ, значение]' },
  { id: 'j27', subCategory: 'Объекты', code: 'const obj = Object.fromEntries(entries);', desc: 'Сборка объекта обратно из массива пар [ключ, значение]' },
  { id: 'j28', subCategory: 'Объекты', code: 'const clean = Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != null));', desc: 'Удаление из объекта всех ключей со значениями null и undefined' },
  { id: 'j29', subCategory: 'Объекты', code: 'const hasKey = Object.hasOwn(obj, "prop");', desc: 'Безопасная проверка наличия собственного свойства объекта' },
  { id: 'j30', subCategory: 'Объекты', code: 'Object.freeze(obj);', desc: 'Полная заморозка объекта от добавления, изменения и удаления свойств' },
  { id: 'j31', subCategory: 'Объекты', code: 'const dynamic = { [`key_${index}`]: value };', desc: 'Динамически вычисляемое имя ключа в литерале объекта' },

  // --- Строки и Регулярные выражения ---
  { id: 'j32', subCategory: 'Строки', code: 'const title = `${user.firstName} ${user.lastName}`.trim();', desc: 'Шаблонные строки (интерполяция) с удалением пробелов по краям' },
  { id: 'j33', subCategory: 'Строки', code: 'const padded = String(num).padStart(4, "0");', desc: 'Дополнение строки нулями слева до 4 символов (0007)' },
  { id: 'j34', subCategory: 'Строки', code: 'const slug = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");', desc: 'Генерация URL-безопасного slug из произвольного текста' },
  { id: 'j35', subCategory: 'Строки', code: 'const replaced = str.replaceAll("old", "new");', desc: 'Замена всех вхождений подстроки без необходимости писать RegEx' },
  { id: 'j36', subCategory: 'Строки', code: 'const isEmail = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);', desc: 'Базовая валидация структуры email адреса регулярным выражением' },
  { id: 'j37', subCategory: 'Строки', code: 'const matches = [...text.matchAll(/#(\\w+)/g)].map(m => m[1]);', desc: 'Извлечение всех совпадений групп из строки (например, всех хештегов)' },
  { id: 'j38', subCategory: 'Строки', code: 'const truncated = str.length > 50 ? str.slice(0, 47) + "..." : str;', desc: 'Безопасное усечение длинной строки' },

  // --- Асинхронность и Промисы ---
  { id: 'j39', subCategory: 'Асинхронность', code: 'const res = await fetch("/api/data");\nif (!res.ok) throw new Error(`HTTP ${res.status}`);\nconst data = await res.json();', desc: 'Базовый fetch-запрос с обязательной проверкой статуса ответа' },
  { id: 'j40', subCategory: 'Асинхронность', code: 'const [users, posts] = await Promise.all([\n  fetchUsers(),\n  fetchPosts()\n]);', desc: 'Параллельное выполнение промисов с остановкой при первой ошибке' },
  { id: 'j41', subCategory: 'Асинхронность', code: 'const results = await Promise.allSettled(promises);\nconst successful = results.filter(r => r.status === "fulfilled").map(r => r.value);', desc: 'Параллельное выполнение без падения: ждёт завершения всех задач' },
  { id: 'j42', subCategory: 'Асинхронность', code: 'const first = await Promise.race([task(), timeout()]);', desc: 'Возврат результата первого разрешившегося промиса' },
  { id: 'j43', subCategory: 'Асинхронность', code: 'const sleep = (ms: number) => new Promise(res => setTimeout(res, ms));\nawait sleep(1000);', desc: 'Утилита асинхронной паузы (sleep delay)' },
  { id: 'j44', subCategory: 'Асинхронность', code: 'const controller = new AbortController();\nfetch(url, { signal: controller.signal });\n// controller.abort();', desc: 'Отмена активного fetch-запроса через AbortController' },
  { id: 'j45', subCategory: 'Асинхронность', code: 'const res = await fetch(url, { signal: AbortSignal.timeout(5000) });', desc: 'Автоматический таймаут сетевого запроса за 5 секунд' },
  { id: 'j46', subCategory: 'Асинхронность', code: 'async function retry<T>(fn: () => Promise<T>, retries = 3, delay = 1000): Promise<T> {\n  try { return await fn(); }\n  catch (err) { if (retries <= 1) throw err; await sleep(delay); return retry(fn, retries - 1, delay * 2); }\n}', desc: 'Утилита автоматического повтора упавшего промиса с exponential backoff' },

  // --- Функции и Замыкания ---
  { id: 'j47', subCategory: 'Функции', code: 'function debounce<T extends (...args: any[]) => any>(fn: T, ms: number) {\n  let timer: any;\n  return (...args: Parameters<T>) => {\n    clearTimeout(timer);\n    timer = setTimeout(() => fn(...args), ms);\n  };\n}', desc: 'Реализация debounce: вызов функции только после паузы ввода' },
  { id: 'j48', subCategory: 'Функции', code: 'function throttle<T extends (...args: any[]) => any>(fn: T, ms: number) {\n  let last = 0;\n  return (...args: Parameters<T>) => {\n    const now = Date.now();\n    if (now - last >= ms) { last = now; fn(...args); }\n  };\n}', desc: 'Реализация throttle: ограничение частоты вызова функции' },
  { id: 'j49', subCategory: 'Функции', code: 'const memoize = (fn: Function) => {\n  const cache = new Map();\n  return (...args: any[]) => {\n    const key = JSON.stringify(args);\n    if (cache.has(key)) return cache.get(key);\n    const val = fn(...args);\n    cache.set(key, val);\n    return val;\n  };\n};', desc: 'Универсальная мемоизация чистой функции' },
  { id: 'j50', subCategory: 'Функции', code: 'const pipe = (...fns: Function[]) => (x: any) => fns.reduce((v, f) => f(v), x);', desc: 'Функциональная композиция pipe слева направо' },
  { id: 'j51', subCategory: 'Функции', code: 'const once = (fn: Function) => {\n  let executed = false;\n  return (...args: any[]) => {\n    if (!executed) { executed = true; return fn(...args); }\n  };\n};', desc: 'Обёртка для гарантированного однократного вызова функции' },
  { id: 'j52', subCategory: 'Функции', code: 'const curry = (fn: Function) => {\n  const curried = (...args: any[]) =>\n    args.length >= fn.length ? fn(...args) : (...more: any[]) => curried(...args, ...more);\n  return curried;\n};', desc: 'Каррирование функции произвольной арности' },

  // --- Операторы и Трюки ES ---
  { id: 'j53', subCategory: 'Операторы', code: 'const val = input ?? "по умолчанию";', desc: 'Nullish coalescing (??): дефолт только при null или undefined (сохраняет 0 и "")' },
  { id: 'j54', subCategory: 'Операторы', code: 'const zip = user?.address?.geo?.lat;', desc: 'Опциональная цепочка (Optional chaining) для безопасного чтения глубоких свойств' },
  { id: 'j55', subCategory: 'Операторы', code: 'user.lastLogin ??= new Date();', desc: 'Логическое присваивание nullish: присвоит только если значение null/undefined' },
  { id: 'j56', subCategory: 'Операторы', code: 'count ||= 1;', desc: 'Присваивание логического ИЛИ: присвоит, если текущее значение falsy' },
  { id: 'j57', subCategory: 'Операторы', code: 'const bool = !!"не пусто";', desc: 'Быстрое приведение любого значения к строгому типу boolean' },
  { id: 'j58', subCategory: 'Операторы', code: 'const int = ~~3.14159;', desc: 'Быстрое отсечение дробной части числа через двойной побитовый NOT' },
  { id: 'j59', subCategory: 'Операторы', code: 'const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;', desc: 'Генерация случайного целого числа в диапазоне от min до max включительно' },
  { id: 'j60', subCategory: 'Операторы', code: 'const id = crypto.randomUUID();', desc: 'Нативная криптографически стойкая генерация UUID v4' },

  // --- Работа с DOM и Событиями ---
  { id: 'j61', subCategory: 'DOM', code: 'const el = document.querySelector<HTMLElement>(".target");', desc: 'Поиск первого элемента по CSS-селектору' },
  { id: 'j62', subCategory: 'DOM', code: 'const items = Array.from(document.querySelectorAll(".item"));', desc: 'Поиск всех элементов и преобразование NodeList в полноценный массив' },
  { id: 'j63', subCategory: 'DOM', code: 'el.closest(".card");', desc: 'Поиск ближайшего предка вверх по дереву DOM, подходящего под селектор' },
  { id: 'j64', subCategory: 'DOM', code: 'el.classList.toggle("active", isOpened);', desc: 'Добавление или удаление CSS-класса в зависимости от boolean флага' },
  { id: 'j65', subCategory: 'DOM', code: 'el.dataset.userId = "42";', desc: 'Запись и чтение data-атрибутов через dataset' },
  { id: 'j66', subCategory: 'DOM', code: 'el.scrollIntoView({ behavior: "smooth", block: "start" });', desc: 'Плавный скролл страницы к указанному элементу' },
  { id: 'j67', subCategory: 'DOM', code: 'container.addEventListener("click", (e) => {\n  const btn = (e.target as HTMLElement).closest("button");\n  if (btn) handleBtn(btn.dataset.id);\n});', desc: 'Делегирование событий на родителе вместо вешания слушателей на каждого потомка' },
  { id: 'j68', subCategory: 'DOM', code: 'el.addEventListener("click", handler, { once: true });', desc: 'Слушатель события, который автоматически удаляется после первого срабатывания' },
  { id: 'j69', subCategory: 'DOM', code: 'el.addEventListener("touchstart", handler, { passive: true });', desc: 'Пассивный слушатель для предотвращения блокировки скролла на мобильных' },
  { id: 'j70', subCategory: 'DOM', code: 'const observer = new IntersectionObserver((entries) => {\n  entries.forEach(e => { if (e.isIntersecting) loadImg(e.target); });\n});', desc: 'Отслеживание появления элемента во viewport (IntersectionObserver)' },
  { id: 'j71', subCategory: 'DOM', code: 'const ro = new ResizeObserver(entries => {\n  for (let entry of entries) console.log(entry.contentRect.width);\n});\nro.observe(el);', desc: 'Отслеживание изменения размеров конкретного DOM-элемента' },
  { id: 'j72', subCategory: 'DOM', code: 'const mo = new MutationObserver(mutations => console.log(mutations));\nmo.observe(el, { childList: true, subtree: true });', desc: 'Отслеживание изменений дочерних элементов в DOM (MutationObserver)' },

  // --- Хранилища и Сеть (Storage & Browser APIs) ---
  { id: 'j73', subCategory: 'Browser', code: 'localStorage.setItem("theme", JSON.stringify(themeConfig));', desc: 'Сохранение сериализованных данных в постоянный localStorage' },
  { id: 'j74', subCategory: 'Browser', code: 'const cached = JSON.parse(localStorage.getItem("theme") || "{}");', desc: 'Безопасное чтение данных из localStorage с дефолтным fallback' },
  { id: 'j75', subCategory: 'Browser', code: 'sessionStorage.setItem("tabId", id);', desc: 'Сохранение данных в хранилище сессии вкладки' },
  { id: 'j76', subCategory: 'Browser', code: 'await navigator.clipboard.writeText(text);', desc: 'Асинхронное копирование произвольного текста в буфер обмена пользователя' },
  { id: 'j77', subCategory: 'Browser', code: 'const text = await navigator.clipboard.readText();', desc: 'Чтение текста из буфера обмена с запросом разрешений' },
  { id: 'j78', subCategory: 'Browser', code: 'const isOnline = navigator.onLine;\nwindow.addEventListener("online", updateStatus);', desc: 'Проверка подключения к интернету и слушатель его восстановления' },
  { id: 'j79', subCategory: 'Browser', code: 'const media = window.matchMedia("(prefers-color-scheme: dark)");\nmedia.addEventListener("change", e => setDark(e.matches));', desc: 'Отслеживание изменения системной цветовой темы пользователя' },
  { id: 'j80', subCategory: 'Browser', code: 'navigator.sendBeacon("/analytics", JSON.stringify(data));', desc: 'Гарантированная асинхронная отправка аналитики при закрытии вкладки' },
  { id: 'j81', subCategory: 'Browser', code: 'const wakeLock = await navigator.wakeLock.request("screen");', desc: 'Запретить экрану мобильного устройства гаснуть и блокироваться' },

  // --- URL и Параметры ---
  { id: 'j82', subCategory: 'URL', code: 'const url = new URL(window.location.href);\nurl.searchParams.set("page", "2");\nwindow.history.pushState({}, "", url);', desc: 'Обновление параметров в адресной строке без перезагрузки страницы' },
  { id: 'j83', subCategory: 'URL', code: 'const params = new URLSearchParams(window.location.search);\nconst query = params.get("q");', desc: 'Парсинг query-параметра из текущего URL' },
  { id: 'j84', subCategory: 'URL', code: 'const queryString = new URLSearchParams({ tag: "js", sort: "desc" }).toString();', desc: 'Сериализация объекта в строку URL query параметров' },

  // --- Дата, Время и Интернационализация ---
  { id: 'j85', subCategory: 'Дата', code: 'const now = new Date().toISOString();', desc: 'Получение текущей даты в формате ISO 8601 для баз данных и API' },
  { id: 'j86', subCategory: 'Дата', code: 'const formatted = new Intl.DateTimeFormat("ru-RU", {\n  dateStyle: "medium",\n  timeStyle: "short"\n}).format(new Date());', desc: 'Локализованное форматирование даты и времени без сторонних библиотек' },
  { id: 'j87', subCategory: 'Дата', code: 'const rtf = new Intl.RelativeTimeFormat("ru", { numeric: "auto" });\nconsole.log(rtf.format(-2, "day")); // "позавчера"', desc: 'Форматирование относительного времени ("позавчера", "через 5 минут")' },
  { id: 'j88', subCategory: 'Дата', code: 'const price = new Intl.NumberFormat("ru-RU", { style: "currency", currency: "RUB" }).format(15490);', desc: 'Форматирование денежных валют и чисел с пробелами' },
  { id: 'j89', subCategory: 'Дата', code: 'const diffDays = Math.ceil(Math.abs(dateB.getTime() - dateA.getTime()) / (1000 * 60 * 60 * 24));', desc: 'Расчёт разницы между двумя датами в днях' },

  // --- Map, Set и WeakRef ---
  { id: 'j90', subCategory: 'Коллекции', code: 'const map = new Map<string, any>();\nmap.set(key, val);\nconst has = map.has(key);', desc: 'Использование Map для частых добавлений/удалений с произвольными типами ключей' },
  { id: 'j91', subCategory: 'Коллекции', code: 'const set = new Set([1, 2, 3]);\nset.add(4);\nset.has(2);', desc: 'Множество уникальных значений с проверкой наличия за O(1)' },
  { id: 'j92', subCategory: 'Коллекции', code: 'const weakMap = new WeakMap();\nweakMap.set(domElement, { metadata: true });', desc: 'Ассоциация данных с объектом без утечек памяти (автоочистка при удалении объекта)' },

  // --- Event Loop и Микротаски ---
  { id: 'j93', subCategory: 'EventLoop', code: 'queueMicrotask(() => {\n  console.log("Выполнится сразу после синхронного кода, до рендера");\n});', desc: 'Явная отправка колбэка в очередь микротасок (microtask queue)' },
  { id: 'j94', subCategory: 'EventLoop', code: 'requestAnimationFrame((timestamp) => {\n  // Анимация перед перерисовкой кадра браузером\n});', desc: 'Синхронизация визуальных изменений с частотой обновления экрана (60/120Hz)' },
  { id: 'j95', subCategory: 'EventLoop', code: 'requestIdleCallback((deadline) => {\n  while (deadline.timeRemaining() > 0 && tasks.length) doTask(tasks.shift());\n});', desc: 'Выполнение несрочных фоновых задач в моменты простоя браузера' },

  // --- Отладка и Производительность ---
  { id: 'j96', subCategory: 'Отладка', code: 'console.table([{ name: "Vlad", role: "Dev" }, { name: "Alex", role: "Design" }]);', desc: 'Наглядный вывод массива объектов в виде форматированной таблицы' },
  { id: 'j97', subCategory: 'Отладка', code: 'console.time("calc");\nheavyCalculation();\nconsole.timeEnd("calc");', desc: 'Замер точного времени выполнения участка кода в миллисекундах' },
  { id: 'j98', subCategory: 'Отладка', code: 'performance.mark("start");\n// code\nperformance.mark("end");\nperformance.measure("Total", "start", "end");', desc: 'Прецизионный замер производительности через Performance API' },
  { id: 'j99', subCategory: 'Отладка', code: 'const stack = new Error().stack;', desc: 'Получение текущего стека вызовов функций для диагностики' },

  // --- Генераторы и Итераторы ---
  { id: 'j100', subCategory: 'Генераторы', code: 'function* idMaker() {\n  let id = 1;\n  while (true) yield id++;\n}\nconst gen = idMaker();\ngen.next().value;', desc: 'Бесконечный генератор уникальных инкрементальных ID' },
  { id: 'j101', subCategory: 'Генераторы', code: 'for await (const chunk of stream) {\n  console.log(chunk);\n}', desc: 'Асинхронный цикл for-await-of для чтения readable-стримов' },

  // --- Безопасность и Валидация ---
  { id: 'j102', subCategory: 'Безопасность', code: 'const sanitized = str.replace(/[&<>"\']/g, m => ({\n  "&": "&amp;", "<": "&lt;", ">": "&gt;", \'"\': "&quot;", "\'": "&#39;"\n}[m]!));', desc: 'Экранирование опасных HTML-символов от XSS инъекций' },
  { id: 'j103', subCategory: 'Безопасность', code: 'const isValidUrl = (url: string) => {\n  try { return Boolean(new URL(url)); } catch { return false; }\n};', desc: 'Проверка валидности URL-адреса через конструктор' },
  { id: 'j104', subCategory: 'Безопасность', code: 'Object.preventExtensions(obj);', desc: 'Запрет на добавление новых свойств в объект' }
];