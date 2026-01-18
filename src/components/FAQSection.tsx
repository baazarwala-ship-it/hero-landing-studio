import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What is Lyfex?",
      answer: "Lyfex is an online live learning platform to help people explore different skills and seek support anytime.",
    },
    {
      question: "How do I join a live session?",
      answer: "Simply browse our Live Addas section and click 'Join Now' on any session that interests you. No prior booking required!",
    },
    {
      question: "Can I become a mentor?",
      answer: "Yes! If you have expertise in any skill and love teaching, you can apply to become a Lyfex mentor through our application process.",
    },
    {
      question: "Is there a free trial?",
      answer: "Absolutely! You can join public sessions for free and explore our platform before subscribing to premium features.",
    },
    {
      question: "What topics are covered?",
      answer: "We cover a wide range of topics from technology, design, business, communication, arts, and many more skill categories.",
    },
    {
      question: "How do Charcha Rooms work?",
      answer: "Charcha Rooms are discussion-focused sessions where you can speak, debate, or just listen to conversations on various topics.",
    },
  ];

  const leftFaqs = faqs.slice(0, 3);
  const rightFaqs = faqs.slice(3, 6);

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="section-title">FAQ</h2>
          <p className="mt-2 text-muted-foreground">
            Frequently asked questions
          </p>
        </div>

        {/* FAQ Grid - Two Columns */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Left Column */}
          <Accordion type="single" collapsible className="space-y-4">
            {leftFaqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`left-${index}`}
                className="rounded-2xl border-0 overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-medium text-foreground bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 hover:no-underline [&[data-state=open]]:rounded-t-2xl [&[data-state=closed]]:rounded-2xl">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-foreground bg-gradient-to-r from-primary/90 to-primary/70 rounded-b-2xl">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Right Column */}
          <Accordion type="single" collapsible className="space-y-4">
            {rightFaqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`right-${index}`}
                className="rounded-2xl border-0 overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-medium text-foreground bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 hover:no-underline [&[data-state=open]]:rounded-t-2xl [&[data-state=closed]]:rounded-2xl">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-foreground bg-gradient-to-r from-primary/90 to-primary/70 rounded-b-2xl">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
