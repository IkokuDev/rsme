import { Hero } from "@/components/layout/partner/hero";
import Partnership from "@/components/layout/partner/partnership";
import { SignUp } from "@/components/layout/partner/sign-up";
import { Fragment } from "react";

export default function Partner() {
	return (
		<Fragment>
			<Hero />
			<Partnership />
			<SignUp />
		</Fragment>
	);
}
