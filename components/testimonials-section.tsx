export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Vixtron's design made our brand feel alive — it's both functional and emotional.",
      author: "Jordan Lee",
      role: "Creative Director",
    },
    {
      quote: "A creative thinker who codes like an engineer.",
      author: "Tech Studio CEO",
      role: "CEO",
    },
  ]

  return (
    <section className="py-24 px-4 bg-[#0D0E12]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#F5F5F5] font-[family-name:var(--font-poppins)]">
          Testimonials
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative p-8 rounded-xl bg-[#1B1C22] border-2 border-[#00F5A0]/20 hover-glow">
              <div className="absolute -top-4 -left-4 text-6xl text-[#00F5A0] opacity-20">"</div>

              <p className="text-lg text-[#F5F5F5] mb-6 leading-relaxed relative z-10">{testimonial.quote}</p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00F5A0] to-[#00C3FF]" />
                <div>
                  <div className="font-semibold text-[#F5F5F5]">{testimonial.author}</div>
                  <div className="text-sm text-[#9CA3AF]">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
