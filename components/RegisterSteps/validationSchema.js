import { FormattedMessage } from "react-intl";
import * as Yup from "yup";

const registerSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, <FormattedMessage defaultMessage="Too short!" />)
    .max(70, <FormattedMessage defaultMessage="Too long!" />)
    .required(<FormattedMessage defaultMessage="Required" />),
  email: Yup.string()
    .email(<FormattedMessage defaultMessage="Invalid email" />)
    .required(<FormattedMessage defaultMessage="Required" />),
  age: Yup.number()
    .min(16, <FormattedMessage defaultMessage="Can't be under 16" />)
    .max(60, <FormattedMessage defaultMessage="Can't be above 60" />)
    .required(<FormattedMessage defaultMessage="Required" />)
    .integer(),
  city: Yup.string().required(),
  bloodType: Yup.string().required(),
});

export default registerSchema;
