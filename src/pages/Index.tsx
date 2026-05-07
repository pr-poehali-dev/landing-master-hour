import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const services = [
    {
      icon: "Wrench",
      title: "Электромонтажные работы",
      description: "Замена розеток, выключателей, светильников",
      price: "от 600 ₽"
    },
    {
      icon: "Droplets",
      title: "Сантехнические работы",
      description: "Установка смесителей, замена труб, устранение протечек",
      price: "от 600 ₽"
    },
    {
      icon: "Paintbrush",
      title: "Косметический ремонт",
      description: "Покраска, поклейка обоев, шпатлевка",
      price: "от 600 ₽"
    },
    {
      icon: "Hammer",
      title: "Сборка мебели",
      description: "Монтаж шкафов, полок, установка карнизов",
      price: "от 600 ₽"
    },
    {
      icon: "Settings",
      title: "Ремонт техники",
      description: "Мелкий ремонт бытовой техники и электроники",
      price: "от 600 ₽"
    },
    {
      icon: "Home",
      title: "Общестроительные работы",
      description: "Установка дверей, замена замков, мелкий ремонт",
      price: "от 600 ₽"
    }
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
            Мастер на час
          </h1>
          <a href="tel:84992013135">
            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="Phone" size={18} className="mr-2" />
              8 (499) 201-31-35
            </Button>
          </a>
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
                Мелкий ремонт и бытовые услуги по честным ценам
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

      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Наши услуги</h2>
            <p className="text-lg text-gray-600">Решаем любые бытовые задачи быстро и качественно</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={28} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-gradient-to-br from-blue-50 to-white">
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

      <section id="portfolio" className="py-20 bg-white">
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

      <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Связаться с нами</h2>
              <p className="text-lg text-gray-600">Оставьте заявку и мы перезвоним в течение 15 минут</p>
            </div>
            
            <Card className="border-2 shadow-xl">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">
                      Ваше имя
                    </label>
                    <Input
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="text-base"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">
                      Телефон
                    </label>
                    <Input
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="text-base"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">
                      Описание задачи
                    </label>
                    <Textarea
                      placeholder="Расскажите, какая помощь вам нужна..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="text-base"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
                
                <div className="mt-8 pt-8 border-t space-y-4">
                  <div className="flex items-center gap-3 text-gray-700">
                    <Icon name="Phone" size={22} className="text-primary" />
                    <span className="text-lg font-medium">8 (499) 201-31-35</span>
                  </div>
                  <a 
                    href="https://wa.me/79966547924" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-700 hover:text-green-600 transition-colors"
                  >
                    <Icon name="MessageCircle" size={22} className="text-green-600" />
                    <span className="text-lg">WhatsApp: +7 (996) 654-79-24</span>
                  </a>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Icon name="Mail" size={22} className="text-primary" />
                    <span className="text-lg">master@example.ru</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Icon name="Clock" size={22} className="text-primary" />
                    <span className="text-lg">Ежедневно с 8:00 до 22:00</span>
                  </div>
                </div>
              </CardContent>
            </Card>
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
              <h3 className="text-2xl font-bold">Мастер на час</h3>
            </div>
            <p className="text-gray-400 mb-6">
              Профессиональные мастера для решения ваших бытовых задач
            </p>
            <div className="flex justify-center gap-6 mb-6">
              <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
              <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
              <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
              <a href="#prices" className="hover:text-primary transition-colors">Цены</a>
              <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
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