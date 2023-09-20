import PropTypes from 'prop-types';

function Buttons({ previousSkill, nextSkill }:
{ previousSkill: () => void, nextSkill: () => void }) {
  return (
    <div className="buttons">
      <button
        type="button"
        onClick={ previousSkill }
        className="arrowButtonLeft"
      >
        <span className="arrow" />
        Anterior
      </button>
      <button
        type="button"
        onClick={ nextSkill }
        className="arrowButton"
      >
        Próximo
        <span className="arrow" />
      </button>
    </div>
  );
}

Buttons.propTypes = {
  previousSkill: PropTypes.func.isRequired,
  nextSkill: PropTypes.func.isRequired,
};

export default Buttons;
