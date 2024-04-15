import { Modal } from "flowbite-react";
import PropTypes from "prop-types";
import { useState } from "react";

const Client = ({ client }) => {
  // console.log(client);
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="border">
      {/* details modal  */}
      <Modal
        className="rounded-lg"
        dismissible
        show={openModal}
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header>Members Details</Modal.Header>
        <Modal.Body>
          <div className="grid grid-cols-5 gap-6">
            <div className="col-span-2">
              <div className="">
                <img
                  className="w-full h-auto rounded-lg object-cover mt-1.5"
                  src={
                    client?.image ===
                      "https://static.vecteezy.com/system/resources/previews/011/675/374/original/man-avatar-image-for-profile-png.png" ||
                    client?.image ===
                      "https://www.vhv.rs/dpng/d/15-155087_dummy-image-of-user-hd-png-download.png"
                      ? client?.image
                      : `${
                          import.meta.env.VITE_LOCAL_API_URL
                        }/api/v1/images/uploads/${client?.image}`
                  }
                  alt={client?.image}
                />
              </div>
            </div>
            <div className="col-span-3 space-y-1.5">
              <h2 className="text-4xl mb-6">{client?.name}</h2>

              <h2 className="text-sm">
                Number: <span className="font-semibold">{client?.number}</span>
              </h2>
              <h2 className="text-sm">
                Email: <span className="font-semibold"> {client?.email}</span>
              </h2>
              <h2 className="text-sm">
                Birthday:{" "}
                <span className="font-semibold">{client?.birthday}</span>
              </h2>
              <h2 className="text-sm">
                Client Role:{" "}
                <span className="font-semibold capitalize">{client?.role}</span>
              </h2>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <button className="p-4 " onClick={() => setOpenModal(true)}>
        <div className="flex items-center justify-between gap-3">
          <div className="">
            <img
              className="w-16 h-16 rounded-full object-cover"
              src={
                client?.image ===
                  "https://static.vecteezy.com/system/resources/previews/011/675/374/original/man-avatar-image-for-profile-png.png" ||
                client?.image ===
                  "https://www.vhv.rs/dpng/d/15-155087_dummy-image-of-user-hd-png-download.png"
                  ? client?.image
                  : `${
                      import.meta.env.VITE_LOCAL_API_URL
                    }/api/v1/images/uploads/${client?.image}`
              }
              alt=""
            />
          </div>
          <div className="grow text-start">
            <h2 className="text-xl font-semibold">{client?.name}</h2>
            <h2 className="text-sm">
              Email: <span className="font-semibold"> {client?.email}</span>
            </h2>
            <h2 className="text-sm">
              Number:{" "}
              <span className="font-semibold">{client?.number}</span>
            </h2>
          </div>
        </div>
      </button>
    </div>
  );
};

export default Client;

Client.propTypes = {
  client: PropTypes.object,
};
