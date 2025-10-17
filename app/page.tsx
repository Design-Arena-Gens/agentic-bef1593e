'use client'

import { useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    // In production, this would submit to a backend/CRM
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="py-6 px-4 border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-heading font-bold text-black">Crumbl</h1>
        </div>
      </header>

      {/* Hero Section - Above the Fold */}
      <section className="bg-gradient-to-b from-crumbl-light-pink to-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-block bg-crumbl-pink text-black font-bold px-6 py-2 rounded-full text-sm mb-6">
              🎁 LIMITED TIME OFFER
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-black text-black mb-6 leading-tight">
            Get Your Free<br />
            <span className="text-crumbl-pink">$100 Crumbl</span><br />
            Gift Card
          </h2>

          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Complete a quick 3-minute survey and unlock your $100 Crumbl gift card.
            Limited spots available today!
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="mb-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full px-6 py-4 text-lg rounded-full border-2 border-gray-300 focus:border-crumbl-pink focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-gray-900 transition-all transform hover:scale-105 shadow-lg"
              >
                Claim My $100 Gift Card →
              </button>
              <p className="text-sm text-gray-500 mt-4">
                No credit card required • 100% Free
              </p>
            </form>
          ) : (
            <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md mx-auto">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-2xl font-heading font-bold mb-4">You're In!</h3>
              <p className="text-gray-700 mb-6">
                Check your email for next steps to claim your $100 Crumbl gift card.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gray-600 text-lg mb-2">Trusted by cookie lovers everywhere</p>
            <div className="flex justify-center items-center gap-2">
              <span className="text-4xl font-bold text-black">4.8</span>
              <div className="flex text-crumbl-pink text-2xl">★★★★★</div>
            </div>
            <p className="text-gray-500 mt-2">Based on 12,847+ reviews</p>
          </div>

          {/* Testimonial Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah M.",
                text: "I couldn't believe it was real until the gift card arrived! Got mine in 2 days. 🍪",
                verified: true
              },
              {
                name: "Jake T.",
                text: "Super easy process. The survey took less than 5 minutes and I had my card!",
                verified: true
              },
              {
                name: "Emily R.",
                text: "Saw this on TikTok and thought it was too good to be true. It's legit! ✨",
                verified: true
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-crumbl-light-pink p-6 rounded-2xl">
                <div className="flex text-crumbl-pink mb-3">★★★★★</div>
                <p className="text-gray-800 mb-4">"{testimonial.text}"</p>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-crumbl-pink rounded-full"></div>
                  <div>
                    <p className="font-bold text-black">{testimonial.name}</p>
                    {testimonial.verified && (
                      <p className="text-sm text-gray-600">✓ Verified Customer</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-heading font-black text-center mb-12">
            How It Works
          </h3>

          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "Enter Your Email",
                description: "Sign up with your email address to get started. Takes 10 seconds."
              },
              {
                step: "2",
                title: "Complete Quick Survey",
                description: "Answer a few simple questions about your cookie preferences. 3 minutes max."
              },
              {
                step: "3",
                title: "Complete Partner Offers",
                description: "Try out a few of our trusted partner services to unlock your gift card."
              },
              {
                step: "4",
                title: "Receive Your Gift Card",
                description: "Get your $100 Crumbl gift card delivered directly to your email!"
              }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-crumbl-pink rounded-full flex items-center justify-center">
                  <span className="text-3xl font-heading font-black text-black">{item.step}</span>
                </div>
                <div className="flex-1 pt-2">
                  <h4 className="text-2xl font-heading font-bold text-black mb-2">{item.title}</h4>
                  <p className="text-gray-700 text-lg">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-black text-white font-bold text-lg px-12 py-4 rounded-full hover:bg-gray-900 transition-all transform hover:scale-105 shadow-lg"
            >
              Get Started Now →
            </button>
          </div>
        </div>
      </section>

      {/* Why Crumbl Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-heading font-black text-center mb-12">
            Why Crumbl Cookies?
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: "🍪",
                title: "Weekly Rotating Menu",
                description: "New flavors every week means there's always something exciting to try."
              },
              {
                icon: "📦",
                title: "Perfect for Sharing",
                description: "Large cookies perfect for parties, gifts, or treating yourself."
              },
              {
                icon: "⭐",
                title: "Instagram-Worthy",
                description: "Beautiful presentation in their iconic pink box."
              },
              {
                icon: "🚗",
                title: "Nationwide Locations",
                description: "Find a Crumbl near you with over 800+ locations across the US."
              }
            ].map((feature, idx) => (
              <div key={idx} className="flex gap-4 items-start p-6 rounded-2xl bg-crumbl-light-pink">
                <div className="text-5xl">{feature.icon}</div>
                <div>
                  <h4 className="text-xl font-heading font-bold text-black mb-2">{feature.title}</h4>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-crumbl-light-pink to-crumbl-pink">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block bg-black text-white font-bold px-6 py-2 rounded-full text-sm">
              ⏰ HURRY - LIMITED SPOTS
            </span>
          </div>

          <h3 className="text-4xl md:text-5xl font-heading font-black text-black mb-6">
            Only 47 Gift Cards<br />Left Today
          </h3>

          <p className="text-xl text-gray-800 mb-8">
            This exclusive offer won't last long. Claim your $100 gift card before they're all gone!
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-black text-white font-bold text-xl px-12 py-5 rounded-full hover:bg-gray-900 transition-all transform hover:scale-105 shadow-xl"
          >
            Claim My Gift Card Now →
          </button>

          <div className="mt-8 flex justify-center gap-8 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>100% Free</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>No Credit Card</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>Quick & Easy</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-heading font-black text-center mb-12">
            Frequently Asked Questions
          </h3>

          <div className="space-y-6">
            {[
              {
                question: "Is this really free?",
                answer: "Yes! The gift card is 100% free. You'll complete a survey and try some partner offers to qualify."
              },
              {
                question: "How long does it take?",
                answer: "Most people complete everything in 15-20 minutes. The survey itself only takes 3 minutes."
              },
              {
                question: "When will I receive my gift card?",
                answer: "Gift cards are typically delivered within 2-5 business days after completing all requirements."
              },
              {
                question: "Do I need a credit card?",
                answer: "No credit card is required to participate. Some partner offers may ask for one, but you can choose which offers to complete."
              },
              {
                question: "Can I use this at any Crumbl location?",
                answer: "Yes! Your gift card works at all Crumbl locations nationwide and online."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-2xl">
                <h4 className="text-xl font-heading font-bold text-black mb-3">{faq.question}</h4>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-4xl md:text-5xl font-heading font-black mb-6">
            Ready for Fresh-Baked<br />Cookies on Us?
          </h3>

          <p className="text-xl text-gray-300 mb-8">
            Join thousands of happy cookie lovers who've already claimed their free gift card.
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-crumbl-pink text-black font-bold text-xl px-12 py-5 rounded-full hover:bg-pink-400 transition-all transform hover:scale-105 shadow-xl"
          >
            Get My $100 Gift Card →
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-100 text-center text-gray-600 text-sm">
        <p className="mb-2">© 2024 Crumbl Gift Card Promotion. All rights reserved.</p>
        <p className="text-xs">
          This is a promotional offer. Terms and conditions apply.
          Partner offers must be completed to receive gift card.
        </p>
      </footer>
    </main>
  )
}
