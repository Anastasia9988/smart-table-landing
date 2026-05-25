import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { RealDeviceSection } from "./components/RealDeviceSection";
import { FlexPilotSection } from "./components/FlexPilotSection";
import { ContactModal } from "./components/ContactModal";
import {BenefitsSection} from "./components/BenefisSecion";

function App() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    const openContactModal = () => setIsContactModalOpen(true);
    const closeContactModal = () => setIsContactModalOpen(false);

    return (
        <div className="app" id="top">
            <Header onOpenContactForm={openContactModal} />

            <main>
                <HeroSection onOpenContactForm={openContactModal} />
                <RealDeviceSection />
                <BenefitsSection />
                <FlexPilotSection onOpenContactForm={openContactModal} />
            </main>

            <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
        </div>
    );
}

export default App;