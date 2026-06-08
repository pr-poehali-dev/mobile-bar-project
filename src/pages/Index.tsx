import { useState } from "react";
import Icon from "@/components/ui/icon";

const IMG_COCKTAILS = "https://cdn.poehali.dev/projects/1420fe20-2064-4ead-973c-5f6fcc82f161/files/35e5b5c2-cd17-440c-920d-b3fd1f29b801.jpg";
const IMG_FOOD = "https://cdn.poehali.dev/projects/1420fe20-2064-4ead-973c-5f6fcc82f161/files/b59924b4-6a28-4960-b099-da73cfc36873.jpg";
const IMG_EVENT = "https://cdn.poehali.dev/projects/1420fe20-2064-4ead-973c-5f6fcc82f161/files/91db2659-efac-4620-93ea-980d5e0c398b.jpg";

const NAV_LINKS = [
  { href: "#about", label: "О нас" },
  { href: "#menu", label: "Меню" },
  { href: "#events", label: "События" },
  { href: "#gallery", label: "Галерея" },
  { href: "#contacts", label: "Контакты" },
];

const MENU_ITEMS = [
  { category: "Авторские коктейли", emoji: "🍹", items: [
    { name: "Тёмный рыцарь", desc: "Ром, кофейный ликёр, апельсин, дым", price: "550 ₽" },
    { name: "Золотой час", desc: "Виски, мёд, лимон, имбирь, тимьян", price: "490 ₽" },
    { name: "Неоновый закат", desc: "Джин, грейпфрут, розмарин, тоник", price: "470 ₽" },
    { name: "Пряный манго", desc: "Текила, манго, чили, лайм, соль", price: "510 ₽" },
  ]},
  { category: "Безалкогольные", emoji: "🥤", items: [
    { name: "Мятный лайм", desc: "Мята, лайм, огурец, газировка", price: "320 ₽" },
    { name: "Розовый дракон", desc: "Питайя, кокос, маракуйя, лёд", price: "350 ₽" },
    { name: "Облако ванили", desc: "Ванильный сироп, молоко, корица", price: "290 ₽" },
  ]},
  { category: "Закуски", emoji: "🥘", items: [
    { name: "Брускетты ассорти", desc: "5 видов: томаты, авокадо, лосось", price: "590 ₽" },
    { name: "Сырная тарелка", desc: "Выбор сыров, джем, орехи, крекеры", price: "790 ₽" },
    { name: "Мини-бургеры", desc: "Говядина или куриная котлета, 4 шт", price: "650 ₽" },
  ]},
];

const EVENTS = [
  { date: "15 ИЮНЯ", title: "Вечеринка на крыше", location: "Москва, Лофт Grebner", desc: "Открытая терраса, живая музыка, авторские коктейли от шеф-бармена. Закат над городом.", tag: "Скоро" },
  { date: "22 ИЮНЯ", title: "Свадьба Ани и Кирилла", location: "Подмосковье, Усадьба", desc: "Приватное мероприятие. Полный выездной бар-сервис на 120 гостей.", tag: "Приватное" },
  { date: "29 ИЮНЯ", title: "Корпоратив TechFest", location: "Москва, Erarta", desc: "Нетворкинг и коктейли для IT-компании. Тематические напитки по меню клиента.", tag: "Корпоратив" },
  { date: "6 ИЮЛЯ", title: "Открытие галереи", location: "Москва, Трёхгорная", desc: "Культурное событие с арт-коктейлями. Каждый напиток вдохновлён экспозицией.", tag: "Арт" },
];

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(0);

  return (
    <div className="min-h-screen bg-[#0F0B08] text-white font-body">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0F0B08]/80 border-b border-[#2A2018]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="font-display text-2xl font-bold tracking-widest neon-text">
            БАР<span className="text-white">ВЭ</span>ГОН
          </a>
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-display text-sm tracking-widest uppercase text-white/60 hover:text-[#FF6B1A] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#contacts"
            className="hidden md:block btn-neon px-6 py-2 rounded-sm text-sm"
          >
            Заказать бар
          </a>
          <button
            className="md:hidden text-white/70 hover:text-[#FF6B1A] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#1A1410] border-t border-[#2A2018] px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-display text-sm tracking-widest uppercase text-white/60 hover:text-[#FF6B1A] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a href="#contacts" className="btn-neon px-6 py-2 rounded-sm text-sm text-center mt-2">
              Заказать бар
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img src={IMG_EVENT} alt="Hero" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F0B08]/60 via-[#0F0B08]/40 to-[#0F0B08]" />
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(255,107,26,0.08) 0%, transparent 60%), radial-gradient(circle at 70% 30%, rgba(255,215,0,0.05) 0%, transparent 50%)',
          }} />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="tag-badge mb-6 animate-fade-in-up">Мобильный бар №1 в Москве</div>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6 animate-fade-in-up delay-100">
            <span className="block text-white leading-none">МЫ</span>
            <span className="block neon-text leading-none">ПРИВЕЗЁМ</span>
            <span className="block text-white leading-none">БАР К ВАМ</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up delay-200">
            Выездной бар-сервис для свадеб, корпоративов и частных вечеринок.
            Авторские коктейли, профессиональные барристеры, незабываемая атмосфера.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
            <a href="#contacts" className="btn-neon px-10 py-4 rounded-sm text-base">
              Рассчитать стоимость
            </a>
            <a href="#menu" className="btn-outline-neon px-10 py-4 rounded-sm text-base">
              Смотреть меню
            </a>
          </div>
        </div>

        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 animate-float">
          <a href="#about" className="text-white/30 hover:text-[#FF6B1A] transition-colors">
            <Icon name="ChevronDown" size={32} />
          </a>
        </div>

        <div className="absolute bottom-0 left-0 right-0 border-t border-[#2A2018] bg-[#0F0B08]/80 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-3 divide-x divide-[#2A2018]">
            {[
              { num: "300+", label: "Мероприятий" },
              { num: "15 000+", label: "Довольных гостей" },
              { num: "5 лет", label: "На рынке" },
            ].map((stat) => (
              <div key={stat.label} className="text-center px-4">
                <div className="font-display text-2xl md:text-3xl font-bold neon-text">{stat.num}</div>
                <div className="text-xs md:text-sm text-white/40 uppercase tracking-wider font-display mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6 grid-noise">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="tag-badge mb-4">О нас</div>
              <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 leading-tight">
                БОЛЬШЕ, ЧЕМ<br />
                <span className="neon-text">ПРОСТО БАР</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-6">
                БАРВЭГОН — это команда профессиональных барменов с опытом работы в лучших ресторанах Москвы.
                Мы создаём уникальные вкусовые впечатления прямо на вашем мероприятии.
              </p>
              <p className="text-white/60 leading-relaxed mb-10">
                Наш мобильный бар — это не просто точка налива. Это полноценное барное шоу:
                фламбирование, молекулярные коктейли, smoke-эффекты и персональный подход к каждому событию.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "Truck", text: "Приедем в любую точку МО" },
                  { icon: "Clock", text: "Работаем круглосуточно" },
                  { icon: "Award", text: "Лицензированный алкоголь" },
                  { icon: "Users", text: "До 500 гостей" },
                ].map((feat) => (
                  <div key={feat.text} className="flex items-center gap-3 text-white/70">
                    <div className="w-8 h-8 rounded-sm bg-[#FF6B1A]/10 border border-[#FF6B1A]/30 flex items-center justify-center flex-shrink-0">
                      <Icon name={feat.icon as Parameters<typeof Icon>[0]["name"]} size={16} className="text-[#FF6B1A]" />
                    </div>
                    <span className="text-sm">{feat.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-lg overflow-hidden" style={{ aspectRatio: "4/5" }}>
                <img src={IMG_COCKTAILS} alt="Cocktails" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0B08]/60 to-transparent rounded-lg" />
              </div>
              <div className="absolute -bottom-6 -left-6 card-dark rounded-lg p-5 border border-[#2A2018]">
                <div className="font-display text-4xl font-bold neon-text">★ 4.9</div>
                <div className="text-white/50 text-sm mt-1">средний рейтинг</div>
              </div>
              <div className="absolute -top-6 -right-6 bg-[#FF6B1A] rounded-lg p-4 animate-glow-pulse">
                <div className="font-display text-3xl font-bold text-[#0F0B08]">50+</div>
                <div className="text-[#0F0B08]/70 text-xs font-semibold">видов коктейлей</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* MENU */}
      <section id="menu" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="tag-badge mb-4">Меню</div>
            <h2 className="font-display text-5xl md:text-6xl font-bold">
              НАШИ <span className="neon-text">НАПИТКИ</span>
            </h2>
          </div>

          <div className="flex gap-2 justify-center mb-12 flex-wrap">
            {MENU_ITEMS.map((cat, i) => (
              <button
                key={cat.category}
                onClick={() => setActiveMenu(i)}
                className={`font-display text-sm tracking-widest uppercase px-6 py-3 rounded-sm border transition-all duration-300 ${
                  activeMenu === i
                    ? "bg-[#FF6B1A] text-[#0F0B08] border-[#FF6B1A] font-bold"
                    : "bg-transparent text-white/50 border-[#2A2018] hover:border-[#FF6B1A]/50 hover:text-white/80"
                }`}
              >
                {cat.emoji} {cat.category}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {MENU_ITEMS[activeMenu].items.map((item) => (
              <div key={item.name} className="card-dark rounded-lg p-6 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl font-semibold text-white mb-1 tracking-wide">{item.name}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                </div>
                <div className="font-display text-xl font-bold text-[#FF6B1A] whitespace-nowrap">{item.price}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-white/40 text-sm mb-4">Меню составляется индивидуально под ваш формат мероприятия</p>
            <a href="#contacts" className="btn-outline-neon px-8 py-3 rounded-sm text-sm inline-block">
              Запросить полное меню
            </a>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* EVENTS */}
      <section id="events" className="py-24 px-6 grid-noise">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="tag-badge mb-4">События</div>
            <h2 className="font-display text-5xl md:text-6xl font-bold">
              БЛИЖАЙШИЕ <span className="neon-text">СОБЫТИЯ</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {EVENTS.map((event) => (
              <div key={event.title} className="card-dark rounded-lg overflow-hidden group cursor-pointer">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="font-display text-3xl font-bold text-[#FF6B1A] tracking-widest">{event.date}</div>
                    <span className="tag-badge text-xs">{event.tag}</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white mb-2 tracking-wide group-hover:text-[#FF6B1A] transition-colors">
                    {event.title}
                  </h3>
                  <div className="flex items-center gap-2 text-white/40 text-sm mb-3">
                    <Icon name="MapPin" size={14} className="text-[#FF6B1A]" />
                    <span>{event.location}</span>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed">{event.desc}</p>
                </div>
                <div className="h-1 bg-gradient-to-r from-[#FF6B1A] to-[#FFD700] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* GALLERY */}
      <section id="gallery" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="tag-badge mb-4">Галерея</div>
            <h2 className="font-display text-5xl md:text-6xl font-bold">
              АТМОСФЕРА <span className="neon-text">БАРВЭГОНА</span>
            </h2>
          </div>

          <div className="grid grid-cols-3 grid-rows-3 gap-3" style={{ height: 600 }}>
            <div className="col-span-2 row-span-2 relative overflow-hidden rounded-lg group">
              <img src={IMG_COCKTAILS} alt="Коктейли" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0B08]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 font-display text-lg font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Авторские коктейли
              </div>
            </div>
            <div className="col-span-1 row-span-1 relative overflow-hidden rounded-lg group">
              <img src={IMG_FOOD} alt="Еда" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0B08]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 left-3 font-display text-sm font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Закуски
              </div>
            </div>
            <div className="col-span-1 row-span-2 relative overflow-hidden rounded-lg group">
              <img src={IMG_EVENT} alt="Событие" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0B08]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 left-3 font-display text-sm font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Атмосфера
              </div>
            </div>
            <div className="col-span-1 row-span-1 relative overflow-hidden rounded-lg group">
              <img src={IMG_COCKTAILS} alt="Бар" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-[#FF6B1A]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="col-span-1 row-span-1 relative overflow-hidden rounded-lg group">
              <img src={IMG_FOOD} alt="Catering" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-[#FF6B1A]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* CTA STRIP */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B1A]/10 via-[#FFD700]/5 to-[#FF6B1A]/10" />
        <div className="absolute inset-0 border-y border-[#FF6B1A]/20" />
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            ГОТОВЫ СОЗДАТЬ<br />
            <span className="neon-yellow-text">НЕЗАБЫВАЕМОЕ СОБЫТИЕ?</span>
          </h2>
          <p className="text-white/50 text-lg mb-10">Свяжитесь с нами — рассчитаем стоимость за 30 минут</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+79991234567" className="btn-neon px-10 py-4 rounded-sm text-base inline-flex items-center justify-center gap-3">
              <Icon name="Phone" size={18} />
              +7 (999) 123-45-67
            </a>
            <a href="https://wa.me/79991234567" className="btn-outline-neon px-10 py-4 rounded-sm text-base inline-flex items-center justify-center gap-3">
              <Icon name="MessageCircle" size={18} />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 px-6 grid-noise">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="tag-badge mb-4">Контакты</div>
            <h2 className="font-display text-5xl md:text-6xl font-bold">
              СВЯЖИТЕСЬ <span className="neon-text">С НАМИ</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              {[
                { icon: "Phone", label: "Телефон", value: "+7 (999) 123-45-67", sub: "Пн-Вс, 09:00–22:00" },
                { icon: "Mail", label: "Email", value: "hello@barvegon.ru", sub: "Ответим в течение часа" },
                { icon: "MapPin", label: "Зона работы", value: "Москва и Подмосковье", sub: "Выезжаем в регионы по договорённости" },
                { icon: "Instagram", label: "Instagram", value: "@barvegon", sub: "Фото и отзывы" },
              ].map((contact) => (
                <div key={contact.label} className="card-dark rounded-lg p-5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-sm bg-[#FF6B1A]/10 border border-[#FF6B1A]/30 flex items-center justify-center flex-shrink-0">
                    <Icon name={contact.icon as Parameters<typeof Icon>[0]["name"]} size={22} className="text-[#FF6B1A]" />
                  </div>
                  <div>
                    <div className="text-white/40 text-xs uppercase tracking-widest font-display">{contact.label}</div>
                    <div className="text-white font-semibold text-lg">{contact.value}</div>
                    <div className="text-white/40 text-xs">{contact.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="card-dark rounded-lg p-8">
              <h3 className="font-display text-2xl font-bold text-white mb-6 tracking-wide">ОСТАВЬТЕ ЗАЯВКУ</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-white/40 text-xs uppercase tracking-widest font-display mb-2">Ваше имя</label>
                  <input
                    type="text"
                    placeholder="Александр"
                    className="w-full bg-[#0F0B08] border border-[#2A2018] rounded-sm px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#FF6B1A] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-white/40 text-xs uppercase tracking-widest font-display mb-2">Телефон</label>
                  <input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    className="w-full bg-[#0F0B08] border border-[#2A2018] rounded-sm px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#FF6B1A] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-white/40 text-xs uppercase tracking-widest font-display mb-2">Тип мероприятия</label>
                  <select className="w-full bg-[#0F0B08] border border-[#2A2018] rounded-sm px-4 py-3 text-white/60 focus:outline-none focus:border-[#FF6B1A] transition-colors">
                    <option value="">Выберите формат</option>
                    <option value="wedding">Свадьба</option>
                    <option value="corporate">Корпоратив</option>
                    <option value="birthday">День рождения</option>
                    <option value="private">Частная вечеринка</option>
                    <option value="other">Другое</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white/40 text-xs uppercase tracking-widest font-display mb-2">Дата и количество гостей</label>
                  <input
                    type="text"
                    placeholder="15 июля, 80 человек"
                    className="w-full bg-[#0F0B08] border border-[#2A2018] rounded-sm px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#FF6B1A] transition-colors"
                  />
                </div>
                <button className="btn-neon w-full py-4 rounded-sm text-base mt-2">
                  Рассчитать стоимость
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#2A2018] py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display text-xl font-bold tracking-widest neon-text">
            БАР<span className="text-white">ВЭ</span>ГОН
          </div>
          <div className="text-white/30 text-sm text-center">
            © 2024 БАРВЭГОН — Мобильный бар. Все права защищены.
          </div>
          <div className="flex gap-6 flex-wrap justify-center">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="text-white/30 hover:text-[#FF6B1A] text-xs transition-colors font-display tracking-wider uppercase">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}