export interface IToast {
	id: string;
	type: "success" | "info" | "warning" | "error";
	description: string;
	duration: number;
	title: string;
	showClose: boolean;
}
