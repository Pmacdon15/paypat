'use client';
import { processPayment } from "@/actions/actions";
import GooglePayButton from "@google-pay/button-react";

export default function PaymentButton({ amount, phoneNumber, customerName }: { amount: number, phoneNumber: number, customerName: string }) {
    const handlePayment = async (paymentRequest: google.payments.api.PaymentData) => {
        try {
            console.log('load payment data', paymentRequest);
            console.log("Amount: ", amount)
            console.log("Phone Number: ", phoneNumber)
            console.log("CustomerName:", customerName)
            await processPayment(paymentRequest, amount, phoneNumber, customerName)
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <GooglePayButton
            environment="TEST"
            paymentRequest={{
                apiVersion: 2,
                apiVersionMinor: 0,
                allowedPaymentMethods: [
                    {
                        type: 'CARD',
                        parameters: {
                            allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                            allowedCardNetworks: ['MASTERCARD', 'VISA'],
                        },
                        tokenizationSpecification: {
                            type: 'PAYMENT_GATEWAY',
                            parameters: {
                              gateway: 'stripe',
                                gatewayMerchantId: 'acct_1RGqU1GH7NaZN4bI',
                            },
                        },
                    },
                ],
                merchantInfo: {
                    merchantId: 'BCR2DN7T5DKIHLYG',
                    merchantName: 'paypat.ca',
                },
                transactionInfo: {
                    totalPriceStatus: 'FINAL',
                    totalPriceLabel: 'Total',
                    totalPrice: amount.toFixed(2),
                    currencyCode: 'USD',
                    countryCode: 'US',
                },
            }}
            onLoadPaymentData={(paymentRequest) => handlePayment(paymentRequest)}
        />
    );
}