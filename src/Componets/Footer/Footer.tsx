
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="relative z-10 w-full text-gray-400 py-12 px-4 md:px-16 bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="text-sm mb-6 hover:underline cursor-pointer"
          whileHover={{ scale: 1.02 }}
        >
          Questions? Contact us
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <ul className="space-y-3">
            {["FAQ", "Investor Relations", "Privacy", "Speed Test"].map(
              (item) => (
                <motion.li
                  key={item}
                  className="hover:underline cursor-pointer text-sm"
                  whileHover={{ x: 5 }}
                >
                  {item}
                </motion.li>
              )
            )}
          </ul>

          <ul className="space-y-3">
            {["Help Center", "Jobs", "Cookie Preferences", "Legal Notices"].map(
              (item) => (
                <motion.li
                  key={item}
                  className="hover:underline cursor-pointer text-sm"
                  whileHover={{ x: 5 }}
                >
                  {item}
                </motion.li>
              )
            )}
          </ul>

          <ul className="space-y-3">
            {[
              "Account",
              "Ways to Watch",
              "Corporate Information",
              "Only on Netflix",
            ].map((item) => (
              <motion.li
                key={item}
                className="hover:underline cursor-pointer text-sm"
                whileHover={{ x: 5 }}
              >
                {item}
              </motion.li>
            ))}
          </ul>

          <ul className="space-y-3">
            {["Media Center", "Terms of Use", "Contact Us"].map((item) => (
              <motion.li
                key={item}
                className="hover:underline cursor-pointer text-sm"
                whileHover={{ x: 5 }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.div
          className="border-t border-gray-800 pt-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-xs mb-2">
            © 2025 Netflix Clone, Inc. All rights reserved.
          </p>
          <p className="text-xs">
            This website is a clone created for educational purposes and is not
            affiliated with Netflix, Inc.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
