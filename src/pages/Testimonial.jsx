export default function Testimonial() {
  const reviews = [
    { text: "Amazing experience booking with Dream Stay!", author: "David" },
    { text: "Smooth and easy hotel search.", author: "Sarah" },
    { text: "Best booking platform for Nepal trips.", author: "John" }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h2 className="text-3xl font-bold text-center mb-10">What Our Users Say</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <p>"{r.text}"</p>
            <p className="mt-4 font-semibold text-right">- {r.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}