function Testimonial() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h2 className="text-3xl font-bold text-center mb-10">
        What Our Users Say
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <p>"Amazing experience booking with Dream Stay!"</p>
          <p className="mt-4 font-semibold">- David</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p>"Smooth and easy hotel search."</p>
          <p className="mt-4 font-semibold">- Sarah</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p>"Best booking platform for Nepal trips."</p>
          <p className="mt-4 font-semibold">- John</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
