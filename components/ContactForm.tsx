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
    <section className="py-20">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl py-10 font-bold opacity-60 dark:text-white dark:opacity-100 text-center">
          Contact Me
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <h4 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">Send Message</h4>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  required
                ></textarea>
              </div>
              {error && (
                <p className="text-red-500 text-sm">{error}</p>
              )}
              {success && (
                <p className="text-green-500 text-sm">Message sent successfully!</p>
              )}
              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition-colors flex items-center justify-center gap-2 ${
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
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <h4 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">Contact Info</h4>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm always open to new opportunities, collaborations, or simply a good tech chat. Let's connect!
            </p>
            <div className="space-y-4">
              <a href="mailto:vinka.aeris@gmail.com" className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                <AiOutlineMail className="text-2xl" />
                <span>vinka.aeris@gmail.com</span>
              </a>
              <a href="https://github.com/vinkakniv" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                <AiFillGithub className="text-2xl" />
                <span>vinkakniv</span>
              </a>
              <a href="https://www.linkedin.com/in/vinka-alrezky-a-6b6a19245/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                <AiFillLinkedin className="text-2xl" />
                <span>Vinka Alrezky As</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 