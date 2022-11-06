import React, { useEffect, useState } from "react";
import { useApolloClient, gql } from "@apollo/client";

const Watch = () => {
  // Creating a state to store the uploaded video
  const [videos, setVideos] = useState([]);

  // Get the client from the useApolloClient hook
  const client = useApolloClient();

  // Query the videos from the the graph
  const GET_VIDEOS = gql`
    query videos($first: Int, $skip: Int, $orderDirection: OrderDirection) {
      videos(
        first: $first
        skip: $skip
        # orderBy: $orderBy
        orderDirection: $orderDirection
        where: $where
      ) {
        id
        hash
        title
        description
        thumbnailHash
        date
        author
        createdAt
      }
    }
  `;

  // Function to get the videos from the graph
  const getVideos = async () => {
    // Query the videos from the graph
    client
      .query({
        query: GET_VIDEOS,
        variables: {
          first: 200,
          skip: 0,
          // orderBy: "createdAt",
          // orderDirection: "desc",
        },
        fetchPolicy: "network-only",
      })
      .then(({ data }) => {
        // Set the videos to the state
        setVideos(data.videos);
      })
      .catch((err) => {
        console.log("Something went wrong. please try again.!", err.message);
      });
  };

  useEffect(() => {
    // Runs the function getVideos when the component is mounted
    getVideos();
  }, []);

  console.log("videos in watch: ", videos);
  return (
    <div className="flex w-full flex-row bg-transparent">
      <div className="flex h-screen flex-1 flex-col">
        <div className="flex flex-row flex-wrap">
          {videos.map((video) => (
            <div className="w-80 text-black">
              <p>{video.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Watch;
