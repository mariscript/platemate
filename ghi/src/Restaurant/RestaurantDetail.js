import React from "react";
import { useAuthContext } from "../Authentication/AuthenticateUser";

export default function RestaurantDetail(props) {
  function SomeComponent() {
    const { token } = useAuthContext();
  }
  SomeComponent()
  return (
    <>
      <h1>This is the restaurant detail page!</h1>
    </>
  );
}
