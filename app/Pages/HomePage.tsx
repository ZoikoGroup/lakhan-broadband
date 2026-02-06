import React from "react";

export default function HomePage() {
  return (
    <main className="w-full bg-[#19598b] flex flex-col lg:flex-row items-start lg:items-center justify-center gap-10 px-5 sm:px-10 md:px-16 lg:px-32 py-12 lg:min-h-[80vh]">
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
        <h1
          className="text-[#F5C241] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight max-w-xl">
          BT's Tier-1 Backbone <br />
          From Just £22/month
        </h1>

        {/* Row 3 */}
        <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed mb-6 max-w-xl">
          Experience lightning-fast broadband with unbeatable reliability,
          UK-based support, and prices that won’t break the bank. Join thousands
          of happy British homes already connected.
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
    </main>
  );
}
