import React from "react";
import { Grid } from "@mui/material";
import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos, direction }) => {
  if(!videos?.length) return "Loading...";
  
  return (
    <Grid 
      container 
      spacing={4} 
      direction={direction || "row"} 
      justifyContent="flex-start"
      alignItems="stretch"
    >
      {videos.map((item, idx) => (
        <Grid item xs={12} sm={6} md={4} key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Grid>
      ))}
    </Grid>
  );
}

export default Videos;