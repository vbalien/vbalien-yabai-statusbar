import { css } from "uebersicht";

export const command = `./vbalien/scripts/status.sh`;

const wrap = css({ display: "flex", flexDirection: "row-reverse" });
const box = css({
  padding: "5px 10px",
});

function getBatteryIcon(batt) {
  if (batt.state === "AC") {
    return <i> </i>;
  } else {
    if (batt.percent >= 80) return <i>"&nbsp;</i>;
    else if (batt.percent >= 60) return <i> &nbsp;</i>;
    else if (batt.percent >= 40) return <i> &nbsp;</i>;
    else if (batt.percent >= 20) return <i> &nbsp;</i>;
    else if (batt.percent >= 0) return <i> &nbsp;</i>;
  }
}

export const refreshFrequency = 10000; // ms

export const render = ({ output }) => {
  try {
    output = JSON.parse(output);
  } catch (err) {
    console.log(err.message);
    return;
  }
  return (
    <div>
      <div className={wrap}>
        <div className={box}>
          {"   "}
          {output.date}
          {"  "}
          {output.time}
        </div>
        <div className={box}>
          {getBatteryIcon(output.battery)}
          {output.battery.percent}%
        </div>
      </div>
    </div>
  );
};

export const className = {
  top: 0,
  right: 0,
  textAlign: "center",
  userSelect: "none",
  pointerEvents: "none",
  padding: "5px 5px",
  color: "#fff",
  fontFamily: "TerminessTTF Nerd Font",
};
