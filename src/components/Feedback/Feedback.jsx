import css from './Feedback.module.css'

export default function Feedback({feedback}) {
    const options = Object.keys(feedback);
  return (
    <div className={css.feedback }>
      {options.map((option, i) => {
        return (
          <p key={i}>
            {option + ': ' + feedback[option]}
          </p>
        );
      })}
    </div>
  );
}