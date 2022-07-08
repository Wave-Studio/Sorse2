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
} from "sorse";

export default function start() {
	return (
		<>
			<Image src={"/unknown.png"} height={pH`100%`} width={pW`100%`}></Image>

			<Rectangle width={pW`100%`} height={pH`100%`} color={"rgba(0,0,0,0.7)"} />
			<Container offset={new Position(0, 0 - pW`10%`)}>
				<Image
					src={"/craig.gif"}
					height={pH`8%`}
					width={pW`30%`}
					position={
						new Position(
							Sorse.nativeWidth / 2 - pW`15%`,
							Sorse.nativeHeight / 2 + pH`10%`
						)
					}
				></Image>
				<Image
					src={"/bruhmoment.png"}
					height={pH`8%`}
					width={pW`40%`}
					position={
						new Position(
							Sorse.nativeWidth / 2 - pW`20%`,
							Sorse.nativeHeight / 2 + pH`20%`
						)
					}
				></Image>
				<Text
					text={"Craig and Wide Simulator"}
					color={"black"}
					font={new Font("Arial", 100, ["bold"])}
					position={new Position(Sorse.nativeWidth / 2, Sorse.nativeHeight / 2)}
					align={"center"}
				/>
			</Container>
			<Rectangle
				width={pW`15%`}
				height={pH`7%`}
				color={"blue"}
				position={
					new Position(
						Sorse.nativeWidth / 2 - pW`7.5%`,
						Sorse.nativeHeight / 2 + pW`10`
					)
				}
				onClick={{
					collisionBox: new CollisionBox(new Box(new Position(0, 0), new Position(pW`15%`, pH`7%`))),
					callback: () => {
						
					}
				}}
			>
				<Text
					text="Play"
					align="center"
					font={new Font("Arial", 35, ["bold"])}
					color="white"
					position={new Position(pW`7.5%`, pH`5`)}
				/>
			</Rectangle>
		</>
	);
}
