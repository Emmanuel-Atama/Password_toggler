import { usePasswordToggler } from "../../components/hooks/usePasswordToggler";
const LoginPage = ({ messages }) => {
  const {
    type,
    passwordVisibility,
    handlePasswordVisibility
  } = usePasswordToggler();
  return (
    <div
      style={{
        backgroundColor: "steelblue",
        minHeight: "50vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
      }}
    >
      <h1>{messages.login}</h1>
      <div>
        <input type={type} placeholder="Enter password..." />
        <button onClick={handlePasswordVisibility}>
          {passwordVisibility ? "Show" : "Hide"} Password
        </button>
      </div>
    </div>
  );
};
export default LoginPage;
