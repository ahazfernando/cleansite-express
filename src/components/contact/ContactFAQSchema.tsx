const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "How do I get a quote?",
            "acceptedAnswer": { "@type": "Answer", "text": "Fill out our contact form or call us directly. We'll provide a free estimate based on your needs." },
        },
        {
            "@type": "Question",
            "name": "What cleaning products do you use?",
            "acceptedAnswer": { "@type": "Answer", "text": "We use eco-friendly, professional-grade cleaning products that are safe for your family and pets." },
        },
        {
            "@type": "Question",
            "name": "Are your cleaners insured?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes, all our cleaners are fully insured and background checked for your peace of mind." },
        },
        {
            "@type": "Question",
            "name": "Can I schedule recurring cleanings?",
            "acceptedAnswer": { "@type": "Answer", "text": "Absolutely! We offer weekly, bi-weekly, and monthly cleaning plans with discounted rates." },
        },
    ],
};

export default function ContactFAQSchema() {
    return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />;
}
