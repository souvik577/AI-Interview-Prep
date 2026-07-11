const AuthLayout = ({ children, banner }) => {
  return (
    <section className="min-h-screen bg-slate-950">
      <div className="mx-auto flex min-h-screen max-w-7xl">

        {/* Left Side */}
        <div className="hidden w-1/2 lg:flex">
          {banner}
        </div>

        {/* Right Side */}
        <div className="flex w-full items-center justify-center px-6 py-16 lg:w-1/2">
          {children}
        </div>

      </div>
    </section>
  );
};

export default AuthLayout;