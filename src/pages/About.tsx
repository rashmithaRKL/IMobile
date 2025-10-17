import { motion } from 'framer-motion';
import { Award, Users, Smartphone, TrendingUp } from 'lucide-react';
import storeInterior from '@/assets/store-interior.jpg';

const About = () => {
  const stats = [
    { icon: Users, value: '50K+', label: 'Happy Customers' },
    { icon: Smartphone, value: '100K+', label: 'Devices Sold' },
    { icon: Award, value: '15+', label: 'Years Experience' },
    { icon: TrendingUp, value: '98%', label: 'Satisfaction Rate' },
  ];

  const timeline = [
    { year: '2010', event: 'Founded our first mobile shop' },
    { year: '2015', event: 'Expanded to second location' },
    { year: '2018', event: 'Launched online store' },
    { year: '2020', event: 'Reached 25,000 customers milestone' },
    { year: '2023', event: 'Became authorized dealer for major brands' },
    { year: '2025', event: 'Serving 50,000+ satisfied customers' },
  ];

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="text-gradient">IMobile Service Center</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your trusted partner for smartphones, accessories, and expert service since 2010
          </p>
        </motion.div>

        {/* Store Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl overflow-hidden mb-20"
        >
          <img
            src={storeInterior}
            alt="Store Interior"
            className="w-full h-[500px] object-cover"
          />
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 rounded-2xl mb-20"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
          <div className="max-w-3xl mx-auto space-y-4 text-muted-foreground text-lg">
            <p>
              Founded in 2010, IMobile Service Center started as a small mobile phone shop in Meegoda with a simple
              mission: to provide quality devices and exceptional service to our community.
            </p>
            <p>
              Over the years, we've grown into one of the most trusted mobile retailers in the
              region, serving over 50,000 satisfied customers. Our success is built on three
              pillars: quality products, competitive prices, and outstanding customer service.
            </p>
            <p>
              Today, we offer an extensive range of smartphones, from the latest flagship models
              to budget-friendly options, along with a comprehensive selection of accessories and
              professional repair services.
            </p>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-8 mb-8 last:mb-0"
              >
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-2xl font-bold text-primary">{item.year}</span>
                </div>
                <div className="flex-shrink-0 w-1 bg-gradient-to-b from-primary to-accent rounded-full relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full animate-glow-pulse" />
                </div>
                <div className="glass-card p-6 rounded-2xl flex-1">
                  <p className="text-lg">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Quality First',
                desc: 'We only stock genuine products from authorized distributors',
              },
              {
                title: 'Customer Focus',
                desc: 'Your satisfaction is our top priority, always',
              },
              {
                title: 'Expert Service',
                desc: 'Our team provides knowledgeable advice and support',
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 rounded-2xl text-center"
              >
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
