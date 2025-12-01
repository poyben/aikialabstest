import Link from 'next/link';
import Image from 'next/image';

export default function Courses() {
  return (
    <section id="courses" className="py-20 px-6 bg-zinc-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Two Practical AI Programs</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Course 1 */}
          <div className="bg-white border border-zinc-100 rounded-xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-150">
            <div className="mb-4">
              <Image
                src="/tenweb_media_rs0jpcac5.webp"
                alt="AI-First Mindset Course for European Professionals"
                width={600}
                height={300}
                className="w-full h-auto rounded-lg object-cover mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-black">For European Professionals</h3>
              <p className="text-zinc-600 mb-4">
                5-day intensive in Tenerife • Voice-first workflows • Business automation • GDPR-compliant implementations
              </p>
            </div>
            <div className="flex items-center justify-between mb-6">
              <span className="text-2xl font-bold text-black">€790</span>
              <span className="text-sm text-zinc-600">Bildungsurlaub eligible</span>
            </div>
            <Link
              href="/courses"
              className="block w-full text-center px-6 py-3 bg-[#2563eb] text-white rounded-md font-medium hover:opacity-90 transition-opacity"
            >
              Learn More
            </Link>
          </div>

          {/* Course 2 */}
          <div className="bg-white border border-zinc-100 rounded-xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-150">
            <div className="mb-4">
              <Image
                src="/tenweb_media_r3lv9mv0x.webp"
                alt="AI-First Mindset Course for Educators"
                width={600}
                height={300}
                className="w-full h-auto rounded-lg object-cover mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-black">For Educators</h3>
              <p className="text-zinc-600 mb-4">
                5-day professional development • Teaching enhancement • Administrative automation • Student engagement
              </p>
            </div>
            <div className="flex items-center justify-between mb-6">
              <span className="text-2xl font-bold text-black">€490</span>
              <span className="text-sm text-zinc-600">Erasmus+ funding eligible</span>
            </div>
            <Link
              href="/courses"
              className="block w-full text-center px-6 py-3 bg-[#2563eb] text-white rounded-md font-medium hover:opacity-90 transition-opacity"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

