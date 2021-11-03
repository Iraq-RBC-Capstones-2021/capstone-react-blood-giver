import safe from "../../src/svg/safe.svg";
import free from "../../src/svg/free.svg";
import notified from "../../src/svg/notified.svg";

import { FormattedMessage } from "react-intl";

export const slideData = [
  {
    id: 753,
    heading: <FormattedMessage defaultMessage="Blood Giver" />,
    text: (
      <FormattedMessage defaultMessage="We are a non profit foundation and our main objective is to make sure that everything is done to protect vulnerable persons" />
    ),
    image: safe,
  },
  {
    id: 754,
    heading: <FormattedMessage defaultMessage="Free" />,
    text: (
      <FormattedMessage defaultMessage="Our ultimate goal is to provide an easy-to-use, easy-to-access, fast, efficient, and reliable way to get life-saving blood, totally Free of cost" />
    ),
    image: free,
  },
  {
    id: 755,
    heading: <FormattedMessage defaultMessage="Get Notified" />,
    text: (
      <FormattedMessage defaultMessage="We work with network partners to connect blood donors and recipients through a web application" />
    ),
    image: notified,
  },
];
