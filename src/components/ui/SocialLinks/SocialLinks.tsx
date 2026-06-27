import { SOCIAL_LINKS } from "@/data";
import { Icon } from "@/components/ui/Icon";
import styles from "./SocialLinks.module.css";

type SocialLinksProps = {
  links?: typeof SOCIAL_LINKS;
  className?: string;
};

export function SocialLinks({
  links = SOCIAL_LINKS,
  className,
}: SocialLinksProps) {
  return (
    <ul className={[styles.list, className].filter(Boolean).join(" ")}>
      {links.map((link) => (
        <li key={link.id}>
          <a
            href={link.href}
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
          >
            <Icon
              name={link.id === "facebook" ? "facebook" : "instagram"}
              size={24}
            />
          </a>
        </li>
      ))}
    </ul>
  );
}
