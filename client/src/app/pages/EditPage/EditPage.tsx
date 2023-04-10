import { IEditPageInterface } from "./EditPage.interface";

export const EditPage = ({
  className,
  ...props
}: IEditPageInterface) => {
  return (
    <div className={""} {...props}>
      EditPage Component
    </div>
  );
};
