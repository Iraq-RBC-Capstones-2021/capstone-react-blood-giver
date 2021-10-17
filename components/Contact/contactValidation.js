import { FormattedMessage } from "react-intl";
import * as Yup from "yup";

const contactusSchema = Yup.object().shape({
  name: Yup.string().required(<FormattedMessage defaultMessage="Required" />),
  email: Yup.string()
    .email(<FormattedMessage defaultMessage="Invalid email" />)
    .required(<FormattedMessage defaultMessage="Required" />),
  message: Yup.string().required(
    <FormattedMessage defaultMessage="Required" />
  ),
  city: Yup.string().required(),
  bloodType: Yup.string().required(),
});

export default contactusSchema;
