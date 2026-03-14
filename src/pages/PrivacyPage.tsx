import Seo from '../components/Seo';

const privacyPoints = [
  'MeridianVL принимает персональные данные только для обработки заявок на аренду автомобиля и обратной связи.',
  'В форме бронирования и обратной связи используются имя, телефон, email и детали аренды, которые вы указываете добровольно.',
  'Данные используются для подтверждения заявки, согласования выдачи автомобиля, консультаций по аренде и улучшения качества сервиса.',
  'Если вам нужно уточнить порядок обработки данных, свяжитесь с менеджером по телефону или email, указанным на странице контактов.',
];

export default function PrivacyPage() {
  return (
    <>
      <Seo
        title="Политика конфиденциальности — MeridianVL"
        description="Информация о том, как MeridianVL обрабатывает данные из заявок на аренду автомобиля и обратную связь."
        path="/privacy"
      />
      <main className="legal-page">
        <div className="page-hero page-hero--sm">
          <div className="container">
            <div className="page-hero__eyebrow">Документы сайта</div>
            <h1 className="page-hero__title">Политика конфиденциальности</h1>
            <p className="page-hero__desc">
              Краткая информация об обработке данных, которые клиент оставляет при заявке на аренду авто.
            </p>
          </div>
        </div>

        <div className="container">
          <section className="legal-card">
            <h2 className="legal-card__title">Как используются данные</h2>
            <div className="legal-list">
              {privacyPoints.map((point) => (
                <p key={point} className="legal-list__item">{point}</p>
              ))}
            </div>
            <p className="legal-card__note">
              Отправляя заявку на сайте, вы подтверждаете, что предоставляете данные для связи по аренде автомобиля.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
