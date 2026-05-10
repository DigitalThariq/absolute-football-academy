"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Absolute Football Academy?",
    answer: "Absolute Football Academy is a modern youth football academy focused on developing confident, disciplined, and technically strong players aged 8 to 14 through professional European-inspired coaching methods."
  },
  {
    question: "What age groups do you accept?",
    answer: "We currently offer structured football development programs for: Ages 8–10, Ages 11–12, and Ages 13–14."
  },
  {
    question: "Does my child need football experience?",
    answer: "No experience is required. We welcome beginners, intermediate, and advanced players. Our coaching system is designed to help every player improve at their own level."
  },
  {
    question: "What do players learn during training?",
    answer: "Players develop football technique, tactical awareness, fitness, teamwork, confidence, leadership, discipline, and match intelligence through structured training sessions."
  },
  {
    question: "Are trial sessions available?",
    answer: "Yes. We offer free trial sessions so parents and players can experience our coaching environment before joining the academy."
  },
  {
    question: "How many training sessions are conducted weekly?",
    answer: "Depending on the program selected, players may attend 2 to 4 training sessions weekly along with friendly matches and development games."
  },
  {
    question: "Are parents allowed to watch training?",
    answer: "Yes. Parents are welcome to observe designated sessions while helping us maintain a focused and positive training environment."
  },
  {
    question: "What should players bring to training?",
    answer: "Players should bring football boots, shin guards, a water bottle, comfortable training attire, and a positive mindset."
  },
  {
    question: "What makes Absolute Football Academy different?",
    answer: "We focus on more than football. Our academy develops discipline, confidence, leadership, teamwork, and strong character while preparing young athletes for higher levels of the game."
  },
  {
    question: "How can parents register their child?",
    answer: "Parents can register through our website, WhatsApp enquiry, or by booking a free trial session with our coaching team."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#030816] px-[8%] py-[100px] text-white">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-[60px]">
          <span className="inline-block bg-[#0d1f3d] text-[#35b6ff] px-[18px] py-[8px] rounded-[30px] text-[12px] tracking-[2px] mb-[20px] uppercase font-semibold">
            ABSOLUTE FOOTBALL ACADEMY
          </span>
          <h2 className="text-[38px] md:text-[52px] font-extrabold mb-[20px]">
            Frequently Asked Questions
          </h2>
          <p className="text-[#9aa4b2] max-w-[700px] mx-auto leading-[1.8]">
            Everything parents and young players need to know about joining Singapore’s modern youth football development academy.
          </p>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[rgba(10,20,45,0.8)] border border-[rgba(53,182,255,0.15)] rounded-[18px] mb-[18px] overflow-hidden transition-all duration-300 hover:border-[#35b6ff] hover:shadow-[0_0_25px_rgba(53,182,255,0.15)]"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full bg-transparent border-none text-white text-left p-[25px] text-[17px] md:text-[20px] font-bold cursor-pointer flex justify-between items-center"
              >
                {faq.question}
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 ml-4 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-[25px] pb-[25px] text-[#aab4c3] leading-[1.8] text-[16px]">
                      <p>{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
