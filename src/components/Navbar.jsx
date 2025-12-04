import { useGSAP } from "@gsap/react";
import logo from "../assets/logo.svg";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

const Navbar = ({ cursorRef }) => {
  const menuSideRef = useRef(null);
  const menuRef = useRef(null);
  const closeRef = useRef(null);
  const [menu, setMenu] = useState(false);

  const animateIt = (e) => {
    gsap.to(cursorRef.current, {
      scale: 2.5,
    });

    if (e.type == "mouseleave") {
      gsap.to(cursorRef.current, {
        scale: 1,
      });
    }
  };

  const openMenu = () => {
    menuSideRef.current.style.left = 0;
    if (!menu) {
      menuRef.current.style.display = "none";
      closeRef.current.style.display = "block";
      setMenu(true);
    }
  };
  
  const closeMenu = () => {
    menuSideRef.current.style.left = "100%";
    if (menu) {
      menuRef.current.style.display = "block";
      closeRef.current.style.display = "none";
      setMenu(false);
    }
  };

  useEffect(() => {
    closeRef.current.style.display = "none";
  }, []);


  return (
    <div className="relative flex justify-between items-center py-6 px-8 desktop:px-24 bg-white">
      <div
        onMouseEnter={animateIt}
        onMouseLeave={animateIt}
        className="logo z-999"
      >
        <img className="w-24" src={logo} alt="Cuberto" />
      </div>
      <div className="links flex gap-10 text-md ">
        {["About", "Services", "Projects", "Blog", "Contact"].map(
          (item, index) => (
            <a
              key={index}
              onMouseEnter={animateIt}
              onMouseLeave={animateIt}
              className="link hidden tab:block"
            >
              {item}
            </a>
          )
        )}
      </div>
      <div
        onMouseEnter={animateIt}
        onMouseLeave={animateIt}
        onClick={closeMenu}
        ref={closeRef}
        className="block tab:hidden p-3 z-999"
      >
        <div className="flex flex-col">
          <div className="w-8 h-0.5 bg-black rotate-45"></div>
          <div className="w-8 h-0.5 bg-black -rotate-45"></div>
        </div>
      </div>
      <div
        onMouseEnter={animateIt}
        onMouseLeave={animateIt}
        onClick={openMenu}
        ref={menuRef}
        className="block tab:hidden p-2 z-999"
      >
        <div className="flex gap-1 flex-col">
          <div className="w-8 h-0.5 bg-black"></div>
          <div className="w-5 h-0.5 bg-black"></div>
          <div className="w-8 h-0.5 bg-black"></div>
        </div>
      </div>
      <div
        ref={menuSideRef}
        className="absolute top-0 left-full bg-white w-full h-screen pl-8 pt-36"
      >
        <h2 className="text-zinc-500 text-4xl">Menu</h2>
        <div className="flex flex-col gap-8 text-6xl pt-16">
          {["About", "Services", "Projects", "Blog", "Contact"].map(
            (item, index) => (
              <a
                key={index}
                onMouseEnter={animateIt}
                onMouseLeave={animateIt}
                className="link"
              >
                {item}
              </a>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
