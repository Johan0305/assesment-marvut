const CardInfo = ({ info, setOpen, setInfoModal }) => {
  return (
    <>
      <div
        className="containerCard"
        onClick={() => {
          setOpen(true);
          setInfoModal(info);
        }}
      >
        <div className="containerCardInfo">
          <img src={info.image} alt="name" />
          <div className="cardInfo">
            <p className="nameInfo">{info.name}</p>
            <p className="specieInfo">{info.species}</p>
            <p className="genderInfo">{info.gender}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardInfo;
