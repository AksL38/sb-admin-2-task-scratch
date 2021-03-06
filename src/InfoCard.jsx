export default function InfoCard(props) {
  return (
    <div className="col-xl-3 col-md-6 mb-4">
      <div className={`card border-left-${props.color} shadow h-100 py-2`}>
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div
                className={`text-xs
                              font-weight-bold
                              text-${props.color} text-uppercase
                              mb-1`}
              >
                {props.title}
              </div>
              {props.withProgress ? (
                <div className="row no-gutters align-items-center">
                  <div className="col-auto">
                    <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                      {props.value}
                    </div>
                  </div>
                  <div className="col">
                    <div className="progress progress-sm mr-2">
                      {props.progressBar}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h5 mb-0 font-weight-bold text-gray-800">
                  {props.value}
                </div>
              )}
            </div>
            <div className="col-auto">
              <i className={`fas ${props.icon} fa-2x text-gray-300`}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
