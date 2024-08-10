"use client"
import { useLocale } from 'next-intl';
//import { useRouter } from "next/navigation"; // Import from 'next/router'
//import { usePathname } from "next/navigation";
//import { useRouter } from 'next/navigation'
const Home = () => {
  //const router = useRouter();
 // const pathname = usePathname();
  const locale = useLocale();
  console.log(locale)

  const translations = {
    "en-US": "Welcome to our website!",
    fr: "Bienvenue sur notre site Web!",
    "tr-TR": "Siteye hoşgeldin!",
  };

  const changeLanguage = (e) => {
    const newLocale = e.target.value;
    router.push(pathname, pathname, { locale: newLocale });
  };

  return (
    <div>
      <h1>{translations[locale]}</h1>
      <p>This is the home page. The current locale is: {locale}</p>
      <select onChange={changeLanguage} defaultValue={locale}>
        <option value="en-US">English</option>
        <option value="fr">Français</option>
        <option value="tr-TR">Türkçe</option>
      </select>
    </div>
  );
};

export default Home;
