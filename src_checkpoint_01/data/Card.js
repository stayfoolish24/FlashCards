import md5 from "md5"

class Card {
  constructor(front, back, deckID) {
    this.front = front
    this.back = back
    this.decID = deckID
    this.id = md5(front + back + deckID)
  }

  setFromObject(ob) {
    let c = new Card(ob.front, ob.back, ob.deckID)
    c.setFromObject(ob)
    return C
  }
  static fromObject(ob) {
    let c = new Card(ob.front, ob.back, ob.deckID)
    c.setFromObject(ob)
    return c
  }
}

export default Card
