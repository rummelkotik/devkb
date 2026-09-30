export interface SnippetItem {
  id: string;
  code: string;
  desc: string;
  subCategory: string;
  categoryTitle?: string;
}

export const LINUX_SNIPPETS: SnippetItem[] = [
  // --- Файлы и навигация ---
  { id: 'l1', subCategory: 'Файлы', code: 'pwd', desc: 'Абсолютный путь к текущей рабочей директории' },
  { id: 'l2', subCategory: 'Файлы', code: 'cd ~', desc: 'Переход в домашнюю директорию текущего пользователя' },
  { id: 'l3', subCategory: 'Файлы', code: 'cd ..', desc: 'Подняться на один уровень выше в дереве каталогов' },
  { id: 'l4', subCategory: 'Файлы', code: 'cd -', desc: 'Вернуться в предыдущую рабочую директорию' },
  { id: 'l5', subCategory: 'Файлы', code: 'ls -la', desc: 'Список всех файлов и папок с подробными правами и скрытыми точками' },
  { id: 'l6', subCategory: 'Файлы', code: 'ls -lhS', desc: 'Список файлов с понятным размером, отсортированный по убыванию веса' },
  { id: 'l7', subCategory: 'Файлы', code: 'tree -L 2', desc: 'Древовидная визуализация каталогов с глубиной вложенности до 2 уровней' },
  { id: 'l8', subCategory: 'Файлы', code: 'mkdir -p project/{src,dist,config}', desc: 'Создать структуру папок и подпапок одной командой' },
  { id: 'l9', subCategory: 'Файлы', code: 'touch file_{1..5}.txt', desc: 'Создать сразу несколько пустых файлов file_1.txt ... file_5.txt' },
  { id: 'l10', subCategory: 'Файлы', code: 'cp -r src/ backup_src/', desc: 'Рекурсивно скопировать папку со всем содержимым' },
  { id: 'l11', subCategory: 'Файлы', code: 'cp -a src/ /backup/src/', desc: 'Копирование с сохранением всех атрибутов, прав и меток' },
  { id: 'l12', subCategory: 'Файлы', code: 'mv old_name.txt new_name.txt', desc: 'Переименовать файл или переместить его в другой каталог' },
  { id: 'l13', subCategory: 'Файлы', code: 'rm -f file.txt', desc: 'Принудительно удалить файл без лишних подтверждений' },
  { id: 'l14', subCategory: 'Файлы', code: 'rm -rf /path/to/folder', desc: 'Рекурсивное и безвозвратное удаление директории' },
  { id: 'l15', subCategory: 'Файлы', code: 'ln -s /source/path /link/path', desc: 'Создать символическую ссылку (symlink) на файл или папку' },
  { id: 'l16', subCategory: 'Файлы', code: 'readlink -f /link/path', desc: 'Узнать реальный абсолютный путь, на который указывает symlink' },

  // --- Просмотр ---
  { id: 'l17', subCategory: 'Просмотр', code: 'cat file.txt', desc: 'Вывести полное содержимое файла в консоль' },
  { id: 'l18', subCategory: 'Просмотр', code: 'less file.txt', desc: 'Постраничный просмотр большого файла (q — выход, / — поиск)' },
  { id: 'l19', subCategory: 'Просмотр', code: 'head -n 20 file.txt', desc: 'Вывести первые 20 строк файла' },
  { id: 'l20', subCategory: 'Просмотр', code: 'tail -n 20 file.txt', desc: 'Вывести последние 20 строк файла' },
  { id: 'l21', subCategory: 'Просмотр', code: 'tail -f -n 50 /var/log/syslog', desc: 'Следить за логами файла в реальном времени' },
  { id: 'l22', subCategory: 'Просмотр', code: 'nano filename', desc: 'Консольный текстовый редактор' },
  { id: 'l23', subCategory: 'Просмотр', code: 'wc -l file.txt', desc: 'Посчитать точное количество строк в файле' },
  { id: 'l24', subCategory: 'Просмотр', code: 'diff -u file1.txt file2.txt', desc: 'Построчное сравнение двух файлов' },
  { id: 'l25', subCategory: 'Просмотр', code: 'sort file.txt | uniq -c', desc: 'Отсортировать строки и посчитать количество дубликатов' },

  // --- Поиск ---
  { id: 'l26', subCategory: 'Поиск', code: 'grep -rn "API_KEY" .', desc: 'Рекурсивный поиск текста по файлам с номерами строк' },
  { id: 'l27', subCategory: 'Поиск', code: 'grep -ri --exclude-dir=node_modules "test" .', desc: 'Поиск без учета регистра с исключением node_modules' },
  { id: 'l28', subCategory: 'Поиск', code: 'find . -type f -name "*.ts"', desc: 'Найти все файлы с расширением .ts в каталоге' },
  { id: 'l29', subCategory: 'Поиск', code: 'find . -type f -size +100M', desc: 'Найти все файлы размером более 100 мегабайт' },
  { id: 'l30', subCategory: 'Поиск', code: 'find . -type f -mtime -2', desc: 'Найти файлы, которые изменялись за последние 48 часов' },
  { id: 'l31', subCategory: 'Поиск', code: 'find . -type d -name "node_modules" -prune -exec rm -rf {} +', desc: 'Найти и разом удалить все вложенные папки node_modules' },
  { id: 'l32', subCategory: 'Поиск', code: 'which docker', desc: 'Показать путь к исполняемому бинарнику' },
  { id: 'l33', subCategory: 'Поиск', code: 'whereis nginx', desc: 'Найти бинарники, исходники и man-страницы программы' },

  // --- Права ---
  { id: 'l34', subCategory: 'Права', code: 'chmod +x script.sh', desc: 'Сделать shell-скрипт исполняемым' },
  { id: 'l35', subCategory: 'Права', code: 'chmod -R 755 /var/www', desc: 'Рекурсивно выставить права: rwx владельцу, rx остальным' },
  { id: 'l36', subCategory: 'Права', code: 'chmod 600 ~/.ssh/id_ed25519', desc: 'Строгие права на приватный ключ SSH' },
  { id: 'l37', subCategory: 'Права', code: 'chown -R $USER:$USER /path', desc: 'Сделать текущего пользователя и группу владельцами' },
  { id: 'l38', subCategory: 'Права', code: 'sudo adduser deploy', desc: 'Создать нового пользователя системы' },
  { id: 'l39', subCategory: 'Права', code: 'sudo usermod -aG sudo,docker deploy', desc: 'Добавить пользователя в группы sudo и docker' },
  { id: 'l40', subCategory: 'Права', code: 'groups $USER', desc: 'Список всех групп текущего пользователя' },
  { id: 'l41', subCategory: 'Права', code: 'whoami && id', desc: 'Вывести текущего пользователя, UID и GID' },
  { id: 'l42', subCategory: 'Права', code: 'sudo visudo', desc: 'Безопасное редактирование файла конфигурации sudoers' },

  // --- Процессы ---
  { id: 'l43', subCategory: 'Процессы', code: 'htop', desc: 'Интерактивный диспетчер задач' },
  { id: 'l44', subCategory: 'Процессы', code: 'ps aux | grep node', desc: 'Найти PID запущенных процессов Node.js' },
  { id: 'l45', subCategory: 'Процессы', code: 'pgrep -l nginx', desc: 'Узнать PID процессов по их имени' },
  { id: 'l46', subCategory: 'Процессы', code: 'kill -9 <PID>', desc: 'Принудительно завершить процесс сигналом SIGKILL' },
  { id: 'l47', subCategory: 'Процессы', code: 'killall -9 node', desc: 'Принудительно убить все процессы с именем node' },
  { id: 'l48', subCategory: 'Процессы', code: 'fuser -k 3000/tcp', desc: 'Найти и убить процесс, занимающий порт 3000' },
  { id: 'l49', subCategory: 'Процессы', code: 'nohup ./app > app.log 2>&1 &', desc: 'Запустить скрипт в фоне без привязки к терминалу' },
  { id: 'l50', subCategory: 'Процессы', code: 'jobs -l', desc: 'Список фоновых задач в текущей сессии' },

  // --- Диски ---
  { id: 'l51', subCategory: 'Диски', code: 'df -h', desc: 'Свободное и занятое место на смонтированных дисках' },
  { id: 'l52', subCategory: 'Диски', code: 'du -sh * | sort -h', desc: 'Размер всех папок в текущей директории с сортировкой' },
  { id: 'l53', subCategory: 'Диски', code: 'du -ahd1 . | sort -hr | head -15', desc: 'Топ 15 самых тяжелых папок и файлов' },
  { id: 'l54', subCategory: 'Диски', code: 'free -h', desc: 'Объем оперативной памяти и swap' },
  { id: 'l55', subCategory: 'Диски', code: 'lsblk -f', desc: 'Список блочных устройств, разделов и их файловых систем' },
  { id: 'l56', subCategory: 'Диски', code: 'sudo blkid', desc: 'Узнать UUID всех накопителей' },
  { id: 'l57', subCategory: 'Диски', code: 'sudo mount /dev/sdb1 /mnt/storage', desc: 'Смонтировать раздел диска' },
  { id: 'l58', subCategory: 'Диски', code: 'sudo umount /mnt/storage', desc: 'Размонтировать директорию диска' },
  { id: 'l59', subCategory: 'Диски', code: 'lscpu', desc: 'Архитектура процессора, частоты и ядра' },
  { id: 'l60', subCategory: 'Диски', code: 'lspci | grep -i vga', desc: 'Показать установленную видеокарту' },
  { id: 'l61', subCategory: 'Диски', code: 'sudo smartctl -a /dev/sda', desc: 'Диагностика SMART накопителя' },

  // --- Сеть ---
  { id: 'l62', subCategory: 'Сеть', code: 'ip a', desc: 'Показать сетевые интерфейсы и локальные IP-адреса' },
  { id: 'l63', subCategory: 'Сеть', code: 'curl -s ifconfig.me', desc: 'Узнать внешний IP-адрес' },
  { id: 'l64', subCategory: 'Сеть', code: 'sudo ss -tulpn', desc: 'Список всех слушающих портов и процессов' },
  { id: 'l65', subCategory: 'Сеть', code: 'sudo lsof -i :80', desc: 'Показать процесс на 80-м порту' },
  { id: 'l66', subCategory: 'Сеть', code: 'ping -c 4 1.1.1.1', desc: 'Проверка сетевой доступности хоста' },
  { id: 'l67', subCategory: 'Сеть', code: 'traceroute google.com', desc: 'Трассировка сетевого маршрута' },
  { id: 'l68', subCategory: 'Сеть', code: 'dig +short cheat.apttt.ru', desc: 'DNS-запрос IP-адреса домена' },
  { id: 'l69', subCategory: 'Сеть', code: 'curl -I https://cheat.apttt.ru', desc: 'Получить HTTP-заголовки сервера' },
  { id: 'l70', subCategory: 'Сеть', code: 'wget -c https://example.com/file.zip', desc: 'Скачать файл с поддержкой докачки' },
  { id: 'l71', subCategory: 'Сеть', code: 'nc -zv 192.168.3.15 8090', desc: 'Проверить открытость удаленного порта' },
  { id: 'l72', subCategory: 'Сеть', code: 'sudo ufw status verbose', desc: 'Статус и правила фаервола UFW' },
  { id: 'l73', subCategory: 'Сеть', code: 'sudo ufw allow 8090/tcp', desc: 'Открыть порт 8090 в фаерволе' },

  // --- Архивы ---
  { id: 'l74', subCategory: 'Архивы', code: 'tar -czvf archive.tar.gz /path/dir', desc: 'Создать tar.gz архив' },
  { id: 'l75', subCategory: 'Архивы', code: 'tar -xzvf archive.tar.gz -C /target/', desc: 'Распаковать tar.gz архив' },
  { id: 'l76', subCategory: 'Архивы', code: 'tar -tf archive.tar.gz', desc: 'Просмотр содержимого архива без распаковки' },
  { id: 'l77', subCategory: 'Архивы', code: 'zip -r archive.zip folder/', desc: 'Создать zip-архив' },
  { id: 'l78', subCategory: 'Архивы', code: 'unzip archive.zip -d /target/', desc: 'Распаковать zip-архив' },

  // --- SSH ---
  { id: 'l79', subCategory: 'SSH', code: 'ssh-keygen -t ed25519 -C "my-key"', desc: 'Генерация ключа Ed25519' },
  { id: 'l80', subCategory: 'SSH', code: 'ssh-copy-id -i ~/.ssh/id_ed25519.pub user@192.168.3.15', desc: 'Копирование ключа на сервер для входа без пароля' },
  { id: 'l81', subCategory: 'SSH', code: 'ssh -i ~/.ssh/id_ed25519 user@192.168.3.15', desc: 'Подключение по SSH с указанием ключа' },
  { id: 'l82', subCategory: 'SSH', code: 'scp -P 22 file.txt user@host:/var/www/', desc: 'Копирование файла по SSH' },
  { id: 'l83', subCategory: 'SSH', code: 'rsync -avzP --delete ./dist/ user@host:/var/www/html/', desc: 'Синхронизация папок по SSH с удалением лишних файлов' },

  // --- Systemd ---
  { id: 'l84', subCategory: 'Systemd', code: 'sudo systemctl status docker', desc: 'Статус службы systemd' },
  { id: 'l85', subCategory: 'Systemd', code: 'sudo systemctl restart nginx', desc: 'Перезапуск службы' },
  { id: 'l86', subCategory: 'Systemd', code: 'sudo systemctl enable --now docker', desc: 'Включить в автозагрузку и запустить службу' },
  { id: 'l87', subCategory: 'Systemd', code: 'sudo systemctl disable nginx', desc: 'Отключить автозапуск службы' },
  { id: 'l88', subCategory: 'Systemd', code: 'sudo systemctl daemon-reload', desc: 'Перечитать конфигурацию юнитов systemd' },
  { id: 'l89', subCategory: 'Systemd', code: 'journalctl -u docker -f -n 100', desc: 'Просмотр системного лога службы в реальном времени' },
  { id: 'l90', subCategory: 'Systemd', code: 'sudo journalctl --vacuum-time=7d', desc: 'Очистка системных логов старше 7 дней' },

  // --- Пакеты ---
  { id: 'l91', subCategory: 'Пакеты', code: 'sudo apt update && sudo apt upgrade -y', desc: 'Обновление пакетов в Debian / Ubuntu' },
  { id: 'l92', subCategory: 'Пакеты', code: 'sudo apt install -y curl git', desc: 'Установка пакетов' },
  { id: 'l93', subCategory: 'Пакеты', code: 'sudo apt autoremove --purge', desc: 'Удаление неиспользуемых пакетов и ядер' },
  { id: 'l94', subCategory: 'Пакеты', code: 'sudo pacman -Syu', desc: 'Полное обновление системы в Arch / EndeavourOS' },
  { id: 'l95', subCategory: 'Пакеты', code: 'sudo pacman -S --needed pkg_name', desc: 'Установка пакета в Arch' },
  { id: 'l96', subCategory: 'Пакеты', code: 'sudo pacman -Rns pkg_name', desc: 'Удаление пакета с его зависимостями в Arch' },

  // --- Bash-трюки ---
  { id: 'l97', subCategory: 'Bash-трюки', code: 'crontab -e', desc: 'Редактор планировщика задач cron' },
  { id: 'l98', subCategory: 'Bash-трюки', code: 'echo "0 3 * * * /backup.sh" | crontab -', desc: 'Добавить задачу в cron на 3:00 ночи' },
  { id: 'l99', subCategory: 'Bash-трюки', code: 'sudo !!', desc: 'Выполнить предыдущую команду с правами sudo' },
  { id: 'l100', subCategory: 'Bash-трюки', code: 'history | grep "docker run"', desc: 'Поиск по истории введенных команд' },
  { id: 'l101', subCategory: 'Bash-трюки', code: 'alias ll="ls -la --color=auto"', desc: 'Создать псевдоним команды' },
  { id: 'l102', subCategory: 'Bash-трюки', code: 'export PATH=$PATH:/custom/bin', desc: 'Добавить директорию в переменную PATH' },
  { id: 'l103', subCategory: 'Bash-трюки', code: 'source ~/.bashrc', desc: 'Применить изменения файла конфигурации shell' },
  { id: 'l104', subCategory: 'Bash-трюки', code: 'watch -n 1 "cat /proc/loadavg"', desc: 'Выполнять команду каждую секунду' },
  { id: 'l105', subCategory: 'Bash-трюки', code: 'uptime -p', desc: 'Время непрерывной работы системы' }
];