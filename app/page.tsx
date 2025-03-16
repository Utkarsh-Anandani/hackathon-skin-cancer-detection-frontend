import AppBar from "@/components/AppBar";

export default function Home() {
  return (
    <main>
      <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
        {/* Header */}
        <AppBar />

        {/* Hero Section */}
        <section className="bg-slate-700 text-white min-h-screen">
          <div className="container h-screen mx-auto px-4 flex flex-row md:flex-row items-center">
            <div className="md:w-3/5 mb-10 md:mb-0">
              <h2 className="text-6xl font-bold mb-4">
                Healthcare Access for Rural Communities
              </h2>
              <p className="text-slate-200 text-2xl mb-14">
                Connect with doctors, access medical services, get expert
                consultaions and advices, and manage healthcare needs—even in
                remote areas with limited connectivity.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="#download"
                  className="bg-blue-500 hover:bg-blue-600 text-lg text-white font-bold py-5 px-8 rounded-lg transition text-center"
                >
                  Download Now
                </a>
                <a
                  href="#how-it-works"
                  className="bg-white hover:bg-slate-200 text-lg text-slate-800 font-bold py-5 px-8 rounded-lg transition text-center"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="/hero_section.jpg"
                alt="RuralMed App"
                className="mx-auto w-[40vw] rounded-lg shadow-xl"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16">
              Designed for Rural Healthcare Needs
            </h2>

            <div className="grid md:grid-cols-3 gap-10">
              {/* Feature 1 */}
              <div className="bg-slate-50 p-6 rounded-lg shadow-md">
                <div className="bg-slate-200 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-slate-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Works Offline</h3>
                <p className="text-slate-600">
                  Access medical information, symptom checking, and first aid
                  guides even without internet connection.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-slate-50 p-6 rounded-lg shadow-md">
                <div className="bg-slate-200 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-slate-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Telemedicine</h3>
                <p className="text-slate-600">
                  Connect with doctors via text, voice, or low-bandwidth video
                  calls designed for rural connectivity.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-slate-50 p-6 rounded-lg shadow-md">
                <div className="bg-slate-200 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-slate-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Health Records</h3>
                <p className="text-slate-600">
                  Store and manage medical records locally on your device, with
                  secure sharing when connectivity is available.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 bg-slate-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16">
              How RuralMed Works
            </h2>

            <div className="flex flex-col md:flex-row">
              {/* Step 1 */}
              <div className="flex-1 mb-10 md:mb-0 flex flex-col items-center">
                <div className="bg-slate-700 text-white rounded-full w-12 h-12 flex items-center justify-center mb-6">
                  <span className="font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">
                  Download the App
                </h3>
                <p className="text-slate-600 text-center px-6">
                  Available for Android and iOS, optimized for low storage and
                  bandwidth.
                </p>
              </div>

              {/* Step 2 */}
              <div className="flex-1 mb-10 md:mb-0 flex flex-col items-center">
                <div className="bg-slate-700 text-white rounded-full w-12 h-12 flex items-center justify-center mb-6">
                  <span className="font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">
                  Create Your Profile
                </h3>
                <p className="text-slate-600 text-center px-6">
                  Set up your health profile and add family members to manage
                  everyone's care.
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex-1 mb-10 md:mb-0 flex flex-col items-center">
                <div className="bg-slate-700 text-white rounded-full w-12 h-12 flex items-center justify-center mb-6">
                  <span className="font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">
                  Connect When Possible
                </h3>
                <p className="text-slate-600 text-center px-6">
                  Sync with medical providers during connectivity windows to
                  update records and access care.
                </p>
              </div>

              {/* Step 4 */}
              <div className="flex-1 flex flex-col items-center">
                <div className="bg-slate-700 text-white rounded-full w-12 h-12 flex items-center justify-center mb-6">
                  <span className="font-bold">4</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">
                  Get Care Anywhere
                </h3>
                <p className="text-slate-600 text-center px-6">
                  Access medical guidance, medication reminders, and emergency
                  protocols anytime.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
