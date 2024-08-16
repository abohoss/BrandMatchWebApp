import Autoplay from "embla-carousel-autoplay"
import useEmblaCarousel from "embla-carousel-react"
import "../styles/testimonials.css"

const Testimonials = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide" key={1}>
            <div className="embla_slide_content">
              <blockquote cite="">
                <p>
                  BrandMatch took the stress out of building my personal brand.
                  Their team handled everything, allowing me to focus on my
                  career transition.
                </p>
              </blockquote>
              <p>—Alex R.</p>
            </div>
          </div>

          <div className="embla__slide" key={2}>
            <div className="embla_slide_content">
              <blockquote cite="">
                <p>
                  The partnership and funding support were game-changers.
                  BrandMatch helped me turn my burnout into a successful
                  personal brand.
                </p>
              </blockquote>
              <p>—Jamie K.</p>
            </div>
          </div>

          <div className="embla__slide" key={3}>
            <div className="embla_slide_content">
              <blockquote cite="">
                <p>
                  Words can be like X-rays, if you use them properly—they’ll go
                  through anything. You read and you’re pierced.
                </p>
              </blockquote>
              <p>
                —Aldous Huxley, <cite>Brave New World</cite>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
