import React from 'react';
import { Product } from '../../types';
import { Search, SlidersHorizontal } from 'lucide-react';

interface StoreProps {
  products: Product[];
  onProductClick: (product: Product) => void;
}

const Store: React.FC<StoreProps> = ({ products, onProductClick }) => {
  const [activeCategory, setActiveCategory] = React.useState('All');
  const [searchQuery, setSearchQuery] = React.useState('');

  const categories = ['All', 'Kawat Chenille', 'Metal', 'couple'];

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header Store */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Katalog Produk</h2>
          <p className="text-slate-500">Temukan gantungan kunci favoritmu dengan berbagai pilihan material.</p>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">

          {/* Categories */}
          <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto hide-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${activeCategory === cat
                    ? 'bg-slate-900 text-white'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Cari produk..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
            <Search className="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col cursor-pointer"
              onClick={() => onProductClick(product)}
            >
              <div className="relative aspect-square overflow-hidden bg-slate-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold text-slate-900">
                  New
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <div className="text-xs font-semibold text-red-500 uppercase tracking-wide mb-1">
                  {product.category}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-red-500 transition-colors">
                  {product.name}
                </h3>
                <p className="text-slate-500 text-sm mb-4 line-clamp-2">{product.description}</p>

                <div className="mt-auto flex items-center justify-between">
                  <span className="text-lg font-bold text-slate-900">
                    Rp {product.price.toLocaleString('id-ID')}
                  </span>
                  <button className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-900 group-hover:bg-red-500 group-hover:text-white transition-colors">
                    <SlidersHorizontal className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-400 text-lg">Produk tidak ditemukan.</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default Store;