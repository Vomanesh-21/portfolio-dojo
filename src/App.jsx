import { useMemo, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, X } from "lucide-react";
import "./index.css";

const LINKEDIN_URL = "https://www.linkedin.com/in/sai-vomanesh-chekuri/";
const CONTACT_EMAIL = "saivomaneshchekuri@gmail.com";

const START_PORTFOLIO_EMAIL = `mailto:${CONTACT_EMAIL}?subject=Portfolio%20Website%20Inquiry&body=Hi%20Sai,%0A%0AI%20am%20interested%20in%20building%20a%20portfolio%20website.%0A%0APackage%20I%20am%20interested%20in:%20%0AMy%20goal:%20%0AMy%20timeline:%20%0A%0AThank%20you.`;

const pricingPackages = [
  {
    name: "Starter",
    price: "$99",
    short: "For students who need a clean professional presence.",
    description:
      "A clean one-page portfolio for students, job seekers, or early professionals who need a simple and polished online presence.",
    features: [
      "1-page portfolio website",
      "Professional about section",
      "3 project cards",
      "Resume button",
      "LinkedIn + email buttons",
      "GitHub Pages hosting setup",
    ],
  },
  {
    name: "Professional",
    price: "$199",
    short: "Best for job seekers who want stronger presentation.",
    description:
      "A stronger portfolio experience with improved design, project storytelling, and mobile polish for a more confident first impression.",
    features: [
      "Includes the Starter portfolio foundation",
      "Custom layout and improved visual design",
      "Project case-study sections",
      "Mobile responsive polish",
      "PDF, resume, or recommendation buttons",
      "1 revision included",
    ],
  },
  {
    name: "Premium",
    price: "$259",
    short: "For a polished, share-ready personal brand.",
    description:
      "A polished, share-ready portfolio built with stronger personal branding, custom domain support, analytics, and launch preparation.",
    features: [
      "Includes the Professional portfolio experience",
      "Custom domain setup support",
      "Google Analytics tracking",
      "Click tracking for resume, email, and LinkedIn",
      "LinkedIn launch post draft",
      "2 revisions included",
    ],
  },
  {
    name: "Cinematic",
    price: "$399+",
    short: "For an interactive portfolio that feels unforgettable.",
    description:
      "A high-impact interactive portfolio experience for people who want a cinematic, animated, and memorable online presence.",
    features: [
      "Includes the Premium portfolio experience",
      "Cinematic hero section",
      "Advanced scroll-based animations",
      "Custom visual direction",
      "Interactive storytelling sections",
      "Premium motion and transition effects",
      "Final price depends on complexity",
    ],
    note:
      "Starting at $399+ depending on animation level, number of scenes, custom visuals, page length, and interaction complexity.",
  },
];

function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/25 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#arrival" className="text-sm font-semibold tracking-[0.32em] text-white">
          PORTFOLIO DOJO
        </a>

        <nav className="hidden items-center gap-8 text-sm text-white/65 md:flex">
          <a href="#discovery" className="hover:text-white">Discovery</a>
          <a href="#craft" className="hover:text-white">Craft</a>
          <a href="#showcase" className="hover:text-white">Showcase</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#contact" className="hover:text-white">Start</a>
        </nav>
      </div>
    </header>
  );
}

function FallingLeaves() {
  const leaves = useMemo(
    () =>
      Array.from({ length: 46 }).map((_, index) => ({
        id: index,
        left: Math.random() * 100,
        size: 6 + Math.random() * 12,
        duration: 10 + Math.random() * 18,
        delay: Math.random() * 14,
        drift: 40 + Math.random() * 120,
        opacity: 0.25 + Math.random() * 0.45,
      })),
    []
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-20 overflow-hidden">
      {leaves.map((leaf) => (
        <span
          key={leaf.id}
          className="absolute block rounded-[70%_10%_70%_10%] bg-amber-300 blur-[0.2px]"
          style={{
            width: `${leaf.size}px`,
            height: `${leaf.size + 5}px`,
            left: `${leaf.left}%`,
            opacity: leaf.opacity,
            animation: `fall ${leaf.duration}s linear infinite`,
            animationDelay: `${leaf.delay}s`,
            "--drift": `${leaf.drift}px`,
          }}
        />
      ))}
    </div>
  );
}

function CinematicUniverse() {
  const { scrollYProgress } = useScroll();

  const skyY = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.22]);
  const mountainY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const mistY = useTransform(scrollYProgress, [0, 1], ["0%", "-26%"]);

  const arrivalOpacity = useTransform(scrollYProgress, [0, 0.22, 0.36], [1, 1, 0]);
  const discoveryOpacity = useTransform(scrollYProgress, [0.18, 0.34, 0.56], [0, 1, 0]);
  const dojoOpacity = useTransform(
  scrollYProgress,
  [0.24, 0.34, 0.46, 0.56],
  [0, 1, 1, 0]
);

const showcaseOpacity = useTransform(
  scrollYProgress,
  [0.48, 0.58, 0.68, 0.76],
  [0, 1, 1, 0]
);

const showcaseY = useTransform(
  scrollYProgress,
  [0.48, 0.60],
  ["4vh", "0vh"]
);

const pathsOpacity = useTransform(
  scrollYProgress,
  [0.70, 0.80, 0.88, 0.94],
  [0, 1, 1, 0]
);

const pathsY = useTransform(
  scrollYProgress,
  [0.70, 0.82],
  ["5vh", "0vh"]
);

const buildOpacity = useTransform(
  scrollYProgress,
  [0.90, 0.96, 1],
  [0, 1, 1]
);

const buildY = useTransform(
  scrollYProgress,
  [0.90, 0.98],
  ["5vh", "0vh"]
);

  const orbX = useTransform(scrollYProgress, [0, 0.35, 0.7, 1], ["0vw", "-18vw", "14vw", "0vw"]);
  const orbY = useTransform(scrollYProgress, [0, 0.35, 0.7, 1], ["0vh", "15vh", "-8vh", "10vh"]);
  const orbScale = useTransform(scrollYProgress, [0, 0.45, 1], [1, 1.35, 0.9]);
  const orbOpacity = useTransform(
  scrollYProgress,
  [0, 0.58, 0.68, 1],
  [1, 1, 0, 0]
);

  const characterX = useTransform(scrollYProgress, [0, 0.4, 1], ["0vw", "-4vw", "2vw"]);
  const characterY = useTransform(scrollYProgress, [0, 0.4, 1], ["0vh", "4vh", "-2vh"]);
  const characterScale = useTransform(scrollYProgress, [0, 0.55, 1], [1, 1.08, 0.96]);
  const arrivalY = useTransform(scrollYProgress, [0, 0.2, 0.38], ["0vh", "-4vh", "-8vh"]);
const discoveryY = useTransform(scrollYProgress, [0.14, 0.34], ["10vh", "0vh"]);

const discoveryCharacterOpacity = useTransform(
  scrollYProgress,
  [0.06, 0.12, 0.20, 0.25],
  [0, 1, 1, 0]
);

const discoveryCharacterY = useTransform(
  scrollYProgress,
  [0.07, 0.18, 0.31],
  ["34vh", "0vh", "-4vh"]
);

const discoveryCharacterScale = useTransform(
  scrollYProgress,
  [0.07, 0.18],
  [0.82, 1]
);

const discoveryCharacterX = useTransform(
  scrollYProgress,
  [0.07, 0.18],
  ["-10vw", "0vw"]
);
const craftCharacterOpacity = useTransform(
  scrollYProgress,
  [0.20, 0.27, 0.40, 0.48],
  [0, 1, 1, 0]
);

const craftCharacterY = useTransform(
  scrollYProgress,
  [0.24, 0.36],
  ["20vh", "0vh"]
);

const craftCharacterX = useTransform(
  scrollYProgress,
  [0.24, 0.36],
  ["8vw", "0vw"]
);

const craftCharacterScale = useTransform(
  scrollYProgress,
  [0.24, 0.36],
  [0.9, 1]
);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#030406]">
      {/* Fallback cinematic sky */}
      <motion.div
        style={{ y: skyY }}
        className="absolute inset-0 scale-110 bg-[radial-gradient(circle_at_55%_18%,rgba(190,170,255,0.28),transparent_16%),radial-gradient(circle_at_50%_10%,rgba(110,80,255,0.28),transparent_38%),linear-gradient(to_bottom,#090b18_0%,#06070c_50%,#020203_100%)]"
      />

      {/* Scene 1: Arrival wallpaper */}
<motion.div
  style={{ scale: bgScale, y: arrivalY }}
  className="absolute inset-0 bg-cover bg-center"
>
  <div
    className="absolute inset-0 bg-cover bg-center opacity-100"
    style={{ backgroundImage: "url('/assets/scene-arrival.jpg')" }}
  />
  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.28),rgba(0,0,0,0.06),rgba(0,0,0,0.28))]" />
</motion.div>

      {/* Scene 2: Discovery wallpaper */}
      <motion.div
  style={{ opacity: discoveryOpacity, scale: bgScale, y: discoveryY }}
  className="absolute inset-0 bg-cover bg-center"
>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/scene-discovery.jpg')" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_56%_34%,rgba(139,92,246,0.36),transparent_30%),linear-gradient(to_bottom,rgba(0,0,0,0.28),rgba(0,0,0,0.82))]" />
      </motion.div>

      {/* Scene 3: Dojo wallpaper */}
      <motion.div
        style={{ opacity: dojoOpacity, scale: bgScale }}
        className="absolute inset-0 bg-cover bg-center"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/scene-dojo.jpg')" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(52,211,153,0.14),transparent_32%),linear-gradient(to_bottom,rgba(0,0,0,0.38),rgba(0,0,0,0.88))]" />
      </motion.div>

          {/* Scene 4: Showcase mountain climb wallpaper */}
      <motion.div
        style={{ opacity: showcaseOpacity, scale: bgScale, y: showcaseY }}
        className="absolute inset-0 bg-cover bg-center"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/scene-showcase.jpg')" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.42),rgba(0,0,0,0.12),rgba(0,0,0,0.36))]" />
        <div className="absolute bottom-0 left-0 h-[28vh] w-full bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
      </motion.div>

            {/* Scene 5: Choose your path wallpaper */}
      <motion.div
        style={{ opacity: pathsOpacity, scale: bgScale, y: pathsY }}
        className="absolute inset-0 bg-cover bg-center"
      >
        <div
          className="absolute inset-0 bg-cover bg-[center_top]"
          style={{ backgroundImage: "url('/assets/scene-paths.jpg')" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.46),rgba(0,0,0,0.14),rgba(0,0,0,0.36))]" />
        <div className="absolute bottom-0 left-0 h-[28vh] w-full bg-gradient-to-t from-black/75 via-black/28 to-transparent" />
      </motion.div>

      

            {/* Scene 6: Begin the build wallpaper */}
      <motion.div
        style={{ opacity: buildOpacity, scale: bgScale, y: buildY }}
        className="absolute inset-0 bg-cover bg-center"
      >
        <div
          className="absolute inset-0 bg-cover bg-[center_top]"
          style={{ backgroundImage: "url('/assets/scene-build.jpg')" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.48),rgba(0,0,0,0.12),rgba(0,0,0,0.34))]" />
        <div className="absolute bottom-0 left-0 h-[30vh] w-full bg-gradient-to-t from-black/78 via-black/28 to-transparent" />
      </motion.div>

      {/* Bamboo silhouettes fallback */}
      <div className="absolute inset-y-0 left-0 w-[22%] opacity-25">
        <div className="absolute bottom-0 left-8 h-[80%] w-2 rotate-[-5deg] rounded-full bg-emerald-200/20" />
        <div className="absolute bottom-0 left-20 h-[95%] w-2 rotate-[4deg] rounded-full bg-emerald-200/15" />
        <div className="absolute bottom-0 left-36 h-[70%] w-2 rotate-[-8deg] rounded-full bg-emerald-200/20" />
      </div>

      <div className="absolute inset-y-0 right-0 w-[22%] opacity-22">
        <div className="absolute bottom-0 right-8 h-[86%] w-2 rotate-[5deg] rounded-full bg-emerald-200/20" />
        <div className="absolute bottom-0 right-24 h-[74%] w-2 rotate-[-4deg] rounded-full bg-emerald-200/15" />
        <div className="absolute bottom-0 right-40 h-[98%] w-2 rotate-[8deg] rounded-full bg-emerald-200/20" />
      </div>

      

                  {/* Scene 2 panda reveal */}
      <motion.div
        style={{
          opacity: discoveryCharacterOpacity,
          y: discoveryCharacterY,
          x: discoveryCharacterX,
          scale: discoveryCharacterScale,
        }}
        className="pointer-events-none absolute bottom-[-8%] left-[-2%] z-20 hidden h-[92vh] w-[46vw] max-w-[640px] overflow-hidden md:block"
      >
        <motion.img
          src="/assets/panda-warrior.png"
          alt="Panda warrior looking diagonally toward the orb"
          className="absolute bottom-0 left-0 h-[82vh] w-auto object-contain drop-shadow-[0_0_80px_rgba(139,92,246,0.28)]"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

            {/* Scene 3 panda climbing reveal */}
      <motion.div
        style={{
          opacity: craftCharacterOpacity,
          y: craftCharacterY,
          x: craftCharacterX,
          scale: craftCharacterScale,
        }}
        className="pointer-events-none absolute bottom-[-2%] right-[2%] z-20 hidden h-[95vh] w-[44vw] max-w-[620px] overflow-hidden md:block"
      >
        <motion.img
          src="/assets/panda-climb.png"
          alt="Panda warrior climbing toward the mountain orb"
          className="absolute bottom-0 right-0 h-[86vh] w-auto object-contain drop-shadow-[0_0_70px_rgba(139,92,246,0.22)]"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Moving glowing orb */}
      <motion.div
  style={{ x: orbX, y: orbY, scale: orbScale, opacity: orbOpacity }}
        className="absolute left-[57%] top-[34%] h-24 w-24 rounded-full bg-violet-200 shadow-[0_0_120px_rgba(139,92,246,0.95)]"
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <motion.div
  style={{ x: orbX, y: orbY, scale: orbScale, opacity: orbOpacity }}
        className="absolute left-[56.4%] top-[33.4%] h-32 w-32 rounded-full border border-white/25"
      />

      {/* Mist layer */}
      <motion.div
        style={{ y: mistY }}
        className="absolute bottom-0 left-[-20%] h-[42vh] w-[140%] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.16),transparent_62%)] blur-3xl"
      />

      {/* Global readability overlay */}
<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.45),rgba(0,0,0,0.12),rgba(0,0,0,0.35))]" />
<div className="absolute bottom-0 left-0 h-[24vh] w-full bg-gradient-to-t from-black/70 via-black/35 to-transparent" />
    </div>
  );
}

function Scene({ id, label, title, text, children, align = "left" }) {
  return (
    <section
      id={id}
      className="relative flex min-h-screen items-center px-6 py-28"
    >
      <div
        className={`relative z-30 mx-auto w-full max-w-7xl ${
          align === "center" ? "text-center" : ""
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 44 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.45 }}
          transition={{ duration: 0.8 }}
          className={align === "center" ? "mx-auto max-w-4xl" : "max-w-3xl"}
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.36em] text-violet-300">
            {label}
          </p>
          <h2 className="text-5xl font-semibold leading-[0.95] tracking-tight text-white md:text-7xl">
            {title}
          </h2>
          {text && (
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/68">
              {text}
            </p>
          )}
          {children}
        </motion.div>
      </div>
    </section>
  );
}

function GlassPanel({ title, children }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.015 }}
      className="rounded-3xl border border-white/10 bg-black/35 p-7 shadow-2xl backdrop-blur-xl transition hover:border-violet-300/40 hover:bg-black/45"
    >
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <div className="mt-4 leading-7 text-white/65">{children}</div>
    </motion.div>
  );
}

function PricingModal({ selectedPackage, onClose }) {
  if (!selectedPackage) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[80] flex items-center justify-center bg-black/75 px-5 backdrop-blur-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div
          className="relative max-h-[86vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-white/10 bg-[#080a0f]/95 p-8 shadow-[0_0_110px_rgba(139,92,246,0.28)]"
          initial={{ opacity: 0, y: 36, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
        >
          <button
            onClick={onClose}
            className="absolute right-5 top-5 rounded-full border border-white/10 bg-white/5 p-2 text-white/70 hover:text-white"
          >
            <X size={18} />
          </button>

          <p className="text-xs uppercase tracking-[0.3em] text-violet-300">
            Package Details
          </p>
          <h3 className="mt-4 text-4xl font-semibold">{selectedPackage.name}</h3>
          <div className="mt-3 text-5xl font-semibold text-violet-200">
            {selectedPackage.price}
          </div>
          <p className="mt-6 leading-8 text-white/65">
            {selectedPackage.description}
          </p>

          <div className="mt-8 space-y-3">
            {selectedPackage.features.map((feature) => (
              <div key={feature} className="flex gap-3 text-white/75">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-black">
                  <Check size={13} />
                </span>
                {feature}
              </div>
            ))}
          </div>

          {selectedPackage.note && (
            <p className="mt-7 rounded-2xl border border-violet-300/15 bg-violet-400/10 p-4 text-sm leading-6 text-violet-100/80">
              {selectedPackage.note}
            </p>
          )}

          <a
            href="#contact"
            onClick={onClose}
            className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:scale-[1.02]"
          >
            Start This Build
          </a>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function PricingScene() {
  const [selectedPackage, setSelectedPackage] = useState(null);

  return (
    <section id="pricing" className="relative flex min-h-screen items-center px-6 py-28">
      <div className="relative z-30 mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 44 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.36em] text-violet-300">
            // CHOOSE YOUR PATH
          </p>
          <h2 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl">
            Select The Package That Fits Your Stage
          </h2>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/68">
            Each package is built to help you launch with clarity, confidence,
            and a professional link worth sharing.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {pricingPackages.map((pkg) => (
            <motion.div
              key={pkg.name}
              whileHover={{ y: -10 }}
              className={`rounded-3xl border p-7 backdrop-blur-xl ${
                pkg.name === "Cinematic"
                  ? "border-violet-300/40 bg-violet-400/15 shadow-[0_0_80px_rgba(139,92,246,0.25)]"
                  : "border-white/10 bg-black/38"
              }`}
            >
              <h3 className="text-2xl font-semibold">{pkg.name}</h3>
              <div className="mt-5 text-5xl font-semibold">{pkg.price}</div>
              <p className="mt-5 min-h-16 text-white/60">{pkg.short}</p>
              <button
                onClick={() => setSelectedPackage(pkg)}
                className="mt-8 w-full rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:scale-105"
              >
                View Details
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <PricingModal
        selectedPackage={selectedPackage}
        onClose={() => setSelectedPackage(null)}
      />
    </section>
  );
}

export default function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030406] text-white">
      <style>
        {`
          @keyframes fall {
            0% {
              transform: translateY(-14vh) translateX(0px) rotate(0deg);
              opacity: 0;
            }
            12% {
              opacity: 1;
            }
            100% {
              transform: translateY(114vh) translateX(var(--drift)) rotate(420deg);
              opacity: 0;
            }
          }
        `}
      </style>

      <CinematicUniverse />
      <FallingLeaves />
      <Navbar />

      <Scene
        id="arrival"
        label="// ARRIVAL"
        title="Some Portfolios Get Seen. The Best Ones Make An Entrance."
        text="Clean, professional, and cinematic portfolio websites built for students, job seekers, creators, and professionals who want more than a basic resume link."
      >
        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <a
            href="#showcase"
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-105"
          >
            Enter The Experience
            <ArrowRight size={18} className="transition group-hover:translate-x-1" />
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
          >
            View Packages
          </a>
        </div>
      </Scene>

      <Scene
        id="discovery"
        label="// THE DISCOVERY"
        title="Most Portfolios Exist. Few Make People Stop."
        text="Your resume tells people what you’ve done. Your portfolio shows them why it matters. I help turn your projects, skills, resume, and story into a professional online presence you can confidently share anywhere."
      />

      <section id="craft" className="relative flex min-h-screen items-center px-6 py-28">
        <div className="relative z-30 mx-auto w-full max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 44 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.36em] text-violet-300">
              // THE CRAFT
            </p>
            <h2 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl">
              Every Portfolio Is Built With Purpose
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <GlassPanel title="Personal Portfolio Websites">
              Clean one-page websites with your about section, projects, resume,
              contact buttons, and professional branding.
            </GlassPanel>
            <GlassPanel title="Career Branding Pages">
              Layouts built for students and professionals who want to stand out in
              job applications, LinkedIn, and referrals.
            </GlassPanel>
            <GlassPanel title="Project Case Studies">
              Projects presented with clear problem, approach, tools, and impact so
              people understand your work faster.
            </GlassPanel>
            <GlassPanel title="Launch Support">
              GitHub Pages hosting, resume buttons, LinkedIn buttons, custom domain
              guidance, and analytics setup.
            </GlassPanel>
          </div>
        </div>
      </section>

      <section id="showcase" className="relative flex min-h-screen items-center px-6 py-28">
        <div className="relative z-30 mx-auto w-full max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 44 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.36em] text-violet-300">
              // SHOWCASE LEVELS
            </p>
            <h2 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl">
              Choose The Portfolio Style That Fits Your Goal
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <GlassPanel title="Basic Presence">
              Simple, clean, and professional. Best for students who need a quick
              online presence with resume, projects, and contact links.
            </GlassPanel>
            <GlassPanel title="Professional Presence">
              Stronger layout, better storytelling, mobile polish, and a more
              confident first impression.
            </GlassPanel>
            <GlassPanel title="Premium Presence">
              Polished, trackable, and personal-brand focused with launch support.
            </GlassPanel>
            <GlassPanel title="Cinematic Presence">
              Animated, interactive, and built to make a premium visual statement.
            </GlassPanel>
          </div>
        </div>
      </section>

      <PricingScene />

      <Scene
        id="contact"
        label="// BEGIN THE BUILD"
        title="Ready To Build Your Portfolio Legend?"
        text="Start simple, go professional, or create a cinematic online presence that people remember."
        align="center"
      >
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href={START_PORTFOLIO_EMAIL}
            className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 font-semibold text-black transition hover:scale-105"
          >
            Start My Portfolio
          </a>
          <a
            href={LINKEDIN_URL}
target="_blank"
rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            Message Me On LinkedIn
          </a>
        </div>
      </Scene>

      <footer className="relative z-30 border-t border-white/10 bg-black/40 px-6 py-8 text-center text-sm text-white/40 backdrop-blur-xl">
        © 2026 Portfolio Dojo by Sai. All rights reserved.
      </footer>
    </main>
  );
}