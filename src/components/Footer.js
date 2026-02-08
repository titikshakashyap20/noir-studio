export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12 px-8 border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">

        <p className="text-sm">
          © {new Date().getFullYear()} NOIR Studio. All rights reserved.
        </p>

        <div className="flex gap-6 mt-4 md:mt-0 text-sm">
          <a href="#" className="hover:text-white transition">Instagram</a>
          <a href="#" className="hover:text-white transition">LinkedIn</a>
          <a href="#" className="hover:text-white transition">Contact</a>
        </div>

      </div>
    </footer>
  );
}