export const USERID = "userId";
export const CORPORATEID = "corporateId";
export const ACCOUNTTYPEID = "accountTypeId";

export function saveUser(userId, accountTypeId, corporateId) {
	localStorage.setItem(USERID, userId);
	localStorage.setItem(ACCOUNTTYPEID, accountTypeId);
	if (corporateId) {
		localStorage.setItem(CORPORATEID, corporateId);
	}
}

export function isLoggedIn() {
	const user = localStorage.getItem(USERID);
	return !!user;
}

export function logout() {
	localStorage.clear();
}
