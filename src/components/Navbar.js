export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-4 text-white z-50 backdrop-blur-md bg-black/40 backdrop-blur-md">
      <h1 className="font-semibold text-lg tracking-widest">
        NOIR
      </h1>


      <ul className="flex gap-8 text-sm">
        <li className="cursor-pointer hover:text-gray-300">Work</li>
        <li className="cursor-pointer hover:text-gray-300">About</li>
        <li className="cursor-pointer hover:text-gray-300">Contact</li>
      </ul>
    </nav>
  );
}