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
      price: "от 500 ₽"
    },
    {
      icon: "Droplets",
      title: "Сантехнические работы",
      description: "Установка смесителей, замена труб, устранение протечек",
      price: "от 800 ₽"
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
      price: "от 700 ₽"
    },
    {
      icon: "Settings",
      title: "Ремонт техники",
      description: "Мелкий ремонт бытовой техники и электроники",
      price: "от 1000 ₽"
    },
    {
      icon: "Home",
      title: "Общестроительные работы",
      description: "Установка дверей, замена замков, мелкий ремонт",
      price: "от 900 ₽"
    }
  ];

  const reviews = [
    {
      name: "Анна Петрова",
      rating: 5,
      text: "Отличный мастер! Быстро установил розетки и выключатели. Все аккуратно, чисто. Рекомендую!",
      date: "15 октября 2024"
    },
    {
      name: "Дмитрий Соколов",
      rating: 5,
      text: "Вызывал для сборки кухни. Работа выполнена качественно и в срок. Мастер вежливый, профессионал своего дела.",
      date: "8 октября 2024"
    },
    {
      name: "Елена Морозова",
      rating: 5,
      text: "Спасибо за помощь! Устранили протечку крана, заменили смеситель. Все быстро и по честной цене.",
      date: "3 октября 2024"
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
          <Button className="bg-primary hover:bg-primary/90">
            <Icon name="Phone" size={18} className="mr-2" />
            8 (499) 201-31-35
          </Button>
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
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Вызвать мастера
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Узнать цены
                </Button>
              </div>
            </div>
            <div className="animate-scale-in hidden md:block">
              <img 
                src="https://cdn.poehali.dev/projects/2290166f-2258-4976-a76b-89e777208a1e/files/eb1c9ac6-333b-4f09-92fd-a26c3c266691.jpg" 
                alt="Профессиональный мастер"
                className="rounded-2xl shadow-2xl w-full"
              />
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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-shadow animate-scale-in" style={{ animationDelay: `${index * 150}ms` }}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={18} className="text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                  </div>
                  <CardDescription className="text-sm text-gray-500">{review.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Прозрачные цены</h2>
              <p className="text-lg text-gray-600">Без скрытых платежей и доплат</p>
            </div>
            
            <Card className="border-2 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-primary to-secondary text-white">
                <CardTitle className="text-2xl">Стоимость услуг</CardTitle>
                <CardDescription className="text-white/90 text-base">Цены указаны за работу мастера</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b">
                    <span className="text-lg">Выезд мастера</span>
                    <span className="text-xl font-bold text-primary">Бесплатно</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b">
                    <span className="text-lg">Минимальный заказ</span>
                    <span className="text-xl font-bold text-primary">1500 ₽</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b">
                    <span className="text-lg">Час работы мастера</span>
                    <span className="text-xl font-bold text-primary">1200 ₽</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-lg">Срочный вызов</span>
                    <span className="text-xl font-bold text-primary">+50%</span>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-accent rounded-lg">
                  <p className="text-center text-gray-700 font-medium flex items-center justify-center gap-2">
                    <Icon name="Shield" size={20} className="text-primary" />
                    Гарантия на все виды работ — 6 месяцев
                  </p>
                </div>
              </CardContent>
            </Card>
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