import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Mobile navigation
import { faNewspaper as farNewspaper } from "@fortawesome/free-regular-svg-icons";
import { faNewspaper as fasNewspaper } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";
import { faUser as farUser } from "@fortawesome/free-regular-svg-icons";
import { faUser as fasUser } from "@fortawesome/free-solid-svg-icons";
import {
  faAngleRight,
  faArrowLeft,
  faCheck,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  farNewspaper,
  fasNewspaper,
  farHeart,
  fasHeart,
  farUser,
  fasUser,
  faAngleRight,
  faArrowLeft,
  faCheck,
  faMagnifyingGlass
);

export default FontAwesomeIcon;
