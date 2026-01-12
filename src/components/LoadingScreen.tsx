export function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-custom-dark flex items-center justify-center z-50">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-custom-light/20 border-t-blue-400 rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-custom-light text-sm">Loading...</p>
      </div>
    </div>
  );
}
