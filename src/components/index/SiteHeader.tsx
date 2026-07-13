import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function getSunTimes() {
  const now = new Date();
  const lat = 55.8649;
  const lng = 37.6802;
  const J2000 = 2451545.0;
  const toRad = (d: number) => (d * Math.PI) / 180;
  const toDeg = (r: number) => (r * 180) / Math.PI;

  const dayOfYear = Math.floor((now.getTime() - new Date(now.getFullYear(), 0, 0).getTime()) / 86400000);
  const B = toRad((360 / 365) * (dayOfYear - 81));
  const eot = 9.87 * Math.sin(2 * B) - 7.53 * Math.cos(B) - 1.5 * Math.sin(B);
  const decl = toRad(23.45 * Math.sin(toRad((360 / 365) * (dayOfYear - 81))));
  const ha = toDeg(Math.acos(-Math.tan(toRad(lat)) * Math.tan(decl)));
  const tzOffset = 3;
  const solarNoon = 12 - lng / 15 - eot / 60 + tzOffset;
  const sunrise = solarNoon - ha / 15;
  const sunset = solarNoon + ha / 15;

  const fmt = (h: number) => {
    const hh = Math.floor(h);
    const mm = Math.round((h - hh) * 60);
    return `${String(hh).padStart(2, "0")}:${String(mm).padStart(2, "0")}`;
  };
  return { sunrise: fmt(sunrise), sunset: fmt(sunset) };
}

const SiteHeader = () => {
  const navigate = useNavigate();
  const [time, setTime] = useState(() => {
    const now = new Date();
    return now.toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit", second: "2-digit", timeZone: "Europe/Moscow" });
  });
  const { sunrise, sunset } = getSunTimes();

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit", second: "2-digit", timeZone: "Europe/Moscow" }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
          <img src="/images/gbu-zhilishchnik-otradnoe-gerb-logo.png" alt="Герб ГБУ «Жилищник района Отрадное»" className="w-9 h-9 object-contain" />
          <span>Мастер на час <span className="text-base font-normal text-gray-500">в Отрадном СВАО г. Москвы</span></span>
        </h1>
        <div className="flex items-center gap-2">
          <div className="hidden md:flex flex-col items-center gap-0.5 border border-gray-200 rounded-lg px-3 py-1.5">
            <span className="text-sm font-bold text-gray-800 tabular-nums">{time}</span>
            <div className="flex items-center gap-2 text-[10px] text-gray-400">
              <span className="flex items-center gap-0.5">
                <Icon name="Sunrise" size={11} className="text-orange-400" />
                {sunrise}
              </span>
              <span className="flex items-center gap-0.5">
                <Icon name="Sunset" size={11} className="text-indigo-400" />
                {sunset}
              </span>
            </div>
          </div>
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
};

export default SiteHeader;