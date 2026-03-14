import Seo from '../components/Seo';

const termsPoints = [
  'Бронирование автомобиля через сайт MeridianVL является предварительной заявкой и подтверждается менеджером после связи с клиентом.',
  'Стоимость аренды, депозит, время подачи и возврата автомобиля уточняются индивидуально в зависимости от выбранной модели и условий поездки.',
  'Для получения автомобиля клиенту потребуется комплект документов, который уточняется при подтверждении бронирования.',
  'Подача автомобиля по Владивостоку и в аэропорт Владивостока согласовывается заранее.',
];

export default function TermsPage() {
  return (
    <>
      <Seo
        title="Условия аренды — MeridianVL"
        description="Краткие условия аренды автомобиля в MeridianVL: подтверждение бронирования, стоимость, документы и выдача авто."
        path="/terms"
      />
      <main className="legal-page">
        <div className="page-hero page-hero--sm">
          <div className="container">
            <div className="page-hero__eyebrow">Документы сайта</div>
            <h1 className="page-hero__title">Условия аренды</h1>
            <p className="page-hero__desc">
              Основные принципы подтверждения брони и выдачи автомобиля в MeridianVL.
            </p>
          </div>
        </div>

        <div className="container">
          <section className="legal-card">
            <h2 className="legal-card__title">Что важно перед бронированием</h2>
            <div className="legal-list">
              {termsPoints.map((point) => (
                <p key={point} className="legal-list__item">{point}</p>
              ))}
            </div>
            <p className="legal-card__note">
              Если вам нужна консультация по маршруту, классу автомобиля или подаче в аэропорт,
              свяжитесь с менеджером через страницу контактов.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
