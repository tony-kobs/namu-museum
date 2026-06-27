import {
  Container,
  Footer,
  Header,
  Section,
  SiteLayout,
} from "@/components/layout";
import { ANCHORS } from "@/constants/anchors";
import { SECTIONS } from "@/constants/site";
import { SectionHeading } from "@/components/ui";

export default function Home() {
  return (
    <SiteLayout header={<Header />} footer={<Footer />}>
      {/* Hero — Dev 3 */}
      <Section spacing="flush">{null}</Section>

      <Section id={ANCHORS.events}>
        <Container>
          <SectionHeading>{SECTIONS.events}</SectionHeading>
        </Container>
      </Section>

      <Section id={ANCHORS.gallery}>
        <Container>
          <SectionHeading>{SECTIONS.gallery}</SectionHeading>
        </Container>
      </Section>

      {/* Subscription — Dev 6 */}
      <Section spacing="flush">{null}</Section>

      {/* About — placeholder */}
      <Section id={ANCHORS.about} spacing="compact">
        <Container>{null}</Container>
      </Section>
    </SiteLayout>
  );
}
