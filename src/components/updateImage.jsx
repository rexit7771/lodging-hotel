import { toast } from "react-toastify";
import { useState } from "react";
import axios from "axios";

export default function UpdateImageUrl({ id }) {
  const [imgUrl, setImgUrl] = useState("");

  const patchImg = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("image", imgUrl);

      const { data } = await axios({
        url: `https://h8-phase2-gc.vercel.app/apis/rent-room/lodgings/${id}`,
        method: "patch",
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      // console.log(data);
      toast.success("Image Url Successfully Updated");
    } catch (error) {
      console.log(error);
      toast.error("Sorry, There's an error");
    }

    return (
      <>
        <h1>duer</h1>
        {/* <div className="w-full bg-navy">
          <label className="form-control max-w-xs mx-auto ">
            <div className="label">
              <span className="label-text font-bold text-xl text-white">
                Update Image Url
              </span>
            </div>
            <input
              type="file"
              // value={imgUrl}
              // onChange={(e) => setImgUrl(e.target.value)}
              className="file-input file-input-bordered w-full max-w-xs bg-navy"
            />
          </label>
        </div> */}
        {/* <form onSubmit={patchImg}></form> */}
      </>
    );
  };
}
