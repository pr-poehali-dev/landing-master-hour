import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";

interface ArticlesHeaderProps {
  openArticle: number | null;
  onBack: () => void;
}

const ArticlesHeader = ({ openArticle, onBack }: ArticlesHeaderProps) => {
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center gap-4">
        {openArticle ? (
          <Button variant="ghost" onClick={onBack} className="flex items-center gap-2">
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
  );
};

export default ArticlesHeader;
