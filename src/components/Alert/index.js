import Swal from "sweetalert2";

const AllocationAlertsSuccess = (message) => {
  Swal.fire({
    position: "center",
    icon: "success",
    title: message,
    showConfirmButton: false,
    timer: 1500,
  });
};
const AlertError = (message) => {
  Swal.fire({
    icon: "",
    title: message,
    onClose: () => {},
    showConfirmButton: false,
  });
};

export { AllocationAlertsSuccess, AlertError };
