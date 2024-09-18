import ImageMarquee from "./ImageMarquee";
// Import Success Partners images
import Spinneys from "../../assets/images/Success Partners/spinneys.png";
import Seoudi from "../../assets/images/Success Partners/seoudi.png";
import Carrefour from "../../assets/images/Success Partners/carrefour.png";
import Mahmoud from "../../assets/images/Success Partners/mahmoud.jpg";
import Flamingo from "../../assets/images/Success Partners/flamingo.jpg";
import Alrayah from "../../assets/images/Success Partners/alrayah.png";
import Oscar from "../../assets/images/Success Partners/oscar.png";
import Bestway from "../../assets/images/Success Partners/bestway.jpg";
import Abdullah from "../../assets/images/Success Partners/abdullah.png";
// Import Suppliers images
import Valle from "../../assets/images/Suppliers/valle.jpg";
import Orouba from "../../assets/images/Suppliers/orouba.jpg";
import Exclusive from "../../assets/images/Suppliers/exclusive.jpg";
import Esc from "../../assets/images/Suppliers/esc.jpg";
import Dolce from "../../assets/images/Suppliers/dolce.jpg";
import Bloom from "../../assets/images/Suppliers/bloom.jpg";
import Altona from "../../assets/images/Suppliers/altona.jpg";
import Agdadna from "../../assets/images/Suppliers/agdadna.jpg";

const SuppliersPartnersMarquee = () => {
  const successPartnersImages = [
    Spinneys,
    Seoudi,
    Carrefour,
    Mahmoud,
    Flamingo,
    Alrayah,
    Oscar,
    Bestway,
    Abdullah,
  ];
  const suppliersImages = [
    Valle,
    Orouba,
    Exclusive,
    Esc,
    Dolce,
    Bloom,
    Altona,
    Agdadna,
  ];

  return (
    <section className="py-10 sm:py-16 lg:py-24" data-scroll-section>
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
          Our Success Partners & Suppliers
        </h2>
      </div>
      <div className="mt-8 sm:mt-12 lg:mt-20">
        <ImageMarquee images={successPartnersImages} direction={"left"} />
        <ImageMarquee images={suppliersImages} direction={"right"} />
      </div>
    </section>
  );
};

export default SuppliersPartnersMarquee;
