import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import fr from "dayjs/locale/fr";

dayjs.extend(localizedFormat);
dayjs.locale(fr);

export default dayjs;
