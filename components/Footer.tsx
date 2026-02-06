
import React from 'react';
import { Mail, Instagram, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-slate-900 bg-slate-950/80 backdrop-blur-lg relative z-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl font-orbitron font-bold tracking-tighter">JEON<span className="text-cyan-400">AI</span></span>
          </div>
          <p className="text-slate-500 text-sm max-w-sm">
            인공지능 교육 전문가 전현경. 기술의 일상화를 통해 더 나은 미래를 만듭니다.
          </p>
        </div>

        <div className="flex gap-6 text-slate-400">
          <a href="#" className="hover:text-cyan-400 transition-colors"><Mail size={20} /></a>
          <a href="#" className="hover:text-cyan-400 transition-colors"><Instagram size={20} /></a>
          <a href="#" className="hover:text-cyan-400 transition-colors"><Linkedin size={20} /></a>
          <a href="#" className="hover:text-cyan-400 transition-colors"><Github size={20} /></a>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-12 pt-8 border-t border-slate-900 text-center text-slate-600 text-xs font-orbitron">
        © 2024 JEON HYEON GYEONG. ALL RIGHTS RESERVED. POWERED BY AI VISION.
      </div>
    </footer>
  );
};

export default Footer;
