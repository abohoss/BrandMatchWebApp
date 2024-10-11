import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
const ServicesMobile = () => {
    const customItemStyle = {
        border: 'none',
      };
      const noFocusStyle = {
        outline: 'none',
        boxShadow: 'none',
      };
    return (
        <Accordion>
            <Accordion.Item eventKey="0" style={customItemStyle} >
                <Accordion.Header style={noFocusStyle}>Sales</Accordion.Header>
                <Accordion.Body>
                    <ul>
                        <li><b>Sales Channels</b>: We offer access to over 2,000 sales channels to maximize your product reach.</li>
                        <li><b>Broad Store Access</b>: Access to all hyper markets, large grocery stores, retail markets, small groceries and different channels in Egypt.</li>
                        <li><b>Monthly Sales Reports</b>: Stay informed with detailed sales reports and market overviews.</li>
                        <li><b>Product Availability</b>: Ensure your products are widely available at competitive prices across all hypermarkets.</li>
                    </ul>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" style={customItemStyle}>
                <Accordion.Header>Marketing</Accordion.Header>
                <Accordion.Body>
                    <ul>
                        <li><b>Online and Offline Marketing Activities</b>: We handle all aspects of marketing, both digital and traditional, to boost your brand's visibility.</li>
                        <li><b>Co-Promotion</b>: Partner with complementary products to enhance your market presence.</li>
                        <li><b>Shelf Organization</b>: Ensure your products have the best shelf view in hypermarkets.</li>
                        <li><b>Market Research</b>: We conduct thorough research on competitors, prices, channels, and more to inform your strategy.</li>
                    </ul>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" style={customItemStyle}>
                <Accordion.Header>Logistics</Accordion.Header>
                <Accordion.Body>
                    <ul>
                        <li><b>Warehousing</b>: Provide warehousing per pallet to meet your storage needs.</li>
                        <li><b>Product Delivery</b>: Deliver your products to the desired location efficiently.</li>
                        <li><b>Order Processing</b>: Handle labeling and invoicing to streamline your order process.</li>
                    </ul>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default ServicesMobile