import { useTranslation } from "react-i18next";
import { LegalPage } from "./LegalPage";

const PrivacyIT = () => (
  <>
    <p><strong>Privacy Policy di Glamro</strong> — Informativa sul trattamento dei dati personali ai sensi del Regolamento UE 2016/679 (GDPR), applicabile all'app mobile Glamro (Cliente e GlamPro) e al sito www.glamro.it.</p>

    <h2>1. Categorie di dati trattati</h2>
    <ul>
      <li>Dati anagrafici e di contatto (nome, cognome, email, telefono);</li>
      <li>Dati di pagamento e fatturazione;</li>
      <li>Cronologia di prenotazioni e servizi fruiti;</li>
      <li>Dati di geolocalizzazione (per i servizi on-demand);</li>
      <li>Dati di navigazione tramite cookie (v. Cookie Policy);</li>
      <li>Eventuali ulteriori dati forniti volontariamente dall'utente.</li>
    </ul>

    <h2>2. Finalità del trattamento e basi giuridiche</h2>
    <ul>
      <li><strong>Finalità contrattuali e precontrattuali:</strong> Registrazione, prenotazioni, gestione account, fatturazione. Base giuridica: art. 6.1.b GDPR.</li>
      <li><strong>Finalità di geolocalizzazione (servizi on-demand):</strong> Identificare la posizione dell'utente per individuare i professionisti disponibili. Base giuridica: art. 6.1.a GDPR – consenso esplicito dell'interessato.</li>
      <li><strong>Finalità di marketing diretto:</strong> Invio di comunicazioni promozionali (email, SMS, notifiche push). Base giuridica: art. 6.1.a GDPR – consenso esplicito. Revocabile in qualsiasi momento.</li>
      <li><strong>Adempimento obblighi di legge:</strong> Obblighi fiscali, contabili, richieste delle autorità. Base giuridica: art. 6.1.c GDPR.</li>
      <li><strong>Tutela giudiziaria:</strong> Difesa di diritti in sede giudiziaria. Base giuridica: art. 6.1.f GDPR – legittimo interesse del Titolare.</li>
    </ul>

    <h2>3. Modalità di trattamento</h2>
    <p>Il trattamento avviene in modalità elettronica e cartacea, con misure tecniche e organizzative idonee alla protezione dei dati, nel rispetto dei principi di liceità, correttezza, trasparenza, minimizzazione e integrità.</p>

    <h2>4. Conservazione dei dati</h2>
    <ul>
      <li>Finalità contrattuali: durata del contratto + 10 anni;</li>
      <li>Marketing: fino a revoca del consenso, massimo 24 mesi;</li>
      <li>Obblighi di legge: secondo termini normativi.</li>
    </ul>

    <h2>5. Destinatari dei dati</h2>
    <p>I dati potranno essere comunicati a:</p>
    <ul>
      <li>Personale autorizzato del Titolare;</li>
      <li>Professionisti partner (autonomi titolari);</li>
      <li>Fornitori di servizi IT, hosting, pagamenti;</li>
      <li>Consulenti fiscali e legali;</li>
      <li>Altri Responsabili esterni del trattamento, formalmente nominati ai sensi dell'art. 28 GDPR.</li>
    </ul>
    <p>I dati non saranno diffusi. In caso di trasferimento verso Paesi extra-UE, saranno adottate le garanzie previste dagli artt. 44 ss. GDPR (es. Clausole Contrattuali Standard).</p>

    <h2>6. Google Calendar (Google API Services)</h2>
    <p>L'App può integrarsi con Google Calendar per la gestione degli appuntamenti. Il trattamento dei dati attraverso le API Google avviene nel rispetto delle <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer">Google API Services User Data Policy</a>, incluse le norme di Limited Use.</p>

    <h2>7. Diritti dell'interessato (art. 15–22 GDPR)</h2>
    <p>L'interessato ha diritto di:</p>
    <ul>
      <li>Accesso, rettifica, cancellazione;</li>
      <li>Limitazione e opposizione al trattamento;</li>
      <li>Portabilità dei dati;</li>
      <li>Revoca del consenso (senza pregiudicare la liceità del trattamento effettuato prima della revoca);</li>
      <li>Proporre reclamo al Garante Privacy: <a href="https://www.garanteprivacy.it/" target="_blank" rel="noopener noreferrer">www.garanteprivacy.it</a></li>
    </ul>

    <h2>8. Natura del conferimento</h2>
    <p>Il conferimento dei dati è:</p>
    <ul>
      <li>Obbligatorio per finalità contrattuali e di legge;</li>
      <li>Facoltativo per marketing e geolocalizzazione.</li>
    </ul>

    <h2>9. Responsabile della protezione dei dati (DPO)</h2>
    <p>GLAMRO non ha nominato un DPO, non ricorrendo ai casi previsti dall'art. 37 GDPR.</p>

    <h2>10. Cookie policy</h2>
    <p>Per maggiori dettagli sui cookie, consultare l'informativa aggiornata su: <a href="/cookie-policy">/cookie-policy</a></p>

    <h2>11. Modifiche all'informativa</h2>
    <p>Eventuali modifiche saranno pubblicate su www.glamro.it e/o notificate via App.</p>
  </>
);

const PrivacyEN = () => (
  <>
    <p><strong>Glamro Privacy Policy</strong> — Information on the processing of personal data pursuant to EU Regulation 2016/679 (GDPR), applicable to the Glamro mobile app (Client and GlamPro) and the website www.glamro.it.</p>

    <h2>1. Categories of data processed</h2>
    <ul>
      <li>Personal and contact data (first name, last name, email, phone);</li>
      <li>Payment and billing data;</li>
      <li>History of bookings and services used;</li>
      <li>Geolocation data (for on-demand services);</li>
      <li>Browsing data via cookies (see Cookie Policy);</li>
      <li>Any additional data voluntarily provided by the user.</li>
    </ul>

    <h2>2. Purposes of processing and legal bases</h2>
    <ul>
      <li><strong>Contractual and pre-contractual purposes:</strong> Registration, bookings, account management, billing. Legal basis: art. 6.1.b GDPR.</li>
      <li><strong>Geolocation purposes (on-demand services):</strong> Identifying the user's location to find available professionals. Legal basis: art. 6.1.a GDPR – explicit consent of the data subject.</li>
      <li><strong>Direct marketing purposes:</strong> Sending promotional communications (email, SMS, push notifications). Legal basis: art. 6.1.a GDPR – explicit consent. Revocable at any time.</li>
      <li><strong>Compliance with legal obligations:</strong> Tax, accounting and authority requirements. Legal basis: art. 6.1.c GDPR.</li>
      <li><strong>Legal protection:</strong> Defense of rights in court. Legal basis: art. 6.1.f GDPR – legitimate interest of the Data Controller.</li>
    </ul>

    <h2>3. Methods of processing</h2>
    <p>Processing takes place in electronic and paper form, with technical and organizational measures suitable for data protection, in compliance with the principles of lawfulness, fairness, transparency, minimization and integrity.</p>

    <h2>4. Data retention</h2>
    <ul>
      <li>Contractual purposes: duration of the contract + 10 years;</li>
      <li>Marketing: until consent is withdrawn, maximum 24 months;</li>
      <li>Legal obligations: according to regulatory terms.</li>
    </ul>

    <h2>5. Data recipients</h2>
    <p>Data may be communicated to:</p>
    <ul>
      <li>Authorized personnel of the Data Controller;</li>
      <li>Partner professionals (independent controllers);</li>
      <li>IT, hosting and payment service providers;</li>
      <li>Tax and legal consultants;</li>
      <li>Other external Data Processors, formally appointed pursuant to art. 28 GDPR.</li>
    </ul>
    <p>The data will not be disseminated. In case of transfer to non-EU countries, the guarantees provided by art. 44 et seq. GDPR will be adopted (e.g. Standard Contractual Clauses).</p>

    <h2>6. Google Calendar (Google API Services)</h2>
    <p>The App may integrate with Google Calendar for appointment management. Data processing through Google APIs takes place in compliance with the <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer">Google API Services User Data Policy</a>, including the Limited Use rules.</p>

    <h2>7. Rights of the data subject (art. 15–22 GDPR)</h2>
    <p>The data subject has the right to:</p>
    <ul>
      <li>Access, rectification, deletion;</li>
      <li>Restriction and objection to processing;</li>
      <li>Data portability;</li>
      <li>Withdrawal of consent (without prejudice to the lawfulness of processing carried out before withdrawal);</li>
      <li>Lodge a complaint with the Italian Data Protection Authority: <a href="https://www.garanteprivacy.it/" target="_blank" rel="noopener noreferrer">www.garanteprivacy.it</a></li>
    </ul>

    <h2>8. Nature of data provision</h2>
    <p>The provision of data is:</p>
    <ul>
      <li>Mandatory for contractual and legal purposes;</li>
      <li>Optional for marketing and geolocation.</li>
    </ul>

    <h2>9. Data Protection Officer (DPO)</h2>
    <p>GLAMRO has not appointed a DPO, as the cases provided for by art. 37 GDPR do not apply.</p>

    <h2>10. Cookie policy</h2>
    <p>For more details on cookies, please consult the updated information at: <a href="/cookie-policy">/cookie-policy</a></p>

    <h2>11. Changes to this notice</h2>
    <p>Any changes will be published on www.glamro.it and/or notified via the App.</p>
  </>
);

const Privacy = () => {
  const { i18n, t } = useTranslation();
  return (
    <LegalPage kicker={t("legal.kicker")} title={t("footer.privacy")}>
      {i18n.language.startsWith("en") ? <PrivacyEN /> : <PrivacyIT />}
    </LegalPage>
  );
};

export default Privacy;
