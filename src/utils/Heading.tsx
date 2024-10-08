import PropTypes from "prop-types";

export const CustHeading2 = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return <h2 className="text-xl font-normal">{children}</h2>;
};
export const CustHeading3 = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return <h3 className="text-xl font-normal">{children}</h3>;
};
export const CustHeading4 = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return <h4 className="text-xl font-normal">{children}</h4>;
};
export const CustHeading5 = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return <h5 className="text-xl font-normal">{children}</h5>;
};

CustHeading2.propTypes = {
  children: PropTypes.any,
};
CustHeading3.propTypes = {
  children: PropTypes.any,
};
CustHeading4.propTypes = {
  children: PropTypes.any,
};
CustHeading5.propTypes = {
  children: PropTypes.any,
};
