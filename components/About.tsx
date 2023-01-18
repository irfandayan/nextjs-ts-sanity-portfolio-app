import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="flex flex-col relative text-center md:text-left md:flex-row items-center h-screen max-w-7xl px-10 justify-evenly mx-auto"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
        }}
        className="rounded-full md:rounded-lg -mb-20 md:mb-0 flex-shrink-0 w-56 h-56  object-cover md:w-64 md:h-96 xl:w-[500px] xl:h-[600px] "
        src="assets/irfandayan.jpg"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]">litle</span>{" "}
          background
        </h4>
        <p className="text-sm">
          I'm senior Full Stack Engineer working in web development field for
          last 10+ years and have great passion for modern web development. I've
          worked on hundred of web projects for my happy clients, I mean 'HAPPY'
          clients.
        </p>
      </div>
    </motion.div>
  );
}
