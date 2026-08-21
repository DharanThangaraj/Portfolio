import Header from "./Header";
const contactInfo = [
  {
    title: "Email",
    value: "dharancse12@gmail.com",
    href: "mailto:dharancse12@gmail.com",
    icon: "mail",
  },
  {
    title: "GitHub",
    value: "github.com/DharanThangaraj",
    href: "https://github.com/DharanThangaraj",
    icon: "github",
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/dharan-t-921312320",
    href: "https://www.linkedin.com/in/dharan-t-921312320/",
    icon: "linkedin",
  },
];

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.85 10.91.57.1.78-.25.78-.55v-2.13c-3.19.69-3.86-1.54-3.86-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.34.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18A10.9 10.9 0 0 1 12 6.1c.97 0 1.94.13 2.85.38 2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.67.41.35.78 1.04.78 2.1v3.14c0 .3.21.65.79.54A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.54 20.45H7.1V8.99H3.54v11.46ZM22.22 0H1.78C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.78 24h20.44c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
    >
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function ContactIcon({ type }) {
  if (type === "github") {
    return <GithubIcon />;
  }

  if (type === "linkedin") {
    return <LinkedinIcon />;
  }

  return <MailIcon />;
}

function Contact() {
  return (
    <>
    <Header></Header>
    <section
      id="contact"
      className="relative overflow-hidden bg-[#05052b] px-5 py-24 text-white sm:px-8 lg:px-12"
    >
      {/* ================= BACKGROUND GLOWS ================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-purple-600/20 blur-[130px]" />

        <div className="absolute left-1/2 top-1/3 h-80 w-80 rounded-full bg-blue-600/15 blur-[130px]" />

        <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-pink-600/15 blur-[130px]" />
      </div>

      {/* ================= DECORATIVE DOTS ================= */}

      <div className="absolute left-[8%] top-[20%] h-2 w-2 rounded-full bg-blue-400 shadow-lg shadow-blue-400" />

      <div className="absolute right-[15%] top-[18%] h-3 w-3 rounded-full bg-purple-500 shadow-lg shadow-purple-500" />

      <div className="absolute bottom-[20%] right-[8%] h-2 w-2 rounded-full bg-pink-400 shadow-lg shadow-pink-400" />

      {/* ================= MAIN CONTAINER ================= */}

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* ================= HEADER ================= */}

        <div className="mx-auto mb-14 max-w-3xl text-center">

          {/* Badge */}

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-300 backdrop-blur-sm">
            <MailIcon />
            <span>Let's Connect</span>
          </div>

          {/* Heading */}

          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Get In{" "}
            <span className="bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>

          {/* Gradient line */}

          <div className="mx-auto mt-6 h-1 w-32 rounded-full bg-linear-to-r from-pink-500 via-purple-500 to-blue-500" />

          {/* Description */}

          <p className="mt-6 text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
            Have a project idea, collaboration opportunity, or just want to
            say hello? Feel free to reach out. I'd love to hear from you.
          </p>
        </div>

        {/* ================= CONTACT GRID ================= */}

        <div className="grid gap-8 lg:grid-cols-5">

          {/* ================= LEFT INFO ================= */}

          <div className="lg:col-span-2">

            <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-md sm:p-8">

              {/* Glow */}

              <div className="pointer-events-none absolute -right-24 -top-24 h-52 w-52 rounded-full bg-purple-500/20 blur-[80px]" />

              <div className="relative z-10">

                <h3 className="text-2xl font-bold sm:text-3xl">
                  Let's build something{" "}
                  <span className="bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                    amazing
                  </span>
                  .
                </h3>

                <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base">
                  I'm always interested in working on exciting projects,
                  learning new technologies, and connecting with other
                  developers and creators.
                </p>

                {/* Location */}

                <div className="mt-8 flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-purple-400/30 bg-purple-500/10 text-purple-300">
                    <MapPinIcon />
                  </div>

                  <div>
                    <p className="font-semibold text-white">
                      Location
                    </p>

                    <p className="mt-1 text-sm text-gray-400">
                      Tamil Nadu, India
                    </p>
                  </div>
                </div>

                {/* Contact details */}

                <div className="mt-6 space-y-4">
                  {contactInfo.map((contact) => (
                    <a
                      key={contact.title}
                      href={contact.href}
                      target={
                        contact.icon === "mail" ? undefined : "_blank"
                      }
                      rel={
                        contact.icon === "mail"
                          ? undefined
                          : "noopener noreferrer"
                      }
                      className="group flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.03] p-4 transition duration-300 hover:-translate-y-1 hover:border-purple-400/40 hover:bg-purple-500/10"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-pink-500/20 via-purple-500/20 to-blue-500/20 text-purple-300 transition duration-300 group-hover:text-white">
                        <ContactIcon type={contact.icon} />
                      </div>

                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-white">
                          {contact.title}
                        </p>

                        <p className="mt-1 truncate text-xs text-gray-400 sm:text-sm">
                          {contact.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT CONTACT FORM ================= */}

          <div className="lg:col-span-3">

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-md sm:p-8">

              {/* Glow */}

              <div className="pointer-events-none absolute -bottom-32 -right-20 h-64 w-64 rounded-full bg-blue-500/15 blur-[100px]" />

              <form
                action="https://formsubmit.co/dharancse12@gmail.com"
                method="POST"
                className="relative z-10 space-y-6"
              >

                {/* FormSubmit settings */}

                <input
                  type="hidden"
                  name="_subject"
                  value="New Portfolio Contact Message"
                />

                <input
                  type="hidden"
                  name="_captcha"
                  value="false"
                />

                <input
                  type="hidden"
                  name="_template"
                  value="table"
                />

                {/* Name + Email */}

                <div className="grid gap-6 sm:grid-cols-2">

                  {/* Name */}

                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-gray-300"
                    >
                      Your Name
                    </label>

                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      placeholder="Enter your name"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-purple-400 focus:bg-white/[0.08] focus:ring-2 focus:ring-purple-500/20"
                    />
                  </div>

                  {/* Email */}

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-gray-300"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-purple-400 focus:bg-white/[0.08] focus:ring-2 focus:ring-purple-500/20"
                    />
                  </div>
                </div>

                {/* Subject */}

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    required
                    placeholder="What would you like to discuss?"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-purple-400 focus:bg-white/[0.08] focus:ring-2 focus:ring-purple-500/20"
                  />
                </div>

                {/* Message */}

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    required
                    placeholder="Write your message here..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-purple-400 focus:bg-white/[0.08] focus:ring-2 focus:ring-purple-500/20"
                  />
                </div>

                {/* Submit Button */}

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-3 rounded-xl bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 px-6 py-4 font-semibold text-white shadow-lg shadow-purple-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-purple-500/40"
                >
                  Send Message

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    <SendIcon />
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM MESSAGE ================= */}

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            I'm looking forward to hearing from you.
          </p>

          <a
            href="#home"
            className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-purple-400 transition hover:text-pink-400"
          >
            Back to Home
            <ArrowRightIcon />
          </a>
        </div>
      </div>

      {/* ================= NEON WAVE ================= */}

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
        <div className="absolute -bottom-16 left-[-10%] h-32 w-[120%] -rotate-3 rounded-[50%] border-4 border-pink-500/50 blur-[1px]" />

        <div className="absolute -bottom-20 left-[-10%] h-32 w-[120%] -rotate-3 rounded-[50%] border-2 border-blue-500/50" />
      </div>
    </section>
    </>
  );
}

export default Contact;