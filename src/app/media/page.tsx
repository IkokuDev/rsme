import { Fragment } from "react";
import { Cover } from "@/components/layout/media/cover";
import { Contact } from "@/components/layout/media/contact";
import { Hero } from "@/components/layout/media/hero";

export default function Media() {
  return (
    <Fragment>
      <Hero />
      <Cover />
      <Contact />
    </Fragment>
  );
}
