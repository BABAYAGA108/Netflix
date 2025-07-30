import  { useState } from "react";
import { motion } from "framer-motion";

const FAQDropdown = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-700">
      <button
        className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={`faq-${question.replace(/\s+/g, "-")}`}
      >
        <span className="text-lg font-semibold">{question}</span>
        <svg
          className={`w-6 h-6 transition-transform duration-200 ${
            open ? "rotate-45" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          id={`faq-${question.replace(/\s+/g, "-")}`}
          className="text-gray-300 pb-4"
        >
          {answer}
        </motion.div>
      )}
    </div>
  );
};

const FAQSection = () => (
  <div className="relative z-10 w-full text-white text-start py-8 px-4 bg-black">
    <h2 className="text-2xl mb-6 px-4">Frequently Asked Questions</h2>
    <div className="container mx-auto w-full flex flex-col gap-2">
      <div className="bg-[rgb(38,38,38)] rounded px-4">
        <FAQDropdown
          question="What is Netflix?"
          answer="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more. You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"
        />
      </div>

      <div className="bg-[rgb(38,38,38)] rounded px-4">
        <FAQDropdown
          question="How much does Netflix cost?"
          answer="Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $8.99 to $17.99 a month."
        />
      </div>

      <div className="bg-[rgb(38,38,38)] rounded px-4">
        <FAQDropdown
          question="Where can I watch?"
          answer="Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device."
        />
      </div>

      <div className="bg-[rgb(38,38,38)] rounded px-4">
        <FAQDropdown
          question="How do I cancel?"
          answer="Netflix is flexible. There are no pesky contracts to tie you down. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
        />
      </div>

      <div className="bg-[rgb(38,38,38)] rounded px-4">
        <FAQDropdown
          question="What can I watch on Netflix?"
          answer="Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, whenever you want."
        />
      </div>

      <div className="bg-[rgb(38,38,38)] rounded px-4">
        <FAQDropdown
          question="Is Netflix good for kids?"
          answer="The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space."
        />
      </div>
    </div>
  </div>
);

export default FAQSection;
