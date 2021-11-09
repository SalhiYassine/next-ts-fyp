import { useDispatch, useSelector } from "react-redux";
import { RootState } from '../redux/store'
import getAuthStatus from "../redux/auth/Actions/AuthenticationStatus/AuthenticationStatusAction";

export default function Home() {
  const state = useSelector((state: RootState) => state)

  return (
    <>
      <h2>Hello</h2>
    </>
  );
}
