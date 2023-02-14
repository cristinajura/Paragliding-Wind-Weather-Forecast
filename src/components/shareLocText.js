import "../App.css";
import { BsWhatsapp } from "react-icons/bs";
import { TbBrandTelegram } from "react-icons/tb";

export const ShareLocation = (props) => {
  let url = `https://api.whatsapp.com/send?text=${props.popup}, GPS: ${props.marker[0]}, ${props.marker[1]}`;

  return (
    <div className="shareLocationText">
      <div style={{ marginBottom: "10px" }}>
        The location marker is placed on {props.popup}, GPS: {props.marker[0]},{" "}
        {props.marker[1]}. Share location: {"  "}
        <span>
          <a href={url} target="blank" style={{ color: "rgb(2, 145, 2)" }}>
            <BsWhatsapp />
          </a>
        </span>
      </div>
    </div>
  );
};

export const AddLocation = () => {
  return (
    <div className="shareLocationText">
      <div>
        Do you need a new location on 'Search paragliding spot' or 'Search
        outdoor location'? Just let me know:{" "}
        <span style={{ color: "rgb(22, 22, 202)", fontSize: "20px" }}>
          <a href="mailto:cristina.jura16@gmail.com" target="blank">
            <TbBrandTelegram />
          </a>
        </span>
        or{" "}
        <span>
          <a
            href="https://api.whatsapp.com/send?phone=40734407892"
            target="blank"
            style={{ color: "rgb(2, 145, 2)" }}
          >
            <BsWhatsapp />
          </a>
        </span>
      </div>
      <div className="bottom">@2023 windmap</div>
    </div>
  );
};