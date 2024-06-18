import css from './Description.module.css';

export default function Description({ title, text }) {
  return (
    <div className={css.description}>
      <h1 className={css.descriptionTitle}>{title}</h1>
      <p>{text}</p>
    </div>
  );
}
