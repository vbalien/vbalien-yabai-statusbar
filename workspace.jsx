import { css } from "uebersicht";

const wrap = css({ display: "flex" });
const box = css({
  padding: "5px 15px",
});
const osName = css({
  padding: "5px",
  marginRight: "15px",
});
const boxFocused = css(
  {
    backgroundColor: "#8E83B8",
  },
  box
);

export const command = `./vbalien/scripts/workspace.sh`;

export const refreshFrequency = false; // ms

const WSBox = ({ focused, index, label }) => {
  return focused ? (
    <div className={boxFocused}>{label}&nbsp;</div>
  ) : (
    <div className={box}>
      {label}
      {" :"}
      {index}
    </div>
  );
};

export const render = ({ output }) => {
  output = JSON.parse(output);
  return (
    <div>
      <div className={wrap}>
        <div className={osName}> MacOS</div>
        {output.workspaces.map((ws) => (
          <WSBox
            focused={ws.focused === 1}
            key={ws.id}
            label={ws.label}
            index={ws.index}
          />
        ))}
      </div>
    </div>
  );
};

export const className = {
  top: 0,
  left: 0,
  cursor: "default",
  userSelect: "none",
  padding: "0 5px",
  color: "#fff",
  fontFamily: "TerminessTTF Nerd Font",
};
