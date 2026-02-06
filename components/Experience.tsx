
import React from 'react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  const experiences = [
    {
      year: "CURRENT",
      title: "생성형 AI 실무 교육 전문가",
      org: "다양한 기업 및 공공기관",
      desc: "제미나이, 챗GPT 등 생성형 AI 툴 활용 교육 및 핸즈온 워크숍 주관"
    },
    {
      year: "EXPERT",
      title: "AI 도입 전략 수석 컨설턴트",
      org: "AI 트랜스포메이션 랩",
      desc: "조직 내 업무 효율 극대화를 위한 AI 워크플로우 설계 및 도입 전략 수립"
    },
    {
      year: "DIRECTOR",
      title: "AI 커뮤니티 및 콘텐츠 디렉터",
      org: "AI Tech Focus",
      desc: "최신 AI 기술 동향 분석 및 실무 적용 사례 전파를 위한 고품질 콘텐츠 기획"
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-orbitron font-bold text-center mb-16"
        >
          EXPERIENCE
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative flex flex-col md:flex-row gap-8 items-start group"
            >
              <div className="w-full md:w-32 flex-shrink-0">
                <span className="text-cyan-400 font-orbitron font-black text-sm tracking-widest">{exp.year}</span>
              </div>
              <div className="flex-grow pb-12 border-l-2 border-slate-800 pl-8 relative group-hover:border-cyan-500/50 transition-colors">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-slate-800 group-hover:bg-cyan-500 group-hover:scale-125 transition-all" />
                <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                <p className="text-slate-400 font-medium mb-3">{exp.org}</p>
                <p className="text-slate-500 leading-relaxed">{exp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
