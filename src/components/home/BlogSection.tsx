import Link from "next/link";
import blogCleanHome from "@/assets/blog-clean-home.jpg";
import blogEcoCleaning from "@/assets/blog-eco-cleaning.jpg";
import blogOfficeTips from "@/assets/blog-office-tips.jpg";

const blogPosts = [
  {
    id: 1,
    title: "10 Tips for a Cleaner Home",
    excerpt: "Discover the best practices and hidden gems for maintaining a spotless living space.",
    image: blogCleanHome,
    author: {
      name: "Sarah Johnson",
      avatar: "SJ",
    },
    date: "20 Jan 2026",
  },
  {
    id: 2,
    title: "Benefits of Eco-Friendly Cleaning",
    excerpt: "How professional green cleaning services can improve your health and property value.",
    image: blogEcoCleaning,
    author: {
      name: "Michael Chen",
      avatar: "MC",
    },
    date: "18 Jan 2026",
  },
  {
    id: 3,
    title: "Office Cleaning Best Practices",
    excerpt: "Explore the most effective strategies for maintaining a productive clean workspace.",
    image: blogOfficeTips,
    author: {
      name: "Emily Davis",
      avatar: "ED",
    },
    date: "15 Jan 2026",
  },
];

const BlogSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
            Here are some interesting <br />{" "}
            <span className="text-primary">cleaning blogs</span>{" "}
            that help you out!
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Whether you're looking for practical advice, industry insights, or inspiration from local experts, these blogs cover a wide range of topics to keep you informed.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <article className="h-full">
                {/* Image */}
                <div className="relative h-56 rounded-2xl overflow-hidden mb-5">
                  <img
                    src={post.image.src}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-5 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium text-primary">
                    {post.author.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {post.author.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{post.date}</p>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="btn-primary inline-block"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
