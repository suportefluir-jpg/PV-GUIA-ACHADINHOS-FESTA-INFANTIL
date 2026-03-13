import { pageData } from './data';
import * as Sections from './components/Sections';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sr-only">
        <h1>{pageData.seo.title}</h1>
      </header>

      <main>
        {pageData.sections.map((section: any) => {
          switch (section.type) {
            case 'hero_split':
              return <Sections.HeroSplit key={section.id} data={section} />;
            case 'benefits_with_side_image':
              return <Sections.BenefitsWithSideImage key={section.id} data={section} />;
            case 'quote_blocks':
              return <Sections.QuoteBlocks key={section.id} data={section} />;
            case 'text_box_emphasis':
              return <Sections.TextBoxEmphasis key={section.id} data={section} />;
            case 'steps_cards':
              return <Sections.StepsCards key={section.id} data={section} />;
            case 'two_column_checklist':
              return <Sections.TwoColumnChecklist key={section.id} data={section} />;
            case 'benefits_visual_grid':
              return <Sections.BenefitsVisualGrid key={section.id} data={section} />;
            case 'stacked_offer_cards':
              return <Sections.StackedOfferCards key={section.id} data={section} />;
            case 'pricing_recap':
              return <Sections.PricingRecap key={section.id} data={section} />;
            case 'offer_split':
              return <Sections.OfferSplit key={section.id} data={section} />;
            case 'three_cards':
              return <Sections.ThreeCards key={section.id} data={section} />;
            case 'comparison_choice':
              return <Sections.ComparisonChoice key={section.id} data={section} />;
            case 'faq':
              return <Sections.FAQ key={section.id} data={section} />;
            default:
              return null;
          }
        })}
      </main>

      <footer className="bg-white py-12 border-t border-gray-100">
        <div className="section-container text-center">
          <p className="text-sm opacity-50 mb-4">
            &copy; {new Date().getFullYear()} Guia de Achadinhos para Festa Infantil. Todos os direitos reservados.
          </p>
          <div className="flex justify-center gap-6 text-xs font-bold opacity-40 uppercase tracking-widest">
            <a href="#" className="hover:opacity-100">Termos de Uso</a>
            <a href="#" className="hover:opacity-100">Privacidade</a>
            <a href="#" className="hover:opacity-100">Contato</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
