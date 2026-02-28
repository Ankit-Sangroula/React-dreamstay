return (
  <div className="grid md:grid-cols-2 gap-6">
    {bookings.map((b) => (
      <div
        key={b._id}
        className="bg-white rounded-2xl shadow-md p-6 border hover:shadow-xl transition"
      >
        <h3 className="text-xl font-semibold text-gray-800">
          {b.destination}
        </h3>

        <p className="text-gray-500 mt-2">
          {new Date(b.checkin).toLocaleDateString()} -{" "}
          {new Date(b.checkout).toLocaleDateString()}
        </p>

        <p
          className={`mt-3 font-semibold ${
            b.status === "Cancelled"
              ? "text-red-500"
              : "text-green-600"
          }`}
        >
          {b.status}
        </p>

        <div className="flex gap-3 mt-5">
          {b.status !== "Cancelled" && (
            <button
              onClick={() => handleCancel(b._id)}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
            >
              Cancel
            </button>
          )}

          <button
            onClick={() => handleDownload(b._id)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition"
          >
            Download Invoice
          </button>
        </div>
      </div>
    ))}
  </div>
);