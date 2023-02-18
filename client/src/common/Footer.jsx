import React from "react";
const Footer = () => {
  return (
    <div className="bg-[#03271b] relative flex justify-start items-start lg:justify-between flex-wrap lg:flex-nowrap w-full mt-40">
      <div className="h-80">
        <img
          src="/images/Armchair-Green-Royal-Transparent-File.png"
          alt="sofa"
          width={400}
          className="translate-y-[-150px]"
        />
      </div>
      <div className="flex justify-between flex-wrap items-center text-white p-10 w-full">
        <div className="flex flex-col gap-8 w-96">
          <h4 className="text-2xl">Luxury Lounge Chair</h4>
          <p className="text-xs">
            Hard thown using dooded black day. The inter is gloud in to sgiry
            while, the external ins imagenied opstion sip
          </p>
          <span className="flex items-center gap-2">
            <span className="h-[0.5px] bg-[#a7620f] w-60"></span>
            <p>Chirstina</p>
          </span>
        </div>
        <div className="flex flex-col gap-8 w-80">
          <p className="text-xs">
            Hard thown using dooded black day. The inter is gloud in to sgiry
            while, the external ins imagenied opstion sip
          </p>
          <div className="flex ">
            <img
              src="/images/person_1.jpg"
              width={40}
              className="rounded-full"
            />
            <img
              src="/images/person_2.jpg"
              width={40}
              className="rounded-full ml-[-8px]"
            />
            <img
              src="/images/person_3.jpg"
              width={40}
              className="rounded-full ml-[-8px]"
            />
            <img
              src="/images/person_2.jpg"
              width={40}
              className="rounded-full ml-[-8px]"
            />
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col">
            <span className="text-[#a7620f] font-bold text-2xl">10k +</span>
            <p className="text-xs">Soisted Clients</p>
          </div>
          <div className="flex flex-col">
            <span className="text-[#a7620f] font-bold text-2xl">419 +</span>
            <p className="text-xs">Total Products</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
