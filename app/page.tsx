import Image from "next/image";
import PlansTabs from "./Components/PlansTabs";
import TestimonialLoader from "./Components/TestimonialLoader";

export default function Home() {
  // All plans data
  const allPlans = [
    {
      title: "Zippy Essential",
      speed: "0.5 Mbps",
      downloadSpeed: "0.5",
      uploadSpeed: "0.5",
      price: 22.0,
      priceDisplay: "£22.00",
      desc: "Download Speed",
      features: [
        "Perfect for basic browsing",
        "Email & social media",
        "No usage caps",
        "UK-based support",
      ],
      popularity: 2,
      contractLength: 12,
      badge: null,
    },
    {
      title: "Blitz Core",
      speed: "40/10 Mbps",
      downloadSpeed: "40",
      uploadSpeed: "10",
      price: 35.0,
      priceDisplay: "£35.00",
      desc: "Download Speed",
      features: [
        "Consistent fibre speeds",
        "Low latency gaming",
        "Multiple HD streams",
        "Free router & installation",
      ],
      popularity: 3,
      contractLength: 18,
      badge: null,
    },
    {
      title: "Quantum Boost",
      speed: "115/20 Mbps",
      downloadSpeed: "115",
      uploadSpeed: "20",
      price: 42.99,
      priceDisplay: "£42.99",
      desc: "Download Speed",
      features: [
        "Ultra-low downloads",
        "Perfect for home offices",
        "Seamless video conferencing",
        "Advanced router included",
      ],
      popularity: 4,
      contractLength: 24,
      badge: "FULL FIBRE",
    },
    {
      title: "Supersonic Infinity",
      speed: "1000/115 Mbps",
      downloadSpeed: "1000",
      uploadSpeed: "115",
      price: 61.99,
      priceDisplay: "£61.99",
      desc: "Download Speed",
      features: [
        "Gigabit speeds",
        "Future-proof technology",
        "Unlimited potential",
        "White-glove service",
      ],
      popularity: 5,
      contractLength: 24,
      badge: "FULL FIBRE",
    },
  ];

  return (
    <div className="-mt-20 md:-mt-24 lg:-mt-28">
      {/* Hero - section ..*/}
      <section className="w-full mt-25 bg-[#19598b] flex flex-col lg:flex-row items-start lg:items-center justify-center gap-10  px-5 sm:px-10 md:px-16 lg:px-32 py-12 ">
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          {/* Row 1 */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
            {/* <img
              className="h-10 sm:h-12 w-auto"
              src="/hero-pic-left.png"
              alt="hero-pic-left"
            /> */}

            <Image
              src="/Images/hero-pic-left.png"
              alt="Decorative hero accent"
              width={150}
              height={60}
              className="h-10 sm:h-12 w-auto"
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
          {/* <img
            className="w-full max-w-md sm:max-w-lg lg:max-w-xl rounded-2xl border-2 border-blue-950"
            src="/hero-pic-right.jpg"
            alt="hero-pic-right"
          /> */}

          <Image
            src="/Images/hero-pic-right.jpg"
            alt="Hero"
            width={900}
            height={600}
            priority
            fetchPriority="high"
            className="w-full max-w-md sm:max-w-lg lg:max-w-xl rounded-2xl border-2 border-blue-950"
          />
        </div>
      </section>

      {/* Find your plan .. */}
      <section className="w-full bg-[#E5F0FF] py-16 px-4">
        <div className="max-w-6xl mx-auto bg-white border-t-4 border-[#10446C] rounded-3xl p-6 md:p-10">
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
        min-h-105 hover:shadow-xl transition-all duration-300"
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
        min-h-105 hover:shadow-xl transition-all duration-300"
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
        min-h-105 hover:shadow-xl transition-all duration-300"
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

      {/* Choose your plan .. */}
      <PlansTabs plans={allPlans} />

      {/* Why choose zoiko .. */}
      <section className="w-full bg-[#FFD56A] py-14 px-4">
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

      {/* Explore bundles .. */}
      <section className="w-full bg-[#19598b] py-16 px-4">
        <div className="max-w-6xl mx-auto text-center text-white">
          {/* Heading */}
          <h2 className="text-lg md:text-xl font-semibold text-[#F5C241]">
            Save up to 30% when you bundle Zoiko Broadband with:
          </h2>

          <p className="text-sm md:text-base text-white/90 mt-2 max-w-2xl mx-auto">
            Create your complete connected ecosystem with exclusive multiservice
            discounts for British families
          </p>

          {/* Bundle cards */}
          <div className="mt-12 flex flex-col lg:flex-row lg:items-start sm:items-center justify-center gap-8">
            {/* Left Card - Zoiko Mobile */}
            <div className="text-white rounded-2xl p-6 w-full max-w-sm">
              {/* Logo with white background */}
              <div className="bg-white rounded-xl p-3 w-fit mx-auto mb-4">
                {/* <img src="/ZM-logo.png" alt="Zoiko Mobile" className="h-10" /> */}
                <Image
                  src="/Images/ZM-logo.png"
                  alt="Zoiko Mobile"
                  width={160}
                  height={60}
                  className="h-10 w-auto"
                  loading="lazy"
                />
              </div>

              <h3 className="font-semibold text-[#F5C241] text-lg">
                Zoiko Mobile
              </h3>

              <p className="text-sm text-white mt-2">
                Dual SIM plans with international roaming. Perfect for British
                expats and frequent travellers.
              </p>

              <button className="mt-4 px-6 py-2 rounded-full bg-[#F5C241] text-[#10446C] text-sm font-semibold hover:bg-[#E6B93A] transition">
                View Mobile
              </button>
            </div>

            {/* Connector – Dashed Line (desktop only) */}
            <div className="hidden lg:flex items-start justify-center pt-10">
              <div className="w-40 border-t-2 border-dashed border-white"></div>
            </div>

            {/* Right Card - Zoiko Orbit */}
            <div className="text-white rounded-2xl p-6 w-full max-w-sm">
              {/* Logo with white background */}
              <div className="bg-white rounded-xl p-3 w-fit mx-auto mb-4">
                {/* <img src="/ZO-Logo.png" alt="Zoiko Orbit" className="h-10" /> */}
                <Image
                  src="/Images/ZO-Logo.png"
                  alt="Zoiko Orbit"
                  width={160}
                  height={60}
                  className="h-10 w-auto"
                  loading="lazy"
                />
              </div>

              <h3 className="font-semibold text-[#F5C241] text-lg">
                Zoiko Orbit
              </h3>

              <p className="text-sm text-white mt-2">
                Global travel eSIMs for seamless connectivity. Stay connected
                from London to Lisbon and beyond.
              </p>

              <button className="mt-4 px-6 py-2 rounded-full bg-[#F5C241] text-[#10446C] text-sm font-semibold hover:bg-[#E6B93A] transition">
                View Orbit
              </button>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-10">
            <button className="px-8 py-3 rounded-full bg-[#F5C241] text-[#10446C] font-semibold hover:scale-105 transition-transform">
              Explore Bundles
            </button>
          </div>
        </div>
      </section>

      {/* Check your postcode */}
      <section className="w-full bg-[#F4F8FC] py-20 px-4">
        <div className="max-w-4xl mx-auto flex justify-center">
          {/* Card */}
          <div className="w-full max-w-xl bg-white border-t-4 border-b-blue-900 rounded-2xl shadow-lg p-6 sm:p-8 text-center">
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
              Enter your postcode to check availability and get results in
              seconds
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
      <TestimonialLoader />
    </div>
  );
}
