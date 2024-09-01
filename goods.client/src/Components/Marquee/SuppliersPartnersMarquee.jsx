import ImageMarquee from "./ImageMarquee";
// Import Success Partners images
import Spinneys from "../../assets/images/Success Partners/spinneys.png";
import Seoudi from "../../assets/images/Success Partners/seoudi.png";
import Carrefour from "../../assets/images/Success Partners/Carrefour.png";
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
    <section className="m-4">
      <h2 className="m-4">Our Success Partners & Suppliers</h2>
      <ImageMarquee images={successPartnersImages} direction={"left"} />
      <ImageMarquee images={suppliersImages} direction={"right"} />
    </section>
  );
};

export default SuppliersPartnersMarquee;
