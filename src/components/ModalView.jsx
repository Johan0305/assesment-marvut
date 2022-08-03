import Modal from "@mui/material/Modal";

const ModalView = ({ open, setOpen, info }) => {
  console.log(info);
  return (
    <Modal open={open} onClose={() => setOpen(false)} className="Modal">
      <div className="containerGlobalModal">
        <div className="containerModalInfo">
          <img src={info.image} alt={info.name} />
          <p className="nameInfo">{info.name}</p>
          <p className="specieInfo">{info.species}</p>
          <p className="genderInfo">{info.gender}</p>
        </div>
      </div>
    </Modal>
  );
};

export default ModalView;
