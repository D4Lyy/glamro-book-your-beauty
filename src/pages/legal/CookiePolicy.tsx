import { useTranslation } from "react-i18next";
import { LegalPage } from "./LegalPage";

const CookieIT = () => (
  <>
    <h2>1. Cosa sono i cookie</h2>
    <p>I cookie sono piccoli file di testo che i siti visitati inviano al terminale dell'Utente, dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla visita successiva. I cookie consentono al sito di riconoscere l'Utente e memorizzarne preferenze o credenziali di accesso. Esistono anche cookie di terze parti, installati da siti differenti tramite elementi incorporati (es. banner, video, mappe, social plugin).</p>

    <h2>2. Tipologie di cookie</h2>
    <p><strong>In base alla durata:</strong></p>
    <ul>
      <li><strong>Cookie di sessione:</strong> cancellati alla chiusura del browser;</li>
      <li><strong>Cookie persistenti:</strong> restano memorizzati fino alla scadenza preimpostata o cancellazione manuale.</li>
    </ul>
    <p><strong>In base alla funzione:</strong></p>
    <ul>
      <li><strong>Cookie tecnici e funzionali:</strong> permettono il corretto utilizzo del sito e delle sue funzionalità (es. carrello, login). Non richiedono consenso. Includono anche gli analytics anonimizzati.</li>
      <li><strong>Cookie di profilazione:</strong> monitorano la navigazione per offrire pubblicità personalizzate (es. annunci mirati). Richiedono consenso esplicito tramite banner (art. 7 GDPR).</li>
      <li><strong>Cookie di terze parti:</strong> possono essere installati da soggetti terzi per finalità tecniche, statistiche o di profilazione. L'utilizzo e la gestione sono soggetti alle rispettive privacy policy.</li>
    </ul>

    <h2>3. Cookie utilizzati da Glamro.it</h2>
    <p>Il sito www.glamro.it e l'App GLAMRO utilizzano le seguenti categorie di cookie:</p>
    <ul>
      <li><strong>Cookie tecnici e funzionali:</strong> garantiscono navigazione sicura, gestione login, carrello e funzionalità di base. Non richiedono consenso.</li>
      <li><strong>Cookie analitici di terze parti (Google Analytics):</strong> consentono di raccogliere statistiche anonime per migliorare l'esperienza utente. Informativa completa su: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a></li>
      <li><strong>Cookie di profilazione e marketing (terze parti):</strong> utilizzati per pubblicità comportamentale tramite:
        <ul>
          <li><strong>Meta (Facebook/Instagram) ADS</strong> – per tracciare conversioni e targettizzare annunci. Info: <a href="https://www.facebook.com/policy.php" target="_blank" rel="noopener noreferrer">https://www.facebook.com/policy.php</a></li>
          <li><strong>Google Ads e Google Remarketing</strong> – per mostrare annunci agli utenti che hanno già interagito con il sito. Info: <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">https://policies.google.com/technologies/ads</a></li>
        </ul>
      </li>
    </ul>
    <p>Questi cookie vengono installati solo previo consenso esplicito tramite banner cookie.</p>

    <h2>4. Gestione dei cookie</h2>
    <p>L'Utente può gestire i cookie tramite le impostazioni del browser:</p>
    <ul>
      <li>Google Chrome: <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">support.google.com/chrome/answer/95647</a></li>
      <li>Mozilla Firefox: <a href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie" target="_blank" rel="noopener noreferrer">support.mozilla.org</a></li>
      <li>Apple Safari: <a href="https://support.apple.com/it-it/HT201265" target="_blank" rel="noopener noreferrer">support.apple.com/it-it/HT201265</a></li>
      <li>Microsoft Edge: <a href="https://support.microsoft.com/it-it/help/4027947/microsoft-edge-delete-cookies" target="_blank" rel="noopener noreferrer">support.microsoft.com</a></li>
    </ul>
    <p>Per disattivare singolarmente i cookie di profilazione, visitare:</p>
    <ul>
      <li><a href="https://www.youronlinechoices.com/it/" target="_blank" rel="noopener noreferrer">www.youronlinechoices.com/it</a></li>
    </ul>
  </>
);

const CookieEN = () => (
  <>
    <h2>1. What are cookies</h2>
    <p>Cookies are small text files that visited sites send to the User's terminal, where they are stored and then retransmitted to the same sites on the next visit. Cookies allow the site to recognize the User and store preferences or login credentials. There are also third-party cookies, installed by different sites through embedded elements (e.g. banners, videos, maps, social plugins).</p>

    <h2>2. Types of cookies</h2>
    <p><strong>By duration:</strong></p>
    <ul>
      <li><strong>Session cookies:</strong> deleted when the browser is closed;</li>
      <li><strong>Persistent cookies:</strong> remain stored until the preset expiration or manual deletion.</li>
    </ul>
    <p><strong>By function:</strong></p>
    <ul>
      <li><strong>Technical and functional cookies:</strong> allow the proper use of the site and its features (e.g. cart, login). They do not require consent. They also include anonymized analytics.</li>
      <li><strong>Profiling cookies:</strong> monitor browsing to offer personalized advertising (e.g. targeted ads). They require explicit consent via banner (art. 7 GDPR).</li>
      <li><strong>Third-party cookies:</strong> may be installed by third parties for technical, statistical or profiling purposes. Use and management are subject to their respective privacy policies.</li>
    </ul>

    <h2>3. Cookies used by Glamro.it</h2>
    <p>The site www.glamro.it and the GLAMRO App use the following categories of cookies:</p>
    <ul>
      <li><strong>Technical and functional cookies:</strong> ensure secure browsing, login management, cart and basic features. They do not require consent.</li>
      <li><strong>Third-party analytical cookies (Google Analytics):</strong> allow the collection of anonymous statistics to improve the user experience. Full notice at: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a></li>
      <li><strong>Third-party profiling and marketing cookies:</strong> used for behavioral advertising via:
        <ul>
          <li><strong>Meta (Facebook/Instagram) ADS</strong> – to track conversions and target ads. Info: <a href="https://www.facebook.com/policy.php" target="_blank" rel="noopener noreferrer">https://www.facebook.com/policy.php</a></li>
          <li><strong>Google Ads and Google Remarketing</strong> – to show ads to users who have already interacted with the site. Info: <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">https://policies.google.com/technologies/ads</a></li>
        </ul>
      </li>
    </ul>
    <p>These cookies are installed only with explicit consent via the cookie banner.</p>

    <h2>4. Cookie management</h2>
    <p>The User can manage cookies through the browser settings:</p>
    <ul>
      <li>Google Chrome: <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">support.google.com/chrome/answer/95647</a></li>
      <li>Mozilla Firefox: <a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer">support.mozilla.org</a></li>
      <li>Apple Safari: <a href="https://support.apple.com/en-us/HT201265" target="_blank" rel="noopener noreferrer">support.apple.com/HT201265</a></li>
      <li>Microsoft Edge: <a href="https://support.microsoft.com/en-us/help/4027947/microsoft-edge-delete-cookies" target="_blank" rel="noopener noreferrer">support.microsoft.com</a></li>
    </ul>
    <p>To individually disable profiling cookies, visit:</p>
    <ul>
      <li><a href="https://www.youronlinechoices.com/" target="_blank" rel="noopener noreferrer">www.youronlinechoices.com</a></li>
    </ul>
  </>
);

const CookiePolicy = () => {
  const { i18n, t } = useTranslation();
  return (
    <LegalPage kicker={t("legal.kicker")} title={t("footer.cookies")}>
      {i18n.language.startsWith("en") ? <CookieEN /> : <CookieIT />}
    </LegalPage>
  );
};

export default CookiePolicy;
