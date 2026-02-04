import Link from 'next/link'

export default function Footer() {
  return (
    <div className="bg-[#19598b] w-full border-t-2 p-5">
        <div className="footer-items w-full flex-col md:flex md:flex-row justify-between mx-auto p-5 md:p-10">
            <div>
                <h1 className='text-2xl md:text-3xl text-[#f5c241] font-bold my-3'>Zoiko Broadband</h1>
                <ul className="text-[#CBD5E1] text-lg md:text-xl font-normal leading-8">
                    <li><Link href="/HomeB">Home Broadband</Link></li>
                    <li><Link href="/BusinessB">Business Broadband</Link></li>
                    <li><Link href="/SmartBundles">Smart Bundles</Link></li>
                    <li><Link href="/DigitalLines">Digital Lines</Link></li>
                    <li><Link href="/AllPlans">All Plans</Link></li>
                    <li><Link href="/AllPlans">Check my postcode</Link></li>
                    <li><Link href="/AllPlans">Refer a friend</Link></li>
                </ul>
            </div>

            <div>
                <h1 className='text-2xl md:text-3xl text-[#f5c241] font-bold my-3'>Support</h1>
                <ul className="text-[#CBD5E1] text-lg md:text-xl font-normal leading-8">
                    <li><Link href="/GetHelp">Get Help</Link></li>
                    <li><Link href="/SetupInstallation">Setup & Installation</Link></li>
                    <li><Link href="/ManageAccount">Manage My Account</Link></li>
                    <li><Link href="/PaymentsBilling">Payments & Billing</Link></li>
                    <li><Link href="/ReportFault">Report a Fault</Link></li>
                </ul>
            </div>

            <div>
                <h1 className='text-2xl md:text-3xl text-[#f5c241] font-bold my-3'>Legal</h1>
                <ul className="text-[#CBD5E1] text-lg md:text-xl font-normal leading-8">
                    <li><Link href="/TermsConditions">Terms & Conditions</Link></li>
                    <li><Link href="/PrivacyPolicy">Privacy Policy</Link></li>
                    <li><Link href="/FairUsePolicy">Cookies Policy</Link></li>
                    <li><Link href="/CookiePolicy">Ofcom Speed Commitment</Link></li>
                    <li><Link href="/CriticalInformation">Accessibility Statement</Link></li>
                </ul>
            </div>

            <div>
                <h1 className='text-2xl md:text-3xl text-[#f5c241] font-bold my-3'>Our Company</h1>
                <ul className="text-[#CBD5E1] text-lg md:text-xl font-normal leading-8">
                    <li><Link href="/AboutUs">About Zoiko Broadband</Link></li>
                    <li><Link href="/Sustainability">Our Sustainability Promise</Link></li>
                    <li><Link href="/Careers">Careers at Zoiko</Link></li>
                    <li><Link href="/ZoikoGroup">Zoiko Group</Link></li>
                    <li><Link href="/PartnersAffiliations">Partners & Affiliations</Link></li>
                </ul>
            </div>
        </div>
        <div className="text-center p-5 border-t-2 text-white w-[90%] mx-auto">
           <p className="font-semibold">&copy; 2026 Zoiko Broadband | Zoiko Broadband is a trading name of Zoiko Telecom Ltd., registered in England & Wales | Company No. 15021457 | VAT No 465 1110 23 |</p> 
           <p className="font-semibold"> All rights reserved.  Zoiko Telecom Ltd is Ofcom registered and adheres to the Broadband Speeds Code of Practice.</p>
        </div>
    </div>
  )
}
