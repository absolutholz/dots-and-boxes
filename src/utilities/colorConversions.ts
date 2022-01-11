// https://www.delftstack.com/howto/javascript/rgb-to-hex-javascript/

export function ColorToHex(color: number): string {
	var hexadecimal = color.toString(16);
	return hexadecimal.length === 1 ? "0" + hexadecimal : hexadecimal;
}

export function ConvertRGBtoHex(red: number, green: number, blue: number): string {
	return "#" + ColorToHex(red) + ColorToHex(green) + ColorToHex(blue);
}
