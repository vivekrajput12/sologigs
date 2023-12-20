
import React from "react";
import { Link, useParams } from "react-router-dom";
import "./Myadv.scss";
// import getCurrentUser from "../../utils/getCurrentUser";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

function Myadv() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  console.log(currentUser._id);
  const { id } = useParams();

  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["Myadv"],
    queryFn: () =>
      newRequest.get(`/adv?userId=${currentUser._id}`).then((res) => {
        return res.data;
      }),
  });
  const mutation = useMutation({
    mutationFn: (id) => {
      return newRequest.delete(`/adv/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["Myadv"]);
    },
  });

  const handleDelete = (id) => {
    mutation.mutate(id);
  };
    console.log(data);
  return (
    <div className="myGigs">
      {isLoading ? (
        "loading"
      ) : error ? (
        "error"
      ) : (
        <div className="container">
          <div className="title">
            <h1>Your Ads</h1>
            {currentUser.isSeller && (
              <Link to="/newadv">
                <button data-aos="fade-up">Add New Ads</button>
              </Link>
            )}
          </div>
          <table data-aos="fade-right">
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Sales</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((gig) => (
                <tr key={gig._id}>
                  <td>
                    <img className="image" src={gig.cover} alt="" />
                  </td>
                  <td><Link to={`/advertise/${gig._id}`} className="link">{gig.title}</Link></td>
                  <td>{gig.price}</td>
                  <td>{gig.sales}</td>
                  <td>
                  
                    <img
                      className="delete"
                      src="./img/delete.png"
                      alt=""
                      onClick={() => handleDelete(gig._id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Myadv;