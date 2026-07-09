import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { historyArticles, HistoryArticle } from "@/components/history/historyData";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SiteHeader from "@/components/index/SiteHeader";
import SiteFooter from "@/components/index/SiteFooter";

const ArticleDetail = ({ article, onBack }: { article: HistoryArticle; onBack: () => void }) => (
  <article className="max-w-3xl mx-auto">
    <button onClick={onBack} className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8 font-medium">
      <Icon name="ArrowLeft" size={18} />
      Назад к статьям
    </button>
    <img src={article.image} alt={article.title} loading="lazy" decoding="async" className="w-full h-72 object-cover rounded-2xl mb-8 shadow-lg" />
    <div className="flex items-center gap-3 text-sm text-gray-400 mb-4">
      <span>{article.date}</span>
      <span>·</span>
      <Icon name="Clock" size={14} />
      <span>{article.readTime}</span>
    </div>
    <h1 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">{article.title}</h1>
    <p className="text-lg text-gray-600 mb-8 leading-relaxed border-l-4 border-primary pl-4 italic">{article.content.intro}</p>
    <div className="space-y-8">
      {article.content.sections.map((section, i) => (
        <div key={i}>
          <h2 className="text-xl font-bold text-gray-900 mb-3">{section.title}</h2>
          {section.text && <p className="text-gray-700 leading-relaxed whitespace-pre-line">{section.text}</p>}
          {section.list && (
            <ul className="space-y-2">
              {section.list.map((item, j) => (
                <li key={j} className="flex items-start gap-3 text-gray-700">
                  <span className="mt-2 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  </article>
);

const History = () => {
  const [openId, setOpenId] = useState<number | null>(null);
  const selected = historyArticles.find(a => a.id === openId);

  const pageTitle = selected
    ? `${selected.title} | История района Отрадное`
    : "История района Отрадное | Мастер на час Отрадное";

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content="История московского района Отрадное: от деревни до современного мегаполиса. Усадьбы, парки, метро и люди, которые здесь жили." />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://master-otradnoe.ru/history" />
      </Helmet>

      <SiteHeader />

      <div className="pt-24 pb-4 bg-gradient-to-br from-amber-50 via-white to-orange-50">
        <div className="container mx-auto px-4 py-10 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            <Icon name="BookOpen" size={15} />
            Краеведение
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">История района Отрадное</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">От старинной деревни на берегу Яузы — до одного из крупнейших районов Москвы</p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        {!selected ? (
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {historyArticles.map((article) => (
                <Card
                  key={article.id}
                  className="border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden"
                  onClick={() => setOpenId(article.id)}
                >
                  <img src={article.image} alt={article.title} loading="lazy" decoding="async" className="w-full h-48 object-cover" />
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                      <span>{article.date}</span>
                      <span>·</span>
                      <Icon name="Clock" size={12} />
                      <span>{article.readTime}</span>
                    </div>
                    <h2 className="text-lg font-bold text-gray-900 mb-2 leading-snug">{article.title}</h2>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{article.description}</p>
                    <span className="text-primary text-sm font-medium flex items-center gap-1">
                      Читать статью <Icon name="ArrowRight" size={16} />
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ) : (
          <ArticleDetail article={selected} onBack={() => setOpenId(null)} />
        )}
      </main>

      <SiteFooter />
    </div>
  );
};

export default History;