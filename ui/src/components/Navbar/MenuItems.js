export const menuItems = () => {
	const menuItems = [
		{
			title: "Home",
			url: "/",
			cName: "nav-links",
		},
		{
			title: "Cart",
			url: "/cart",
			cName: "nav-links",
		},
		{
			title: "Restaurants",
			url: "/restaurants",
			cName: "nav-links",
		},
		{
			title: "Dashboard",
			url: "/dashboard",
			cName: "nav-links",
		},
		{
			title: "Orders",
			url: "/ordersList",
			cName: "nav-links",
		},
		{
			title: "Sign in",
			cName: "nav-links-mobile",
			url: "/sign-in",
		},
	];
	const accountTypeId = localStorage.getItem("accountTypeId");
	if (accountTypeId) {
		if (accountTypeId == 1) {
			return [menuItems[0], menuItems[2], menuItems[5]];
		} else if (accountTypeId == 2) {
			return [menuItems[0], menuItems[4], menuItems[5]];
		} else {
			return [menuItems[0], menuItems[3], menuItems[5]];
		}
	} else {
		return [menuItems[0], menuItems[5]];
	}
};
