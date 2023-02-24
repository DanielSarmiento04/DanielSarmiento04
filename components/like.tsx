import { h } from "preact";

const LikeButton = () => {
  return (
    <div>
      <button>
        <img src="./static/like.svg" />
      </button>
      <button>
        <img src="./static/share.svg" />
      </button>
    </div>
  );
};

export default LikeButton;
