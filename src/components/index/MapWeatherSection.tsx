import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import func2url from "../../../backend/func2url.json";

interface VisitorStats {
  today: number;
  month: number;
  year: number;
}

function useVisitors() {
  const [stats, setStats] = useState<VisitorStats | null>(null);
  useEffect(() => {
    fetch(func2url.visitors, { method: 'POST' })
      .then(r => r.json())
      .then(setStats)
      .catch(() => {});
  }, []);
  return stats;
}

interface WeatherDay {
  date: string;
  tempMax: number;
  tempMin: number;
  code: number;
}

function getWeatherDesc(code: number): { label: string; icon: string } {
  if (code === 0) return { label: "Ясно", icon: "Sun" };
  if (code <= 2) return { label: "Малооблачно", icon: "CloudSun" };
  if (code === 3) return { label: "Пасмурно", icon: "Cloud" };
  if (code <= 49) return { label: "Туман", icon: "CloudFog" };
  if (code <= 59) return { label: "Морось", icon: "CloudDrizzle" };
  if (code <= 69) return { label: "Дождь", icon: "CloudRain" };
  if (code <= 79) return { label: "Снег", icon: "Snowflake" };
  if (code <= 84) return { label: "Ливень", icon: "CloudRain" };
  if (code <= 99) return { label: "Гроза", icon: "CloudLightning" };
  return { label: "Переменно", icon: "Cloud" };
}

function useWeather() {
  const [days, setDays] = useState<WeatherDay[]>([]);
  useEffect(() => {
    fetch("https://api.open-meteo.com/v1/forecast?latitude=55.8649&longitude=37.6802&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=Europe%2FMoscow&forecast_days=3")
      .then(r => r.json())
      .then(data => {
        const result: WeatherDay[] = data.daily.time.map((date: string, i: number) => ({
          date,
          tempMax: Math.round(data.daily.temperature_2m_max[i]),
          tempMin: Math.round(data.daily.temperature_2m_min[i]),
          code: data.daily.weathercode[i],
        }));
        setDays(result);
      });
  }, []);
  return days;
}

function formatDay(dateStr: string, i: number): string {
  if (i === 0) return "Сегодня";
  if (i === 1) return "Завтра";
  const d = new Date(dateStr);
  return d.toLocaleDateString("ru-RU", { weekday: "short", day: "numeric", month: "short" });
}

const MapWeatherSection = () => {
  const weatherDays = useWeather();
  const visitors = useVisitors();

  return (
    <section className="bg-gray-900 py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 items-start">
            <div className="md:col-span-2">
              <h3 className="text-white text-xl font-bold mb-2 flex items-center gap-2">
                <Icon name="MapPin" size={20} className="text-primary" />
                Наш адрес
              </h3>
              <p className="text-gray-400 text-sm mb-4">г. Москва, ул. Каргопольская, д. 17, подъезд 4, кабинет 3</p>
              <div className="rounded-2xl overflow-hidden w-full h-64">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?ll=37.680200%2C55.864900&z=17&pt=37.680200,55.864900,pm2rdm~37.680200,55.864900,pm2rdl&text=%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0%2C%20%D1%83%D0%BB.%20%D0%9A%D0%B0%D1%80%D0%B3%D0%BE%D0%BF%D0%BE%D0%BB%D1%8C%D1%81%D0%BA%D0%B0%D1%8F%2C%20%D0%B4.%2017"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  title="Карта: ул. Каргопольская, д. 17"
                />
              </div>
              <div className="mt-4">
                <a href="https://yandex.ru/maps/?rtext=~55.864900,37.680200&rtt=auto" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-5">
                    <Icon name="Navigation" size={18} className="mr-2" />
                    Построить маршрут
                  </Button>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-white text-xl font-bold mb-2 flex items-center gap-2">
                <Icon name="CloudSun" size={20} className="text-primary" />
                Погода в Отрадном
              </h3>
              <p className="text-gray-400 text-sm mb-4">Москва, район Отрадное</p>
              <div className="space-y-3">
                {weatherDays.length === 0 ? (
                  <div className="text-gray-500 text-sm">Загрузка...</div>
                ) : weatherDays.map((day, i) => {
                  const { label, icon } = getWeatherDesc(day.code);
                  return (
                    <div key={day.date} className="bg-gray-800 rounded-xl px-4 py-3 flex items-center justify-between">
                      <div>
                        <div className="text-white text-sm font-medium">{formatDay(day.date, i)}</div>
                        <div className="text-gray-400 text-xs mt-0.5">{label}</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Icon name={icon} size={22} className="text-primary" />
                        <div className="text-right">
                          <span className="text-white font-bold">{day.tempMax}°</span>
                          <span className="text-gray-500 text-sm ml-1">/ {day.tempMin}°</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5">
                <h3 className="text-white text-base font-bold mb-3 flex items-center gap-2">
                  <Icon name="Users" size={18} className="text-primary" />
                  Посетители сайта
                </h3>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: 'Сегодня', value: visitors?.today },
                    { label: 'Месяц', value: visitors?.month },
                    { label: 'Год', value: visitors?.year },
                  ].map(({ label, value }) => (
                    <div key={label} className="bg-gray-800 rounded-xl px-3 py-3 text-center">
                      <div className="text-white text-xl font-bold">
                        {value !== undefined ? value : '—'}
                      </div>
                      <div className="text-gray-400 text-xs mt-0.5">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapWeatherSection;