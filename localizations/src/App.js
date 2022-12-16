import { useState, useEffect } from "react";
import { IntlProvider, FormattedMessage, useIntl } from "react-intl";

const messages = {
  "tr-TR": {
    title: "Merhaba Dünya",
    description: "{count} yeni mesajiniz var",
  },
  "en-US": {
    title: "Hello World",
    description: "You have {count} new messages",
  },
};

function App() {
  const isLocale = localStorage.getItem("locale");
  const defaultLocale = isLocale ? isLocale : navigator.language;
  const [locale, setLocale] = useState(defaultLocale);

  useEffect(() => {
    localStorage.setItem("locale", locale);
  }, [locale]);

  return (
    <div className='App'>
      <IntlProvider locale={locale} messages={messages[locale]}>
        <FormattedMessage id='title' />
        <p>
          <FormattedMessage id='description' values={{ count: 4 }} />
        </p>
        <br />
        <br />
        <button onClick={() => setLocale("tr-TR")}>TR</button>&nbsp;
        <button onClick={() => setLocale("en-US")}>EN</button>
      </IntlProvider>
    </div>
  );
}

export default App;
