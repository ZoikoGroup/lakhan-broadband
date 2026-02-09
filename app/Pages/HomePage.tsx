"use client";
import { useState } from "react";

export default function HomePage() {
    const [active, setActive] = useState(1);

  const testimonials = [
    {
      name: "Aladdin Sullivan",
      role: "CEO Nigiang",
      text:
        "Helped me to elaborate employee data, not only save and store, but also elaborate, process it so that it can be used as employee evaluation material. Such as looking at employee discipline from the recap of absences, leave, permits and more.",
    },
    {
      name: "Mahmood Ali",
      role: "CEO Nigiang",
      text:
        "Helped me to elaborate employee data, not only save and store, but also elaborate, process it so that it can be used as employee evaluation material. Such as looking at employee discipline from the recap of absences, leave, permits and more.",
    },
    {
      name: "Bang Cristiano",
      role: "CEO Emyu",
      text:
        "Helped me to elaborate employee data, not only save and store, but also elaborate, process it so that it can be used as employee evaluation material. Such as looking at employee discipline from the recap of absences, leave, permits and more.",
    },
  ];
  return (
    <div className="container w-screen  ">
      <section className="hero-section w-screen mt-25 bg-[#19598b] flex flex-col lg:flex-row items-start lg:items-center justify-center gap-10 px-5 sm:px-10 md:px-16 lg:px-32 py-12 lg:min-h-[80vh]">
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          {/* Row 1 */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
            <img
              className="h-10 sm:h-12 w-auto"
              src="/hero-pic-left.png"
              alt="hero-pic-left"
            />
            <h1 className="text-[#F5C241] font-bold text-2xl sm:text-3xl md:text-4xl">
              Built on
            </h1>
          </div>

          {/* Row 2 */}
          <h1 className="text-[#F5C241] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight max-w-xl">
            BT's Tier-1 Backbone <br />
            From Just £22/month
          </h1>

          {/* Row 3 */}
          <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed mb-6 max-w-xl">
            Experience lightning-fast broadband with unbeatable reliability,
            UK-based support, and prices that won’t break the bank. Join
            thousands of happy British homes already connected.
          </p>

          {/* Row 4 */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#F6C140] text-blue-950 px-8 py-3 rounded-3xl font-medium">
              Check Your Postcode
            </button>
            <button className="bg-white text-blue-950 px-8 py-3 rounded-3xl font-medium">
              View Fibre Plans
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <img
            className="w-full max-w-md sm:max-w-lg lg:max-w-xl rounded-2xl border-4 border-amber-950"
            src="/hero-pic-right.jpg"
            alt="hero-pic-right"
          />
        </div>
      </section>

      <section className="w-screen bg-[#E5F0FF] py-16 px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-3xl p-6 md:p-10">
          {/* Header */}
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#10446C]">
            Let’s find your perfect plan
          </h2>
          <p className="text-center text-gray-600 mt-2 max-w-2xl mx-auto">
            Answer a few quick questions to get a personalised recommendation
            tailored to your British lifestyle
          </p>

          {/* Cards */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* CARD 1 */}
            <div
              className="group border-2 border-[#F5C241] rounded-3xl p-6 flex flex-col items-center
        h-105 hover:shadow-xl transition-all duration-300 bg-[#F8FBFF]"
            >
              <div
                className="w-14 h-14 rounded-full bg-[#F5C241] flex items-center justify-center
          font-bold text-lg mb-4"
              >
                1
              </div>

              <h3 className="text-[#10446C] font-semibold text-lg text-center mb-6">
                How many people in your household?
              </h3>

              <div className="w-full flex flex-col gap-4">
                {[
                  "1–2 people (Couple/Single)",
                  "3–4 people (Small family)",
                  "5+ people (Large family)",
                ].map((item) => (
                  <button
                    key={item}
                    className="w-full py-3 rounded-xl border-2 border-gray-200 bg-white
                hover:border-[#10446C] hover:bg-[#F0F6FF]
                transition-all text-sm"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* CARD 2 */}
            <div
              className="border-2 border-[#F5C241] rounded-3xl p-6 flex flex-col items-center
        h-105 hover:shadow-xl transition-all duration-300"
            >
              <div
                className="w-14 h-14 rounded-full bg-[#F5C241] flex items-center justify-center
          font-bold text-lg mb-4"
              >
                2
              </div>

              <h3 className="text-[#10446C] font-semibold text-lg text-center mb-6">
                What do you do online?
              </h3>

              <div className="w-full flex flex-col gap-4">
                {[
                  "Basic browsing & BBC iPlayer",
                  "Netflix, YouTube & social media",
                  "Gaming & large downloads",
                  "Working from home & video calls",
                ].map((item) => (
                  <button
                    key={item}
                    className="w-full py-3 rounded-xl border-2 border-gray-200 bg-white
                hover:border-[#10446C] hover:bg-[#F0F6FF]
                transition-all text-sm"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* CARD 3 – RECOMMENDED */}
            <div
              className="border-2 border-gray-200 rounded-3xl p-6 flex flex-col items-center
        h-105 hover:shadow-xl transition-all duration-300"
            >
              <div
                className="w-14 h-14 rounded-full bg-[#F5C241] flex items-center justify-center
          font-bold text-lg mb-4"
              >
                3
              </div>

              <h3 className="text-[#10446C] font-semibold text-lg text-center mb-6">
                Your perfect match
              </h3>

              <div className="bg-[#0F3D5E] text-white rounded-2xl p-6 text-center flex flex-col gap-4 w-full flex-1 justify-between">
                <div>
                  <p className="text-[#F5C241] font-semibold">Recommended:</p>
                  <h4 className="text-xl font-bold mt-1">Fibre Plus 67Mb</h4>
                  <p className="text-sm text-gray-200 mt-3">
                    Perfect for your family size and British streaming habits –
                    Netflix, BBC iPlayer, and more!
                  </p>
                </div>

                <button
                  className="bg-[#F5C241] text-[#10446C] py-3 rounded-full font-semibold
            hover:scale-105 transition-transform"
                >
                  View This Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-screen bg-[#F5FAFF] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#10446C]">
            Choose Your Perfect Fibre Plan
          </h2>

          <p className="text-center text-gray-600 mt-2 max-w-2xl mx-auto">
            Superfast broadband packages designed for modern British homes
          </p>

          {/* Tabs */}
          <div className="mt-6 flex gap-3 justify-center flex-wrap">
            {["Speed", "Price", "Popularity", "Contract Length"].map(
              (tab, i) => (
                <button
                  key={tab}
                  className={`px-4 py-2 rounded-full text-sm border
            ${
              i === 0
                ? "bg-[#F5C241] text-[#10446C] border-[#F5C241]"
                : "bg-white text-gray-600 hover:bg-gray-100"
            }`}
                >
                  {tab}
                </button>
              ),
            )}
          </div>

          {/* Plans */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* CARD */}
            {[
              {
                title: "Zippy Essential",
                speed: "0.5 Mbps",
                price: "£22.00",
                desc: "Perfect for basic browsing",
              },
              {
                title: "Blitz Core",
                speed: "40/10 Mbps",
                price: "£35.00",
                desc: "Consistent fibre speeds",
              },
              {
                title: "Quantum Boost",
                speed: "115/20 Mbps",
                price: "£42.99",
                desc: "For fast downloads",
              },
              {
                title: "Supersonic Infinity",
                speed: "1000/115 Mbps",
                price: "£61.99",
                desc: "Ultra-fast speeds",
              },
            ].map((plan) => (
              <div
                key={plan.title}
                className={`rounded-2xl p-6 flex flex-col justify-between border hover:shadow-xl transition-all`}
              >
                <div>
                  <h3 className="font-semibold text-lg">{plan.title}</h3>

                  <p className={`mt-3 font-bold text-xl`}>{plan.speed}</p>

                  <p className="mt-1 text-sm opacity-80">Download / Upload</p>

                  <p className="mt-4 text-2xl font-bold">{plan.price}</p>

                  <p className="mt-2 text-sm opacity-80">{plan.desc}</p>

                  {/* Features */}
                  <ul className="mt-4 space-y-2 text-sm">
                    <li>✔ Email & social media</li>
                    <li>✔ UK usage cap</li>
                    <li>✔ Unlimited support</li>
                  </ul>
                </div>

                <button
                  className={`mt-6 py-3 rounded-xl font-semibold bg-[#10446C] text-white
              `}
                >
                  Choose This Package
                </button>
              </div>
            ))}
          </div>

          {/* View All */}
          <div className="mt-12 flex justify-center">
            <button className="px-8 py-3 rounded-full border border-[#10446C] text-[#10446C] hover:bg-[#10446C] hover:text-white transition">
              View All
            </button>
          </div>
        </div>
      </section>

      <section className="w-screen bg-[#FFD56A] py-14 px-4">
        <div className="max-w-7xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F3D5E]">
            Why Choose Zoiko Broadband
          </h2>

          <p className="text-sm md:text-base text-[#0F3D5E]/80 mt-2">
            We’re not just faster we’re fairer
          </p>

          {/* Cards container */}
          <div
            className="
        mt-10
        flex flex-col gap-6
        lg:grid lg:grid-cols-5 lg:gap-6
      "
          >
            {[
              { icon: "BT", text: "Powered by BT Wholesale" },
              { icon: "⟳", text: "Zero Data Caps" },
              { icon: "FREE", text: "No Setup Fees" },
              { icon: "⚙️", text: "Free Router with Every Plan" },
              { icon: "🇬🇧", text: "UK-Based Support" },
            ].map((item) => (
              <div
                key={item.text}
                className="
            bg-white
            rounded-3xl
            flex flex-col items-center justify-center
            px-6 py-10
            min-h-40
            shadow-sm
            hover:shadow-md
            transition
          "
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-[#F0F6FF] flex items-center justify-center mb-4">
                  <span className="font-bold text-[#6B4EFF]">{item.icon}</span>
                </div>

                {/* Text */}
                <p className="text-sm md:text-base font-semibold text-[#0F3D5E] text-center">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

     <section className="w-screen bg-linear-to-r from-[#0F3D5E] to-[#1C5FA8] py-16 px-4">
  <div className="max-w-6xl mx-auto text-center text-white">

    {/* Heading */}
    <h2 className="text-lg md:text-xl font-semibold text-[#F5C241]">
      Save up to 30% when you bundle Zoiko Broadband with:
    </h2>

    <p className="text-sm md:text-base text-white/80 mt-2 max-w-2xl mx-auto">
      Create your complete connected ecosystem with exclusive multiservice
      discounts for British families
    </p>

    {/* Bundle cards */}
    <div className="mt-12 flex flex-col lg:flex-row items-center justify-center gap-8">

      {/* Left Card */}
      <div className="bg-white text-[#10446C] rounded-2xl p-6 w-full max-w-sm shadow-lg">
        <img
          src="/zoiko-mobile.png"
          alt="Zoiko Mobile"
          className="mx-auto mb-4 h-10"
        />

        <h3 className="font-semibold text-lg">Zoiko Mobile</h3>

        <p className="text-sm text-gray-600 mt-2">
          Dual SIM plans with international roaming. Perfect for British
          expats and frequent travellers.
        </p>

        <button className="mt-4 px-6 py-2 rounded-full bg-[#10446C] text-white text-sm hover:bg-[#0F3D5E] transition">
          View Mobile
        </button>
      </div>

      {/* Connector – SAFE VERSION (desktop only) */}
      <div className="hidden lg:flex items-center justify-center">
        <div className="w-40 border-t-2 border-dashed border-white/40"></div>
      </div>

      {/* Right Card */}
      <div className="bg-white text-[#10446C] rounded-2xl p-6 w-full max-w-sm shadow-lg">
        <img
          src="/zoiko-orbit.png"
          alt="Zoiko Orbit"
          className="mx-auto mb-4 h-10"
        />

        <h3 className="font-semibold text-lg">Zoiko Orbit</h3>

        <p className="text-sm text-gray-600 mt-2">
          Global travel eSIMs for seamless connectivity. Stay connected
          from London to Lisbon and beyond.
        </p>

        <button className="mt-4 px-6 py-2 rounded-full bg-[#10446C] text-white text-sm hover:bg-[#0F3D5E] transition">
          View Orbit
        </button>
      </div>
    </div>

    {/* CTA */}
    <div className="mt-10">
      <button className="px-8 py-3 rounded-full bg-[#F5C241] text-[#10446C] font-semibold hover:scale-105 transition-transform">
        Explore Bundles
      </button>
    </div>

  </div>
</section>

      <section className="w-screen bg-[#F4F8FC] py-20 px-4">
  <div className="max-w-4xl mx-auto flex justify-center">

    {/* Card */}
    <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-6 sm:p-8 text-center">

      {/* Icon */}
      <div className="w-14 h-14 mx-auto rounded-full bg-[#F5C241] flex items-center justify-center mb-4">
        <svg
          className="w-6 h-6 text-[#10446C]"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10.707 1.293a1 1 0 00-1.414 0l-7 7A1 1 0 003 9h1v7a1 1 0 001 1h4a1 1 0 001-1v-4h2v4a1 1 0 001 1h4a1 1 0 001-1V9h1a1 1 0 00.707-1.707l-7-7z" />
        </svg>
      </div>

      {/* Text */}
      <h2 className="text-lg sm:text-xl font-bold text-[#10446C]">
        Let’s see if we’re in your area
      </h2>

      <p className="text-sm text-gray-600 mt-2">
        Enter your postcode to check availability and get results in seconds
      </p>

      {/* Form */}
      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          placeholder="Enter your postcode (e.g. SW1A 1AA)"
          className="flex-1 px-4 py-3 rounded-xl border border-gray-300
            focus:outline-none focus:ring-2 focus:ring-[#F5C241]"
        />

        <button
          className="px-6 py-3 rounded-xl bg-[#F5C241] text-[#10446C]
            font-semibold hover:bg-[#E6B93A] transition"
        >
          Check Now
        </button>
      </div>

    </div>
  </div>
</section>

 {/* TESTIMONIAL SLIDER SECTION */}
      <section className="w-full border-t-2 border-amber-200 bg-[#F8FAFF] py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-2xl font-bold text-[#10446C]">
          What they say about us
        </h2>
        <p className="text-sm text-gray-500 mt-2">
          Choose your package
        </p>

        {/* SLIDER */}
        <div className="mt-12 overflow-hidden">
          <div className="flex justify-center gap-6">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className={`w-full max-w-sm transition-all duration-300
                  ${
                    index === active
                      ? "bg-[#0F3D5E] text-white scale-100"
                      : "bg-white text-gray-600 opacity-60"
                  } rounded-2xl p-6`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                  <div>
                    <h4 className="font-semibold">
                      {item.name}
                    </h4>
                    <p className="text-xs opacity-70">
                      {item.role}
                    </p>
                  </div>
                </div>

                <p className="text-sm leading-relaxed">
                  “{item.text}”
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all
                ${i === active ? "w-6 bg-[#10446C]" : "w-2 bg-gray-300"}
              `}
            />
          ))}
        </div>
      </div>
    </section>

    </div>
  );
}
