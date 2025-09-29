export default function ContactSection() {
  return (
    <section className="bg-black py-12 md:py-20 px-6 sm:px-8 text-center" id="contact">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
          Let's Get In Touch
        </h2>

        <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto px-4">
          I'm always interested in new opportunities, collaborations, or just a
          friendly chat. Don't hesitate to reach out!
        </p>

        <button className="bg-transparent border-2 md:border-3 border-blue-500 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full font-medium hover:border-blue-400 hover:bg-blue-500/10 transition-all duration-300 cursor-pointer text-sm md:text-base">
          Say Hello
        </button>
      </div>
    </section>
  );
}