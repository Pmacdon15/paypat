export default function PaymentForm() {
  return (
    <div className="flex flex-col p-4 bg-black/50 backdrop-blur-md rounded-xl gap-4 border border-white/10 shadow-2xl">
      <h1 className="text-lg text-white">Payment Form</h1>
      <input
        name="amount"
        type="number"
        placeholder="Amount to pay"
        className="border p-2 bg-white/20 text-white"
        required
      />
      <input
        name="invoice"
        type="number"
        placeholder="Invoice number(not required)"
        className="border p-2 bg-white/20 text-white"
        required
      />
      <button className="border rounded-sm p-1 bg-white/20 text-white">
        Confirm Payment Amount
      </button>
    </div>
  );
}
