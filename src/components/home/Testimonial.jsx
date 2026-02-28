export default function Testimonials() {
  const testimonials = [
    { name: "Rohit Sharma", message: "Amazing stay and great service!" },
    { name: "Ananya Patel", message: "Highly recommend DreamStay!" },
    { name: "Michael Johnson", message: "Beautiful ambiance and easy booking." },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">
          What Our Guests Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
              <p className="italic text-gray-600 mb-6">"{t.message}"</p>
              <h4 className="text-blue-600 font-semibold">{t.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}