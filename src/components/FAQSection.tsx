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
      answer: "Lyfex is an interactive online learning platform that offers LIVE classes with expert mentors across various skill categories. You can join sessions in real-time, participate in discussions, and learn at your own pace.",
    },
    {
      question: "How do I join a live class?",
      answer: "Simply browse our available live sessions, click on 'Join Now' for any session you're interested in, and you'll be connected to the live class instantly. No downloads required!",
    },
    {
      question: "Can I switch mentors?",
      answer: "Yes! One of Lyfex's unique features is the flexibility to switch mentors anytime. If you feel another teaching style suits you better, you can easily transition to a different mentor.",
    },
    {
      question: "What skills can I learn?",
      answer: "We offer courses in Development, Design, Communication, Business, Marketing, Leadership, Music & Arts, and Technology. New courses are added regularly based on trending topics.",
    },
    {
      question: "How does the Support feature work?",
      answer: "The Support section allows you to post tasks that need expert help. Set your budget and deadline, and qualified experts will complete your tasks affordably and professionally.",
    },
    {
      question: "Are there any free courses?",
      answer: "Yes! We offer several free introductory courses and regularly provide free trial access to premium courses. Subscribe to our newsletter to stay updated on free offerings.",
    },
  ];

  // Split FAQs into two columns
  const leftFaqs = faqs.filter((_, i) => i % 2 === 0);
  const rightFaqs = faqs.filter((_, i) => i % 2 === 1);

  return (
    <section className="py-16">
      <div className="container">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="section-title">FAQ</h2>
          <p className="mt-2 text-muted-foreground">
            Frequently asked questions
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid gap-4 md:grid-cols-2">
          {/* Left Column */}
          <div className="flex flex-col gap-4">
            <Accordion type="single" collapsible className="space-y-4">
              {leftFaqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`left-${index}`}
                  className="rounded-xl border-0 bg-gradient-to-r from-primary/20 to-primary/10 px-4 overflow-hidden"
                >
                  <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4">
            <Accordion type="single" collapsible className="space-y-4">
              {rightFaqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`right-${index}`}
                  className="rounded-xl border-0 bg-gradient-to-r from-primary/20 to-primary/10 px-4 overflow-hidden"
                >
                  <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
