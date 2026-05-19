import { motion, type Variants } from 'framer-motion'

import '../css/AboutUs.css'
import CharPeople from '../../components/AboutUs/CharPeople'

interface TeamMember {
  titulo: string
  subtitulo: string
  imagem: string
  popupImages?: string[]
}

const teamMembers: TeamMember[] = [
  {
    titulo: 'Victor Ferreira',
    subtitulo: 'Desenvolvedor',
    imagem: '/AboutUs/victor-ferreira.png',
  },
  {
    titulo: 'Kefilwe Lourenço (KF)',
    subtitulo: 'Desenvolvedor',
    imagem: '/AboutUs/kefilwe-lourenco.png',
  },
  {
    titulo: 'Bianca Nascimento',
    subtitulo: 'Tester',
    imagem: '/AboutUs/bianca-nascimento.webp',
  },
  {
    titulo: 'Kauã Moraes',
    subtitulo: 'Desenvolvedor',
    imagem: '/AboutUs/kaua-moraes.png',
    popupImages: ['/AboutUs/Pipoca1.png', '/AboutUs/Tartaruga2.png'],
  },
  {
    titulo: 'Jhonatan Alves',
    subtitulo: 'Desenvolvedor',
    imagem: '/AboutUs/jhonatan-alves.png',
  },
  {
    titulo: 'Letícia Fonseca',
    subtitulo: 'Desenvolvedor',
    imagem: '/AboutUs/leticia-fonseca.png',
  },
  {
    titulo: 'Tais Bernardi',
    subtitulo: 'PO',
    imagem: '/AboutUs/tais-bernardi.png',
  },
]

const pageVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      staggerChildren: 0.14,
    },
  },
}

const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 34,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
}

const textContainerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.12,
    },
  },
}

const textItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: 'easeOut',
    },
  },
}

const teamGridVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
}

const teamCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 26,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 220,
      damping: 22,
    },
  },
}

function AboutUs() {
  return (
    <motion.main
      className="about-page"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        className="about-project-section"
        variants={sectionVariants}
      >
        <motion.div
          className="about-project-content"
          variants={textContainerVariants}
        >
          <motion.span className="about-badge" variants={textItemVariants}>
            Sobre o projeto
          </motion.span>

          <motion.h1 variants={textItemVariants}>RotaDelas</motion.h1>

          <motion.p variants={textItemVariants}>
            O RotaDelas é um aplicativo desenvolvido para apoiar mulheres em seus
            deslocamentos diários, oferecendo mais segurança, confiança e
            praticidade durante cada trajeto.
          </motion.p>

          <motion.p variants={textItemVariants}>
            A proposta une tecnologia, mobilidade e acolhimento para criar uma
            experiência mais consciente, acessível e segura para mulheres.
          </motion.p>
        </motion.div>

        <motion.figure
          className="about-project-image-card"
          initial={{
            opacity: 0,
            y: 30,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          whileHover={{
            y: -10,
            scale: 1.015,
          }}
          transition={{
            type: 'spring',
            stiffness: 220,
            damping: 22,
          }}
        >
          <motion.div
            className="about-project-image-glow"
            animate={{
              opacity: [0.35, 0.65, 0.35],
              scale: [1, 1.04, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <motion.div
            className="about-project-image-wrapper"
            whileHover={{
              borderRadius: 30,
            }}
            transition={{
              type: 'spring',
              stiffness: 240,
              damping: 24,
            }}
          >
            <img
              src="/AboutUs/hero1.png"
              alt="Ilustração do projeto Rotadelas"
              className="about-project-image"
            />
          </motion.div>
        </motion.figure>
      </motion.section>

      <motion.section
        className="about-team-section"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.2,
        }}
      >
        <motion.div
          className="about-team-header"
          variants={textContainerVariants}
        >
          <motion.span className="about-badge" variants={textItemVariants}>
            Apresentando
          </motion.span>

          <motion.h2 variants={textItemVariants}>Nossa equipe</motion.h2>

          <motion.p variants={textItemVariants}>
            Conheça as pessoas responsáveis pelo desenvolvimento do RotaDelas.
          </motion.p>
        </motion.div>

        <motion.div className="about-team-grid" variants={teamGridVariants}>
          {teamMembers.map((member) => (
            <motion.div key={member.titulo} variants={teamCardVariants}>
              <CharPeople
                titulo={member.titulo}
                subtitulo={member.subtitulo}
                imagem={member.imagem}
                popupImages={member.popupImages}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </motion.main>
  )
}

export default AboutUs