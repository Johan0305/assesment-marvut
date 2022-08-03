import Modal from "@mui/material/Modal";

const ModalView = ({ open, setOpen, info }) => {
  console.log(info);
  return (
    <Modal open={open} onClose={() => setOpen(false)} className="Modal">
      <div className="containerGlobalModal">
        <div className="containerModalInfo">
          <div className="containerImg">
            <img src={info.image} alt={info.name} />
          </div>
          <div className="containerTextInfo">
            <p className="nameInfo">{info.name}</p>
            <p className="specieInfo">{info.species}</p>
            <p className="genderInfo">{info.gender}</p>
            <p className="locationInfo">{info.location?.name}</p>
            <p className="originInfo">{info.origin?.name}</p>
            <p className="statusInfo">{info.status}</p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalView;
