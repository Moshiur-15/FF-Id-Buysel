'use client'
import React, { useEffect, useState } from 'react';
import { Zap, Shield, Users, Star, ChevronDown, MessageCircle, Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import IdCard from './IdCard';
import GetData from './Api/page';
import { Spinner } from '@/components/ui/spinner';


const Home = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

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
      <section id="home" className="relative overflow-hidden bg-white">
        <div className="px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Buy & Sell
              <span className="text-black"> Free Fire IDs</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              The most trusted marketplace for Free Fire accounts. Find high-rank IDs with rare skins, diamonds, and exclusive items.
            </p>
            <Link href='/allIds' className="">
              <button className="bg-black text-white px-9 py-2.5 rounded font-medium text-lg hover:bg-gray-800 active:scale-95 duration-300">
                Browse IDs
              </button>
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
    </div>
  );
};

export default Home;