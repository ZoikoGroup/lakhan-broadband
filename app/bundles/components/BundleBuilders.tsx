import React from "react";
import Image from "next/image";
import Link from "next/link";
const bundleServices = [
              {
                src: "/Images/Bundles/globe.png",
                label: "Zoiko Broadband",
                description: "Ultrafast Fibre",
                price: "£29.99/month",
              },
              {
                src: "/Images/Bundles/telephone.png",
                label: "Digital Lines",
                description: "HD Voice & Smart Features",
                price: "£14.99/month",
              },
            ]

export default function BundleBuilders() {
  return (
    <>
      <section
  aria-labelledby="bundle-builder-heading"
  className="w-full py-12 px-6 sm:px-10"
>
  <div className="max-w-7xl mx-auto text-center">

    <h2
      id="bundle-builder-heading"
      className="text-2xl sm:text-3xl font-bold text-[#10446C]"
    >
      Interactive Bundle Builder
    </h2>

    <p className="text-gray-500 text-base sm:text-lg leading-relaxed mt-3 mb-8 max-w-xl mx-auto">
      Real-time pricing, select services, see instant savings.
    </p>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      {bundleServices.map((item) => (
        <article
          key={item.label}
          className="bg-white rounded-2xl shadow-sm border border-gray-100 px-6 py-10 flex flex-col items-center gap-5 hover:shadow-lg transition"
        >
          <Image
            src={item.src}
            alt={item.label}
            width={100}
            height={100}
            className="w-16 sm:w-20 h-auto object-contain"
          />

          <h3 className="text-lg lg:text-xl font-bold text-[#10446C] text-center">
            {item.label}
          </h3>

          <p className="text-sm lg:text-base text-[#10446C] text-center">
            {item.description}
          </p>

          <p className="text-xl font-bold text-[#F5C241]">
            {item.price}
          </p>

          <Link
            href="/plans"
            aria-label={`Add ${item.label} to bundle`}
            className="bg-[#10446C] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0d3a5a] transition"
          >
            Add to Bundle
          </Link>
        </article>

      ))}

      {/* Bundle Summary Card */}
      <article className="bg-white rounded-2xl shadow-sm border border-gray-100 px-6 py-10 text-left">
        <h3 className="text-lg md:text-xl font-bold text-[#10446C] mb-4">
          Your Bundle
        </h3>

        <p className="text-gray-500 text-base md:text-lg mb-4">
          Select services to see your bundle
        </p>

        <hr className="mb-4"/>

        <div className="space-y-2 text-base md:text-lg">
          <div className="flex justify-between">
            <span>Individual Price:</span>
            <span>£0.00</span>
          </div>

          <div className="flex justify-between font-semibold text-[#10446C]">
            <span>Bundle Price:</span>
            <span>£0.00</span>
          </div>

          <div className="flex justify-between text-[#F5C241] font-semibold">
            <span>You Save:</span>
            <span>£0.00</span>
          </div>
        </div>
      </article>

    </div>
  </div>
</section>
    </>
  );
}
