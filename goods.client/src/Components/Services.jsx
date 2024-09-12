import Service from "./Service";
import Market from "../assets/images/Services/supermarket.jpg";
import Report from "../assets/images/Services/report.jpg";
import Export from "../assets/images/Services/export.jpg";
import Warehouse from "../assets/images/Services/warehouse.jpg";
import { useSpring, animated } from "@react-spring/web";
import { useEffect, useState } from "react";

const Services = () => {
  const categroies = [
    "Marketing",
    "Sales",
    "Growth Opportunities",
    "Logistics & Warehousing",
  ];
  const services = [
    {
      name: "Online and Offline Marketing Activities",
      description:
        "We handle all aspects of marketing, both digital and traditional, to boost your brand’s visibility.",
      category: 0,
    },
    {
      name: "Market Research",
      description:
        "We conduct thorough research on competitors, prices, channels, and more to inform your strategy.",
      category: 0,
    },
    {
      name: "Shelf Organization",
      description:
        "Ensure your products have the best shelf view in hypermarkets.",
      category: 0,
    },
    {
      name: "Sales Channels",
      description:
        "We offer access to over 2,000 sales channels to maximize your product reach.",
      category: 1,
    },
    {
      name: "Broad Store Access",
      description:
        "Access to all hyper markets, large grocery stores, retail markets, small groceries and different channels in Egypt",
      category: 1,
    },
    {
      name: "Monthly Sales Reports",
      description:
        "Stay informed with detailed sales reports and market overviews.",
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
      src: Market,
      top: "0rem",
      left: "0vw",
    },
    {
      src: Report,
      top: "50rem",
      left: "70vw",
    },
    {
      src: Export,
      top: "90rem",
      left: "8vw",
    },
    {
      src: Warehouse,
      top: "115rem",
      left: "35vw",
    },
  ];

  const randomSeed = (seed) => {
    let value = seed;
    return function () {
      value = (value * 16807) % 2147483647;
      return value;
    };
  };

  // const leftValues = ["0", "1/4", "1/3", "1/2", "2/3", "3/4"];
  const leftValues = ["0", "25", "33.3", "50", "66.6", "75"];
  const leftValGenerator = randomSeed(5);
  const speedGenerator = randomSeed(2);
  let lastPositionIdx = 0;

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallaxEffect = (offset) =>
    useSpring({
      transform: `translateY(${scrollY * offset}px)`,
    });

  return (
    <section
      id="services"
      className="relative px-4"
      style={{ height: `${10 * services.length}rem` }}
    >
      <div className="relative">
        {images.map((image, index) => (
          <animated.img
            src={image.src}
            alt="supermarket"
            className="absolute w-1/4 max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-lg"
            style={{
              top: image.top,
              left: image.left,
              ...parallaxEffect((speedGenerator() % 10) / 100),
            }}
            key={index}
          />
        ))}
      </div>

      <div className="relative">
        {services.map((service, index) => {
          const leftValuesCopy = [...leftValues];
          const noOfItemsToRemove =
            lastPositionIdx == 0 || lastPositionIdx == 5 ? 2 : 3;
          lastPositionIdx = lastPositionIdx == 0 ? 1 : lastPositionIdx;
          leftValuesCopy.splice(lastPositionIdx - 1, noOfItemsToRemove);
          const generatedLeftValue =
            leftValuesCopy[leftValGenerator() % leftValuesCopy.length];
          lastPositionIdx = leftValues.indexOf(generatedLeftValue);
          return (
            <animated.div
              key={index}
              className="h-40 w-full"
              style={parallaxEffect(0.01)}
            >
              <Service
                no={2}
                name={service.name}
                description={service.description}
                category={categroies[service.category]}
                leftValue={generatedLeftValue}
              />
            </animated.div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
