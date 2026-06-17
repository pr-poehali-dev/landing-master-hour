import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const VacancyDialog = ({ open, onClose }: { open: boolean; onClose: () => void }) => (
  <Dialog open={open} onOpenChange={onClose}>
    <DialogContent className="max-w-lg">
      <DialogHeader>
        <DialogTitle className="text-xl flex items-center gap-2">
          <Icon name="HardHat" size={22} className="text-primary" />
          Вакансия: слесарь-сантехник
        </DialogTitle>
      </DialogHeader>
      <div className="space-y-4 text-sm">
        <div className="bg-primary/10 rounded-lg p-4 space-y-2">
          <p className="text-base font-semibold text-primary">ГБУ «Жилищник района Отрадное»</p>
          <p className="text-gray-600">Официальная управляющая компания района Отрадное, СВАО г. Москвы</p>
        </div>
        <div className="space-y-3">
          <div className="flex gap-3">
            <Icon name="Banknote" size={18} className="text-primary mt-0.5 shrink-0" />
            <div>
              <p className="font-semibold text-gray-800">Заработная плата</p>
              <p className="text-gray-600">от 80 000 ₽ в месяц</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Icon name="Clock" size={18} className="text-primary mt-0.5 shrink-0" />
            <div>
              <p className="font-semibold text-gray-800">График работы</p>
              <p className="text-gray-600">Пн–Пт, с 08:00 до 17:00</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Icon name="MapPin" size={18} className="text-primary mt-0.5 shrink-0" />
            <div>
              <p className="font-semibold text-gray-800">Место работы</p>
              <p className="text-gray-600">Район Отрадное, СВАО, г. Москва</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Icon name="ListChecks" size={18} className="text-primary mt-0.5 shrink-0" />
            <div>
              <p className="font-semibold text-gray-800">Обязанности</p>
              <ul className="text-gray-600 space-y-1 mt-1 list-disc list-inside">
                <li>Техническое обслуживание и ремонт сантехнического оборудования</li>
                <li>Замена труб, смесителей, унитазов, батарей</li>
                <li>Устранение засоров и протечек</li>
                <li>Поверка и установка приборов учёта воды</li>
                <li>Работа с жильцами многоквартирных домов</li>
              </ul>
            </div>
          </div>
          <div className="flex gap-3">
            <Icon name="Star" size={18} className="text-primary mt-0.5 shrink-0" />
            <div>
              <p className="font-semibold text-gray-800">Требования</p>
              <ul className="text-gray-600 space-y-1 mt-1 list-disc list-inside">
                <li>Опыт работы слесарем-сантехником от 1 года</li>
                <li>Знание основ сантехнических работ</li>
                <li>Ответственность и аккуратность</li>
              </ul>
            </div>
          </div>
          <div className="flex gap-3">
            <Icon name="Gift" size={18} className="text-primary mt-0.5 shrink-0" />
            <div>
              <p className="font-semibold text-gray-800">Условия</p>
              <ul className="text-gray-600 space-y-1 mt-1 list-disc list-inside">
                <li>Официальное трудоустройство по ТК РФ</li>
                <li>Стабильная выплата зарплаты</li>
                <li>Дружный коллектив, работа рядом с домом</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 rounded-lg p-4 space-y-1">
          <p className="font-semibold text-gray-800">Отклик на вакансию:</p>
          <p className="text-gray-600">ул. Каргопольская, д. 17, подъезд 4, каб. 3</p>
          <a href="tel:+74992013135" className="text-primary font-medium hover:underline">8-499-201-31-35</a>
          <p className="text-gray-500 text-xs">Пн–Пт с 8:00 до 17:00</p>
        </div>
      </div>
    </DialogContent>
  </Dialog>
);

const SiteFooter = () => {
  const [vacancyOpen, setVacancyOpen] = useState(false);
  return (
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
          <a href="/history" className="hover:text-primary transition-colors font-medium text-white/90">История района</a>
          <button onClick={() => setVacancyOpen(true)} className="hover:text-primary transition-colors font-medium text-yellow-400 flex items-center gap-1">
            <Icon name="Briefcase" size={15} />
            Вакансии
          </button>
        </div>
        <VacancyDialog open={vacancyOpen} onClose={() => setVacancyOpen(false)} />
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
};

export default SiteFooter;