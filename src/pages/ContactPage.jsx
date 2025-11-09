import Navbar from "../components/Global/navbar";
import NavLogo from "../assets/navbar-logo.png";
import ContactForm from "../components/Contact/ContactForm";
import SocialIcons from "../components/Contact/SocialIcons";

export default function ContactPage() {
  return (
    <>
      {/* Banner + Navbar */}
      <div className="relative">
        <div
          className="absolute inset-0 h-[25vh] md:h-[30vh] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-100 z-0 pointer-events-none"
          aria-hidden="true"
        />
        <div className="relative z-20">
          <Navbar NavLogo={NavLogo} />
        </div>
        <section className="relative z-10 flex flex-col justify-center pt-10 md:pt-30 h-[30vh] text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 poppins-semibold">
            Contact Us
          </h1>
        </section>
      </div>

      {/* Contact Form */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <ContactForm />
      </section>

      {/* Social Links */}
      <section className="flex justify-center items-center gap-6 pb-10">
        <SocialIcons />
      </section>
    </>
  );
}
