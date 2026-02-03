import { ArrowRight } from "lucide-react";

const processSteps = [
    {
        step: "01",
        title: "Initial Consultation & Site Assessment",
        image: "/services/consultation.svg",
    },
    {
        step: "02",
        title: "Customised Quotation & Proposal",
        image: "/services/quotation.svg",
    },
    {
        step: "03",
        title: "Service Agreement & Scheduling",
        image: "/services/serviceagreement.svg",
    },
    {
        step: "04",
        title: "Pre-Clean Preparation & Team Briefing",
        image: "/services/teambriefing.svg",
    },
    {
        step: "05",
        title: "Service Delivery & Quality Control",
        image: "/services/cleaningprocess.svg",
    },
    {
        step: "06",
        title: "Client Feedback & Ongoing Support",
        image: "/services/clientfeedback.svg",
    },
];

const ProcessWorkflow = () => {
    return (
        <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                        Professionalism Redefined
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3 mb-2">
                        Process of How We Work
                    </h2>
                </div>

                {/* Process Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
                    {processSteps.map((step, index) => (
                        <div key={step.step} className="relative flex flex-col items-center">
                            {/* Image Container - No card, just the image */}
                            <div className="w-full flex items-center justify-center mb-6 relative">
                                <div className="w-32 h-32 flex items-center justify-center">
                                    <img
                                        src={step.image}
                                        alt={step.title}
                                        className="w-full h-full object-contain"
                                    />
                                </div>

                                {/* Arrow for desktop (not on last item) */}
                                {index < processSteps.length - 1 && (
                                    <div className="hidden xl:block absolute -right-6 top-1/2 -translate-y-1/2 z-10">
                                        <ArrowRight className="w-6 h-6 text-primary" />
                                    </div>
                                )}
                            </div>

                            {/* Step Title Below Image */}
                            <div className="text-center">
                                <div className="font-bold text-lg mb-1">Step {step.step}</div>
                                <h3 className="text-sm font-semibold text-gray-900">
                                    {step.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessWorkflow;
