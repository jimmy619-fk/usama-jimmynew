import Swal from "sweetalert2";
import "animate.css";

export const myAlert = (title) => {
  return Swal.fire({
    title: title,
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  });
};
