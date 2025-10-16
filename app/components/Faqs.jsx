import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


export const faqs = [
    {
        question: "What services does Solvorr Tech offer?",
        answer:
            "Solvorr Tech provides custom web development, business automation, and digital marketing solutions designed to enhance your online presence and streamline operations.",
    },
    {
        question: "Why should I choose Solvorr Tech for my business?",
        answer:
            "We combine strategy, design, and technology to deliver tailored digital solutions that help businesses grow faster, automate processes, and attract more customers.",
    },
    {
        question: "Do you offer custom web applications or just websites?",
        answer:
            "Yes, we specialize in both — from professional websites to fully customized web applications built to meet your business needs and workflows.",
    },
    {
        question: "How long does it take to build a custom website or app?",
        answer:
            "Project timelines vary depending on complexity. A standard website typically takes 2–4 weeks, while custom web applications can take 6–10 weeks.",
    },
    {
        question: "Do you provide ongoing support after project delivery?",
        answer:
            "Absolutely! We offer maintenance and support plans to keep your website or app updated, secure, and performing at its best.",
    },
    {
        question: "Can you help improve my existing website?",
        answer:
            "Yes, we can audit, redesign, and optimize your existing website for better performance, design, and user experience — without losing your data or SEO value.",
    },
    {
        question: "Is SEO included in your web development services?",
        answer:
            "Our websites are built SEO-ready with proper structure and performance optimization. However, advanced SEO strategy and campaigns are offered as a separate service.",
    },
    {
        question: "Do you work with startups or only established businesses?",
        answer:
            "We work with both! Whether you’re launching your first startup or scaling an established brand, we tailor our solutions to fit your goals and budget.",
    },
    {
        question: "Which technologies do you use for development?",
        answer:
            "We use modern stacks like Next.js, React, Node.js, MongoDB, and PostgreSQL — ensuring fast, scalable, and secure web experiences for our clients.",
    },
    {
        question: "How can I get started with Solvorr Tech?",
        answer:
            "Simply contact us through our website or schedule a free consultation. We’ll discuss your goals, challenges, and create a custom digital roadmap for your business.",
    },
];


const Faqs = () => {
    return (
        <section>
            <div className="container">
                <div>
                    {faqs.map((faq, index) => (
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>{faq.question}</AccordionTrigger>
                                <AccordionContent>
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faqs;