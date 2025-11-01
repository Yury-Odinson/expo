import { useThemeColor } from "@/hooks/use-theme-color";
import { StyleSheet, Text, View } from "react-native";

export default function List() {

	const textColor = useThemeColor({}, 'text');

	return (
		<View style={styles.container}>
			<Text style={styles.title && { color: textColor }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique dolore ipsam molestias quod nihil alias quidem quibusdam deserunt ex inventore officia dolores debitis quisquam repellat aliquid, cum, est excepturi sed.</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16
	},
	title: {
		paddingVertical: 8,
		borderBottomWidth: 1,
		borderBlockColor: '#797979ff',
		textAlign: 'center',
		fontSize: 30,
		fontWeight: 'bold',
	},
});
