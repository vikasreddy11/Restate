import { useState } from 'react'
import { Breadcrumbs } from '../components/Breadcrumbs'

type FaqProps = {
  onBack: () => void
}

type FaqCategory = 'General' | 'Property' | 'Services' | 'Registration' | 'Contact'

const faqCategories: FaqCategory[] = ['General', 'Property', 'Services', 'Registration', 'Contact']

const faqs: { category: FaqCategory; question: string; answer: string }[] = [
  // General
  {
    category: 'General',
    question: 'What is Restate?',
    answer: 'Restate is a comprehensive real estate platform designed to help you buy, sell, rent, or mortgage properties with ease. We connect buyers, sellers, and renters with top local agents and provide all the tools you need in one place.',
  },
  {
    category: 'General',
    question: 'Is Restate free to use?',
    answer: 'Yes! Browsing properties, reading guides, and using our mortgage calculator are completely free. Agent matching and premium listing services may carry fees, which are clearly displayed before you commit.',
  },
  {
    category: 'General',
    question: 'Which cities does Restate operate in?',
    answer: 'We currently operate across major cities in India including Hyderabad, Mumbai, Bangalore, Delhi, Chennai, and Pune, with more cities being added regularly.',
  },
  // Property
  {
    category: 'Property',
    question: 'How do I search for properties?',
    answer: 'Use the search bar on the homepage to enter a location or postcode. You can filter results by price, property type, number of bedrooms, and more to find your perfect match.',
  },
  {
    category: 'Property',
    question: 'What is a free home valuation?',
    answer: 'A free home valuation is an expert-led assessment of your property\'s current market value. One of our certified agents visits your property, evaluates it against comparable sales, and provides a detailed valuation report at no cost.',
  },
  {
    category: 'Property',
    question: 'How accurate are property valuations?',
    answer: 'Our valuations are carried out by experienced local agents with deep knowledge of market trends. While no valuation is guaranteed, our estimates are within ±5% of final sale prices in most cases.',
  },
  // Services
  {
    category: 'Services',
    question: 'What services does Restate offer?',
    answer: 'We offer property search, home valuations, agent matching, rental listings, tenancy support, mortgage calculators, and mortgage-in-principle services. Browse our Services page for the full list.',
  },
  {
    category: 'Services',
    question: 'How do I request a service?',
    answer: 'Navigate to the Services page, find the service you\'re interested in, and click the "Request Service" button. One of our team members will contact you within 24 hours to confirm your request.',
  },
  {
    category: 'Services',
    question: 'Can I get a Mortgage in Principle online?',
    answer: 'Yes. Our Mortgage in Principle tool connects you directly with partner lenders. The process typically takes 10–15 minutes and will not impact your credit score.',
  },
  // Registration
  {
    category: 'Registration',
    question: 'Do I need to create an account to browse listings?',
    answer: 'No account is needed to browse listings or read guides. However, creating a free account lets you save favourite properties, receive alerts, and track your enquiries.',
  },
  {
    category: 'Registration',
    question: 'How do I sign up?',
    answer: 'Click "Login / Sign-in" in the top navigation bar. You can sign up using your email address or continue with Google. The process takes less than a minute.',
  },
  {
    category: 'Registration',
    question: 'Is my personal data secure?',
    answer: 'Absolutely. Restate complies with all relevant data protection regulations. We use industry-standard encryption and never share your personal data with third parties without your explicit consent.',
  },
  // Contact
  {
    category: 'Contact',
    question: 'How can I reach Restate\'s support team?',
    answer: 'You can reach us via our Contact Us page, by emailing hello@restate.in, or by calling +91 98765 43210. Our team is available Monday–Saturday 9 AM–7 PM and Sunday 10 AM–4 PM.',
  },
  {
    category: 'Contact',
    question: 'How quickly will I receive a response?',
    answer: 'We aim to respond to all enquiries within 24 business hours. For urgent matters, please call us directly — our team is happy to help.',
  },
  {
    category: 'Contact',
    question: 'Can I visit your office in person?',
    answer: 'Yes! Our office is located at 24 Restate Tower, Banjara Hills, Hyderabad, 500034. We welcome walk-in visitors during business hours, though booking an appointment ensures a dedicated consultant is available for you.',
  },
]

export function Faq({ onBack }: FaqProps) {
  const [activeCategory, setActiveCategory] = useState<FaqCategory>('General')
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const filtered = faqs.filter(f => f.category === activeCategory)

  return (
    <div className="min-h-screen bg-neutral-50 font-sans pb-20">
      <Breadcrumbs current="FAQ" onBack={onBack} />

      <div className="max-w-5xl mx-auto px-6">
        {/* Page Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold text-neutral-800 mb-2">Frequently Asked Questions</h1>
          <p className="text-neutral-500 text-lg">
            Find answers to the most common questions about Restate, properties, and our services.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {faqCategories.map(cat => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setOpenIndex(0) }}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer border ${
                activeCategory === cat
                  ? 'bg-cyan-500 text-white border-cyan-500 shadow-sm'
                  : 'bg-white text-neutral-600 border-neutral-200 hover:border-cyan-400 hover:text-cyan-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {filtered.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={i}
                className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen ? 'border-cyan-300 shadow-sm' : 'border-neutral-100 hover:border-neutral-300'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer group"
                >
                  <span className={`text-base font-semibold transition-colors duration-200 pr-4 ${isOpen ? 'text-cyan-600' : 'text-neutral-800 group-hover:text-cyan-600'}`}>
                    {faq.question}
                  </span>
                  <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-cyan-500 text-white rotate-45' : 'bg-neutral-100 text-neutral-500'}`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </button>
                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="px-6 pb-5 text-neutral-500 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-12 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-xl font-bold mb-2">Still have questions?</h3>
          <p className="text-cyan-100 mb-5 text-sm">
            Can't find the answer you're looking for? Our friendly team is happy to help.
          </p>
          <button
            onClick={onBack}
            className="px-6 py-2.5 bg-white text-cyan-600 font-bold rounded-xl hover:bg-cyan-50 transition-all duration-200 active:scale-95 cursor-pointer"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  )
}
