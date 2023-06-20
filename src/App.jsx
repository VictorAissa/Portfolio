import { Outlet } from "react-router-dom";
import Header from "./containers/Header";
import Footer from "./containers/Footer";

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
