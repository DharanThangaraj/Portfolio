import React from "react";
import Header from "./Header";

const projects = [
  {
    title: "Finance Management System",
    subtitle: "Financial Tracking & Analytics",

    description:
      "A full-stack finance management application with REST APIs, financial reporting, authentication, and a dashboard for tracking collections, pending dues, and overdue members.",

    technologies: [
      "Node.js",
      "Express.js",
      "React.js",
      "MongoDB",
      "JWT",
      "RBAC",
    ],

    features: [
      "REST API backend using Express.js",
      "MongoDB schemas for members, payments, and dues",
      "Aggregation pipelines for financial reporting",
      "JWT authentication and role-based access control",
      "Dashboard for collections, pending dues, and overdue members",
    ],

    icon: "💰",

    // Replace this with your actual GitHub repository
    github:
      "https://github.com/DharanThangaraj/Finance-Management",
  },

  {
    title: "Campus Reservation System",
    subtitle: "Campus Booking Platform",

    description:
      "A full-stack campus reservation platform designed to manage bookings with conflict detection, role-based permissions, and dedicated dashboards for different users.",

    technologies: [
      "Node.js",
      "Express.js",
      "React.js",
      "MongoDB",
      "JWT",
      "RBAC",
    ],

    features: [
      "Booking management APIs",
      "Create, approve, reject and cancel reservations",
      "Conflict-detection logic",
      "Role-based permissions",
      "JWT authentication and RBAC",
      "Dedicated Student, Teacher and Admin dashboards",
    ],

    icon: "🏫",

    // Replace this with your actual GitHub repository
    github:
      "https://github.com/DharanThangaraj/campus-reservation",
  },
];

function Project() {
  return (
    <>
    <Header/>
    <div className="relative min-h-screen overflow-hidden bg-slate-950 px-5 py-20 text-white sm:px-8 lg:px-12">

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Cyan glow */}
        <div className="absolute -left-32 top-10 h-112.5 w-112.5 rounded-full bg-cyan-500/20 blur-3xl" />

        {/* Purple glow */}
        <div className="absolute -right-45 top-20 h-137.5 w-137.5 rounded-full bg-purple-600/20 blur-3xl" />

        {/* Pink glow */}
        <div className="absolute -bottom-62.5 left-1/4 h-137.5 w-137.5 rounded-full bg-pink-500/20 blur-3xl" />

        {/* Decorative waves */}
        <svg
          className="absolute inset-0 h-full w-full opacity-20"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
        >
          <path
            d="M0 180 C250 350 450 50 720 250 C980 450 1160 100 1440 280"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />

          <path
            d="M0 350 C280 500 500 180 760 400 C1000 600 1200 300 1440 420"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />

          <path
            d="M0 650 C300 500 450 800 750 600 C1050 400 1200 700 1440 550"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>

        {/* Decorative dots */}
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

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-purple-400">
            My Work
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Featured{" "}
            <span className="text-cyan-400">
              Projects
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            A collection of full-stack applications built using modern
            technologies with a focus on backend development, scalable APIs,
            authentication, and responsive interfaces.
          </p>

          {/* Heading line */}
          <div className="mx-auto mt-8 h-px w-24 bg-linear-to-r from-transparent via-cyan-400 to-transparent" />

        </section>


        {/* =================================================
            PROJECT GRID
        ================================================== */}

        <section className="grid gap-8 md:grid-cols-2">

          {projects.map((project) => (

            <article
              key={project.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/6 p-7 shadow-2xl backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:border-cyan-400/40 hover:bg-white/9 sm:p-9"
            >

              {/* Card glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl transition duration-500 group-hover:bg-cyan-400/20" />


              {/* =================================================
                  ICON + PROJECT TYPE
              ================================================== */}

              <div className="relative mb-7 flex items-center justify-between">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-linear-to-br from-cyan-400/20 to-purple-500/20 text-3xl">
                  {project.icon}
                </div>

                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-medium text-cyan-300">
                  Full Stack
                </span>

              </div>


              {/* =================================================
                  TITLE
              ================================================== */}

              <h2 className="relative text-2xl font-bold tracking-tight sm:text-3xl">
                {project.title}
              </h2>

              <p className="relative mt-2 text-sm font-medium text-cyan-400">
                {project.subtitle}
              </p>


              {/* =================================================
                  DESCRIPTION
              ================================================== */}

              <p className="relative mt-5 text-sm leading-7 text-slate-400">
                {project.description}
              </p>


              {/* =================================================
                  TECHNOLOGIES
              ================================================== */}

              <div className="relative mt-6 flex flex-wrap gap-2">

                {project.technologies.map((technology) => (

                  <span
                    key={technology}
                    className="rounded-lg border border-white/5 bg-slate-900/70 px-3 py-1.5 text-xs font-medium text-slate-300 transition duration-200 hover:border-cyan-400/20 hover:bg-cyan-400/10 hover:text-cyan-300"
                  >
                    {technology}
                  </span>

                ))}

              </div>


              {/* =================================================
                  FEATURES
              ================================================== */}

              <div className="relative mt-7 border-t border-white/10 pt-6">

                <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Key Features
                </h3>

                <ul className="space-y-3">

                  {project.features.map((feature) => (

                    <li
                      key={feature}
                      className="flex gap-3 text-sm leading-6 text-slate-400"
                    >

                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400" />

                      <span>
                        {feature}
                      </span>

                    </li>

                  ))}

                </ul>

              </div>


              {/* =================================================
                  GITHUB BUTTON
              ================================================== */}

              <div className="relative mt-8">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20"
                >

                  {/* GitHub SVG */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.48.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.76.84 1.23 1.91 1.23 3.22 0 4.6-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
                  </svg>

                  View on GitHub

                </a>

              </div>


              {/* Bottom accent */}
              <div className="mt-8 h-px w-full bg-linear-to-r from-cyan-400/40 via-purple-500/20 to-transparent" />

            </article>

          ))}

        </section>


        {/* =================================================
            BOTTOM MESSAGE
        ================================================== */}

        <section className="mt-20 text-center">

          <p className="text-sm text-slate-500">
            Turning ideas into working applications.
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

export default Project;