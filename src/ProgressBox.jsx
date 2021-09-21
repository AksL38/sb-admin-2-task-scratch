export default function ProgressBox(props) {
  return (
    <>
      <h4 className="small font-weight-bold">
        {props.title} <span className="float-right">{props.progress}</span>
      </h4>
      <div className="progress mb-4">{props.progressBar}</div>
    </>
  );
}
