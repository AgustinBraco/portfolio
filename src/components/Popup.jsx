export const Popup = props => (
  <div id="Popup">
    <p className="PopupTitle">{props.response.status}</p>
    <p className="PopupText">{props.response.message}</p>
  </div>
);
