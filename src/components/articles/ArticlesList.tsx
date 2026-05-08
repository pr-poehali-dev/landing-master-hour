import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Article } from "./articlesData";

interface ArticlesListProps {
  articles: Article[];
  onSelect: (id: number) => void;
}

const ArticlesList = ({ articles, onSelect }: ArticlesListProps) => (
  <>
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Советы от наших мастеров</h2>
      <p className="text-lg text-gray-600">Полезные статьи о ремонте и обслуживании жилья</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {articles.map((article) => (
        <Card
          key={article.id}
          className="border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
          onClick={() => onSelect(article.id)}
        >
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
            <p className="text-gray-600 text-sm leading-relaxed mb-4">{article.description}</p>
            <span className="text-primary text-sm font-medium flex items-center gap-1">
              Читать статью <Icon name="ArrowRight" size={16} />
            </span>
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
  </>
);

export default ArticlesList;
