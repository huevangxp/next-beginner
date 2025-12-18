import Link from "next/link";
import { ShoppingBag, ArrowRight, Star, Zap, Shield } from "lucide-react";

const IndexPage = () => {
  const features = [
    {
      title: "Fast Delivery",
      desc: "Get your products in 24h",
      icon: Zap,
      color: "text-amber-500",
      bg: "bg-amber-50",
    },
    {
      title: "Secure Payment",
      desc: "100% secure checkout",
      icon: Shield,
      color: "text-blue-500",
      bg: "bg-blue-50",
    },
    {
      title: "Quality Assured",
      desc: "Only the best products",
      icon: Star,
      color: "text-purple-500",
      bg: "bg-purple-50",
    },
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-teal-600 p-8 md:p-16 text-white shadow-2xl shadow-teal-100">
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Build Your Next Big Idea with{" "}
            <span className="text-teal-200">Next.js</span>
          </h1>
          <p className="text-lg text-teal-50 mb-8 leading-relaxed">
            Welcome to the beginner's guide to Next.js. Explore our curated
            collection of modern web components and start building today.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/product"
              className="bg-white text-teal-600 px-8 py-4 rounded-2xl font-bold hover:bg-teal-50 transition-all flex items-center gap-2 shadow-lg"
            >
              Explore Products
              <ArrowRight className="w-5 h-5" />
            </Link>
            <button className="bg-teal-500/30 backdrop-blur-md border border-teal-400/30 text-white px-8 py-4 rounded-2xl font-bold hover:bg-teal-500/50 transition-all">
              Learn More
            </button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-teal-500 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 right-0 -mb-20 -mr-20 w-64 h-64 bg-teal-400 rounded-full blur-3xl opacity-30"></div>
      </section>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.title}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all"
            >
              <div
                className={`${feature.bg} ${feature.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}
              >
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm">{feature.desc}</p>
            </div>
          );
        })}
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-4">
            Ready to start your journey?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Join thousands of developers learning Next.js and building amazing
            applications.
          </p>
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-10 py-4 rounded-2xl font-bold transition-all shadow-xl shadow-teal-900/20">
            Get Started Now
          </button>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-900/20 via-transparent to-transparent opacity-50"></div>
      </div>
    </div>
  );
};

export default IndexPage;
