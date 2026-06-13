import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, ArrowUpRight, ChevronDown, Download, Mail, Phone, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * TYPES & CONSTANTS
 */

interface Capability {
  number: string;
  title: string;
  description: string;
  profile?: string;
  cta: string;
  href: string;
  download?: string;
  hoverColor?: string;
  fileMeta?: string;
  accentColor: string;
  accentBg: string;
}
interface HighlightPill {
  label: string;
  accent: boolean;
}
interface ImpactItem {
  title: string;
  description: string;
  cta: string;
  href: string;
}
const CAPABILITIES: Capability[] = [{
  number: '01',
  title: 'GitHub',
  description: 'Explore my software projects, backend development work, coursework, and technical portfolio.',
  profile: '@spandankapadia',
  cta: 'View GitHub \u2197',
  href: 'https://github.com/spandankapadia',
  hoverColor: '#145A41',
  accentColor: '#0B3D2E',
  accentBg: '#EDF3EF'
}, {
  number: '02',
  title: 'LeetCode',
  description: 'Track my coding challenges, algorithm practice, and problem-solving journey.',
  cta: 'View LeetCode',
  href: 'https://leetcode.com/u/spandan_kapadia/',
  hoverColor: '#145A41',
  accentColor: '#0B3D2E',
  accentBg: '#EDF3EF'
}, {
  number: '03',
  title: "Dean's List",
  description: 'View my University of Toledo transcript and academic achievements.',
  cta: 'View Transcript',
  href: 'https://drive.google.com/uc?export=download&id=1WHiYAkRDLCO4bGa75-uswKP5tuVUn-4E',
  download: 'Spandan_Kapadia_Transcript.pdf',
  accentColor: '#C0C0C0',
  accentBg: '#EDF3EF'
}, {
  number: '04',
  title: 'Resume',
  description: 'Download my latest resume featuring technical projects, work experience, leadership activities, and academic achievements.',
  cta: 'Download Resume \u2193',
  href: 'assets/Spandan_Kapadia_Resume_v6_TranscriptLinked.pdf',
  download: 'Spandan_Kapadia_Resume_v6_TranscriptLinked.pdf',
  fileMeta: 'PDF \u2022 299 KB',
  accentColor: '#0B3D2E',
  accentBg: '#EDF3EF'
}];
const HIGHLIGHT_PILLS: HighlightPill[] = [{
  label: "Dean's List Student",
  accent: true
}, {
  label: 'Cybersecurity Focus',
  accent: false
}, {
  label: 'Software Development',
  accent: false
}, {
  label: 'Database and Cloud Technologies',
  accent: false
}];
const EXTRACURRICULAR_IMPACT: ImpactItem[] = [{
  title: 'The Collegian',
  description: 'Business Manager responsible for budgeting, planning, and supporting student media operations.',
  cta: 'View Leadership \u2192',
  href: 'https://www.utoledocollegian.com/'
}, {
  title: 'Rocket Motorsports',
  description: 'Formula SAE contributor supporting vehicle development, fabrication, and testing activities.',
  cta: 'View Team \u2192',
  href: '#experience'
}];
const visuallyHiddenStyle: React.CSSProperties = {
  position: 'absolute',
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
  border: 0
};
/**
 * SUB-COMPONENTS
 */

const ThemeToggle = ({
  isDark,
  onToggle
}: {
  isDark: boolean;
  onToggle: () => void;
}) => <button onClick={onToggle} className={cn('relative flex h-8 w-14 items-center rounded-full p-1 transition-colors duration-300', isDark ? 'bg-[#145A41]' : 'bg-[#EDF3EF]')} aria-label="Toggle Theme">
    <motion.div className="flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-sm" animate={{
    x: isDark ? 24 : 0
  }} transition={{
    type: 'spring',
    stiffness: 500,
    damping: 30
  }}>
      {isDark ? <Moon className="h-3.5 w-3.5 text-[#072A1F]" /> : <Sun className="h-3.5 w-3.5 text-[#072A1F]" />}
    </motion.div>
  </button>;
const LogoMark = () => <svg width="38" height="38" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{
  display: 'block',
  shapeRendering: 'geometricPrecision'
}}>
    <g stroke="currentColor" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round">
      <path d="M168 184L256 132L344 184" />
      <path d="M168 328L256 380L344 328" />
      <path d="M168 184V328" />
      <path d="M344 184V328" />
      <path d="M168 184L256 256L344 184" />
      <path d="M168 328L256 256L344 328" />
      <path d="M256 132V256V380" />
    </g>
    <g fill="currentColor">
      <circle cx="256" cy="132" r="28" />
      <circle cx="168" cy="184" r="28" />
      <circle cx="344" cy="184" r="28" />
      <circle cx="256" cy="256" r="34" />
      <circle cx="168" cy="328" r="28" />
      <circle cx="344" cy="328" r="28" />
      <circle cx="256" cy="380" r="28" />
    </g>
  </svg>;
const SectionLabel = ({
  children,
  number,
  color = '#0B3D2E'
}: {
  children: React.ReactNode;
  number: string;
  color?: string;
}) => <div className="mb-4 flex items-center gap-4">
    <span className="text-[11px] font-medium uppercase tracking-[0.2em]" style={{
    color
  }}>
      <span>{number} — </span>
      <span>{children}</span>
    </span>
  </div>;
const NavItem = ({
  href,
  children,
  isDark
}: {
  href: string;
  children: React.ReactNode;
  isDark: boolean;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return <a href={href} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className="relative text-[14px] font-medium transition-colors pb-0.5" style={{
    color: isDark ? '#C0C0C0' : '#4F5D55'
  }}>
      <span>{children}</span>
      <motion.span className="absolute bottom-0 left-0 h-[2px] rounded-full" style={{
      backgroundColor: '#0B3D2E'
    }} initial={{
      width: '0%'
    }} animate={{
      width: hovered ? '100%' : '0%'
    }} transition={{
      duration: 0.2,
      ease: 'easeOut'
    }} />
    </a>;
};
const ContactDropdown = ({
  isDark,
  id
}: {
  isDark: boolean;
  id?: string;
}) => {
  const [open, setOpen] = React.useState(false);
  const text = isDark ? '#F8F8F6' : '#072A1F';
  const muted = isDark ? '#C0C0C0' : '#4F5D55';
  const panelBg = isDark ? 'rgba(7,42,31,0.96)' : 'rgba(248,248,246,0.96)';
  const hoverBg = isDark ? 'rgba(192,192,192,0.08)' : 'rgba(11,61,46,0.08)';
  const border = isDark ? 'rgba(192,192,192,0.16)' : 'rgba(11,61,46,0.14)';
  const items = [{
    label: 'Email Me',
    value: 'spandan.kapadia@gmail.com',
    href: 'mailto:spandan.kapadia@gmail.com',
    icon: Mail
  }, {
    label: 'Call Me',
    value: '+1 (567) 469-6307',
    href: 'tel:+15674696307',
    icon: Phone
  }];
  return <div id={id} style={{
    position: 'relative'
  }} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} onFocus={() => setOpen(true)} onBlur={event => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      setOpen(false);
    }
  }}>
      <button type="button" aria-haspopup="menu" aria-expanded={open} style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '5px',
      border: 'none',
      background: 'transparent',
      padding: 0,
      color: muted,
      fontSize: '14px',
      fontWeight: 500,
      fontFamily: 'inherit',
      cursor: 'pointer',
      transition: 'color 0.2s ease'
    }} onMouseEnter={e => {
      e.currentTarget.style.color = text;
    }} onMouseLeave={e => {
      e.currentTarget.style.color = open ? text : muted;
    }}>
        <span>Contact</span>
        <ChevronDown style={{
        width: 13,
        height: 13,
        transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
        transition: 'transform 0.2s ease'
      }} />
      </button>
      <AnimatePresence>
        {open && <motion.div role="menu" initial={{
        opacity: 0,
        y: 8,
        scale: 0.98
      }} animate={{
        opacity: 1,
        y: 0,
        scale: 1
      }} exit={{
        opacity: 0,
        y: 8,
        scale: 0.98
      }} transition={{
        duration: 0.18,
        ease: 'easeOut'
      }} style={{
        position: 'absolute',
        top: 'calc(100% + 14px)',
        right: 0,
        width: '286px',
        padding: '10px',
        borderRadius: '16px',
        border: `1px solid ${border}`,
        background: panelBg,
        boxShadow: isDark ? '0 18px 44px rgba(0,0,0,0.48)' : '0 18px 44px rgba(0,0,0,0.14)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        zIndex: 70
      }}>
            {items.map(item => {
          const Icon = item.icon;
          return <a key={item.label} href={item.href} role="menuitem" style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '12px',
            padding: '12px',
            borderRadius: '12px',
            color: text,
            textDecoration: 'none',
            transition: 'background-color 0.18s ease, color 0.18s ease'
          }} onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = hoverBg;
          }} onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = 'transparent';
          }}>
                <Icon style={{
              width: 16,
              height: 16,
              marginTop: 2,
              color: isDark ? '#C0C0C0' : '#0B3D2E',
              flexShrink: 0
            }} />
                <span style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '3px'
            }}>
                  <span style={{
                fontSize: '13px',
                fontWeight: 700,
                color: text
              }}>{item.label}</span>
                  <span style={{
                fontSize: '12px',
                lineHeight: 1.4,
                color: muted
              }}>{item.value}</span>
                </span>
              </a>;
        })}
            <div role="menuitem" style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '12px',
          padding: '12px',
          borderRadius: '12px'
        }}>
              <Clock style={{
            width: 16,
            height: 16,
            marginTop: 2,
            color: isDark ? '#C0C0C0' : '#0B3D2E',
            flexShrink: 0
          }} />
              <span style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '3px'
          }}>
                <span style={{
              fontSize: '13px',
              fontWeight: 700,
              color: text
            }}>Preferred Response Time</span>
                <span style={{
              fontSize: '12px',
              lineHeight: 1.4,
              color: muted
            }}>Within 24 hours</span>
              </span>
            </div>
          </motion.div>}
      </AnimatePresence>
    </div>;
};
const DeansPill = ({
  isDark
}: {
  isDark: boolean;
}) => {
  const [hovered, setHovered] = React.useState(false);
  const baseBg = isDark ? '#0B3D2E' : '#EDF3EF';
  const hoveredBg = isDark ? '#145A41' : '#DDE5E0';
  const accent = isDark ? '#C0C0C0' : '#0B3D2E';
  return <a href="https://drive.google.com/uc?export=download&id=1WHiYAkRDLCO4bGa75-uswKP5tuVUn-4E" target="_blank" rel="noopener noreferrer" download="Spandan_Kapadia_Transcript.pdf" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{
    display: 'inline-flex',
    alignItems: 'center',
    gap: hovered ? '5px' : '0px',
    borderRadius: '9999px',
    padding: '6px 14px',
    fontSize: '12px',
    fontWeight: 500,
    textTransform: 'uppercase',
    letterSpacing: '0.06em',
    backgroundColor: hovered ? hoveredBg : baseBg,
    color: accent,
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.15s ease, gap 0.15s ease',
    whiteSpace: 'nowrap'
  }}>
      <span>{"Dean's List Student"}</span>
      <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      overflow: 'hidden',
      maxWidth: hovered ? '14px' : '0px',
      opacity: hovered ? 1 : 0,
      transition: 'opacity 0.15s ease, max-width 0.15s ease'
    }}>
        <Download style={{
        width: 10,
        height: 10,
        color: accent,
        flexShrink: 0
      }} />
      </span>
    </a>;
};

/**
 * MAIN COMPONENT
 */

export const PortfolioAstonInspiredV1 = () => {
  const [isDark, setIsDark] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const toggleTheme = () => setIsDark(!isDark);
  const bg = isDark ? '#072A1F' : '#F8F8F6';
  const textPrimary = isDark ? '#F8F8F6' : '#072A1F';
  const textSecondary = isDark ? '#C0C0C0' : '#4F5D55';
  const borderColor = isDark ? 'rgba(192,192,192,0.14)' : 'rgba(11,61,46,0.12)';
  const cardBg = isDark ? '#0B3D2E' : '#FFFFFF';
  const cardShadow = isDark ? '0 2px 16px rgba(0,0,0,0.3)' : '0 2px 12px rgba(0,0,0,0.08)';
  const cardShadowHover = isDark ? '0 8px 32px rgba(0,0,0,0.45)' : '0 8px 32px rgba(0,0,0,0.14)';
  const sectionBg = isDark ? '#0B3D2E' : '#F8F8F6';
  return <div style={{
    minHeight: '100vh',
    background: bg,
    color: textPrimary,
    fontFamily: "'Inter', 'Google Sans', system-ui, sans-serif",
    transition: 'background 0.3s ease, color 0.3s ease'
  }}>
      {/* NAV */}
      <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      display: 'flex',
      justifyContent: 'center',
      transition: 'padding 0.3s ease',
      paddingTop: scrolled ? '12px' : '28px',
      paddingBottom: scrolled ? '12px' : '28px'
    }}>
        <div style={{
        margin: '0 16px',
        width: '100%',
        maxWidth: '1200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: '9999px',
        padding: '10px 28px',
        transition: 'background 0.3s ease, box-shadow 0.3s ease',
        background: scrolled ? isDark ? 'rgba(7,42,31,0.88)' : 'rgba(248,248,246,0.86)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? cardShadow : 'none'
      }}>
          {/* Brand */}
          <a href="#" aria-label="Spandan Kapadia — Home" style={{
          textDecoration: 'none',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '38px',
          height: '38px',
          color: textPrimary,
          transition: 'color 0.3s ease, opacity 0.16s ease, transform 0.16s ease'
        }} onClick={event => {
          event.preventDefault();
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }} onMouseEnter={event => {
          event.currentTarget.style.opacity = '0.82';
          event.currentTarget.style.transform = 'scale(1.045)';
        }} onMouseLeave={event => {
          event.currentTarget.style.opacity = '1';
          event.currentTarget.style.transform = 'scale(1)';
        }}>
            <LogoMark />
          </a>

          {/* Right Actions */}
          <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '18px'
        }}>
            <ContactDropdown id="contact" isDark={isDark} />
            <div className="hidden items-center gap-2 md:flex">
              <div style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              backgroundColor: isDark ? '#C0C0C0' : '#0B3D2E',
              animation: 'pulse 2s infinite'
            }} />
              <span style={{
              fontSize: '12px',
              fontWeight: 500,
              color: textSecondary
            }}>
                Open to work
              </span>
            </div>
            <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
          </div>
        </div>
      </nav>

      <main style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 24px'
    }}>
        <nav aria-label="Portfolio sections" style={visuallyHiddenStyle}>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* HERO */}
        <section style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        paddingTop: '168px',
        paddingBottom: '56px'
      }}>
          <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '24px'
        }}>
            <div style={{
            gridColumn: '1 / -1'
          }}>
              <motion.h1 style={{
              fontSize: 'clamp(52px, 9vw, 88px)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
              margin: 0,
              color: textPrimary
            }} initial="hidden" animate="visible" variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}>
                <motion.span style={{
                display: 'block',
                color: textPrimary
              }} variants={{
                hidden: {
                  opacity: 0,
                  y: 24
                },
                visible: {
                  opacity: 1,
                  y: 0
                }
              }} transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
              }}>
                  SPANDAN KAPADIA
                </motion.span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p style={{
              marginTop: '14px',
              fontSize: 'clamp(18px, 2.5vw, 22px)',
              fontWeight: 500,
              letterSpacing: '0.01em',
              lineHeight: 1.4,
              color: isDark ? '#C0C0C0' : '#4F5D55',
              margin: '14px 0 0 0',
              transition: 'color 0.3s ease'
            }} initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.35,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1]
            }}>
                Junior Information Technology Engineering Student
              </motion.p>

              {/* Highlight Pill Row */}
              <motion.div style={{
              marginTop: '24px',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px'
            }} initial={{
              opacity: 0,
              y: 16
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.5,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1]
            }}>
                {HIGHLIGHT_PILLS.map(pill => {
                if (pill.accent) {
                  return <DeansPill key={pill.label} isDark={isDark} />;
                }
                return <span key={pill.label} style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  borderRadius: '9999px',
                  padding: '6px 14px',
                  fontSize: '12px',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  backgroundColor: isDark ? '#0B3D2E' : '#EDF3EF',
                  color: isDark ? '#C0C0C0' : '#072A1F',
                  transition: 'background 0.3s ease, color 0.3s ease',
                  whiteSpace: 'nowrap'
                }}>
                      {pill.label}
                    </span>;
              })}
              </motion.div>

            </div>
          </div>
        </section>

        {/* ABOUT / PHILOSOPHY */}
        <section id="about" style={{
        padding: '56px 0 72px',
        backgroundColor: '#0B3D2E',
        boxShadow: '0 0 0 100vmax #0B3D2E',
        clipPath: 'inset(0 -100vmax)'
      }}>
          <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '40px',
          alignItems: 'center'
        }}>
            <div style={{
            gridColumn: 'span 5'
          }} className="max-lg:col-span-12">
              <SectionLabel number="003" color="#C0C0C0">Philosophy</SectionLabel>
              <h2 style={{
              fontSize: '40px',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
              color: '#F7F7F2',
              opacity: 0.96,
              margin: 0
            }}>
                Obsessed with the details others ignore.
              </h2>
            </div>
            <div style={{
            gridColumn: 'span 6',
            gridColumnStart: 7
          }} className="max-lg:col-span-12 max-lg:col-start-1">
              <p style={{
                fontSize: '18px',
                lineHeight: 1.55,
                color: '#D8E4D1',
                opacity: 0.88,
                margin: 0,
                maxWidth: '600px'
              }}>
                  I bridge design and engineering to turn complex technical constraints into
                  seamless user experiences. Every pixel, interaction, and line of code should
                  serve the journey toward digital excellence.
                </p>

            </div>
          </div>
        </section>
      </main>

      {/* TECHNICAL HIGHLIGHTS */}
      <section id="projects" style={{
      backgroundColor: sectionBg,
      padding: '96px 0',
      transition: 'background 0.3s ease'
    }}>
        <span id="skills" style={visuallyHiddenStyle}>Skills</span>
        <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px'
      }}>
          <SectionLabel number="004" color="#C0C0C0">Technical Highlights</SectionLabel>
          <h2 style={{
          fontSize: '48px',
          fontWeight: 700,
          letterSpacing: '-0.02em',
          marginBottom: '64px',
          color: textPrimary
        }}>
            Technical Highlights.
          </h2>

          <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '20px'
        }} className="max-lg:grid-cols-2 max-sm:grid-cols-1">
            {CAPABILITIES.map((cap, index) => <motion.div key={cap.number} id={cap.title === 'Resume' ? 'resume' : undefined} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }}>
                <motion.div style={{
              height: '100%',
              borderRadius: '16px',
              backgroundColor: cardBg,
              padding: '32px',
              boxShadow: cardShadow,
              transition: 'box-shadow 0.3s ease',
              cursor: 'default'
            }} whileHover={{
              boxShadow: cardShadowHover
            }}>
                  <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                backgroundColor: isDark ? '#072A1F' : cap.accentBg,
                fontSize: '13px',
                fontWeight: 700,
                fontFamily: 'monospace',
                color: isDark ? '#C0C0C0' : cap.accentColor
              }}>
                    {cap.number}
                  </span>
                  <h3 style={{
                marginTop: '18px',
                fontSize: '19px',
                fontWeight: 700,
                letterSpacing: '-0.01em',
                color: textPrimary
              }}>
                    {cap.title}
                  </h3>
                  <p style={{
                marginTop: '12px',
                fontSize: '15px',
                lineHeight: 1.65,
                color: textSecondary,
                margin: '12px 0 0 0'
              }}>
                    {cap.description}
                  </p>
                  {cap.profile && <div style={{
                marginTop: '14px',
                fontSize: '13px',
                fontWeight: 600,
                color: textSecondary
              }}>
                    <span>Profile: </span>
                    <span style={{
                  color: textPrimary
                }}>{cap.profile}</span>
                  </div>}
                  <a href={cap.href} target={cap.href === '#' ? undefined : '_blank'} rel={cap.href === '#' ? undefined : 'noopener noreferrer'} download={cap.download} onMouseEnter={e => {
                if (cap.hoverColor) {
                  e.currentTarget.style.color = isDark ? '#F8F8F6' : cap.hoverColor;
                }
              }} onMouseLeave={e => {
                if (cap.hoverColor) {
                  e.currentTarget.style.color = isDark ? '#C0C0C0' : cap.accentColor;
                }
              }} style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                marginTop: '22px',
                fontSize: '13px',
                fontWeight: 700,
                color: isDark ? '#C0C0C0' : cap.accentColor,
                textDecoration: 'none',
                transition: 'color 0.2s ease'
              }}>
                    <span>{cap.cta}</span>
                    {cap.download && !cap.cta.includes('\u2193') ? <Download style={{
                  width: 13,
                  height: 13
                }} /> : !cap.download && !cap.cta.includes('\u2197') ? <ArrowUpRight style={{
                  width: 13,
                  height: 13
                }} /> : null}
                  </a>
                  {cap.fileMeta && <div style={{
                marginTop: '8px',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: textSecondary
              }}>
                    {cap.fileMeta}
                  </div>}
                </motion.div>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* EXTRACURRICULAR IMPACT */}
      <section id="experience" style={{
      backgroundColor: bg,
      padding: '96px 0',
      transition: 'background 0.3s ease'
    }}>
        <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px'
      }}>
          <SectionLabel number="05" color="#C0C0C0">Extracurricular Impact</SectionLabel>
          <h2 style={{
          fontSize: '48px',
          fontWeight: 700,
          letterSpacing: '-0.02em',
          marginBottom: '64px',
          color: textPrimary
        }}>
            Extracurricular Impact.
          </h2>

          <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '20px'
        }} className="max-sm:grid-cols-1">
            {EXTRACURRICULAR_IMPACT.map((item, index) => <motion.div key={item.title} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }}>
                <motion.div style={{
              height: '100%',
              borderRadius: '16px',
              backgroundColor: cardBg,
              padding: '32px',
              boxShadow: cardShadow,
              transition: 'box-shadow 0.3s ease',
              cursor: 'default'
            }} whileHover={{
              boxShadow: cardShadowHover
            }}>
                  <h3 style={{
                fontSize: '19px',
                fontWeight: 700,
                letterSpacing: '-0.01em',
                color: textPrimary,
                margin: 0
              }}>
                    {item.title}
                  </h3>
                  <p style={{
                marginTop: '12px',
                fontSize: '15px',
                lineHeight: 1.65,
                color: textSecondary,
                margin: '12px 0 0 0',
                maxWidth: '560px'
              }}>
                    {item.description}
                  </p>
                  <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined} onMouseEnter={e => {
                e.currentTarget.style.color = isDark ? '#F8F8F6' : '#145A41';
              }} onMouseLeave={e => {
                e.currentTarget.style.color = isDark ? '#C0C0C0' : '#0B3D2E';
              }} style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                marginTop: '22px',
                fontSize: '13px',
                fontWeight: 700,
                color: isDark ? '#C0C0C0' : '#0B3D2E',
                textDecoration: 'none',
                transition: 'color 0.2s ease'
              }}>
                    {item.cta}
                  </a>
                </motion.div>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
      borderTop: `1px solid ${borderColor}`,
      padding: '40px 0',
      transition: 'border-color 0.3s ease'
    }}>
        <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      }}>
          <div style={{
          fontSize: '13px',
          color: textSecondary
        }}>
            © 2024 Spandan Kapadia. All rights reserved.
          </div>
        </div>
      </footer>
    </div>;
};
