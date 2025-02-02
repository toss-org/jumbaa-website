export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="bg-[#1e9577] mt-12 border-t border-gray-200 pt-8">
        <p className="text-center text-md font-semibold text-gray-900">
          © {currentYear} Jumbaa. By TOSS
        </p>
      </div>
    </footer>
  );
}
