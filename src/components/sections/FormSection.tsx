import Icon from "@/components/ui/icon";
import { FadeUp } from "@/components/shared/FadeUp";
import { DIRECTIONS } from "@/components/shared/data";
import type { FormData } from "@/components/shared/data";

type FormSectionProps = {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  submitted: boolean;
  handleSubmit: (e: React.FormEvent) => void;
  privacyOpen: boolean;
  setPrivacyOpen: (open: boolean) => void;
};

export function FormSection({ formData, setFormData, submitted, handleSubmit, privacyOpen, setPrivacyOpen }: FormSectionProps) {
  const phoneDigits = formData.contact.replace(/\D/g, "");
  const phoneValid = phoneDigits.length >= 10;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneValid) return;
    handleSubmit(e);
  };

  return (
    <>
      {/* FORM */}
      <section id="form" className="py-20">
        <div className="max-w-2xl mx-auto px-6">
          <FadeUp>
            <div className="text-center mb-12">
              <div className="section-tag mb-4">заявка</div>
              <h2 className="font-display text-4xl lg:text-5xl font-light mb-4" style={{ color: "var(--text-main)" }}>
                Оставьте заявку
              </h2>
              <p className="font-body text-base" style={{ color: "var(--text-muted)" }}>
                Никаких обязательств — просто расскажите о себе, и мы подберём варианты
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={100}>
            {submitted ? (
              <div
                className="text-center py-16 rounded-3xl"
                style={{ backgroundColor: "var(--beige)" }}
              >
                <div className="text-5xl mb-4">🌿</div>
                <h3 className="font-display text-3xl font-medium mb-3" style={{ color: "var(--text-main)" }}>
                  Заявка принята!
                </h3>
                <p className="font-body" style={{ color: "var(--text-muted)" }}>
                  Мы свяжемся с вами в течение суток
                </p>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                className="space-y-5 rounded-3xl p-8"
                style={{ backgroundColor: "var(--beige)" }}
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      className="block font-body text-sm font-medium mb-2"
                      style={{ color: "var(--text-main)" }}
                    >
                      Ваше имя
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Как вас зовут?"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl px-4 py-3 font-body text-sm outline-none focus:ring-2 transition-all"
                      style={{
                        backgroundColor: "var(--cream)",
                        border: "1px solid var(--beige-dark)",
                        color: "var(--text-main)",
                      }}
                    />
                  </div>
                  <div>
                    <label
                      className="block font-body text-sm font-medium mb-2"
                      style={{ color: "var(--text-main)" }}
                    >
                      Номер телефона
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+7 999 000 00 00"
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value.replace(/[^\d+\s\-()]/g, "") })}
                      className="w-full rounded-xl px-4 py-3 font-body text-sm outline-none transition-all"
                      style={{
                        backgroundColor: "var(--cream)",
                        border: `1px solid ${formData.contact && !phoneValid ? "var(--olive)" : "var(--beige-dark)"}`,
                        color: "var(--text-main)",
                      }}
                    />
                    {formData.contact && !phoneValid && (
                      <p className="font-body text-xs mt-1" style={{ color: "var(--olive)" }}>
                        Введите не менее 10 цифр
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block font-body text-sm font-medium mb-2" style={{ color: "var(--text-main)" }}>
                    Интересующая группа
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {DIRECTIONS.map((dir) => (
                      <button
                        key={dir.title}
                        type="button"
                        onClick={() => setFormData(f => ({ ...f, direction: f.direction === dir.title ? "" : dir.title }))}
                        className="py-2.5 px-3 rounded-xl font-body text-sm text-left transition-all"
                        style={{
                          backgroundColor: formData.direction === dir.title ? "var(--olive)" : "var(--cream)",
                          color: formData.direction === dir.title ? "var(--cream)" : "var(--text-muted)",
                          border: "1px solid var(--beige-dark)",
                        }}
                      >
                        {dir.emoji} {dir.title}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label
                    className="block font-body text-sm font-medium mb-2"
                    style={{ color: "var(--text-main)" }}
                  >
                    Удобный способ связи
                  </label>
                  <div className="flex gap-3">
                    {["telegram", "max", "phone"].map((method) => (
                      <button
                        key={method}
                        type="button"
                        onClick={() => setFormData({ ...formData, contactMethod: method })}
                        className="flex-1 py-2.5 rounded-xl font-body text-sm font-medium transition-all"
                        style={{
                          backgroundColor:
                            formData.contactMethod === method ? "var(--olive)" : "var(--cream)",
                          color:
                            formData.contactMethod === method ? "var(--cream)" : "var(--text-muted)",
                          border: "1px solid var(--beige-dark)",
                        }}
                      >
                        {method === "telegram" ? "Telegram" : method === "max" ? "MAX" : "Звонок"}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label
                    className="block font-body text-sm font-medium mb-2"
                    style={{ color: "var(--text-main)" }}
                  >
                    Комментарий (необязательно)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Расскажите подробнее, если хотите..."
                    value={formData.comment}
                    onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                    className="w-full rounded-xl px-4 py-3 font-body text-sm outline-none resize-none"
                    style={{
                      backgroundColor: "var(--cream)",
                      border: "1px solid var(--beige-dark)",
                      color: "var(--text-main)",
                    }}
                  />
                </div>

                <button type="submit" className="btn-primary w-full justify-center text-base py-4">
                  Отправить заявку
                  <Icon name="ArrowRight" size={16} />
                </button>
                <p className="font-body text-xs text-center" style={{ color: "var(--text-muted)" }}>
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </form>
            )}
          </FadeUp>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t" style={{ borderColor: "var(--beige-dark)" }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-display text-lg font-semibold" style={{ color: "var(--olive)" }}>
              Вместе
            </span>
            <span className="font-body text-sm" style={{ color: "var(--text-muted)" }}>
              — групповая терапия онлайн
            </span>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <button
              onClick={() => setPrivacyOpen(true)}
              className="font-body text-xs underline underline-offset-2 hover:opacity-70 transition-opacity"
              style={{ color: "var(--text-muted)" }}
            >
              Политика обработки персональных данных
            </button>
            <p className="font-body text-xs" style={{ color: "var(--text-muted)" }}>
              © 2024 · Все права защищены
            </p>
          </div>
        </div>
      </footer>

      {/* PRIVACY MODAL */}
      {privacyOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          onClick={() => setPrivacyOpen(false)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[85vh] rounded-3xl overflow-hidden flex flex-col"
            style={{ backgroundColor: "var(--cream)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-8 py-5 border-b" style={{ borderColor: "var(--beige-dark)" }}>
              <h2 className="font-display text-xl font-semibold" style={{ color: "var(--text-main)" }}>
                Политика обработки персональных данных
              </h2>
              <button
                onClick={() => setPrivacyOpen(false)}
                className="flex items-center justify-center w-9 h-9 rounded-full hover:opacity-70 transition-opacity"
                style={{ backgroundColor: "var(--beige)" }}
              >
                <Icon name="X" size={18} />
              </button>
            </div>
            <div className="overflow-y-auto px-8 py-6 font-body text-sm leading-relaxed space-y-4" style={{ color: "var(--text-muted)" }}>
              <section>
                <h3 className="font-semibold mb-2" style={{ color: "var(--text-main)" }}>1. Общие положения</h3>
                <p>Настоящая политика обработки персональных данных составлена в соответствии с требованиями Федерального закона от 27.07.2006. № 152-ФЗ «О персональных данных» и определяет порядок обработки персональных данных и меры по обеспечению безопасности персональных данных, предпринимаемые Кеслев Антон Дмитриевич (далее — Оператор).</p>
                <p className="mt-2">1.1. Оператор ставит своей важнейшей целью и условием осуществления своей деятельности соблюдение прав и свобод человека и гражданина при обработке его персональных данных, в том числе защиты прав на неприкосновенность частной жизни, личную и семейную тайну.</p>
                <p className="mt-2">1.2. Настоящая Политика применяется ко всей информации, которую Оператор может получить о посетителях веб-сайта.</p>
              </section>
              <section>
                <h3 className="font-semibold mb-2" style={{ color: "var(--text-main)" }}>2. Основные понятия</h3>
                <p>2.1. Автоматизированная обработка персональных данных — обработка персональных данных с помощью средств вычислительной техники.</p>
                <p className="mt-2">2.2. Блокирование персональных данных — временное прекращение обработки персональных данных (за исключением случаев, если обработка необходима для уточнения персональных данных).</p>
                <p className="mt-2">2.3. Веб-сайт — совокупность графических и информационных материалов, а также программ для ЭВМ и баз данных, обеспечивающих их доступность в сети интернет.</p>
                <p className="mt-2">2.6. Обработка персональных данных — любое действие (операция) или совокупность действий, совершаемых с использованием средств автоматизации или без использования таких средств с персональными данными, включая сбор, запись, систематизацию, накопление, хранение, уточнение, извлечение, использование, передачу, обезличивание, блокирование, удаление, уничтожение персональных данных.</p>
                <p className="mt-2">2.8. Персональные данные — любая информация, относящаяся прямо или косвенно к определенному или определяемому Пользователю веб-сайта.</p>
                <p className="mt-2">2.10. Пользователь — любой посетитель веб-сайта.</p>
              </section>
              <section>
                <h3 className="font-semibold mb-2" style={{ color: "var(--text-main)" }}>3. Основные права и обязанности Оператора</h3>
                <p>3.1. Оператор имеет право получать от субъекта персональных данных достоверные информацию и/или документы, содержащие персональные данные; самостоятельно определять состав и перечень мер, необходимых и достаточных для обеспечения выполнения обязанностей, предусмотренных Законом о персональных данных.</p>
                <p className="mt-2">3.2. Оператор обязан: предоставлять субъекту персональных данных по его просьбе информацию, касающуюся обработки его персональных данных; организовывать обработку персональных данных в порядке, установленном действующим законодательством РФ; принимать правовые, организационные и технические меры для защиты персональных данных.</p>
              </section>
              <section>
                <h3 className="font-semibold mb-2" style={{ color: "var(--text-main)" }}>4. Основные права и обязанности субъектов персональных данных</h3>
                <p>4.1. Субъекты персональных данных имеют право: получать информацию, касающуюся обработки его персональных данных; требовать от оператора уточнения его персональных данных, их блокирования или уничтожения в случае, если персональные данные являются неполными, устаревшими или неточными; на отзыв согласия на обработку персональных данных.</p>
                <p className="mt-2">4.2. Субъекты персональных данных обязаны: предоставлять Оператору достоверные данные о себе; сообщать Оператору об уточнении своих персональных данных.</p>
              </section>
              <section>
                <h3 className="font-semibold mb-2" style={{ color: "var(--text-main)" }}>5. Принципы обработки персональных данных</h3>
                <p>5.1. Обработка персональных данных осуществляется на законной и справедливой основе.</p>
                <p className="mt-2">5.2. Обработка персональных данных ограничивается достижением конкретных, заранее определенных и законных целей.</p>
                <p className="mt-2">5.4. Обработке подлежат только персональные данные, которые отвечают целям их обработки.</p>
                <p className="mt-2">5.7. Хранение персональных данных осуществляется не дольше, чем этого требуют цели обработки персональных данных.</p>
              </section>
              <section>
                <h3 className="font-semibold mb-2" style={{ color: "var(--text-main)" }}>6. Цели обработки персональных данных</h3>
                <p><strong>Цель обработки:</strong> информирование Пользователя посредством отправки электронных писем.</p>
                <p className="mt-2"><strong>Персональные данные:</strong> фамилия, имя, отчество; номера телефонов; запросы клиента и информацию, которую он пожелал дополнительно оставить.</p>
                <p className="mt-2"><strong>Правовые основания:</strong> обработка персональных данных осуществляется на основании согласия субъекта персональных данных: пункт 1 части 1 статьи 6 Федерального закона от 27.07.2006 №152-ФЗ «О персональных данных».</p>
                <p className="mt-2"><strong>Виды обработки:</strong> сбор, запись, систематизация, накопление, хранение, уничтожение и обезличивание персональных данных.</p>
              </section>
              <section>
                <h3 className="font-semibold mb-2" style={{ color: "var(--text-main)" }}>7. Условия обработки персональных данных</h3>
                <p>7.1. Обработка персональных данных осуществляется с согласия субъекта персональных данных на обработку его персональных данных.</p>
                <p className="mt-2">7.4. Обработка персональных данных необходима для исполнения договора, стороной которого является субъект персональных данных.</p>
                <p className="mt-2">7.5. Обработка персональных данных необходима для осуществления прав и законных интересов оператора при условии, что при этом не нарушаются права и свободы субъекта персональных данных.</p>
              </section>
              <section>
                <h3 className="font-semibold mb-2" style={{ color: "var(--text-main)" }}>8. Порядок сбора, хранения, передачи и других видов обработки персональных данных</h3>
                <p>8.1. Оператор обеспечивает сохранность персональных данных и принимает все возможные меры, исключающие доступ к персональным данным неуполномоченных лиц.</p>
                <p className="mt-2">8.2. Персональные данные Пользователя никогда не будут переданы третьим лицам, за исключением случаев, связанных с исполнением действующего законодательства.</p>
                <p className="mt-2">8.3. В случае выявления неточностей в персональных данных, Пользователь может актуализировать их, направив уведомление на электронную почту: <a href="mailto:mr.keslev@mail.ru" className="underline" style={{ color: "var(--olive)" }}>mr.keslev@mail.ru</a> с пометкой «Актуализация персональных данных».</p>
                <p className="mt-2">8.4. Срок обработки персональных данных определяется достижением целей, для которых были собраны персональные данные. Пользователь может в любой момент отозвать своё согласие, направив письмо на <a href="mailto:mr.keslev@mail.ru" className="underline" style={{ color: "var(--olive)" }}>mr.keslev@mail.ru</a> с пометкой «Отзыв согласия на обработку персональных данных».</p>
                <p className="mt-2">8.7. Оператор при обработке персональных данных обеспечивает конфиденциальность персональных данных.</p>
              </section>
              <section>
                <h3 className="font-semibold mb-2" style={{ color: "var(--text-main)" }}>9. Перечень действий с персональными данными</h3>
                <p>9.1. Оператор осуществляет сбор, запись, систематизацию, накопление, хранение, уточнение, извлечение, использование, передачу, обезличивание, блокирование, удаление и уничтожение персональных данных.</p>
                <p className="mt-2">9.2. Оператор осуществляет автоматизированную обработку персональных данных с получением и/или передачей полученной информации по информационно-телекоммуникационным сетям.</p>
              </section>
              <section>
                <h3 className="font-semibold mb-2" style={{ color: "var(--text-main)" }}>10. Трансграничная передача персональных данных</h3>
                <p>10.1. Оператор до начала осуществления деятельности по трансграничной передаче персональных данных обязан уведомить уполномоченный орган по защите прав субъектов персональных данных о своём намерении осуществлять трансграничную передачу персональных данных.</p>
              </section>
              <section>
                <h3 className="font-semibold mb-2" style={{ color: "var(--text-main)" }}>11. Конфиденциальность персональных данных</h3>
                <p>Оператор и иные лица, получившие доступ к персональным данным, обязаны не раскрывать третьим лицам и не распространять персональные данные без согласия субъекта персональных данных, если иное не предусмотрено федеральным законом.</p>
              </section>
              <section>
                <h3 className="font-semibold mb-2" style={{ color: "var(--text-main)" }}>12. Заключительные положения</h3>
                <p>12.1. Пользователь может получить любые разъяснения по вопросам обработки его персональных данных, обратившись к Оператору по электронной почте <a href="mailto:mr.keslev@mail.ru" className="underline" style={{ color: "var(--olive)" }}>mr.keslev@mail.ru</a>.</p>
                <p className="mt-2">12.2. В данном документе будут отражены любые изменения политики обработки персональных данных. Политика действует бессрочно до замены её новой версией.</p>
              </section>
            </div>
          </div>
        </div>
      )}
    </>
  );
}