
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Target, BookOpen, BarChart3 } from 'lucide-react';

const About: React.FC = () => {
  const strengths = [
    { icon: <Zap className="text-yellow-400" />, title: '기술의 일상화', desc: '복잡한 AI 기술을 누구나 바로 쓸 수 있는 실무 언어로 변환' },
    { icon: <Target className="text-red-400" />, title: '실전형 커리큘럼', desc: '이론을 넘어 즉각적인 결과물을 만드는 핸즈온 중심 강의' },
    { icon: <BookOpen className="text-cyan-400" />, title: '트렌드 분석력', desc: '급변하는 AI 생태계에서 핵심 도구를 선별하는 통찰력' },
    { icon: <BarChart3 className="text-purple-400" />, title: '솔루션 중심', desc: '업무 현장에 즉시 도입 가능한 실용적인 AI 해결책 제시' },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image Container */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-slate-900 rounded-3xl overflow-hidden border border-slate-800">
              <img 
                src="https://raw.githubusercontent.com/ai-expert-jeon/profile/main/portrait.jpg" 
                alt="AI 강사 전현경"
                className="w-full h-auto object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://picsum.photos/800/1000?grayscale";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-orbitron font-bold">전현경</h3>
                <p className="text-cyan-400 text-sm font-orbitron uppercase tracking-widest mt-1">AI Transformation Expert</p>
              </div>
            </div>
          </motion.div>

          {/* About Text Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-6">AI 트랜스포메이션의 <br />가장 믿음직한 가이드</h2>
              <p className="text-slate-400 leading-relaxed text-lg">
                인공지능 교육 전문가 및 컨설턴트로서, 생성형 AI 활용법 교육, 업무 자동화 프로세스 설계, 
                기업 맞춤형 AI 도입 코칭을 통해 조직의 디지털 전환을 가속화합니다.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6">
              {strengths.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/30 transition-colors group"
                >
                  <div className="mb-3 transform group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h4 className="font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-slate-500 text-sm leading-snug">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
