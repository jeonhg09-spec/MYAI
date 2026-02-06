
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Settings, Users, ShieldCheck } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Brain className="w-10 h-10" />,
      title: "생성형 AI 실무 워크숍",
      desc: "프롬프트 엔지니어링 및 최신 AI 툴(Gemini, ChatGPT) 활용 능력 강화 교육",
      color: "from-cyan-400 to-blue-500"
    },
    {
      icon: <Settings className="w-10 h-10" />,
      title: "AI 기반 업무 자동화",
      desc: "노코드 툴과 AI를 결합한 스마트 워크플레이스 구축 및 컨설팅",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "AI 리터러시 강연",
      desc: "비전공자도 쉽게 이해하는 인공지능 기술의 현재와 미래 인사이트 전파",
      color: "from-emerald-400 to-teal-500"
    },
    {
      icon: <ShieldCheck className="w-10 h-10" />,
      title: "맞춤형 AI 가이드라인",
      desc: "효율적이고 안전한 AI 도입을 위한 전략 수립 및 리스크 관리",
      color: "from-orange-400 to-yellow-500"
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-950/50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-orbitron font-bold mb-4"
          >
            CORE SERVICES
          </motion.h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all cursor-default h-full"
            >
              <div className={`mb-6 p-4 rounded-2xl bg-gradient-to-br ${service.color} bg-opacity-10 inline-block text-white`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{service.desc}</p>
              
              {/* Holographic light effect on hover */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 bg-gradient-to-br from-white to-transparent pointer-events-none transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
