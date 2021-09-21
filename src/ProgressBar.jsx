export default function ProgressBar(props) {
  return (
    <div
      className={`progress-bar bg-${props.color}`}
      role="progressbar"
      style={{ width: props.value }}
      aria-valuenow={props.value}
      aria-valuemin="0"
      aria-valuemax="100"
    ></div>
  );
}
