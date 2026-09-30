import type { SnippetItem } from './linux';

export const GIT_SNIPPETS: SnippetItem[] = [
  // --- Настройка и конфигурация ---
  { id: 'g1', subCategory: 'Конфиг', code: 'git config --global user.name "Your Name"', desc: 'Установить глобальное имя автора коммитов' },
  { id: 'g2', subCategory: 'Конфиг', code: 'git config --global user.email "you@example.com"', desc: 'Установить глобальный email автора коммитов' },
  { id: 'g3', subCategory: 'Конфиг', code: 'git config --global init.defaultBranch main', desc: 'Задать main как имя ветки по умолчанию при git init' },
  { id: 'g4', subCategory: 'Конфиг', code: 'git config --global core.editor "code --wait"', desc: 'Использовать VS Code в качестве редактора сообщений коммитов' },
  { id: 'g5', subCategory: 'Конфиг', code: 'git config --global core.autocrlf input', desc: 'Автоматическая конвертация переносов строк LF для Linux/macOS' },
  { id: 'g6', subCategory: 'Конфиг', code: 'git config --global core.autocrlf true', desc: 'Конвертация CRLF в LF при коммите для Windows' },
  { id: 'g7', subCategory: 'Конфиг', code: 'git config --list --show-origin', desc: 'Показать список всех настроек с путями к файлам, где они заданы' },
  { id: 'g8', subCategory: 'Конфиг', code: 'git config --global alias.st status', desc: 'Создать псевдоним (алиас): git st вместо git status' },
  { id: 'g9', subCategory: 'Конфиг', code: 'git config --global alias.co checkout', desc: 'Создать короткий алиас для checkout' },
  { id: 'g10', subCategory: 'Конфиг', code: 'git config --global alias.br branch', desc: 'Создать короткий алиас для branch' },
  { id: 'g11', subCategory: 'Конфиг', code: 'git config --global pull.rebase true', desc: 'Делать rebase вместо merge по умолчанию при git pull' },

  // --- Инициализация и репозиторий ---
  { id: 'g12', subCategory: 'Базовые', code: 'git init', desc: 'Инициализировать новый пустой Git-репозиторий в текущей папке' },
  { id: 'g13', subCategory: 'Базовые', code: 'git clone <url>', desc: 'Клонировать удаленный репозиторий в локальную папку' },
  { id: 'g14', subCategory: 'Базовые', code: 'git clone --depth 1 <url>', desc: 'Неглубокое клонирование (shallow clone) только последнего коммита для ускорения' },
  { id: 'g15', subCategory: 'Базовые', code: 'git clone -b <branch> --single-branch <url>', desc: 'Склонировать историю только одной конкретной ветки' },
  { id: 'g16', subCategory: 'Базовые', code: 'git status', desc: 'Показать текущее состояние рабочей директории и индекса (staged)' },
  { id: 'g17', subCategory: 'Базовые', code: 'git status -s', desc: 'Компактный краткий вывод статуса измененных файлов' },

  // --- Индекс и Стейджинг (Staging) ---
  { id: 'g18', subCategory: 'Индекс', code: 'git add <file>', desc: 'Добавить указанный файл в область подготовки (staging area)' },
  { id: 'g19', subCategory: 'Индекс', code: 'git add .', desc: 'Добавить все измененные, новые и удаленные файлы текущей папки в индекс' },
  { id: 'g20', subCategory: 'Индекс', code: 'git add -u', desc: 'Добавить в индекс только уже отслеживаемые и удаленные файлы (без untracked)' },
  { id: 'g21', subCategory: 'Индекс', code: 'git add -p', desc: 'Интерактивное добавление фрагментов (chunks) изменений по частям' },
  { id: 'g22', subCategory: 'Индекс', code: 'git restore --staged <file>', desc: 'Убрать файл из индекса (unstage), сохранив локальные правки' },
  { id: 'g23', subCategory: 'Индекс', code: 'git rm <file>', desc: 'Удалить файл из файловой системы и сразу зафиксировать удаление в индексе' },
  { id: 'g24', subCategory: 'Индекс', code: 'git rm --cached <file>', desc: 'Убрать файл из отслеживания Git, но физически оставить его на диске' },
  { id: 'g25', subCategory: 'Индекс', code: 'git mv <old> <new>', desc: 'Переместить или переименовать файл с автоматическим добавлением в индекс' },

  // --- Коммиты (Commits) ---
  { id: 'g26', subCategory: 'Коммиты', code: 'git commit -m "feat: добавить логику авторизации"', desc: 'Создать коммит с указанием понятного сообщения' },
  { id: 'g27', subCategory: 'Коммиты', code: 'git commit -am "fix: мелкие исправления"', desc: 'Автоматически добавить все измененные отслеживаемые файлы и сделать коммит' },
  { id: 'g28', subCategory: 'Коммиты', code: 'git commit --amend -m "новое сообщение"', desc: 'Изменить сообщение последнего коммита без создания нового' },
  { id: 'g29', subCategory: 'Коммиты', code: 'git commit --amend --no-edit', desc: 'Включить забытые файлы в последний коммит без изменения его текста' },
  { id: 'g30', subCategory: 'Коммиты', code: 'git commit --allow-empty -m "chore: триггер CI"', desc: 'Создать пустой коммит (удобно для перезапуска CI/CD пайплайнов)' },

  // --- Сравнение (Diff) ---
  { id: 'g31', subCategory: 'Дифф', code: 'git diff', desc: 'Показать разницу между рабочей директорией и индексом (незакоммиченные правки)' },
  { id: 'g32', subCategory: 'Дифф', code: 'git diff --staged', desc: 'Показать изменения, добавленные в индекс (готовые к коммиту)' },
  { id: 'g33', subCategory: 'Дифф', code: 'git diff HEAD~1 HEAD', desc: 'Показать изменения, внесенные самым последним коммитом' },
  { id: 'g34', subCategory: 'Дифф', code: 'git diff branch1..branch2', desc: 'Сравнить изменения между двумя ветками' },
  { id: 'g35', subCategory: 'Дифф', code: 'git diff --stat', desc: 'Показать краткую статистику измененных строк и файлов без полного текста' },
  { id: 'g36', subCategory: 'Дифф', code: 'git diff --name-only branch1 branch2', desc: 'Вывести только список имен файлов, отличающихся между ветками' },

  // --- История и Логи (Log) ---
  { id: 'g37', subCategory: 'История', code: 'git log', desc: 'Стандартный просмотр истории коммитов' },
  { id: 'g38', subCategory: 'История', code: 'git log --oneline', desc: 'Компактная история: один коммит на одну строку' },
  { id: 'g39', subCategory: 'История', code: 'git log --graph --oneline --all --decorate', desc: 'Красивый графический вид веток и коммитов в терминале' },
  { id: 'g40', subCategory: 'История', code: 'git log -n 5', desc: 'Показать только 5 последних коммитов' },
  { id: 'g41', subCategory: 'История', code: 'git log --author="Vladislav"', desc: 'Фильтровать коммиты по автору' },
  { id: 'g42', subCategory: 'История', code: 'git log --grep="bugfix"', desc: 'Поиск коммитов по тексту в сообщении' },
  { id: 'g43', subCategory: 'История', code: 'git log -p <file>', desc: 'Показать историю изменений конкретного файла вместе с кодом (diff)' },
  { id: 'g44', subCategory: 'История', code: 'git log --follow <file>', desc: 'История файла, включая моменты, когда он был переименован' },
  { id: 'g45', subCategory: 'История', code: 'git show <commit_hash>', desc: 'Показать подробные метаданные и дифф конкретного коммита' },
  { id: 'g46', subCategory: 'История', code: 'git show <commit_hash>:<path/to/file>', desc: 'Посмотреть содержимое файла в том виде, в каком он был в данном коммите' },
  { id: 'g47', subCategory: 'История', code: 'git blame <file>', desc: 'Построчный просмотр автора и хэша коммита для каждой строки файла' },
  { id: 'g48', subCategory: 'История', code: 'git shortlog -sn', desc: 'Сводка количества коммитов по авторам с сортировкой' },

  // --- Ветвление (Branching) ---
  { id: 'g49', subCategory: 'Ветки', code: 'git branch', desc: 'Список всех локальных веток' },
  { id: 'g50', subCategory: 'Ветки', code: 'git branch -a', desc: 'Список всех веток, включая удаленные (remote)' },
  { id: 'g51', subCategory: 'Ветки', code: 'git branch -r', desc: 'Список только отслеживаемых удаленных веток' },
  { id: 'g52', subCategory: 'Ветки', code: 'git branch <branch_name>', desc: 'Создать новую ветку без переключения на неё' },
  { id: 'g53', subCategory: 'Ветки', code: 'git checkout -b <branch_name>', desc: 'Создать новую ветку и сразу переключиться на неё' },
  { id: 'g54', subCategory: 'Ветки', code: 'git switch -c <branch_name>', desc: 'Современный способ создать ветку и переключиться' },
  { id: 'g55', subCategory: 'Ветки', code: 'git checkout <branch_name>', desc: 'Переключиться на указанную ветку' },
  { id: 'g56', subCategory: 'Ветки', code: 'git switch <branch_name>', desc: 'Современная безопасная команда переключения ветки' },
  { id: 'g57', subCategory: 'Ветки', code: 'git switch -', desc: 'Быстро вернуться на предыдущую ветку' },
  { id: 'g58', subCategory: 'Ветки', code: 'git branch -m <old_name> <new_name>', desc: 'Переименовать локальную ветку' },
  { id: 'g59', subCategory: 'Ветки', code: 'git branch -m <new_name>', desc: 'Переименовать текущую активную ветку' },
  { id: 'g60', subCategory: 'Ветки', code: 'git branch -d <branch_name>', desc: 'Безопасное удаление ветки (только если она слита)' },
  { id: 'g61', subCategory: 'Ветки', code: 'git branch -D <branch_name>', desc: 'Принудительное удаление ветки со всеми неслитыми коммитами' },
  { id: 'g62', subCategory: 'Ветки', code: 'git push origin --delete <branch_name>', desc: 'Удалить ветку на удаленном сервере (GitHub/GitLab)' },
  { id: 'g63', subCategory: 'Ветки', code: 'git branch --merged', desc: 'Показать ветки, которые уже полностью влиты в текущую' },
  { id: 'g64', subCategory: 'Ветки', code: 'git branch --no-merged', desc: 'Показать ветки с коммитами, которых еще нет в текущей' },

  // --- Слияние и Rebase (Merge & Rebase) ---
  { id: 'g65', subCategory: 'Слияние', code: 'git merge <branch>', desc: 'Влить указанную ветку в текущую' },
  { id: 'g66', subCategory: 'Слияние', code: 'git merge --no-ff <branch>', desc: 'Слияние с обязательным созданием отдельного merge-коммита' },
  { id: 'g67', subCategory: 'Слияние', code: 'git merge --squash <branch>', desc: 'Объединить все коммиты ветки в один плоский коммит перед вливанием' },
  { id: 'g68', subCategory: 'Слияние', code: 'git merge --abort', desc: 'Прервать процесс слияния и откатить состояние к моменту до конфликта' },
  { id: 'g69', subCategory: 'Слияние', code: 'git rebase main', desc: 'Перебазировать текущую ветку поверх ветки main' },
  { id: 'g70', subCategory: 'Слияние', code: 'git rebase -i HEAD~3', desc: 'Интерактивный rebase последних 3 коммитов (squash, reword, drop)' },
  { id: 'g71', subCategory: 'Слияние', code: 'git rebase --continue', desc: 'Продолжить rebase после разрешения конфликтов' },
  { id: 'g72', subCategory: 'Слияние', code: 'git rebase --skip', desc: 'Пропустить конфликтный коммит в процессе rebase' },
  { id: 'g73', subCategory: 'Слияние', code: 'git rebase --abort', desc: 'Полностью отменить rebase и вернуть ветку в исходное состояние' },
  { id: 'g74', subCategory: 'Слияние', code: 'git cherry-pick <commit_hash>', desc: 'Применить выбранный коммит из другой ветки в текущую' },
  { id: 'g75', subCategory: 'Слияние', code: 'git cherry-pick --abort', desc: 'Отменить cherry-pick при возникновении конфликта' },

  // --- Карман изменений (Stash) ---
  { id: 'g76', subCategory: 'Stash', code: 'git stash', desc: 'Временно спрятать незакоммиченные изменения рабочей папки в карман' },
  { id: 'g77', subCategory: 'Stash', code: 'git stash save "WIP: верстка карточек"', desc: 'Сохранить изменения в stash с понятным комментарием' },
  { id: 'g78', subCategory: 'Stash', code: 'git stash -u', desc: 'Спрятать изменения, включая неотслеживаемые файлы (untracked)' },
  { id: 'g79', subCategory: 'Stash', code: 'git stash list', desc: 'Показать список всех сохраненных записей stash' },
  { id: 'g80', subCategory: 'Stash', code: 'git stash pop', desc: 'Применить последний stash к коду и сразу удалить его из списка' },
  { id: 'g81', subCategory: 'Stash', code: 'git stash apply', desc: 'Применить последний stash, но оставить его сохраненным в списке' },
  { id: 'g82', subCategory: 'Stash', code: 'git stash apply stash@{2}', desc: 'Применить конкретную запись stash по её индексу' },
  { id: 'g83', subCategory: 'Stash', code: 'git stash show -p', desc: 'Посмотреть дифф изменений, сохраненных в последнем stash' },
  { id: 'g84', subCategory: 'Stash', code: 'git stash drop stash@{0}', desc: 'Удалить конкретный stash из списка' },
  { id: 'g85', subCategory: 'Stash', code: 'git stash clear', desc: 'Полностью очистить все сохраненные записи stash' },
  { id: 'g86', subCategory: 'Stash', code: 'git stash branch <branch_name>', desc: 'Создать новую ветку из состояния stash и применить его' },

  // --- Отмена и сброс изменений (Reset & Revert) ---
  { id: 'g87', subCategory: 'Сброс', code: 'git restore <file>', desc: 'Сбросить незакоммиченные локальные изменения файла до состояния HEAD' },
  { id: 'g88', subCategory: 'Сброс', code: 'git restore .', desc: 'Сбросить все локальные незакоммиченные изменения в текущей папке' },
  { id: 'g89', subCategory: 'Сброс', code: 'git clean -fd', desc: 'Удалить все неотслеживаемые файлы и пустые директории' },
  { id: 'g90', subCategory: 'Сброс', code: 'git reset --soft HEAD~1', desc: 'Отменить последний коммит, оставив его файлы в staged' },
  { id: 'g91', subCategory: 'Сброс', code: 'git reset --mixed HEAD~1', desc: 'Отменить последний коммит, оставив изменения в виде незакоммиченных файлов' },
  { id: 'g92', subCategory: 'Сброс', code: 'git reset --hard HEAD~1', desc: 'Полностью и безвозвратно стереть последний коммит и все изменения' },
  { id: 'g93', subCategory: 'Сброс', code: 'git reset --hard origin/main', desc: 'Принудительно синхронизировать локальную ветку с удаленным сервером' },
  { id: 'g94', subCategory: 'Сброс', code: 'git revert <commit_hash>', desc: 'Создать новый коммит, который зеркально отменяет указанный коммит' },
  { id: 'g95', subCategory: 'Сброс', code: 'git revert -n <commit_hash>', desc: 'Отменить коммит локально без автоматического создания нового коммита' },

  // --- Удаленные репозитории (Remotes & Sync) ---
  { id: 'g96', subCategory: 'Удаленные', code: 'git remote -v', desc: 'Показать адреса удаленных репозиториев (fetch и push)' },
  { id: 'g97', subCategory: 'Удаленные', code: 'git remote add origin <url>', desc: 'Привязать удаленный репозиторий под именем origin' },
  { id: 'g98', subCategory: 'Удаленные', code: 'git remote set-url origin <new_url>', desc: 'Изменить URL удаленного репозитория' },
  { id: 'g99', subCategory: 'Удаленные', code: 'git fetch origin', desc: 'Скачать изменения с сервера без их слияния в локальные ветки' },
  { id: 'g100', subCategory: 'Удаленные', code: 'git fetch --prune', desc: 'Удалить локальные ссылки на ветки, которые уже были стерты на сервере' },
  { id: 'g101', subCategory: 'Удаленные', code: 'git pull origin main', desc: 'Скачать и слить изменения из удаленной ветки main' },
  { id: 'g102', subCategory: 'Удаленные', code: 'git push -u origin <branch>', desc: 'Отправить ветку на сервер и связать её для будущих git push' },
  { id: 'g103', subCategory: 'Удаленные', code: 'git push --force-with-lease', desc: 'Безопасный force push: упадет, если кто-то другой уже запушил свои правки' },

  // --- Восстановление и Теги (Tags & Rescue) ---
  { id: 'g104', subCategory: 'Теги', code: 'git tag -a v1.0.0 -m "Release v1.0.0"', desc: 'Создать аннотированный тег релиза' },
  { id: 'g105', subCategory: 'Теги', code: 'git push origin --tags', desc: 'Отправить все локальные теги на удаленный сервер' },
  { id: 'g106', subCategory: 'Диагностика', code: 'git reflog', desc: 'История перемещения указателя HEAD: спасает случайно удаленные коммиты' },
  { id: 'g107', subCategory: 'Диагностика', code: 'git bisect start', desc: 'Запуск бинарного поиска коммита, в котором появился баг' }
];