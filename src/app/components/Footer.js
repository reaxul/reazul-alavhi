import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Globe,
  Facebook
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-zinc-800 py-8 px-4 text-center text-sm text-gray-400 bg-black">
      <div className="mb-4 flex justify-center gap-6">
        <a
          href="https://github.com/reaxul"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition"
          aria-label="GitHub"
        >
          <Github size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/reazul-alavhi/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="https://x.com/ReaxulThoughts"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition"
          aria-label="Twitter"
        >
          <Twitter size={20} />
        </a>
        <a
          href="https://www.facebook.com/Reaxul.Alavhi/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition"
          aria-label="Website"
        >
          <Facebook size={20} />
        </a>
        <a
          href="mailto:reazul.alavhi@gmail.com"
          className="text-gray-400 hover:text-white transition"
          aria-label="Email"
        >
          <Mail size={20} />
        </a>
      </div>

      <p className="text-xs text-zinc-500 dark:text-zinc-400">
        &copy; {new Date().getFullYear()} Reazul Alavhi. All rights reserved.
      </p>
    </footer>
  );
}
