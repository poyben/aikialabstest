import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-zinc-50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-zinc-100">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">About Frank</h2>
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-4 text-black">Your AI Guide</h3>
              <p className="text-lg text-zinc-700 mb-4 leading-relaxed">
                I'm <strong className="text-black">Frank Sellingsloh</strong>, obsessed with AI since day 5 of ChatGPT's release. My credential isn't early adoption—it's successful implementation across multiple real businesses.
              </p>
            </div>

            <div className="space-y-4 text-zinc-600 mb-6">
              <div className="bg-zinc-50 rounded-lg p-4 border-l-4 border-blue-600">
                <strong className="text-black block mb-1">Background:</strong> 
                <span>25+ years digital transformation • Erasmus+ coordinator since 2004 • CEO/Co-founder of 6+ companies</span>
              </div>
              <div className="bg-zinc-50 rounded-lg p-4 border-l-4 border-blue-600">
                <strong className="text-black block mb-1">Approach:</strong> 
                <span>I generate AI strategies and concepts, my team handles development. You learn both creative thinking and practical execution.</span>
              </div>
              <div className="bg-zinc-50 rounded-lg p-4 border-l-4 border-blue-600">
                <strong className="text-black block mb-1">Promise:</strong> 
                <span>Every strategy I teach has been tested in my own businesses.</span>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/about"
                className="inline-block px-6 py-3 bg-[#2563eb] text-white rounded-md font-medium shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-150"
              >
                Read My Full Story →
              </Link>
            </div>
          </div>
          
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-200 to-blue-400 rounded-xl opacity-20 blur-xl"></div>
              <Image
                src="/frank.png"
                alt="Frank Sellingsloh"
                width={500}
                height={600}
                className="relative w-full max-w-md h-auto rounded-xl object-cover shadow-2xl border-4 border-white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

