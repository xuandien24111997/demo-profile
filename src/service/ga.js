import axios from "axios";

const getAllVistors = async (data) => {
  return axios.post("https://content-analyticsdata.googleapis.com/v1beta/properties/321240838:runReport?alt=json", {
    dateRanges: [{startDate: "30daysAgo", endDate: "today"}],
    metrics: [{name: "totalUsers"}]
  }, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "authorization": "Bearer ya29.a0ARrdaM8mGsMcX80lbhjyEUW3A5AMx2LFyGnrA7PvCVmisM0ELWH096M0ERch9ZjaAHubtcypBuQ7HrY7UBnYIH9j3LQ7ueNeRQhNKPWNNuTQ7UZp96EBW_OED0qMRzIOaexRSgZB5nE06KvD1D6oTeBK5bvdAg"
    }
  })
};

export { getAllVistors };
