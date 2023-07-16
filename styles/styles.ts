import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  card: {
    marginBottom: 16,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
  },
  paperSection: {
    marginTop: 16,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "60%",
  },
  gridContent: {
    marginBottom: 16,
  },
  infoSection: {
    padding: "12px 16px",
    width: "50%",
  },
  agentInfo: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  KDAInfo: {
    display: "flex",
    justifyContent: "center",
  },
  cardPost: {
    marginBottom: 16,
    marginTop: 16,
  },
  userContent: {
    display: "flex",
    alignItems: "center",
    gap: 5,
  },
}));
