import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
const ServiceCard = ({ bgColor, category, title, description, icon }) => (
  <div className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-3`}>
    <div className={`h-full ${bgColor === 'dark' ? 'bg-[#231f20] text-white' : 'bg-white text-[#231f20]'} rounded-xl shadow flex flex-col justify-between`}>
      <div className="p-6 flex justify-between items-center">
        <div className="w-[50px] flex justify-center items-center">
          <img src={icon} />
        </div>
        <div className={`px-4 py-2 rounded-[32px] border ${bgColor === 'dark' ? 'border-white' : 'border-[#231f20]'}`}>
          <div className="text-xs ">{category}</div>
        </div>
      </div>
      <div className="p-6 flex-grow flex flex-col justify-center">
        <h3 className="text-xl sm:text-2xl  mb-2 leading-relaxed">{title}</h3>
        <p className="text-sm leading-tight">{description}</p>
      </div>
    </div>
  </div>
);

const ServiceCardMobile = ({ bgColor, category, title, description, icon }) => (
  <div className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-3`}>
    <div className={`h-full ${bgColor === 'dark' ? 'bg-[#231f20] text-white' : 'bg-white text-[#231f20]'} rounded-xl shadow flex flex-col justify-between`}>
      <div className="p-6 flex justify-between items-center">
        <div className="w-[50px] flex justify-center items-center">
          <img src={icon} />
        </div>

      </div>
      <div className="p-6 flex-grow flex flex-col justify-center">
        <h3 className="text-xl sm:text-2xl  mb-2 leading-relaxed">{title}</h3>
        <p className="text-sm leading-tight">{description}</p>
      </div>
    </div>
  </div>
);

const ServicesSection = () => {
  const customItemStyle = {
    border: 'none',
  };

  const noFocusStyle = {
    outline: 'none',
    boxShadow: 'none',
  };

  const accordionHeaderStyle = {
    ...noFocusStyle,
    '&:focus': noFocusStyle,
    '&:not(.collapsed)': noFocusStyle,
  };
  const sales = [
    {
      bgColor: 'dark',
      category: 'Sales',
      title: 'Sales Channels',
      description: 'We offer access to over 2,000 sales channels to maximize your product reach.',
      icon: "/assets/images/channels.svg"
    },
    {
      bgColor: 'light',
      category: 'Sales',
      title: 'Broad Store Access',
      description: 'Access to all hyper markets, large grocery stores, retail markets, small groceries and different channels in Egypt',
      icon: '/assets/images/house.svg'
    },
    {
      bgColor: 'dark',
      category: 'Sales',
      title: 'Monthly Sales Reports',
      description: 'Stay informed with detailed sales reports and market overviews.',
      icon: '/assets/images/chart.svg'
    },
    {
      bgColor: 'light',
      category: 'Sales',
      title: 'Product Availability',
      description: 'Ensure your products are widely available at competitive prices across all hypermarkets.',
      icon: '/assets/images/av.svg'
    }
  ];

  const marketing = [
    {
      bgColor: 'light',
      category: 'Marketing',
      title: 'Online and Offline Marketing Activities',
      description: 'We handle all aspects of marketing, both digital and traditional, to boost your brand\'s visibility.',
      icon: '/assets/images/marketingActivities.svg'
    },
    {
      bgColor: 'dark',
      category: 'Marketing',
      title: 'Market Research',
      description: 'We conduct thorough research on competitors, prices, channels, and more to inform your strategy.',
      icon: '/assets/images/market.svg'
    },
    {
      bgColor: 'light',
      category: 'Marketing',
      title: 'Shelf Organization',
      description: 'Ensure your products have the best shelf view in hypermarkets.',
      icon: '/assets/images/shelf.svg'
    },

    {
      bgColor: 'dark',
      category: 'Marketing',
      title: 'Co-Promotion',
      description: 'Partner with complementary products to enhance your market presence.',
      icon: '/assets/images/promotion.svg'
    }
  ]

  const logisitcs = [
    {
      bgColor: 'dark',
      category: 'Logistics',
      title: 'Warehousing',
      description: 'Provide warehousing per pallet to meet your storage needs.',
      icon: '/assets/images/warehouse.svg'
    },
    {
      bgColor: 'light',
      category: 'Logistics',
      title: 'Product Delivery',
      description: 'Deliver your products to the desired location efficiently.',
      icon: '/assets/images/delivery.svg'
    },
    {
      bgColor: 'dark',
      category: 'Logistics',
      title: 'Order Processing',
      description: 'Handle labeling and invoicing to streamline your order process.',
      icon: '/assets/images/process.svg'
    }
  ]

  return (
    <div data-scroll-section>
      <section className="relative lg:mt-5">
        <div className="overflow-y-auto min-h-screen">
          <div className="py-12 md:py-24 container mx-auto px-4">
            <h2 className="text-4xl md:text-7xl text-center mb-8 md:mb-20">Services</h2>
            <div className="flex flex-wrap -mx-3 hidden sm:flex ">
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
            <div className="block sm:hidden">
              <Accordion>
                <Accordion.Item eventKey="0" style={customItemStyle}>
                  <Accordion.Header style={accordionHeaderStyle}>Sales</Accordion.Header>
                  <Accordion.Body>
                    {sales.map((service, index) => (
                      <ServiceCardMobile key={index} {...service} />
                    ))}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" style={customItemStyle}>
                  <Accordion.Header style={accordionHeaderStyle}>Marketing</Accordion.Header>
                  <Accordion.Body>
                    {marketing.map((service, index) => (
                      <ServiceCardMobile key={index} {...service} />
                    ))}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" style={customItemStyle}>
                  <Accordion.Header style={accordionHeaderStyle}>Logistics</Accordion.Header>
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
    </div>
  );
};

export default ServicesSection;

