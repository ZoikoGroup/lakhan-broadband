"use client";
import { SetStateAction, useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const footerSections = [
    {
      id: "broadband",
      title: "Zoiko Broadband",
      links: [
        { name: "Home Broadband", href: "/home-broadband" },
        { name: "Business Broadband", href: "/business-broadband" },
        { name: "Smart Bundles", href: "/smart-bundles" },
        { name: "Digital Lines", href: "/digital-lines" },
        { name: "Check my postcode", href: "/check-mypost" },
        { name: "Refer a friend", href: "/refer-friend" },
      ],
    },
    {
      id: "support",
      title: "Support",
      links: [
        { name: "Get Help", href: "/get-help" },
        { name: "Setup & Installation", href: "/setup-installation" },
        { name: "Manage My Account", href: "/manage-account" },
        { name: "Payments & Billing", href: "/payments-billing" },
        { name: "Report a Fault", href: "/report-fault" },
        { name: "Contact Us", href: "/contact-us" },
      ],
    },
    {
      id: "legal",
      title: "Legal",
      links: [
        { name: "Terms & Conditions", href: "/terms-conditions" },
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Cookies Policy", href: "/cookies-policy" },
        { name: "Ofcom Speed Commitment", href: "/ofcom-speed-commitment" },
        { name: "Accessibility Statement", href: "/accessibility-statement" },
      ],
    },
    {
      id: "company",
      title: "Our Company",
      links: [
        { name: "About Zoiko Broadband", href: "/aboutus" },
        { name: "Our Sustainability Promise", href: "/sustainability" },
        { name: "Careers at Zoiko", href: "/careers" },
        { name: "Zoiko Group", href: "/zoiko-group" },
        { name: "Partners & Affiliations", href: "/partners-affiliations" },
      ],
    },
  ];

  return (
    <div className="bg-[#10446C] w-full border-t-2 p-3">
      <div className="footer-items w-9/10 mx-auto p-5 md:p-10">
        {/* Desktop View - Standard Layout */}
        <div className="hidden lg:flex lg:flex-row justify-between">
          {footerSections.map((section) => (
            <div key={section.id}>
              <h1 className="text-2xl md:text-2xl text-[#f5c241] font-bold my-3">
                {section.title}
              </h1>
              <ul className="text-[#CBD5E1] text-lg md:text-lg font-normal leading-10">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="hover:text-[#f5c241] transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile View - Accordion Layout */}
        <div className="lg:hidden flex flex-col gap-2">
          {footerSections.map((section) => (
            <div key={section.id} className="border-b border-[#2a6d9e]">
              {/* Section Header - Clickable */}
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex items-center justify-between py-4 text-left"
              >
                <h2 className="text-xl text-[#f5c241] font-bold">
                  {section.title}
                </h2>
                {/* Chevron Icon */}
                <svg
                  className={`w-5 h-5 text-[#f5c241] transition-transform duration-300 ${
                    openSection === section.id ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Section Links - Collapsible */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openSection === section.id
                    ? "max-h-96 opacity-100 pb-4"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="text-[#CBD5E1] text-base font-normal leading-7 space-y-2">
                  {section.links.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="hover:text-[#f5c241] transition-colors block py-1"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Bottom - Copyright */}
      <div className="text-center p-2 border-t-2 text-white w-[90%] mx-auto">
        <p className="font-semibold text-sm md:text-base">
          &copy; 2026 Zoiko Broadband | Zoiko Broadband is a trading name of
          Zoiko Telecom Ltd., registered in England & Wales | Company No.
          15021457 | VAT No 465 1110 23|
        </p>
        <p className="font-semibold text-sm md:text-base">
          All rights reserved. Zoiko Telecom Ltd is Ofcom registered and adheres
          to the Broadband Speeds Code of Practice.
        </p>
      </div>
    </div>
  );
}