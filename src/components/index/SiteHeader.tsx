import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const SiteHeader = () => (
  <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-primary flex items-center gap-2">
        <img src="https://cdn.poehali.dev/projects/2290166f-2258-4976-a76b-89e777208a1e/bucket/0210cde3-4a1e-4595-bdbd-1b77b44fc26a.png" alt="Герб района Отрадное" className="w-9 h-9 object-contain" />
        <span>Мастер на час <span className="text-base font-normal text-gray-500">в Отрадном СВАО г. Москвы</span></span>
      </h1>
      <div className="flex items-center gap-2">
        <a
          href="https://vk.com/club215390521?act=s&id=215390521"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-0.5 text-sm font-medium text-gray-600 hover:text-primary transition-colors border border-gray-200 rounded-lg px-2 py-2 sm:px-3"
          title="ВКонтакте — Официальный канал ГБУ «Жилищник района Отрадное»"
        >
          <Icon name="Users" size={18} className="text-primary" />
          <span className="hidden sm:block text-[10px] text-gray-400 leading-tight text-center">ВКонтакте</span>
          <span className="hidden sm:block text-[9px] text-gray-400 leading-tight text-center">Официальный канал</span>
        </a>
        <a
          href="https://max.ru/id7715488558_gos"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-0.5 text-sm font-medium text-gray-600 hover:text-primary transition-colors border border-gray-200 rounded-lg px-2 py-2 sm:px-3"
          title="MAX — Официальный канал ГБУ «Жилищник района Отрадное»"
        >
          <Icon name="Send" size={18} className="text-primary" />
          <span className="hidden sm:block text-[10px] text-gray-400 leading-tight text-center">MAX</span>
          <span className="hidden sm:block text-[9px] text-gray-400 leading-tight text-center">Официальный канал</span>
        </a>
        <a href="tel:84992013135">
          <Button className="bg-primary hover:bg-primary/90 text-sm sm:text-base px-3 sm:px-4">
            <Icon name="Phone" size={16} className="sm:mr-2" />
            <span className="hidden sm:inline">8 (499) 201-31-35</span>
          </Button>
        </a>
      </div>
    </div>
  </header>
);

export default SiteHeader;
