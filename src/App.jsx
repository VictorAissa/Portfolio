import { Outlet } from "react-router-dom";
import Header from "./containers/Header";
import Footer from "./containers/Footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CustomEase);

function App() {
    return (
        <div className="app_layout">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default App;
