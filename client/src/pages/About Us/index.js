import React from "react";
import MainHeader from "../../components/MainHeader";
import Services from "../../components/Services";
import Testimonailas from "../../components/Testimonailas";
import Spinner from "../../Spinner";

//import WhyChoose from "../../WhyChose";

const ourTeam = [
  {
    img: "/images/person_1.jpg",
    name: "Lawson Arnold",
    title: "CEO, Founder, Atty.",
    descripWork:
      "Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
  },
  {
    img: "/images/person_2.jpg",
    name: "Jeremy Walker",
    title: "CEO, Founder, Atty.",
    descripWork:
      "Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
  },
  {
    img: "/images/person_3.jpg",
    name: "Patrik White",
    title: "CEO, Founder, Atty.",
    descripWork:
      "Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
  },
  {
    img: "/images/person_1.jpg",
    name: "Test Al-test",
    title: "Front-end Developer.",
    descripWork:
      "Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
  },
];

const OurTeam = () => {
  //const {data: ourTeam, loading, error} = useFetch("ourTeam");
  // if (error) throw error;
  // if (loading) return <Spinner />;

  const Employee = ({img, name, title, descripWork}) => {
    return (
      <div id="card-employ" className="flex flex-col gap-y-6 w-64">
        <img src={img} alt="" className="" width={300} height={300} />
        <a href="#home">
          <h2 className="text-3xl font-normal underline text-gray-800">
            {name}
          </h2>
        </a>
        <p className="text-gray-500">{title}</p>
        <p className="text-gray-500">{descripWork}</p>
        <a href="#home" className="underline font-medium text-gray-800">
          Learn More
        </a>
      </div>
    );
  };

  return (
    <section
      id="ourTeam"
      className="px-16 flex flex-col justify-center gap-20 w-full mt-40"
    >
      <h1 className="text-3xl font-semibold text-center">Our Team</h1>
      <div className="flex flex-wrap justify-center items-center gap-8 w-full">
        {ourTeam.map(employee => {
          return <Employee {...employee} key={employee.name} />;
        })}
      </div>
    </section>
  );
};

const AboutPage = () => {
  return (
    <React.Fragment>
      <MainHeader title="About Us" />

      <div className="flex flex-col justify-center items-center w-full">
        <OurTeam />
        <Services />
        <Testimonailas />
      </div>
    </React.Fragment>
  );
};

export default AboutPage;
