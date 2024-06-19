import css from './Options.module.css';

export default function Options({ feedback, onUpdate, onReset }) {
  const buttons = Object.keys(feedback);
  return (
    <div className={css.options}>
      {buttons.map((option, i) => {
        return (
          <button key={i} onClick={()=>onUpdate(option)}>
            {option}
          </button>
        );
      })}

      <button onClick={onReset}>Reset</button>
    </div>
  );
}
