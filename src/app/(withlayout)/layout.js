import "../../app/globals.css";

const Layout = ({ children }) => {
  return (
    <div className="text-center">
      <h3 className="text-2xl font-semibold bg-yellow-400">Header</h3>
      {children}
      <h4 className="bg-red-400">Footer</h4>
    </div>
  );
};

export default Layout;
