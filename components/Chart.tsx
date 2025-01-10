// Install required packages: npm install recharts
import React from "react";

// Define types for the data and props
interface DataItem {
  Platform: string;
  Post_Type: string;
  Likes: number;
  Shares: number;
  Comments: number;
}

interface CardComponentProps {
  platform: string;
  postType: string;
  likes: number;
  shares: number;
  comments: number;
}

// Sample data extracted from the CSV file
const data: DataItem[] = [
  { Platform: "Instagram", Post_Type: "Story", Likes: 164, Shares: 261, Comments: 101 },
  { Platform: "Facebook", Post_Type: "Video", Likes: 377, Shares: 41, Comments: 172 },
  { Platform: "Facebook", Post_Type: "Video", Likes: 943, Shares: 464, Comments: 0 },
  { Platform: "Facebook", Post_Type: "Post", Likes: 786, Shares: 199, Comments: 142 },
  { Platform: "Instagram", Post_Type: "Post", Likes: 740, Shares: 226, Comments: 74 },
];

const CardComponent: React.FC<CardComponentProps> = ({ platform, postType, likes, shares, comments }) => {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "16px",
      margin: "16px",
      width: "300px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    }}>
      <h3>{platform}</h3>
      <p><strong>Post Type:</strong> {postType}</p>
      <p><strong>Likes:</strong> {likes}</p>
      <p><strong>Shares:</strong> {shares}</p>
      <p><strong>Comments:</strong> {comments}</p>
    </div>
  );
};

const CardFlow: React.FC = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {data.map((item, index) => (
        <CardComponent
          key={index}
          platform={item.Platform}
          postType={item.Post_Type}
          likes={item.Likes}
          shares={item.Shares}
          comments={item.Comments}
        />
      ))}
    </div>
  );
};

export default CardFlow;
