import { SOCIAL_LINKS } from "@/constants/social";
import { Icon } from "@/components/ui/Icon";
import type { SocialLink } from "@/types";
import styles from "./SocialLinks.module.css";

type SocialLinksProps = {
  links?: readonly SocialLink[];
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
