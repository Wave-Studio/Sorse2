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
					align={AlignType.Center}
					border={{
						color: "white",
						width: 5,
					}}
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
					collisionBox: new CollisionBox(
						new Box(new Position(0, 0), new Position(pW`15%`, pH`7%`))
					),
					callback: () => {},
				}}
			>
				<Text
					text="Play"
					align={AlignType.Center}
					font={new Font("Arial", 35, ["bold"])}
					color="white"
					position={new Position(pW`7.5%`, pH`5`)}
				/>
			</Rectangle>
		</>
	);
}

/*export default function start() {
	return (
		<>
			<Image src={"/unknown.png"} height={pH`100%`} width={pW`100%`}></Image>

			<Rectangle width={pW`100%`} height={pH`100%`} color={"rgba(0,0,0,0.7)"} />
			<Container position={new Position(Placement.CENTER, Placement.CENTER)} (center of parent element) anchor="center" (where it decides to anchor off of, ex. center would position this in the cen)  > 
				<Image
					src={"/craig.gif"}
					height={pH`8%`}
					width={pW`30%`}
					type="cover" https://tailwindcss.com/docs/background-size#cover
					position={
						new Position(
							0, -pH`5`
								
						)
					}
					anchor="bottom"
				></Image>
				<Image
					src={"/bruhmoment.png"}
					height={pH`8%`}
					width={pW`40%`}
					type="contain" https://tailwindcss.com/docs/background-size#contain (default behavior is streach)
					position={
						new Position(
							0, pH`5`
						)
					}
					anchor="top"
				></Image>
				
			</Container>
			<Text
					text={"Craig and Wide Simulator"}
					font={new Font("Arial", 100, ["bold"])}
					position={new Position(c, Placement.CENTER)}
					align={"center"}
				/>
			<Container position={new Position(Placement.CENTER, Placement.CENTER + pH`20`)} anchor="center" > 
			
			<Rectangle
				width={200}
				height={50}
				color={"blue"}
				position={
					new Position(
						Placement.CENTER,
						Placement.CENTER
					)
				}
				onClick={{
					collisionBox: new CollisionBox(new Box(new Position(0, 0), new Position(pW`15%`, pH`7%`))), (there should really be a way to make the element the collision box)
					callback: () => {
						
					}
				}}
			>
				<Text
					text="Play"
					align="center"
					font={new Font("Arial", 35, ["bold"])}
					color="white"
					position={new Position(Placement.CENTER, Placement.CENTER)}
					anchor="center"
				/>
			</Rectangle>
		</>
	);
}
*/
