import "./YoutubeLink.scss";

interface YoutubeLinkProps {
  link: string;
  setLink: React.Dispatch<string>;
}

export const YoutubeLink = (props: YoutubeLinkProps) => {
  const { link, setLink } = props;

  return (
    <div className="youtube-link">
      <label>Youtube Link</label>
      <input
        value={link}
        onChange={(e) => {
          setLink(e.target.value);
        }}
      ></input>
    </div>
  );
};
