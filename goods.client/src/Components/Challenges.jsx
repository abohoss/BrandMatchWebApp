import "../styles/challenges.css";

function Challenges() {
  const challenges = [
    {
      name: "Inefficient Warehousing and Storage",
      description:
        "Overcome logistical inefficiencies with our streamlined warehousing solutions.",
    },
    {
      name: "Limited Growth Opportunities",
      description:
        "Unlock new growth avenues with our comprehensive market insights and strategic planning.",
    },
    {
      name: "Distribution Challenges",
      description:
        "Ensuring your products reach the right stores and customers efficiently can be complex. We simplify this process for you.",
    },
    {
      name: "Competition",
      description:
        "Established brands can make it difficult to stand out. Our strategies help you increase your market share and attract customers.",
    },
    {
      name: "Lack of Market Knowledge",
      description:
        "Entering a new market? We provide essential insights into market preferences, consumer behavior, distribution channels, and regulations to ensure successful market entry.",
    },
  ];

  return (
    <section className="mx-auto mt-16 flex max-w-7xl flex-col items-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
        rel="stylesheet"
      />

      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="mx-auto max-w-3xl">
              <h2 className="border-l-4 border-bright-red pl-3.5 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                Challenges
              </h2>
              <p>Challenges we address at BrandMatch</p>
            </div>
          </div>
        </div>
        <div className="mt-8 sm:mt-12 lg:mt-20">
          <div className="row">
            {challenges.map((challenge, index) => (
              <div className="col-sm-6 col-lg-4" key={index}>
                <div className="feature-box-1">
                  <div className="icon">
                    <i className="fa fa-book"></i>
                  </div>
                  <div className="feature-content">
                    <h5>{challenge.name}</h5>
                    <p>{challenge.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Challenges;
