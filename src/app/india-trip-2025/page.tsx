import Image from "next/image";

export default function IndiaTripPage() {
  const tripDetails = [
    {
      city: "Delhi",
      dates: "September 23 - October 7, 2025",
      duration: "15 days",
    },
    {
      city: "Mumbai",
      dates: "October 8-12, 2025",
      duration: "5 days",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Image
              src="/rafid-hoda.png"
              alt="Rafid Hoda"
              width={80}
              height={80}
              className="rounded-full object-cover"
              priority
            />
          </div>
          <h1 className="text-4xl font-bold mb-4">India Trip 2025</h1>
          <p className="text-xl text-gray-300 mb-6">
            I&apos;m visiting India for 3 weeks after 10 years. While I&apos;m there I&apos;d love to connect with people and hold live events.
          </p>
          <div className="inline-flex items-center space-x-2 bg-blue-600 px-4 py-2 rounded-full text-sm font-medium">
            <span>🇮🇳</span>
            <span>September 23 - October 12, 2025</span>
          </div>
        </div>

        {/* Trip Itinerary */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Where I&apos;ll Be</h2>
          <div className="space-y-4">
            {tripDetails.map((stop, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold">{stop.city}</h3>
                  <span className="text-sm text-gray-400">{stop.duration}</span>
                </div>
                <p className="text-blue-400 font-medium">{stop.dates}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What I'm Looking For */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Let&apos;s Connect!</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
              <h3 className="text-lg font-semibold mb-3 text-green-400">Speaking Opportunities</h3>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>• Developer meetups</li>
                <li>• University talks</li>
                <li>• Startup events</li>
                <li>• Community workshops</li>
              </ul>
            </div>
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
              <h3 className="text-lg font-semibold mb-3 text-purple-400">Meetups & Coffee</h3>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>• Local creators</li>
                <li>• Fellow entrepreneurs</li>
                <li>• Students interested in tech</li>
                <li>• Anyone building cool stuff</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Want to Meet Up?</h2>
          <p className="mb-6 text-blue-100">
            Send me a message if you&apos;d like to grab coffee, invite me to speak, or just chat about creating awesome things!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://x.com/rafidhoda"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
              </svg>
              DM on X
            </a>
            <a
              href="https://linkedin.com/in/rafidhoda"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
            <a
              href="https://wa.me/4746677978?text=Hi%20Rafid!%20I%20saw%20your%20India%20trip%20page%20and%20would%20love%20to%20connect!"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>

        {/* Back to Main Site */}
        <div className="text-center mt-8">
          <a
            href="/"
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            ← Back to rafidhoda.com
          </a>
        </div>
      </div>
    </div>
  );
} 