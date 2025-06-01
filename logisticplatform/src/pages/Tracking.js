import React from 'react';

const Tracking = ({ selectedOrder, setSelectedOrder, orders }) => {
  return (
    <div className="flex h-full">
      {/* Left Panel */}
      <div className="w-96 bg-white rounded-xl p-4 shadow-md overflow-y-auto">
        <h2 className="text-lg font-semibold mb-4">Tracking Delivery</h2>

        {/* Filters */}
        <div className="flex gap-2 mb-4">
          <input type="text" placeholder="Search" className="w-full p-2 border rounded" />
          <button className="p-2 bg-gray-200 rounded">⚙️</button>
        </div>

        {/* Orders List */}
        {orders.map((order) => (
          <div
            key={order.id}
            onClick={() => setSelectedOrder(order)}
            className={`p-4 rounded-lg mb-4 cursor-pointer border ${
              selectedOrder.id === order.id ? 'bg-blue-600 text-white' : 'bg-gray-50'
            }`}
          >
            <div className="flex justify-between mb-2">
              <span className="font-bold">Order ID: {order.id}</span>
              <span className="text-sm">{order.status}</span>
            </div>
            <div>
              {order.timeline.map((item, index) => (
                <div key={index} className="flex justify-between text-sm">
                  <span>{item.date}</span>
                  <span>{item.status}</span>
                  <span>{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Right Panel */}
      <div className="flex-1 ml-6 bg-white rounded-xl p-6 shadow-md overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">Order ID: {selectedOrder.id}</h2>

        {/* Map Placeholder */}
        <div className="h-64 w-full bg-gray-200 mb-4 rounded-lg flex items-center justify-center">
          <span>Map showing route from {selectedOrder?.route?.start?.name} to {selectedOrder?.route?.end?.name}</span>
        </div>

        {/* Route Details */}
        <div className="grid grid-cols-4 gap-4 text-sm text-gray-600 mb-6">
          <div>
            <p className="font-semibold">Current location</p>
            <p>{selectedOrder.currentLocation}</p>
          </div>
          <div>
            <p className="font-semibold">Speed</p>
            <p>{selectedOrder.speed}</p>
          </div>
          <div>
            <p className="font-semibold">Kilometers left</p>
            <p>{selectedOrder.kilometersLeft}</p>
          </div>
          <div>
            <p className="font-semibold">Last stop</p>
            <p>{selectedOrder.lastStop}</p>
          </div>
        </div>

        {/* Main Info Tabs */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Vehicle Information</h3>
          <div className="flex items-center gap-6">
            <div className="w-40 h-24 bg-gray-100 flex items-center justify-center rounded">
              <span>Truck Image</span>
            </div>
            <div>
              <p className="text-sm text-gray-600">Brand: {selectedOrder.vehicle.brand}</p>
              <p className="text-sm text-gray-600">Model: {selectedOrder.vehicle.model}</p>
              <p className="text-sm text-gray-600">Capacity: {selectedOrder.vehicle.capacity}</p>
              <p className="text-sm text-gray-600">Weight: {selectedOrder.vehicle.weight}</p>
              <p className="text-sm text-gray-600">Volume: {selectedOrder.vehicle.loadVolume}</p>
              <p className="text-sm text-yellow-600">⭐ {selectedOrder.rating}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracking;
