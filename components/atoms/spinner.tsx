import { mantineTheme } from "../../styles/mantineTheme";
import { Loader } from "@mantine/core";

const Spinner: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Loader
        size={48}
        color={`${
          mantineTheme.colors &&
          mantineTheme.colors.redValorant &&
          mantineTheme.colors.redValorant[0]
        }`}
      />
    </div>
  );
};

export default Spinner;
