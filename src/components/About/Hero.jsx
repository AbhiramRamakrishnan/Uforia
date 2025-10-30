import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-10 md:px-6 py-45 bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700 text-white">
            <div className="max-w-3xl space-y-2">
                {/* Title */}
                <h1 className="text-5xl md:text-6xl poppins-medium tracking-tight">
                    U'fɔ:riə
                </h1>
                <h5 className="text-xl md:text-xl open-sans-medium">
                    (Euphoria)
                </h5>

                <hr className="h-4 text-white w-1/2 mx-auto rounded-2xl mt-8" />

                {/* Description */}
                <p className="text-gray-200 leading-relaxed md:text-lg mt-10 poppins-regular">
                    "EUPHORIA" promises to be a ground breaking cultural experience showcasing a fusion of global talent and the rich, authentic sounds of India's independent music giants. This project marks a significant milestone for Fynora Entertainment, reinforcing its commitment to fostering artistic collaboration and delivering unparalleled entertainment to audiences worldwide. The festival incorporates arts along with independent music and brings in wonderful festival activities for everyone to enjoy and just spend the wholeday!            </p>

                {/* CTA (optional) */}
                <Link
                    to="/soon"
                    className="mt-6 inline-block px-8 py-3 bg-white text-purple-700 font-semibold rounded-full shadow-lg hover:bg-purple-100 transition"
                >
                    Discover Our Events
                </Link>

            </div>

            {/* (Optional) Accent Glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-purple-900/10 to-transparent pointer-events-none"></div>
        </section>

    );
}

export default Hero;