'use server';

import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET || "");

export async function processPayment(
    paymentRequest: google.payments.api.PaymentData,
    amount: number,
    phoneNumber: number,
    customerName: string
) {
    console.log('load payment data', paymentRequest);
    console.log("Amount: ", amount);
    console.log("Phone number: ", phoneNumber);
    console.log("CustomerName:", customerName);

    try {
        // Step 1: Create a Payment Method using the Google Pay token
        const paymentMethod = await stripe.paymentMethods.create({
            type: 'card',
            card: {
                token: paymentRequest.paymentMethodData.tokenizationData.token,
            },
            billing_details: {
                name: customerName,
                phone: phoneNumber.toString(),
            },
        });

        // Step 2: Create and confirm a Payment Intent using the Payment Method
        const paymentIntent = await stripe.paymentIntents.create({
            amount: Math.round(amount * 100), // Convert to cents
            currency: 'usd',
            payment_method: paymentMethod.id,
            confirm: true,
        });

        console.log("PaymentIntent created: ", paymentIntent.id);
        return { success: true, paymentIntent };
    } catch (error) {
        console.error("Stripe error: ", error);
        return { success: false, error: error };
    }
}
