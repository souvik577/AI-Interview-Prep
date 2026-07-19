const Container = ({ children, className = "" }) => {
  return (
    <div className={`w-full px-1 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
};

export default Container;