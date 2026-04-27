import { useTranslation } from "react-i18next";
import { LegalPage } from "./LegalPage";

const LegalNotice = () => {
  const { t } = useTranslation();
  return (
    <LegalPage kicker={t("legal.kicker")} title={t("legalNotice.title")}>
      <h2>{t("legalNotice.companyHeading")}</h2>
      <p><strong>GLAMRO S.R.L.</strong></p>
      <ul>
        <li>{t("legalNotice.address")}: Via Matteotti n. 54 – 60121 Ancona (AN)</li>
        <li>{t("legalNotice.vat")}: 03036060428</li>
        <li>{t("legalNotice.rea")}: AN-267591</li>
        <li>{t("legalNotice.capital")}: € 7.000,00 i.v.</li>
      </ul>

      <h2>{t("legalNotice.contactsHeading")}</h2>
      <ul>
        <li>Email: <a href="mailto:contact@glamro.it">contact@glamro.it</a></li>
        <li>{t("legalNotice.phone")}: <a href="tel:+393923661225">+39 392 366 1225</a></li>
        <li>{t("legalNotice.website")}: <a href="https://www.glamro.it" target="_blank" rel="noreferrer">www.glamro.it</a></li>
        <li>PEC: <a href="mailto:glamrosrl@ionospec.it">glamrosrl@ionospec.it</a></li>
      </ul>
    </LegalPage>
  );
};

export default LegalNotice;