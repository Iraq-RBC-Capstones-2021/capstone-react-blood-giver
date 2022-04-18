import { FormattedMessage } from "react-intl";
import dizzy from "../../../public/svgIcon/dizzy.svg";
import protection from "../../../public/svgIcon/protection.svg";
import needle from "../../../public/svgIcon/needle-with-patien.svg";

const concerns = [
  {
    rightIcon: false,
    icon: dizzy,
    title: <FormattedMessage defaultMessage="I'm Afraid I'll Faint" />,
    text: (
      <FormattedMessage defaultMessage="If you do feel faint or fatigued,simply lie down until you feel better. think that you have about 10 pints of blood in your body. Roughly 1 pint is given." />
    ),
  },
  {
    rightIcon: true,
    icon: needle,
    title: <FormattedMessage defaultMessage="I Don't Like Needles" />,
    text: (
      <FormattedMessage defaultMessage="fear of needles certainly prevents some people from donating blood. But it is worth to spend a few minutes facing your fears to save someone’s live." />
    ),
  },
  {
    rightIcon: false,
    icon: protection,
    title: <FormattedMessage defaultMessage="Is it Safe to Donate?" />,
    text: (
      <FormattedMessage defaultMessage="You’ll even be given a mini-physical test at your appointment, to ensure you are healthy enough to donate on that day. We’ll check your temperature and blood pressure." />
    ),
  },
];
export default concerns;
