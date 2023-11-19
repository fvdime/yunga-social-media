import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroBanner = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-4 lg:py-4 h-full flex flex-col justify-between">
      <nav>
        <div className="flex flex-row w-full items-center justify-between">
          <h1 className="uppercase font-bold">yunga</h1>
          <Link
            href="/auth"
            className="text-xs font-semibold px-6 py-1.5 border border-slate-950 rounded-full bg-slate-950 text-white hover:text-black hover:bg-white duration-500 transition-all ease-in"
          >
            Get Started
          </Link>
        </div>
      </nav>
      <section className="flex h-full flex-col  justify-between items-start py-16 px-4">
        <h1 className="text-6xl md:text-9xl font-medium uppercase text-center w-full pb-8">
          ⊹insights⊹
        </h1>
        <div className="flex w-full flex-row justify-between items-center py-8">
          <div className="text-sm font-semibold uppercase w-3/5">
            Ideas worth rallying around
          </div>
          <div className="text-xs font-medium w-2/5">
            We work for user experience. Creating apps for real life examples,
            learning, exploring and creativity.
          </div>
        </div>
      </section>
      <hr />
      {/* couldn't decide it */}
      <section className="py-8">
        <h1 className="text-2xl font-bold pb-8 uppercase">from our users</h1>
        <div className="h-96 w-full grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="w-full h-96 flex items-center justify-center relative">
            <Image
              src="/handsome.jpg"
              fill
              alt=""
              className="absolute hover:brightness-50 hover:rounded-xl duration-500 ease-in transition-all"
            />
          </div>
          <div className="w-full h-96 flex items-center justify-center relative">
            <Image
              src="/handsome.jpg"
              fill
              alt=""
              className="absolute hover:brightness-50 hover:rounded-xl duration-500 ease-in transition-all"
            />
          </div>
          <div className="w-full h-96 flex items-center justify-center relative">
            <Image
              src="/handsome.jpg"
              fill
              alt=""
              className="absolute hover:brightness-50 hover:rounded-xl duration-500 ease-in transition-all"
            />
          </div>
        </div>
      </section>
      <hr />
    </div>
  );
};

export default HeroBanner;
