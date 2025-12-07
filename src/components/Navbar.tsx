import React from 'react';
import { ShoppingBag, Menu, X, Search } from 'lucide-react';
import { PageView } from '../../types';

interface NavbarProps {
  cartCount: number;
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
  onOpenCart: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, currentPage, onNavigate, onOpenCart }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div
            className="flex-shrink-0 cursor-pointer flex items-center gap-2"
            onClick={() => onNavigate('HOME')}
          >
            <img src="/asset/logo.png" alt="ArchiKeys" className="w-9 h-9 rounded-xl shadow-lg object-cover" />
            <span className="font-black text-2xl tracking-tighter text-slate-900">ArchiKeys<span className="text-red-500">.</span></span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1 items-center bg-white/50 backdrop-blur-sm px-2 py-1 rounded-full border border-slate-100/50">
            <button
              onClick={() => onNavigate('HOME')}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${currentPage === 'HOME' ? 'bg-slate-900 text-white shadow-md' : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'}`}
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('STORE')}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${currentPage === 'STORE' ? 'bg-slate-900 text-white shadow-md' : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'}`}
            >
              Store
            </button>
          </div>

          {/* Right Icons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-full transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <div className="w-px h-6 bg-slate-200"></div>
            <button
              onClick={onOpenCart}
              className="relative p-2 text-slate-900 hover:bg-slate-100 rounded-full transition-colors group"
            >
              <ShoppingBag className="w-6 h-6 group-hover:scale-110 transition-transform" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center min-w-[18px] h-[18px] text-[10px] font-bold text-white bg-red-500 rounded-full border-2 border-white">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={onOpenCart}
              className="relative p-2 text-slate-900"
            >
              <ShoppingBag className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-[10px] font-bold text-white bg-red-500 rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-900 hover:text-red-500"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 animate-fade-in absolute w-full top-20 left-0 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <button
              onClick={() => { onNavigate('HOME'); setIsMobileMenuOpen(false); }}
              className={`block w-full text-left px-4 py-3 rounded-xl text-base font-bold ${currentPage === 'HOME' ? 'bg-slate-50 text-slate-900' : 'text-slate-500'}`}
            >
              Home
            </button>
            <button
              onClick={() => { onNavigate('STORE'); setIsMobileMenuOpen(false); }}
              className={`block w-full text-left px-4 py-3 rounded-xl text-base font-bold ${currentPage === 'STORE' ? 'bg-slate-50 text-slate-900' : 'text-slate-500'}`}
            >
              Store
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;