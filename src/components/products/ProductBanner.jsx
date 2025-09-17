import PropTypes from 'prop-types';

export default function ProductBanner({ image }) {
  return (
    <div className="w-full">
      <a href="https://co.mitienda.la/nuestratierra/categoria/11409/aretes" target="_blank" rel="noopener noreferrer">
      <img
        src={image}
        alt="Banner"
        className="w-full h-auto object-cover" />
        </a>
    </div>
  );
}

ProductBanner.propTypes = {
  image: PropTypes.string.isRequired,
};