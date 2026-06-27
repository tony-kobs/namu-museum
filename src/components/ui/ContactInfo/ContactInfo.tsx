import { CONTACTS } from "@/constants/contacts";
import styles from "./ContactInfo.module.css";

type ContactInfoProps = {
  title?: string;
  address?: string;
  phones?: readonly string[];
  email?: string;
  className?: string;
};

export function ContactInfo({
  title = CONTACTS.title,
  address = CONTACTS.address,
  phones = CONTACTS.phones,
  email = CONTACTS.email,
  className,
}: ContactInfoProps) {
  return (
    <div className={[styles.contacts, className].filter(Boolean).join(" ")}>
      <h3 className={styles.title}>{title}</h3>
      <address className={styles.address}>{address}</address>
      <p className={styles.phones}>
        {phones.map((phone, index) => (
          <span key={phone}>
            {index > 0 && ", "}
            <a href={`tel:${phone.replace(/\s/g, "")}`} className={styles.link}>
              {phone}
            </a>
          </span>
        ))}
      </p>
      <a href={`mailto:${email}`} className={styles.link}>
        {email}
      </a>
    </div>
  );
}
