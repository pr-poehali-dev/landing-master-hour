import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const articles = [
  {
    id: 3,
    icon: "ClipboardCheck",
    title: "Провести поверку приборов учёта могут сотрудники ГБУ «Жилищник»",
    description: "Теперь поверку приборов учёта воды могут провести сотрудники ГБУ «Жилищник района Отрадное» — на дому, без демонтажа счётчиков.",
    date: "7 мая 2025",
    readTime: "2 мин",
    content: {
      intro: "Теперь поверку приборов учёта воды могут провести сотрудники ГБУ «Жилищник района Отрадное».",
      sections: [
        {
          title: "Как это работает",
          text: "Поверка осуществляется на дому и не требует демонтажа счётчиков. Специалист приедет в удобное для вас время, проведёт поверку на месте, оформит все необходимые документы и самостоятельно передаст их в ресурсный отдел — вам ничего делать не нужно."
        },
        {
          title: "Стоимость",
          text: "Стоимость услуги — 750 рублей. Для льготных категорий граждан предусмотрены скидки."
        },
        {
          title: "Как записаться",
          text: "Подать заявку на оказание данной услуги можно по телефону: 8 (499) 201-31-35\n\nРежим работы: понедельник–пятница с 8:00 до 17:00."
        }
      ]
    }
  },
  {
    id: 2,
    icon: "FileCheck",
    title: "Что делать после поверки или замены водосчётчиков, если работы выполнялись сторонней организацией",
    description: "Если поверку или замену счётчиков делала не ГБУ «Жилищник», важно самостоятельно передать документы в ресурсный отдел. Иначе начисления пойдут по нормативам, а не по счётчику.",
    date: "7 мая 2025",
    readTime: "6 мин",
    content: {
      intro: "Если вы провели поверку или замену водосчётчиков не через ГБУ «Жилищник района Отрадное», а с привлечением сторонней организации, важно самостоятельно передать документы в ресурсный отдел управляющей компании. Иначе начисления за воду продолжат идти по нормативам или среднемесячному потреблению, а не по показаниям счётчика.",
      sections: [
        {
          title: "Какие документы нужно сдать",
          text: "После завершения работ исполнитель обязан выдать вам пакет документов. Для ресурсного отдела ГБУ «Жилищник» потребуются:"
        },
        {
          title: "",
          list: [
            "Акт выполненных работ (или акт поверки) — подтверждает факт проведения работ: дату и тип работ, данные о счётчике (модель, заводской номер), показания на момент ввода в эксплуатацию, номер записи в ФГИС «Аршин», подписи сторон.",
            "Свидетельство о поверке — официальный документ, подтверждающий соответствие счётчика метрологическим требованиям.",
            "Копия аттестата аккредитации организации, проводившей работы — доказывает правомерность выполнения поверки.",
            "Документы на новый счётчик (при замене): паспорт прибора учёта, договор купли-продажи или чек, гарантийный талон.",
            "Чек об оплате услуг — подтверждает факт оплаты выполненных работ."
          ]
        },
        {
          title: "Куда и как сдавать документы",
          text: "Документы необходимо предоставить в ресурсный отдел ГБУ «Жилищник района Отрадное» одним из трёх способов:"
        },
        {
          title: "",
          list: [
            "Лично — по адресу: ул. Каргопольская, д. 17, подъезд 4, кабинет 14.",
            "По электронной почте — отправьте сканы или фото всех документов на KomOtradnoe@yandex.ru. В теме письма укажите: «Документы на ввод в эксплуатацию водосчётчика, [ваш адрес]». В ответ вы получите подтверждение о получении.",
            "Через почтовый ящик — при входе в здание ГБУ «Жилищник района Отрадное» (ул. Каргопольская, д. 17, подъезд 4) установлен специальный ящик для приёма документов. Вложите копии с сопроводительной запиской: адрес квартиры, ФИО собственника, контактный телефон."
          ]
        },
        {
          title: "График работы ресурсного отдела",
          list: [
            "Понедельник: с 8:00 до 17:00.",
            "Вторник и четверг: с 11:00 до 20:00.",
            "Обед: с 12:00 до 12:45.",
            "Телефон для консультации: +7 (499) 907-14-19."
          ]
        },
        {
          title: "Важные нюансы",
          list: [
            "Срок подачи. Рекомендуем сдать документы в течение 10 рабочих дней. До регистрации счётчика начисления могут производиться по нормативам с коэффициентом 1,5 или по среднемесячному потреблению.",
            "Проверка данных в ФГИС «Аршин». Перед подачей убедитесь, что сведения о поверке внесены в реестр — проверьте по заводскому номеру счётчика на сайте ФГИС «Аршин».",
            "Отметка о приёме. При личной подаче попросите сотрудника поставить отметку на копии документов (дата, входящий номер, подпись). Это защитит вас в случае утери оригинала.",
            "Контроль результата. В течение 30 дней после подачи проверьте начисления в личном кабинете на mos.ru или в квитанции. Если изменения не отразились — уточните статус по телефону +7 (499) 907-14-19."
          ]
        }
      ]
    }
  },
  {
    id: 1,
    icon: "Gauge",
    title: "Как часто нужно делать поверку водосчётчиков в районе Отрадное (Москва) и как записаться",
    description: "Владельцы квартир обязаны периодически проводить поверку приборов учёта воды — это закреплено в ст. 13 ФЗ № 102. Разберёмся, как это сделать жителям района Отрадное.",
    date: "7 мая 2025",
    readTime: "7 мин",
    content: {
      intro: "Владельцы квартир обязаны периодически проводить поверку приборов учёта воды — это закреплено в ст. 13 ФЗ № 102 «Об обеспечении единства измерений». Разберёмся, как это сделать жителям района Отрадное в Москве.",
      sections: [
        {
          title: "Периодичность поверки",
          text: "Межповерочный интервал для счётчиков воды составляет от 3 до 6 лет — точный срок зависит от модели и технических характеристик прибора, жёсткости воды (влияет на износ механизма), а также условий эксплуатации. Обратите внимание: у счётчиков холодной (ХВС) и горячей (ГВС) воды сроки поверки могут не совпадать."
        },
        {
          title: "Где найти дату следующей поверки",
          list: [
            "Технический паспорт счётчика — в нём указана дата первой поверки и периодичность процедур.",
            "Квитанция на оплату ЖКУ — иногда срок поверки прописывают в платёжном документе.",
            "Личный кабинет на mos.ru — информация может быть доступна в разделе коммунальных услуг.",
            "Реестр ФГИС «Аршин» — официальный государственный реестр, где хранятся данные о поверках."
          ]
        },
        {
          title: "Как записаться на поверку в районе Отрадное",
          text: "Провести поверку приборов учёта в районе Отрадное могут сотрудники ГБУ «Жилищник района Отрадное». Услуга выполняется на дому и не требует демонтажа счётчиков. Стоимость услуги — 750 рублей. Для льготных категорий граждан предусмотрены скидки.\n\nЧтобы записаться, позвоните по телефону: 8 (499) 201-31-35"
        },
        {
          title: "Полезные советы",
          list: [
            "Планируйте заранее. Не дожидайтесь последнего дня: из-за очередей вы можете пропустить срок поверки. Лучше подать заявку за 2–3 недели до окончания межповерочного интервала.",
            "Проверьте аккредитацию организации. Если вы выбираете не «Жилищник», убедитесь, что компания внесена в реестр аккредитованных лиц на сайте Росаккредитации.",
            "Стоимость услуги ГБУ «Жилищник района Отрадное» — 750 рублей. Также есть скидки для льготной категории граждан.",
            "Получите документы после поверки: акт поверки, чек об оплате, копию правоустанавливающих документов организации.",
            "Убедитесь, что данные внесены в ФГИС «Аршин». Зайдите на сайт реестра и найдите запись по номеру счётчика.",
            "Сотрудники ГБУ «Жилищник района Отрадное» самостоятельно передают комплект документов в ресурсный отдел."
          ]
        },
        {
          title: "Что будет, если пропустить срок?",
          list: [
            "Первые 3 месяца плату начисляют по среднемесячному потреблению за последние полгода.",
            "С 4-го месяца — по нормативу с повышающим коэффициентом 1,5. Это заметно увеличит сумму в квитанции."
          ]
        }
      ]
    }
  }
];

const Articles = () => {
  const navigate = useNavigate();
  const [openArticle, setOpenArticle] = useState<number | null>(null);

  const selected = articles.find(a => a.id === openArticle);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          {openArticle ? (
            <Button variant="ghost" onClick={() => setOpenArticle(null)} className="flex items-center gap-2">
              <Icon name="ArrowLeft" size={20} />
              К списку статей
            </Button>
          ) : (
            <Button variant="ghost" onClick={() => navigate("/")} className="flex items-center gap-2">
              <Icon name="ArrowLeft" size={20} />
              На главную
            </Button>
          )}
          <h1 className="text-2xl font-bold text-primary flex items-center gap-2">
            <Icon name="BookOpen" size={26} />
            Полезные советы
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">

          {!openArticle ? (
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
                    onClick={() => setOpenArticle(article.id)}
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
            </>
          ) : selected ? (
            <article className="bg-white rounded-2xl border-2 shadow-sm p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name={selected.icon} size={24} className="text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <span>{selected.date}</span>
                    <span>·</span>
                    <span>{selected.readTime}</span>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-snug">{selected.title}</h2>

              <p className="text-gray-700 text-base leading-relaxed mb-8 text-lg">{selected.content.intro}</p>

              {selected.content.sections.map((section, i) => (
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

              {selected.id === 2 ? (
                <div className="mt-10 bg-primary/5 rounded-2xl p-8 border-2 border-primary/20 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Вопросы по сдаче документов?</h3>
                  <p className="text-gray-600 mb-5">Ресурсный отдел ГБУ «Жилищник района Отрадное» — Пн 8:00–17:00, Вт и Чт 11:00–20:00</p>
                  <a href="tel:74999071419">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-10 py-6">
                      <Icon name="Phone" size={20} className="mr-2" />
                      +7 (499) 907-14-19
                    </Button>
                  </a>
                </div>
              ) : (
                <div className="mt-10 bg-primary/5 rounded-2xl p-8 border-2 border-primary/20 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Записаться на поверку счётчиков</h3>
                  <p className="text-gray-600 mb-5">ГБУ «Жилищник района Отрадное» — выезд на дом, без демонтажа</p>
                  <a href="tel:84992013135">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-10 py-6">
                      <Icon name="Phone" size={20} className="mr-2" />
                      8 (499) 201-31-35
                    </Button>
                  </a>
                </div>
              )}
            </article>
          ) : null}

          {!openArticle && (
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
          )}
        </div>
      </main>
    </div>
  );
};

export default Articles;