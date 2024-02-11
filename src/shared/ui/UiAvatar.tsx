interface IUiAvatarProps {
  imageUrl: string;
  alt: string;
}

export function UiAvatar(props: IUiAvatarProps) {
  const { imageUrl, alt } = props;

  return (
    <img
      src={imageUrl}
      alt={alt}
      className="inline-block w-36 h-36 rounded-full"
    />
  );
}
