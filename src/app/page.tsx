import ContentContainer from "@/components/ui/containers/content-container";
import PageContainer from "@/components/ui/containers/page-container";
import PaymentForm from "@/components/ui/forms/payment-form";
import Link from "next/link";
// import PaymentButton from "@/components/ui/payment-button"; 

export default function Home() {
  return (
    <PageContainer>
      <ContentContainer>
        <h1 className="text-2xl">
          Easily make a payment to Patrick MacDonald
        </h1>
        <PaymentForm />
        <TOSPP />
      </ContentContainer>
    </PageContainer>
  );
}

function TOSPP() {
  return (
    <div className="mb-0">
      Please check out our{" "}
      <Link href="/terms-of-service" className="underline">Terms of Service</Link> and{" "}
      <Link href="/privacy-policy" className="underline">Privacy policy</Link>
    </div>
  )
}