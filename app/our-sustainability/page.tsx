import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <div className="bg-[#ecf6f2]">
      {/* Hero Section . */}
      <section className=" max-w-7xl flex flex-col-reverse lg:flex-row items-center gap-10 px-4 sm:px-6 lg:px-8 mx-auto">
        <div className=" text-[#10446C] w-full lg:w-1/2">
          <h2 className="text-2xl sm:text-[40px] font-bold text-center lg:text-left mb-4">
            Connecting the UK.<br></br>Protecting the Planet.
          </h2>
          <p className="text-base text-center lg:text-left sm:text-2xl leading-relaxed">
            Our promise: zero-compromise connectivity, zero net carbon by 2030.
          </p>
        </div>
        <div className="w-full lg:w-1/2 py-4">
          <Image
            src="/Images/oursustainability/hero-pic.png"
            alt="Our Sustainability"
            width={600}
            height={400}
            className="w-full max-w-xl mx-auto lg:mx-0 h-auto object-contain"
            // className="w-full h-auto object-contain"
          />
        </div>
      </section>

      {/* Our Measurable Goals */}
      <section className=" w-full py-10 px-5 sm:px-10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl sm:text-4xl font-bold text-[#10446C]">
            Our M<span className="underline decoration-amber-400 underline-offset-14">easurable</span> Goals
          </h2>
          {/* Cards container */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[
              {
                src: "/Images/oursustainability/Sec1-icon1.png",
                label: "Carbon-Neutral Operations",
                year: "2030",
                description:
                  "Complete carbon neutrality across all operational activities",
                progress: "45%",
              },
              {
                src: "/Images/oursustainability/Sec1-icon2.png",
                label: "100% Renewable Energy",
                year: "2027",
                description:
                  "All data centres powered by renewable energy sources",
                progress: "67%",
              },
              {
                src: "/Images/oursustainability/Sec1-icon3.png",
                label: "Net-Zero Supply Chain",
                year: "2035",
                description:
                  "Complete supply chain transformation to net-zero emissions",
                progress: "28%",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-200 px-6 py-12 flex flex-col items-center justify-between gap-3 hover:shadow-2xl transition-shadow duration-300"
              >
                <Image
                  src={item.src}
                  alt={item.label}
                  width={100}
                  height={100}
                  className="w-16 h-16 object-contain"
                />
                <h3 className="text-center text-lg lg:text-2xl font-bold text-[#10446C]">
                  {item.label}
                </h3>
                <h3 className="text-center text-md lg:text-3xl  font-bold text-[#F5C241]">
                  {item.year}
                </h3>
                <p className="text-center text-sm lg:text-base font-normal text-[#10446C]">
                  {item.description}
                </p>
                <div className="w-[90%] h-1 border-2 border-gray-300"></div>
                <p className="text-center text-sm lg:text-base font-bold text-[#10446C]">
                  {item.progress} Complete.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Initiatives in Action */}
      <section className="flex justify-center py-16 px-4">
        <div className="max-w-7xl w-full">
          <h2 className="text-2xl sm:text-4xl font-bold text-[#10446C] text-center mb-10">
            Initiati<span className="underline decoration-amber-400 underline-offset-14">ves in A</span>ction
          </h2>

          <div className="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-1/2 h-72 lg:h-auto">
              <Image
                src="/Images/oursustainability/Sec2-pic.png"
                alt="Our Sustainability"
                width={500}
                height={250}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="lg:w-1/2 p-6 sm:p-10 text-[#10446C]">
              <h2 className="text-xl md:text-2xl font-bold mb-4">
                E-Waste Recycling Programme
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-5">
                We responsibly recycle all electronic equipment, ensuring proper
                disposal and material recovery. Our certified partners process
                over 10,000 devices annually.
              </p>
              {/* STATS */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 bg-gray-100 rounded-2xl p-5 text-center">
                  <span className="text-[#f5c241] text-2xl font-bold">
                    15,847
                  </span>
                  <p className="text-gray-500 text-sm">Devices Recycled</p>
                </div>

                <div className="flex-1 bg-gray-100 rounded-2xl p-5 text-center">
                  <span className="text-[#f5c241] text-2xl font-bold">
                    98.7%
                  </span>
                  <p className="text-gray-500 text-sm">
                    Material Recovery Rate
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Action Zone */}
      <section className="flex justify-center py-16 px-4">
        <div className="max-w-xl w-full">
          {/* Heading */}
          <h2 className="text-2xl sm:text-4xl font-bold text-[#10446C] text-center mb-2">
            Customer Action Zone
          </h2>

          <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto">
            Join us in making a difference — every action counts towards our
            shared environmental goals
          </p>

          {/* Card */}
          <div className="bg-white rounded-3xl shadow-lg px-6 sm:px-10 py-8 flex flex-col md:items-center sm:items-baseline">
            {/* Icon */}
            <div className="mb-4">
              <Image
                src="/Images/oursustainability/phone.png"
                alt="Paperless Billing"
                width={60}
                height={60}
                className="object-contain"
                priority={false}
              />
            </div>

            {/* Content */}
            <div className="text-[#10446C] sm:text-left w-full max-w-lg">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">
                Sign Up for Paperless Billing
              </h3>

              <p className="text-sm sm:text-base leading-relaxed mb-6 text-gray-700">
                Reduce paper waste by switching to digital bills. Get instant
                notifications and help save trees.
              </p>

              {/* Benefits */}
              <ul className="text-left space-y-2 mb-6 w-fit">
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="text-green-500 font-bold">✓</span>
                  Save 12 trees per year
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="text-green-500 font-bold">✓</span>
                  Save 1,500L water annually
                </li>
              </ul>

              {/* Button */}
              <button className="bg-[#10446C] w-full text-white px-6 py-3 rounded-xl hover:bg-[#0c3654] transition duration-300">
                Contact Us
              </button>

              {/* Progress text */}
              <p className="text-sm text-gray-500 mt-5">
                100% of customers already paperless
              </p>

              {/* Real Progress Bar */}
              <div className="w-full h-2 bg-gray-200 rounded-full mt-3 overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full w-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Impact Tracker */}
      <section className=" w-full py-10 px-5 sm:px-10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl sm:text-4xl font-bold text-[#10446C] text-center mb-2">
            Live Impact Tracker
          </h2>

          <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto">
            See the real-time environmental impact of our combined efforts
          </p>
          {/* Cards container */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              {
                src: "/Images/oursustainability/earth.png",
                label: "CO₂ Saved",
                quantity: "12,847",
                units: "Tonnes",
                description: "Equivalent to planting 64,235 trees",
                progress: "+156 tonnes this month",
              },
              {
                src: "/Images/oursustainability/recycle.png",
                label: "Devices Recycled",
                quantity: "89,432",
                units: "Units",
                description: "2.3 tonnes of e-waste diverted",
                progress: "+423 devices this week",
              },
              {
                src: "/Images/oursustainability/thunder.png",
                label: "Renewable Energy",
                quantity: "67.3",
                units: "%",
                description: "Of total energy consumption",
                progress: "+2.1% this quarter",
              },
              {
                src: "/Images/oursustainability/car.png",
                label: "Trips Avoided",
                quantity: "34,829",
                units: "Journeys",
                description: "Through remote diagnostics",
                progress: "+1,856 this month",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative bg-white rounded-3xl shadow-[0_10px_25px_rgba(0,0,0,0.08)] px-10 py-12 pt-10 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl"
              >
                {/* TOP ACCENT LINE */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-linear-to-r from-[#00A896] to-[#F5C241] rounded-t-3xl"></div>

                {/* Icon */}
                <Image
                  src={item.src}
                  alt={item.label}
                  width={80}
                  height={80}
                  className="w-16 h-16 object-contain mb-4"
                />

                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-bold text-[#10446C] mb-2">
                  {item.label}
                </h3>

                {/* Quantity */}
                <h3 className="text-2xl lg:text-3xl font-bold text-[#F5C241] mb-1">
                  {item.quantity}
                </h3>

                {/* Units */}
                <p className="text-sm lg:text-base text-gray-500 mb-4">
                  {item.units}
                </p>

                {/* Description */}
                <p className="text-sm lg:text-base text-gray-500 mb-3">
                  {item.description}
                </p>

                {/* Progress */}
                <p className="text-sm font-semibold text-[#28A745]">
                  {item.progress}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Green Commitment */}
      <section className="flex justify-center py-16 px-4">
        <div className="w-full max-w-7xl text-center bg-[#10446C] rounded-3xl shadow-xl px-6 sm:px-12 py-12 text-white">
          {/* Heading */}
          <h2 className="text-2xl sm:text-4xl font-bold mb-4">
            Join Our Green Commitment
          </h2>

          <p className="text-sm sm:text-base text-white/90 mb-8 max-w-2xl mx-auto">
            Together, we're building a sustainable future for UK connectivity.
            Be part of the solution.
          </p>

          {/* Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 justify-items-center max-w-4xl mx-auto">
            <span className="border border-[#f5c241] bg-[#2d4f59] rounded-full px-6 py-3 text-sm font-semibold whitespace-nowrap">
              Carbon Neutral by 2030
            </span>

            <span className="border border-[#f5c241] bg-[#2d4f59] rounded-full px-6 py-3 text-sm font-semibold whitespace-nowrap">
              100% E-Waste Recycling
            </span>

            <span className="border border-[#f5c241] bg-[#2d4f59] rounded-full px-6 py-3 text-sm font-semibold whitespace-nowrap">
              Renewable Energy Powered
            </span>
          </div>

          {/* Button */}
          <button className="bg-[#f5c241] text-[#10446C] px-6 py-3 rounded-xl text-lg font-bold hover:scale-105 transition-transform duration-200">
            Take Action Today
          </button>
        </div>
      </section>
    </div>
  );
}
