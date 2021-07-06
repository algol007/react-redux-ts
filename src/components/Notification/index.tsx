import Swal from "sweetalert2";

export const Success = (props: any) => {
  Swal.fire({
    icon: props.icon,
    title: props.title,
    showConfirmButton: false,
    timer: 2000,
  });
};

export const Confirmation = () => {
  Swal.fire({
    title: "Are you sure?",
    text: "You will not be able to recover this imaginary file!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, delete it!",
    cancelButtonText: "No, keep it",
  }).then((result) => {
    if (result.isConfirmed) {
      Success({
        icon: "success",
        title: "Facility has been deleted!",
      });
    } else if (result.dismiss) {
      Success({
        icon: "error",
        title: "Canceled",
      });
    }
  });
};
