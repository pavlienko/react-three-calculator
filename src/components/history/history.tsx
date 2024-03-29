import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import "./history.css";
const API_URL = "https://pavlienko.ru/node/threecalchistory";

const History: React.FC = () => {
  const signs = useSelector((state: RootState) => state.signs.resultSign);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    axios.get(API_URL).then((response) => {
      setHistory(
        response.data.map((e: any) => {
          return (
            <section>
              <span>{e.datetime}</span>
              <span style={{ color: "#aa707050" }}> | </span>
              <span style={{ color: "pink" }}>{e.operation}</span>
            </section>
          );
        })
      );
    });
  }, [signs]);

  return (
    <div className="calc-history">
      <div style={{ marginTop: "30px" }}>Operations history:</div>
      <div style={{ width: "fit-content", margin: "30px auto" }}>
        <div
          style={{
            width: "100%",
            height: "1px",
            background: "gray",
            margin: "10px 0px 10px 0px",
          }}
        ></div>
        {history.map((e: string, i) => {
          return (
            <div key={i} style={{ textAlign: "left" }}>
              {e}
              <div
                style={{
                  width: "100%",
                  height: "1px",
                  background: "gray",
                  margin: "10px 0px 10px 0px",
                }}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default History;
