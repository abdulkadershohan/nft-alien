/* eslint-disable react/prop-types */
import { Button, Stack } from "@mui/material";
import * as React from "react";
export default function CButton({
	children,
	backgroundColor,
	fontSize,
	borderRadius,
	fontWeight,
	padding,
	btnTitle,
	border,
	background,
	hoverColor,
	color,
	textHoverColor,
	...rest
}) {
	return (
		<Button
			direction={"row"}
			spacing={1}
			size='small'
			sx={{
				backgroundColor: backgroundColor ? backgroundColor : "#fff",
				padding: padding ? padding : "8px 18px",
				borderRadius: borderRadius ? borderRadius : "0px",
				color: color ? color : "#fff",
				fontSize: fontSize ? fontSize : "1rem",
				fontWeight: fontWeight ? fontWeight : "400",
				fontFamily: "Bakbak One",
				textTransform: "uppercase",
				border: border,
				'&:hover': {
					backgroundColor: hoverColor ? hoverColor : "#231C22",
					cursor: "pointer",
					color: textHoverColor,
				},
			}}
			{...rest}
		>
			<Stack
				pr={1}
			>
				{children}
			</Stack> {`  `}
			{btnTitle}
		</Button>
	);
}
