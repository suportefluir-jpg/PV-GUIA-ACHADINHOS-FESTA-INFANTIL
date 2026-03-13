import React from 'react';
import { motion } from 'motion/react';
import { Check, ChevronDown, ChevronUp, Mail, BookOpen, PartyPopper } from 'lucide-react';
import { cn } from '../lib/utils';

// --- Components ---

export const CTAButton = ({ label, url, className }: { label: string; url: string; className?: string }) => (
  <motion.a
    href={url}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={cn("btn-primary w-full md:w-auto px-12 text-lg", className)}
  >
    {label}
  </motion.a>
);

export const Section = ({ 
  id, 
  background, 
  children, 
  className,
  containerClassName
}: { 
  id: string; 
  background?: string; 
  children: React.ReactNode; 
  className?: string;
  containerClassName?: string;
}) => (
  <section 
    id={id} 
    style={{ backgroundColor: background }} 
    className={cn("w-full overflow-hidden relative", className)}
  >
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn("section-container relative z-20", containerClassName)}
    >
      {children}
    </motion.div>
  </section>
);

// --- Sections ---

export const HeroSplit = ({ data }: { data: any }) => {
  const highlightText = (text: string) => {
    const wordsToHighlight = ["festinha infantil", "ricos", "achadinhos"];
    let parts: (string | React.ReactNode)[] = [text];

    wordsToHighlight.forEach((word) => {
      const newParts: (string | React.ReactNode)[] = [];
      parts.forEach((part) => {
        if (typeof part === "string") {
          const regex = new RegExp(`(${word})`, "gi");
          const splitParts = part.split(regex);
          splitParts.forEach((splitPart) => {
            if (wordsToHighlight.some(w => splitPart.toLowerCase() === w.toLowerCase())) {
              newParts.push(<span key={Math.random()} className="text-green-button font-black">{splitPart}</span>);
            } else {
              newParts.push(splitPart);
            }
          });
        } else {
          newParts.push(part);
        }
      });
      parts = newParts;
    });

    return parts;
  };

  return (
    <Section id={data.id} background={data.background} containerClassName="py-4 md:py-8">
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
        {data.logo_url && (
          <div className="mb-2 max-w-[320px] md:max-w-[400px]">
            <img 
              src={data.logo_url} 
              alt="Guia de Achadinhos" 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </div>
        )}
        <h1 className="text-3xl md:text-5xl lg:text-6xl mb-2 leading-tight">
          {highlightText(data.headline)}
        </h1>
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {data.badges.map((badge: string, i: number) => (
            <span key={i} className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full text-lg md:text-xl font-bold shadow-md border border-pink/30 flex items-center gap-2 uppercase tracking-tight">
              <span>✅</span> {badge}
            </span>
          ))}
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl w-full"
        >
          <div className="aspect-[4/3]">
            <img 
              src={data.main_image} 
              alt="Festa Infantil" 
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export const BenefitsWithSideImage = ({ data }: { data: any }) => (
  <Section id={data.id} background={data.background}>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="order-2 lg:order-1">
        <h2 className="text-3xl md:text-4xl mb-8">{data.title}</h2>
        <ul className="space-y-4 mb-8">
          {data.bullets.map((bullet: string, i: number) => (
            <li key={i} className="flex items-start gap-3 bg-white/30 p-4 rounded-xl border border-white/20">
              <span className="text-2xl shrink-0">😔</span>
              <span className="font-medium">{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="order-1 lg:order-2"
      >
        <div className="rounded-card overflow-hidden shadow-2xl">
          <img 
            src={data.side_image} 
            alt="Festa dos Sonhos" 
            className="w-full h-auto"
            referrerPolicy="no-referrer"
          />
        </div>
      </motion.div>
    </div>
    <div className="mt-12 text-center max-w-3xl mx-auto">
      <p className="text-xl md:text-2xl font-bold italic opacity-90 leading-relaxed">
        {data.footer_text}
      </p>
    </div>
  </Section>
);

export const QuoteBlocks = ({ data }: { data: any }) => (
  <Section id={data.id} background={data.background}>
    <div className="text-center max-w-4xl mx-auto mb-12">
      <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 font-black leading-tight whitespace-pre-line">{data.intro}</h2>
      <p className="text-2xl font-bold opacity-90">{data.subintro}</p>
    </div>
    
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
      {/* Left Quotes */}
      <div className="lg:col-span-3 space-y-6 order-2 lg:order-1">
        {data.quotes.slice(0, 3).map((quote: string, i: number) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-pink p-5 rounded-[20px] shadow-md text-lg md:text-xl font-medium leading-relaxed"
          >
            {quote}
          </motion.div>
        ))}
      </div>

      {/* Center Image */}
      <div className="lg:col-span-6 order-1 lg:order-2">
        <div className="relative">
          <img 
            src="https://raw.githubusercontent.com/thebabirosa/GUIAIMAG/main/20260309_1820_Image%20Generation_remix_01kka7g8gwetevb6eez8kr986h.png" 
            alt="Mãe preocupada" 
            className="w-full h-auto rounded-lg shadow-xl"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Right Quotes */}
      <div className="lg:col-span-3 space-y-6 order-3">
        {data.quotes.slice(3).map((quote: string, i: number) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-pink p-5 rounded-[20px] shadow-md text-lg md:text-xl font-medium leading-relaxed"
          >
            {quote}
          </motion.div>
        ))}
        {/* If we only have 5 quotes, we can add a placeholder or just leave it. 
            The image has 6, so I'll duplicate the last one or just keep 2 if that's what's in the data.
            Actually, I'll just keep the 2 from the data to be clean. */}
      </div>
    </div>
  </Section>
);

export const TextBoxEmphasis = ({ data }: { data: any }) => (
  <Section id={data.id} background={data.background}>
    <div 
      className={cn(
        "p-8 md:p-16 rounded-[40px] shadow-2xl text-center max-w-5xl mx-auto",
        data.highlight_cta_text ? "mb-12" : ""
      )}
      style={{ 
        backgroundColor: data.box_background,
        border: data.border_color ? `4px solid ${data.border_color}` : 'none'
      }}
    >
      <div className={cn("space-y-6", data.box_background === '#ffffff' ? "text-gray-900" : "text-white")}>
        {data.paragraphs.map((p: string, i: number) => (
          <p key={i} className={cn(
            "text-lg md:text-xl leading-relaxed whitespace-pre-line", 
            i === 0 && "text-2xl md:text-4xl font-black mb-10 block",
            i === data.paragraphs.length - 1 && !data.highlight_cta_text && "text-2xl font-black uppercase tracking-tight"
          )}>
            {p}
          </p>
        ))}
      </div>
    </div>

    {data.highlight_cta_text && (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-[30px] shadow-2xl border-4 border-purple-soft text-center"
      >
        <div className="text-xl md:text-2xl text-gray-900 leading-tight">
          {data.highlight_cta_text.split('\n\n').map((part: string, i: number) => (
            <p key={i} className={cn(i === 0 ? "font-normal mb-6" : "font-black", "whitespace-pre-line")}>
              {part}
            </p>
          ))}
        </div>
      </motion.div>
    )}
  </Section>
);

export const StepsCards = ({ data }: { data: any }) => (
  <Section id={data.id} background={data.background}>
    <h2 className="text-3xl md:text-4xl text-center mb-16 max-w-4xl mx-auto">{data.title}</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {data.steps.map((step: any, i: number) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ y: -5 }}
          className="bg-white rounded-card overflow-hidden shadow-soft flex flex-col h-full"
        >
          <div className="aspect-video">
            <img src={step.image} alt={step.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="p-8 flex-grow">
            <div className="bg-lilac/20 text-lilac font-black px-4 py-1 rounded-full text-xs inline-block mb-4">
              PASSO 0{i + 1}
            </div>
            <h3 className="text-xl mb-4">{step.title}</h3>
            <p className="opacity-80 leading-relaxed">{step.text}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </Section>
);

export const TwoColumnChecklist = ({ data }: { data: any }) => (
  <Section id={data.id} background={data.background}>
    <h2 className="text-3xl md:text-4xl text-center mb-16">{data.title}</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
      <div className="space-y-4">
        {data.items_left.map((item: string, i: number) => (
          <div key={i} className="flex items-start gap-4 bg-white/40 p-6 rounded-2xl border border-white/30">
            <Check className="text-green-button shrink-0 mt-1" size={28} />
            <span className="font-semibold text-lg">{item}</span>
          </div>
        ))}
      </div>
      <div className="space-y-4">
        {data.items_right.map((item: string, i: number) => (
          <div key={i} className="flex items-start gap-4 bg-white/40 p-6 rounded-2xl border border-white/30">
            <Check className="text-green-button shrink-0 mt-1" size={28} />
            <span className="font-semibold text-lg">{item}</span>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

export const BenefitsVisualGrid = ({ data }: { data: any }) => (
  <Section id={data.id} background={data.background}>
    <h2 className="text-3xl md:text-5xl text-center mb-16 font-black">{data.title}</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {data.items.map((item: any, i: number) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="bg-white rounded-[32px] overflow-hidden shadow-xl border border-gray-100 flex flex-col"
        >
          <div className="aspect-video w-full overflow-hidden">
            <img 
              src={item.image} 
              alt={item.text} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="p-6 flex items-start gap-3">
            <div className="bg-green-button/10 p-1 rounded-full shrink-0 mt-1">
              <Check className="text-green-button" size={20} />
            </div>
            <p className="font-bold text-lg leading-tight">{item.text}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </Section>
);

export const StackedOfferCards = ({ data }: { data: any }) => (
  <Section id={data.id} background={data.background}>
    <h2 className="text-3xl md:text-4xl text-center mb-16 max-w-4xl mx-auto whitespace-pre-line">{data.title}</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.items.map((item: any, i: number) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
          whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
          className="bg-white rounded-card shadow-soft border border-mint-light flex flex-col overflow-hidden"
        >
          {item.image && !item.image.includes('placeholder') ? (
            <div className="aspect-square w-full overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          ) : (
            <div className="p-6 pb-0">
              <div className="w-16 h-16 bg-mint-light rounded-2xl flex items-center justify-center">
                <BookOpen className="text-mint" size={32} />
              </div>
            </div>
          )}
          <div className="p-6">
            <h3 className="text-lg mb-3 font-bold">{item.title}</h3>
            <p className="text-sm opacity-70 leading-relaxed whitespace-pre-line">{item.text}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </Section>
);

export const PricingRecap = ({ data }: { data: any }) => (
  <Section id={data.id} background={data.background}>
    <div className="bg-white rounded-[40px] p-8 md:p-16 shadow-2xl max-w-4xl mx-auto border-4 border-white">
      <h2 className="text-2xl md:text-4xl text-center mb-12 leading-tight">{data.title}</h2>
      <div className="space-y-5 mb-12">
        {data.price_items.map((item: any, i: number) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="flex justify-between items-center border-b border-gray-100 pb-5 last:border-0"
          >
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-lilac"></div>
              <span className="font-semibold text-lg opacity-80">{item.name}</span>
            </div>
            <span className="font-bold text-xl text-red-section line-through opacity-40">{item.price}</span>
          </motion.div>
        ))}
      </div>
      <div className="text-center bg-mint-light/30 p-10 rounded-[32px] border border-mint-light">
        <p className="text-xl font-bold mb-4 opacity-70 uppercase tracking-widest">{data.total_text}</p>
        <div className="text-6xl md:text-8xl font-black text-green-button mb-10 drop-shadow-sm">R$ 67,00</div>
        <CTAButton label="QUERO MEU ACESSO AGORA" url="https://payfast.greenn.com.br/x2p4z8z" className="scale-110" />
      </div>
    </div>
  </Section>
);

export const OfferSplit = ({ data }: { data: any }) => (
  <Section id={data.id} background={data.background}>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="flex justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-white/30 blur-3xl rounded-full"></div>
          <img 
            src={data.left_image} 
            alt="Mockup Guia" 
            className="relative z-10 w-full max-w-md h-auto drop-shadow-2xl"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
      <div className="text-center lg:text-left">
        <p className="text-2xl font-bold mb-2 opacity-80">{data.installments_text}</p>
        <div className="text-6xl md:text-8xl font-black text-green-button mb-4 leading-none">
          {data.price_main}
        </div>
        <p className="text-xl font-bold mb-8 opacity-90">{data.price_cash}</p>
        <div className="space-y-2 mb-10">
          {data.supporting_lines.map((line: string, i: number) => (
            <div key={i} className="flex items-center justify-center lg:justify-start gap-2 font-black text-sm uppercase tracking-wider">
              <Check size={16} className="text-green-button" />
              {line}
            </div>
          ))}
        </div>
        <CTAButton label={data.button_label} url={data.button_url} className="mb-4" />
        <p className="text-sm font-bold text-red-section">{data.urgency}</p>
      </div>
    </div>
  </Section>
);

export const ThreeCards = ({ data }: { data: any }) => (
  <Section id={data.id} background={data.background} className="text-white">
    <h2 className="text-3xl md:text-4xl text-center mb-16 text-white whitespace-pre-line">{data.title}</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {data.cards.map((card: any, i: number) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ scale: 1.02 }}
          className="bg-white/10 backdrop-blur-md p-8 rounded-card border border-white/20 text-center flex flex-col items-center"
        >
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-lg">
            {i === 0 ? <Mail className="text-red-section" size={40} /> : 
             i === 1 ? <BookOpen className="text-red-section" size={40} /> : 
             <PartyPopper className="text-red-section" size={40} />}
          </div>
          <h3 className="text-xl mb-4 text-white">{card.title}</h3>
          <p className="opacity-80 text-sm leading-relaxed">{card.text}</p>
        </motion.div>
      ))}
    </div>
  </Section>
);

export const ComparisonChoice = ({ data }: { data: any }) => (
  <Section id={data.id} background={data.background}>
    <h2 className="text-3xl md:text-4xl text-center mb-16">{data.title}</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="bg-white p-8 md:p-12 rounded-card shadow-soft border-t-8 border-gray-300"
      >
        <h3 className="text-2xl mb-6 text-gray-400">{data.option_1.title}</h3>
        <p className="text-lg opacity-70 leading-relaxed">{data.option_1.text}</p>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="bg-white p-8 md:p-12 rounded-card shadow-2xl border-t-8 border-green-button"
      >
        <h3 className="text-2xl mb-6 text-green-button">{data.option_2.title}</h3>
        <p className="text-lg font-medium leading-relaxed">{data.option_2.text}</p>
      </motion.div>
    </div>
    <div className="text-center max-w-3xl mx-auto">
      <p className="text-xl font-bold italic opacity-90">{data.closing_text}</p>
    </div>
  </Section>
);

export const FAQ = ({ data }: { data: any }) => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <Section id={data.id} background={data.background}>
      <h2 className="text-3xl md:text-4xl text-center mb-16">{data.title}</h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {data.items.map((item: any, i: number) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
          >
            <button 
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
            >
              <span className="font-bold text-lg">{item.question}</span>
              {openIndex === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {openIndex === i && (
              <div className="p-6 pt-0 border-t border-gray-50">
                <p className="opacity-80 leading-relaxed">{item.answer}</p>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
