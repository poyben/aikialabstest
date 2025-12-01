import Link from 'next/link';
import Image from 'next/image';

export default function CaseStudies() {
  const studies = [
    {
      category: 'Education',
      title: 'Student placement optimization across 24 proficiency levels with 95% satisfaction.',
    },
    {
      category: 'Hospitality',
      title: 'AI inventory management that reduced food waste by 60%.',
    },
    {
      category: 'Operations',
      title: 'Booking system that eliminated 80% of scheduling conflicts.',
    },
    {
      category: 'Career Services',
      title: 'Multilingual automation handling customer inquiries in three languages.',
    },
  ];

  return (
    <section id="case-studies" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">REAL IMPLEMENTATIONS</h2>
          <p className="text-lg text-zinc-600">
            AI projects you'll learn from
          </p>
          <p className="text-zinc-700 mt-2">
            These aren't case studies from other companies—they're active AI implementations across my businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {studies.map((study, index) => {
            const imageMap = {
              'Education': '/estudiantes.webp',
              'Hospitality': '/hospitality.webp',
              'Operations': '/operations.webp',
              'Career Services': '/career_services.webp',
            };
            
            return (
              <div
                key={index}
                className="border border-zinc-100 rounded-xl p-6 shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-150"
              >
                {imageMap[study.category] && (
                  <div className="mb-8">
                    <Image
                      src={imageMap[study.category]}
                      alt={`${study.category} case study`}
                      width={400}
                      height={200}
                      className="w-full h-auto rounded-lg object-cover scale-110"
                    />
                  </div>
                )}
                <div className="text-xl font-bold text-black mb-3 uppercase tracking-wide text-center italic underline">
                  {study.category}
                </div>
                <p className="text-black text-lg">{study.title}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/case-studies"
            className="inline-block px-6 py-3 bg-[#2563eb] text-white rounded-md font-medium hover:opacity-90 transition-opacity"
          >
            View All Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
}

