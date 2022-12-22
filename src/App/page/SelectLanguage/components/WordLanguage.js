import icon from "assets/images/icon.png";
import history from "ultils/history";

const WordLanguage = ({ title, list }) => {
  const handleChange = (data) => {
    localStorage.setItem("clientLanguage", JSON.stringify(data));
    history.push("/more-about");
  };

  return (
    <div className="content-div">
      <p className="content-text">{title}</p>
      {list.map((item, index) => {
        return (
          <div
            className="content-list"
            onClick={() =>
              handleChange({
                id: item._id,
                name: item.name,
              })
            }
          >
            <img alt="" src={icon} />
            <p className="text-details"> {item.name} </p>
          </div>
        );
      })}
    </div>
  );
};

export default WordLanguage;
