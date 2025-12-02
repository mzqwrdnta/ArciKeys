import React from 'react';
import { Product } from '../types';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, color: string, qty: number) => void;
}

const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose, onAddToCart }) => {
  const [quantity, setQuantity] = React.useState(1);
  const [selectedColor, setSelectedColor] = React.useState<string>('');

  React.useEffect(() => {
    if (product && product.colors.length > 0) {
      setSelectedColor(product.colors[0]);
    }
    setQuantity(1);
  }, [product]);

  if (!product) return null;

  const handleAddToCart = () => {
    onAddToCart(product, selectedColor, quantity);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white rounded-3xl w-full max-w-4xl shadow-2xl overflow-hidden animate-scale-up flex flex-col md:flex-row max-h-[90vh] md:max-h-[600px]">
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/50 hover:bg-white rounded-full flex items-center justify-center backdrop-blur-md transition-colors"
        >
          <X className="w-5 h-5 text-slate-600" />
        </button>

        {/* Image Section */}
        <div className="w-full md:w-1/2 bg-slate-100 flex items-center justify-center p-8">
           <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-contain max-h-[300px] md:max-h-full drop-shadow-xl"
           />
        </div>

        {/* Info Section */}
        <div className="w-full md:w-1/2 p-6 md:p-10 overflow-y-auto flex flex-col">
          <div className="mb-1">
             <span className="px-2 py-1 bg-red-100 text-red-600 text-xs font-bold rounded uppercase">
               {product.category}
             </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-2">{product.name}</h2>
          <p className="text-2xl font-bold text-slate-700 mb-6">
            Rp {product.price.toLocaleString('id-ID')}
          </p>

          <p className="text-slate-500 mb-8 leading-relaxed text-sm md:text-base">
            {product.description}
          </p>

          <div className="space-y-6 mt-auto">
            {/* Colors */}
            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-3">Pilih Warna</label>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`h-10 px-4 rounded-lg border-2 text-sm font-medium transition-all ${
                      selectedColor === color
                        ? 'border-red-500 bg-red-50 text-red-600'
                        : 'border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-3">Jumlah</label>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-slate-200 rounded-lg">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 flex items-center justify-center text-slate-600 hover:bg-slate-50 rounded-l-lg transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-10 text-center font-bold text-slate-900">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center text-slate-600 hover:bg-slate-50 rounded-r-lg transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold text-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-slate-900/20 active:scale-95"
            >
              <ShoppingBag className="w-5 h-5" />
              Masukkan Keranjang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;