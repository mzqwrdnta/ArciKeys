import React from 'react';
import { ArrowRight, Play, ShoppingBag, Star } from 'lucide-react';


interface HeroProps {
  onShopNow: () => void;
}

const Hero: React.FC<HeroProps> = ({ onShopNow }) => {
  return (
    <section className="relative w-full min-h-[90vh] bg-[#F8F9FA] overflow-hidden flex items-center pt-20">

      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-slate-100 via-white to-transparent skew-x-12 opacity-80"></div>
      <div className="absolute top-20 left-10 w-96 h-96 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">

        {/* Huge Background Text */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none -z-10">
          <span className="text-[15vw] lg:text-[18vw] font-black text-slate-900/5 leading-none tracking-tighter">
            ArciKeys
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="space-y-8 max-w-xl relative z-20">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-slate-100">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                <span className="text-xs font-bold text-slate-700 tracking-wide uppercase">New Arrival 2024</span>
              </div>

              <h1 className="text-5xl sm:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">
                Crafted for <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">
                  Your Style
                </span>
              </h1>
            </div>

            <p className="text-lg text-slate-500 leading-relaxed font-medium">
              Temukan koleksi gantungan kunci premium dengan desain eksklusif.
              Kombinasi material kulit dan metal terbaik untuk menyempurnakan gaya harianmu.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={onShopNow}
                className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold text-lg shadow-xl shadow-slate-900/20 hover:bg-red-600 hover:shadow-red-500/30 hover:-translate-y-1 transition-all duration-300 flex items-center gap-3"
              >
                <ShoppingBag className="w-5 h-5" />
                Belanja Sekarang
              </button>
              <button className="px-8 py-4 bg-white text-slate-700 rounded-full font-bold text-lg border border-slate-200 shadow-sm hover:shadow-lg hover:border-slate-300 transition-all duration-300 flex items-center gap-3">
                <Play className="w-5 h-5 fill-slate-900" />
                Lihat Video
              </button>
            </div>

            <div className="flex items-center gap-4 pt-6">
              <div className="flex -space-x-3">
                <img src="https://i.pravatar.cc/100?img=1" alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
                <img src="https://i.pravatar.cc/100?img=2" alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
                <img src="https://i.pravatar.cc/100?img=3" alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
                <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600">+1k</div>
              </div>
              <div className="text-sm">
                <div className="flex text-yellow-400 gap-0.5">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <p className="text-slate-500 font-medium">Trusted by 1000+ Customers</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[400px] sm:h-[600px] flex items-center justify-center z-10 perspective-1000">

            {/* Decorative Ring */}
            <div className="absolute w-[90%] h-[90%] border-[2px] border-slate-200 rounded-full animate-spin-slow opacity-50"></div>
            <div className="absolute w-[70%] h-[70%] border-[1px] border-red-100 rounded-full animate-spin-reverse opacity-60"></div>

            {/* Main Image */}
            {/* Using a high quality keychain image */}
            <img
              src="/asset/hero.png"
              alt="Premium Keychain"
              className="relative z-10 w-auto h-[100%] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] animate-float hover:scale-105 transition-transform duration-500"
            />

            {/* Floating Badge 1 - Price */}
            <div className="absolute top-10 right-0 sm:right-10 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white z-20 animate-bounce-slow">
              <div className="flex items-center gap-3">
                <div className="bg-red-100 p-2 rounded-lg text-red-600">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase">Best Seller</p>
                  <p className="text-lg font-black text-slate-900">Rp 5.000</p>
                </div>
              </div>
            </div>

            {/* Floating Badge 2 - Quality */}
            <div className="absolute bottom-20 left-0 sm:left-10 bg-white/90 backdrop-blur-md px-5 py-3 rounded-full shadow-xl border border-white z-20 flex items-center gap-3 animate-pulse-slow">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <Star className="w-4 h-4 fill-current" />
              </div>
              <div>
                <p className="font-bold text-slate-900 text-sm">Premium Leather</p>
                <p className="text-xs text-slate-500">100% Genuine</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
