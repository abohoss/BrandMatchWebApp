import "../styles/challenges.css";

function Challenges() {
  return (
    <div data-scroll-section>
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
        rel="stylesheet"
      />

      <section className="mx-auto flex max-w-7xl flex-col items-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="mx-auto max-w-3xl">
                <h2 className="border-l-4 border-bright-red pl-3.5 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                  Challenges
                </h2>
                <p>Challenges we address at BrandMatch</p>
              </div>
            </div>
          </div>
          <div className="mt-8 sm:mt-12 lg:mt-20">
            <div className="row">
              <div className="col-sm-6 col-lg-4">
                <div className="feature-box-1">
                  <div className="icon">
                    <i className="fa fa-chart-simple"></i>
                  </div>
                  <div className="feature-content">
                    <h5>Ineffective Marketing Campaigns</h5>
                    <p>
                      Struggling to reach the right audience? Our targeted
                      marketing strategies ensure your brand stands out.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="feature-box-1">
                  <div className="icon">
                    <i className="fa fa-warehouse"></i>
                  </div>
                  <div className="feature-content">
                    <h5>Inefficient Warehousing and Storage</h5>
                    <p>
                      Overcome logistical inefficiencies with our streamlined
                      warehousing solutions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="feature-box-1">
                  <div className="icon">
                    <i className="fa-solid fa-arrow-up-right-dots"></i>
                  </div>
                  <div className="feature-content">
                    <h5>Limited Growth Opportunities</h5>
                    <p>
                      Unlock new growth avenues with our comprehensive market
                      insights and strategic planning.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="feature-box-1">
                  <div className="icon">
                    <i className="fa-solid fa-copyright"></i>
                  </div>
                  <div className="feature-content">
                    <h5>Brand Awareness</h5>
                    <p>
                      In crowded markets, increasing brand visibility is
                      crucial. We help you attract new customers and enhance
                      your market presence.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="feature-box-1">
                  <div className="icon">
                    <i className="fa fa-th"></i>
                  </div>
                  <div className="feature-content">
                    <h5>Distribution Challenges</h5>
                    <p>
                      Ensuring your products reach the right stores and
                      customers efficiently can be complex. We simplify this
                      process for you.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="feature-box-1">
                  <div className="icon">
                    <i className="fa-solid fa-universal-access"></i>
                  </div>
                  <div className="feature-content">
                    <h5>Limited Access to Distribution Channels</h5>
                    <p>
                      We help FMCG businesses access the right distribution
                      channels to ensure your products are available to
                      consumers.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="feature-box-1">
                  <div className="icon">
                    <i className="fa-solid fa-bolt"></i>
                  </div>
                  <div className="feature-content">
                    <h5>Competition</h5>
                    <p>
                      Established brands can make it difficult to stand out. Our
                      strategies help you increase your market share and attract
                      customers.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="feature-box-1">
                  <div className="icon">
                    <i className="fa fa-book"></i>
                  </div>
                  <div className="feature-content">
                    <h5>Lack of Market Knowledge</h5>
                    <p>
                      Entering a new market? We provide essential insights into
                      market preferences, consumer behavior, distribution
                      channels, and regulations to ensure successful market
                      entry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Challenges;
