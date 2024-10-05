import Service from "./Service";
import Market from "../assets/images/Services/supermarket.jpg";
import Report from "../assets/images/Services/report.jpg";
// import Export from "../assets/images/Services/export.jpg";
import Warehouse from "../assets/images/Services/warehouse.jpg";
import Delivery from "../assets/images/Services/delivery.jpeg";
import Crush from "../assets/images/Services/crush.jpg";
import Agdadna from "../assets/images/Services/agdadna.jpeg";
import CrushStores from "../assets/images/Services/crush-stores.jpeg";
import { useEffect, useState } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";

const Services = ({ leftValues, setLeftValues }) => {
  const categroies = ["Sales", "Marketing", "Logistics"];
  const services = [
    {
      name: "Sales Channels",
      description:
        "We offer access to over 2,000 sales channels to maximize your product reach.",
      category: 0,
    },
    {
      name: "Broad Store Access",
      description:
        "Access to all hyper markets, large grocery stores, retail markets, small groceries and different channels in Egypt",
      category: 0,
    },
    {
      name: "Monthly Sales Reports",
      description:
        "Stay informed with detailed sales reports and market overviews.",
      category: 0,
    },
    {
      name: "Product Availability",
      description:
        "Ensure your products are widely available at competitive prices across all hypermarkets.",
      category: 0,
    },
    {
      name: "Online and Offline Marketing Activities",
      description:
        "We handle all aspects of marketing, both digital and traditional, to boost your brand’s visibility.",
      category: 1,
    },
    {
      name: "Market Research",
      description:
        "We conduct thorough research on competitors, prices, channels, and more to inform your strategy.",
      category: 1,
    },
    {
      name: "Shelf Organization",
      description:
        "Ensure your products have the best shelf view in hypermarkets.",
      category: 1,
    },
    {
      name: "Co-Promotion",
      description:
        "Partner with complementary products to enhance your market presence.",
      category: 1,
    },
    {
      name: "Warehousing",
      description: "Provide warehousing per pallet to meet your storage needs.",
      category: 2,
    },
    {
      name: "Product Delivery",
      description: "Deliver your products to the desired location efficiently.",
      category: 2,
    },
    {
      name: "Order Processing",
      description:
        "Handle labeling and invoicing to streamline your order process.",
      category: 2,
    },
  ];

  const images = [
    {
      src: CrushStores,
      top: "10rem",
      left: "5vw",
    },
    {
      src: Market,
      top: "25rem",
      left: "50vw",
    },
    {
      src: Report,
      top: "40rem",
      left: "1vw",
    },
    {
      src: Agdadna,
      top: "65rem",
      left: "48vw",
    },
    {
      src: Crush,
      top: "90rem",
      left: "20vw",
    },
    // {
    //   src: Export,
    //   top: "110rem",
    //   left: "5vw",
    // },
    {
      src: Warehouse,
      top: "125rem",
      left: "48vw",
    },
    {
      src: Delivery,
      top: "140rem",
      left: "1vw",
    },
  ];

  const { scroll } = useLocomotiveScroll();
  const [scrollPercentage, setScrollPercentage] = useState(0);
  useEffect(() => {
    if (scroll) {
      scroll.on("scroll", (args) => {
        const servicesBoundaries = document
          .querySelector("#services")
          .getBoundingClientRect();
        // const topOffset = servicesBoundaries.top + args.scroll.y;
        const bottomOffset = servicesBoundaries.bottom + args.scroll.y;

        if (args.scroll.y <= bottomOffset) {
          // const servicesHeight = bottomOffset - topOffset;
          const servicesHeight = bottomOffset;
          // const scrollDelta = args.scroll.y - topOffset;
          const scrollDelta = args.scroll.y;
          setScrollPercentage((scrollDelta / servicesHeight) * 100);
        }
      });
    }
  }, [scroll]);

  const randomSeed = (seed) => {
    let value = seed;
    return function () {
      value = (value * 16807) % 2147483647;
      return value;
    };
  };

  useEffect(() => {
    const updateLeftValues = () => {
      if (window.innerWidth < 768) {
        setLeftValues(["0", "10", "20", "30", "40", "50"]);
      } else {
        setLeftValues(["0", "12", "24", "36", "48", "60"]);
      }
    };

    // Initial check
    updateLeftValues();

    // Add event listener
    window.addEventListener("resize", updateLeftValues);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", updateLeftValues);
  }, []);

  const generator = randomSeed(5);
  let lastPositionIdx = 0;

  return (
    <section
      id="services"
      className="text-white"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, white 1%, #231f20 10%, #231f20 50%, #231f20 90%, white 99%)",
      }}
      data-scroll-section
    >
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        {images.map((image, index) => (
          <img
            src={image.src}
            alt="supermarket"
            className="absolute max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-lg object-cover"
            style={{
              width: "50vmin",
              height: "25vmin",
              top: image.top,
              left: image.left,
              objectPosition: `${scrollPercentage}% ${scrollPercentage}%`,
            }}
            key={index}
            data-scroll
            data-scroll-speed="1"
          />
        ))}
        {services.map((service, index) => {
          const leftValuesCopy = [...leftValues];
          const noOfItemsToRemove =
            lastPositionIdx == 0 || lastPositionIdx == leftValues.length - 1
              ? 2
              : 3;
          lastPositionIdx = lastPositionIdx == 0 ? 1 : lastPositionIdx;
          leftValuesCopy.splice(lastPositionIdx - 1, noOfItemsToRemove);
          const generatedLeftValue =
            leftValuesCopy[generator() % leftValuesCopy.length];
          lastPositionIdx = leftValues.indexOf(generatedLeftValue);
          return (
            <div
              key={index}
              className="h-60 w-full"
              data-scroll
              data-scroll-speed="1.5"
            >
              <Service
                no={service.category + 1}
                name={service.name}
                description={service.description}
                category={categroies[service.category]}
                leftValue={generatedLeftValue}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
