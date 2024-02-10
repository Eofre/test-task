import { useNavigate } from "react-router-dom";
import { UiButton } from ".";
import backIcon from "assets/back.svg";
import { useResize } from "shared/lib";

export function UiButtonGoBack() {
  const { width } = useResize();
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  const isMobile = width < 768;
  return (
    <>
      {isMobile ? (
        <UiButton icon={backIcon} variant="text" onClick={handleGoBack} />
      ) : (
        <UiButton variant="outline-light" onClick={handleGoBack}>
          Назад
        </UiButton>
      )}
    </>
  );
}
