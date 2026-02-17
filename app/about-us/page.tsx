import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <div>
      <section className="w-full bg-[#10446C] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center text-white">
          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">
            Fibre That’s Built Right
          </h1>
          {/* Description */}
          <p className="mt-4 text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed max-w-4xl mx-auto">
            High-speed, reliable, and future-ready broadband built on Britain’s
            most robust fibre infrastructure.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#f6c140] flex flex-col lg:flex-row items-start lg:items-center justify-center gap-10  px-5 sm:px-10 md:px-16 lg:px-32 py-14 ">
        {/* LEFT IMAGE */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <Image
            src="/Images/about-hero-pic.png"
            alt="Hero"
            width={900}
            height={600}
            priority
            fetchPriority="high"
            className="w-full max-w-md sm:max-w-lg lg:max-w-xl rounded-2xl border-2 border-blue-950"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          {/* Row 1 */}
          <h2 className="text-black font-bold sm:text-2xl md:text-3xl lg:text-4xl leading-tight max-w-xl">
            Digital Inclusion & Sustainability
          </h2>

          {/* Row 2 */}
          <p className="text-black text-base sm:text-lg md:text-xl leading-relaxed mt-6 max-w-xl">
            Fibre That’s Built Right. Service That’s Built Around You. Zoiko
            Broadband is a trading name of Zoiko Telecom Ltd, a UK-registered
            company and authorised BT Wholesale reseller. We deliver high-speed,
            reliable, and future-ready broadband built on Britain’s most robust
            fibre infrastructure.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#fffff3] flex flex-col lg:flex-row items-start lg:items-center justify-center gap-8  px-5 sm:px-10 md:px-16 lg:px-32 py-14 ">
        {/* LEFT  */}
        <div className="w-full lg:w-[40%] flex flex-col">
          {/* Row 1 */}
         <h2 className="text-black font-bold text-2xl sm:text-3xl leading-tight mb-6">
              Digital Inclusion & Sustainability
            </h2>
            {[
              {
                src: "/Images/Sec1-icon1.png",
                label: "Expanding into underserved rural areas",
              },
              { src: "/Images/Sec1-icon2.png", label: "Fast Connected" },
              { src: "/Images/Sec1-icon3.png", label: "Support 24/7" },
              {
                src: "/Images/Sec1-icon4.png",
                label: "Expanding into underserved rural areas",
              },
              {
                src: "/Images/Sec1-icon5.png",
                label: "Expanding into underserved rural areas",
              },
            ].map((item, i) => (
              <div key={i} className="flex flex-row items-center gap-3 mb-5">
                <Image
                  src={item.src}
                  alt={item.label}
                  width={63}
                  height={63}
                  className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 object-contain"
                />
                <h3 className="text-[#494949] font-medium text-base sm:text-base md:text-xl">
                  {item.label}
                </h3>
              </div>
            ))}
          </div>
        {/* RIGHT  */}
        <div className="w-full lg:w-[60%] flex items-center justify-center">
          <Image
            src="/Images/about-section1-rightpic.png"
            alt="Hero"
            width={1000}
            height={600}
            priority
            fetchPriority="high"
            className="w-full max-w-md sm:max-w-lg lg:max-w-xl rounded-2xl border-2 border-blue-950"
          />
        </div>
      </section>

      <section className="w-full bg-[#e8f0eb] py-20 sm:py-28 px-4 sm:px-8 lg:px-24">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center sm:items-start gap-10 sm:gap-16">
        {/* Left — Photo + Name + Title */}
        <div className="flex flex-col items-center sm:items-center shrink-0  sm:w-52 md:mr-5">
          <div className="w-72 h-72 sm:w-72 sm:h-72 rounded-xl overflow-hidden shadow-md">
            <Image
              src="/Images/Frame-1.png"
              alt="Samuel Gittens – Marketing Director"
              width={300}
              height={300}
              className="w-full h-full object-cover object-top"
            />
          </div>
          <p className="mt-3 font-bold text-[#1a1a1a] text-sm sm:text-base text-center">
            Samuel Gittens
          </p>
          <p className="text-[#555555] text-xs sm:text-sm text-center">
            Marketing Director.
          </p>
        </div>

        {/* Right — Quote */}
        <div className="flex flex-col justify-center max-w-2xl">
          <h2 className="text-[#1a1a1a] font-bold text-2xl sm:text-3xl mb-3 mt-4">
            From Our Leadership
          </h2>
          <p className="text-[#494949] text-base sm:text-xl leading-8 md:leading-10">
            We&rsquo;re not just selling broadband &mdash; we&rsquo;re building
            digital futures for Britain. From bustling cities to countryside
            communities, we connect people with the speed, security, and
            simplicity they deserve.
          </p>
        </div>

      </div>
    </section>
    </div>
  );
}
