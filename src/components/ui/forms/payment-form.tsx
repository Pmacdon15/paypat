'use client'

import { useState, useRef } from 'react'
import PaymentButton from '../payment-button';

export default function PaymentForm() {
  const [showPaymentButton, setShowPaymentButton] = useState(false);
  const [amount, setAmount] = useState(0);
  const [invoice, setInvoice] = useState(0);
  const [customerName, setCustomerName] = useState("");
  const amountRef = useRef<HTMLInputElement>(null);
  const invoiceRef = useRef<HTMLInputElement>(null);
  const customerNameRef = useRef<HTMLInputElement>(null);

  const handleConfirmPayment = () => {
    if (amountRef.current?.value && customerNameRef.current?.value) {
      setAmount(parseFloat(amountRef.current.value));
      setInvoice(parseFloat(invoiceRef.current?.value || "0"));
      setCustomerName(customerNameRef.current.value);
      setShowPaymentButton(true);
    } else {
      setShowPaymentButton(false); 
    }
  };

  return (
    <div className="flex flex-col p-4 bg-black/50 backdrop-blur-md rounded-xl gap-4 border w-full md:w-4/6 border-white/10 shadow-2xl">
      <h1 className="text-lg text-white">Payment Form</h1>
      <input
        name="customer-name"
        type="text"
        placeholder="Customer Name"
        className="border p-2 bg-white/20 text-white rounded-sm"
        required
        ref={customerNameRef}
      />
      <input
        name="amount"
        type="number"
        placeholder="Amount to pay"
        className="border p-2 bg-white/20 text-white rounded-sm"
        required
        ref={amountRef}
      />
      <input
        name="invoice"
        type="number"
        placeholder="Invoice number(not required)"
        className="border p-2 bg-white/20 text-white rounded-sm"
        ref={invoiceRef}
      />
      <button
        className="border rounded-sm p-1 bg-white/20 text-white"
        onClick={handleConfirmPayment}
      >
        Confirm Payment Amount
      </button>
      {showPaymentButton && (
        <PaymentButton
          amount={amount}
          invoice={invoice}
          customerName={customerName}
        />
      )}
    </div>
  );
}