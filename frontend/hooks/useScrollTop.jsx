import { useState, useEffect } from "react";

const useScrollTop = (threshold= 10) => {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        function handleScroll(){
            if(window.scrollY > threshold){
                setScrolled(true);
            }
            else{
                setScrolled(false);
            }
            
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
       
    })
  return scrolled;
}

export default useScrollTop;
