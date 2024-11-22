import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-center items-center space-x-6 text-sm text-gray-400">
          <Link 
            href="/termos" 
            className="hover:text-white transition-colors"
          >
            Termos de Serviço
          </Link>
          <span>•</span>
          <Link 
            href="/privacidade" 
            className="hover:text-white transition-colors"
          >
            Política de Privacidade
          </Link>
        </div>
      </div>
    </footer>
  );
}