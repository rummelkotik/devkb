import type { SnippetItem } from './linux';

export const BACKEND_SNIPPETS: SnippetItem[] = [
  // --- Инициализация и Сервер Express ---
  { id: 'b1', subCategory: 'Express', code: 'import express from "express";\nconst app = express();\nconst PORT = process.env.PORT || 3000;\napp.listen(PORT, () => console.log(`Server on :${PORT}`));', desc: 'Базовая инициализация сервера Express на ES-модулях' },
  { id: 'b2', subCategory: 'Express', code: 'app.use(express.json());', desc: 'Встроенный middleware для автоматического парсинга JSON в теле запросов (req.body)' },
  { id: 'b3', subCategory: 'Express', code: 'app.use(express.urlencoded({ extended: true }));', desc: 'Парсинг данных HTML-форм (application/x-www-form-urlencoded)' },
  { id: 'b4', subCategory: 'Express', code: 'app.use("/static", express.static("public"));', desc: 'Раздача статичных файлов (картинок, css, js) из директории public' },
  { id: 'b5', subCategory: 'Express', code: 'app.disable("x-powered-by");', desc: 'Отключение заголовка X-Powered-By для сокрытия использования Express' },

  // --- Роутинг и Параметры ---
  { id: 'b6', subCategory: 'Роутинг', code: 'app.get("/api/users", (req, res) => {\n  res.json({ users: [] });\n});', desc: 'Обработчик GET-запроса с отправкой JSON-ответа' },
  { id: 'b7', subCategory: 'Роутинг', code: 'app.post("/api/users", (req, res) => {\n  const newUser = req.body;\n  res.status(201).json(newUser);\n});', desc: 'Обработчик POST-запроса с HTTP статусом 201 Created' },
  { id: 'b8', subCategory: 'Роутинг', code: 'const { id } = req.params;\nconst userId = Number(id);', desc: 'Извлечение динамического параметра URL из пути /api/users/:id' },
  { id: 'b9', subCategory: 'Роутинг', code: 'const { search, limit = "10" } = req.query;', desc: 'Чтение query-параметров из строки запроса ?search=val&limit=10' },
  { id: 'b10', subCategory: 'Роутинг', code: 'import { Router } from "express";\nconst router = Router();\nrouter.get("/", handler);\nexport default router;', desc: 'Модульный изолированный Express Router для разделения контроллеров по файлам' },
  { id: 'b11', subCategory: 'Роутинг', code: 'app.use("/api/v1/auth", authRouter);', desc: 'Подключение дочернего роутера к общему пути приложения' },

  // --- Middleware и Аутентификация ---
  { id: 'b12', subCategory: 'Middleware', code: 'const logger = (req, res, next) => {\n  console.log(`${req.method} ${req.url}`);\n  next();\n};', desc: 'Базовый middleware с передачей управления следующему обработчику через next()' },
  { id: 'b13', subCategory: 'Middleware', code: 'const requireAuth = (req, res, next) => {\n  const token = req.headers.authorization?.split(" ")[1];\n  if (!token) return res.status(401).json({ error: "Unauthorized" });\n  next();\n};', desc: 'Middleware проверки наличия Bearer-токена в заголовках' },
  { id: 'b14', subCategory: 'Middleware', code: 'const asyncHandler = (fn) => (req, res, next) => {\n  Promise.resolve(fn(req, res, next)).catch(next);\n};', desc: 'Универсальная обертка для асинхронных роутов без дублирования try-catch' },
  { id: 'b15', subCategory: 'Middleware', code: 'app.use((err, req, res, next) => {\n  console.error(err.stack);\n  res.status(err.status || 500).json({ error: err.message });\n});', desc: 'Глобальный централизованный обработчик ошибок Express (4 аргумента)' },
  { id: 'b16', subCategory: 'Middleware', code: 'app.use((req, res) => {\n  res.status(404).json({ error: "Not Found" });\n});', desc: 'Обработчик 404 для неизвестных роутов (ставится в самом конце цепочки)' },

  // --- База данных SQLite (better-sqlite3) ---
  { id: 'b17', subCategory: 'SQLite', code: 'import Database from "better-sqlite3";\nconst db = new Database("data.db");', desc: 'Инициализация синхронного и производительного клиента better-sqlite3' },
  { id: 'b18', subCategory: 'SQLite', code: 'db.pragma("journal_mode = WAL");', desc: 'Включение режима Write-Ahead Logging (WAL) для многократного ускорения записи' },
  { id: 'b19', subCategory: 'SQLite', code: 'db.pragma("foreign_keys = ON");', desc: 'Обязательное включение контроля внешних ключей (Foreign Keys) в SQLite' },
  { id: 'b20', subCategory: 'SQLite', code: 'db.exec(`\n  CREATE TABLE IF NOT EXISTS users (\n    id INTEGER PRIMARY KEY AUTOINCREMENT,\n    name TEXT NOT NULL,\n    email TEXT UNIQUE NOT NULL,\n    created_at DATETIME DEFAULT CURRENT_TIMESTAMP\n  );\n`);', desc: 'Создание таблицы пользователей с автоинкрементом и уникальным email' },
  { id: 'b21', subCategory: 'SQLite', code: 'const users = db.prepare("SELECT * FROM users WHERE is_active = ?").all(1);', desc: 'Подготовленный запрос (all): возврат массива всех найденных строк' },
  { id: 'b22', subCategory: 'SQLite', code: 'const user = db.prepare("SELECT * FROM users WHERE id = ?").get(id);', desc: 'Подготовленный запрос (get): возврат ровно одной строки или undefined' },
  { id: 'b23', subCategory: 'SQLite', code: 'const stmt = db.prepare("INSERT INTO users (name, email) VALUES (?, ?)");\nconst info = stmt.run("Vlad", "vlad@example.com");\nconsole.log(info.lastInsertRowid);', desc: 'Вставка строки (run) с получением ID созданной записи' },
  { id: 'b24', subCategory: 'SQLite', code: 'const stmt = db.prepare("UPDATE users SET name = ? WHERE id = ?");\nconst info = stmt.run("Новое Имя", id);\nconsole.log(info.changes); // количество затронутых строк', desc: 'Обновление записи с проверкой количества изменений' },
  { id: 'b25', subCategory: 'SQLite', code: 'db.prepare("DELETE FROM users WHERE id = ?").run(id);', desc: 'Безопасное удаление строки по параметризованному ID' },
  { id: 'b26', subCategory: 'SQLite', code: 'const runTransaction = db.transaction((items) => {\n  for (const item of items) insertStmt.run(item);\n});\nrunTransaction(list);', desc: 'Атомарная транзакция в better-sqlite3 (автоматический commit или rollback)' },

  // --- SQL Запросы и Индексы ---
  { id: 'b27', subCategory: 'SQL', code: 'CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);', desc: 'Создание индекса для мгновенного поиска по полю email' },
  { id: 'b28', subCategory: 'SQL', code: 'SELECT u.name, COUNT(o.id) as total_orders\nFROM users u\nLEFT JOIN orders o ON u.id = o.user_id\nGROUP BY u.id;', desc: 'LEFT JOIN с группировкой GROUP BY и агрегацией COUNT' },
  { id: 'b29', subCategory: 'SQL', code: 'SELECT * FROM products ORDER BY created_at DESC LIMIT ? OFFSET ?;', desc: 'Пагинация результатов через LIMIT и OFFSET' },
  { id: 'b30', subCategory: 'SQL', code: 'SELECT * FROM logs WHERE created_at >= datetime("now", "-7 days");', desc: 'Выборка данных за последние 7 дней с использованием нативных функций даты SQLite' },
  { id: 'b31', subCategory: 'SQL', code: 'SELECT * FROM users WHERE name LIKE ?;\n// query: `%${term}%`', desc: 'Нечувствительный к регистру поиск по вхождению подстроки' },
  { id: 'b32', subCategory: 'SQL', code: 'CREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE\n);', desc: 'Каскадное удаление (ON DELETE CASCADE) дочерних записей при удалении родителя' },
  { id: 'b33', subCategory: 'SQL', code: 'SELECT coalesce(avatar, "default.png") as avatar FROM profiles;', desc: 'Использование COALESCE для подстановки дефолтного значения вместо NULL' },
  { id: 'b34', subCategory: 'SQL', code: 'VACUUM;', desc: 'Сжатие и дефрагментация файла базы данных SQLite после удаления больших объемов данных' },

  // --- Безопасность и Хэширование (bcrypt, helmet, cors) ---
  { id: 'b35', subCategory: 'Безопасность', code: 'import bcrypt from "bcrypt";\nconst saltRounds = 10;\nconst hash = await bcrypt.hash(password, saltRounds);', desc: 'Надежное криптостойкое хэширование пароля с солью через bcrypt' },
  { id: 'b36', subCategory: 'Безопасность', code: 'const isMatch = await bcrypt.compare(rawPassword, storedHash);', desc: 'Сравнение сырого пароля с сохраненным хэшем при логине' },
  { id: 'b37', subCategory: 'Безопасность', code: 'import helmet from "helmet";\napp.use(helmet());', desc: 'Автоматическая установка защитных HTTP-заголовков (CSP, HSTS, X-Frame-Options)' },
  { id: 'b38', subCategory: 'Безопасность', code: 'import cors from "cors";\napp.use(cors({ origin: "https://cheat.apttt.ru", credentials: true }));', desc: 'Настройка CORS с разрешением запросов только с доверенного домена' },
  { id: 'b39', subCategory: 'Безопасность', code: 'import rateLimit from "express-rate-limit";\nconst limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 });\napp.use("/api/", limiter);', desc: 'Защита от брутфорса и DDoS: ограничение до 100 запросов за 15 минут' },

  // --- JWT и Сессии (Tokens) ---
  { id: 'b40', subCategory: 'JWT', code: 'import jwt from "jsonwebtoken";\nconst token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: "7d" });', desc: 'Генерация JWT-токена со сроком жизни 7 дней' },
  { id: 'b41', subCategory: 'JWT', code: 'try {\n  const payload = jwt.verify(token, process.env.JWT_SECRET);\n  req.user = payload;\n} catch (err) {\n  return res.status(403).json({ error: "Invalid token" });\n}', desc: 'Проверка валидности и срока жизни JWT токена' },
  { id: 'b42', subCategory: 'JWT', code: 'res.cookie("token", token, {\n  httpOnly: true,\n  secure: process.env.NODE_ENV === "production",\n  sameSite: "strict",\n  maxAge: 7 * 24 * 60 * 60 * 1000\n});', desc: 'Установка безопасной HttpOnly cookie, недоступной для JavaScript (защита от XSS)' },
  { id: 'b43', subCategory: 'JWT', code: 'res.clearCookie("token");', desc: 'Очистка cookie при выходе пользователя из системы (logout)' },

  // --- Валидация данных (Zod) ---
  { id: 'b44', subCategory: 'Валидация', code: 'import { z } from "zod";\nconst userSchema = z.object({\n  email: z.string().email(),\n  password: z.string().min(8),\n  age: z.number().int().positive().optional()\n});', desc: 'Декларативная схема валидации входящих данных через Zod' },
  { id: 'b45', subCategory: 'Валидация', code: 'const parsed = userSchema.safeParse(req.body);\nif (!parsed.success) {\n  return res.status(400).json({ errors: parsed.error.issues });\n}\nconst validData = parsed.data;', desc: 'Безопасный парсинг с отправкой читаемого списка ошибок валидации' },

  // --- Файловая система (fs/promises) ---
  { id: 'b46', subCategory: 'Файлы', code: 'import fs from "node:fs/promises";\nconst content = await fs.readFile("./data.json", "utf-8");\nconst json = JSON.parse(content);', desc: 'Асинхронное чтение текстового файла' },
  { id: 'b47', subCategory: 'Файлы', code: 'await fs.writeFile("./output.txt", "Текст", "utf-8");', desc: 'Асинхронная запись текста в файл (перезапись содержимого)' },
  { id: 'b48', subCategory: 'Файлы', code: 'await fs.appendFile("./app.log", `${new Date().toISOString()} - ok\\n`);', desc: 'Дописывание строки в конец лог-файла' },
  { id: 'b49', subCategory: 'Файлы', code: 'await fs.mkdir("./uploads/images", { recursive: true });', desc: 'Рекурсивное создание структуры вложенных папок' },
  { id: 'b50', subCategory: 'Файлы', code: 'await fs.unlink("./temp.txt");', desc: 'Удаление файла с диска' },
  { id: 'b51', subCategory: 'Файлы', code: 'const exists = await fs.access("./file.txt").then(() => true).catch(() => false);', desc: 'Проверка существования файла без выбрасывания исключения' },
  { id: 'b52', subCategory: 'Файлы', code: 'const files = await fs.readdir("./dist");', desc: 'Получение списка имен всех файлов в папке' },

  // --- Пути и Системные модули (Path, OS, Process) ---
  { id: 'b53', subCategory: 'Система', code: 'import path from "node:path";\nimport { fileURLToPath } from "node:url";\nconst __dirname = path.dirname(fileURLToPath(import.meta.url));', desc: 'Получение аналога __dirname в Node.js ES-модулях' },
  { id: 'b54', subCategory: 'Система', code: 'const filePath = path.join(__dirname, "uploads", "file.pdf");', desc: 'Кроссплатформенное объединение путей с правильными слэшами' },
  { id: 'b55', subCategory: 'Система', code: 'const ext = path.extname("report.pdf"); // ".pdf"', desc: 'Извлечение расширения файла' },
  { id: 'b56', subCategory: 'Система', code: 'import os from "node:os";\nconst freeMem = os.freemem() / 1024 / 1024;\nconst cpuCount = os.cpus().length;', desc: 'Получение свободной RAM и количества ядер процессора' },
  { id: 'b57', subCategory: 'Система', code: 'process.on("uncaughtException", (err) => {\n  console.error("Critical:", err);\n  process.exit(1);\n});', desc: 'Перехват критических необработанных исключений процесса' },
  { id: 'b58', subCategory: 'Система', code: 'process.on("unhandledRejection", (reason) => {\n  console.error("Unhandled Rejection:", reason);\n});', desc: 'Перехват необработанных отклонений Promise' },
  { id: 'b59', subCategory: 'Система', code: 'const gracefulShutdown = () => {\n  server.close(() => { db.close(); process.exit(0); });\n};\nprocess.on("SIGTERM", gracefulShutdown);\nprocess.on("SIGINT", gracefulShutdown);', desc: 'Graceful shutdown: корректное закрытие соединений БД при остановке контейнера' },

  // --- Переменные окружения (.env) ---
  { id: 'b60', subCategory: 'Конфиг', code: 'import "dotenv/config";\nconst dbHost = process.env.DB_HOST;', desc: 'Автозагрузка переменных из .env файла через библиотеку dotenv' },
  { id: 'b61', subCategory: 'Конфиг', code: 'node --env-file=.env server.js', desc: 'Нативная загрузка .env файла флагом в Node.js (без сторонних пакетов)' },

  // --- Потоки и Большие файлы (Streams) ---
  { id: 'b62', subCategory: 'Потоки', code: 'import { createReadStream } from "node:fs";\nconst stream = createReadStream("big-video.mp4");\nstream.pipe(res);', desc: 'Эффективная отдача тяжелого файла клиенту через потоковую передачу без загрузки в память' },
  { id: 'b63', subCategory: 'Потоки', code: 'import { pipeline } from "node:stream/promises";\nawait pipeline(readStream, transformStream, writeStream);', desc: 'Безопасное связывание цепочки потоков через Promise-обертку pipeline' },

  // --- Загрузка файлов (Multer) ---
  { id: 'b64', subCategory: 'Файлы', code: 'import multer from "multer";\nconst upload = multer({ dest: "uploads/", limits: { fileSize: 5 * 1024 * 1024 } });\napp.post("/upload", upload.single("avatar"), handler);', desc: 'Прием загрузки одного файла с лимитом размера 5 МБ' },
  { id: 'b65', subCategory: 'Файлы', code: 'const storage = multer.diskStorage({\n  destination: "uploads/",\n  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)\n});', desc: 'Кастомное сохранение файлов с сохранением уникального имени' },

  // --- Запуск процессов (Child Process) ---
  { id: 'b66', subCategory: 'Процессы', code: 'import { exec } from "node:child_process";\nimport { promisify } from "node:util";\nconst execAsync = promisify(exec);\nconst { stdout } = await execAsync("git status");', desc: 'Асинхронный запуск консольных системных команд из Node.js' },
  { id: 'b67', subCategory: 'Процессы', code: 'import { spawn } from "node:child_process";\nconst ls = spawn("ls", ["-lh", "/usr"]);\nls.stdout.on("data", data => console.log(`${data}`));', desc: 'Потоковый запуск дочернего процесса spawn для непрерывного вывода' },

  // --- Шифрование и Хеши (Crypto) ---
  { id: 'b68', subCategory: 'Безопасность', code: 'import crypto from "node:crypto";\nconst hash = crypto.createHash("sha256").update(data).digest("hex");', desc: 'Генерация контрольной суммы строки или файла алгоритмом SHA-256' },
  { id: 'b69', subCategory: 'Безопасность', code: 'const randomKey = crypto.randomBytes(32).toString("hex");', desc: 'Генерация случайного криптостойкого ключа (например, для JWT_SECRET)' },

  // --- Сетевые запросы и Проксирование ---
  { id: 'b70', subCategory: 'Сеть', code: 'const res = await fetch("https://api.github.com/users", {\n  headers: { "User-Agent": "Node-Backend" }\n});\nconst users = await res.json();', desc: 'Нативный fetch внутри Node.js для внешних API запросов' },
  { id: 'b71', subCategory: 'Сеть', code: 'app.set("trust proxy", 1);', desc: 'Доверие заголовкам X-Forwarded-For от Nginx / Nginx Proxy Manager' },

  // --- WebSocket сервер (ws) ---
  { id: 'b72', subCategory: 'WebSocket', code: 'import { WebSocketServer } from "ws";\nconst wss = new WebSocketServer({ port: 8080 });\nwss.on("connection", ws => {\n  ws.on("message", msg => console.log(`Received: ${msg}`));\n  ws.send("Hello client");\n});', desc: 'Простой и быстрый WebSocket-сервер на библиотеке ws' },
  { id: 'b73', subCategory: 'WebSocket', code: 'wss.clients.forEach(client => {\n  if (client.readyState === WebSocket.OPEN) client.send(payload);\n});', desc: 'Широковещательная рассылка (broadcast) сообщения всем активным клиентам' },

  // --- Кэширование в памяти (In-Memory Cache) ---
  { id: 'b74', subCategory: 'Оптимизация', code: 'const cache = new Map();\nconst getCached = (key, ttlMs, fn) => {\n  const cached = cache.get(key);\n  if (cached && Date.now() - cached.time < ttlMs) return cached.val;\n  const val = fn();\n  cache.set(key, { val, time: Date.now() });\n  return val;\n};', desc: 'Простейший быстрый TTL-кэш на Map для ускорения тяжелых запросов' },

  // --- Тестирование API (Node Test Runner) ---
  { id: 'b75', subCategory: 'Тесты', code: 'import test from "node:test";\nimport assert from "node:assert/strict";\ntest("sum calculation", () => {\n  assert.equal(1 + 2, 3);\n});', desc: 'Нативный тестовый раннер Node.js (запуск через node --test)' },

  // --- Паттерны архитектуры контроллеров ---
  { id: 'b76', subCategory: 'Паттерны', code: 'export const UserController = {\n  getAll: async (req, res) => { ... },\n  getById: async (req, res) => { ... },\n  create: async (req, res) => { ... }\n};', desc: 'Организация логики роутов в объектный контроллер' },
  { id: 'b77', subCategory: 'Паттерны', code: 'export class AppError extends Error {\n  constructor(public statusCode: number, message: string) {\n    super(message);\n  }\n}', desc: 'Кастомный класс ошибок с HTTP-кодом статуса для выброса в сервисах' },

  // --- Продвинутые приемы работы с SQLite ---
  { id: 'b78', subCategory: 'SQLite', code: 'db.backup(`backup-${Date.now()}.db`);', desc: 'Горячее создание резервной копии базы данных SQLite прямо во время работы приложения' },
  { id: 'b79', subCategory: 'SQLite', code: 'const info = db.prepare("INSERT OR IGNORE INTO tags (name) VALUES (?)").run("linux");', desc: 'Вставка с игнорированием дубликатов по UNIQUE полю' },
  { id: 'b80', subCategory: 'SQLite', code: 'const info = db.prepare(`\n  INSERT INTO counters (key, count) VALUES (?, 1)\n  ON CONFLICT(key) DO UPDATE SET count = count + 1\n`).run("visits");', desc: 'Upsert: вставка или инкремент счетчика при конфликте ключа' },
  { id: 'b81', subCategory: 'SQLite', code: 'const rows = db.prepare("SELECT * FROM users WHERE id IN (?, ?, ?)").all(1, 2, 3);', desc: 'Выборка с оператором IN для динамического списка значений' },
  { id: 'b82', subCategory: 'SQLite', code: 'db.prepare("SELECT json_extract(metadata, \'$.theme\') as theme FROM settings;").all();', desc: 'Чтение и извлечение полей из JSON-колонок внутри SQLite' },
  { id: 'b83', subCategory: 'SQLite', code: 'EXPLAIN QUERY PLAN SELECT * FROM users WHERE email = ?;', desc: 'Анализ плана выполнения запроса: проверка использования индексов (SEARCH vs SCAN)' },

  // --- HTTP-заголовки и Сжатие ---
  { id: 'b84', subCategory: 'Express', code: 'import compression from "compression";\napp.use(compression());', desc: 'Gzip/Brotli сжатие всех ответов сервера для ускорения отдачи трафика' },
  { id: 'b85', subCategory: 'Express', code: 'res.setHeader("Cache-Control", "public, max-age=86400");', desc: 'Инструкция браузеру кэшировать ответ ровно на 24 часа' },
  { id: 'b86', subCategory: 'Express', code: 'res.setHeader("Content-Disposition", \'attachment; filename="data.csv"\');', desc: 'Заголовок принудительного скачивания файла с заданным именем' },

  // --- Отправка Email (Nodemailer) ---
  { id: 'b87', subCategory: 'Почта', code: 'import nodemailer from "nodemailer";\nconst transport = nodemailer.createTransport({ host: "smtp.mail.ru", port: 465, secure: true, auth: { user, pass } });\nawait transport.sendMail({ from, to, subject, html });', desc: 'Отправка email писем через SMTP' },

  // --- Worker Threads (Многопоточность в Node) ---
  { id: 'b88', subCategory: 'Процессы', code: 'import { Worker } from "node:worker_threads";\nconst worker = new Worker("./worker.js", { workerData: { number: 42 } });\nworker.on("message", result => console.log(result));', desc: 'Вынос тяжелых CPU-вычислений в отдельный системный поток Worker Thread' },

  // --- Server-Sent Events (SSE) ---
  { id: 'b89', subCategory: 'Сеть', code: 'res.writeHead(200, {\n  "Content-Type": "text/event-stream",\n  "Cache-Control": "no-cache",\n  "Connection": "keep-alive"\n});\nres.write(`data: ${JSON.stringify({ status: "ok" })}\\n\\n`);', desc: 'Реализация Server-Sent Events (SSE) для односторонней трансляции данных клиенту' },

  // --- Пагинация курсором (Keyset Pagination) ---
  { id: 'b90', subCategory: 'SQL', code: 'SELECT * FROM messages WHERE id < ? ORDER BY id DESC LIMIT 20;', desc: 'Быстрая курсорная пагинация по ID (в разы быстрее тяжелого OFFSET на миллионах строк)' },

  // --- Дополнительные утилиты Backend ---
  { id: 'b91', subCategory: 'Express', code: 'app.use((req, res, next) => {\n  req.requestId = crypto.randomUUID();\n  res.setHeader("X-Request-Id", req.requestId);\n  next();\n});', desc: 'Присвоение каждому входящему запросу уникального Correlation/Request ID' },
  { id: 'b92', subCategory: 'Middleware', code: 'const validateId = (req, res, next) => {\n  const id = Number(req.params.id);\n  if (Number.isNaN(id) || id <= 0) return res.status(400).json({ error: "Invalid ID" });\n  next();\n};', desc: 'Быстрый middleware валидации целочисленного ID' },
  { id: 'b93', subCategory: 'SQLite', code: 'const count = db.prepare("SELECT COUNT(*) as total FROM users").get().total;', desc: 'Быстрый подсчет общего количества строк в таблице' },
  { id: 'b94', subCategory: 'SQL', code: 'BEGIN IMMEDIATE;', desc: 'Начало немедленной транзакции с получением блокировки на запись' },
  { id: 'b95', subCategory: 'Безопасность', code: 'import hpp from "hpp";\napp.use(hpp());', desc: 'Защита от HTTP Parameter Pollution (дублирование query параметров)' },
  { id: 'b96', subCategory: 'Система', code: 'const memUsage = process.memoryUsage();\nconsole.log(`Heap Used: ${Math.round(memUsage.heapUsed / 1024 / 1024)} MB`);', desc: 'Мониторинг объема занятой оперативной памяти процессом Node' },
  { id: 'b97', subCategory: 'Express', code: 'res.redirect(301, "https://cheat.apttt.ru/new-url");', desc: 'Постоянный HTTP 301 редирект на новый адрес' },
  { id: 'b98', subCategory: 'Файлы', code: 'import { watch } from "node:fs/promises";\nconst watcher = watch("./config.json");\nfor await (const event of watcher) console.log("Config changed:", event);', desc: 'Асинхронное отслеживание изменений файла на диске' },
  { id: 'b99', subCategory: 'Оптимизация', code: 'db.pragma("cache_size = -64000"); // 64 MB кэша в RAM', desc: 'Выделение оперативной памяти под кэш страниц SQLite для мгновенного чтения' },
  { id: 'b100', subCategory: 'Express', code: 'res.status(204).end();', desc: 'Ответ 204 No Content (успешно, без тела ответа, например при DELETE)' },
  { id: 'b101', subCategory: 'Система', code: 'const uptimeSec = process.uptime();', desc: 'Время непрерывной работы процесса Node.js в секундах' },
  { id: 'b102', subCategory: 'SQL', code: 'SELECT DISTINCT category FROM products;', desc: 'Получение списка уникальных категорий без дубликатов' }
];