const processSteps = [
    {
        stage: "01",
        title: "Where we Start",
        description: "Specialised 3-stage cleaning process for every construction phase",
        image: "/process/RoughCleaning.png",
    },
    {
        stage: "02",
        title: "Construction Expertise",
        description: "Construction-site expertise with minimal disruption",
        image: "/process/ConstructionSite.png",
    },
    {
        stage: "03",
        title: "Safety Compliance",
        description: "Fully compliant with safety standards and White Card certified staff",
        image: "/process/ExperiencedStaff.png",
    },
    {
        stage: "04",
        title: "Flexible Scheduling",
        description: "Reliable and flexible scheduling, including after-hours work",
        image: "/process/FlexibleHours.png",
    },
];

export function BuildersProcessSection() {
    return (
        <section className="py-16 md:py-24 px-4 md:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                        Our Process
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
                        How We Deliver Excellence
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Our comprehensive approach ensures every construction site is transformed into a pristine space
                    </p>
                </div>

                {/* Process Grid - 4 columns */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {processSteps.map((step, index) => (
                        <div
                            key={index}
                            className="bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                        >
                            {/* Image */}
                            <div className="mb-3">
                                <div className="w-full aspect-square rounded-xl overflow-hidden bg-gray-100">
                                    <img
                                        src={step.image}
                                        alt={step.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="space-y-2">
                                <div className="inline-block px-2 py-0.5 bg-gray-100 rounded-full">
                                    <span className="text-xs font-semibold text-gray-600">Stage {step.stage}</span>
                                </div>
                                <h3 className="text-lg font-bold text-foreground">
                                    {step.title}
                                </h3>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
