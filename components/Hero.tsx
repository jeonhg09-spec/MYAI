
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="container mx-auto px-6 text-center relative z-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/50 border border-slate-700/50 text-cyan-400 text-xs font-orbitron font-bold uppercase tracking-[0.2em]"
        >
          <Sparkles size={14} />
          AI Transformation Pioneer
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-8xl font-orbitron font-black tracking-tighter text-white mb-6 leading-[1.1]"
        >
          FUTURE OF <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            INTELLIGENCE
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed"
        >
          인공지능 강사 <span className="text-white font-bold">전현경</span>과 함께 떠나는<br />
          생성형 AI와 업무 자동화의 혁신적인 우주 여행
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="group relative px-8 py-4 bg-white text-slate-950 rounded-xl font-orbitron font-bold tracking-tight overflow-hidden transition-all hover:scale-105 active:scale-95">
            <span className="relative z-10 flex items-center gap-2">
              강의 신청하기 <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
          
          <button className="px-8 py-4 bg-slate-900 border border-slate-700 hover:border-cyan-500/50 text-white rounded-xl font-orbitron font-bold tracking-tight transition-all">
            포트폴리오 보기
          </button>
        </motion.div>
      </div>

      {/* Futuristic Grid Overlay */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#38bdf8 1px, transparent 1px)`, backgroundSize: '40px 40px' }} 
      />
      
      {/* Cinematic Fog */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-slate-950 to-transparent z-10" />
    </section>
  );
};

export default Hero;
