import React from "react";
import Header from "./Header";
const internships = [
  {
    company: "Coder One",
    role: "Full Stack Web Development Intern",
    location: "Remote",
    icon: "💻",

    description:
      "Worked on a food-ordering platform and developed full-stack features using Node.js, Express.js, React.js and MongoDB.",

    technologies: [
      "Node.js",
      "Express.js",
      "React.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "RBAC",
      "Axios",
    ],

    points: [
      "Designed and developed RESTful APIs for user registration, authentication, menu management, and order processing.",
      "Implemented JWT-based authentication and role-based access control using custom Express middleware.",
      "Modelled MongoDB collections for users, products, and orders using Mongoose.",
      "Applied indexed queries to improve database query performance.",
      "Built React.js frontend interfaces consuming Node.js and Express.js APIs through Axios.",
    ],
  },

  {
    company: "Nurture Info Tech",
    role: "Full Stack Web Development Intern",
    location: "Remote / Erode",
    icon: "🚀",

    description:
      "Worked on an online Library Management System and developed REST APIs, CRUD operations, and responsive frontend interfaces.",

    technologies: [
      "Express.js",
      "JavaScript",
      "HTML",
      "CSS",
      "Bootstrap",
      "REST API",
      "Postman",
    ],

    points: [
      "Developed Express.js REST API endpoints for an online Library Management System.",
      "Implemented book CRUD operations, member management, and borrowing records.",
      "Validated request payloads and tested API endpoints using Postman.",
      "Built responsive frontend interfaces using HTML, CSS, JavaScript, and Bootstrap.",
    ],
  },
];

function Internship() {
  return (
    <>
       <Header />
    <div className="relative min-h-screen overflow-hidden bg-slate-950 px-5 py-20 text-white sm:px-8 lg:px-12">
      
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Cyan Glow */}
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />

        {/* Purple Glow */}
        <div className="absolute -right-40 top-40 h-125 w-125 rounded-full bg-purple-600/20 blur-3xl" />

        {/* Pink Glow */}
        <div className="absolute -bottom-50 left-1/3 h-125 w-125 rounded-full bg-pink-600/20 blur-3xl" />

        {/* Decorative waves */}
        <svg
          className="absolute inset-0 h-full w-full opacity-20"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
        >
          <path
            d="M0 220 C300 50 450 450 750 250 C1050 50 1200 350 1440 150"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />

          <path
            d="M0 380 C300 220 500 550 800 350 C1050 150 1250 500 1440 300"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />

          <path
            d="M0 650 C300 500 500 800 750 600 C1050 400 1200 700 1440 550"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>

        {/* Small decorative circles */}
        <div className="absolute left-[15%] top-[20%] h-2 w-2 rounded-full bg-cyan-400" />
        <div className="absolute left-[75%] top-[30%] h-2 w-2 rounded-full bg-purple-400" />
        <div className="absolute left-[40%] top-[70%] h-2 w-2 rounded-full bg-pink-400" />

      </div>


      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <main className="relative z-10 mx-auto max-w-6xl">

        {/* =================================================
            HEADER
        ================================================== */}

        <section className="mb-16 text-center">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            My Experience
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Intern
            <span className="text-cyan-400">ships</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Hands-on experience building full-stack applications,
            REST APIs, authentication systems, databases, and responsive
            user interfaces.
          </p>

          {/* Small line */}
          <div className="mx-auto mt-8 h-px w-24 bg-linear-to-r from-transparent via-cyan-400 to-transparent" />

        </section>


        {/* =================================================
            TIMELINE
        ================================================== */}

        <section className="relative">

          {/* Vertical timeline line */}
          <div className="absolute left-5 top-0 hidden h-full w-px bg-linear-to-b from-cyan-400 via-purple-500 to-pink-500 md:block" />

          <div className="space-y-10">

            {internships.map((internship) => (
              <article
                key={internship.company}
                className="relative md:pl-16"
              >

                {/* Timeline Circle */}
                <div className="absolute left-0 top-8 hidden h-10 w-10 items-center justify-center rounded-full border border-cyan-400/40 bg-slate-900 text-lg shadow-lg shadow-cyan-500/20 md:flex">
                  {internship.icon}
                </div>


                {/* =================================================
                    INTERNSHIP CARD
                ================================================== */}

                <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/6 p-6 shadow-2xl backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/9 sm:p-8">

                  {/* Card glow */}
                  <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-400/5 blur-3xl transition duration-500 group-hover:bg-cyan-400/10" />


                  {/* =================================================
                      COMPANY HEADER
                  ================================================== */}

                  <div className="relative flex flex-col justify-between gap-6 sm:flex-row">

                    <div>

                      {/* Mobile icon */}
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl md:hidden">
                        {internship.icon}
                      </div>

                      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                        {internship.company}
                      </h2>

                      <p className="mt-2 font-medium text-cyan-400">
                        {internship.role}
                      </p>

                    </div>


                    {/* Location */}
                    <div className="flex h-fit flex-wrap gap-2">

                      <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-slate-300">
                        📍 {internship.location}
                      </span>

                      <span className="rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-xs font-medium text-purple-300">
                        Internship
                      </span>

                    </div>

                  </div>


                  {/* =================================================
                      DESCRIPTION
                  ================================================== */}

                  <p className="relative mt-6 max-w-4xl leading-7 text-slate-400">
                    {internship.description}
                  </p>


                  {/* =================================================
                      TECHNOLOGIES
                  ================================================== */}

                  <div className="relative mt-7">

                    <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Technologies
                    </h3>

                    <div className="flex flex-wrap gap-2">

                      {internship.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-lg border border-white/5 bg-slate-900/70 px-3 py-1.5 text-xs font-medium text-slate-300 transition duration-200 hover:border-cyan-400/20 hover:bg-cyan-400/10 hover:text-cyan-300"
                        >
                          {technology}
                        </span>
                      ))}

                    </div>

                  </div>


                  {/* =================================================
                      RESPONSIBILITIES
                  ================================================== */}

                  <div className="relative mt-8 border-t border-white/10 pt-7">

                    <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      What I worked on
                    </h3>

                    <ul className="space-y-4">

                      {internship.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-3 text-sm leading-6 text-slate-400"
                        >

                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400" />

                          <span>{point}</span>

                        </li>
                      ))}

                    </ul>

                  </div>


                  {/* =================================================
                      BOTTOM ACCENT
                  ================================================== */}

                  <div className="mt-8 h-px w-full bg-linear-to-r from-cyan-400/40 via-purple-500/20 to-transparent" />

                </div>

              </article>
            ))}

          </div>

        </section>


        {/* =================================================
            BOTTOM MESSAGE
        ================================================== */}

        <section className="mt-20 text-center">

          <p className="text-sm text-slate-500">
            Always learning. Always building.
          </p>

          <div className="mt-4 flex justify-center gap-2">

            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
            <span className="h-1.5 w-1.5 rounded-full bg-pink-400" />

          </div>

        </section>

      </main>

    </div>
    </>
  );
}

export default Internship;