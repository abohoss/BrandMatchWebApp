import Service from "./Service";
import Market from "../assets/images/Services/supermarket.jpg";
import Report from "../assets/images/Services/report.jpg";
import Export from "../assets/images/Services/export.jpg";
import Warehouse from "../assets/images/Services/warehouse.jpg";
import { useEffect } from "react";

const Services = ({ leftValues, setLeftValues }) => {
  const categroies = ["Sales", "Marketing", "Business Growth", "Logistics"];
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
      name: "Product Availability",
      description:
        "Ensure your products are widely available at competitive prices across all hypermarkets.",
      category: 2,
    },
    {
      name: "Market Surveys and Reports",
      description:
        "Conduct initial market surveys and provide weekly reports comparing your products with competitors.",
      category: 2,
    },
    {
      name: "SWOT Analysis",
      description:
        "Identify strengths, weaknesses, opportunities, and threats with our detailed analysis.",
      category: 2,
    },
    {
      name: "Marketing Activities",
      description:
        "Conduct offline and online marketing activities, including shows, exhibitions, and events.",
      category: 2,
    },
    {
      name: "Export Opportunities",
      description: "Expand your market reach with our export services.",
      category: 2,
    },
    {
      name: "Co-Promotion",
      description:
        "Partner with complementary products to enhance your market presence.",
      category: 2,
    },
    {
      name: "Warehousing",
      description: "Provide warehousing per pallet to meet your storage needs.",
      category: 3,
    },
    {
      name: "Product Delivery",
      description: "Deliver your products to the desired location efficiently.",
      category: 3,
    },
    {
      name: "Order Processing",
      description:
        "Handle labeling and invoicing to streamline your order process.",
      category: 3,
    },
  ];

  const images = [
    {
      src: Report,
      top: "0rem",
      left: "1vw",
    },
    {
      src: Market,
      top: "55rem",
      left: "73vw",
    },
    {
      src: Export,
      top: "105rem",
      left: "8vw",
    },
    {
      src: Warehouse,
      top: "125rem",
      left: "25vw",
    },
  ];

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
        setLeftValues(["0", "25", "33.3", "50"]);
      } else {
        setLeftValues(["0", "25", "33.3", "50", "66.6", "75"]);
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
      className="relative px-1 md:px-4"
      data-scroll-section
    >
      {images.map((image, index) => (
        <img
          src={image.src}
          alt="supermarket"
          className="absolute w-1/4 max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-lg"
          style={{ top: image.top, left: image.left }}
          key={index}
          data-scroll
          data-scroll-speed="2"
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
            className="h-40 w-full"
            data-scroll
            data-scroll-speed="3"
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
    </section>
  );
};

export default Services;
