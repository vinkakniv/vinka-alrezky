import { AiOutlineMail, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

// Initialize EmailJS
emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '');

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      // Add timestamp to the form data
      const formData = new FormData(formRef.current!);
      formData.append('time', new Date().toLocaleString());

      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
      );

      setSuccess(true);
      setForm({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      setError('Failed to send message. Please try again.');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 animate-fade-in-up">
          <h3 className="text-4xl md:text-5xl font-bold text-apple-gray-900 dark:text-white mb-6 tracking-tight">
            Let's Chat! 💬
          </h3>
          <p className="text-lg md:text-xl text-apple-gray-600 dark:text-apple-gray-400 leading-relaxed max-w-3xl mx-auto">
            Got a cool project idea? Want to collaborate? Or just want to say hi? I'd love to hear from you!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto animate-slide-in">
          <div className="glass-apple dark:glass-apple-dark p-8 rounded-apple-lg shadow-apple-lg">
            <h4 className="text-2xl font-semibold mb-6 text-apple-blue-600 dark:text-apple-blue-400 tracking-tight">Send Message</h4>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-apple-gray-700 dark:text-apple-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-apple-gray-300 dark:border-apple-dark-600 rounded-apple focus:ring-2 focus:ring-apple-blue-500 focus:border-transparent dark:bg-apple-dark-800 dark:text-white transition-all duration-200 apple-focus"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-apple-gray-700 dark:text-apple-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-apple-gray-300 dark:border-apple-dark-600 rounded-apple focus:ring-2 focus:ring-apple-blue-500 focus:border-transparent dark:bg-apple-dark-800 dark:text-white transition-all duration-200 apple-focus"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-apple-gray-700 dark:text-apple-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-apple-gray-300 dark:border-apple-dark-600 rounded-apple focus:ring-2 focus:ring-apple-blue-500 focus:border-transparent dark:bg-apple-dark-800 dark:text-white transition-all duration-200 apple-focus resize-none"
                  required
                ></textarea>
              </div>
              {error && (
                <div className="p-3 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 rounded-apple">
                  <p className="text-red-700 dark:text-red-400 text-sm">{error}</p>
                </div>
              )}
              {success && (
                <div className="p-3 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-apple">
                  <p className="text-green-700 dark:text-green-400 text-sm">Message sent successfully!</p>
                </div>
              )}
              <button
                type="submit"
                disabled={loading}
                className={`apple-button w-full bg-apple-blue-600 hover:bg-apple-blue-700 text-white px-6 py-4 rounded-apple font-medium text-lg flex items-center justify-center gap-3 shadow-apple transition-all duration-300 apple-focus ${
                  loading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <AiOutlineMail className="text-xl" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
          
          <div className="glass-apple dark:glass-apple-dark p-8 rounded-apple-lg shadow-apple-lg">
            <h4 className="text-2xl font-semibold mb-6 text-apple-blue-600 dark:text-apple-blue-400 tracking-tight">Contact Info</h4>
            <div className="space-y-6">
              <a 
                href="mailto:vinka.aeris@gmail.com" 
                className="apple-button group flex items-center gap-4 text-apple-gray-700 dark:text-apple-gray-300 hover:text-apple-blue-600 dark:hover:text-apple-blue-400 transition-all duration-300 p-4 rounded-apple hover:bg-apple-gray-100 dark:hover:bg-apple-dark-800 apple-focus"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-apple-blue-100 dark:bg-apple-blue-900/30 rounded-apple flex items-center justify-center group-hover:bg-apple-blue-600 group-hover:text-white transition-all duration-300">
                  <AiOutlineMail className="text-xl" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-apple-gray-500 dark:text-apple-gray-400">vinka.aeris@gmail.com</p>
                </div>
              </a>
              
              <a 
                href="https://github.com/vinkakniv" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="apple-button group flex items-center gap-4 text-apple-gray-700 dark:text-apple-gray-300 hover:text-apple-blue-600 dark:hover:text-apple-blue-400 transition-all duration-300 p-4 rounded-apple hover:bg-apple-gray-100 dark:hover:bg-apple-dark-800 apple-focus"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-apple-blue-100 dark:bg-apple-blue-900/30 rounded-apple flex items-center justify-center group-hover:bg-apple-blue-600 group-hover:text-white transition-all duration-300">
                  <AiFillGithub className="text-xl" />
                </div>
                <div>
                  <p className="font-medium">GitHub</p>
                  <p className="text-sm text-apple-gray-500 dark:text-apple-gray-400">vinkakniv</p>
                </div>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/vinka-alrezky-a-6b6a19245/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="apple-button group flex items-center gap-4 text-apple-gray-700 dark:text-apple-gray-300 hover:text-apple-blue-600 dark:hover:text-apple-blue-400 transition-all duration-300 p-4 rounded-apple hover:bg-apple-gray-100 dark:hover:bg-apple-dark-800 apple-focus"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-apple-blue-100 dark:bg-apple-blue-900/30 rounded-apple flex items-center justify-center group-hover:bg-apple-blue-600 group-hover:text-white transition-all duration-300">
                  <AiFillLinkedin className="text-xl" />
                </div>
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <p className="text-sm text-apple-gray-500 dark:text-apple-gray-400">Vinka Alrezky As</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 