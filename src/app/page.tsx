"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingInline from '@/components/navigation/NavbarLayoutFloatingInline';
import VoidHero from '@/components/sections/layouts/hero/VoidHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import BigNumberTokenomics from '@/components/sections/layouts/tokenomics/BigNumberTokenomics';
import FooterLogoEmphasis from '@/components/footer/FooterLogoEmphasis';

export default function Home() {
  return (
    <SiteThemeProvider theme={{
      styleVariant: 'futuristicAndOutOfBox',
      colorTemplate: 2,
      textAnimation: 'slide'
    }}>
      <NavbarLayoutFloatingInline
        logoSrc="/images/logo.svg"
        logoWidth={150}
        logoHeight={40}
        navItems={[
          { name: "Hero", id: "hero" },
          { name: "About", id: "about" },
          { name: "How to Buy", id: "how-to-buy" },
          { name: "Tokenomics", id: "tokenomics" },
          { name: "Footer", id: "footer" }
        ]}
        buttonText="Get Started"
        onButtonClick={() => console.log('CTA Clicked')}
      />

      <div id="hero" data-section="hero" className="scroll-mt-24">
        <VoidHero
          title="Welcome to NovaSaaS"
          description="Your solution for modern and efficient SaaS applications"
          primaryButtonText="Explore More"
          secondaryButtonText="Get Started"
          tagLabel="Futuristic"
        />
      </div>

      <div id="about" data-section="about" className="scroll-mt-24">
        <SocialsAbout
          title="Join Our Community"
          descriptions={[
            "Connect with like-minded individuals on social media.",
            "Share insights and gain feedback on your projects."
          ]}
        />
      </div>

      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D
          variant="simple"
          steps={[
            { title: "Step 1", description: "Sign up for an account", image: "", position: "left", isCenter: false },
            { title: "Step 2", description: "Add funds to your account", image: "", position: "center", isCenter: true },
            { title: "Step 3", description: "Start using our services", image: "", position: "right", isCenter: false }
          ]}
        />
      </div>

      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <BigNumberTokenomics
          title="Our Tokenomics"
          description="We follow a transparent and sustainable approach to token allocation."
          kpiItems={[
            { value: "60%", description: "Market Liquidity", longDescription: "Strong market presence and trading opportunities", icon: { icon: 'LucideIcon' } },
            { value: "25%", description: "Development Fund", longDescription: "To ensure continuous improvements", icon: { icon: 'LucideIcon' } },
            { value: "15%", description: "Community Incentives", longDescription: "Supporting our users and community contributions", icon: { icon: 'LucideIcon' } }
          ]}
        />
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogoEmphasis
          logoSrc="/images/logo.svg"
          logoAlt="NovaSaaS Logo"
          logoText="NovaSaaS"
          columns={[
            { items: [
              { label: "Privacy Policy", onClick: () => console.log('Privacy clicked') },
              { label: "Terms of Service", onClick: () => console.log('Terms clicked') }
            ] },
            { items: [
              { label: "Contact Us", onClick: () => console.log('Contact clicked') },
              { label: "Feedback", onClick: () => console.log('Feedback clicked') }
            ] }
          ]}
          copyrightText="© 2023 NovaSaaS. All Rights Reserved."
          onPrivacyClick={() => console.log('Privacy Policy clicked')}
        />
      </div>
    </SiteThemeProvider>
  );
}