import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Article } from "./articlesData";

interface ArticleDetailProps {
  article: Article;
}

const ArticleDetail = ({ article }: ArticleDetailProps) => (
  <article className="bg-white rounded-2xl border-2 shadow-sm p-4 sm:p-6 md:p-8">
    <div className="flex items-center gap-3 mb-6">
      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
        <Icon name={article.icon} size={24} className="text-primary" />
      </div>
      <div>
        <div className="flex items-center gap-3 text-sm text-gray-400">
          <span>{article.date}</span>
          <span>·</span>
          <span>{article.readTime}</span>
        </div>
      </div>
    </div>

    <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-snug">{article.title}</h2>

    <p className="text-gray-700 text-base leading-relaxed mb-8 text-lg">{article.content.intro}</p>

    {article.content.sections.map((section, i) => (
      <div key={i} className="mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{section.title}</h3>
        {section.text && section.text.split('\n\n').map((para, j) => (
          <p key={j} className="text-gray-700 leading-relaxed mb-3">{para}</p>
        ))}
        {section.list && (
          <ul className="space-y-2">
            {section.list.map((item, j) => (
              <li key={j} className="flex items-start gap-3 text-gray-700">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    ))}

    {[5, 6, 7].includes(article.id) ? (
      <div className="mt-10 bg-primary/5 rounded-2xl p-4 sm:p-8 border-2 border-primary/20 text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Не рискуйте — вызовите мастера</h3>
        <p className="text-gray-600 mb-5">ГБУ «Жилищник района Отрадное» — приедем в день обращения, пн–пт с 8:00 до 17:00</p>
        <a href="tel:84992013135">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-base sm:text-lg px-6 sm:px-10 py-4 sm:py-6 w-full sm:w-auto">
            <Icon name="Phone" size={20} className="mr-2" />
            Вызвать мастера
          </Button>
        </a>
      </div>
    ) : article.id === 2 ? (
      <div className="mt-10 bg-primary/5 rounded-2xl p-4 sm:p-8 border-2 border-primary/20 text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Вопросы по сдаче документов?</h3>
        <p className="text-gray-600 mb-5">Ресурсный отдел ГБУ «Жилищник района Отрадное» — Пн 8:00–17:00, Вт и Чт 11:00–20:00</p>
        <a href="tel:74999071419">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-base sm:text-lg px-6 sm:px-10 py-4 sm:py-6 w-full sm:w-auto">
            <Icon name="Phone" size={20} className="mr-2" />
            +7 (499) 907-14-19
          </Button>
        </a>
      </div>
    ) : (
      <div className="mt-10 bg-primary/5 rounded-2xl p-4 sm:p-8 border-2 border-primary/20 text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Записаться на поверку счётчиков</h3>
        <p className="text-gray-600 mb-5">ГБУ «Жилищник района Отрадное» — выезд на дом, без демонтажа</p>
        <a href="tel:84992013135">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-base sm:text-lg px-6 sm:px-10 py-4 sm:py-6 w-full sm:w-auto">
            <Icon name="Phone" size={20} className="mr-2" />
            8 (499) 201-31-35
          </Button>
        </a>
      </div>
    )}
  </article>
);

export default ArticleDetail;