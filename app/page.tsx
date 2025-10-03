import AppBar from "@/components/AppBar";
import {
  Heart,
  Shield,
  Wifi,
  Activity,
  ChevronRight,
  CircleCheck as CheckCircle,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <AppBar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <CheckCircle className="w-4 h-4" />
                Trusted by Communities
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Healthcare Access for Rural Communities
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed">
                Connect with doctors, access medical services, get expert
                consultations and advice, and manage healthcare needs—even in
                remote areas with limited connectivity.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a
                  href="/sign-in"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition font-semibold text-center inline-flex items-center justify-center gap-2"
                >
                  Get Started
                  <ChevronRight className="w-5 h-5" />
                </a>
                <a
                  href="#how-it-works"
                  className="bg-white text-slate-900 px-8 py-4 rounded-lg hover:bg-slate-50 transition font-semibold border-2 border-slate-200 text-center"
                >
                  Learn More
                </a>
              </div>

              {/* Stats */}
              {/* <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-8 border-t border-slate-200">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-slate-900">
                    10K+
                  </div>
                  <div className="text-sm text-slate-600 mt-1">
                    Active Users
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-slate-900">
                    500+
                  </div>
                  <div className="text-sm text-slate-600 mt-1">Doctors</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-slate-900">
                    24/7
                  </div>
                  <div className="text-sm text-slate-600 mt-1">Support</div>
                </div>
              </div> */}
            </div>

            {/* Right Content - Dashboard Preview */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 rounded-full p-2">
                      <Heart className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold text-lg">
                        Health Dashboard
                      </div>
                      <div className="text-blue-100 text-sm">
                        Your medical hub
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg">
                    <div className="text-sm font-semibold text-blue-900 mb-1">
                      Next Appointment
                    </div>
                    <div className="text-sm text-blue-700">
                      Dr. Smith - Tomorrow 10:00 AM
                    </div>
                  </div>

                  <div className="bg-green-50 border border-green-100 p-4 rounded-lg">
                    <div className="text-sm font-semibold text-green-900 mb-1">
                      Schedule Test
                    </div>
                    <div className="text-sm text-green-700">
                      Skin Cancer Diagnosis
                    </div>
                  </div>

                  <div className="bg-cyan-50 border border-cyan-100 p-4 rounded-lg">
                    <div className="text-sm font-semibold text-cyan-900 mb-2">
                      Test Accuracy
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 bg-slate-200 rounded-full h-2.5">
                        <div
                          className="bg-cyan-600 h-2.5 rounded-full"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                      <span className="text-sm font-bold text-cyan-900">
                        75%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">
              Features
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Designed for Rural Healthcare Needs
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Everything you need to access quality healthcare, no matter where
              you are
            </p>
          </div>

          {/* Main Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white border border-slate-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-lg transition">
              <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Wifi className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Works Offline
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Access medical tests, symptom checking, and consultations even
                without internet connection.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 hover:border-green-300 hover:shadow-lg transition">
              <div className="bg-green-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Activity className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Telemedicine
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Connect with doctors via text, voice, or low-bandwidth video
                calls designed for rural connectivity.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 hover:border-cyan-300 hover:shadow-lg transition">
              <div className="bg-cyan-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-7 h-7 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Health Records
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Store and manage medical records locally on your device, with
                secure sharing when connectivity is available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">
              How It Works
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Get Started in Minutes
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Simple steps to connect you with quality healthcare
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                1
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Login to the App
                </h3>
                <p className="text-slate-600 text-sm">
                  Quick and secure login with your phone number
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                2
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Create Your Profile
                </h3>
                <p className="text-slate-600 text-sm">
                  Set up your health profile and add family members
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="bg-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                3
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Connect When Possible
                </h3>
                <p className="text-slate-600 text-sm">
                  Sync with medical providers during connectivity windows
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                4
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Get Care Anywhere
                </h3>
                <p className="text-slate-600 text-sm">
                  Access medical guidance and emergency protocols anytime
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div
            className="mt-16 p-8 md:p-12 text-center rounded-xl"
            style={{
              background:
                "radial-gradient(circle at top left, #1E3A8A, #3B82F6)",
            }}
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Rural Healthcare?
            </h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of families who trust Medxo for their healthcare
              needs
            </p>
            <a
              href="/sign-in"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition font-semibold"
            >
              Start Your Journey Today
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                <div className="bg-blue-600 rounded-lg p-1.5">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">Medxo</span>
              </div>
              <p className="text-slate-400">
                Healthcare for everyone, everywhere
              </p>
            </div>
            <div className="flex gap-8">
              <a href="#features" className="hover:text-white transition">
                Features
              </a>
              <a href="#how-it-works" className="hover:text-white transition">
                How It Works
              </a>
              <a href="/sign-in" className="hover:text-white transition">
                Login
              </a>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-500">
            &copy; 2025 Medxo. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
