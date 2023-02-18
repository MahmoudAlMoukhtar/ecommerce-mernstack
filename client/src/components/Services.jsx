import React from "react";

let dataServices = [
  "Donec vitae odio nisl daplibus malesuda1",
  "Donec vitae odio nisl daplibus malesuda2",
  "Donec vitae odio nisl daplibus malesuda3",
  "Donec vitae odio nisl daplibus malesuda4",
];

const Service = ({service}) => {
  return (
    <div className="w-56 flex justify-between gap-x-4 hover-background-grid-sec4 ">
      <span className="border-2 border-black rounded-full"></span>
      <p className="p-2">{service}</p>
    </div>
  );
};

const Services = () => {
  return (
    <section
      className="flex justify-between  md:items-start flex-wrap-reverse md:flex-nowrap gap-6 mt-40 lg:px-8 sm:px-4 "
      id="services"
    >
      <div
        id="services-sec-images"
        className="grid grid-cols-2 gap-4 px-2 sm:px-0"
      >
        <div id="Image-grid-1" className="row-span-3">
          <img
            src="/images/img-grid-1.jpg"
            alt=""
            className="rounded-md w-96 row-start-1 row-end-2 z-40"
            width={350}
            height={450}
          />
        </div>
        <div>
          <img
            src="/images/img-grid-2.jpg"
            alt=""
            className="rounded-md"
            width={250}
            height={200}
          />
        </div>
        <div className="col-start-2 col-end-3">
          <img
            id="Image-trans-y"
            src="/images/img-grid-3.jpg"
            alt=""
            className="rounded-md w-72 col-start-2 col-end-3"
            width={300}
            height={300}
          />
        </div>
      </div>
      <div
        id="services-sec-text"
        className="flex flex-col gap-y-10 md:w-[600px] w-[100%]  justify-center items-center text-center md:justify-start md:items-start md:text-start"
      >
        <h2 id="services-sec-text_title" className="text-3xl font-medium">
          We Help You Make Modern Interior Design
        </h2>
        <p id="services-sec-text_description" className="text-gray-400">
          Donec vitae odio nisl daplibus malesuda Aliquam vulputate velit.
          Nullam ac aliqute velit. Aliquam vulputate velit velit imperdiet dolor
          tempor tristique
        </p>
        <div
          id="services-sec-text_feachers"
          className="grid lg:grid-cols-2 lg:text-start md:grid-col-1 md:text-center gap-8 "
        >
          {dataServices.map(s => (
            <Service service={s} key={s} />
          ))}
        </div>
        <button
          id="services-sec-btnExplore"
          className="bg-black py-2 px-7 rounded-full font-semibold text-white"
        >
          Explore
        </button>
      </div>
    </section>
  );
};

export default Services;
