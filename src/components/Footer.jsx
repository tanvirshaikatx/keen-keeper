import facebook from "../assets/facebook.png";
import youtube from "../assets/video.png";
import twitter from "../assets/twitter.png";

const Footer = () => {
  return (
    <footer className="bg-[#254f3f] text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12 text-center">

        {/* Logo */}
        <h1 className="text-3xl font-bold">KeenKeeper</h1>

        {/* Subtitle */}
        <p className="text-sm text-gray-200 mt-3 max-w-xl mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and nurture
          the relationships that matter most.
        </p>

        {/* Social */}
        <h3 className="mt-6 text-sm font-medium">Social Links</h3>

        <div className="flex justify-center gap-4 mt-3">
          
          <div className="bg-white p-2 rounded-full hover:scale-110 transition">
            <img src={youtube} alt="youtube" className="w-5 h-5" />
          </div>

          <div className="bg-white p-2 rounded-full hover:scale-110 transition">
            <img src={facebook} alt="facebook" className="w-5 h-5" />
          </div>

          <div className="bg-white p-2 rounded-full hover:scale-110 transition">
            <img src={twitter} alt="twitter" className="w-5 h-5" />
          </div>

        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-500/30 py-4 px-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-300 max-w-6xl mx-auto">
        <p>© 2026 KeenKeeper. All rights reserved.</p>

        <div className="flex gap-4 mt-2 md:mt-0">
          <span className="cursor-pointer hover:underline">Privacy Policy</span>
          <span className="cursor-pointer hover:underline">Terms of Service</span>
          <span className="cursor-pointer hover:underline">Cookies</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;