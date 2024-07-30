import React from "react";

const PriceList = ({ setShowPricing }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-black text-white border-2 border-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl mb-4">Pricing Plans</h2>
        <div className="flex space-x-4">
          <div className="border p-4 rounded-lg">
            <h3 className="text-xl mb-2">Basic</h3>
            <p className="text-lg">$10/month</p>
          </div>
          <div className="border p-4 rounded-lg">
            <h3 className="text-xl mb-2">Standard</h3>
            <p className="text-lg">$20/month</p>
          </div>
          <div className="border p-4 rounded-lg">
            <h3 className="text-xl mb-2">Premium</h3>
            <p className="text-lg">$30/month</p>
          </div>
        </div>
        <button className="mt-4 text-white bg-pink-500 px-4 py-2 rounded" onClick={() => setShowPricing(false)}>Close</button>
      </div>
    </div>
  );
};

export default PriceList;
