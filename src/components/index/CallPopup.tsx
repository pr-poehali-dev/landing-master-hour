import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const DELAY = 30_000;
const STORAGE_KEY = "call_popup_closed";

const CallPopup = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    const timer = setTimeout(() => setVisible(true), DELAY);
    return () => clearTimeout(timer);
  }, []);

  const close = () => {
    setVisible(false);
    sessionStorage.setItem(STORAGE_KEY, "1");
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-4 fade-in duration-300">
      <div className="bg-white rounded-2xl shadow-2xl border-2 border-primary/20 p-5 max-w-xs w-full">
        <button
          onClick={close}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Закрыть"
        >
          <Icon name="X" size={16} />
        </button>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
            <Icon name="Wrench" size={20} className="text-primary" />
          </div>
          <p className="text-sm font-semibold text-gray-800 leading-snug">
            Нужен мастер? Приедем в день обращения!
          </p>
        </div>
        <p className="text-xs text-gray-500 mb-4 leading-relaxed">
          ГБУ «Жилищник района Отрадное» — сантехника, электрика, поверка счётчиков и другие работы.
        </p>
        <a href="tel:84992013135" onClick={close}>
          <Button className="w-full bg-primary hover:bg-primary/90 text-base font-bold py-5">
            <Icon name="Phone" size={18} className="mr-2" />
            8 (499) 201-31-35
          </Button>
        </a>
      </div>
    </div>
  );
};

export default CallPopup;
