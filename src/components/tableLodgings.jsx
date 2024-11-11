import { useEffect, useState } from "react";
import { phase2Api } from "../helpers/http-client";
import ButtonAction from "./Icons/buttonAction";

export default function TableLodgings() {
  const [lodgings, setLodgings] = useState([]);

  const fetchLodgings = async () => {
    try {
      const { data } = await phase2Api.get("/apis/rent-room/lodgings", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      setLodgings(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchLodgings();
  }, []);

  return (
    <>
      <div className="overflow-x-auto bg-navy rounded">
        <table className="table">
          {/* head */}
          <thead className="bg-hover text-navy text-base ">
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Facility</th>
              <th>Room Capacity</th>
              <th>Image</th>
              <th>Location</th>
              <th>Type</th>
              <th>Owner</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className=" justify-items-center items-center">
            {lodgings.map((lodging, idx) => {
              return (
                <tr key={idx}>
                  <th>{idx + 1}</th>
                  <td>{lodging.name}</td>
                  <td>{lodging.facility}</td>
                  <td>{lodging.roomCapacity}</td>
                  <td>
                    <img src={lodging.imgUrl} alt="" height={200} width={200} />
                  </td>
                  <td>{lodging.location}</td>
                  <td>{lodging.typeId}</td>
                  <td>{lodging.User.username}</td>
                  <td>
                    <div>
                      <div>
                        <ButtonAction id={lodging.id} button={"patchImg"} />
                      </div>
                      <div className="my-2">
                        <ButtonAction id={lodging.id} button={"edit"} />
                      </div>
                      <div>
                        <ButtonAction
                          id={lodging.id}
                          button={"delete"}
                          func={fetchLodgings}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
