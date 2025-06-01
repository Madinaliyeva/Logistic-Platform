import React, { useState } from 'react';

// Icons Component: Contains SVG definitions for all icons used throughout the application.
// Using SVG directly ensures crisp, scalable icons that can be easily styled with Tailwind CSS.
const Icons = {
  Search: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  ),
  Filter: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.707A1 1 0 013 7V4z" />
    </svg>
  ),
  MoreVert: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
    </svg>
  ),
  Truck: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 18V6l4-4 4 4v12a2 2 0 01-2 2H6a2 2 0 01-2-2z" />
    </svg>
  ),
  People: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
    </svg>
  ),
  Person: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  ),
  ShoppingCart: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 11-4 0v-6m4 0V9a2 2 0 10-4 0v4.01" />
    </svg>
  ),
  Logout: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
    </svg>
  ),
  Documentation: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  MapPin: () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
    </svg>
  ),
  Star: () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  )
};

// Sidebar Component: Displays the main navigation menu on the left side of the screen.
// It highlights the currently active tab and provides access to different sections of the app.
const Sidebar = ({ activeTab, setActiveTab }) => {
  // Define the menu items with their IDs, corresponding icons, and labels.
  const menuItems = [
    { id: 'tracking', icon: Icons.ShoppingCart, label: 'Tracking' },
    { id: 'vehicles', icon: Icons.Truck, label: 'Vehicles' },
    { id: 'drivers', icon: Icons.People, label: 'Drivers' },
    { id: 'customers', icon: Icons.Person, label: 'Customers' }
  ];

  return (
    <div className="w-16 h-screen bg-white shadow-lg flex flex-col items-center py-6">
      {/* Logo Section */}
      <div className="mb-8">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">S</span> {/* Simple logo text */}
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 space-y-4">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)} // Updates the active tab state in the parent component
            className={`block p-2 rounded-lg transition-colors ${
              activeTab === item.id ? 'text-blue-600 bg-blue-50' : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            <item.icon /> {/* Render the icon component dynamically */}
          </button>
        ))}
      </nav>

      {/* User and Logout Section */}
      <div className="mt-auto space-y-4">
        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
          {/* Placeholder for user avatar */}
          <img src="https://via.placeholder.com/32" alt="User" className="w-full h-full object-cover" />
        </div>
        <button className="text-gray-400 hover:text-gray-600 p-1">
          <Icons.Logout /> {/* Logout icon */}
        </button>
      </div>
    </div>
  );
};

// MapView Component: Displays a simplified map with a route and markers for start/end points.
// Includes basic zoom controls and a re-center button.
const MapView = ({ selectedOrder }) => {
  return (
    <div className="bg-yellow-100 rounded-lg h-80 relative overflow-hidden">
      {/* Simplified map background with a gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-yellow-200">
        {/* Map grid pattern for visual texture */}
        <div className="absolute inset-0 opacity-20">
          <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
            {Array.from({ length: 48 }).map((_, i) => (
              <div key={i} className="border border-yellow-300"></div>
            ))}
          </div>
        </div>
        
        {/* Route visualization using SVG path */}
        <svg className="absolute inset-0 w-full h-full">
          <path
            // The 'd' attribute defines the path of the route.
            // M: moveto, Q: quadratic Bezier curve, T: smooth quadratic Bezier curve.
            // These coordinates are illustrative and would typically come from map data.
            d="M 150 100 Q 200 150 250 120 T 350 140 Q 400 160 450 180"
            stroke="#3B82F6" // Blue color for the route
            strokeWidth="3"
            fill="none"
            strokeDasharray="5,5" // Dashed line for the route
          />
        </svg>
        
        {/* Start point marker and address label */}
        <div className="absolute top-20 left-32 bg-blue-600 rounded-full p-2">
          <Icons.MapPin className="text-white" />
        </div>
        <div className="absolute top-16 left-40 bg-white px-2 py-1 rounded text-xs shadow">
          <div className="font-medium">Mohrenstraße 37</div>
          <div className="text-gray-500">10117 Berlin</div>
        </div>
        
        {/* End point marker and address label */}
        <div className="absolute bottom-20 right-32 bg-blue-600 rounded-full p-2">
          <Icons.MapPin className="text-white" />
        </div>
        <div className="absolute bottom-16 right-40 bg-white px-2 py-1 rounded text-xs shadow">
          <div className="font-medium">Goethestraße 1</div>
          <div className="text-gray-500">10115 Berlin</div>
        </div>
      </div>
      
      {/* Map controls (Zoom in/out and re-center) */}
      <div className="absolute top-4 right-4 flex flex-col space-y-2">
        <button className="bg-white p-2 rounded shadow text-lg font-bold">+</button>
        <button className="bg-white p-2 rounded shadow text-lg font-bold">-</button>
      </div>
      
      <div className="absolute bottom-4 right-4">
        <button className="bg-white p-2 rounded shadow">
          <Icons.MapPin />
        </button>
      </div>
    </div>
  );
};

// StatusBadge Component: Displays a colored badge indicating the status of an order.
// The color changes based on the status prop.
const StatusBadge = ({ status }) => {
  // Determines the Tailwind CSS classes for background and text color based on status.
  const getStatusColor = () => {
    switch (status) {
      case 'In Transit':
        return 'bg-green-100 text-green-800';
      case 'Checking':
        return 'bg-yellow-100 text-yellow-800';
      case 'Delivered':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor()}`}>
      {status}
    </span>
  );
};

// Timeline Component: Displays a chronological list of events for an order.
// Each event has a date, status, and time.
const Timeline = ({ timeline }) => {
  return (
    <div className="space-y-3">
      {timeline.map((item, index) => (
        <div key={index} className="flex items-center space-x-3">
          <div className="flex flex-col items-center">
            {/* Timeline dot: blue if time is available, gray otherwise */}
            <div className={`w-3 h-3 rounded-full ${
              item.time !== '---' ? 'bg-blue-600' : 'bg-gray-300'
            }`}></div>
            {/* Vertical line connecting timeline dots, not shown for the last item */}
            {index < timeline.length - 1 && (
              <div className="w-0.5 h-6 bg-gray-200 mt-1"></div>
            )}
          </div>
          <div className="flex-1 flex justify-between items-center">
            <div>
              <div className="text-sm font-medium">{item.date}</div>
              <div className="text-xs text-gray-500">{item.status}</div>
            </div>
            <div className="text-xs text-gray-500">{item.time}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

// OrderCard Component: Renders a single order's summary or detailed view.
// 'isDetailed' prop controls the appearance (blue background for detailed, white for summary).
const OrderCard = ({ order, isSelected, onClick, isDetailed = false }) => {
  if (isDetailed) {
    // Detailed view for the selected order (blue background)
    return (
      <div className="bg-blue-600 text-white rounded-lg p-4 mb-4">
        <div className="flex justify-between items-center mb-4">
          <div>
            <div className="text-sm opacity-80">Order ID:</div>
            <div className="font-bold">{order.id}</div>
          </div>
          <div className="flex items-center space-x-2">
            <StatusBadge status={order.status} />
            <button className="text-white">
              <Icons.MoreVert />
            </button>
          </div>
        </div>
        <Timeline timeline={order.timeline} /> {/* Full timeline for detailed view */}
      </div>
    );
  }

  // Summary view for other orders (white background with progress bar)
  return (
    <div 
      className={`bg-white rounded-lg p-4 mb-3 cursor-pointer transition-all ${
        isSelected ? 'ring-2 ring-blue-500' : 'hover:shadow-md'
      }`}
      onClick={onClick} // Handles selection of the order
    >
      <div className="flex justify-between items-center mb-3">
        <div>
          <div className="text-sm text-gray-500">Order ID:</div>
          <div className="font-semibold">{order.id}</div>
        </div>
        <div className="flex items-center space-x-2">
          <StatusBadge status={order.status} />
          <button className="text-gray-400">
            <Icons.MoreVert />
          </button>
        </div>
      </div>
      {/* Progress bar based on order status */}
      <div className="w-full bg-gray-200 rounded-full h-1 mb-3">
        <div className={`h-1 rounded-full ${
          order.status === 'Checking' ? 'bg-yellow-500 w-1/3' : 
          order.status === 'In Transit' ? 'bg-blue-500 w-2/3' : 
          'bg-green-500 w-full'
        }`}></div>
      </div>
      <Timeline timeline={order.timeline} /> {/* Condensed timeline for summary view */}
    </div>
  );
};

// VehicleInfo Component: Displays detailed information about a vehicle.
// Includes capacity, model, brand, weight, and load volume.
const VehicleInfo = ({ vehicle, rating }) => {
  return (
    <div className="bg-white rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold">Vehicle Information</h3>
        <div className="flex items-center space-x-1">
          <Icons.Star className="text-yellow-400" /> {/* Star icon for rating */}
          <span className="text-sm font-medium">{rating}</span>
        </div>
      </div>
      
      <div className="flex items-center space-x-4 mb-4">
        <div className="bg-blue-600 rounded-lg p-4 flex-1 relative">
          <div className="text-white text-center">
            <div className="text-2xl font-bold mb-1">{vehicle.capacity.split('/')[0]}</div>
            <div className="text-xs opacity-80">CAPACITY</div>
          </div>
          {/* Simplified truck illustration SVG */}
          <div className="absolute right-2 top-2">
            <svg className="w-16 h-12 text-white opacity-50" fill="currentColor" viewBox="0 0 64 48">
              <path d="M8 32h4v8H8v-8zm40 0h4v8h-4v-8zM4 16h32v16H4V16zm36 0h16v12h-8v4h-8V16z"/>
              <circle cx="14" cy="38" r="6"/>
              <circle cx="46" cy="38" r="6"/>
            </svg>
          </div>
        </div>
      </div>
      
      {/* Vehicle details in a two-column grid */}
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <div className="text-gray-500 mb-1">MODEL</div>
          <div className="font-medium">{vehicle.model}</div>
        </div>
        <div>
          <div className="text-gray-500 mb-1">BRAND</div>
          <div className="font-medium">{vehicle.brand}</div>
        </div>
        <div>
          <div className="text-gray-500 mb-1">WEIGHT</div>
          <div className="font-medium">{vehicle.weight}</div>
        </div>
        <div>
          <div className="text-gray-500 mb-1">LOAD VOLUME</div>
          <div className="font-medium">{vehicle.loadVolume}</div>
        </div>
      </div>
    </div>
  );
};

// Main Tracking Component: Orchestrates the display of order tracking information.
// It includes a search bar, filters, order lists, map view, and detailed info tabs.
const Tracking = ({ selectedOrder, setSelectedOrder, orders }) => {
  const [searchQuery, setSearchQuery] = useState(''); // State for search input
  const [activeTab, setActiveTab] = useState('order'); // State for active tab in main info section

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Left Panel: Contains search, filters, and order cards */}
      <div className="w-96 bg-white shadow-lg overflow-y-auto">
        <div className="p-6">
          {/* Header Section */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl font-bold">Tracking Delivery</h1>
            <button className="flex items-center space-x-1 text-blue-600 text-sm">
              <Icons.Documentation />
              <span>Documentation</span>
            </button>
          </div>

          {/* Search Input with Icons */}
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Icons.Search className="absolute left-3 top-2.5 text-gray-400" />
            <button className="absolute right-3 top-2.5 text-gray-400">
              <Icons.Filter />
            </button>
          </div>

          {/* Filter Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center">
              21 Jan - 1 Feb
              <button className="ml-2 text-blue-600">×</button> {/* Close button for filter */}
            </span>
            <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm flex items-center">
              Checking
              <button className="ml-2 text-yellow-600">×</button>
            </span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm flex items-center">
              In Transit
              <button className="ml-2 text-green-600">×</button>
            </span>
          </div>

          {/* Selected Order Details (Detailed view) */}
          <OrderCard order={selectedOrder} isDetailed={true} />

          {/* Other Orders (Summary view) */}
          <div className="space-y-2">
            {orders.filter(order => order.id !== selectedOrder.id).map((order) => (
              <OrderCard
                key={order.id}
                order={order}
                isSelected={false} // Not selected, so no blue ring
                onClick={() => setSelectedOrder(order)} // Allows changing the selected order
              />
            ))}
          </div>
        </div>
      </div>

      {/* Right Panel: Contains map, status info, and detailed tabs */}
      <div className="flex-1 p-6">
        {/* Header for the right panel */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-lg font-semibold">Order ID: {selectedOrder.id}</h2>
          </div>
        </div>

        {/* Map View Component */}
        <MapView selectedOrder={selectedOrder} />

        {/* Status Information Cards */}
        <div className="grid grid-cols-4 gap-4 my-6">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <div>
              <div className="text-xs text-gray-500">Current location</div>
              <div className="text-sm font-medium">{selectedOrder.currentLocation || 'N/A'}</div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <div>
              <div className="text-xs text-gray-500">Speed</div>
              <div className="text-sm font-medium">{selectedOrder.speed || 'N/A'}</div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <div>
              <div className="text-xs text-gray-500">Kilometers left</div>
              <div className="text-sm font-medium">{selectedOrder.kilometersLeft || 'N/A'}</div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <div>
              <div className="text-xs text-gray-500">Last stop</div>
              <div className="text-sm font-medium">{selectedOrder.lastStop || 'N/A'}</div>
            </div>
          </div>
        </div>

        {/* Main Info Tabs Section */}
        <div className="bg-white rounded-lg">
          <div className="border-b">
            <div className="flex space-x-8 px-6">
              {/* Tab buttons */}
              <button 
                onClick={() => setActiveTab('order')}
                className={`py-4 border-b-2 font-medium ${
                  activeTab === 'order' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500'
                }`}
              >
                Order details
              </button>
              <button 
                onClick={() => setActiveTab('vehicle')}
                className={`py-4 border-b-2 font-medium ${
                  activeTab === 'vehicle' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500'
                }`}
              >
                Vehicle
              </button>
              <button 
                onClick={() => setActiveTab('driver')}
                className={`py-4 border-b-2 font-medium ${
                  activeTab === 'driver' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500'
                }`}
              >
                Driver Information
              </button>
              <button 
                onClick={() => setActiveTab('customer')}
                className={`py-4 border-b-2 font-medium ${
                  activeTab === 'customer' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500'
                }`}
              >
                Customer Information
              </button>
            </div>
          </div>
          <div className="p-6">
            {/* Conditional rendering based on active tab */}
            {activeTab === 'order' && selectedOrder.vehicle && (
              <VehicleInfo vehicle={selectedOrder.vehicle} rating={selectedOrder.rating} />
            )}
            {activeTab === 'vehicle' && (
              <div className="text-center py-8 text-gray-500">Vehicle information will be displayed here</div>
            )}
            {activeTab === 'driver' && (
              <div className="text-center py-8 text-gray-500">Driver information will be displayed here</div>
            )}
            {activeTab === 'customer' && (
              <div className="text-center py-8 text-gray-500">Customer information will be displayed here</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Placeholder components for other main navigation routes (Vehicles, Drivers, Customers).
// These are simple components to demonstrate routing in the main App component.
const Vehicles = () => <div className="p-6"><h1 className="text-2xl font-bold">Vehicles</h1></div>;
const Drivers = () => <div className="p-6"><h1 className="text-2xl font-bold">Drivers</h1></div>;
const Customers = () => <div className="p-6"><h1 className="text-2xl font-bold">Customers</h1></div>;

// Main App Component: The root component that manages the overall layout and routing.
// It holds the state for the active sidebar tab and the currently selected order.
const App = () => {
  // State to manage which main navigation tab is active (e.g., 'tracking', 'vehicles').
  const [activeTab, setActiveTab] = useState('tracking');
  
  // Sample order data. In a real application, this would likely come from an API or database.
  const orders = [
    {
      id: '#AD345JK758',
      status: 'In Transit',
      timeline: [
        { date: '21 Jan', status: 'Checking', time: '10:23 AM' },
        { date: '25 Jan', status: 'In Transit', time: '12:00 PM' },
        { date: '30 Jan', status: 'Delivered', time: '---' }, // '---' indicates future or pending
      ],
      currentLocation: 'Torstraße 101/7',
      speed: '60 mph',
      kilometersLeft: '24 km',
      lastStop: '2 hours ago',
      vehicle: { // Detailed vehicle info for the selected order
        model: 'Cargo Truck HD320',
        brand: 'Hyundai',
        capacity: '71% / 100%',
        weight: '7,260 kg',
        loadVolume: '372.45 in³',
      },
      rating: 4.9,
    },
    {
      id: '#FR156LK98K',
      status: 'Checking',
      timeline: [
        { date: '22 Jan', status: 'Checking', time: '11:28 AM' },
        { date: '26 Jan', status: 'In Transit', time: '---' },
        { date: '30 Jan', status: 'Delivered', time: '---' },
      ],
    },
    {
      id: '#LN236NB88R',
      status: 'Checking',
      timeline: [
        { date: '23 Jan', status: 'Checking', time: '09:28 AM' },
        { date: '27 Jan', status: 'In Transit', time: '---' },
        { date: '1 Feb', status: 'Delivered', time: '---' },
      ],
    },
  ];

  // State to manage the currently selected order for detailed display.
  // Defaults to the first order in the 'orders' array.
  const [selectedOrder, setSelectedOrder] = useState(orders[0]);

  // Function to render content based on the active sidebar tab.
  // Uses a switch statement for simple routing.
  const renderContent = () => {
    switch(activeTab) {
      case 'tracking':
        return <Tracking selectedOrder={selectedOrder} setSelectedOrder={setSelectedOrder} orders={orders} />;
      case 'vehicles':
        return <Vehicles />;
      case 'drivers':
        return <Drivers />;
      case 'customers':
        return <Customers />;
      default:
        return <Tracking selectedOrder={selectedOrder} setSelectedOrder={setSelectedOrder} orders={orders} />;
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar Component */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      {/* Main content area, takes up the remaining space */}
      <div className="flex-1">
        {renderContent()} {/* Renders the content based on the active tab */}
      </div>
    </div>
  );
};

export default App; // Export the main App component
