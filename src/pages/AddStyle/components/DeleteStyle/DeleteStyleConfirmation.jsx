import Swal from "sweetalert2";
import deleteStyle from "./DeleteStyle";
import onDelete from "./OnDelete";

const deleteStyleConfirmation = async (
  styleId,
  getAccessToken,
  getAllStyles,
  setGetAllStyles
) => {
  const { isConfirmed } = await Swal.fire({
    title: "Confirmation",
    text: "Are you sure you want to delete this style?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
    cancelButtonText: "Cancel",
  });

  if (isConfirmed) {
    try {
      const accessToken = await getAccessToken(
        `${import.meta.env.VITE_LOGTO_RESOURCES}`
      );
      await deleteStyle(styleId, accessToken);
      onDelete(styleId, getAllStyles, setGetAllStyles);
      Swal.fire(
        "Deleted!",
        "The style has been successfully deleted.",
        "success"
      );
    } catch (error) {
      console.error(error.message);
      Swal.fire(
        "Error!",
        "An error occurred while deleting the style.",
        "error"
      );
    }
  }
};

export default deleteStyleConfirmation;
