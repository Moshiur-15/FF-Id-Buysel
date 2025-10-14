'use client'
import React, { useEffect, useState } from 'react';
import { Zap, Shield, Users, Star, ChevronDown, MessageCircle, Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import IdCard from './IdCard';
import GetData from './Api/page';
import { Spinner } from '@/components/ui/spinner';
import CarouselBackground from './CarouselBackground';
import { Button } from '@/components/ui/button';
import { useSession } from 'next-auth/react';



const Home = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const {data } = useSession()
  console.log(data);

  const faqs = [
    {
      question: "How does the Free Fire ID buying process work?",
      answer: "Simply browse our verified listings, contact the seller through our secure platform, make payment through our escrow service, and receive your account details once the transaction is confirmed."
    },
    {
      question: "Is it safe to buy Free Fire accounts here?",
      answer: "Yes! We use secure escrow services, verify all sellers, and provide buyer protection. All transactions are monitored for safety and authenticity."
    },
    {
      question: "What information do I get with a purchased account?",
      answer: "You'll receive the account email, password, and all necessary details to access your new Free Fire account. We also provide a transfer guide."
    },
    {
      question: "Can I sell my Free Fire account?",
      answer: "Absolutely! Create a seller account, list your Free Fire ID with details like rank, level, diamonds, and skins. Our team will verify and approve your listing."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept major credit cards, PayPal, bank transfers, and popular digital wallets. All payments are processed securely through our platform."
    }
  ];

  const [Ids, setIds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const Ids = await GetData();
        setIds(Ids);
      }
      catch (err) {
        console.log(err);
        setIds([]);
      }
      finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen">


      {/* Banner/Hero Section */}
      <section id="home" className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
        {/* Carousel Background */}
        <div className="absolute inset-0">
          <CarouselBackground />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-32 md:py-40">
          <div className="text-center">
            <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-[0_4px_15px_rgba(59,130,246,0.4)]">
              Rezvi Buy & Sell
              <span className="ml-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-600 mt-2 border-b-4 border-indigo-500 inline-block">
                FREE FIRE IDs
              </span>
            </h1>
            <p className="text-lg lg:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto drop-shadow-lg">
              The most trusted marketplace for Free Fire accounts. Find high-rank IDs with rare skins, diamonds, and exclusive items.
            </p>
            <Link href='/allIds'>
              <Button className="px-10 py-6 font-semibold text-lg rounded-none bg-gray-600 hover:cursor-pointer active:scale-95">
                Browse IDs Now
              </Button>
            </Link>
          </div>
        </div>
      </section>


      {/* Recent IDs */}
      <section id="recent" className="py-16 bg-gray-100">
        <div className="px-4 sm:px-6 lg:px-8 container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Recent Free Fire IDs</h2>
            <p className="text-gray-600 text-lg max-w-xl mx-auto">Find the latest Free Fire accounts for sale, all verified and ready for instant purchase.</p>
          </div>

          <div>
            {loading ? (
              <Spinner />
            ) : Ids.length === 0 ? (
              <div>
                <h2 className="text-2xl flex justify-center items-center text-red-500 font-bold h-80 border">
                  Data Not Found...
                </h2>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {Ids.slice().reverse().slice(0, 6)?.map(account => (
                  <div key={account._id}>
                    <IdCard account={account} />
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link href='/allIds'>
            <button className='mt-10 text-nowrap active:scale-95 px-10 py-1.5 mx-auto border-none rounded-none flex justify-center items-center cursor-pointer shadow-[inset_0_0_10px_rgba(100,130,246,0.9)] hover:inset-shadow-none transition-all duration-700 hover:bg-gray-300 font-bold'>
              View All Ids
            </button>
          </Link>

        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-white container mx-auto">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-lg max-w-lg mx-auto">
              Everything you need to know about buying and selling Free Fire accounts
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-10 items-center w-full md:h-[400px]">
            {/* Left Side Image */}
            <div className="flex justify-center md:w-1/2 h-full">
              <img
                src="/563dd4c11d7f61ef99c1b8d1892bd759.jpg"
                alt="FAQ Illustration"
                className="rounded shadow w-full"
              />
            </div>
            {/* Right Side FAQ */}
            <div className="space-y-4 md:w-1/2">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded border border-gray-200 shadow w-full"
                >
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100 transition-colors rounded-xl"
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  >
                    <span className="text-black font-medium">{faq.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-black transition-transform ${openFAQ === index ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <div className="absolute inset-0">
        <div className="absolute top-2/3 left-3/4 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-indigo-600/30 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
    </div>
  );
};

export default Home;