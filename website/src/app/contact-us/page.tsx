'use client'
import { motion } from 'framer-motion';
import { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  const contactMethods = [
    { icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ), 
      title: "Email", 
      value: "munsi@spinupsourcing.com",
      action: "mailto:munsi@spinupsourcing.com"
    },
    { icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ), 
      title: "Phone", 
      value: "+880 1725-502388",
      action: "tel:+8801725502388"
    },
    // { icon: (
    //     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    //     </svg>
    //   ), 
    //   title: "Office", 
    //   value: "123 Business Ave, Suite 400\nNew York, NY 10001",
    //   action: "https://maps.google.com"
    // }
  ];

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with Animated Circle */}
        <div className="text-center mb-16 relative">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-rose-100/50 blur-xl"
          />
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-amber-100/50 blur-xl"
          />
          
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4"
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            We'd love to hear from you! Whether you have a question about our products, services, or just want to say hello, drop us a message.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 relative overflow-hidden"
          >
            <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-rose-100/30 blur-2xl" />
            <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-amber-100/30 blur-2xl" />
            
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
            
            {submitSuccess && (
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg border border-green-200"
              >
                Thank you for your message! We'll get back to you soon.
              </motion.div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all"
                />
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-rose-600 to-amber-600 text-white py-3 px-6 rounded-lg font-medium shadow-md hover:shadow-lg transition-all"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Methods - Circular Design */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <svg width="100%" height="100%" viewBox="0 0 400 400" className="relative">
                {/* Background Circle */}
                <circle cx="200" cy="200" r="180" fill="none" stroke="rgba(251, 207, 232, 0.3)" strokeWidth="2" />
                
                {/* Animated Connection Lines */}
                {contactMethods.map((_, index) => {
                  const angle = (360 / contactMethods.length) * index - 90;
                  const x1 = 200;
                  const y1 = 200;
                  const x2 = 200 + 180 * Math.cos(angle * Math.PI / 180);
                  const y2 = 200 + 180 * Math.sin(angle * Math.PI / 180);
                  
                  return (
                    <motion.line
                      key={index}
                      x1={x1}
                      y1={y1}
                      x2={x1}
                      y2={y1}
                      stroke="rgba(225, 29, 72, 0.2)"
                      strokeWidth="1"
                      initial={{ x2: x1, y2: y1 }}
                      animate={{ x2, y2 }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    />
                  );
                })}
                
                {/* Contact Method Points */}
                {contactMethods.map((method, index) => {
                  const angle = (360 / contactMethods.length) * index - 90;
                  const x = 200 + 180 * Math.cos(angle * Math.PI / 180);
                  const y = 200 + 180 * Math.sin(angle * Math.PI / 180);
                  
                  return (
                    <motion.g
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.3 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <a href={method.action} className="cursor-pointer">
                        <circle cx={x} cy={y} r="24" fill="white" className="shadow-lg" />
                        <circle cx={x} cy={y} r="20" fill="rgba(225, 29, 72, 0.1)" />
                        <foreignObject x={x-20} y={y-20} width="40" height="40">
                          <div className="flex items-center justify-center w-10 h-10 mx-auto text-rose-600">
                            {method.icon}
                          </div>
                        </foreignObject>
                      </a>
                    </motion.g>
                  );
                })}
              </svg>
              
              {/* Contact Method Details */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg max-w-xs mx-auto">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Other ways to reach us</h3>
                    <div className="space-y-4">
                      {contactMethods.map((method, index) => (
                        <motion.div 
                          key={index}
                          whileHover={{ x: 5 }}
                          className="text-left"
                        >
                          <a href={method.action} className="flex items-start space-x-3 group">
                            <span className="text-rose-600 mt-0.5">{method.icon}</span>
                            <div>
                              <p className="font-medium text-gray-900 group-hover:text-rose-600">{method.title}</p>
                              <p className="text-sm text-gray-600 whitespace-pre-line">{method.value}</p>
                            </div>
                          </a>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;