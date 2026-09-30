import { RamenGuide } from '@/components/ramen-guide'
import { RamenHeader, RamenFooter } from '@/components/ramen-shell'

export const dynamic = 'force-static'

export default function Page() {
  return (
    <>
      <RamenHeader />
      <main id="main" className="r15-main">
        <section className="r15-hero r15-wrap" aria-labelledby="hero-title">
          <header className="r15-hero-copy">
            <p className="r15-eyebrow"><span className="r15-status" /> НЕЗАВИСИМЫЙ ГИД ДЛЯ ИГРОКОВ</p>
            <h1 id="hero-title">Ramenbet.<br />Всё по делу.<br /><span>Без лишнего.</span></h1>
            <p className="r15-lead">Сайт, зеркала и правила игры — понятным языком. Разберитесь в деталях до первой ставки, а не после.</p>
            <nav className="r15-hero-actions" aria-label="Начать знакомство">
              <a className="r15-action" href="#official">Как проверить сайт <span aria-hidden="true">→</span></a>
              <a className="r15-text-link" href="#guide">Читать гид <span aria-hidden="true">↓</span></a>
            </nav>
            <p className="r15-hero-note">18+ · Только информация, не предложение игры</p>
          </header>
          <figure className="r15-hero-art">
            <img src="/images/ramen-lounge.webp" alt="Красная чаша рамена, игровые фишки и кости в японском стиле" width="900" height="600" fetchPriority="high" decoding="async" />
            <figcaption><span>ЯПОНСКИЙ ХАРАКТЕР</span><span>Осознанный подход.</span></figcaption>
          </figure>
        </section>
        <nav className="r15-topics r15-wrap" aria-label="Разделы гида">
          <a href="#official"><span className="r15-topic-symbol" aria-hidden="true">→</span><span><strong>Официальный сайт</strong><small>Как отличить настоящий адрес</small></span><span aria-hidden="true">→</span></a>
          <a href="#mirrors"><span className="r15-topic-symbol" aria-hidden="true">⇄</span><span><strong>Зеркала и доступ</strong><small>Что проверить перед входом</small></span><span aria-hidden="true">→</span></a>
          <a href="#casino"><span className="r15-topic-symbol" aria-hidden="true">◎</span><span><strong>Игра под контролем</strong><small>Условия, лимиты и безопасность</small></span><span aria-hidden="true">→</span></a>
        </nav>
        <RamenGuide />
        <aside className="r15-responsible r15-wrap" aria-labelledby="responsible-title">
          <span className="r15-age">18+</span>
          <header><h2 id="responsible-title">Игра — развлечение, не способ заработка</h2><p>Не пытайтесь отыграть потери. Если остановиться трудно, сделайте паузу и обратитесь за помощью.</p></header>
          <a href="https://www.gamblingtherapy.org/ru/" target="_blank" rel="noopener noreferrer">Получить поддержку <span aria-hidden="true">→</span></a>
        </aside>
      </main>
      <RamenFooter />
    </>
  )
}
