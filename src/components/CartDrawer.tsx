import React from 'react';
import { CartItem, CustomerForm } from '../../types';
import { X, Trash2, Send, ShoppingBag, Minus, Plus, Package, ArrowRight, AlertCircle } from 'lucide-react';

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
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const adminPhone = "6288289806687"; // Replace with actual admin number

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();

    if (cartItems.length === 0) return;

    // Construct WhatsApp Message
    let message = `🛍️ *Pesanan Baru dari ${form.name}*\n\n`;
    message += `📦 *Detail Pesanan:*\n`;
    cartItems.forEach((item, index) => {
      message += `${index + 1}. ${item.name}\n`;
      message += `   • Warna: ${item.selectedColor}\n`;
      message += `   • Qty: ${item.quantity}pcs\n`;
      message += `   • Harga: Rp ${(item.price * item.quantity).toLocaleString('id-ID')}\n\n`;
    });

    message += `💰 *Total: Rp ${totalPrice.toLocaleString('id-ID')}*\n`;
    message += `\n━━━━━━━━━━━━━━━━\n\n`;
    message += `📍 *Informasi Pengiriman:*\n`;
    message += `• Nama: ${form.name}\n`;
    message += `• No. HP: ${form.phone}\n`;
    message += `• Alamat: ${form.address}\n`;
    if (form.notes) message += `• Catatan: ${form.notes}\n`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${adminPhone}?text=${encodedMessage}`, '_blank');
  };

  // Lock body scroll when drawer is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[70] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div className={`fixed inset-y-0 right-0 w-full sm:max-w-md md:max-w-lg bg-white shadow-2xl z-[80] transform transition-transform duration-300 ease-out flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>

        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-200 bg-gradient-to-r from-slate-50 to-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <h2 className="text-xl font-black text-slate-900">Keranjang Belanja</h2>
                <p className="text-xs text-slate-500">{totalItems} item dipilih</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 hover:bg-slate-100 rounded-full transition-all flex items-center justify-center group"
            >
              <X className="w-5 h-5 text-slate-500 group-hover:text-slate-900 group-hover:rotate-90 transition-all" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto hide-scrollbar">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center px-6 py-12 text-center">
              <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mb-6">
                <ShoppingBag className="w-12 h-12 text-slate-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Keranjang Kosong</h3>
              <p className="text-slate-500 mb-6 max-w-xs">
                Belum ada produk di keranjang. Yuk, mulai belanja sekarang!
              </p>
              <button
                onClick={onClose}
                className="px-6 py-3 bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-full font-bold hover:shadow-xl transition-all flex items-center gap-2"
              >
                Mulai Belanja
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          ) : (
            <div className="p-6 space-y-6">

              {/* Product List */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">Produk ({cartItems.length})</h3>
                  <button
                    onClick={() => cartItems.forEach((_, idx) => onRemoveItem(idx))}
                    className="text-xs text-red-500 hover:text-red-700 font-semibold transition-colors"
                  >
                    Hapus Semua
                  </button>
                </div>

                <div className="space-y-3">
                  {cartItems.map((item, index) => (
                    <div
                      key={`${item.id}-${index}`}
                      className="group bg-slate-50 hover:bg-white border border-slate-200 hover:border-slate-300 rounded-2xl p-4 transition-all hover:shadow-md"
                    >
                      <div className="flex gap-4">
                        {/* Product Image */}
                        <div className="relative flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-xl bg-white shadow-sm"
                          />
                          <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                            {item.quantity}
                          </div>
                        </div>

                        {/* Product Info */}
                        <div className="flex-1 flex flex-col justify-between min-w-0">
                          <div>
                            <h4 className="font-bold text-slate-900 text-sm sm:text-base mb-1 line-clamp-1">
                              {item.name}
                            </h4>
                            <p className="text-xs text-slate-500 mb-2">
                              <span className="inline-flex items-center gap-1">
                                <span className="w-3 h-3 rounded-full bg-slate-300 border border-slate-400"></span>
                                {item.selectedColor}
                              </span>
                            </p>
                            <p className="text-lg font-black text-slate-900">
                              Rp {(item.price * item.quantity).toLocaleString('id-ID')}
                            </p>
                          </div>

                          {/* Quantity Controls */}
                          <div className="flex items-center justify-between mt-3">
                            <div className="inline-flex items-center gap-2 bg-slate-100 rounded-full p-1">
                              <button
                                onClick={() => onUpdateQty(index, -1)}
                                className="w-8 h-8 rounded-full bg-white hover:bg-slate-900 hover:text-white flex items-center justify-center transition-all shadow-sm disabled:opacity-50"
                                disabled={item.quantity <= 1}
                              >
                                <Minus className="w-4 h-4" />
                              </button>
                              <span className="text-sm font-bold text-slate-900 w-8 text-center">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => onUpdateQty(index, 1)}
                                className="w-8 h-8 rounded-full bg-white hover:bg-slate-900 hover:text-white flex items-center justify-center transition-all shadow-sm"
                              >
                                <Plus className="w-4 h-4" />
                              </button>
                            </div>

                            <button
                              onClick={() => onRemoveItem(index)}
                              className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-all"
                              title="Hapus item"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Shipping Info Notice */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex gap-3">
                <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-semibold text-blue-900 mb-1">Informasi Pengiriman</p>
                  <p className="text-blue-700 text-xs leading-relaxed">
                    Admin akan menghubungi Anda untuk konfirmasi total ongkir berdasarkan lokasi pengiriman.
                  </p>
                </div>
              </div>

              {/* Order Form */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-4">
                  <Package className="w-5 h-5 text-slate-700" />
                  <h3 className="font-bold text-slate-900">Informasi Pengiriman</h3>
                </div>

                <form id="checkout-form" onSubmit={handleCheckout} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2">Nama Lengkap *</label>
                    <input
                      required
                      type="text"
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Contoh: Budi Santoso"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2">Nomor WhatsApp *</label>
                    <input
                      required
                      type="tel"
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="0812-3456-7890"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2">Alamat Lengkap *</label>
                    <textarea
                      required
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none resize-none transition-all"
                      rows={3}
                      value={form.address}
                      onChange={(e) => setForm({ ...form, address: e.target.value })}
                      placeholder="Jalan, No Rumah, RT/RW, Kecamatan, Kota, Kode Pos"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2">Catatan Tambahan (Opsional)</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                      value={form.notes}
                      onChange={(e) => setForm({ ...form, notes: e.target.value })}
                      placeholder="Contoh: Harap hubungi sebelum dikirim"
                    />
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        {cartItems.length > 0 && (
          <div className="border-t border-slate-200 bg-white px-6 py-5 shadow-2xl">
            {/* Price Summary */}
            <div className="bg-slate-50 rounded-xl p-4 mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-slate-600">Subtotal ({totalItems} item)</span>
                <span className="text-sm font-bold text-slate-900">
                  Rp {totalPrice.toLocaleString('id-ID')}
                </span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-slate-200">
                <span className="text-base font-bold text-slate-900">Total Pembayaran</span>
                <span className="text-2xl font-black text-red-600">
                  Rp {totalPrice.toLocaleString('id-ID')}
                </span>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              type="submit"
              form="checkout-form"
              className="w-full py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-xl font-bold text-base shadow-lg hover:shadow-green-500/30 transition-all flex items-center justify-center gap-3 group"
            >
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              Pesan via WhatsApp
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <p className="text-center text-xs text-slate-500 mt-3">
              🔒 Pesanan Anda aman dan terlindungi
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;