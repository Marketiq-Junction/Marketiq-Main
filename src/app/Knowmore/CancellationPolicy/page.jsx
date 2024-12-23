import React from "react";
import Navbar from "@/components/Navbar/Navbar"; // Import the Navbar component
import Footer from "@/components/Footer/Footer"; // Import the Footer component

const CancellationPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-grow bg-gray-100 flex flex-col items-center justify-center">
        <div className="max-w-4xl bg-white shadow-md rounded-lg p-8">
          <h1 className="text-3xl font-bold text-blue-500 mb-6">
            Cancellation Policy
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            At <strong>MarketIQ Solutions</strong>, we understand that plans may
            change, and we strive to make the cancellation process as smooth as
            possible. Below is the policy that outlines the conditions under
            which you can cancel our services or subscriptions.
          </p>

          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                1. Cancellation Request
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Cancellation requests must be submitted in writing to{" "}
                <a
                  href="mailto:marketiqsolutions@gmail.com"
                  className="text-blue-500 hover:underline"
                >
                  marketiqsolutions@gmail.com
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                2. Eligibility for Cancellation
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Service cancellations must be made before the initiation of the
                agreed-upon scope of work or delivery milestones. Cancellations
                after significant progress (e.g., over 25% of the agreed
                deliverables) may not be eligible for a refund.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                3. Cancellation Fees
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Any applicable cancellation fees or costs incurred will be
                deducted before processing refunds.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                4. Refund After Cancellation
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                If eligible for a refund, the cancellation request will be
                processed as per our Refund Policy, and refunds will typically
                be issued within 7–10 business days.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
    </div>
  );
};

export default CancellationPolicy;
