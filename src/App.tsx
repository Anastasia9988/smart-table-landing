import "./App.css";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { FlexPilotSection } from "./components/FlexPilotSection";
import {BenefitsSection} from "./components/BenefisSecion";

function App() {
    return (
        <div className="app" id="top">
            <Header />
            <main>
                <HeroSection />
                <BenefitsSection />
                <FlexPilotSection />
            </main>
        </div>
    );
}

export default App;