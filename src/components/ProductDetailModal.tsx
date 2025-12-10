import React, { useState, useEffect } from 'react';
import { Product } from '../../types';
import { X, Minus, Plus, ShoppingCart, ArrowRight, Check, Package, Shield, Sparkles, Star } from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, selectedColor: string, quantity: number) => void;
}

const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose, onAddToCart }) => {
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [isAddedAnimation, setIsAddedAnimation] = useState(false);

  useEffect(() => {
    if (product) {
      setSelectedColor(product.colors[0] || '');
      setQuantity(1);
      setIsAddedAnimation(false);
      // Lock body scroll when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [product]);

  if (!product) return null;

  const handleAddToCart = () => {
    if (!selectedColor) return;
    onAddToCart(product, selectedColor, quantity);
    setIsAddedAnimation(true);
    setTimeout(() => {
      setIsAddedAnimation(false);
      onClose();
    }, 1200);
  };

  const totalPrice = product.price * quantity;

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-md z-[60] flex items-center justify-center p-3 md:p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl md:rounded-3xl max-w-5xl w-full max-h-[90vh] md:max-h-[95vh] overflow-hidden shadow-2xl animate-scale-up relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 md:top-5 md:right-5 z-20 w-10 h-10 md:w-12 md:h-12 bg-white/95 hover:bg-white backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl transition-all hover:scale-110 group border border-slate-200"
          aria-label="Close"
        >
          <X className="w-5 h-5 md:w-6 md:h-6 text-slate-700 group-hover:text-slate-900 group-hover:rotate-90 transition-transform duration-300" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 max-h-[96vh] md:max-h-[95vh]">

          {/* Left Side - Image */}
          <div className="relative bg-gradient-to-br from-slate-50 to-slate-100 lg:sticky lg:top-0 lg:h-[95vh] flex items-center justify-center p-3 md:p-8 lg:p-12">
            <div className="relative w-full aspect-square max-w-[280px] md:max-w-md">
              {/* Decorative Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-100 via-orange-50 to-transparent rounded-3xl blur-3xl opacity-80 animate-pulse-slow"></div>

              {/* Product Image */}
              <div className="relative z-10 w-full h-full bg-white rounded-2xl shadow-2xl overflow-hidden group">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Badge - Best Seller */}
              <div className="absolute top-3 left-3 md:top-4 md:left-4 z-20 bg-gradient-to-r from-red-500 to-red-600 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-bold shadow-xl flex items-center gap-2 animate-bounce-slow">
                <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
                Best Seller
              </div>


              {/* Rating Display */}
              <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 z-20 bg-white/95 backdrop-blur-sm px-3 md:px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 fill-yellow-400" />
                  <Star className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 fill-yellow-400" />
                  <Star className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 fill-yellow-400" />
                  <Star className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 fill-yellow-400" />
                  <Star className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 fill-yellow-400" />
                </div>
                <span className="text-xs md:text-sm font-bold text-slate-900">5.0</span>
              </div>
            </div>
          </div>

          {/* Right Side - Details */}
          <div className="relative flex flex-col bg-white h-[65vh] lg:h-[95vh]">
            {/* Scrollable Content Area */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden hide-scrollbar" style={{ WebkitOverflowScrolling: 'touch' }}>
              <div className="p-5 md:p-8 lg:p-10 pb-40 md:pb-44 pointer-events-auto">

                {/* Category Badge */}
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="px-3 py-1.5 bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 text-red-600 text-xs font-bold uppercase tracking-wide rounded-full">
                    {product.category}
                  </span>
                </div>

                {/* Product Title */}
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 mb-3 leading-tight">
                  {product.name}
                </h2>

                {/* Price */}
                <div className="mb-5">
                  <p className="text-xs md:text-sm text-slate-500 mb-1.5">Harga Satuan</p>
                  <div className="flex items-baseline gap-2 md:gap-3">
                    <span className="text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                      Rp {product.price.toLocaleString('id-ID')}
                    </span>
                    <span className="text-base md:text-lg text-slate-400">/pcs</span>
                  </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent mb-5"></div>

                {/* Color Selection */}
                <div className="mb-5">
                  <h3 className="text-xs md:text-sm font-bold text-slate-900 uppercase tracking-wide mb-2.5">
                    Pilih Warna {selectedColor && <span className="text-red-500 normal-case">» {selectedColor}</span>}
                  </h3>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-4 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-bold transition-all border-2 ${selectedColor === color
                          ? 'bg-slate-900 text-white border-slate-900 shadow-lg scale-105'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400 hover:scale-105 hover:shadow-md'
                          }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity Selector */}
                <div className="mb-5">
                  <h3 className="text-xs md:text-sm font-bold text-slate-900 uppercase tracking-wide mb-2.5">Jumlah</h3>
                  <div className="inline-flex items-center gap-3 md:gap-4 bg-slate-100 rounded-full p-1.5 md:p-2 border border-slate-200">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white hover:bg-slate-900 hover:text-white flex items-center justify-center transition-all shadow-sm disabled:opacity-50 disabled:cursor-not-allowed border border-slate-200"
                      disabled={quantity <= 1}
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="text-lg md:text-xl font-black text-slate-900 w-10 md:w-12 text-center">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white hover:bg-slate-900 hover:text-white flex items-center justify-center transition-all shadow-sm border border-slate-200"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent mb-5"></div>

                {/* Description */}
                <div className="mb-5">
                  <h3 className="text-xs md:text-sm font-bold text-slate-900 uppercase tracking-wide mb-2.5 flex items-center gap-2">
                    <Package className="w-4 h-4 text-red-500" />
                    Deskripsi Produk
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    {product.description}
                  </p>
                </div>

                {/* Features */}
                <div className="grid grid-cols-3 gap-2 md:gap-3 mb-5">
                  <div className="flex flex-col items-center text-center p-3 md:p-4 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border border-slate-200 hover:shadow-md transition-all">
                    <Package className="w-5 h-5 md:w-6 md:h-6 text-red-500 mb-1.5 md:mb-2" />
                    <p className="text-[10px] md:text-xs font-bold text-slate-700">Handmade</p>
                  </div>
                  <div className="flex flex-col items-center text-center p-3 md:p-4 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border border-slate-200 hover:shadow-md transition-all">
                    <Shield className="w-5 h-5 md:w-6 md:h-6 text-red-500 mb-1.5 md:mb-2" />
                    <p className="text-[10px] md:text-xs font-bold text-slate-700">Premium</p>
                  </div>
                  <div className="flex flex-col items-center text-center p-3 md:p-4 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border border-slate-200 hover:shadow-md transition-all">
                    <Check className="w-5 h-5 md:w-6 md:h-6 text-red-500 mb-1.5 md:mb-2" />
                    <p className="text-[10px] md:text-xs font-bold text-slate-700">Original</p>
                  </div>
                </div>

                {/* Color Selection */}
                <div className="mb-5">
                  <h3 className="text-xs md:text-sm font-bold text-slate-900 uppercase tracking-wide mb-2.5">
                    Pilih Warna {selectedColor && <span className="text-red-500 normal-case">» {selectedColor}</span>}
                  </h3>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-4 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-bold transition-all border-2 ${selectedColor === color
                          ? 'bg-slate-900 text-white border-slate-900 shadow-lg scale-105'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400 hover:scale-105 hover:shadow-md'
                          }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity Selector */}
                <div className="mb-6">
                  <h3 className="text-xs md:text-sm font-bold text-slate-900 uppercase tracking-wide mb-2.5">Jumlah</h3>
                  <div className="inline-flex items-center gap-3 md:gap-4 bg-slate-100 rounded-full p-1.5 md:p-2 border border-slate-200">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white hover:bg-slate-900 hover:text-white flex items-center justify-center transition-all shadow-sm disabled:opacity-50 disabled:cursor-not-allowed border border-slate-200"
                      disabled={quantity <= 1}
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="text-lg md:text-xl font-black text-slate-900 w-10 md:w-12 text-center">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white hover:bg-slate-900 hover:text-white flex items-center justify-center transition-all shadow-sm border border-slate-200"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Fixed Bottom Bar - Total Price & Add to Cart Button */}
            <div className="fixed bottom-0 left-0 right-0 lg:absolute bg-white border-t-2 border-slate-200 p-4 md:p-6 lg:p-8 shadow-2xl z-50 lg:z-auto">
              {/* Total Price */}
              <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-xl p-3 md:p-4 mb-3 md:mb-4 border border-slate-200">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xs text-slate-500 mb-0.5">Total Pembayaran</p>
                    <span className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900">
                      Rp {totalPrice.toLocaleString('id-ID')}
                    </span>
                  </div>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                disabled={!selectedColor || isAddedAnimation}
                className={`w-full py-3.5 md:py-4 lg:py-5 rounded-full font-bold text-sm md:text-base lg:text-lg shadow-2xl transition-all flex items-center justify-center gap-2 md:gap-3 ${isAddedAnimation
                  ? 'bg-gradient-to-r from-green-500 to-green-600 text-white scale-105'
                  : 'bg-gradient-to-r from-red-600 via-red-500 to-orange-500 hover:from-red-700 hover:via-red-600 hover:to-orange-600 text-white hover:shadow-red-500/30 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100'
                  }`}
              >
                {isAddedAnimation ? (
                  <>
                    <Check className="w-5 h-5 md:w-6 md:h-6 animate-bounce" />
                    <span>Berhasil Ditambahkan!</span>
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-5 h-5 md:w-6 md:h-6" />
                    <span>Tambah ke Keranjang</span>
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;
