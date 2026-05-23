import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Menu } from "lucide-react";

export default function DynamiteFitnessWebsite() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const services = [
    { title: 'Personal Training', icon: '🏋️' },
    { title: 'Group Classes', icon: '🔥' },
    { title: 'Online Coaching', icon: '💻' },
    { title: 'Nutrition Plans', icon: '🥗' },
  ];

  const programs = [
    { name: 'Starter Ignite', price: '$49/mo' },
    { name: 'Elite Performance', price: '$99/mo' },
    { name: '1:1 Premium', price: '$199/mo' },
  ];

  const posts = ['Strength Training Basics', 'Best Fat Loss Nutrition Tips', '7-Day Workout Plan'];

  return (
    <div className="bg-black text-white min-h-screen scroll-smooth">
      {/* SEO Metadata for Next.js Head (move into app/head.tsx in production)
      title: Dynamite Fitness | Personal Training & Online Fitness Coaching
      keywords: personal training, fitness coaching, gym membership, online fitness coach, strength training, weight loss programs
      */}

      {/* WhatsApp Floating Chat */}
      <a
        href="https://wa.me/2349160964824"
        className="fixed bottom-6 right-6 z-50 bg-green-500 p-4 rounded-full shadow-2xl hover:scale-110 transition"
      >
        <MessageCircle />
      </a>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-black/90 backdrop-blur border-b border-red-700">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-black text-red-500">Dynamite Fitness</h1>
            <p className="text-xs text-gray-400">Ignite Your Potential</p>
          </div>

          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#about">About</a>
            <a href="#services">Programs</a>
            <a href="#gallery">Results</a>
            <a href="#schedule">Book</a>
            <a href="#blog">Blog</a>
            <a href="#faq">FAQ</a>
          </nav>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden">
            <Menu />
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden px-6 pb-4 flex flex-col gap-3 bg-black">
            <a href="#about">About</a>
            <a href="#services">Programs</a>
            <a href="#gallery">Results</a>
            <a href="#schedule">Book</a>
            <a href="#blog">Blog</a>
          </div>
        )}
      </header>

      {/* Hero with video background */}
      <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
        <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover opacity-30">
          <source src="/fitness-hero.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 max-w-4xl px-6">
          <motion.h2 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="text-6xl md:text-7xl font-black mb-6">
            Transform Your Body. <span className="text-red-500">Unleash Your Power.</span>
          </motion.h2>
          <p className="text-xl text-gray-300 mb-8">Elite coaching for real, measurable results.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-red-600 px-8 py-4 rounded-2xl">Join Now</button>
            <button className="border border-white px-8 py-4 rounded-2xl">Book Free Consultation</button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-24">
        <h3 className="text-4xl font-bold text-center mb-12">Programs & Services</h3>
        <div className="grid md:grid-cols-4 gap-6">
          {services.map((s) => (
            <motion.div whileHover={{ scale: 1.05 }} key={s.title} className="bg-gray-900 rounded-3xl p-8 border border-gray-800 hover:border-red-500">
              <div className="text-4xl mb-4">{s.icon}</div>
              <h4 className="text-xl font-bold text-red-500">{s.title}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-gray-950 py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold mb-6">Our Mission</h3>
          <p className="text-lg text-gray-300">Empowering transformation through elite training, accountability, and sustainable results.</p>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="max-w-7xl mx-auto px-6 py-24">
        <h3 className="text-4xl font-bold text-center mb-12">Transformation Gallery</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3].map((i)=><div key={i} className="h-80 rounded-3xl bg-[url('/before-after.jpg')] bg-cover bg-center border border-red-800" />)}
        </div>
      </section>

      {/* Pricing + Stripe */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h3 className="text-4xl font-bold text-center mb-12">Membership Plans</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {programs.map((p)=>(
            <div key={p.name} className="bg-gray-900 p-8 rounded-3xl border border-red-700">
              <h4 className="text-2xl text-red-500 font-bold">{p.name}</h4>
              <p className="text-4xl font-black my-4">{p.price}</p>
              <button className="w-full bg-red-600 py-3 rounded-2xl">Start Membership</button>
            </div>
          ))}
        </div>
      </section>

      {/* Booking */}
      <section id="schedule" className="bg-gray-950 py-24 text-center px-6">
        <h3 className="text-4xl font-bold mb-6">Book Your Free Consultation</h3>
        <div className="bg-gray-900 rounded-3xl p-12 max-w-4xl mx-auto border border-gray-700">
          <p className="text-gray-300"><iframe title="Calendly" src="https://calendly.com/YOUR_CALENDLY_USERNAME/free-consultation" className="w-full h-[700px] rounded-2xl" /></p>
          <p className="text-sm text-gray-500 mt-2">Drop your Calendly inline widget here.</p>
        </div>
      </section>

      {/* Blog CMS */}
      <section id="blog" className="max-w-6xl mx-auto px-6 py-24">
        <h3 className="text-4xl font-bold text-center mb-12">Blog (Sanity CMS Ready)</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p)=><div key={p} className="bg-gray-900 rounded-3xl p-8">{p}</div>)}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-gray-950 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12">FAQ</h3>
          <div className="space-y-6">
            <div><h4 className="font-bold">Do you offer online coaching?</h4><p className="text-gray-400">Yes—worldwide.</p></div>
            <div><h4 className="font-bold">Can beginners join?</h4><p className="text-gray-400">Absolutely.</p></div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-6 text-center">
        <h3 className="text-3xl font-bold mb-4">Get Weekly Fitness Tips</h3>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <input placeholder="Your email" className="text-black px-4 py-3 rounded-2xl w-full md:w-96" />
          <button className="bg-red-600 px-6 py-3 rounded-2xl">Subscribe</button>
        </div>
      </section>

      <footer className="border-t border-gray-800 py-10 text-center text-gray-400">
        osabuohend@gmail.com • (555) 555-5555 • Instagram • YouTube • Facebook • WhatsApp
        <p className="mt-2 text-xs">Ready for deployment on Vercel • Add NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY, SANITY_PROJECT_ID, NEXT_PUBLIC_FIREBASE_CONFIG, and your custom domain</p>
      </footer>
    </div>
  );
}
