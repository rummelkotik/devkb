import React, { useState, useMemo, useRef, useEffect } from 'react';
import { CATEGORIES } from './data/snippets';
import type { SnippetItem } from './data/types';
import { 
  Search, 
  Copy, 
  Check, 
  Terminal, 
  Box, 
  GitBranch, 
  Layout, 
  Code2, 
  FileCode, 
  Cpu, 
  Database,
  Sparkles,
  Command,
  Menu,
  X
} from 'lucide-react';

const ICON_MAP: Record<string, React.ReactNode> = {
  Terminal: <Terminal size={16} className="text-emerald-400" />,
  Container: <Box size={16} className="text-sky-400" />,
  GitBranch: <GitBranch size={16} className="text-amber-400" />,
  Layout: <Layout size={16} className="text-pink-400" />,
  Code2: <Code2 size={16} className="text-yellow-400" />,
  FileCode: <FileCode size={16} className="text-blue-400" />,
  Atom: <Cpu size={16} className="text-cyan-400" />,
  Database: <Database size={16} className="text-indigo-400" />,
};

interface DisplayItem extends SnippetItem {
  categoryTitle?: string;
  categoryIcon?: string;
}

export default function App() {
  const [selectedCatId, setSelectedCatId] = useState<string>(CATEGORIES[0]?.id || 'linux');
  const [activeSubCat, setActiveSubCat] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const totalSnippets = useMemo(() => {
    return CATEGORIES.reduce((acc, cat) => acc + cat.items.length, 0);
  }, []);

  // Хоткей: нажатие '/' фокусирует поиск, Esc сбрасывает
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && document.activeElement !== searchInputRef.current) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
      if (e.key === 'Escape' && document.activeElement === searchInputRef.current) {
        setSearchQuery('');
        searchInputRef.current?.blur();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1400);
  };

  const activeCategory = CATEGORIES.find(c => c.id === selectedCatId);

  const subCategories = useMemo(() => {
    if (!activeCategory) return [];
    const list = Array.from(new Set(activeCategory.items.map(i => i.subCategory).filter(Boolean)));
    return ['all', ...list];
  }, [activeCategory]);

  const filteredItems = useMemo<DisplayItem[]>(() => {
    const q = searchQuery.toLowerCase().trim();

    if (!q) {
      const items = activeCategory?.items || [];
      const scoped = activeSubCat === 'all' 
        ? items 
        : items.filter(i => i.subCategory === activeSubCat);
      return scoped.map(item => ({ 
        ...item, 
        categoryTitle: activeCategory?.title,
        categoryIcon: activeCategory?.icon 
      }));
    }

    const matches: DisplayItem[] = [];
    CATEGORIES.forEach(cat => {
      cat.items.forEach(item => {
        if (
          item.code.toLowerCase().includes(q) || 
          item.desc.toLowerCase().includes(q) ||
          (item.subCategory && item.subCategory.toLowerCase().includes(q))
        ) {
          matches.push({ 
            ...item, 
            categoryTitle: cat.title,
            categoryIcon: cat.icon
          });
        }
      });
    });
    return matches;
  }, [searchQuery, activeSubCat, activeCategory]);

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#07090e] text-[#e6edf3] font-sans selection:bg-sky-500/25 selection:text-sky-200">
      
      {/* Затемнение фона при открытом сайдбаре на мобилках */}
      {isSidebarOpen && (
        <div 
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 md:hidden transition-opacity duration-200"
        />
      )}

      {/* Сайдбар: скрыт за экраном на мобилке (-translate-x-full), статичен на десктопе */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-72 bg-[#0d1117] border-r border-[#1e242e] flex flex-col flex-shrink-0
        transition-transform duration-300 ease-in-out md:static md:w-64 md:translate-x-0
        ${isSidebarOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'}
      `}>
        {/* Логотип + кнопка закрытия */}
        <div className="h-14 px-4 border-b border-[#1e242e] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="relative flex items-center justify-center w-7 h-7 rounded-lg bg-gradient-to-br from-emerald-400 to-sky-500 text-black shadow-[0_0_12px_rgba(52,211,153,0.35)]">
              <Command size={15} className="text-gray-950 stroke-[2.5]" />
            </div>
            <div>
              <h1 className="font-mono font-bold text-xs tracking-wider text-white uppercase">DevKB</h1>
              <span className="text-[10px] text-zinc-500 font-mono tracking-tight block -mt-0.5">Knowledge Base</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              PRO
            </span>
            <button 
              type="button"
              onClick={() => setIsSidebarOpen(false)}
              className="p-1 text-zinc-400 hover:text-white rounded-md md:hidden"
              aria-label="Закрыть меню"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Навигация */}
        <nav className="flex-1 overflow-y-auto px-2.5 py-3 space-y-1 custom-scrollbar">
          <div className="px-2 pb-1.5 text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-semibold">
            Категории
          </div>
          {CATEGORIES.map(cat => {
            const isActive = cat.id === selectedCatId && !searchQuery;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setSelectedCatId(cat.id);
                  setActiveSubCat('all');
                  setSearchQuery('');
                  setIsSidebarOpen(false);
                }}
                className={`w-full group flex items-center justify-between px-3 py-2.5 md:py-2 rounded-lg text-xs font-medium transition-all duration-150 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-sky-500/15 to-transparent text-white border-l-2 border-sky-400 shadow-[inset_0_0_12px_rgba(56,139,253,0.06)]'
                    : 'text-zinc-400 hover:bg-[#161c24] hover:text-zinc-200'
                }`}
              >
                <div className="flex items-center gap-2.5 truncate">
                  <span className={`transition-transform duration-150 ${isActive ? 'scale-110' : 'group-hover:scale-105'}`}>
                    {ICON_MAP[cat.icon] || <Terminal size={16} />}
                  </span>
                  <span className="truncate">{cat.title}</span>
                </div>
                <span className={`text-[11px] font-mono px-1.5 py-0.5 rounded-md transition-colors ${
                  isActive 
                    ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30' 
                    : 'bg-[#12161f] text-zinc-500 border border-[#21262d] group-hover:text-zinc-300'
                }`}>
                  {cat.items.length}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Нижний статус */}
        <div className="p-3 border-t border-[#1e242e] bg-[#090c10] text-[11px] text-zinc-500 font-mono flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-zinc-400">cheat.apttt.ru</span>
          </div>
          <span className="text-zinc-400 font-medium">{totalSnippets} items</span>
        </div>
      </aside>

      {/* Основной контент */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden bg-[#07090e]">
        {/* Хедер с поиском и кнопкой бургера */}
        <header className="h-14 px-3 sm:px-6 bg-[#0d1117]/80 border-b border-[#1e242e] flex items-center justify-between gap-2.5 backdrop-blur-md z-10 flex-shrink-0">
          
          {/* Кнопка бургера для мобильных устройств */}
          <button
            type="button"
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 -ml-1 text-zinc-400 hover:text-white rounded-lg hover:bg-[#161c24] md:hidden flex-shrink-0"
            aria-label="Открыть меню"
          >
            <Menu size={20} />
          </button>

          <div className="relative flex items-center w-full max-w-2xl">
            <Search size={15} className="absolute left-3 text-zinc-500 pointer-events-none" />
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Поиск по 830+ командам и флагам..."
              className="w-full bg-[#07090e] border border-[#212733] hover:border-zinc-700 focus:border-sky-500 rounded-lg pl-9 pr-8 sm:pr-12 py-2 text-xs font-mono text-white placeholder-zinc-500 outline-none transition-all shadow-inner"
            />
            {/* Кнопка сброса поиска или хоткей */}
            {searchQuery ? (
              <button 
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 text-zinc-500 hover:text-zinc-300 p-0.5"
              >
                <X size={14} />
              </button>
            ) : (
              <div className="absolute right-3 hidden sm:flex items-center gap-1 pointer-events-none">
                <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-[#161c24] text-zinc-400 rounded border border-[#262c36]">
                  /
                </kbd>
              </div>
            )}
          </div>

          <div className="hidden lg:flex items-center gap-2 text-xs text-zinc-500 font-mono flex-shrink-0">
            <Sparkles size={14} className="text-amber-400/80" />
            <span>Click card to copy</span>
          </div>
        </header>

        {/* Теги-подкатегории со свайпом */}
        {!searchQuery && subCategories.length > 1 && (
          <div className="px-3 sm:px-6 py-2 bg-[#0a0d14] border-b border-[#1b202a] flex items-center gap-1.5 overflow-x-auto no-scrollbar flex-shrink-0">
            {subCategories.map(sub => {
              const isAll = sub === 'all';
              const isSelected = activeSubCat === sub;
              const count = isAll 
                ? activeCategory?.items.length 
                : activeCategory?.items.filter(i => i.subCategory === sub).length;

              return (
                <button
                  key={sub}
                  type="button"
                  onClick={() => setActiveSubCat(sub)}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-all duration-150 whitespace-nowrap flex items-center gap-1.5 cursor-pointer flex-shrink-0 ${
                    isSelected
                      ? 'bg-sky-500/20 text-sky-200 border border-sky-500/50 shadow-sm'
                      : 'bg-[#111620] text-zinc-400 hover:bg-[#181f2c] hover:text-zinc-200 border border-[#21262d]'
                  }`}
                >
                  <span>{isAll ? 'Все' : sub}</span>
                  <span className={`text-[10px] px-1 rounded ${isSelected ? 'bg-sky-400/20 text-sky-300' : 'text-zinc-500'}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {/* Сетка сниппетов */}
        <section className="flex-1 overflow-y-auto p-3.5 sm:p-6 space-y-4 custom-scrollbar">
          {/* Заголовок текущего раздела */}
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between border-b border-[#1e242e] pb-3 gap-1">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  {searchQuery ? `Результаты поиска` : activeCategory?.title}
                </h2>
                {!searchQuery && (
                  <span className="text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">
                    {filteredItems.length}
                  </span>
                )}
              </div>
              <p className="text-xs text-zinc-400 mt-0.5 sm:mt-1">
                {searchQuery 
                  ? `По запросу "${searchQuery}" найдено: ${filteredItems.length}` 
                  : activeCategory?.desc}
              </p>
            </div>
          </div>

          {/* Карточки */}
          {filteredItems.length === 0 ? (
            <div className="py-20 text-center">
              <div className="w-12 h-12 rounded-xl bg-[#12161f] border border-[#21262d] flex items-center justify-center mx-auto mb-3 text-zinc-500">
                <Search size={20} />
              </div>
              <p className="text-xs font-mono text-zinc-400">Ничего не найдено по данному запросу</p>
              <button 
                type="button"
                onClick={() => { setSearchQuery(''); setActiveSubCat('all'); }}
                className="mt-3 text-xs text-sky-400 hover:underline font-mono cursor-pointer"
              >
                Сбросить фильтры
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-3">
              {filteredItems.map(item => {
                const isCopied = copiedId === item.id;
                const isMultiLine = item.code.includes('\n');
                const firstLine = item.code.split('\n')[0];

                return (
                  <div
                    key={item.id}
                    onClick={() => handleCopy(item.id, item.code)}
                    className="group relative p-3 sm:p-3.5 rounded-xl bg-[#0e121a] hover:bg-[#121722] border border-[#1b222d] hover:border-sky-500/40 transition-all duration-150 flex flex-col justify-between gap-2.5 cursor-pointer shadow-sm"
                  >
                    {/* Верхняя строка: тег + кнопка копирования */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5 overflow-hidden">
                        <span className="text-[10px] font-mono uppercase tracking-wider bg-[#161c26] text-zinc-400 group-hover:text-sky-300 group-hover:border-sky-500/30 px-2 py-0.5 rounded border border-[#242b38] transition-colors truncate">
                          {searchQuery ? `${item.categoryTitle} • ${item.subCategory}` : item.subCategory}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCopy(item.id, item.code);
                        }}
                        className={`flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-mono border transition-all duration-150 flex-shrink-0 ${
                          isCopied
                            ? 'bg-emerald-950/80 border-emerald-500/80 text-emerald-300'
                            : 'bg-[#151a24] border-[#252c3a] text-zinc-400 group-hover:text-white group-hover:border-zinc-500'
                        }`}
                      >
                        {isCopied ? <Check size={12} /> : <Copy size={12} />}
                        <span>{isCopied ? 'Copied' : 'Copy'}</span>
                      </button>
                    </div>

                    {/* Поле с кодом */}
                    <div className="relative min-w-0">
                      <code className="block text-xs font-mono text-sky-300 bg-[#06080d] p-2.5 rounded-lg border border-[#1a202c] overflow-x-auto whitespace-pre leading-relaxed group-hover:border-[#273244] transition-colors selection:bg-sky-500/30">
                        {isMultiLine ? item.code : firstLine}
                      </code>
                    </div>

                    {/* Описание */}
                    <p className="text-[12px] text-zinc-400 leading-snug line-clamp-2">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}