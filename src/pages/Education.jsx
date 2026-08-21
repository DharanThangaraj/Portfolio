import Header from "./Header";
const educationData = [
  {
    year: "2022 - 2026",
    degree: "Bachelor of Engineering",
    field: "Computer Science and Engineering",
    institution: "KSR Institute for Engineering and Technology",
    location: "Tamil Nadu, India",
    description:
      "Focused on software development, web technologies, database management, data structures, algorithms, and modern application development.",
    grade: "CGPA: 7.51 / 10",
  },
  {
    year: "2020 - 2022",
    degree: "Higher Secondary Education",
    field: "Computer Science",
    institution: "Jayam Vidhya Bhavan Matric Higher Secondary School",
    location: "Tamil Nadu, India",
    description:
      "Built a strong foundation in computer science, mathematics, programming concepts, and problem solving.",
    grade: "Percentage: 76.8%",
  },
  {
    year: "2019 - 2020",
    degree: "Secondary Education",
    field: "General Education",
    institution: "Jayam Vidhya Bhavan Matric Higher Secondary School",
    location: "Tamil Nadu, India",
    description:
      "Completed secondary education with a focus on mathematics, science, and fundamental academic skills.",
    grade: "Percentage: 81.6%",
  },
];

function GraduationCapIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-7 w-7"
    >
      <path d="M22 10 12 5 2 10l10 5 10-5Z" />
      <path d="M6 12v5c3 2 9 2 12 0v-5" />
      <path d="M22 10v6" />
    </svg>
  );
}

function BookIcon() {
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
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
    </svg>
  );
}

function Education() {
  return (
    <>
    <Header />
    <section
      id="education"
      className="relative overflow-hidden bg-[#05052b] px-5 py-24 text-white sm:px-8 lg:px-12"
    >
      {/* ================= BACKGROUND GLOWS ================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-purple-600/20 blur-[130px]" />

        <div className="absolute left-1/2 top-1/3 h-80 w-80 rounded-full bg-blue-600/15 blur-[130px]" />

        <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-pink-600/15 blur-[130px]" />
      </div>

      {/* ================= DECORATIVE DOTS ================= */}

      <div className="absolute left-[8%] top-[18%] h-2 w-2 rounded-full bg-blue-400 shadow-lg shadow-blue-400" />

      <div className="absolute right-[12%] top-[25%] h-3 w-3 rounded-full bg-purple-500 shadow-lg shadow-purple-500" />

      <div className="absolute bottom-[15%] left-[15%] h-2 w-2 rounded-full bg-pink-400 shadow-lg shadow-pink-400" />

      {/* ================= MAIN CONTAINER ================= */}

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* ================= HEADER ================= */}

        <div className="mx-auto mb-16 max-w-3xl text-center">

          {/* Small heading */}

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-300 backdrop-blur-sm">
            <GraduationCapIcon />
            <span>My Academic Journey</span>
          </div>

          {/* Main heading */}

          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            My{" "}
            <span className="bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Education
            </span>
          </h2>

          {/* Gradient line */}

          <div className="mx-auto mt-6 h-1 w-32 rounded-full bg-linear-to-r from-pink-500 via-purple-500 to-blue-500" />

          {/* Description */}

          <p className="mt-6 text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
            My educational journey has helped me build a strong foundation in
            computer science, programming, problem solving, and modern
            technology.
          </p>
        </div>

        {/* ================= EDUCATION TIMELINE ================= */}

        <div className="relative">

          {/* Vertical timeline */}

          <div className="absolute left-5 top-0 hidden h-full w-px bg-linear-to-b from-pink-500 via-purple-500 to-blue-500 md:block" />

          <div className="space-y-10">
            {educationData.map((education, index) => (
              <div
                key={`${education.degree}-${index}`}
                className="relative md:pl-16"
              >
                {/* Timeline dot */}

                <div className="absolute left-2.25 top-8 hidden h-5 w-5 rounded-full border-4 border-[#05052b] bg-linear-to-r from-pink-500 to-blue-500 shadow-lg shadow-purple-500/50 md:block" />

                {/* Education Card */}

                <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition duration-500 hover:-translate-y-1 hover:border-purple-400/50 hover:bg-white/[0.07] hover:shadow-2xl hover:shadow-purple-500/10 sm:p-8">

                  {/* Card glow */}

                  <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-purple-500/10 blur-[70px] transition duration-500 group-hover:bg-purple-500/20" />

                  {/* Year */}

                  <div className="mb-5 inline-flex rounded-full border border-pink-400/30 bg-pink-500/10 px-4 py-1.5 text-sm font-semibold text-pink-300">
                    {education.year}
                  </div>

                  <div className="relative z-10">

                    {/* Degree */}

                    <h3 className="text-2xl font-bold text-white sm:text-3xl">
                      {education.degree}
                    </h3>

                    {/* Field */}

                    <p className="mt-2 text-lg font-semibold text-purple-300">
                      {education.field}
                    </p>

                    {/* Institution */}

                    <div className="mt-5 flex flex-col gap-2 text-sm text-gray-300 sm:flex-row sm:items-center sm:gap-4">
                      <span className="flex items-center gap-2">
                        <BookIcon />
                        {education.institution}
                      </span>

                      <span className="hidden text-gray-600 sm:block">
                        •
                      </span>

                      <span>{education.location}</span>
                    </div>

                    {/* Description */}

                    <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-400 sm:text-base">
                      {education.description}
                    </p>

                    {/* Grade */}

                    <div className="mt-6 inline-flex rounded-lg border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
                      {education.grade}
                    </div>
                  </div>

                  {/* Bottom gradient */}

                  <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 transition-all duration-500 group-hover:w-full" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= BOTTOM SECTION ================= */}

        <div className="mt-16 grid gap-6 sm:grid-cols-3">

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md transition duration-300 hover:border-purple-400/40 hover:bg-white/[0.07]">
            <div className="text-3xl font-bold text-white">01</div>
            <p className="mt-2 text-sm text-gray-400">
              Degree
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md transition duration-300 hover:border-purple-400/40 hover:bg-white/[0.07]">
            <div className="text-3xl font-bold text-white">CS</div>
            <p className="mt-2 text-sm text-gray-400">
              Field of Study
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md transition duration-300 hover:border-purple-400/40 hover:bg-white/[0.07]">
            <div className="text-3xl font-bold text-white">∞</div>
            <p className="mt-2 text-sm text-gray-400">
              Always Learning
            </p>
          </div>
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

export default Education;