import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const services = [
  {
    icon: "Gauge",
    title: "Поверка счётчиков воды",
    description: "Официальная поверка на дому, без демонтажа",
    price: "750 ₽",
    details: [
      "Поверка счётчиков холодной и горячей воды на дому — демонтаж не требуется",
      "Заполнение всех необходимых документов специалистом",
      "Передача документов в ресурсный отдел — вам ничего делать не нужно",
      "Внесение данных в государственный реестр ФГИС «Аршин»",
      "Есть скидки для льготных категорий граждан"
    ]
  },
  {
    icon: "RefreshCw",
    title: "Замена счётчиков воды",
    description: "Демонтаж старых и монтаж новых счётчиков",
    price: "2 300 ₽",
    details: [
      "Демонтаж старых вышедших из строя или устаревших счётчиков",
      "Монтаж новых счётчиков холодной и/или горячей воды",
      "Опломбировка новых приборов учёта",
      "Оформление и сдача всех документов в ресурсный отдел",
      "Гарантия на выполненные работы — 12 месяцев*"
    ]
  },
  {
    icon: "PlusCircle",
    title: "Первичная установка водосчётчиков",
    description: "Врезка счётчиков в систему водоснабжения",
    price: "4 500 ₽",
    details: [
      "Врезка новых счётчиков воды в существующую разводку квартиры",
      "Монтаж запорной арматуры и фильтров при необходимости",
      "Опломбировка установленных приборов учёта",
      "Оформление и сдача всех документов в ресурсный отдел",
      "Внесение данных в реестр ФГИС «Аршин»",
      "Гарантия на выполненные работы — 12 месяцев*"
    ]
  },
  {
    icon: "Droplet",
    title: "Замена смесителя",
    description: "Демонтаж старого и монтаж нового смесителя",
    price: "3 800 ₽",
    details: [
      "Демонтаж старого смесителя — 1 300 ₽",
      "Монтаж нового смесителя — 2 500 ₽",
      "Работы выполняются на кухне, в ванной или санузле",
      "Подключение к горячему и холодному водоснабжению",
      "Проверка герметичности соединений после установки",
      "Гарантия на выполненные работы — 12 месяцев*"
    ]
  },
  {
    icon: "Toilet",
    title: "Замена унитаза",
    description: "Демонтаж старого и установка нового унитаза",
    price: "4 500 ₽",
    details: [
      "Демонтаж старого унитаза и вывоз строительного мусора",
      "Установка нового унитаза (подвесного или напольного)",
      "Установка и настройка запорной арматуры (бачка)",
      "Подключение к системе водоснабжения и канализации",
      "Проверка герметичности и корректной работы после монтажа",
      "Гарантия на выполненные работы — 12 месяцев*"
    ]
  },
  {
    icon: "Wrench",
    title: "Электромонтажные работы",
    description: "Замена розеток, выключателей, светильников",
    price: "от 600 ₽",
    details: [
      "Замена розеток и выключателей любого типа",
      "Монтаж и замена светильников, люстр, бра",
      "Установка и подключение электроприборов",
      "Диагностика электропроводки",
      "Все работы выполняются с соблюдением норм безопасности",
      "Гарантия на выполненные работы — 12 месяцев*"
    ]
  },
  {
    icon: "Droplets",
    title: "Сантехнические работы",
    description: "Установка смесителей, замена труб, устранение протечек",
    price: "от 600 ₽",
    details: [
      "Установка и замена смесителей на кухне и в ванной",
      "Устранение протечек и засоров",
      "Замена труб холодной и горячей воды",
      "Установка унитазов, ванн, душевых кабин",
      "Работы выполняются аккредитованными специалистами",
      "Гарантия на выполненные работы — 12 месяцев*"
    ]
  },
  {
    icon: "Shield",
    title: "Опломбировка ИПУ воды",
    description: "Выезд мастера, опломбировка, заполнение и сдача документов в ресурсный отдел",
    price: "800 ₽",
    details: [
      "Выезд мастера на объект",
      "Опломбировка индивидуального прибора учёта воды",
      "Заполнение необходимых документов",
      "Сдача документов в ресурсный отдел",
      "Гарантия на выполненные работы — 12 месяцев*"
    ]
  },
  {
    icon: "Waves",
    title: "Установка фильтра очистки питьевой воды",
    description: "Монтаж фильтра для очистки питьевой воды под раковину или на кран",
    price: "2 500 ₽",
    details: [
      "Подбор оптимального фильтра очистки воды",
      "Монтаж и подключение фильтра",
      "Проверка работы системы фильтрации",
      "Работы выполняются аккредитованными специалистами",
      "Гарантия на выполненные работы — 12 месяцев*"
    ]
  },
];

const reviews = [
  {
    name: "Ольга",
    rating: 5,
    service: "Монтаж осветительных приборов",
    text: "Специалист Иван, приехал как договорились, работу сделал быстро и качественно! Спасибо, буду пользоваться вашими услугами.",
    date: "23 сентября 2025",
    price: "2000 ₽",
    source: "Профи.ру"
  },
  {
    name: "Александра",
    rating: 5,
    service: "Сантехника",
    text: "Здравствуйте. Мне все понравилось. Мастер профессионал своего дела, сразу понял в чем проблема, затянул колбы, еще мы заменим резинки на колбах и будет все отлично. Рекомендую специалистов.",
    date: "7 октября 2025",
    price: "1000 ₽",
    source: "Профи.ру"
  },
  {
    name: "Инна",
    rating: 5,
    service: "Устранение течи • Ремонт труб",
    text: "Приехал специалист Иван поменять металлопластмассовую трубочку в стояке, т.к. она подтекала. Задача оказалась намного сложнее. Пришлось вызывать на помощь бригаду. Всё сделали. Я довольна. Как инвалиду сделали на оплату скидку. Спасибо. Впредь буду обращаться к ним.",
    date: "20 октября 2025",
    price: null,
    source: "Профи.ру"
  },
  {
    name: "Маргарита",
    rating: 5,
    service: "Ремонт торшеров",
    text: "Задача выполнена. Очень приятный в общении мастер. Сделал всё быстро и аккуратно.",
    date: "25 октября 2025",
    price: "2500 ₽",
    source: "Профи.ру"
  }
];

type Service = typeof services[0];

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState<null | Service>(null);

  return (
    <>
      <section id="services" className="py-20 bg-white scroll-reveal">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Наши услуги</h2>
            <p className="text-lg text-gray-600">Решаем любые бытовые задачи быстро и качественно</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 animate-scale-in cursor-pointer group"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedService(service)}
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={28} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex items-center justify-between">
                  <p className="text-2xl font-bold text-primary">{service.price}</p>
                  <span className="text-sm text-gray-400 group-hover:text-primary transition-colors flex items-center gap-1">
                    Подробнее <Icon name="ChevronRight" size={16} />
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>

          <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
            <DialogContent className="max-w-lg">
              {selectedService && (
                <>
                  <DialogHeader>
                    <div className="flex items-center gap-4 mb-2">
                      <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name={selectedService.icon} size={28} className="text-primary" />
                      </div>
                      <div>
                        <DialogTitle className="text-xl leading-snug">{selectedService.title}</DialogTitle>
                        <p className="text-3xl font-bold text-primary mt-1">{selectedService.price}</p>
                      </div>
                    </div>
                  </DialogHeader>
                  <ul className="space-y-3 my-2">
                    {selectedService.details.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700">
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                  {selectedService.details.some(d => d.includes('*')) && (
                    <p className="text-xs text-gray-400 mt-1">* при предъявлении договора</p>
                  )}
                  <a href="tel:84992013135" className="block mt-4">
                    <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                      <Icon name="Phone" size={20} className="mr-2" />
                      Записаться — 8 (499) 201-31-35
                    </Button>
                  </a>
                </>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-gradient-to-br from-blue-50 to-white scroll-reveal">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Отзывы клиентов</h2>
            <p className="text-lg text-gray-600">Нас рекомендуют жители Отрадного</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-shadow animate-scale-in" style={{ animationDelay: `${index * 150}ms` }}>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <p className="text-sm text-primary font-medium mt-0.5">{review.service}</p>
                    </div>
                    <span className="text-xs bg-yellow-50 text-yellow-700 border border-yellow-200 px-2 py-1 rounded-full font-medium whitespace-nowrap">{review.source}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex gap-0.5">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-400">{review.date}</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-700 leading-relaxed text-sm">{review.text}</p>
                  {review.price && (
                    <p className="mt-3 text-sm text-gray-500">Стоимость работ: <span className="font-semibold text-gray-700">{review.price}</span></p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 via-white to-secondary/5 scroll-reveal">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Связаться с нами</h2>
              <p className="text-lg text-gray-600">Выберите удобный способ — ответим быстро</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href="tel:84992013135" className="group" onClick={() => window.location.href = 'tel:84992013135'}>
                <div className="flex items-center gap-4 bg-white border-2 border-gray-100 hover:border-primary/40 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Icon name="Phone" size={26} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">Телефон</p>
                    <p className="text-lg font-bold text-gray-900">8 (499) 201-31-35</p>
                    <p className="text-xs text-green-500 mt-0.5 font-medium">Нажмите, чтобы позвонить</p>
                  </div>
                </div>
              </a>

              <a href="https://wa.me/79966547924" target="_blank" rel="noopener noreferrer" className="group">
                <div className="flex items-center gap-4 bg-white border-2 border-gray-100 hover:border-purple-300 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden flex-shrink-0">
                    <img src="https://cdn.poehali.dev/projects/2290166f-2258-4976-a76b-89e777208a1e/bucket/bf32e594-29a9-4f48-8cb0-5c4295cd08d1.jpg" alt="MAX" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">Чат MAX</p>
                    <p className="text-lg font-bold text-gray-900">+7 (996) 654-79-24</p>
                    <p className="text-xs text-gray-400 mt-0.5">Написать в чат</p>
                  </div>
                </div>
              </a>

              <a href="mailto:KomOtradnoe@yandex.ru" className="group">
                <div className="flex items-center gap-4 bg-white border-2 border-gray-100 hover:border-primary/40 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Icon name="Mail" size={26} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">Электронная почта</p>
                    <p className="text-base font-bold text-gray-900">KomOtradnoe@yandex.ru</p>
                    <p className="text-xs text-gray-400 mt-0.5">Написать письмо</p>
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 bg-white border-2 border-gray-100 rounded-2xl p-5 shadow-sm">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" size={26} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-0.5">График работы</p>
                  <p className="text-lg font-bold text-gray-900">Пн–Пт</p>
                  <p className="text-sm text-gray-600">с 8:00 до 17:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  );
};

export default ServicesSection;