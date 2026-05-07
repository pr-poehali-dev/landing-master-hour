import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";

const articles = [
  {
    icon: "Zap",
    title: "Как заменить розетку самостоятельно",
    description: "Пошаговая инструкция по безопасной замене розетки. Когда стоит вызвать мастера, а когда можно справиться самому.",
    date: "15 апреля 2025",
    readTime: "5 мин"
  },
  {
    icon: "Droplets",
    title: "Что делать, если течёт кран",
    description: "Разбираемся в причинах протечки и рассказываем, как временно устранить проблему до приезда сантехника.",
    date: "22 апреля 2025",
    readTime: "4 мин"
  },
  {
    icon: "Thermometer",
    title: "Почему батареи плохо греют и что с этим делать",
    description: "Основные причины слабого нагрева радиаторов. Как правильно спустить воздух и когда нужна промывка системы.",
    date: "1 мая 2025",
    readTime: "6 мин"
  },
  {
    icon: "Hammer",
    title: "Как правильно повесить карниз и полку",
    description: "Советы по выбору крепежа в зависимости от типа стены. Как найти пустоты и надёжно закрепить конструкцию.",
    date: "5 мая 2025",
    readTime: "5 мин"
  },
  {
    icon: "Paintbrush",
    title: "Подготовка стен к покраске: 5 важных шагов",
    description: "Как правильно зашпатлевать, зашкурить и загрунтовать стены, чтобы краска легла ровно и держалась долго.",
    date: "7 мая 2025",
    readTime: "7 мин"
  },
  {
    icon: "Lock",
    title: "Как заменить замок в двери",
    description: "Разбираем виды замков и рассказываем, как выбрать надёжный. Пошаговая инструкция по замене замка.",
    date: "7 мая 2025",
    readTime: "5 мин"
  }
];

const Articles = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" onClick={() => navigate("/")} className="flex items-center gap-2">
            <Icon name="ArrowLeft" size={20} />
            На главную
          </Button>
          <h1 className="text-2xl font-bold text-primary flex items-center gap-2">
            <Icon name="BookOpen" size={26} />
            Полезные советы
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Советы от наших мастеров</h2>
            <p className="text-lg text-gray-600">Полезные статьи о ремонте и обслуживании жилья</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <Card key={index} className="border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <Icon name={article.icon} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-lg leading-snug">{article.title}</CardTitle>
                  <div className="flex items-center gap-3 text-sm text-gray-400 mt-1">
                    <span>{article.date}</span>
                    <span>·</span>
                    <span>{article.readTime}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed">{article.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center bg-primary/5 rounded-2xl p-10 border-2 border-primary/20">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Нужна помощь мастера?</h3>
            <p className="text-gray-600 mb-6">Вызовите профессионала — приедем в день обращения</p>
            <a href="tel:84992013135">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-10 py-6">
                <Icon name="Phone" size={20} className="mr-2" />
                Вызвать мастера
              </Button>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Articles;
