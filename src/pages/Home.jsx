import { useContext } from "react";
import ToggleButton from "@/components/theme/ToggleButton";
import { ThemeContext } from "@/context/ThemeContext";

export default function Home() {
  const {theme} = useContext(ThemeContext)

  return (
    <section className={`${theme} flex items-center justify-center min-h-screen p-8 font-[Poppins]`}>
      <ToggleButton/>
    </section>
  )
}