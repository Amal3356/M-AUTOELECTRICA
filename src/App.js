import { useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function HomePage() {
  useEffect(() => {
    document.title = "MTech Automotive Electronics";
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white p-6">
      <header className="text-center py-10">
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          MTech Automotive Electronics
        </motion.h1>
        <motion.p
          className="text-lg text-gray-400"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Explore innovation in automotive technology, systems, and embedded solutions.
        </motion.p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: "ADAS (Advanced Driver Assistance Systems)",
            desc: "Real-time vehicle perception and intelligent decision-making."
          },
          {
            title: "Electric Powertrain",
            desc: "Explore electric drive systems, battery management, and control units."
          },
          {
            title: "Automotive Embedded Systems",
            desc: "Design and programming of microcontrollers and automotive ECUs."
          },
          {
            title: "Vehicle Networks",
            desc: "CAN, LIN, FlexRay, and Ethernet-based in-vehicle communication."
          },
          {
            title: "Automotive Sensors & Actuators",
            desc: "Understanding sensor fusion and actuator control in real-world vehicles."
          },
          {
            title: "AI in Mobility",
            desc: "Machine learning models for vehicle behavior, diagnostics, and autonomy."
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card className="bg-gray-800 shadow-xl hover:shadow-2xl transition duration-300">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      <footer className="text-center text-gray-500 text-sm mt-16">
        <p>&copy; 2025 MTech Automotive Electronics. All rights reserved.</p>
      </footer>
    </main>
  );
}
