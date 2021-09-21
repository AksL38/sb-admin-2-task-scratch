export default function ColorCard(props) {
  return (
    <div className="col-lg-6 mb-4">
      <div className={`card bg-${props.color} text-${props.textColor} shadow`}>
        <div className="card-body">
          {props.title}
          <div className={`text-${props.textColor}-50 small`}>{props.code}</div>
        </div>
      </div>
    </div>
  );
}
