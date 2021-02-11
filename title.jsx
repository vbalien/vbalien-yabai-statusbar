import { css } from "uebersicht";

export const command = `./vbalien/scripts/title.sh`;

export const refreshFrequency = false; // ms

const wrap = css({
  maxWidth: "40%",
  margin: "auto",
  overflow: "hidden",
  maxHeight: "30px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
});

export const render = ({ output }) => {
  try {
    output = JSON.parse(output);
  } catch (err) {
    console.log(err.message);
    return;
  }
  return (
    <div>
      <div className={wrap}>{output.title}</div>
    </div>
  );
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
