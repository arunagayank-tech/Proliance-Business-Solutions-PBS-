/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  Activity, 
  BarChart3, 
  Users, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  Mail, 
  Menu, 
  X,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Why PBS', href: '#why-pbs' },
    { name: 'Industries', href: '#industries' },
    { name: 'Leadership', href: '#leadership' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-navy py-3 border-b border-gold' : 'bg-transparent py-6'
      }`}
      aria-label="Main Navigation"
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-4 group" aria-label="PBS Home">
          <div className="font-display text-3xl font-bold text-gold leading-none transition-transform group-hover:scale-105">PBS</div>
          <div className="w-px h-8 bg-gold/50"></div>
          <div className="flex flex-col">
            <div className="text-white text-[10px] tracking-[0.2em] font-bold leading-tight uppercase">
              Proliance Business Solutions
            </div>
            <div className="text-gold/70 text-[7px] tracking-[0.1em] uppercase font-semibold">
              Precision. Partnership. Excellence.
            </div>
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="text-white text-sm font-semibold hover:text-gold transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-gold after:transition-all hover:after:w-full"
            >
              {item.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-gold text-navy px-6 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-gold-hover transition-standard min-h-[44px] flex items-center"
            aria-label="Book a Free Consultation"
          >
            Get a Free Consultation
          </a>
        </div>

        <button 
          className="lg:hidden text-white p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-dark-navy border-b border-gold overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-5">
              {navLinks.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  className="text-white text-lg font-semibold hover:text-gold py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a 
                href="#contact" 
                className="bg-gold text-navy px-6 py-4 text-center text-sm font-bold uppercase tracking-widest hover:bg-gold-hover transition-standard"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get a Free Consultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section id="home" className="relative h-screen bg-navy flex items-center text-white overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 100px, #B8922A 100px, #B8922A 101px)' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-3xl"
        >
          <motion.div variants={itemVariants} className="w-16 h-0.5 bg-gold mb-8"></motion.div>
          <motion.h1 variants={itemVariants} className="text-6xl md:text-7xl font-display font-bold leading-[1.1] mb-6">
            Global Outsourcing.<br />Precision Delivery.<br />Measurable Results.
          </motion.h1>
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl font-light">
            PBS delivers specialist Healthcare RCM, Finance & Accounting, and Business Process Outsourcing services to clients across the US, UK, Australia, and New Zealand — backed by leadership with real-world industry experience.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap gap-5 mb-12">
            <a href="#services" className="bg-gold text-navy px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-gold-hover transition-standard min-h-[44px] flex items-center">
              Explore Our Services
            </a>
            <a href="#" className="border border-white text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-navy transition-standard min-h-[44px] flex items-center">
              Download Our Profile
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center gap-4 text-sm font-bold text-gold tracking-wider">
            <span>US</span> <div className="w-1 h-1 bg-gold rounded-full"></div>
            <span>UK</span> <div className="w-1 h-1 bg-gold rounded-full"></div>
            <span>AU</span> <div className="w-1 h-1 bg-gold rounded-full"></div>
            <span>NZ</span>
            <span className="text-white/40 font-light ml-2">| Markets Served</span>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { label: 'Years Leadership', value: '16+' },
    { label: 'Service Pillars', value: '3' },
    { label: 'Global Markets', value: '4' },
    { label: 'Industries Served', value: '6' },
  ];

  return (
    <div className="bg-dark-navy py-12 border-b border-gold/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h3 className="text-4xl md:text-5xl font-display text-gold mb-2">{stat.value}</h3>
              <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid lg:grid-cols-[1.5fr_1fr] gap-16 items-center"
        >
          <motion.div variants={itemVariants}>
            <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">About Proliance Business Solutions</span>
            <h2 className="text-4xl md:text-5xl mb-8 leading-tight">More Than an Outsourcing Provider — A Strategic Business Partner</h2>
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>Proliance Business Solutions (PBS) is a Sri Lanka-based global outsourcing and managed services provider, operating as a Strategic Business Unit (SBU) of GT International (Pvt) Ltd — a diversified business group with a strong foundation in global sourcing, supply chain management, and multi-sector operations.</p>
              <p>PBS delivers specialised Finance & Accounting, Healthcare Revenue Cycle Management (RCM), and Business Process Outsourcing services to clients across the United States, United Kingdom, Australia, and New Zealand. Backed by leadership with deep experience in finance, healthcare operations, and corporate management, PBS positions itself not merely as an outsourcing vendor, but as a long-term strategic business partner.</p>
            </div>
            <div className="mt-8">
              <a href="#why-pbs" className="text-gold font-bold uppercase tracking-widest text-xs hover:underline">Why Choose PBS? →</a>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="flex flex-col gap-6">
            <div className="p-10 bg-off-white border-t-4 border-gold relative">
              <span className="text-[10px] font-bold uppercase tracking-widest text-gold mb-4 block">Vision</span>
              <p className="font-display text-xl italic text-navy">"To become a trusted global outsourcing partner, delivering excellence in finance, healthcare, and business support services through innovation, precision, and integrity."</p>
            </div>
            <div className="p-10 bg-navy text-white relative">
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/50 mb-4 block">Mission</span>
              <p className="font-display text-xl italic">"To empower businesses worldwide by providing <span className="text-gold font-bold">reliable, efficient, and scalable</span> outsourcing solutions — enabling our clients to focus on their core operations."</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mt-20 bg-off-white py-8 px-6 flex flex-wrap justify-around items-center gap-8 font-bold tracking-[0.2em] text-sm text-navy/80"
        >
          {['INTEGRITY', 'PRECISION', 'PARTNERSHIP', 'EXCELLENCE'].map((val, idx, arr) => (
            <React.Fragment key={val}>
              <motion.span variants={itemVariants}>{val}</motion.span>
              {idx < arr.length - 1 && <div className="hidden md:block w-px h-5 bg-gold/50"></div>}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Healthcare RCM',
      icon: <Activity className="text-gold" size={40} />,
      desc: 'End-to-end RCM solutions designed around US, AU, and UK healthcare billing environments — HIPAA-aware and EHR-compatible.',
      items: [
        'Insurance eligibility checks',
        'Prior authorisation management',
        'Medical coding (ICD-10, CPT)',
        'Claims submission & denial mgmt',
        'AR follow-up & payment posting'
      ]
    },
    {
      title: 'Finance & Accounting',
      icon: <BarChart3 className="text-gold" size={40} />,
      desc: 'Outsourced finance operations that reduce overhead and improve accuracy — tailored to international regulatory requirements.',
      items: [
        'Bookkeeping & data management',
        'AP/AR processing',
        'Bank reconciliation & cash flow',
        'Payroll & statutory compliance',
        'MIS & Management accounts'
      ]
    },
    {
      title: 'Business BPO',
      icon: <Users className="text-gold" size={40} />,
      desc: 'Scalable back-office outsourcing that frees your team to focus on core growth — delivered by dedicated specialists.',
      items: [
        'Virtual assistant services',
        'Data entry & digitisation',
        'Customer support (Email/Chat)',
        'CRM & Database administration',
        'HR administration & onboarding'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.span variants={itemVariants} className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">What We Do</motion.span>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl">Three Pillars of Operational Excellence</motion.h2>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="bg-white p-10 border-t-4 border-gold shadow-xl shadow-navy/5 hover:-translate-y-2 transition-standard group"
            >
              <div className="mb-8 p-3 bg-navy/5 w-fit group-hover:bg-navy transition-colors">
                {React.cloneElement(service.icon as React.ReactElement, { className: 'text-gold group-hover:text-white transition-colors' })}
              </div>
              <h3 className="text-2xl mb-4">{service.title}</h3>
              <p className="text-slate-600 text-sm mb-8 leading-relaxed">{service.desc}</p>
              <ul className="space-y-3 text-xs font-semibold text-slate-700">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ArrowRight size={14} className="text-gold shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mt-16"
        >
          <motion.p variants={itemVariants} className="font-bold mb-6">Not sure which service fits your needs? Let's talk.</motion.p>
          <motion.a 
            variants={itemVariants}
            href="#contact" 
            className="bg-gold text-navy px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-gold-hover transition-standard inline-block min-h-[44px]"
            aria-label="Book a consultation"
          >
            Book a Free Consultation
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

const WhyPBS = () => {
  const reasons = [
    {
      title: 'Strong Corporate Backing',
      desc: 'Operates under GT International (Pvt) Ltd — an established, diversified business group.'
    },
    {
      title: 'Leadership-Driven Excellence',
      desc: 'Led by Fellow Chartered Accountants and CEOs with 16+ years of industry tenure.'
    },
    {
      title: 'Process-Oriented Delivery',
      desc: 'Structured, SLA-based workflows ensuring accuracy and consistency.'
    },
    {
      title: 'Global Service Standards',
      desc: 'Fully aligned with US, UK, AU, and NZ regulatory expectations.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="why-pbs" className="py-24 bg-off-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.span variants={itemVariants} className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Why PBS</motion.span>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl mb-12">Built on Real Operational Experience.</motion.h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {reasons.map((reason, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="pl-6 border-l-2 border-gold"
              >
                <h4 className="text-xl mb-2 font-bold">{reason.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{reason.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.div variants={itemVariants} className="mt-12">
            <a href="#industries" className="bg-navy text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-dark-navy transition-standard inline-block min-h-[44px]">
              See Industries We Serve
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Industries = () => {
  const industries = [
    { title: 'Healthcare', desc: 'Specialist RCM and admin support for hospitals and clinics.', icon: <Activity size={40} /> },
    { title: 'Finance & Accounting', desc: 'Outsourced finance operations for firms across AU, UK, and NZ.', icon: <BarChart3 size={40} /> },
    { title: 'Real Estate', desc: 'Property admin, document processing, and financial reporting.', icon: <MapPin size={40} /> }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="industries" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.span variants={itemVariants} className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Industries</motion.span>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl mb-12">Sector Expertise Across Six Industries</motion.h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {industries.map((ind, idx) => (
              <motion.div key={idx} variants={itemVariants} className="group h-64 [perspective:1000px] cursor-pointer" aria-label={`Industry: ${ind.title}`}>
                <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front */}
                  <div className="absolute inset-0 bg-navy text-white flex flex-col items-center justify-center p-8 text-center [backface-visibility:hidden]">
                    <div className="text-gold mb-4">{ind.icon}</div>
                    <h4 className="text-xl font-bold">{ind.title}</h4>
                  </div>
                  {/* Back */}
                  <div className="absolute inset-0 bg-gold text-navy flex flex-col items-center justify-center p-8 text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <p className="text-sm font-bold leading-relaxed">{ind.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div variants={itemVariants} className="mt-12 text-center">
            <a href="#leadership" className="text-navy font-bold uppercase tracking-widest text-xs hover:underline">Meet Our Leadership Team →</a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Leadership = () => {
  const leaders = [
    {
      name: 'Gayan Wanniarachchi',
      title: 'Executive Director — Proliance Business Solutions',
      bio: 'FCA, Member of CPA Australia with 16+ years of leadership. Currently CEO of Nawaloka Hospital Negombo. He brings deep operational insight to healthcare and finance clients.',
      tags: ['FCA (ICASL)', 'CPA Australia', 'ACMA', 'AAT']
    },
    {
      name: 'Thenuka Dissanayake',
      title: 'Executive Director — Proliance Business Solutions',
      bio: 'FCA with over 15 years experience. Currently CEO of Nawaloka Care Laboratories. Former Audit Supervisor at Ernst & Young. Holds an MBA from Univ. of Southern Queensland.',
      tags: ['FCA (ICASL)', 'ACCA', 'MBA (Australia)', 'ACPM']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="leadership" className="py-24 bg-off-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.span variants={itemVariants} className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Our Leadership</motion.span>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl mb-12">Led by Industry Insiders</motion.h2>
          
          <div className="grid lg:grid-cols-2 gap-10">
            {leaders.map((leader, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="bg-white p-12 border-t-4 border-gold shadow-xl shadow-navy/5"
              >
                <h3 className="text-3xl mb-2">{leader.name}</h3>
                <span className="text-gold text-sm font-bold block mb-6 uppercase tracking-wider">{leader.title}</span>
                <p className="text-slate-600 mb-8 leading-relaxed text-sm">{leader.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {leader.tags.map(tag => (
                    <span key={tag} className="bg-gold/10 text-gold px-3 py-1 text-[10px] font-bold tracking-wider uppercase">{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-20 max-w-4xl mx-auto text-center">
            <p className="font-display text-3xl md:text-4xl italic text-navy/70 leading-relaxed">
              "PBS was built not by theorists — but by practitioners who have led hospitals, managed audits, and navigated real financial complexity."
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="mt-12 text-center">
            <a href="#contact" className="bg-gold text-navy px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-gold-hover transition-standard inline-block min-h-[44px]">
              Start Your Project Today
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const GlobalReach = () => {
  const markets = [
    { flag: '🇺🇸', name: 'United States', service: 'Healthcare RCM & BPO' },
    { flag: '🇬🇧', name: 'United Kingdom', service: 'Finance & Accounting' },
    { flag: '🇦🇺', name: 'Australia', service: 'Accounting & Tax' },
    { flag: '🇳🇿', name: 'New Zealand', service: 'Back-Office Support' }
  ];

  return (
    <section className="py-24 bg-navy text-white">
      <div className="container mx-auto px-6">
        <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Global Reach</span>
        <h2 className="text-4xl md:text-5xl mb-12">Offshore Delivery. Global Standards.</h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {markets.map((m, idx) => (
            <div key={idx} className="bg-white/5 p-8 border border-gold/20 text-center">
              <span className="text-4xl block mb-4">{m.flag}</span>
              <h4 className="text-gold font-bold mb-2">{m.name}</h4>
              <p className="text-[10px] text-white/60 uppercase tracking-widest">{m.service}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-10 text-sm font-bold">
          {['English-Proficient Workforce', '20% Annual BPO Growth', 'Competitive Cost Advantage'].map(item => (
            <div key={item} className="flex items-center gap-3">
              <CheckCircle2 size={18} className="text-gold" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-5xl mb-6">Let's Build Something Together</h2>
            <p className="text-slate-600 mb-10 leading-relaxed">Reach out and let's start the conversation about how PBS can design a solution built around your specific goals.</p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 font-semibold">
                <div className="w-10 h-10 bg-off-white flex items-center justify-center text-gold"><MapPin size={20} /></div>
                <span>No.50/1A, Ward Place, Colombo 7, Sri Lanka</span>
              </div>
              <div className="flex items-center gap-4 font-semibold">
                <div className="w-10 h-10 bg-off-white flex items-center justify-center text-gold"><Phone size={20} /></div>
                <span>+94 777 116 954</span>
              </div>
              <div className="flex items-center gap-4 font-semibold">
                <div className="w-10 h-10 bg-off-white flex items-center justify-center text-gold"><Mail size={20} /></div>
                <span>info@gtinternational.lk</span>
              </div>
            </div>
            
            <p className="mt-12 italic text-xs text-slate-400">A Strategic Business Unit of GT International (Pvt) Ltd</p>
          </div>

          <div className="bg-white p-10 border-t-8 border-gold shadow-2xl shadow-navy/10">
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-gold/10 text-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl text-gold mb-4">Thank You</h3>
                <p className="text-slate-600">Your enquiry has been received. Our team will be in touch within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-navy/60 mb-2">Full Name *</label>
                  <input type="text" required className="w-full p-3 border border-slate-200 outline-none focus:border-gold" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-navy/60 mb-2">Service Interest</label>
                  <select className="w-full p-3 border border-slate-200 outline-none focus:border-gold bg-white">
                    <option>Healthcare RCM</option>
                    <option>Finance & Accounting BPO</option>
                    <option>Business Process Outsourcing</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-navy/60 mb-2">Message</label>
                  <textarea rows={4} className="w-full p-3 border border-slate-200 outline-none focus:border-gold" placeholder="Tell us about your requirement"></textarea>
                </div>
                <button type="submit" className="w-full bg-gold text-navy py-4 text-xs font-bold uppercase tracking-widest hover:bg-gold-hover transition-standard">
                  Send My Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-dark-navy text-white pt-20 pb-8 border-t-2 border-gold" aria-label="Footer">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="font-display text-3xl font-bold text-gold leading-none">PBS</div>
              <div className="w-px h-8 bg-gold/30"></div>
              <div className="flex flex-col">
                <div className="text-white text-[10px] tracking-[0.1em] font-bold leading-tight uppercase">
                  Proliance Business Solutions
                </div>
                <div className="text-gold/50 text-[7px] tracking-[0.1em] uppercase font-semibold">
                  Precision. Partnership. Excellence.
                </div>
              </div>
            </div>
            <p className="text-xs text-white/50 leading-relaxed max-w-xs">
              Strategic outsourcing solutions in Healthcare RCM and Finance & Accounting. A Strategic Business Unit of GT International (Pvt) Ltd.
            </p>
          </div>
          <div>
            <h5 className="text-gold text-[10px] font-bold uppercase tracking-widest mb-6">Services</h5>
            <ul className="text-sm text-white/70 space-y-3">
              <li className="hover:text-gold cursor-pointer transition-colors"><a href="#services">Healthcare RCM</a></li>
              <li className="hover:text-gold cursor-pointer transition-colors"><a href="#services">Finance & Accounting</a></li>
              <li className="hover:text-gold cursor-pointer transition-colors"><a href="#services">Business BPO</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-gold text-[10px] font-bold uppercase tracking-widest mb-6">Company</h5>
            <ul className="text-sm text-white/70 space-y-3">
              <li className="hover:text-gold cursor-pointer transition-colors"><a href="#about">About PBS</a></li>
              <li className="hover:text-gold cursor-pointer transition-colors"><a href="#why-pbs">Why Choose Us</a></li>
              <li className="hover:text-gold cursor-pointer transition-colors"><a href="#leadership">Leadership Team</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-gold text-[10px] font-bold uppercase tracking-widest mb-6">Global Markets</h5>
            <p className="text-xs text-white/50 leading-relaxed">
              Serving clients across US, UK, Australia, and New Zealand with aligned time-zone support.
            </p>
            <div className="mt-6">
              <a href="#contact" className="text-gold text-xs font-bold uppercase tracking-widest hover:underline">Contact Us Today →</a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 text-center text-[10px] text-white/30 uppercase tracking-widest">
          Copyright © {new Date().getFullYear()} Proliance Business Solutions (PBS). All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <Stats />
      <About />
      <Services />
      <WhyPBS />
      <Industries />
      <Leadership />
      <GlobalReach />
      <Contact />
      <Footer />
    </div>
  );
}
