import React, { useState } from 'react';
import logo from './logo.png';

import { 
  ShoppingCart, 
  History,
  Heart, 
  Home, 
  MapPin, 
  User, 
  Star 
} from 'lucide-react';

const importAll = (r) => {
    return r.keys().reduce((acc, next) => {
      acc[next.replace('./', '')] = r(next);
      return acc;
    }, {});
  };
  
  const saladImages = importAll(require.context('../assets/images', false, /\.(png|jpe?g|svg)$/));

const SaladData = [
  {
    id: 1,
    name: 'Tropical Paradise',
    description: 'Campuran buah tropis segar dengan potongan nanas, mangga, dan pepaya',
    price: 35000,
    image: saladImages['salad1.png'],
    category: 'Tropical',
    rating: 4.5,
    nutrients: {
      calories: 120,
      protein: 2,
      fiber: 4
    },
    ingredients: ['Nanas', 'Mangga', 'Pepaya', 'Jeruk']
  },
  {
    id: 2,
    name: 'Berry Blast',
    description: 'Salad buah beri pilihan dengan campuran strawberry, blueberry, dan raspberry',
    price: 38000,
    image: saladImages['salad2.png'],
    category: 'Berries',
    rating: 4.7,
    nutrients: {
      calories: 110,
      protein: 1.5,
      fiber: 5
    },
    ingredients: ['Strawberry', 'Blueberry', 'Raspberry', 'Blackberry']
  },
  {
    id: 3,
    name: 'Exotic Dream',
    description: 'Paduan buah eksotis dengan dragonfruit, rambutan, dan markisa',
    price: 45000,
    image: saladImages['salad3.png'],
    category: 'Tropical',
    rating: 4.7,
    nutrients: {
      calories: 130,
      protein: 2.5,
      fiber: 4.5
    },
    ingredients: ['Dragonfruit', 'Rambutan', 'Markisa', 'Jambu']
  },
  {
    id: 4,
    name: 'Super Antioxidant',
    description: 'Salad super dengan kaya antioksidan dari berbagai macam beri',
    price: 42000,
    image: saladImages['salad4.png'],
    category: 'Berries',
    rating: 4.9,
    nutrients: {
      calories: 105,
      protein: 1.7,
      fiber: 5.5
    },
    ingredients: ['Goji Berry', 'Blackberry', 'Blueberry', 'Cranberry']
  }
];

const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [activeMenu, setActiveMenu] = useState('Beranda');
  const categories = ['Semua', 'Tropical', 'Berries', 'Green'];

  const filteredSalads = activeCategory === 'Semua' 
    ? SaladData 
    : SaladData.filter(salad => salad.category === activeCategory);

  return (
    <div className="bg-white min-h-screen pb-20 p-4">
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-2">
          <img 
            src={logo} 
            alt="SaladYuk Logo" 
            className="w-10 h-10 rounded-full"
          />
          <h1 className="text-2xl font-bold text-green-600">SaladYuk</h1>
        </div>
        <div className="flex space-x-4">
          <Heart className="text-green-600" />
          <ShoppingCart className="text-green-600" />
        </div>
      </header>

      {/* Promo Banner */}
      <div className="bg-green-100 rounded-lg p-4 mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-green-800">Promo Spesial Hari Ini!</h2>
          <p className="text-green-600">Diskon 20% untuk pemesanan pertama</p>
        </div>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
          Pesan Sekarang
        </button>
      </div>

      {/* Kategori Salad */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">Kategori Salad</h3>
        <div className="flex space-x-3 overflow-x-auto">
          {categories.map((category) => (
            <button 
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full ${
                activeCategory === category 
                  ? 'bg-green-600 text-white' 
                  : 'bg-green-100 text-green-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Produk Unggulan */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Produk Unggulan</h3>
        <div className="grid grid-cols-2 gap-4">
          {filteredSalads.map((salad) => (
            <div 
              key={salad.id} 
              className="bg-white border rounded-lg p-3 shadow-sm"
            >
              <img 
                src={salad.image} 
                alt={salad.name} 
                className="w-full h-40 object-cover rounded-lg mb-2"
              />
              <div className="flex justify-between items-center mb-2">
                <div>
                  <h4 className="font-bold text-lg">{salad.name}</h4>
                  <p className="text-sm text-gray-500 line-clamp-2">
                    {salad.description}
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="text-yellow-400 w-4 h-4" />
                  <span className="text-sm">{salad.rating}</span>
                </div>
              </div>
              
              {/* Informasi Nutrisi */}
              <div className="bg-green-50 p-2 rounded-lg mb-2">
                <div className="flex justify-between text-xs">
                  <span>Kalori: {salad.nutrients.calories}</span>
                  <span>Protein: {salad.nutrients.protein}g</span>
                  <span>Serat: {salad.nutrients.fiber}g</span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="font-bold text-green-600">
                  Rp {salad.price.toLocaleString()}
                </span>
                <div className="flex space-x-2">
                  <button className="bg-green-600 text-white p-2 rounded-lg">
                    <ShoppingCart className="w-4 h-4" />
                  </button>
                  <button className="bg-green-100 p-2 rounded-lg">
                    <Heart className="w-4 h-4 text-green-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Menu Navigasi */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg">
        <div className="flex justify-around py-3">
          {['Beranda', 'Pesanan', 'Riwayat', 'Lacak', 'Profil'].map((menu) => (
            <button 
              key={menu}
              onClick={() => setActiveMenu(menu)}
              className={`flex flex-col items-center ${
                activeMenu === menu ? 'text-green-600' : 'text-gray-500'
              }`}
            >
              {menu === 'Beranda' && <Home className="w-6 h-6" />}
              {menu === 'Pesanan' && <ShoppingCart className="w-6 h-6" />}
              {menu === 'Riwayat' && <History className="w-6 h-6" />}
              {menu === 'Lacak' && <MapPin className="w-6 h-6" />}
              {menu === 'Profil' && <User className="w-6 h-6" />}
              <span className="text-xs mt-1">{menu}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default HomePage;