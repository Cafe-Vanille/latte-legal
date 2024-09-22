import {Outlet} from "react-router-dom";

interface RootProps {

}

export default function Root(
	{}: RootProps,
) {

	return <div id={"router-root"}>
		<Outlet/>
	</div>;
}