import { useLogto } from "@logto/react";

const AddStyle = () => {
  const { isAuthenticated } = useLogto();

  if (isAuthenticated) {
    return (
      <>
        <div>AddStyle</div>
      </>
    );
  }
};
export default AddStyle;
