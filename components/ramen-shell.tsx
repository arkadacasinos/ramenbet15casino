export function RamenHeader() {
  return (
    <header className="r15-site-header">
      <a className="r15-skip" href="#main">Перейти к содержимому</a>
      <nav className="r15-header-inner r15-wrap" aria-label="Основная навигация">
        <a href="#" className="r15-brand" aria-label="Ramenbet — на главную"><img src="/icon.png" width="42" height="42" alt="" /><span>Ramen<span>bet</span><small>НЕЗАВИСИМЫЙ ОБЗОР</small></span></a>
        <nav className="r15-header-links" aria-label="Быстрые ссылки"><a href="#guide">О бренде</a><a href="#official">Сайт</a><a href="#mirrors">Зеркала</a><a href="#casino">Правила игры</a></nav>
        <a className="r15-header-action" href="#guide">Читать гид <span aria-hidden="true">→</span></a>
      </nav>
    </header>
  )
}

export function RamenFooter() {
  return (
    <footer className="r15-footer">
      <section className="r15-wrap r15-footer-inner" aria-label="Навигация по ключевым фразам">
        <header className="r15-footer-top"><a className="r15-footer-brand" href="#">Ramen<span>bet</span></a><p>Независимый материал. Не официальный сайт оператора.</p><a href="#main">Наверх ↑</a></header>
        <nav className="r15-tags" aria-label="Поиск по темам сайта">
          <a href="#brand">#Ramenbet</a><a href="#brand">#Раменбет</a><a href="#mirrors">#Ramenbet_зеркало</a><a href="#names">#Рамен_бет</a><a href="#names">#Ramen_bet</a><a href="#mirrors">#Раменбет_зеркало</a><a href="#official">#Ramenbet_официальный_сайт</a><a href="#official">#Раменбет_официальный_сайт</a><a href="#mirrors">#Раменбет_рабочее_зеркало</a><a href="#casino">#Ramenbet_казино</a><a href="#casino">#Раменбет_казино</a>
        </nav>
        <p className="r15-footer-bottom">© 2026 Ramenbet Guide · Для совершеннолетних. Соблюдайте законодательство своей страны.</p>
      </section>
    </footer>
  )
}
