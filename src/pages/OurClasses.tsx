import { ClassType, SelectedPage } from "@/shared/enum";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/components/header/HText";
import Class from "@/components/ImageClass/Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Unleash your strength and sculpt your physique with our invigorating Weight Training Classes. Led by experienced instructors, these classes are crafted to empower individuals of all fitness levels with the knowledge and techniques needed to master the art of weight training",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description:
      "Embark on a journey of self-discovery and holistic wellness with our rejuvenating Yoga Classes. Immerse yourself in a tranquil space where experienced instructors guide you through a variety of yoga practices, from energizing Vinyasa flows to calming meditation sessions.",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Define your core and sculpt a strong foundation with our invigorating Ab Core Classes. Led by skilled instructors, these classes are tailored to target and tone your abdominal muscles, helping you achieve a more resilient and sculpted midsection.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Embark on a fitness journey like no other with our exhilarating Adventure Classes. Designed to inject excitement into your workout routine, these classes offer a dynamic mix of challenges, from obstacle courses to team-building activities.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description:
      "Achieve your health and wellness goals with our diverse range of Fitness Classes. From high-intensity workouts to mind-body practices, our classes cater to all fitness levels and preferences. Led by expert instructors, each session is crafted to boost endurance, strength, and flexibility.",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Unlock your full potential with our empowering Training Classes. Led by certified trainers, these classes provide a focused and personalized approach to help you meet your fitness goals.",
    image: image6,
  },
];
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Step into a world of dynamic fitness experiences with 'Our
              Classes' at our gym. Designed to cater to a variety of preferences
              and fitness levels, our classes offer an exciting range of
              workouts led by expert instructors.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
