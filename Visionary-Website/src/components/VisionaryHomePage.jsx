import React from "react";
import logo from "../assets/PatchMeLogoCircular.png";
import mockup1 from "../assets/GafasFrontal.png";
import mockup2 from "../assets/GafasPerfilDerecho.png";
import mockup3 from "../assets/GafasSuspendidas.png";


export default function VisionaryHomePage() {
  return (
    <div className="font-sans bg-white text-gray-800">
      {/* Header */}
      <header className="bg-[#702d91] text-white py-6 px-8 flex justify-between items-center shadow-md">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="PatchMeUp Logo" className="h-12 w-12 rounded-full" />
          <div>
            <h1 className="text-2xl font-bold">PatchMeUp</h1>
            <p className="text-sm text-gray-200">cntrl + alt + heal</p>
          </div>
        </div>
        <nav className="space-x-6">
          <a href="#about" className="hover:underline">¿Qué es?</a>
          <a href="#features" className="hover:underline">Características</a>
          <a href="#tech" className="hover:underline">Tecnología</a>
          <a href="#impact" className="hover:underline">Impacto</a>
          <a href="#contact" className="hover:underline">Contacto</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-[#d6c7e3] py-16 px-8 text-center">
        <h2 className="text-4xl font-bold mb-4 text-[#702d91]">Recupera tu autonomía visual</h2>
        <p className="text-lg mb-6">Gafas inteligentes para personas con discapacidad visual</p>
        <div className="space-x-4 mb-8">
          <button className="bg-[#e950d7] text-white px-6 py-2 rounded-full">Ver demostración</button>
          <button className="border border-[#e950d7] text-[#e950d7] px-6 py-2 rounded-full">Cómo funciona</button>
        </div>
        <div className="flex justify-center">
          <img src={mockup1} alt="Gafas Frontales" className="max-w-md rounded-lg shadow-lg" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-8 max-w-5xl mx-auto text-center">
        <h3 className="text-3xl font-semibold mb-6 text-[#702d91]">¿Qué es Visionary?</h3>
        <p className="text-lg leading-relaxed mb-8">
          Visionary es un dispositivo de asistencia tecnológica en forma de gafas inteligentes, diseñado para ayudar a personas con discapacidad visual a desplazarse con mayor seguridad en entornos urbanos. Estas gafas integran una cámara, sensores y un sistema de procesamiento de imágenes capaz de detectar obstáculos, cruces peatonales y cambios en el entorno, transformando esta información en alertas auditivas o hápticas.
        </p>
        <img src={mockup2} alt="Gafas de Perfil" className="mx-auto max-w-2xl rounded-md shadow" />
      </section>

      {/* Features Section */}
      <section id="features" className="bg-[#f3e8fa] py-16 px-8">
        <h3 className="text-3xl font-semibold text-center mb-10 text-[#702d91]">Características Principales</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center">
            <div className="text-[#e950d7] text-4xl mb-4">🧠</div>
            <h4 className="font-bold mb-2">Procesamiento en tiempo real</h4>
            <p>Detecta y analiza el entorno visual al instante.</p>
          </div>
          <div className="text-center">
            <div className="text-[#e950d7] text-4xl mb-4">🔊</div>
            <h4 className="font-bold mb-2">Alertas auditivas y hápticas</h4>
            <p>Comunicación intuitiva mediante sonidos o vibraciones.</p>
          </div>
          <div className="text-center">
            <div className="text-[#e950d7] text-4xl mb-4">📱</div>
            <h4 className="font-bold mb-2">Sincronización con smartphone</h4>
            <p>Conéctalo con tu móvil para actualizaciones y control remoto.</p>
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <img src={mockup3} alt="Gafas Suspendidas" className="max-w-md rounded-lg shadow-md" />
        </div>
      </section>

      {/* Technology Section */}
      <section id="tech" className="py-16 px-8 max-w-5xl mx-auto">
        <h3 className="text-3xl font-semibold mb-8 text-[#702d91]">Tecnología utilizada</h3>
        <ul className="list-disc list-inside text-lg space-y-3">
          <li>Visión computacional con OpenCV</li>
          <li>Procesadores ESP32 o Raspberry Pi Zero</li>
          <li>Aplicación móvil en React Native</li>
          <li>Firebase para sincronización en tiempo real</li>
        </ul>
      </section>

      {/* Impact Section */}
      <section id="impact" className="bg-[#8ee3fc] py-16 px-8 text-center">
        <h3 className="text-3xl font-semibold mb-10 text-[#1fbedf]">Impacto Social</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div>
            <p className="text-5xl font-bold text-[#702d91]">+58</p>
            <p>Usuarios beta activos</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-[#702d91]">4.8/5</p>
            <p>Calificación promedio</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-[#702d91]">+285M</p>
            <p>Personas con discapacidad visual en el mundo</p>
          </div>
        </div>
        <blockquote className="mt-10 italic text-lg max-w-2xl mx-auto">
          "Pude caminar por primera vez solo al mercado sin sentir miedo."
          <br />– Pedro, 67 años
        </blockquote>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-8 text-center">
        <h3 className="text-3xl font-semibold mb-6 text-[#702d91]">¿Te gustaría colaborar?</h3>
        <p className="mb-8">Contáctanos para sumarte al proyecto o recibir más información.</p>
        <a href="mailto:hola@sitioincreible.com" className="bg-[#e950d7] text-white px-6 py-3 rounded-full">Escríbenos</a>
      </section>

      {/* Footer */}
      <footer className="bg-[#702d91] text-white py-6 px-8 text-center">
        <p>© 2025 PatchMeUp · Universidad del Rosario</p>
      </footer>
    </div>
  );
} 