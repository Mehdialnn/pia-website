"use client"

import { ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: "What is Pia?",
      answer:
        "Pia is a platform designed to help consultants and coaches seamlessly connect with their clients through secure video and voice calls. It offers tools for scheduling, client management, and secure communication, as well as payment management.",
    },
    {
      question: "How can my clients call me?",
      answer:
        "Once you've created your profile, Pia generates a personal link. Share it with clients and they can book or join instantly from their browser. No app download required for clients.",
    },
    {
      question: "How do I get paid?",
      answer:
        "Pia includes built-in payment processing. You can set your rates and receive payments directly through the platform.",
    },
    {
      question: "What are the fees?",
      answer:
        "Selected early creators can access a 0% intro platform fee. Standard pricing is 20% per transaction, and your fee setup is always visible before you start charging clients.",
    },
    {
      question: "Do my clients need to install Pia?",
      answer:
        "No. Clients can join directly from your booking/call link in any modern browser. You can start calls without forcing app installation on their side.",
    },
  ]

  return (
    <section className="bg-[#0A0A0A] py-20 sm:py-24 lg:py-28 px-4 sm:px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">Have another question? Please contact our team!</p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-[#1A1A1A] rounded-xl overflow-hidden transition-all duration-300 border ${
                openIndex === index ? "border-pink-500/50" : "border-transparent"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between text-left hover:bg-[#1F1F1F] transition-colors"
              >
                <span className="text-white text-base sm:text-xl font-semibold pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-4 sm:px-8 pb-4 sm:pb-6">
                  <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
