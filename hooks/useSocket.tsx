import { io } from "socket.io-client";
import { getUserState, setEmail } from "../redux/reducers/user";
import { useAppDispatch, useAppSelector } from "./useRedux";
import { SOCKET_BASE_URL, SOCKET_PATH } from "../utils";
import { useEffect } from "react";

const socket = io(SOCKET_BASE_URL, { path: SOCKET_PATH });

const useSocket = () => {
  const { _id } = useAppSelector(getUserState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    socket.on("connect", () => {
      if (_id) attachUser(_id);
      console.log("Socket connected", { _id });
    });

    socket.on("disconnect", () => {
      console.log("Socket disconnected");
    });

    socket.on("set-email", (email: string) => {
      console.log("set-email", email);
      dispatch(setEmail(email));
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("paid");
    };
  }, [socket, _id]); // eslint-disable-line react-hooks/exhaustive-deps

  const attachUser = (id: string) => {
    socket.emit("attachUser", id);
  };

  return { attachUser };
};

export default useSocket;
