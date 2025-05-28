import { useEffect, useState } from "react";

export interface PaymentProduct {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface PaymentInfo {
  id: string;
  date: string;
  products: PaymentProduct[];
  amount: number;
  paymentMethod: "stripe" | "cash";
  status: "pending" | "completed" | "failed";
}

const OrderHistory = () => {
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo[]>([]);

  useEffect(() => {
    const data = localStorage.getItem("paymentInfo");
    if (data) {
      try {
        const parsedData = JSON.parse(data);
        const normalizedData = Array.isArray(parsedData)
          ? parsedData
          : [parsedData];
        setPaymentInfo(normalizedData);
      } catch (error) {
        console.error("Failed to parse paymentInfo:", error);
      }
    }
  }, []);

  return (
    <div className="flex justify-center bg-gray-100 p-4 my-6">
      <div className="w-full max-w-6xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Order History</h2>

        {paymentInfo.length === 0 ? (
          <p className="text-center text-gray-500">
            Your order history is empty.
          </p>
        ) : (
          <table className="w-full bg-white shadow-md rounded-lg border border-gray-200">
            <thead>
              <tr className="border-b bg-teal-100">
                <th className="px-6 py-4 text-left text-gray-600">
                  Transaction ID
                </th>
                <th className="px-6 py-4 text-left text-gray-600">Date</th>
                <th className="px-6 py-4 text-left text-gray-600">Items</th>
                <th className="px-6 py-4 text-left text-gray-600">Amount</th>
                <th className="px-6 py-4 text-left text-gray-600">
                  Payment Method
                </th>
                <th className="px-6 py-4 text-left text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody>
              {paymentInfo.map((payment) => (
                <tr key={payment.id} className="border-b">
                  <td className="px-6 py-4 text-[12px] font-medium text-gray-900 whitespace-nowrap">
                    {payment.id}
                  </td>
                  <td className="px-6 py-4 text-[12px] font-medium text-gray-900 whitespace-nowrap">
                    {new Date(payment.date).toLocaleString()}
                  </td>
                  <td className="px-6 py-4 text-[12px] font-medium text-gray-900 whitespace-nowrap">
                    {payment.products.map((p) => p.name).join(", ")}
                  </td>
                  <td className="px-6 py-4 text-[12px] font-medium text-gray-900 whitespace-nowrap">
                    ${payment.amount}
                  </td>
                  <td className="px-6 py-4 text-[12px] font-medium text-gray-900 whitespace-nowrap">
                    {payment.paymentMethod}
                  </td>
                  <td className="px-6 py-4 capitalize text-[12px] font-medium text-gray-900 whitespace-nowrap">
                    {payment.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default OrderHistory;
