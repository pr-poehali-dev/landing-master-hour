import { Helmet } from "react-helmet-async";
import NotFound from "@/pages/NotFound";

const SeoNotFound = () => (
  <>
    <Helmet>
      <title>404 — Страница не найдена</title>
      <meta name="robots" content="noindex, nofollow" />
    </Helmet>
    <NotFound />
  </>
);

export default SeoNotFound;
