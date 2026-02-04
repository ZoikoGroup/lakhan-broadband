'use client';
import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

export default function Home() {


  return (
    <>
    <Header/>
     <main className="min-h-[70vh] bg-[#19598b] flex items-center justify-center">
      <h1 className="text-4xl text-white font-bold">Welcome to Zoiko Broadband</h1>
      </main>
    <Footer/>
    </>
  );
}
