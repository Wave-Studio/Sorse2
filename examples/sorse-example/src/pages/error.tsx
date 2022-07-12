import {
	pH,
	pW,
	Rectangle,
	Image,
	Text,
	Position,
	Sorse,
	Container,
	Font,
	CollisionBox,
	Box,
	AlignType,
	AlignTypeX,
	AlignTypeY
} from "sorse";

export default function error() {
	return (
		<>
			<Rectangle width={pW`100%`} height={pH`100%`} color="#f87171">
			<Rectangle width={Sorse.nativeWidth < 1000 ? pW`90%` : 700} height={400} color="white" position={new Position(pW`50%`, 30)} align={{x: AlignTypeX.Center, y: AlignTypeY.Top}} shadow={{color: "rgba(28, 25, 23, 0.5)", blur: 30, offset: {x: 10, y: 10}}}>
				</Rectangle>
				<Rectangle width={Sorse.nativeWidth < 1000 ? pW`90%` : 700} height={400} color="white" position={new Position(pW`50%`, 30)} align={{x: AlignTypeX.Center, y: AlignTypeY.Top}} shadow={{color: "#dc2626", blur: 0, offset: {x: 0, y: -10}}}>
					<Text text="Error" font={new Font("Arial", 50, ["bold"])} position={new Position(0, 100)} align={{x: AlignTypeX.Left, y: AlignTypeY.Top}}  />
				</Rectangle>
				
			</Rectangle>
		</>
	)
}