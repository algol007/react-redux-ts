import Swal from "sweetalert2";

export const Success = (props: any) => {
  Swal.fire({
    icon: props.icon,
    title: props.title,
    showConfirmButton: false,
    timer: 2000,
  });
};

export const Confirmation = (props: any) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You will delete this facility!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete!",
  }).then((result) => {
    if (result.isConfirmed) {
      props.onDelete();
    }
  });
};
