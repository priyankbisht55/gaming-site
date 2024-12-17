import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Navbar from "./components/Navbar.jsx";
import {useRef} from "react";

const App = () => {
    return (
        <main className="relative min-h-screen w-screen overflow-x-hidden bg-zinc-600">
            <Navbar />
            <Hero />
            <About />
        </main>
    )
}
export default App
