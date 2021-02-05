export const command = `./vbalien/scripts/title.sh`;

export const refreshFrequency = false; // ms

export const render = ({ output }) => {
  output = JSON.parse(output);
  return <div>{output.title}</div>;
};

export const className = {
  top: 0,
  left: 0,
  right: 0,
  textAlign: "center",
  userSelect: "none",
  pointerEvents: "none",
  padding: "5px 15px",
  color: "#fff",
  fontFamily: "TerminessTTF Nerd Font",
};
