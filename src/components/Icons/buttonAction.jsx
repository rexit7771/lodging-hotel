import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import UpdateImageUrl from "../updateImage";
import { toast } from "react-toastify";
import { useState } from "react";
import axios from "axios";
import DeleteLodging from "../deleteLodging";
export default function ButtonAction({ id, button, func }) {
  if (button === "delete") {
    const deleteLodging = async () => {
      try {
        const { data } = await axios({
          method: "delete",
          url: `https://h8-phase2-gc.vercel.app/apis/rent-room/lodgings/${id}`,
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        });
        // console.log(func);
        func();
        toast.success(`Lodging with id ${id} Successfully Deleted`);
      } catch (error) {
        console.log(error);
        toast.error("There's Something Error");
      }
    };

    return (
      <>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="btn text-white bg-red-700 hover:bg-red-600 hover:text-black"
          onClick={() => document.getElementById("my_modal_1").showModal()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </button>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">
              Are You Sure You Want To Delete This Lodging?
            </p>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn" onClick={deleteLodging}>
                  Yes
                </button>
                <button className="btn">No</button>
              </form>
            </div>
          </div>
        </dialog>
      </>
    );
  } else if (button === "edit") {
    return (
      <Link
        className="btn text-white bg-sky-900 hover:bg-sky-500 hover:text-black"
        to={`/edit/${id}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
          />
        </svg>
      </Link>
    );
  } else {
    const [imgFile, setImgFile] = useState(null);

    const patchImg = async (e) => {
      e.preventDefault();
      try {
        // console.log(imgUrl);

        const formData = new FormData();
        formData.append("file", imgFile);

        // console.log(formData);

        const { data } = await axios.patch(
          `https://h8-phase2-gc.vercel.app/apis/rent-room/lodgings/${id}`,
          formData,
          {
            headers: {
              "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
          }
        );

        func();
        toast.success("Image Url Successfully Updated");
      } catch (error) {
        console.log(error);
        toast.error("Sorry, There's an error");
      }
    };
    return (
      <>
        <button
          className="btn text-white bg-sky-500 hover:bg-sky-600 hover:text-black"
          onClick={() => document.getElementById("my_modal_3").showModal()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
        </button>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box bg-navy">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <div className="w-full bg-navy">
              <form onSubmit={patchImg}>
                <label className="form-control max-w-xs mx-auto ">
                  <div className="label">
                    <span className="label-text font-bold text-xl text-white">
                      Update Image Url
                    </span>
                  </div>
                  <input
                    type="file"
                    value={imgFile}
                    onChange={(e) => setImgFile(e.target.value)}
                    className="file-input file-input-bordered w-full max-w-xs bg-navy"
                  />
                  <button
                    type="submit"
                    className="mt-2 bg-sky-900 hover:bg-sky-700">
                    Submit
                  </button>
                </label>
              </form>
            </div>
          </div>
        </dialog>
      </>
    );
  }
}

ButtonAction.propTypes = {
  button: PropTypes.string,
  id: PropTypes.integer,
  func: PropTypes.func,
};
