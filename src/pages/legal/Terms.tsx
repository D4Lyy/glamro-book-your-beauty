import { useTranslation } from "react-i18next";
import { LegalPage } from "./LegalPage";

const TermsIT = () => (
  <>
    <h2>Premesse</h2>
    <p>Le presenti condizioni generali di servizio e vendita (di seguito "Condizioni Generali") disciplinano: (i) la prenotazione e l'acquisto – tramite la piattaforma web www.glamro.it e l'applicazione mobile GLAMRO (di seguito, congiuntamente, la "Piattaforma") di cui è titolare la società GLAMRO S.R.L. (la "Società") – dei servizi beauty offerti da professionisti terzi ("Servizi"); (ii) la vendita diretta di prodotti, cosmetici, gift card e beni offerti dalla Società nella sezione E-commerce ("Prodotti"); (iii) l'utilizzo della Piattaforma stessa.</p>

    <h2>Definizioni</h2>
    <ul>
      <li><strong>Cliente/Utente:</strong> Qualsiasi persona fisica o giuridica che si registra sulla Piattaforma per acquistare Servizi o Prodotti.</li>
      <li><strong>Professionista/Partner:</strong> Barbieri, parrucchieri, estetiste e operatori del benessere che, registrati sulla Piattaforma, forniscono i Servizi ai Clienti in autonomia operativa.</li>
      <li><strong>Servizi:</strong> I servizi di beauty on-demand (es. taglio, barba, piega, trattamenti) offerti dai Professionisti.</li>
      <li><strong>Prodotti:</strong> I beni fisici (shampoo, creme, accessori) venduti direttamente da GLAMRO tramite lo shop in-App.</li>
    </ul>

    <h2>1. Accettazione delle condizioni</h2>
    <ul>
      <li>L'utilizzo della Piattaforma implica l'accettazione integrale delle presenti Condizioni. L'accettazione avviene tramite procedura "point and click" al momento della registrazione o dell'acquisto.</li>
      <li>Il contratto è archiviato digitalmente sui server della Società ed è accessibile, previa richiesta, da parte dell'Utente.</li>
      <li>Le fasi tecniche per la conclusione del contratto prevedono: selezione del Servizio o Prodotto, accesso/registrazione, inserimento dati richiesti, accettazione T&amp;C e conferma dell'ordine.</li>
      <li>L'Utente ha la possibilità di correggere eventuali errori prima dell'invio dell'ordine.</li>
      <li>La lingua disponibile per la conclusione del contratto è l'italiano.</li>
    </ul>

    <h2>2. Descrizione del servizio (Modello Marketplace)</h2>
    <ul>
      <li>GLAMRO agisce come intermediario tecnologico (tramite piattaforma tecnologica) mettendo in contatto la domanda degli Utenti con l'offerta dei Professionisti.</li>
      <li>Il contratto di prestazione del Servizio di bellezza intercorre esclusivamente tra il Cliente e il Professionista. GLAMRO non è responsabile dell'esecuzione materiale del trattamento (es. qualità del taglio), ma solo del funzionamento dell'App e della gestione dei pagamenti.</li>
    </ul>

    <h2>3. Registrazione e sicurezza</h2>
    <ul>
      <li>Per utilizzare l'App è necessaria la registrazione. L'Utente è responsabile della custodia delle credenziali.</li>
      <li>La Società si riserva il diritto di sospendere l'account in caso di violazioni, uso improprio, o comportamenti scorretti verso i Professionisti.</li>
    </ul>

    <h2>4. Prenotazione servizi e politiche di cancellazione</h2>
    <p><strong>Cancellazione:</strong></p>
    <ul>
      <li><strong>Entro 24 ore:</strong> Cancellazione gratuita. L'importo viene rimborsato o riaccreditato come credito in App.</li>
      <li><strong>Meno di 24 ore (Late Cancel):</strong> Nessun rimborso. Viene addebitata una penale pari al 100% del valore del servizio per compensare il mancato guadagno del Professionista.</li>
      <li><strong>Forza Maggiore:</strong> Solo in caso di comprovata forza maggiore (documentabile), la Società potrà, a sua discrezione, emettere un voucher pari al 50% dell'importo.</li>
    </ul>
    <p><strong>Ritardi e No-Show (Reciprocità):</strong></p>
    <ul>
      <li><strong>Ritardo del Professionista:</strong> Il Cliente attende 20 minuti. Oltre tale termine, può riprogrammare o ottenere il rimborso integrale.</li>
      <li><strong>Ritardo del Cliente:</strong> Il Professionista attende 20 minuti. Oltre tale termine, l'appuntamento salta e viene addebitato il 100% del costo (No-Show).</li>
    </ul>

    <h2>5. E-commerce: Vendita di prodotti</h2>
    <ul>
      <li>Gli acquisti di Prodotti fisici (es. creme, lozioni) sono venduti direttamente da GLAMRO S.R.L.</li>
      <li><strong>Spedizioni:</strong> I prodotti vengono spediti all'indirizzo indicato. I tempi di consegna sono stime indicative.</li>
      <li><strong>Diritto di Recesso (Prodotti):</strong> Il Cliente ha 14 giorni dalla ricezione per rendere i prodotti, scrivendo a contact@glamro.it.</li>
      <li><strong>Esclusione Recesso (Igiene):</strong> Ai sensi dell'art. 59 del Codice del Consumo, non si accettano resi di cosmetici o prodotti sigillati che siano stati aperti, per motivi igienici e di tutela della salute.</li>
    </ul>

    <h2>6. Pagamenti</h2>
    <ul>
      <li>I pagamenti avvengono tramite App (Carta di Credito, Apple Pay, Google Pay).</li>
      <li><strong>No Contanti:</strong> Non sono accettati pagamenti in contanti diretti al Professionista per i servizi prenotati, salvo mance facoltative. GLAMRO incassa in nome e per conto del Professionista.</li>
    </ul>

    <h2>7. Limitazioni di responsabilità</h2>
    <p>La Società non è responsabile per:</p>
    <ul>
      <li>Danni fisici, reazioni allergiche o insoddisfazione estetica derivanti dal Servizio del Professionista.</li>
      <li>Malfunzionamenti dell'App dovuti a cause di forza maggiore o bug.</li>
      <li>Ritardi dei Professionisti dovuti al traffico o imprevisti.</li>
    </ul>
    <p>L'Utente manleva GLAMRO da qualsiasi pretesa risarcitoria connessa all'operato del Professionista.</p>

    <h2>8. Requisiti di età</h2>
    <p>I servizi sono riservati ai maggiorenni. I minori possono usufruirne solo sotto supervisione di un genitore o tutore.</p>

    <h2>9. Modifiche e cessione</h2>
    <ul>
      <li>La Società può modificare queste Condizioni in ogni momento, notificandolo via App.</li>
      <li>GLAMRO può cedere il presente contratto a terzi (es. in caso di exit o acquisizione della Società) senza pregiudizio per i diritti dell'Utente.</li>
    </ul>

    <h2>10. Legge applicabile e foro competente</h2>
    <ul>
      <li>Legge Italiana.</li>
      <li><strong>Foro Competente:</strong>
        <ul>
          <li>Per i Consumatori: Foro di residenza del Consumatore.</li>
          <li>Per Clienti Business/Professionisti (B2B): Foro esclusivo di Ancona.</li>
        </ul>
      </li>
      <li>Ai sensi del Regolamento UE 524/2013, si informa che la Commissione Europea mette a disposizione una piattaforma per la risoluzione online delle controversie (ODR), disponibile al seguente link: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a>.</li>
    </ul>

    <h2>11. Privacy</h2>
    <p>Il trattamento dei dati personali avviene nel rispetto del Regolamento UE 2016/679 (GDPR) e del D. Lgs. 196/2003 come novellato. L'Utente è invitato a consultare l'Informativa Privacy completa disponibile su <a href="/privacy">/privacy</a>.</p>

    <h2>Approvazione specifica (art. 1341 e art. 1342 C.C.)</h2>
    <p>Ai sensi degli artt. 1341 e 1342 del Codice Civile, l'Utente dichiara di approvare specificamente le seguenti clausole: Premesse: (Limitazione responsabilità); Art. 2.2: (GLAMRO come mero intermediario, esclusione responsabilità sui servizi); Art. 3.2: (Sospensione account senza preavviso); Art. 4: (Penali del 100% per cancellazione tardiva e No-Show); Art. 7: (Limitazioni generali di responsabilità e manleva); Art. 10.2: (Deroga al foro competente per utenti Business).</p>
  </>
);

const TermsEN = () => (
  <>
    <h2>Preamble</h2>
    <p>These general terms of service and sale (hereinafter the "General Terms") govern: (i) the booking and purchase – through the web platform www.glamro.it and the mobile application GLAMRO (hereinafter, jointly, the "Platform") owned by GLAMRO S.R.L. (the "Company") – of beauty services offered by third-party professionals ("Services"); (ii) the direct sale of products, cosmetics, gift cards and goods offered by the Company in the E-commerce section ("Products"); (iii) the use of the Platform itself.</p>

    <h2>Definitions</h2>
    <ul>
      <li><strong>Customer/User:</strong> Any natural or legal person who registers on the Platform to purchase Services or Products.</li>
      <li><strong>Professional/Partner:</strong> Barbers, hairdressers, beauticians and wellness operators who, registered on the Platform, provide Services to Customers with operational autonomy.</li>
      <li><strong>Services:</strong> On-demand beauty services (e.g. cuts, beard, styling, treatments) offered by Professionals.</li>
      <li><strong>Products:</strong> Physical goods (shampoo, creams, accessories) sold directly by GLAMRO through the in-App shop.</li>
    </ul>

    <h2>1. Acceptance of terms</h2>
    <ul>
      <li>Use of the Platform implies full acceptance of these Terms. Acceptance takes place via "point and click" procedure upon registration or purchase.</li>
      <li>The contract is digitally archived on the Company's servers and is accessible, upon request, by the User.</li>
      <li>The technical steps for concluding the contract include: selection of the Service or Product, login/registration, entry of required data, acceptance of T&amp;C and order confirmation.</li>
      <li>The User has the possibility to correct any errors before submitting the order.</li>
      <li>The language available for concluding the contract is Italian.</li>
    </ul>

    <h2>2. Description of the service (Marketplace Model)</h2>
    <ul>
      <li>GLAMRO acts as a technological intermediary (through a technological platform) by connecting User demand with the Professionals' offer.</li>
      <li>The contract for the provision of the beauty Service is exclusively between the Customer and the Professional. GLAMRO is not responsible for the material execution of the treatment (e.g. quality of the cut), but only for the functioning of the App and the management of payments.</li>
    </ul>

    <h2>3. Registration and security</h2>
    <ul>
      <li>To use the App, registration is required. The User is responsible for safeguarding credentials.</li>
      <li>The Company reserves the right to suspend the account in case of violations, misuse, or improper conduct toward Professionals.</li>
    </ul>

    <h2>4. Service booking and cancellation policies</h2>
    <p><strong>Cancellation:</strong></p>
    <ul>
      <li><strong>Within 24 hours:</strong> Free cancellation. The amount is refunded or credited back as in-App credit.</li>
      <li><strong>Less than 24 hours (Late Cancel):</strong> No refund. A penalty equal to 100% of the service value is charged to compensate for the Professional's lost earnings.</li>
      <li><strong>Force Majeure:</strong> Only in case of proven force majeure (documentable), the Company may, at its discretion, issue a voucher equal to 50% of the amount.</li>
    </ul>
    <p><strong>Delays and No-Show (Reciprocity):</strong></p>
    <ul>
      <li><strong>Professional's delay:</strong> The Customer waits 20 minutes. Beyond this term, they can reschedule or obtain a full refund.</li>
      <li><strong>Customer's delay:</strong> The Professional waits 20 minutes. Beyond this term, the appointment is missed and 100% of the cost is charged (No-Show).</li>
    </ul>

    <h2>5. E-commerce: Sale of products</h2>
    <ul>
      <li>Purchases of physical Products (e.g. creams, lotions) are sold directly by GLAMRO S.R.L.</li>
      <li><strong>Shipping:</strong> Products are shipped to the indicated address. Delivery times are indicative estimates.</li>
      <li><strong>Right of Withdrawal (Products):</strong> The Customer has 14 days from receipt to return the products, by writing to contact@glamro.it.</li>
      <li><strong>Withdrawal Exclusion (Hygiene):</strong> Pursuant to art. 59 of the Italian Consumer Code, returns of cosmetics or sealed products that have been opened are not accepted, for hygiene and health protection reasons.</li>
    </ul>

    <h2>6. Payments</h2>
    <ul>
      <li>Payments are made via the App (Credit Card, Apple Pay, Google Pay).</li>
      <li><strong>No Cash:</strong> Direct cash payments to the Professional for booked services are not accepted, except for optional tips. GLAMRO collects in the name and on behalf of the Professional.</li>
    </ul>

    <h2>7. Limitations of liability</h2>
    <p>The Company is not responsible for:</p>
    <ul>
      <li>Physical damage, allergic reactions or aesthetic dissatisfaction resulting from the Professional's Service.</li>
      <li>App malfunctions due to force majeure or bugs.</li>
      <li>Delays of Professionals due to traffic or unforeseen events.</li>
    </ul>
    <p>The User indemnifies GLAMRO from any compensation claim related to the Professional's work.</p>

    <h2>8. Age requirements</h2>
    <p>Services are reserved for adults. Minors may use them only under the supervision of a parent or guardian.</p>

    <h2>9. Modifications and assignment</h2>
    <ul>
      <li>The Company may modify these Terms at any time, notifying via the App.</li>
      <li>GLAMRO may transfer this contract to third parties (e.g. in case of exit or acquisition of the Company) without prejudice to the User's rights.</li>
    </ul>

    <h2>10. Applicable law and jurisdiction</h2>
    <ul>
      <li>Italian Law.</li>
      <li><strong>Competent Court:</strong>
        <ul>
          <li>For Consumers: Court of the Consumer's residence.</li>
          <li>For Business/Professional Customers (B2B): Exclusive court of Ancona.</li>
        </ul>
      </li>
      <li>Pursuant to EU Regulation 524/2013, the European Commission provides a platform for online dispute resolution (ODR), available at the following link: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a>.</li>
    </ul>

    <h2>11. Privacy</h2>
    <p>The processing of personal data takes place in compliance with EU Regulation 2016/679 (GDPR) and Italian Legislative Decree 196/2003 as amended. The User is invited to consult the full Privacy Notice available at <a href="/privacy">/privacy</a>.</p>

    <h2>Specific approval (art. 1341 and art. 1342 of the Italian Civil Code)</h2>
    <p>Pursuant to articles 1341 and 1342 of the Italian Civil Code, the User declares to specifically approve the following clauses: Preamble (Limitation of liability); Art. 2.2 (GLAMRO as mere intermediary, exclusion of liability for services); Art. 3.2 (Account suspension without notice); Art. 4 (100% penalties for late cancellation and No-Show); Art. 7 (General limitations of liability and indemnity); Art. 10.2 (Derogation from competent court for Business users).</p>
  </>
);

const Terms = () => {
  const { i18n, t } = useTranslation();
  return (
    <LegalPage kicker={t("legal.kicker")} title={t("footer.terms")}>
      {i18n.language.startsWith("en") ? <TermsEN /> : <TermsIT />}
    </LegalPage>
  );
};

export default Terms;
