import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

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
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });
  const [selectedService, setSelectedService] = useState<null | typeof services[0]>(null);

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
        "Гарантия на выполненные работы"
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
        "Внесение данных в реестр ФГИС «Аршин»"
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
        "Проверка герметичности соединений после установки"
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
        "Проверка герметичности и корректной работы после монтажа"
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
        "Все работы выполняются с соблюдением норм безопасности"
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
        "Работы выполняются аккредитованными специалистами"
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
      text: "Задача выполнена. Очень приятный сотрудник Виталий. Включала в себя замену выключателя на светильнике. Все сделано, благодарю. Оплата согласно прайсу ГБУ «Жилищник района Отрадное»",
      date: "31 октября 2025",
      price: "2500 ₽",
      source: "Профи.ру"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary flex items-center gap-2">
            <Icon name="Wrench" size={28} />
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

      <section className="pt-32 pb-20 bg-gradient-to-br from-accent via-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
                Ваш комфорт — наша забота!
              </h2>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 font-medium">
                Мелкий ремонт и бытовые услуги по ценам утвержденным Префектурой СВАО г. Москвы
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:89966547924">
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
            <p className="text-lg text-gray-600">Нам доверяют тысячи семей</p>
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

      <section id="portfolio" className="py-20 bg-white scroll-reveal">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Наши работы</h2>
            <p className="text-lg text-gray-600">Результаты говорят сами за себя</p>
          </div>
          
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">Электромонтажные работы</h3>
                <div className="space-y-3">
                  <div className="relative group overflow-hidden rounded-xl shadow-lg">
                    <img 
                      src="https://cdn.poehali.dev/projects/2290166f-2258-4976-a76b-89e777208a1e/files/5b69215f-cdb6-4448-addb-ec5f0893b52c.jpg"
                      alt="До ремонта"
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold">
                      ДО
                    </div>
                  </div>
                  <div className="relative group overflow-hidden rounded-xl shadow-lg">
                    <img 
                      src="https://cdn.poehali.dev/projects/2290166f-2258-4976-a76b-89e777208a1e/files/eb30972f-cb72-4700-84a5-45d6f15b6f1d.jpg"
                      alt="После ремонта"
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold">
                      ПОСЛЕ
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">Сантехнические работы</h3>
                <div className="space-y-3">
                  <div className="relative group overflow-hidden rounded-xl shadow-lg">
                    <img 
                      src="https://cdn.poehali.dev/projects/2290166f-2258-4976-a76b-89e777208a1e/files/89e4ccb4-2d13-4de1-9014-fb2b926a42f7.jpg"
                      alt="До ремонта"
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold">
                      ДО
                    </div>
                  </div>
                  <div className="relative group overflow-hidden rounded-xl shadow-lg">
                    <img 
                      src="https://cdn.poehali.dev/projects/2290166f-2258-4976-a76b-89e777208a1e/files/3aea5b61-24f3-49c3-94fe-5c8dc4815d33.jpg"
                      alt="После ремонта"
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold">
                      ПОСЛЕ
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto mt-12 text-center">
            <p className="text-lg text-gray-600 mb-6">Больше отзывов и работ на наших страницах:</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://www.avito.ru/user/8cb1c0e3aa6eadda271530fdcdcab569/profile" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 w-full sm:w-auto">
                  <Icon name="ExternalLink" size={20} className="mr-2" />
                  Авито
                </Button>
              </a>
              <a href="https://profi.ru/profile/KirdeyYI/?ysclid=mov2lcb7y1982672858" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 w-full sm:w-auto">
                  <Icon name="ExternalLink" size={20} className="mr-2" />
                  Профи.ру
                </Button>
              </a>
            </div>
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
              <a href="tel:84992013135" className="group">
                <div className="flex items-center gap-4 bg-white border-2 border-gray-100 hover:border-primary/40 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Icon name="Phone" size={26} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">Телефон</p>
                    <p className="text-lg font-bold text-gray-900">8 (499) 201-31-35</p>
                    <p className="text-xs text-gray-400 mt-0.5">Позвонить сейчас</p>
                  </div>
                </div>
              </a>

              <a href="https://wa.me/79966547924" target="_blank" rel="noopener noreferrer" className="group">
                <div className="flex items-center gap-4 bg-white border-2 border-gray-100 hover:border-green-300 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-green-100 transition-colors">
                    <Icon name="MessageCircle" size={26} className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">WhatsApp</p>
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

      <section className="py-10 bg-white scroll-reveal">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-center text-xs text-gray-400 mb-4">Реклама</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a target="_blank" rel="nofollow" href="https://dkfrh.com/g/g868s26t045da5bb3afda277ac0837/?i=4&subid=master&erid=2bL9aMPo2e49hMef4pfysY26Ez" className="flex-shrink-0">
                <img width="240" height="400" border={0} src="https://aflink.ru/b/g868s26t045da5bb3afda277ac0837/" alt="OZON Travel" className="w-[240px] h-[400px] object-cover rounded-xl shadow-md hover:shadow-lg transition-shadow" />
              </a>
              <a target="_blank" rel="nofollow" href="https://dorinebeaumont.com/g/1f04hgqyjx5da5bb3afdccddac0aa6/?i=4&subid=master&erid=2bL9aMPo2e49hMef4piUPtz5CJ" className="flex-shrink-0">
                <img width="240" height="400" border={0} src="https://aflink.ru/b/1f04hgqyjx5da5bb3afdccddac0aa6/" alt="Broadway-moscow" className="w-[240px] h-[400px] object-cover rounded-xl shadow-md hover:shadow-lg transition-shadow" />
              </a>

            </div>
            <p className="text-center text-[10px] text-gray-300 mt-3">erid: Y1jgkD6uB6jK1phqkTLTbNJPorAE</p>
          </div>
        </div>
      </section>

      <a
        href="https://wa.me/79966547924"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 animate-scale-in"
        aria-label="Написать в WhatsApp"
      >
        <Icon name="MessageCircle" size={32} />
      </a>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Icon name="Wrench" size={32} />
              <h3 className="text-2xl font-bold">Мастер на час <span className="text-base font-normal text-gray-400">в Отрадном СВАО г. Москвы</span></h3>
            </div>
            <p className="text-gray-400 mb-6">
              Профессиональные мастера для решения ваших бытовых задач
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-6">
              <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
              <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
              <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
              <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
              <a href="/articles" className="hover:text-primary transition-colors font-medium text-white/90">Полезные советы</a>
            </div>
            <div className="border-t border-gray-700 pt-6 mb-6 text-left bg-gray-800/50 rounded-xl p-5 text-sm text-gray-400 space-y-1">
              <p className="text-gray-300 font-semibold mb-2 flex items-center gap-2">
                <Icon name="ShieldCheck" size={16} className="text-primary" />
                Аккредитация на право поверки водосчётчиков
              </p>
              <p><span className="text-gray-500">Организация:</span> ГБУ «Жилищник района Отрадное»</p>
              <p><span className="text-gray-500">ИНН:</span> 7715488558</p>
              <p><span className="text-gray-500">Номер аттестата:</span> RA.RU.315030</p>
              <p><span className="text-gray-500">Адрес:</span> Россия, г. Москва, ул. Мусоргского, д. 7, помещение 2/1, пом. II, комната 16</p>
              <a
                href="https://pub.fsa.gov.ru/ral/view/70429/applicant"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-2 text-primary hover:text-primary/80 transition-colors font-medium"
              >
                <Icon name="ExternalLink" size={14} />
                Проверить в реестре Росаккредитации
              </a>
            </div>
            <p className="text-gray-500 text-sm">
              © 2024 Мастер на час. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;