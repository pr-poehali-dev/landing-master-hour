import Icon from "@/components/ui/icon";

const SiteFooter = () => (
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
);

export default SiteFooter;