import { useState, useRef, useEffect } from "react";
import { FileText, Menu, X } from "lucide-react";

interface IndicatorStyle {
  left: number;
  width: number;
}

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("About");
  const [indicatorStyle, setIndicatorStyle] = useState<IndicatorStyle>({ left: 0, width: 0 });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRefs = useRef<{ [key: string]: HTMLLIElement | null }>({});

  const navLinks = ["About", "Project", "Education", "Contact"];

  useEffect(() => {
    const activeElement = navRefs.current[activeLink];
    if (activeElement && !mobileMenuOpen) {
      setIndicatorStyle({
        left: activeElement.offsetLeft,
        width: activeElement.offsetWidth,
      });
    }
  }, [activeLink, mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (link: string) => {
    setActiveLink(link);
    setMobileMenuOpen(false);
    const sectionId = link.toLowerCase();
    const section = document.getElementById(sectionId);
    
    if (section) {
      section.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    }
  };

  return (
    <>
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'py-4 bg-black/95 backdrop-blur-lg shadow-lg shadow-black/50' 
            : 'py-10 bg-transparent'
        }`}
      >
        <div className="flex flex-row justify-between items-center max-w-7xl mx-auto px-4 md:px-0">
          <h1 className={`font-black mx-4 md:mx-10 transition-all duration-300 ${
            isScrolled ? 'text-3xl md:text-4xl' : 'text-3xl md:text-5xl'
          }`}>
            K.R
          </h1>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex text-neutral-100 bg-neutral-900 p-2.5 px-10 rounded-3xl font-light">
            <ul className="flex flex-row relative">
              <div
                className="absolute bg-black rounded-3xl transition-all duration-300 ease-in-out"
                style={{
                  left: `${indicatorStyle.left}px`,
                  width: `${indicatorStyle.width}px`,
                  top: "50%",
                  transform: "translateY(-50%)",
                  height: "40px",
                }}
              />

              {navLinks.map((link) => (
                <li
                  key={link}
                  ref={(el) => {navRefs.current[link] = el}}
                  className="mx-5"
                >
                  <a
                    href={`#${link.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link);
                    }}
                    className="block px-6 py-2 rounded-3xl transition-colors duration-300 relative z-10 cursor-pointer"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop Resume Button */}
          <div className="hidden md:block">
            <button className="bg-neutral-900 p-3 rounded-3xl mr-10 border-2 border-accent-500 hover:bg-accent-500/10 transition-all duration-300 cursor-pointer">
              <FileText className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-neutral-100 mr-4"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 px-4">
            <ul className="flex flex-col space-y-2 bg-neutral-900 rounded-2xl p-4">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link);
                    }}
                    className={`block px-6 py-3 rounded-xl transition-all duration-300 cursor-pointer ${
                      activeLink === link 
                        ? 'bg-black text-white' 
                        : 'text-neutral-300 hover:bg-neutral-800'
                    }`}
                  >
                    {link}
                  </a>
                </li>
              ))}
              <li>
                <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-neutral-900 border-2 border-accent-500 text-accent-500 rounded-xl hover:bg-accent-500/10 transition-all duration-300">
                  <FileText className="w-5 h-5" />
                  <span>Resume</span>
                </button>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
}