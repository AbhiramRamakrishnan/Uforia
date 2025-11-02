// import React, { useEffect, useState } from "react";

// /**
//  * Navbar component (React + Tailwind)
//  *
//  * - Transparent background by default
//  * - Shows a left logo and navlinks to the right on desktop
//  * - Mobile: logo left, hamburger right, toggles Nav links
//  * - Navlink text is white-ish; active link uses color #EA4563 (text-[#EA4563])
//  * - When user scrolls down, navbar background transitions to a purple/indigo gradient
//  *
//  * Usage: <Navbar />
//  *
//  * Make sure Tailwind CSS is configured in your project.
//  */

// const NAV_LINKS = [
//   { name: "Home", href: "#" },
//   { name: "About", href: "#" },
//   { name: "Artists", href: "#" },
//   { name: "Events", href: "#" },
//   { name: "Gallery", href: "#" },
//   { name: "Tickets", href: "#" },
//   { name: "Contact", href: "#" },
// ];

// export default function Navbar(prop) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [active, setActive] = useState("Home");

//   useEffect(() => {
//     const onScroll = () => {
//       setScrolled(window.scrollY > 40); // set threshold as needed
//     };
//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   // Close mobile menu on resize to desktop
//   useEffect(() => {
//     const onResize = () => {
//       if (window.innerWidth >= 768) setIsOpen(false);
//     };
//     window.addEventListener("resize", onResize);
//     return () => window.removeEventListener("resize", onResize);
//   }, []);

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
//         scrolled
//           ? "backdrop-blur-md bg-gradient-to-r from-purple-600 via-indigo-600 to-indigo-500 bg-opacity-95 shadow-lg"
//           : "bg-transparent"
//       }`}
//     >
//       <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 items-center">
//         <div className="flex justify-between h-40">
//           {/* Left: Logo */}
//           <div className="flex items-center">
//             <a href="#" className="flex items-center gap-3" aria-label="Homepage">

//               <img
//                 src={prop.NavLogo}
//                 alt="Logo"
//                 className="h-30 w-17 object-cover"
//               />
//               {/* <span className="text-white font-semibold text-lg hidden sm:inline">YourBrand</span> */}
//             </a>
//           </div>

//           {/* Desktop nav links */}
//           <div className="hidden md:flex md:items-center md:space-x-6">
//             {NAV_LINKS.map((link) => {
//               const isActive = active === link.name;
//               return (
//                 <a
//                   key={link.name}
//                   href={link.href}
//                   onClick={(e) => {
//                     e.preventDefault();
//                     setActive(link.name);
//                     // If these are anchor links to sections, uncomment:
//                     // document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
//                   }}
//                   className={`text-sm font-medium transition-colors duration-150 ${
//                     isActive ? "text-[#EA4563]" : "text-white/90 hover:text-white"
//                   }`}
//                 >
//                   {link.name}
//                 </a>
//               );
//             })}
//           </div>

//           {/* Mobile: Hamburger */}
//           <div className="md:hidden flex items-center">
//             <button
//               type="button"
//               aria-label={isOpen ? "Close menu" : "Open menu"}
//               aria-expanded={isOpen}
//               onClick={() => setIsOpen((s) => !s)}
//               className="p-2 rounded-md text-white/90 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300"
//             >
//               {isOpen ? (
//                 // Close icon
//                 <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               ) : (
//                 // Hamburger icon
//                 <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//                 </svg>
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Mobile menu panel */}
//         <div
//           className={`md:hidden transform-gpu transition-all duration-300 origin-top ${
//             isOpen ? "max-h-screen mt-2" : "max-h-0 overflow-hidden"
//           }`}
//           aria-hidden={!isOpen}
//         >
//           <div
//             className={`rounded-lg py-4 px-3 ${
//               scrolled || isOpen
//                 ? "bg-gradient-to-r from-purple-600 via-indigo-600 to-indigo-500 bg-opacity-95"
//                 : "bg-black/40"
//             }`}
//           >
//             <ul className="flex flex-col gap-3">
//               {NAV_LINKS.map((link) => {
//                 const isActive = active === link.name;
//                 return (
//                   <li key={link.name}>
//                     <a
//                       href={link.href}
//                       onClick={(e) => {
//                         e.preventDefault();
//                         setActive(link.name);
//                         setIsOpen(false);
//                       }}
//                       className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-150 ${
//                         isActive ? "text-[#EA4563]" : "text-white/90 hover:text-white"
//                       }`}
//                     >
//                       {link.name}
//                     </a>
//                   </li>
//                 );
//               })}
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// }





import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

/**
 * Navbar component (React + Tailwind)
 *
 * - Transparent background by default
 * - Shows a centered logo and navlinks split on both sides on desktop
 * - Mobile: logo left, hamburger right, toggles Nav links
 * - Navlink text is white-ish; active link uses color #EA4563 (text-[#EA4563])
 * - When user scrolls down, navbar background transitions to a purple/indigo gradient
 *
 * Usage: <Navbar NavLogo={logoUrl} />
 *
 * Make sure Tailwind CSS is configured in your project.
 */

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Events", href: "/events" },
  { name: "Updates", href: "/soon" },
  { name: "Gallery", href: "/soon" },
  { name: "Videos", href: "/soon" },
  { name: "Contact", href: "/soon" },
  { name: "More", href: "/soon" },
];

export default function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40); // set threshold as needed
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Split links for left/right desktop columns.
  // This takes first 4 links for left and next up to 4 for right.
  // If you want a different split, adjust the slice indices below.
  const leftLinks = NAV_LINKS.slice(0, 4);
  const rightLinks = NAV_LINKS.slice(4, 9);

  // Class factory for desktop links
  // Added inline-block, small bottom padding and a 2px bottom border.
  // Default border is transparent to avoid layout shift; active uses the burgundy color.
  const navLinkClass = ({ isActive }) =>
    `text-base poppins-medium inline-block pb-1 transition-colors duration-150 border-b-2 ${isActive ? "text-[#800021] border-[#800021]" : "text-white/90 hover:text-white border-transparent"
    }`;

  // Class factory for mobile links
  // Keep block layout; add border-bottom same approach as desktop.
  const mobileLinkClass = ({ isActive }) =>
    `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-150 border-b-2 ${isActive ? "text-[#800021] border-[#800021]" : "text-white/90 hover:text-white border-transparent"
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${scrolled
        ? "backdrop-blur-md bg-gradient-to-r from-pink-700 via-purple-700 to-indigo-700 bg-opacity-50 shadow-lg"
        : "bg-transparent"
        }`}
    >
      <nav className="max-w-full md:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* On mobile: flex with logo left and hamburger right.
            On md+: use a 3-column grid: left links | centered logo | right links */}
        <div className="flex items-center justify-between h-30 md:grid md:grid-cols-3 md:gap-4 md:items-center">
          {/* Left - on mobile this is the logo container; on desktop this shows left links */}
          <div className="flex items-center">
            {/* Desktop left links */}
            <div className="hidden md:flex md:items-center md:justify-end md:space-x-6 ml-35 mt-5">
              {leftLinks.map((link) => (
                <NavLink key={link.name} to={link.href} className={navLinkClass}>
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Mobile logo (left) - visible on small screens */}
            <div className="md:hidden flex items-center ml-3">
              <Link to="/" className="flex items-center gap-3" aria-label="Homepage">
                <img src={props.NavLogo} alt="Logo" className="h-23 w-auto object-contain" />
              </Link>
            </div>
          </div>

          {/* Center - logo centered on desktop */}
          <div className="flex items-center justify-center">
            <Link to="/" className="flex items-center gap-3" aria-label="Homepage">
              <img src={props.NavLogo} alt="Logo" className="hidden md:block h-24 w-auto object-contain" />
              {/* <h1 className="text-xl text-white">Uˈfɔːriə</h1> */}
            </Link>
          </div>

          {/* Right - on mobile this contains the hamburger, on desktop the right links */}
          <div className="flex items-center justify-end">
            {/* Desktop right links */}
            <div className="hidden md:flex md:items-center md:justify-start md:space-x-6 mr-35 mt-5">
              {rightLinks.map((link) => (
                <NavLink key={link.name} to={link.href} className={navLinkClass}>
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Mobile: Hamburger */}
            <div className="md:hidden flex items-center">
              <button
                type="button"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                onClick={() => setIsOpen((s) => !s)}
                className="p-2 rounded-md text-white/90 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300"
              >
                {isOpen ? (
                  // Close icon
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  // Hamburger icon
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu panel */}
        <div
          className={`md:hidden transform-gpu transition-all duration-300 origin-top ${isOpen ? "max-h-screen mt-2" : "max-h-0 overflow-hidden"
            }`}
          aria-hidden={!isOpen}
        >
          <div
            className={`rounded-lg py-4 px-3 ${scrolled || isOpen
              ? "bg-gradient-to-r from-purple-600 via-indigo-600 to-indigo-500 bg-opacity-95"
              : "bg-black/40"
              }`}
          >
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.href}
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    className={mobileLinkClass}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}