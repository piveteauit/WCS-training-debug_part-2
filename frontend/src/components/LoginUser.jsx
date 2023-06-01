import { httpService, storageService } from "@services";
import { userPropTypes } from "@types";

export default function LoginUser({ username, id }) {
  const onLogin = async () => {
    try {
      storageService.setItem("user", await httpService.getById("users", id));
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <button type="button" key={`UserLogin_${id}`} onClick={onLogin}>
      Login as user: {username}
    </button>
  );
}

LoginUser.propTypes = userPropTypes;
