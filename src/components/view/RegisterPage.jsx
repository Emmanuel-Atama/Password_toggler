import { usePasswordToggler } from "../../components/hooks/usePasswordToggler";

const RegisterPage = ({ messages }) => {
  const {
    type,
    passwordVisibility,
    handlePasswordVisibility
  } = usePasswordToggler();
  return (
    <div
      style={{
        backgroundColor: "tomato",
        minHeight: "50vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
      }}
    >
      <h1>{messages.register}</h1>
      <div>
        <input type={type} placeholder="Enter password..." />
        <button onClick={handlePasswordVisibility}>
          {passwordVisibility ? "Show" : "Hide"} Password
        </button>
      </div>
    </div>
  );
};
export default RegisterPage;
