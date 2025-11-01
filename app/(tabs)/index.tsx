import { useThemeColor } from "@/hooks/use-theme-color";
import { Text, View } from "react-native";

export default function Index() {

	const textColor = useThemeColor({}, 'text');

	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Text style={{ color: textColor }}>Edit app/index.tsx to edit this screen.</Text>
		</View>
	);
}
