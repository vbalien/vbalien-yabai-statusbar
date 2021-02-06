import { css } from "uebersicht";

export const command = `./vbalien/scripts/status.sh`;

const wrap = css({ display: "flex", flexDirection: "row-reverse" });
const box = css({
  padding: "5px 10px",
});

function getBatteryIcon(batt) {
  if (batt.state === "AC") {
    return "";
  } else {
    if (batt.percent <= 90) return "";
    else if (batt.percent <= 70) return "";
    else if (batt.percent <= 50) return "";
    else if (batt.percent <= 30) return "";
    else if (batt.percent <= 10) return "";
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
          {`${getBatteryIcon(output.battery)} `}
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
