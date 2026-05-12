import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { articles } from "@/components/articles/articlesData";
import ArticlesHeader from "@/components/articles/ArticlesHeader";
import ArticlesList from "@/components/articles/ArticlesList";
import ArticleDetail from "@/components/articles/ArticleDetail";

const Articles = () => {
  const [openArticle, setOpenArticle] = useState<number | null>(null);

  const selected = articles.find(a => a.id === openArticle);

  const pageTitle = selected
    ? `${selected.title} | Мастер на час Отрадное`
    : "Полезные советы по ремонту и сантехнике | Мастер на час Отрадное";

  const pageDescription = selected
    ? selected.description
    : "Советы от мастеров ГБУ Жилищник района Отрадное: сантехника, замена батарей, поверка счётчиков, устранение засоров. Когда лучше вызвать профессионала.";

  const jsonLd = selected ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": selected.title,
    "description": selected.description,
    "datePublished": "2025-05-08",
    "author": {
      "@type": "Organization",
      "name": "ГБУ «Жилищник района Отрадное»"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Мастер на час Отрадное",
      "telephone": "+74992013135"
    }
  } : {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Полезные советы по ремонту и сантехнике",
    "description": "Статьи от мастеров ГБУ Жилищник района Отрадное",
    "itemListElement": articles.map((a, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": a.title,
      "description": a.description
    }))
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="сантехник Отрадное, вызвать мастера Отрадное, ГБУ Жилищник Отрадное, замена батарей, засор труб, течёт кран, поверка счётчиков воды, ремонт сантехники, мастер на час Отрадное, сантехника Москва, электрик Отрадное, вызвать электрика Отрадное, замена розеток Отрадное, электромонтажные работы СВАО, замена проводки квартира Москва, установка люстры Отрадное, подключение стиральной машины Отрадное, замена выключателя Отрадное, электрик на дом Отрадное, ГБУ Жилищник электрик, мастер электрик Отрадное СВАО, электрик СВАО Москва" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content={selected ? "article" : "website"} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" content="https://master-otradnoe.ru/articles" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <ArticlesHeader openArticle={openArticle} onBack={() => setOpenArticle(null)} />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {!openArticle ? (
            <ArticlesList articles={articles} onSelect={setOpenArticle} />
          ) : selected ? (
            <ArticleDetail article={selected} />
          ) : null}
        </div>
      </main>
    </div>
  );
};

export default Articles;