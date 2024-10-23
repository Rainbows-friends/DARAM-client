import PropTypes from "prop-types";

function Layout({ children }) {
  return (
    <>
      {/* 헤더 들어갈 자리 */}
      {children}
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
