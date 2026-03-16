import Seo from '../components/Seo';
import Concierge from '../components/sections/Concierge';

export default function ConciergePage() {
  return (
    <>
      <Seo
        title="Консьерж-сервис — Meridian VL Владивосток"
        description="Премиальный консьерж-сервис аренды авто во Владивостоке: личный водитель, подача к трапу, анонимность."
        path="/concierge"
      />
      <div className="pt-24">
        <Concierge />
      </div>
    </>
  );
}
