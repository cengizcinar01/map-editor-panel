import { useLogto } from "@logto/react";

const AddStyle = () => {
  const { isAuthenticated } = useLogto();

  if (isAuthenticated) {
    return <>AddStyle</>;
  }
};
export default AddStyle;
