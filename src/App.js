import "./App.css";
import ChartArea from "./chartArea";
import ChartPie from "./ChartPie";
import ColorCard from "./ColorCard";
import InfoCard from "./InfoCard";
import ProgressBar from "./ProgressBar";
import ProgressBox from "./ProgressBox";
//import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

function App() {
  const infoData = [
    {
      color: "primary",
      title: "Earnings (Monthly)",
      value: "$40,000",
      withProgress: false,
      progressBar: <></>,
      icon: "fa-calendar",
    },
    {
      color: "success",
      title: "Earnings (Annual)",
      value: "$215,000",
      withProgress: false,
      progressBar: <></>,
      icon: "fa-dollar-sign",
    },
    {
      color: "info",
      title: "Tasks",
      value: "50%",
      withProgress: true,
      progressBar: <ProgressBar color="info" value="50%" />,
      icon: "fa-clipboard-list",
    },
    {
      color: "warning",
      title: "Pending Requests",
      value: "18",
      withProgress: false,
      progressBar: <></>,
      icon: "fa-comments",
    },
  ];
  const progressData = [
    {
      title: "Server Migration",
      progress: "20%",
      progressBar: <ProgressBar color="danger" value="20%" />,
    },
    {
      title: "Sales Tracking ",
      progress: "40%",
      progressBar: <ProgressBar color="warning" value="40%" />,
    },
    {
      title: "Customer Database",
      progress: "60%",
      progressBar: <ProgressBar color="primary" value="60%" />,
    },
    {
      title: "Payout Details",
      progress: "80%",
      progressBar: <ProgressBar color="info" value="80%" />,
    },
    {
      title: "Account Setup",
      progress: "Complete!",
      progressBar: <ProgressBar color="success" value="100%" />,
    },
  ];
  const colorData = [
    {
      title: "Primary",
      code: "#4e73df",
      color: "primary",
      textColor: "white",
    },
    {
      title: "Success",
      code: "#1cc88a",
      color: "success",
      textColor: "white",
    },
    {
      title: "Info",
      code: "#36b9cc",
      color: "info",
      textColor: "white",
    },
    {
      title: "Warning",
      code: "#f6c23e",
      color: "warning",
      textColor: "white",
    },
    {
      title: "Danger",
      code: "#e74a3b",
      color: "danger",
      textColor: "white",
    },
    {
      title: "Secondary",
      code: "#858796",
      color: "secondary",
      textColor: "white",
    },
    {
      title: "Light",
      code: "#f8f9fc",
      color: "light",
      textColor: "black",
    },
    {
      title: "Dark",
      code: "#5a5c69",
      color: "dark",
      textColor: "white",
    },
  ];
  return (
    <div id="page-top">
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar />
            <div className="container-fluid">
              <div
                className="
                  d-sm-flex
                  align-items-center
                  justify-content-between
                  mb-4
                "
              >
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                <span
                  className="
                    d-none d-sm-inline-block
                    btn btn-sm btn-primary
                    shadow-sm
                  "
                >
                  <i className="fas fa-download fa-sm text-white-50"></i>{" "}
                  Generate Report
                </span>
              </div>

              <div className="row">
                {infoData.map((val) => {
                  return (
                    <InfoCard
                      color={val.color}
                      title={val.title}
                      value={val.value}
                      withProgress={val.withProgress}
                      progressBar={val.progressBar}
                      icon={val.icon}
                      key={val.title}
                    />
                  );
                })}
              </div>

              <div className="row">
                <div className="col-xl-8 col-lg-7">
                  <div className="card shadow mb-4">
                    <div
                      className="
                        card-header
                        py-3
                        d-flex
                        flex-row
                        align-items-center
                        justify-content-between
                      "
                    >
                      <h6 className="m-0 font-weight-bold text-primary">
                        Earnings Overview
                      </h6>
                      <div className="dropdown no-arrow">
                        <span
                          className="dropdown-toggle"
                          role="button"
                          id="dropdownMenuLink"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                        </span>
                        <div
                          className="
                            dropdown-menu dropdown-menu-right
                            shadow
                            animated--fade-in
                          "
                          aria-labelledby="dropdownMenuLink"
                        >
                          <div className="dropdown-header">
                            Dropdown Header:
                          </div>
                          <span className="dropdown-item">Action</span>
                          <span className="dropdown-item">Another action</span>
                          <div className="dropdown-divider"></div>
                          <span className="dropdown-item">
                            Something else here
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ChartArea></ChartArea>
                </div>

                <div className="col-xl-4 col-lg-5">
                  <div className="card shadow mb-4">
                    <div
                      className="
                        card-header
                        py-3
                        d-flex
                        flex-row
                        align-items-center
                        justify-content-between
                      "
                    >
                      <h6 className="m-0 font-weight-bold text-primary">
                        Revenue Sources
                      </h6>
                      <div className="dropdown no-arrow">
                        <span
                          className="dropdown-toggle"
                          role="button"
                          id="dropdownMenuLink"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                        </span>
                        <div
                          className="
                            dropdown-menu dropdown-menu-right
                            shadow
                            animated--fade-in
                          "
                          aria-labelledby="dropdownMenuLink"
                        >
                          <div className="dropdown-header">
                            Dropdown Header:
                          </div>
                          <span className="dropdown-item">Action</span>
                          <span className="dropdown-item">Another action</span>
                          <div className="dropdown-divider"></div>
                          <span className="dropdown-item">
                            Something else here
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ChartPie></ChartPie>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6 mb-4">
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                      <h6 className="m-0 font-weight-bold text-primary">
                        Projects
                      </h6>
                    </div>
                    <div className="card-body">
                      {progressData.map((val) => {
                        return (
                          <ProgressBox
                            title={val.title}
                            progress={val.progress}
                            progressBar={val.progressBar}
                          />
                        );
                      })}
                    </div>
                  </div>

                  <div className="row">
                    {colorData.map((val) => {
                      return (
                        <ColorCard
                          title={val.title}
                          code={val.code}
                          color={val.color}
                          textColor={val.textColor}
                        />
                      );
                    })}
                  </div>
                </div>

                <div className="col-lg-6 mb-4">
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                      <h6 className="m-0 font-weight-bold text-primary">
                        Illustrations
                      </h6>
                    </div>
                    <div className="card-body">
                      <div className="text-center">
                        <img
                          className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                          style={{ width: "25rem" }}
                          src="img/undraw_posting_photo.svg"
                          alt="..."
                        />
                      </div>
                      <p>
                        Add some quality, svg illustrations to your project
                        courtesy of
                        <a
                          target="_blank"
                          rel="nofollow noreferrer"
                          href="https://undraw.co/"
                        >
                          unDraw
                        </a>
                        , a constantly updated collection of beautiful svg
                        images that you can use completely free and without
                        attribution!
                      </p>
                      <a
                        target="_blank"
                        rel="nofollow noreferrer"
                        href="https://undraw.co/"
                      >
                        Browse Illustrations on unDraw &rarr;
                      </a>
                    </div>
                  </div>

                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                      <h6 className="m-0 font-weight-bold text-primary">
                        Development Approach
                      </h6>
                    </div>
                    <div className="card-body">
                      <p>
                        SB Admin 2 makes extensive use of Bootstrap 4 utility
                        classes in order to reduce CSS bloat and poor page
                        performance. Custom CSS classes are used to create
                        custom components and custom utility classes.
                      </p>
                      <p className="mb-0">
                        Before working with this theme, you should become
                        familiar with the Bootstrap framework, especially the
                        utility classes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer className="sticky-footer bg-white">
            <div className="container my-auto">
              <div className="copyright text-center my-auto">
                <span>Copyright &copy; Your Website 2021</span>
              </div>
            </div>
          </footer>
        </div>
      </div>

      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>

      <div
        className="modal fade"
        id="logoutModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Ready to Leave?
              </h5>
              <button
                className="close"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              Select "Logout" below if you are ready to end your current
              session.
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                type="button"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <a className="btn btn-primary" href="login.html">
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
