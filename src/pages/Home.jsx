import heroBanner from "../assets/hero-banner.png.png";
import Header from "./Header";
const heroContent = {
  greeting: "Hi, I'm",
  name: "Dharan",
  role: "Full Stack Developer",
  description:
    "I build modern, responsive and user-friendly web applications with clean code and creative design.",

  primaryButton: "View My Work",
  secondaryButton: "Get In Touch",

  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/DharanThangaraj",
      icon: "github",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/dharan-t-921312320/",
      icon: "linkedin",
    },
    {
      name: "Email",
      url: "mailto:dharancse12@gmail.com",
      icon: "mail",
    },
  ],
};

/* ================= ICONS ================= */

function ArrowRight() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.85 10.91.57.1.78-.25.78-.55v-2.13c-3.19.69-3.86-1.54-3.86-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.34.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18A10.9 10.9 0 0 1 12 6.1c.97 0 1.94.13 2.85.38 2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.67.41.35.78 1.04.78 2.1v3.14c0 .3.21.65.79.54A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.54 20.45H7.1V8.99H3.54v11.46ZM22.22 0H1.78C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.78 24h20.44c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

/* ================= SOCIAL ICON ================= */

function SocialIcon({ type }) {
  if (type === "github") {
    return <GithubIcon />;
  }

  if (type === "linkedin") {
    return <LinkedinIcon />;
  }

  return <MailIcon />;
}

/* ================= HOME ================= */

function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#05052b] text-white"
    >
      <Header/>
      {/* ================= BACKGROUND GLOWS ================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-10 h-80 w-80 rounded-full bg-purple-600/20 blur-[120px]" />

        <div className="absolute left-[35%] top-[45%] h-96 w-96 rounded-full bg-blue-600/20 blur-[140px]" />

        <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-pink-600/20 blur-[120px]" />
      </div>

      {/* ================= MAIN CONTAINER ================= */}

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 py-28 sm:px-8 lg:px-12">
        <div className="grid w-full items-center gap-10 lg:grid-cols-2 lg:gap-4">

          {/* ================= LEFT CONTENT ================= */}

          <div className="relative z-20 max-w-2xl text-center lg:text-left">

            {/* Greeting */}

            <p className="mb-3 text-base font-medium tracking-wide text-gray-300 sm:text-lg">
              {heroContent.greeting}
            </p>

            {/* Name */}

            <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-7xl">
              <span className="text-white">
                {heroContent.name}
              </span>

              <span className="ml-1 bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent sm:ml-2">
                .
              </span>
            </h1>

            {/* Role */}

            <h2 className="mt-5 text-xl font-semibold uppercase tracking-[0.12em] text-gray-200 sm:text-2xl md:text-3xl">
              {heroContent.role}
            </h2>

            {/* Gradient Line */}

            <div className="mx-auto mt-6 h-1 w-36 rounded-full bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 lg:mx-0" />

            {/* Description */}

            <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-gray-300 sm:text-base sm:leading-8 lg:mx-0 lg:text-lg">
              {heroContent.description}
            </p>

            {/* ================= BUTTONS ================= */}

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">

              {/* Primary Button */}

              <a
                href="project"
                className="group flex items-center justify-center gap-3 rounded-full bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 px-7 py-3.5 font-semibold shadow-lg shadow-purple-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-purple-500/40"
              >
                {heroContent.primaryButton}

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight />
                </span>
              </a>

              {/* Secondary Button */}

              <a
                href="contact"
                className="group flex items-center justify-center gap-3 rounded-full border border-purple-400/60 bg-white/5 px-7 py-3.5 font-semibold backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-pink-400 hover:bg-white/10"
              >
                {heroContent.secondaryButton}

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight />
                </span>
              </a>
            </div>

            {/* ================= SOCIAL ICONS ================= */}

            <div className="mt-9 flex justify-center gap-5 lg:justify-start">
              {heroContent.socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-gray-300 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-purple-400 hover:bg-purple-500/20 hover:text-white"
                >
                  <SocialIcon type={social.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* ================= RIGHT IMAGE ================= */}

          <div className="relative mx-auto flex w-full max-w-xl items-center justify-center lg:ml-auto lg:max-w-2xl">

            {/* Blue Glow */}

            <div className="absolute right-[15%] top-[20%] h-64 w-64 rounded-full bg-blue-500/30 blur-[100px]" />

            {/* Purple Glow */}

            <div className="absolute bottom-[10%] right-0 h-64 w-64 rounded-full bg-purple-500/30 blur-[100px]" />

            {/* Pink Glow */}

            <div className="absolute left-[20%] top-[35%] h-48 w-48 rounded-full bg-pink-500/20 blur-[90px]" />

            {/* Image */}

            <div className="relative z-10 w-full overflow-hidden rounded-3xl">
              <img
                src={heroBanner}
                alt="Developer coding on a laptop"
                className="h-auto w-full object-contain drop-shadow-2xl transition duration-700 hover:scale-[1.02]"
              />

              {/* Left Image Blend */}

              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-linear-to-r from-[#05052b] to-transparent" />

              {/* Bottom Image Blend */}

              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-[#05052b] to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* ================= NEON WAVE ================= */}

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 overflow-hidden">

        {/* Pink Wave */}

        <div className="absolute -bottom-20 left-[-10%] h-40 w-[120%] rotate-[-4deg] rounded-[50%] border-[5px] border-pink-500/70 blur-[1px]" />

        {/* Blue Wave */}

        <div className="absolute -bottom-24 left-[-10%] h-40 w-[120%] rotate-[-4deg] rounded-[50%] border-4 border-blue-500/70 blur-[2px]" />

        {/* Purple Wave */}

        <div className="absolute -bottom-28 left-[-10%] h-40 w-[120%] rotate-[-4deg] rounded-[50%] border-[3px] border-purple-500/60" />
      </div>

      {/* ================= DECORATIVE DOTS ================= */}

      <div className="absolute left-[8%] top-[25%] h-2 w-2 rounded-full bg-blue-400 shadow-lg shadow-blue-400" />

      <div className="absolute left-[20%] top-[18%] h-3 w-3 rounded-full bg-purple-500 shadow-lg shadow-purple-500" />

      <div className="absolute right-[15%] top-[25%] h-2 w-2 rounded-full bg-pink-400 shadow-lg shadow-pink-400" />

      <div className="absolute bottom-[25%] right-[8%] h-3 w-3 rounded-full bg-orange-400 shadow-lg shadow-orange-400" />
    </section>
  );
}

export default Home;