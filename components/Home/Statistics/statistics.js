import Cities from "../../../public/svgIcon/cities.svg";
import Heart from "../../../public/svgIcon/heart.svg";
import { FormattedMessage } from "react-intl";
const statistics = [
  {
    id: "cities",
    icon: Cities,
    label: <FormattedMessage defaultMessage="Cities" />,
    number: 18,
  },
  {
    id: "heart",
    icon: Heart,
    label: <FormattedMessage defaultMessage="Donors" />,
    number: 50,
  },
];
export default statistics;
