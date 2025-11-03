import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How quickly can you set up my first automation?",
      answer:
        "Most clients see their first automation live within 7-14 days. Simple chatbots can be deployed in 3-5 days.",
    },
    {
      question: "Do I need technical knowledge to use these systems?",
      answer:
        "Not at all! We handle all the technical setup. You just tell us your goals, and we make it happen.",
    },
    {
      question: "What if I don't see the promised results?",
      answer:
        "We offer a 30-day money-back guarantee. If we don't save you at least 10 hours weekly, we refund everything + $500 for your time.",
    },
    {
      question: "How much does this typically cost vs hiring staff?",
      answer:
        "Our automations cost 70-85% less than hiring equivalent staff, work 24/7, and never take sick days or vacations.",
    },
    {
      question: "Can you integrate with my existing tools?",
      answer:
        "Yes! We connect with 3,000+ apps including CRM, email, scheduling, and payment systems through Zapier and direct integrations.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
              Got Questions? We've Got Answers.
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card/30 backdrop-blur-sm border border-border rounded-lg px-6 hover:border-primary/50 transition-colors animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="text-left font-bold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
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

export default FAQ;
