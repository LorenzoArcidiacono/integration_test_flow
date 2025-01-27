import { SvgIconComponent } from "@mui/icons-material";
import { CSSProperties } from "react";

export interface ISlideInMenu {
	style?: CSSProperties;
	className?: string;
	direction?: "left" | "right";
	position?: "top" | "bottom";
	items: ISlideInMenuItem[];
}

type IButtonSlideInMenuItem = {
	type: "button";
	label: string;
	icon?: SvgIconComponent;
	onClick: () => void;
};

type IIconSlideInMenuItem = {
	type: "icon";
	label?: string;
	icon: SvgIconComponent;
	onClick: () => void;
};

type ISeparatorSlideInMenuItem = {
	type: "separator";
};

export type ISlideInMenuItem =
	| IButtonSlideInMenuItem
	| IIconSlideInMenuItem
	| ISeparatorSlideInMenuItem;
