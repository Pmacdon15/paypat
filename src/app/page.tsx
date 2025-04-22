import Link from "next/link";
// import PaymentButton from "@/components/ui/payment-button"; //Commented out since it is not being used

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full justify-items-center h-screen pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      {/* <PaymentButton /> */}
      {/* <Header /> */}
      <div className="flex flex-col justify-between p-4 bg-white/20 backdrop-blur-md w-5/6 mt-8 border shadow-2xl h-4/6 text-center rounded-xl border-b border-white/10">
        <h1 className="text-2xl">
          Easily make a payment to Patrick MacDonald
        </h1>

        <div className="mb-0">
          Please checkout our{" "}
          <Link href="/terms-of-service" className="underline">Terms of Service</Link> and{" "}
          <Link href="/privacy-policy" className="underline">Privacy policy</Link>
        </div>
      </div>
    </div>
  );
}