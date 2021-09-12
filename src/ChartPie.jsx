import { Pie } from "react-chartjs-2";

export default function ChartPie() {
  return (
    <div className="card-body">
      <div className="chart-pie pt-4 pb-2">
        <Pie
          id="myPieChart"
          type="doughnut"
          data={{
            labels: ["Direct", "Referral", "Social"],
            datasets: [
              {
                data: [55, 30, 15],
                backgroundColor: ["#4e73df", "#1cc88a", "#36b9cc"],
                hoverBackgroundColor: ["#2e59d9", "#17a673", "#2c9faf"],
                hoverBorderColor: "rgba(234, 236, 244, 1)",
              },
            ],
          }}
          options={{
            maintainAspectRatio: false,
            tooltips: {
              backgroundColor: "rgb(255,255,255)",
              bodyFontColor: "#858796",
              borderColor: "#dddfeb",
              borderWidth: 1,
              xPadding: 15,
              yPadding: 15,
              displayColors: false,
              caretPadding: 10,
            },
            legend: {
              display: false,
            },
            cutoutPercentage: 80,
          }}
        />
      </div>
      <div className="mt-4 text-center small">
        <span className="mr-2">
          <i className="fas fa-circle text-primary"></i> Direct
        </span>
        <span className="mr-2">
          <i className="fas fa-circle text-success"></i> Social
        </span>
        <span className="mr-2">
          <i className="fas fa-circle text-info"></i> Referral
        </span>
      </div>
    </div>
  );
}
