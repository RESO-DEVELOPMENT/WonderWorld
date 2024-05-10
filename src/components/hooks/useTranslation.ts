import { useRouter } from "next/router";
import en from "../../locales/en";
import vi from "../../locales/vi";
import zh from "../../locales/zh";
import { useEffect, useState } from "react";
export const useTranslation = () => {
  const router = useRouter();
  const { locale } = router;
  const [translation, setTranslation] = useState<any>(vi);

  useEffect(() => {
    switch (locale) {
      case "en":
        setTranslation(en);
        break;
      case "vi":
        setTranslation(vi);
        break;
      case "zh":
        setTranslation(zh);
        break;
    }
  }, [locale]);

  return translation;
};
