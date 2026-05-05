export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 px-5 py-10">
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <p className="text-white font-bold text-base">Nate Libby</p>
        <p className="text-sm leading-relaxed">
          Licensed Insurance Professional &mdash; Serving Truck Drivers &amp;
          Owner-Operators
        </p>
        <hr className="border-gray-700 my-4" />
        <p className="text-xs leading-relaxed text-gray-500 max-w-2xl mx-auto">
          <strong className="text-gray-400">Disclaimer:</strong> This website
          is for informational purposes only and does not constitute financial,
          tax, or legal advice. Indexed Universal Life insurance products vary
          by carrier and policy. Results are not guaranteed. Past performance
          of any index does not guarantee future results. Speak with a licensed
          financial professional before making any financial decisions.{" "}
          <strong className="text-gray-400">
            This is not financial advice.
          </strong>
        </p>
        <p className="text-xs text-gray-600 mt-4">
          &copy; {new Date().getFullYear()} Nate Libby. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
