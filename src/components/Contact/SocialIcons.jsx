import { FaInstagram, FaYoutube, FaWhatsapp, FaFacebook } from "react-icons/fa";

export default function SocialIcons() {
  const socials = [
    { icon: <FaInstagram />, link: "https://www.instagram.com/uforia.in" },
    { icon: <FaYoutube />, link: "https://www.youtube.com/@fynoraentertainments" },
    { icon: <FaWhatsapp />, link: "https://wa.me/919656735696?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20the%20event." },
    { icon: <FaFacebook />, link: "/contact" },
  ];

  return (
    <div className="flex gap-6">
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl text-gray-700 hover:text-purple-600 transition-colors duration-300"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}
