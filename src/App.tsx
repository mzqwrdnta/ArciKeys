import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Store from './components/Store';
import ProductDetailModal from './components/ProductDetailModal';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import { Product, CartItem, PageView, Feedback } from '../types';
import { ArrowRight, Truck, ShieldCheck, Star, Quote, Instagram, Award, MessageSquare, Send } from 'lucide-react';
import { Analytics } from "@vercel/analytics/react"



// Intro Component - Elegant Fade
const IntroScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // Sequence:
    // 0s: Mount
    // 2.5s: Start Exit (Fade Out)
    // 3.5s: Unmount

    const exitTimer = setTimeout(() => {
      setExiting(true);
    }, 2500);

    const unmountTimer = setTimeout(() => {
      onComplete();
    }, 3500);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(unmountTimer);
    };
  }, [onComplete]);

  return (


    <div className={`intro-overlay ${exiting ? 'exit' : ''}`}>
      <div className="intro-content text-center">

        {/* Animated Logo Container */}
        <div className="relative mb-6">

          <div className="w-24 h-24 rounded-2xl flex items-center justify-center shadow-2xl animate-scale-up z-10 relative overflow-hidden bg-white">
            <img src="/asset/logo.png" alt="ArciKeys Logo" className="w-full h-full object-cover" />
          </div>
          {/* Decorative blurred glow */}

        </div>

        {/* Text Reveal */}
        <div className="overflow-hidden mb-2">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter animate-fade-in delay-100 shimmer-text">
            ArciKeys.
          </h1>
        </div>

        <div className="overflow-hidden">
          <p className="text-slate-400 text-xs uppercase tracking-[0.4em] font-medium animate-fade-in delay-300">
            Premium Carry Goods
          </p>
        </div>

        {/* Loading Line */}
        <div className="mt-8 w-12 h-0.5 bg-slate-100 rounded-full overflow-hidden">
          <div className="h-full bg-rose-500 w-full animate-[slideX_1.5s_ease-in-out_infinite]"></div>
        </div>
      </div>
    </div>
  );
};

// Mock Data
const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'KB-1',
    price: 7000,
    description: 'Tambahkan sentuhan kelembutan dan warna-warni yang menggemaskan pada kunci, tas, atau dompet Anda dengan kreasi handmade yang unik ini!. Dibuat dengan teliti menggunakan material Kawat Chenille berkualitas, aksesori ini memiliki tekstur yang lembut dan berbulu. Desainnya yang fluffy dan detail-detail melengkung yang menjuntai memberikan tampilan yang eye-catching dan menawan.',
    image: '/asset/kawat/KB1.jpg',
    category: 'Kawat Chenille',
    colors: ['Coklat', 'Hitam', 'Tan']
  },
  {
    id: 2,
    name: 'KB-7',
    price: 5000,
    description: 'Hadirkan sentuhan lucu dan menggemaskan pada kunci, tas, atau pouch Anda dengan gantungan kunci ubur-ubur handmade yang unik ini!. Dibuat dengan teliti menggunakan Kawat Chenille  berkualitas, gantungan kunci ini memiliki tekstur yang lembut, empuk, dan tampilan yang sangat menarik. Desain ubur-ubur yang imut dengan tentakel meliuk-liuk menjadikannya aksesori yang sempurna untuk segala usia..',
    image: '/asset/kawat/bulu5.jpg',
    category: 'Kawat Chenille',
    colors: ['Biru', 'Pink']
  },
  {
    id: 3,
    name: 'KB-3',
    price: 5000,
    description: 'Tambahkan sentuhan kelembutan dan warna-warni yang menggemaskan pada kunci, tas, atau dompet Anda dengan kreasi handmade yang unik ini!. Dibuat dengan teliti menggunakan material Kawat Chenille berkualitas, aksesori ini memiliki tekstur yang lembut dan berbulu. Desainnya yang fluffy dan detail-detail melengkung yang menjuntai memberikan tampilan yang eye-catching dan menawan.',
    image: '/asset/galary2.jpg',
    category: 'Kawat Chenille',
    colors: ['Hitam Matte', 'Silver', 'Army Green']
  },
  {
    id: 4,
    name: 'KB-6',
    price: 3000,
   description: 'Tambahkan sentuhan kelembutan dan warna-warni yang menggemaskan pada kunci, tas, atau dompet Anda dengan kreasi handmade yang unik ini!. Dibuat dengan teliti menggunakan material Kawat Chenille berkualitas, aksesori ini memiliki tekstur yang lembut dan berbulu. Desainnya yang fluffy dan detail-detail melengkung yang menjuntai memberikan tampilan yang eye-catching dan menawan.',
    image: '/asset/kawat/KB6.jpg',
    category: 'Kawat Chenille',
    colors: ['Pink', 'Biru']
  },
  {
    id: 5,
    name: 'Type A',
    price: 6000,
    description: 'Gantungan kunci tunggal dengan gaya dangle yang berani dan stylish. Rangkaian manik-manik padat memberikan kesan mewah yang terpusat.',
    image: '/asset/metal/TipeA.jpg',
    category: 'Metal',
    colors: ['Original' ]
  },
  {
    id: 6,
    name: 'Type G',
    price: 7000,
   description: 'Gantungan kunci tunggal dengan gaya dangle yang berani dan stylish. Rangkaian manik-manik padat memberikan kesan mewah yang terpusat.',
    image: '/asset/metal/TipeG.jpg',
    category: 'Metal',
    colors: ['Original' ]
  },
  {
    id: 7,
    name: 'Type H',
    price: 9000,
    description: 'Gantungan kunci tunggal dengan gaya dangle yang berani dan stylish. Rangkaian manik-manik padat memberikan kesan mewah yang terpusat.',
    image: '/asset/metal/TipeH.jpg',
    category: 'Metal',
    colors: ['Original']
  },
  {
    id: 8,
    name: 'Type I',
    price: 6000,
   description: 'Gantungan kunci tunggal dengan gaya dangle yang berani dan stylish. Rangkaian manik-manik padat memberikan kesan mewah yang terpusat.',
    image: '/asset/metal/TipeI.jpg',
    category: 'Metal',
    colors: ['Original']
  },

    {
    id: 9,
    name: 'Type J',
    price: 6000,
   description: 'Gantungan kunci tunggal dengan gaya dangle yang berani dan stylish. Rangkaian manik-manik padat memberikan kesan mewah yang terpusat.',
    image: '/asset/metal/TipeJ.jpg',
    category: 'Metal',
    colors: ['Original']
  },

    {
    id: 10,
    name: 'Type K',
    price: 7000,
    description: 'Gantungan kunci tunggal dengan gaya dangle yang berani dan stylish. Rangkaian manik-manik padat memberikan kesan mewah yang terpusat.',
    image: '/asset/metal/TipeK.jpg',
    category: 'Metal',
    colors: ['Original']
  },

      {
    id: 11,
    name: 'Type L',
    price: 15000,
    description: 'Gantungan kunci set pasangan dan temanyang dirancang untuk berbagi. Kedua bagian dirangkai dengan beads yang unik dan dihubungkan oleh rantai metal dengan charm hati sebagai simbol ikatan.',
    image: '/asset/couple/tipeL.jpg',
    category: 'couple',
    colors: ['Original']
  },

  {
    id: 12,
    name: 'Type M',
    price: 17000,
       description: 'Gantungan kunci set pasangan dan temanyang dirancang untuk berbagi. Kedua bagian dirangkai dengan beads yang unik dan dihubungkan oleh rantai metal dengan charm hati sebagai simbol ikatan.',
    image: '/asset/couple/tipem.jpg',
    category: 'couple',
    colors: ['Original']
  },

    {
    id: 13,
    name: 'Type E',
    price: 15000,
    description: 'Gantungan kunci set pasangan dan temanyang dirancang untuk berbagi. Kedua bagian dirangkai dengan beads yang unik dan dihubungkan oleh rantai metal dengan charm hati sebagai simbol ikatan.',
    image: '/asset/couple/tipeE.jpg',
    category: 'couple',
    colors: ['Original']
  },

      {
    id: 14,
    name: 'KB 2',
    price: 5000,
    description: 'Tambahkan sentuhan kelembutan dan warna-warni yang menggemaskan pada kunci, tas, atau dompet Anda dengan kreasi handmade yang unik ini!. Dibuat dengan teliti menggunakan material Kawat Chenille berkualitas, aksesori ini memiliki tekstur yang lembut dan berbulu. Desainnya yang fluffy dan detail-detail melengkung yang menjuntai memberikan tampilan yang eye-catching dan menawan.',
    image: '/asset/kawat/KB2.jpg',
    category: 'Kawat Chenille',
    colors: ['Biru', 'Kuning', 'Pink']
  },

  {
    id: 15,
    name: 'KB 4',
    price: 5000,
   description: 'Tambahkan sentuhan kelembutan dan warna-warni yang menggemaskan pada kunci, tas, atau dompet Anda dengan kreasi handmade yang unik ini!. Dibuat dengan teliti menggunakan material Kawat Chenille berkualitas, aksesori ini memiliki tekstur yang lembut dan berbulu. Desainnya yang fluffy dan detail-detail melengkung yang menjuntai memberikan tampilan yang eye-catching dan menawan.',
    image: '/asset/kawat/KB4.jpg',
    category: 'Kawat Chenille',
    colors: ['Original']
  },

    {
    id: 16,
    name: 'KB 5',
    price: 6000,
  description: 'Tambahkan sentuhan kelembutan dan warna-warni yang menggemaskan pada kunci, tas, atau dompet Anda dengan kreasi handmade yang unik ini!. Dibuat dengan teliti menggunakan material Kawat Chenille berkualitas, aksesori ini memiliki tekstur yang lembut dan berbulu. Desainnya yang fluffy dan detail-detail melengkung yang menjuntai memberikan tampilan yang eye-catching dan menawan.',
    image: '/asset/kawat/KB5.jpg',
    category: 'Kawat Chenille',
    colors: ['Original']
  },

    {
    id: 17,
    name: 'KB 5 White',
    price: 6000,
  description: 'Tambahkan sentuhan kelembutan dan warna-warni yang menggemaskan pada kunci, tas, atau dompet Anda dengan kreasi handmade yang unik ini!. Dibuat dengan teliti menggunakan material Kawat Chenille berkualitas, aksesori ini memiliki tekstur yang lembut dan berbulu. Desainnya yang fluffy dan detail-detail melengkung yang menjuntai memberikan tampilan yang eye-catching dan menawan.',
    image: '/asset/kawat/KB51.jpg',
    category: 'Kawat Chenille',
    colors: ['Original']
  },
];

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageView>('HOME');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Feedback State with LocalStorage initialization
  const [feedbacks, setFeedbacks] = useState<Feedback[]>(() => {
    const saved = localStorage.getItem('phlox_feedbacks');
    return saved ? JSON.parse(saved) : [
      { id: 1, name: "Andi P.", message: "Websitenya keren banget! Suka sama desainnya.", date: "10 Mar 2024" },
      { id: 2, name: "Siska L.", message: "Produknya original, pengiriman cepat.", date: "11 Mar 2024" },
      { id: 3, name: "Budi Santoso", message: "Fitur custom-nya sangat membantu.", date: "12 Mar 2024" }
    ];
  });
  const [feedbackForm, setFeedbackForm] = useState({ name: '', message: '' });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  // Save feedbacks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('phlox_feedbacks', JSON.stringify(feedbacks));
  }, [feedbacks]);

  const addToCart = (product: Product, selectedColor: string, quantity: number) => {
    setCart(prev => {
      const existingItemIndex = prev.findIndex(
        item => item.id === product.id && item.selectedColor === selectedColor
      );

      if (existingItemIndex >= 0) {
        const newCart = [...prev];
        newCart[existingItemIndex].quantity += quantity;
        return newCart;
      } else {
        return [...prev, { ...product, selectedColor, quantity }];
      }
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (index: number) => {
    setCart(prev => prev.filter((_, i) => i !== index));
  };

  const updateCartQty = (index: number, delta: number) => {
    setCart(prev => {
      const newCart = [...prev];
      const item = newCart[index];
      const newQty = item.quantity + delta;

      if (newQty <= 0) {
        return prev.filter((_, i) => i !== index);
      }

      item.quantity = newQty;
      return newCart;
    });
  };

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedbackForm.name || !feedbackForm.message) return;

    const newFeedback: Feedback = {
      id: Date.now(),
      name: feedbackForm.name,
      message: feedbackForm.message,
      date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })
    };

    setFeedbacks([newFeedback, ...feedbacks]);
    setFeedbackForm({ name: '', message: '' });
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased">
      <Navbar
        cartCount={cartCount}
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {currentPage === 'HOME' && (
        <div className="animate-fade-in">
          <Hero onShopNow={() => setCurrentPage('STORE')} />

          {/* Brands Section */}
          <section className="py-10 border-b border-slate-100 bg-white">
            <div className="max-w-7xl mx-auto px-6">
              <p className="text-center text-xs font-bold text-slate-400 mb-6 uppercase tracking-widest">Featured In</p>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 hover:opacity-100 transition-all duration-500">
                <span className="text-xl md:text-2xl font-black text-slate-900 tracking-tighter cursor-default">SMALL</span>
                <span className="text-xl md:text-2xl font-black text-slate-900 tracking-tighter cursor-default">SLEEK</span>
                <span className="text-xl md:text-2xl font-black text-slate-900 tracking-tighter cursor-default">ABSTRACT</span>
                <span className="text-xl md:text-2xl font-black text-slate-900 tracking-tighter cursor-default">MODERN</span>
                <span className="text-xl md:text-2xl font-black text-slate-900 tracking-tighter cursor-default">ICONIC</span>
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform text-red-500">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-slate-900">Premium Quality</h4>
                  <p className="text-slate-500 leading-relaxed">Material terbaik yang dipilih khusus untuk daya tahan dan estetika maksimal.</p>
                </div>
                <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform text-red-500">
                    <Award className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-slate-900">Exclusive Design</h4>
                  <p className="text-slate-500 leading-relaxed">Desain original yang tidak pasaran, dibuat oleh desainer berpengalaman.</p>
                </div>
                <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform text-red-500">
                    <Truck className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-slate-900">Fast Shipping</h4>
                  <p className="text-slate-500 leading-relaxed">Pengiriman cepat dan aman ke seluruh wilayah Indonesia dengan garansi.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Popular Categories */}
          <section className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                <div className="text-center md:text-left w-full md:w-auto">
                  <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-2">Popular Categories</h2>
                  <p className="text-slate-500">Pilih kategori yang sesuai dengan gaya personalmu.</p>
                </div>
                <button
                  onClick={() => setCurrentPage('STORE')}
                  className="hidden md:flex items-center gap-2 text-red-600 font-bold hover:gap-3 transition-all"
                >
                  Lihat Semua <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div
                  onClick={() => setCurrentPage('STORE')}
                  className="group relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all"
                >
                  <img src="/asset/galary3.jpg" alt="Leather" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
                    <h3 className="text-white text-2xl font-bold mb-2 translate-y-2 group-hover:translate-y-0 transition-transform">Kawat Chenille</h3>
                    <p className="text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300 delay-100">Elegan dan klasik.</p>
                  </div>
                </div>
                <div
                  onClick={() => setCurrentPage('STORE')}
                  className="group relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all"
                >
                  <img src="/asset/couple2.jpg" alt="Metal" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
                    <h3 className="text-white text-2xl font-bold mb-2 translate-y-2 group-hover:translate-y-0 transition-transform">Couple Series</h3>
                    <p className="text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300 delay-100">Kuat, kokoh, dan tahan lama.</p>
                  </div>
                </div>
                <div
                  onClick={() => setCurrentPage('STORE')}
                  className="group relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all"
                >
                  <img src="/asset/metal/metal2.jpg" alt="Custom" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
                    <h3 className="text-white text-2xl font-bold mb-2 translate-y-2 group-hover:translate-y-0 transition-transform">Metal Series</h3>
                    <p className="text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300 delay-100">Ekspresikan dirimu tanpa batas.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Gallery Section */}
          <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full mb-4">
                  <Instagram className="w-4 h-4 text-pink-500" />
                  <span className="text-xs font-bold text-slate-600 uppercase tracking-wide">@ArchiKeys.official</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">#ArchiStyle Gallery</h2>
                <p className="text-slate-500 max-w-2xl mx-auto">Lihat bagaimana customer kami memadukan ArciKeys dengan gaya harian mereka. Tag kami untuk kesempatan di-feature.</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 h-[500px] md:h-[600px]">
                <div className="col-span-2 row-span-2 relative rounded-3xl overflow-hidden group shadow-lg">
                  <img src="/asset/galary3.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Gallery 1" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <Instagram className="w-12 h-12 text-white" />
                  </div>
                </div>
                <div className="col-span-1 row-span-1 relative rounded-3xl overflow-hidden group shadow-lg">
                  <img src="/asset/couple2.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Gallery 2" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                </div>
                <div className="col-span-1 row-span-2 relative rounded-3xl overflow-hidden group shadow-lg">
                  <img src="/asset/galary1.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Gallery 3" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                </div>
                <div className="col-span-1 row-span-1 relative rounded-3xl overflow-hidden group shadow-lg">
                  <img src="/asset/metal/metal2.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Gallery 4" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                </div>
              </div>
            </div>
          </section>

          {/* Promo Banner */}
          <section className="relative py-24 bg-slate-900 overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-red-600/10 skew-x-12"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-full bg-blue-600/10 -skew-x-12"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-red-500 text-white text-sm font-bold tracking-wide uppercase mb-6 animate-pulse">Limited Time Offer</span>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                Get 50% Off <br />
                <span className="text-slate-400">For Second Purchase</span>
              </h2>
              <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-10">
                Lengkapi koleksimu sekarang. Promo berlaku untuk pembelian kedua item apapun. Syarat dan ketentuan berlaku.
              </p>
              <button
                onClick={() => setCurrentPage('STORE')}
                className="px-10 py-4 bg-white text-slate-900 rounded-full font-bold text-lg hover:bg-slate-200 transition-colors shadow-xl"
              >
                Cek Katalog Promo
              </button>
            </div>
          </section>

          {/* Best Sellers */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-12 text-center">Best Seller Products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {PRODUCTS.slice(0, 4).map((product) => (
                  <div
                    key={product.id}
                    className="group cursor-pointer"
                    onClick={() => setSelectedProduct(product)}
                  >
                    <div className="relative aspect-square bg-slate-100 rounded-2xl overflow-hidden mb-4">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded">HOT</div>
                      <button className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <ArrowRight className="w-5 h-5 text-slate-900" />
                      </button>
                    </div>
                    <h3 className="font-bold text-slate-900 text-lg mb-1 group-hover:text-red-500 transition-colors">{product.name}</h3>
                    <p className="text-slate-500">Rp {product.price.toLocaleString('id-ID')}</p>
                  </div>
                ))}
              </div>
              <div className="text-center mt-12">
                <button
                  onClick={() => setCurrentPage('STORE')}
                  className="px-8 py-3 border-2 border-slate-900 text-slate-900 rounded-full font-bold hover:bg-slate-900 hover:text-white transition-all"
                >
                  Lihat Semua Produk
                </button>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-20 bg-slate-50 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-center text-3xl font-black text-slate-900 mb-16">Happy Customers</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative">
                  <Quote className="w-10 h-10 text-red-100 absolute top-6 right-6" />
                  <div className="flex items-center gap-4 mb-6">
                    <img src="https://i.pravatar.cc/150?img=32" className="w-12 h-12 rounded-full object-cover" alt="User" />
                    <div>
                      <h5 className="font-bold text-slate-900">Sarah M.</h5>
                      <div className="flex text-yellow-400 text-xs">
                        <Star className="w-3 h-3 fill-current" />
                        <Star className="w-3 h-3 fill-current" />
                        <Star className="w-3 h-3 fill-current" />
                        <Star className="w-3 h-3 fill-current" />
                        <Star className="w-3 h-3 fill-current" />
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-600 leading-relaxed italic">"Kualitas kulitnya luar biasa. Jahitannya rapi dan terasa sangat premium. Pengiriman juga sangat cepat!"</p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative transform md:-translate-y-4">
                  <Quote className="w-10 h-10 text-red-100 absolute top-6 right-6" />
                  <div className="flex items-center gap-4 mb-6">
                    <img src="https://i.pravatar.cc/150?img=11" className="w-12 h-12 rounded-full object-cover" alt="User" />
                    <div>
                      <h5 className="font-bold text-slate-900">Rizky A.</h5>
                      <div className="flex text-yellow-400 text-xs">
                        <Star className="w-3 h-3 fill-current" />
                        <Star className="w-3 h-3 fill-current" />
                        <Star className="w-3 h-3 fill-current" />
                        <Star className="w-3 h-3 fill-current" />
                        <Star className="w-3 h-3 fill-current" />
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-600 leading-relaxed italic">"Suka banget sama custom acrylic nya. Hasilnya presisi dan packaging nya aman banget. Recommended seller!"</p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative">
                  <Quote className="w-10 h-10 text-red-100 absolute top-6 right-6" />
                  <div className="flex items-center gap-4 mb-6">
                    <img src="https://i.pravatar.cc/150?img=5" className="w-12 h-12 rounded-full object-cover" alt="User" />
                    <div>
                      <h5 className="font-bold text-slate-900">Linda K.</h5>
                      <div className="flex text-yellow-400 text-xs">
                        <Star className="w-3 h-3 fill-current" />
                        <Star className="w-3 h-3 fill-current" />
                        <Star className="w-3 h-3 fill-current" />
                        <Star className="w-3 h-3 fill-current" />
                        <Star className="w-3 h-3 fill-current" />
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-600 leading-relaxed italic">"Respon admin cepat dan ramah. Gantungan kuncinya jadi kado ulang tahun yang perfect. Teman saya suka sekali."</p>
                </div>
              </div>
            </div>
          </section>

          {/* Community Voice / Feedback Section */}
          <section className="py-24 bg-slate-900 relative overflow-hidden">
            {/* Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
              <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[100px]"></div>
              <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                {/* Form Side */}
                <div>
                  <h2 className="text-4xl font-black text-white mb-6">Suara Komunitas</h2>
                  <p className="text-slate-400 mb-8 text-lg">
                    Kami mendengar kamu. Berikan masukan atau ceritakan pengalamanmu berbelanja di Phlox. Pesanmu akan muncul di sini.
                  </p>

                  <form onSubmit={handleFeedbackSubmit} className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl shadow-2xl">
                    <div className="mb-6">
                      <label className="block text-sm font-bold text-slate-300 mb-2">Nama Kamu</label>
                      <input
                        type="text"
                        value={feedbackForm.name}
                        onChange={(e) => setFeedbackForm({ ...feedbackForm, name: e.target.value })}
                        className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors"
                        placeholder="Tulis namamu..."
                        required
                      />
                    </div>
                    <div className="mb-6">
                      <label className="block text-sm font-bold text-slate-300 mb-2">Pesan / Masukan</label>
                      <textarea
                        value={feedbackForm.message}
                        onChange={(e) => setFeedbackForm({ ...feedbackForm, message: e.target.value })}
                        className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors h-32 resize-none"
                        placeholder="Tulis pesanmu di sini..."
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-red-600/20 flex items-center justify-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      Kirim Masukan
                    </button>
                  </form>
                </div>

                {/* List Side */}
                <div className="flex flex-col h-[600px]">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <MessageSquare className="w-6 h-6 text-red-500" />
                    Masukan Terbaru
                  </h3>

                  <div className="flex-1 overflow-y-auto pr-2 space-y-4 hide-scrollbar">
                    {feedbacks.length === 0 ? (
                      <p className="text-slate-500 italic">Belum ada masukan. Jadilah yang pertama!</p>
                    ) : (
                      feedbacks.map((item) => (
                        <div key={item.id} className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors animate-fade-in">
                          <div className="flex justify-between items-start mb-3">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-red-500 to-orange-500 flex items-center justify-center text-white font-bold text-sm">
                                {item.name.charAt(0)}
                              </div>
                              <div>
                                <h4 className="text-white font-bold">{item.name}</h4>
                                <p className="text-xs text-slate-500">{item.date}</p>
                              </div>
                            </div>
                          </div>
                          <p className="text-slate-300 leading-relaxed text-sm">"{item.message}"</p>
                        </div>
                      ))
                    )}
                  </div>
                </div>

              </div>
            </div>
          </section>

        </div>
      )}


      {currentPage === 'STORE' && (
        <Store
          products={PRODUCTS}
          onProductClick={setSelectedProduct}
        />
      )}



      <Footer />

      {/* Overlays */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={addToCart}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onRemoveItem={removeFromCart}
        onUpdateQty={updateCartQty}
      />
    </div>
  );
};

export default App;