import React from 'react';
import { Facebook, Instagram, Twitter, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6 text-white">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center font-black text-slate-900 text-lg">A</div>
            <span className="font-black text-2xl tracking-tighter">ArciKeys.</span>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed mb-6">
            Platform e-commerce terpercaya untuk custom keychain premium. Kami menggabungkan seni dan kualitas dalam setiap detail.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all duration-300">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all duration-300">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all duration-300">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 text-lg">Layanan</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Bantuan</a></li>
            <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Cara Pemesanan</a></li>
            <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Status Order</a></li>
            <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Kebijakan Privasi</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 text-lg">Informasi</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><a href="#" className="hover:text-white transition-colors">Tentang Arci</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Karir</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Kontak Kami</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 text-lg">Newsletter</h4>
          <p className="text-sm text-slate-400 mb-4">Dapatkan info promo menarik setiap minggunya.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Email kamu" 
              className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-red-500 transition-colors"
            />
            <button className="bg-red-600 text-white rounded-lg px-4 py-3 font-bold hover:bg-red-700 transition-colors">
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
        <p>&copy; 2026 ArciKeys Store. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;