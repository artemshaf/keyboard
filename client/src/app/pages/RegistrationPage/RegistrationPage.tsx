import { Registration } from "@components";
import { IRegistrationPageInterface } from "./RegistrationPage.interface";

export const RegistrationPage = ({
  className,
  ...props
}: IRegistrationPageInterface) => {
  return (
    <div className={""} {...props}>
      <Registration />
    </div>
  );
};
