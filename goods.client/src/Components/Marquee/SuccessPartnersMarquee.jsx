import ImageMarquee from "./ImageMarquee"
import Spinneys from "../../assets/images/Success Partners/spinneys.png"
import Seoudi from "../../assets/images/Success Partners/seoudi.png"
import Carrefour from "../../assets/images/Success Partners/Carrefour.png"
import Mahmoud from "../../assets/images/Success Partners/mahmoud.jpg"
import Flamingo from "../../assets/images/Success Partners/flamingo.jpg"
import Alrayah from "../../assets/images/Success Partners/alrayah.png"
import Oscar from "../../assets/images/Success Partners/oscar.png"
import Bestway from "../../assets/images/Success Partners/bestway.jpg"
import Abdullah from "../../assets/images/Success Partners/abdullah.png"

const SuccessPartnersMarquee = () => {
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
  ]

  return (
    <section>
      <h2>Our Success Partners</h2>
      <ImageMarquee images={successPartnersImages} />
    </section>
  )
}

export default SuccessPartnersMarquee
