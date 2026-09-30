import type { SnippetItem } from './linux';

export const TS_SNIPPETS: SnippetItem[] = [
  // --- Базовые типы и интерфейсы ---
  { id: 't1', subCategory: 'Базовые', code: 'type ID = string | number;', desc: 'Union Type: идентификатор может быть строкой или числом' },
  { id: 't2', subCategory: 'Базовые', code: 'interface User {\n  id: string;\n  name: string;\n  email?: string;\n  readonly createdAt: Date;\n}', desc: 'Интерфейс объекта с опциональным (email?) и неизменяемым (readonly) свойствами' },
  { id: 't3', subCategory: 'Базовые', code: 'interface Admin extends User {\n  permissions: string[];\n}', desc: 'Наследование одного интерфейса от другого через ключевое слово extends' },
  { id: 't4', subCategory: 'Базовые', code: 'type AdminUser = User & { role: "admin"; level: number };', desc: 'Пересечение типов (Intersection Type &) для объединения структур' },
  { id: 't5', subCategory: 'Базовые', code: 'type Callback = (err: Error | null, result?: string) => void;', desc: 'Типизация сигнатуры функции-колбэка' },
  { id: 't6', subCategory: 'Базовые', code: 'type Point = readonly [number, number];', desc: 'Неизменяемый кортеж (Tuple) фиксированной длины из двух чисел' },
  { id: 't7', subCategory: 'Базовые', code: 'const enum Status {\n  Pending = "PENDING",\n  Success = "SUCCESS",\n  Failed = "FAILED"\n}', desc: 'Константный Enum (встраивается значениями на этапе компиляции без оверхеда в JS)' },
  { id: 't8', subCategory: 'Базовые', code: 'type Nullable<T> = T | null | undefined;', desc: 'Универсальный псевдоним для значений, допускающих null или undefined' },
  { id: 't9', subCategory: 'Базовые', code: 'let data: unknown;', desc: 'Безопасная альтернатива any: требует проверки типа перед использованием' },
  { id: 't10', subCategory: 'Базовые', code: 'function fail(msg: string): never {\n  throw new Error(msg);\n}', desc: 'Тип never: функция никогда не завершается возвратом значения' },

  // --- Utility Types (Встроенные утилиты) ---
  { id: 't11', subCategory: 'Utility', code: 'type PartialUser = Partial<User>;', desc: 'Partial<T>: делает абсолютно все поля типа T опциональными' },
  { id: 't12', subCategory: 'Utility', code: 'type RequiredUser = Required<User>;', desc: 'Required<T>: делает все опциональные поля обязательными' },
  { id: 't13', subCategory: 'Utility', code: 'type ReadonlyUser = Readonly<User>;', desc: 'Readonly<T>: делает все свойства объекта только для чтения' },
  { id: 't14', subCategory: 'Utility', code: 'type UserPreview = Pick<User, "id" | "name">;', desc: 'Pick<T, K>: выбирает из типа только указанный набор ключей' },
  { id: 't15', subCategory: 'Utility', code: 'type UserWithoutEmail = Omit<User, "email">;', desc: 'Omit<T, K>: исключает указанные ключи из исходного типа' },
  { id: 't16', subCategory: 'Utility', code: 'type StringMap = Record<string, number>;', desc: 'Record<K, T>: словарь (map), где ключи типа K, а значения типа T' },
  { id: 't17', subCategory: 'Utility', code: 'type AvailableStatus = Exclude<"idle" | "run" | "stop", "stop">;', desc: 'Exclude<T, U>: исключает типы из объединения' },
  { id: 't18', subCategory: 'Utility', code: 'type StringOnly = Extract<string | number | boolean, string>;', desc: 'Extract<T, U>: оставляет в объединении только подходящие типы' },
  { id: 't19', subCategory: 'Utility', code: 'type NonNull = NonNullable<string | null | undefined>;', desc: 'NonNullable<T>: отсекает null и undefined из объединения' },
  { id: 't20', subCategory: 'Utility', code: 'type FnReturn = ReturnType<typeof fetchUsers>;', desc: 'ReturnType<T>: извлекает тип возвращаемого значения функции' },
  { id: 't21', subCategory: 'Utility', code: 'type FnArgs = Parameters<typeof fetchUsers>;', desc: 'Parameters<T>: извлекает типы аргументов функции в виде кортежа' },
  { id: 't22', subCategory: 'Utility', code: 'type ConstructorArgs = ConstructorParameters<typeof Error>;', desc: 'ConstructorParameters<T>: кортеж аргументов конструктора класса' },
  { id: 't23', subCategory: 'Utility', code: 'type Instance = InstanceType<typeof MyClass>;', desc: 'InstanceType<T>: извлекает тип экземпляра указанного класса' },
  { id: 't24', subCategory: 'Utility', code: 'type Unwrapped = Awaited<Promise<string[]>>;', desc: 'Awaited<T>: рекурсивно разворачивает Promise до итогового типа данных' },

  // --- Дженерики (Generics) ---
  { id: 't25', subCategory: 'Дженерики', code: 'function identity<T>(arg: T): T {\n  return arg;\n}', desc: 'Базовая generic-функция с сохранением типа аргумента' },
  { id: 't26', subCategory: 'Дженерики', code: 'interface ApiResponse<TData = any> {\n  status: "ok" | "error";\n  data: TData;\n  message?: string;\n}', desc: 'Generic-интерфейс сетевого ответа с дефолтным типом данных' },
  { id: 't27', subCategory: 'Дженерики', code: 'function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {\n  return obj[key];\n}', desc: 'Ограничение дженерика (extends keyof) для типобезопасного чтения полей' },
  { id: 't28', subCategory: 'Дженерики', code: 'interface Lengthwise {\n  length: number;\n}\nfunction logLength<T extends Lengthwise>(arg: T): void {\n  console.log(arg.length);\n}', desc: 'Ограничение дженерика интерфейсом: аргумент гарантированно имеет length' },
  { id: 't29', subCategory: 'Дженерики', code: 'class DataStore<T extends { id: string }> {\n  private items = new Map<string, T>();\n  set(item: T) { this.items.set(item.id, item); }\n  get(id: string): T | undefined { return this.items.get(id); }\n}', desc: 'Generic-класс для типизированного хранилища объектов с обязательным id' },
  { id: 't30', subCategory: 'Дженерики', code: 'const makePair = <A, B>(first: A, second: B): [A, B] => [first, second];', desc: 'Generic стрелочная функция с несколькими типовыми переменными' },

  // --- Type Guards и Сужение типов (Narrowing) ---
  { id: 't31', subCategory: 'TypeGuards', code: 'function isString(val: unknown): val is string {\n  return typeof val === "string";\n}', desc: 'Пользовательский Type Guard (предикат val is string) для сужения типа' },
  { id: 't32', subCategory: 'TypeGuards', code: 'function isUser(obj: any): obj is User {\n  return obj && typeof obj.id === "string" && typeof obj.name === "string";\n}', desc: 'Type Guard для проверки сложной структуры интерфейса во время выполнения' },
  { id: 't33', subCategory: 'TypeGuards', code: 'if ("role" in entity) {\n  console.log(entity.role);\n}', desc: 'Сужение типа через оператор "in"' },
  { id: 't34', subCategory: 'TypeGuards', code: 'if (err instanceof CustomError) {\n  console.log(err.code);\n}', desc: 'Сужение типа через проверку экземпляра класса instanceof' },
  { id: 't35', subCategory: 'TypeGuards', code: 'function assertIsDefined<T>(val: T): asserts val is NonNullable<T> {\n  if (val === undefined || val === null) throw new Error("Not defined");\n}', desc: 'Функция утверждения (Assertion Signature) для защиты от null' },
  { id: 't36', subCategory: 'TypeGuards', code: 'function handle(x: string | number) {\n  if (typeof x === "string") return x.toUpperCase();\n  return x.toFixed(2);\n}', desc: 'Автоматическое сужение типов в блоках if / else' },
  { id: 't37', subCategory: 'TypeGuards', code: 'function exhaustiveCheck(param: never): never {\n  throw new Error(`Unhandled case: ${param}`);\n}', desc: 'Проверка исчерпывающего перечисления (Exhaustive check) в switch-case' },

  // --- Размеченные объединения (Discriminated Unions) ---
  { id: 't38', subCategory: 'Unions', code: 'type Action =\n  | { type: "LOGIN"; payload: { token: string } }\n  | { type: "LOGOUT" }\n  | { type: "UPDATE_PROFILE"; payload: { name: string } };', desc: 'Discriminated Union: объединение объектов с уникальным строковым дискриминатором' },
  { id: 't39', subCategory: 'Unions', code: 'type AsyncState<T> =\n  | { status: "idle" }\n  | { status: "loading" }\n  | { status: "success"; data: T }\n  | { status: "error"; error: Error };', desc: 'Паттерн описания состояний асинхронной загрузки' },
  { id: 't40', subCategory: 'Unions', code: 'type Result<T, E = Error> =\n  | { ok: true; value: T }\n  | { ok: false; error: E };', desc: 'Функциональный тип Result (Either) без выбрасывания исключений' },

  // --- Условные типы (Conditional Types) ---
  { id: 't41', subCategory: 'Conditional', code: 'type IsString<T> = T extends string ? true : false;', desc: 'Базовый условный тип (ternary operator на уровне типов)' },
  { id: 't42', subCategory: 'Conditional', code: 'type Flatten<T> = T extends any[] ? T[number] : T;', desc: 'Извлечение типа элемента, если T является массивом' },
  { id: 't43', subCategory: 'Conditional', code: 'type ElementType<T> = T extends (infer U)[] ? U : never;', desc: 'Вывод типа через infer: извлечение типа элементов массива' },
  { id: 't44', subCategory: 'Conditional', code: 'type UnpackPromise<T> = T extends Promise<infer U> ? U : T;', desc: 'Самодельный распаковщик Promise через ключевое слово infer' },
  { id: 't45', subCategory: 'Conditional', code: 'type FirstArg<T> = T extends (first: infer F, ...rest: any[]) => any ? F : never;', desc: 'Извлечение типа первого параметра произвольной функции через infer' },

  // --- Mapped Types (Отображаемые типы) ---
  { id: 't46', subCategory: 'MappedTypes', code: 'type Mutable<T> = {\n  -readonly [P in keyof T]: T[P];\n};', desc: 'Удаление модификатора readonly со всех свойств объекта' },
  { id: 't47', subCategory: 'MappedTypes', code: 'type Concrete<T> = {\n  [P in keyof T]-?: T[P];\n};', desc: 'Удаление модификатора опциональности (?) со всех свойств' },
  { id: 't48', subCategory: 'MappedTypes', code: 'type Getters<T> = {\n  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];\n};', desc: 'Генерация интерфейса геттеров с капитализацией имен через Template Literal' },
  { id: 't49', subCategory: 'MappedTypes', code: 'type NullableFields<T> = {\n  [P in keyof T]: T[P] | null;\n};', desc: 'Преобразование каждого поля объекта в допускающее null' },
  { id: 't50', subCategory: 'MappedTypes', code: 'type Stringified<T> = {\n  [P in keyof T]: string;\n};', desc: 'Принудительное приведение типов всех значений объекта к string' },

  // --- Template Literal Types ---
  { id: 't51', subCategory: 'TemplateTypes', code: 'type Event = `on${"Click" | "Hover" | "Focus"}`;', desc: 'Генерация объединения строк по шаблону: onClick | onHover | onFocus' },
  { id: 't52', subCategory: 'TemplateTypes', code: 'type CSSUnit = `${number}${"px" | "rem" | "%" | "vh"}`;', desc: 'Типизация размерностей CSS (например "16px", "1.5rem")' },
  { id: 't53', subCategory: 'TemplateTypes', code: 'type Route = `/api/${string}`;', desc: 'Шаблон безопасных URL роутов, начинающихся строго с /api/' },
  { id: 't54', subCategory: 'TemplateTypes', code: 'type CamelCase<S extends string> = S extends `${infer T}_${infer U}` ? `${T}${Capitalize<CamelCase<U>>}` : S;', desc: 'Преобразование snake_case строк в camelCase на уровне компилятора типов' },

  // --- Const Assertions и Type Indexing ---
  { id: 't55', subCategory: 'ConstIndexing', code: 'const HTTP_STATUS = {\n  OK: 200,\n  NOT_FOUND: 404,\n  INTERNAL_ERROR: 500\n} as const;', desc: 'as const: глубокая фиксация литералов объекта и запрет их мутации' },
  { id: 't56', subCategory: 'ConstIndexing', code: 'type HttpStatus = typeof HTTP_STATUS[keyof typeof HTTP_STATUS];', desc: 'Извлечение Union-типа значений константного объекта (200 | 404 | 500)' },
  { id: 't57', subCategory: 'ConstIndexing', code: 'const ROLES = ["admin", "editor", "viewer"] as const;\ntype Role = typeof ROLES[number];', desc: 'Получение Union-типа строк из массива констант (admin | editor | viewer)' },
  { id: 't58', subCategory: 'ConstIndexing', code: 'type UserName = User["name"];', desc: 'Индексированный доступ к типу конкретного поля интерфейса' },
  { id: 't59', subCategory: 'ConstIndexing', code: 'type UserKeys = keyof User;', desc: 'keyof: получение объединения всех ключей интерфейса ("id" | "name" | ...)' },

  // --- Продвинутые приемы и Трюки ---
  { id: 't60', subCategory: 'Трюки', code: 'type Brand<K, T> = K & { readonly __brand: T };\ntype UserId = Brand<string, "UserId">;\ntype PostId = Brand<string, "PostId">;', desc: 'Nominal typing (Branded types): запрет случайной подстановки одного ID вместо другого' },
  { id: 't61', subCategory: 'Трюки', code: 'type DeepPartial<T> = {\n  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];\n};', desc: 'Глубокий Partial: делает опциональными поля на всех уровнях вложенности' },
  { id: 't62', subCategory: 'Трюки', code: 'type DeepReadonly<T> = {\n  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];\n};', desc: 'Глубокая заморозка типов на чтение для сложных вложенных структур' },
  { id: 't63', subCategory: 'Трюки', code: 'type StrictUnion<T, U> = (T | U) extends object ? (T & { [K in Exclude<keyof U, keyof T>]?: never }) | (U & { [K in Exclude<keyof T, keyof U>]?: never }) : T | U;', desc: 'Взаимоисключающий союз: запрещает передавать одновременно поля из обоих типов' },
  { id: 't64', subCategory: 'Трюки', code: 'type NonEmptyArray<T> = [T, ...T[]];', desc: 'Тип непустого массива: гарантирует наличие как минимум одного элемента' },
  { id: 't65', subCategory: 'Трюки', code: 'const satisfiesConfig = {\n  host: "localhost",\n  port: 8080\n} satisfies Record<string, string | number>;', desc: 'Оператор satisfies: валидирует соответствие типу без потери точных литералов' },
  { id: 't66', subCategory: 'Трюки', code: 'type TupleToUnion<T extends readonly any[]> = T[number];', desc: 'Преобразование кортежа в объединение типов элементов' },
  { id: 't67', subCategory: 'Трюки', code: 'type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never;', desc: 'Магическое преобразование объединения (A | B) в пересечение (A & B)' },
  { id: 't68', subCategory: 'Трюки', code: 'type Prettify<T> = {\n  [K in keyof T]: T[K];\n} & {};', desc: 'Утилита Prettify: разворачивает сложные пересечения в понятный вид во всплывающей подсказке' },

  // --- Классы и Декораторы ---
  { id: 't69', subCategory: 'Классы', code: 'class BaseService {\n  constructor(protected readonly api: string) {}\n}', desc: 'Параметрические свойства конструктора (автоматическое объявление поля класса)' },
  { id: 't70', subCategory: 'Классы', code: 'abstract class Controller {\n  abstract execute(): Promise<void>;\n  log() { console.log("Done"); }\n}', desc: 'Абстрактный класс с обязательной реализацией метода execute в наследниках' },
  { id: 't71', subCategory: 'Классы', code: 'class Singleton {\n  private static instance: Singleton;\n  private constructor() {}\n  static getInstance() { return this.instance ||= new Singleton(); }\n}', desc: 'Реализация паттерна Singleton с закрытым приватным конструктором' },
  { id: 't72', subCategory: 'Классы', code: 'interface Printable {\n  print(): void;\n}\nclass Doc implements Printable {\n  print() { console.log("Printing"); }\n}', desc: 'Реализация контракта интерфейса классом через ключевое слово implements' },

  // --- Декларации и Окружение (.d.ts) ---
  { id: 't73', subCategory: 'Декларации', code: 'declare global {\n  interface Window {\n    analytics: any;\n  }\n}', desc: 'Расширение глобального объекта window в проекте' },
  { id: 't74', subCategory: 'Декларации', code: 'declare module "*.svg" {\n  const content: string;\n  export default content;\n}', desc: 'Декларация типов для импорта SVG файлов как строк' },
  { id: 't75', subCategory: 'Декларации', code: 'declare module "*.module.css" {\n  const classes: { [key: string]: string };\n  export default classes;\n}', desc: 'Декларация структуры для CSS Modules' },
  { id: 't76', subCategory: 'Декларации', code: 'declare const __APP_VERSION__: string;', desc: 'Объявление глобальных констант, внедряемых сборщиком Vite / Webpack' },

  // --- React & TypeScript специфичные типы ---
  { id: 't77', subCategory: 'ReactTypes', code: 'interface ButtonProps {\n  children: React.ReactNode;\n  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;\n}', desc: 'Типизация детей ReactNode и типизированного события клика мыши' },
  { id: 't78', subCategory: 'ReactTypes', code: 'type InputProps = React.ComponentPropsWithoutRef<"input">;', desc: 'Заимствование всех нативных HTML-атрибутов тега input без конфликтов с ref' },
  { id: 't79', subCategory: 'ReactTypes', code: 'type PropsWithClass = React.PropsWithChildren<{ className?: string }>;', desc: 'Утилита PropsWithChildren для быстрого добавления типизированного children' },
  { id: 't80', subCategory: 'ReactTypes', code: 'const ref = React.useRef<HTMLInputElement | null>(null);', desc: 'Строгая типизация DOM-ссылки на инпут с null по умолчанию' },
  { id: 't81', subCategory: 'ReactTypes', code: 'const [state, setState] = React.useState<User | null>(null);', desc: 'Явное задание типа состояния компонента с возможностью null' },
  { id: 't82', subCategory: 'ReactTypes', code: 'type ChangeHandler = React.ChangeEventHandler<HTMLInputElement>;', desc: 'Готовый алиас для обработчика изменения инпута onChange' },
  { id: 't83', subCategory: 'ReactTypes', code: 'type FormHandler = React.FormEventHandler<HTMLFormElement>;', desc: 'Тип обработчика отправки формы onSubmit' },

  // --- Перегрузка функций (Function Overloads) ---
  { id: 't84', subCategory: 'Функции', code: 'function parse(x: string): string[];\nfunction parse(x: number): number[];\nfunction parse(x: string | number): any[] {\n  return typeof x === "string" ? x.split("") : [x];\n}', desc: 'Перегрузка функций: строгое соответствие типа результата типу переданного аргумента' },
  { id: 't85', subCategory: 'Функции', code: 'function getLength(val: any[] | string): number {\n  return val.length;\n}', desc: 'Объединение типов параметров с общими свойствами' },
  { id: 't86', subCategory: 'Функции', code: 'type AsyncFunction<T> = (...args: any[]) => Promise<T>;', desc: 'Универсальная сигнатура любой асинхронной функции' },

  // --- Важные опции tsconfig.json ---
  { id: 't87', subCategory: 'TSConfig', code: '"strict": true', desc: 'Включение всех строгих проверок компилятора разом' },
  { id: 't88', subCategory: 'TSConfig', code: '"noImplicitAny": true', desc: 'Запрет неявного вывода типа any при отсутствии аннотаций' },
  { id: 't89', subCategory: 'TSConfig', code: '"strictNullChecks": true', desc: 'Разделение типов null и undefined от всех остальных типов' },
  { id: 't90', subCategory: 'TSConfig', code: '"noUnusedLocals": true', desc: 'Предупреждение компилятора об объявленных, но неиспользуемых локальных переменных' },
  { id: 't91', subCategory: 'TSConfig', code: '"noUnusedParameters": true', desc: 'Ошибка при наличии неиспользуемых аргументов в объявлении функций' },
  { id: 't92', subCategory: 'TSConfig', code: '"exactOptionalPropertyTypes": true', desc: 'Запрет присвоения явного undefined полям, объявленным как optional (prop?: string)' },
  { id: 't93', subCategory: 'TSConfig', code: '"noImplicitReturns": true', desc: 'Контроль обязательного возврата значения во всех ветках выполнения функции' },
  { id: 't94', subCategory: 'TSConfig', code: '"verbatimModuleSyntax": true', desc: 'Строгое требование использования "import type" для импорта только типов' },
  { id: 't95', subCategory: 'TSConfig', code: '"paths": {\n  "@/*": ["src/*"]\n}', desc: 'Настройка коротких путей (path aliases) для красивых абсолютных импортов' },
  { id: 't96', subCategory: 'TSConfig', code: '"skipLibCheck": true', desc: 'Пропуск проверки типов внутри сторонних файлов библиотек node_modules для ускорения сборки' },

  // --- Предохранители и Подавление ---
  { id: 't97', subCategory: 'Подавление', code: '// @ts-expect-error: пояснение почему здесь ошибка', desc: 'Подавление ошибки компилятора: упадет, если ошибки на самом деле нет' },
  { id: 't98', subCategory: 'Подавление', code: '// @ts-ignore', desc: 'Глухое игнорирование ошибки на следующей строке кода (не рекомендуется)' },
  { id: 't99', subCategory: 'Подавление', code: 'const val = maybeNull!;', desc: 'Non-null assertion operator (!): заверение компилятора, что значение не null' },
  { id: 't100', subCategory: 'Подавление', code: 'const el = e.target as HTMLButtonElement;', desc: 'Принудительное приведение типа (Type Assertion через "as")' },
  { id: 't101', subCategory: 'Подавление', code: 'const x = (unknownVal as unknown) as TargetType;', desc: 'Двойное приведение типов в крайних случаях несовместимости' },
  { id: 't102', subCategory: 'Подавление', code: 'export type {};', desc: 'Превращение любого файла в изолированный ES-модуль' }
];