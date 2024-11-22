import SCB from "../../assets/images/Services/SCB.webp";

const Definition = () => {
  return (
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-start gap-6 px-4 py-10 sm:flex-row sm:px-6 sm:py-16 lg:px-8 lg:py-24 lg:pb-20 lg:pt-24">
      <img
        className="flex-1 self-stretch rounded-xl object-cover shadow sm:w-1/2"
        src={SCB}
        loading="lazy"
      />
      <div className="flex basis-1/2 flex-col items-center justify-center gap-6">
        <div className="inline-flex h-10 items-center justify-center self-stretch sm:justify-start">
          <div className="from-secondary-bright flex items-center justify-center rounded-[32px] bg-gradient-to-r px-4 py-2">
            <span className="font-['Montserrat'] text-base font-normal leading-normal text-white">
              Startup Package
            </span>
          </div>
        </div>
        <h2 className="self-stretch font-['Montserrat'] text-5xl font-black leading-[48px] text-white">
          Survive career burnout!
        </h2>
        <h3 className="self-stretch text-right font-['Montserrat'] text-3xl font-medium leading-9 text-white">
          Revitalize Your Career Without the Hassle
        </h3>
        <p className="self-stretch text-center font-['Montserrat'] text-lg font-normal leading-7 text-gray-300">
          Struggling with career burnout and unsure how to move forward?
          BrandMatch is here to help. We take on the task of building your
          personal brand, connecting you with the right partners and funding
          opportunities, so you can focus on rediscovering your passion.
        </p>
      </div>
    </div>
  );
};

export default Definition;
