import React from 'react';
import { CartItem, CustomerForm } from '../types';
import { X, Trash2, Send, ShoppingBag } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onRemoveItem: (index: number) => void;
  onUpdateQty: (index: number, delta: number) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, cartItems, onRemoveItem, onUpdateQty }) => {
  const [form, setForm] = React.useState<CustomerForm>({
    name: '',
    phone: '',
    address: '',
    notes: ''
  });

  const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const adminPhone = "6285213963005"; // Replace with actual admin number

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();

    if (cartItems.length === 0) return;

    // Construct WhatsApp Message
    let message = `Halo Admin arci, saya ingin memesan:\n\n`;
    cartItems.forEach((item, index) => {
      message += `${index + 1}. ${item.name} (${item.selectedColor}) - ${item.quantity}pcs @ Rp ${item.price.toLocaleString('id-ID')}\n`;
    });
    
    message += `\n*Total Harga: Rp ${totalPrice.toLocaleString('id-ID')}*\n`;
    message += `\n----------------\n`;
    message += `*Data Pengiriman*\n`;
    message += `Nama: ${form.name}\n`;
    message += `No. HP: ${form.phone}\n`;
    message += `Alamat: ${form.address}\n`;
    if (form.notes) message += `Catatan: ${form.notes}\n`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${adminPhone}?text=${encodedMessage}`, '_blank');
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[70] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div className={`fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-2xl z-[80] transform transition-transform duration-300 ease-out flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Header */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-white">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-slate-900" />
            <h2 className="text-lg font-bold text-slate-900">Keranjang ({cartItems.length})</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
            <X className="w-5 h-5 text-slate-500" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-50">
              <ShoppingBag className="w-16 h-16 text-slate-300" />
              <p className="text-slate-500 font-medium">Keranjang kamu masih kosong.</p>
              <button onClick={onClose} className="text-red-500 font-bold hover:underline">Belanja Sekarang</button>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Product List */}
              <div className="space-y-4">
                {cartItems.map((item, index) => (
                  <div key={`${item.id}-${index}`} className="flex gap-4 p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg bg-white" />
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm line-clamp-1">{item.name}</h4>
                        <p className="text-xs text-slate-500">Warna: {item.selectedColor}</p>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center bg-white rounded-md border border-slate-200 h-7">
                           <button 
                            onClick={() => onUpdateQty(index, -1)}
                            className="w-7 h-full flex items-center justify-center text-slate-600 hover:bg-slate-50"
                           >
                            -
                           </button>
                           <span className="w-8 text-center text-xs font-bold">{item.quantity}</span>
                           <button 
                            onClick={() => onUpdateQty(index, 1)}
                            className="w-7 h-full flex items-center justify-center text-slate-600 hover:bg-slate-50"
                           >
                            +
                           </button>
                        </div>
                        <p className="text-sm font-bold text-slate-900">
                          Rp {(item.price * item.quantity).toLocaleString('id-ID')}
                        </p>
                      </div>
                    </div>
                    <button 
                      onClick={() => onRemoveItem(index)}
                      className="text-slate-400 hover:text-red-500 transition-colors self-start p-1"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Order Form */}
              <div className="border-t border-slate-200 pt-6">
                <h3 className="font-bold text-slate-900 mb-4">Informasi Pengiriman</h3>
                <form id="checkout-form" onSubmit={handleCheckout} className="space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1">Nama Lengkap</label>
                    <input 
                      required
                      type="text" 
                      className="w-full p-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                      value={form.name}
                      onChange={(e) => setForm({...form, name: e.target.value})}
                      placeholder="Contoh: Budi Santoso"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1">Nomor WhatsApp</label>
                    <input 
                      required
                      type="tel" 
                      className="w-full p-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                      value={form.phone}
                      onChange={(e) => setForm({...form, phone: e.target.value})}
                      placeholder="0812..."
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1">Alamat Lengkap</label>
                    <textarea 
                      required
                      className="w-full p-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none resize-none"
                      rows={2}
                      value={form.address}
                      onChange={(e) => setForm({...form, address: e.target.value})}
                      placeholder="Jalan, No Rumah, Kecamatan, Kota"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1">Catatan Tambahan (Opsional)</label>
                    <input 
                      type="text" 
                      className="w-full p-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                      value={form.notes}
                      onChange={(e) => setForm({...form, notes: e.target.value})}
                    />
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        {cartItems.length > 0 && (
          <div className="p-5 border-t border-slate-100 bg-slate-50">
            <div className="flex justify-between items-center mb-4">
              <span className="text-slate-500 font-medium">Total Pembayaran</span>
              <span className="text-xl font-black text-slate-900">Rp {totalPrice.toLocaleString('id-ID')}</span>
            </div>
            <button 
              type="submit"
              form="checkout-form"
              className="w-full py-3.5 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-green-500/30 transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Pesan via WhatsApp
            </button>
            <p className="text-center text-xs text-slate-400 mt-3">Admin akan mengkonfirmasi total ongkir.</p>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;