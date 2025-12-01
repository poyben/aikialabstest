export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-black dark:bg-zinc-950 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in touch</h3>
            <div className="space-y-2 text-zinc-400">
              <div>
                <strong>Email:</strong>{' '}
                <a href="mailto:frank@aikialabs.com" className="hover:text-white">
                  frank@aikialabs.com
                </a>
              </div>
              <div>
                <strong>Location:</strong> Tenerife, Spain
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <div className="space-y-2 text-zinc-400">
              <a href="#" className="block hover:text-white">Terms and Conditions</a>
              <a href="#" className="block hover:text-white">Privacy Policy</a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow</h3>
            <div className="flex gap-4">
              <a href="#" className="text-zinc-400 hover:text-white">LinkedIn</a>
              <a href="#" className="text-zinc-400 hover:text-white">X (Twitter)</a>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8 text-center text-zinc-400">
          <p>© 2025 Aikia Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

