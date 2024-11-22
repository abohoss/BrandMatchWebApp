import Accordion from "react-bootstrap/Accordion";

import Channels from "../assets/icons/services/channels.svg";
import Store from "../assets/icons/services/store.svg";
import Report from "../assets/icons/services/report.svg";
import Availability from "../assets/icons/services/av.svg";
import Activities from "../assets/icons/services/marketingActivities.svg";
import Promotion from "../assets/icons/services/promotion.svg";
import Warehouse from "../assets/icons/services/warehouse.svg";
import Delivery from "../assets/icons/services/delivery.svg";

const ServiceCard = ({ bgColor, category, title, description, icon }) => (
  <div className={`w-full p-3 sm:w-1/2 md:w-1/3 lg:w-1/4`}>
    <div
      className={`h-full ${bgColor === "dark" ? "bg-secondary-dark text-white" : "bg-white text-secondary-dark"} flex flex-col justify-between rounded-xl shadow`}
    >
      <div className="flex items-center justify-between p-6">
        <div className="flex w-[50px] items-center justify-center">
          <img src={icon} />
        </div>
        <div
          className={`rounded-[32px] border px-4 py-2 ${bgColor === "dark" ? "border-white" : "border-secondary-dark"}`}
        >
          <div className="text-xs">{category}</div>
        </div>
      </div>
      <div className="flex flex-grow flex-col justify-center p-6">
        <h3 className="mb-2 text-xl font-semibold leading-relaxed sm:text-2xl">
          {title}
        </h3>
        <p
          className={`text-sm leading-tight ${bgColor === "dark" ? "text-white" : "text-secondary-dark"}`}
        >
          {description}
        </p>
      </div>
    </div>
  </div>
);

const ServiceCardMobile = ({ bgColor, title, description, icon }) => (
  <div className={`w-full p-3 sm:w-1/2 md:w-1/3 lg:w-1/4`}>
    <div
      className={`h-full ${bgColor === "dark" ? "bg-secondary-dark text-white" : "bg-white text-secondary-dark"} flex flex-col justify-between rounded-xl shadow`}
    >
      <div className="flex items-center justify-between p-6">
        <div className="flex w-[50px] items-center justify-center">
          <img src={icon} />
        </div>
      </div>
      <div className="flex flex-grow flex-col justify-center p-6">
        <h3 className="mb-2 text-xl font-semibold leading-relaxed sm:text-2xl">
          {title}
        </h3>
        <p
          className={`text-sm leading-tight ${bgColor === "dark" ? "text-white" : "text-secondary-dark"}`}
        >
          {description}
        </p>
      </div>
    </div>
  </div>
);

const Services = () => {
  const customItemStyle = {
    border: "none",
  };

  const noFocusStyle = {
    outline: "none",
    boxShadow: "none",
  };

  const accordionHeaderStyle = {
    ...noFocusStyle,
    "&:focus": noFocusStyle,
    "&:not(.collapsed)": noFocusStyle,
  };
  const sales = [
    {
      bgColor: "dark",
      category: "Sales",
      title: "Sales Channels",
      description:
        "We offer access to over 2,000 sales channels to maximize your product reach.",
      icon: Channels,
    },
    {
      bgColor: "light",
      category: "Sales",
      title: "Broad Store Access",
      description:
        "Access to all hyper markets, large grocery stores, retail markets, small groceries and different channels in Egypt",
      icon: Store,
    },
    {
      bgColor: "dark",
      category: "Sales",
      title: "Monthly Sales Reports",
      description:
        "Stay informed with detailed sales reports and market overviews.",
      icon: Report,
    },
    {
      bgColor: "light",
      category: "Sales",
      title: "Product Availability",
      description:
        "Ensure your products are widely available at competitive prices across all hypermarkets.",
      icon: Availability,
    },
  ];

  const marketing = [
    {
      bgColor: "light",
      category: "Marketing",
      title: "Online and Offline Marketing Activities",
      description:
        "We handle all aspects of marketing, both digital and traditional, to boost your brand's visibility.",
      icon: Activities,
    },

    {
      bgColor: "dark",
      category: "Marketing",
      title: "Co-Promotion",
      description:
        "Partner with complementary products to enhance your market presence.",
      icon: Promotion,
    },
  ];

  const logisitcs = [
    {
      bgColor: "light",
      category: "Logistics",
      title: "Product Delivery",
      description: "Deliver your products to the desired location efficiently.",
      icon: Delivery,
    },
    {
      bgColor: "dark",
      category: "Logistics",
      title: "Warehousing",
      description: "Provide warehousing per pallet to meet your storage needs.",
      icon: Warehouse,
    },
  ];

  return (
    <section className="relative lg:mt-5" id="services">
      <div>
        <div className="container mx-auto px-4 py-12 md:py-24">
          <h2 className="text-center text-3xl font-bold md:text-5xl">
            Services
          </h2>
          <div className="-mx-3 hidden flex-wrap sm:mt-12 sm:flex lg:mt-20">
            {sales.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
            {marketing.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
            {logisitcs.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          <div className="mt-8 block sm:hidden">
            <Accordion>
              <Accordion.Item eventKey="0" style={customItemStyle}>
                <Accordion.Header style={accordionHeaderStyle}>
                  Sales
                </Accordion.Header>
                <Accordion.Body>
                  {sales.map((service, index) => (
                    <ServiceCardMobile key={index} {...service} />
                  ))}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" style={customItemStyle}>
                <Accordion.Header style={accordionHeaderStyle}>
                  Marketing
                </Accordion.Header>
                <Accordion.Body>
                  {marketing.map((service, index) => (
                    <ServiceCardMobile key={index} {...service} />
                  ))}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" style={customItemStyle}>
                <Accordion.Header style={accordionHeaderStyle}>
                  Logistics
                </Accordion.Header>
                <Accordion.Body>
                  {logisitcs.map((service, index) => (
                    <ServiceCardMobile key={index} {...service} />
                  ))}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
