import { h } from "preact";
import { tw } from "twind";

const LikeButton = () => {
  return (
    <div>
      <button class="ml-2">
        <img
          src="/like.svg"
          style={{
            width: tw`w-8`,
            height: tw`h-8`,
          }}
        />
      </button>
      <button class="ml-2">
        <img src="/share.svg" />
      </button>
    </div>
  );
};

export default LikeButton;
