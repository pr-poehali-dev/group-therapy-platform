import Icon from "@/components/ui/icon";
import { FadeUp, FAQItem, ReviewSlider } from "@/components/shared/FadeUp";
import { DIRECTIONS, BENEFITS, FAQS, PHOTOS } from "@/components/shared/data";

type DirectionsProps = {
  onDirectionClick: (title: string) => void;
};

export function AccentDividerSection() {
  return (
    <section className="py-16">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <FadeUp>
          <p
            className="font-display text-3xl lg:text-4xl font-light leading-snug"
            style={{ color: "var(--text-main)" }}
          >
            Выберите направление —<br />
            <em className="not-italic" style={{ color: "var(--olive)" }}>мы подберём подходящую группу</em>
          </p>
        </FadeUp>
      </div>
    </section>
  );
}

export function DirectionsSection({ onDirectionClick }: DirectionsProps) {
  return (
    <section id="directions" className="py-28" style={{ backgroundColor: "var(--beige)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <FadeUp>
          <div className="text-center mb-20">
            <div className="section-tag mb-4">направления групп</div>
            <h2 className="font-display text-4xl lg:text-5xl font-light" style={{ color: "var(--text-main)" }}>
              Найдите своё
            </h2>
          </div>
        </FadeUp>
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {DIRECTIONS.map((dir, i) => (
            <FadeUp key={i} delay={i * 80}>
              <div
                className="card-warm p-8 cursor-pointer transition-transform duration-200 hover:scale-[1.02]"
                onClick={() => onDirectionClick(dir.title)}
              >
                <div className="text-4xl mb-6">{dir.emoji}</div>
                <h3 className="font-display text-2xl font-light mb-3" style={{ color: "var(--text-main)" }}>
                  {dir.title}
                </h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {dir.desc}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BenefitsSection() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <FadeUp>
              <div className="section-tag mb-4">почему выбирают нас</div>
            </FadeUp>
            <FadeUp delay={100}>
              <h2
                className="font-display text-4xl lg:text-5xl font-light mb-12"
                style={{ color: "var(--text-main)" }}
              >
                Всё, что нужно<br />
                <em className="not-italic" style={{ color: "var(--olive)" }}>для безопасной работы</em>
              </h2>
            </FadeUp>
            <div className="space-y-5">
              {BENEFITS.map((b, i) => (
                <FadeUp key={i} delay={i * 70}>
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "var(--beige)" }}
                    >
                      <span style={{ color: "var(--olive)" }}>
                        <Icon name={b.icon} size={18} />
                      </span>
                    </div>
                    <div>
                      <div className="font-body font-medium text-sm mb-0.5" style={{ color: "var(--text-main)" }}>
                        {b.title}
                      </div>
                      <div className="font-body text-sm" style={{ color: "var(--text-muted)" }}>{b.text}</div>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>

          <FadeUp delay={200}>
            <div className="space-y-4">
              <div className="rounded-3xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <img src={PHOTOS.online} alt="Онлайн встреча группы" className="w-full h-full object-cover" />
              </div>
            </div>
          </FadeUp>
        </div>
        <FadeUp delay={300}>
          <div className="text-center mt-12">
            <button
              className="btn-primary"
              onClick={() => document.getElementById("form")?.scrollIntoView({ behavior: "smooth" })}
            >
              Начать терапию
              <Icon name="ArrowRight" size={16} />
            </button>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-20" style={{ backgroundColor: "var(--beige)" }}>
      <div className="max-w-2xl mx-auto px-6">
        <FadeUp>
          <div className="text-center mb-10">
            <div className="section-tag mb-4">отзывы</div>
            <h2 className="font-display text-4xl lg:text-5xl font-light mb-6" style={{ color: "var(--text-main)" }}>
              Те, кто уже попробовал
            </h2>
            <div className="inline-flex flex-col items-center gap-2">
              <div className="flex items-baseline gap-3">
                <span className="font-display text-6xl font-light" style={{ color: "var(--olive)" }}>4.9</span>
                <div className="flex flex-col items-start">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <span key={s} className="text-amber-400 text-xl">★</span>
                    ))}
                  </div>
                  <span className="font-body text-sm" style={{ color: "var(--text-muted)" }}>средняя оценка клиентов</span>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
        <FadeUp delay={100}>
          <ReviewSlider />
        </FadeUp>
      </div>
    </section>
  );
}

export function PricingSection() {
  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <FadeUp>
          <div className="section-tag mb-4">стоимость</div>
          <h2 className="font-display lg:text-5xl font-light mb-6 text-3xl" style={{ color: "var(--text-main)" }}>Скидка 20% при покупке от 8 сессий.</h2>
          <div className="font-display text-6xl font-light mb-2" style={{ color: "var(--olive)" }}>1 500 ₽ — за онлайн встречу</div>
          <div className="mb-4" />
          <div className="font-display text-6xl font-light mb-2" style={{ color: "var(--olive)" }}>2 000 ₽ — за офлайн встречу</div>
          <p className="font-body text-base mb-2" style={{ color: "var(--text-muted)" }}></p>
          <p className="font-body text-sm mb-10 max-w-xl mx-auto" style={{ color: "var(--text-muted)" }}></p>
          <a href="#form" className="btn-primary text-base px-8 py-4">
            Узнать подходящий формат
            <Icon name="ArrowRight" size={16} />
          </a>
        </FadeUp>
      </div>
    </section>
  );
}

export function FAQSection() {
  return (
    <section id="faq" className="py-20" style={{ backgroundColor: "var(--beige)" }}>
      <div className="max-w-3xl mx-auto px-6">
        <FadeUp>
          <div className="text-center mb-14">
            <div className="section-tag mb-4">вопросы и ответы</div>
            <h2 className="font-display text-4xl lg:text-5xl font-light" style={{ color: "var(--text-main)" }}>
              Частые вопросы
            </h2>
          </div>
        </FadeUp>
        <FadeUp delay={100}>
          <div className="rounded-3xl p-8" style={{ backgroundColor: "var(--cream)" }}>
            {FAQS.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

export function FinalCTASection() {
  return (
    <section className="py-24 overflow-hidden relative" style={{ backgroundColor: "var(--olive)" }}>
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, white 0%, transparent 50%), radial-gradient(circle at 80% 50%, #C8C0DC 0%, transparent 50%)",
        }}
      />
      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <FadeUp>
          <h2
            className="font-display text-5xl lg:text-6xl font-light mb-6 leading-tight"
            style={{ color: "var(--cream)" }}
          >
            Готовы сделать первый шаг?
          </h2>
          <p className="font-body text-lg mb-10" style={{ color: "rgba(250,247,242,0.8)" }}>
            Оставьте заявку — мы свяжемся и подберём группу под ваш запрос
          </p>
          <a
            href="#form"
            className="inline-flex items-center gap-2 font-body font-medium px-8 py-4 rounded-full transition-all hover:opacity-90"
            style={{ backgroundColor: "var(--cream)", color: "var(--olive)" }}
          >
            Подобрать группу
            <Icon name="ArrowRight" size={16} />
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
