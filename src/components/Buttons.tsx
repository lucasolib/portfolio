import PropTypes from 'prop-types';

function Buttons({ previous, next }:
{ previous: () => void, next: () => void }) {
  return (
    <div className="buttons">
      <button
        type="button"
        onClick={ previous }
        className="arrowButtonLeft"
      >
        <span className="arrow" />
        Anterior
      </button>
      <button
        type="button"
        onClick={ next }
        className="arrowButton"
      >
        Próximo
        <span className="arrow" />
      </button>
    </div>
  );
}

Buttons.propTypes = {
  previous: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
};

export default Buttons;
