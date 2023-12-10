export default function Card({ children, className }) {
  const classes = `${className} mb-3 bg-white rounded-3xl p-2 shadow-lg`;

  return (
    <div className={classes}>
      <div className="border-2 border-green-300 rounded-3xl p-4">{children}</div>
    </div>
  );
}
