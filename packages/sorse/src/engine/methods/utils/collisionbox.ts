/*
 * Sorse 2
 *
 * Developed by Wave-studio
 */

import { type Box, type Position } from "../../../index";

export class CollisionBox {
  constructor(public boxes: Box[]) {}

  public inCollision(point: Position): boolean {
    for (const box of this.boxes) {
      if (
        point.x >= box.topCorner.x && point.x <= box.bottomCorner.x &&
        point.y >= box.topCorner.y && point.y <= box.bottomCorner.y
      ) {
        return true;
      }
    }

    return false;
  }
}
