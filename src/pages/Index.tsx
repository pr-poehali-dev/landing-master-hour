import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useEffect } from "react";
import SiteHeader from "@/components/index/SiteHeader";
import ServicesSection from "@/components/index/ServicesSection";
import MapWeatherSection from "@/components/index/MapWeatherSection";
import SiteFooter from "@/components/index/SiteFooter";
import CallPopup from "@/components/index/CallPopup";

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".scroll-reveal");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.12 }
    );
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

const Index = () => {
  useScrollReveal();

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <CallPopup />

      <section className="pt-32 pb-20 bg-gradient-to-br from-accent via-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="animate-fade-in">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
                Ваш комфорт — наша забота!
              </h2>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 font-medium">
                Мелкий ремонт и бытовые услуги по ценам утвержденным Префектурой СВАО г. Москвы
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:84992013135">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
                    <Icon name="Phone" size={20} className="mr-2" />
                    Вызвать мастера
                  </Button>
                </a>
                <a href="https://gbuotradnoe.mos.ru/platnye-uslugi/%D0%A0%D0%B0%D1%81%D1%86%D0%B5%D0%BD%D0%BA%D0%B8.pdf" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2">
                    <Icon name="Calculator" size={20} className="mr-2" />
                    Узнать цены
                  </Button>
                </a>
              </div>
            </div>
            <div className="animate-scale-in hidden md:block">
              <div className="relative">
                <img
                  src="https://cdn.poehali.dev/projects/2290166f-2258-4976-a76b-89e777208a1e/bucket/7fe5525a-20dc-469d-b5c8-15aa92864840.jpg"
                  alt="Наша команда"
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute bottom-4 left-0 right-0 text-center">
                  <span className="bg-black/60 text-white text-lg font-semibold px-6 py-2 rounded-full">Наша команда</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesSection />

      <a
        href="https://wa.me/79966547924"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 animate-scale-in"
        aria-label="Написать в WhatsApp"
      >
        <Icon name="MessageCircle" size={32} />
      </a>

      <MapWeatherSection />

      <SiteFooter />
    </div>
  );
};

export default Index;