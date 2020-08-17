import { ICharacter } from ".root./data/interface/Character.interface"
import { IListingArgs } from "./interface"
import { CharacterData } from '.root./data'

export default class Listing {
  private data: ICharacter[];
  private args: Partial<IListingArgs>;

  constructor(args?: Partial<IListingArgs>) {
    this.data = [];
    this.args = Object.assign({}, args);
  }

  async apiGet() {
    this.data = await CharacterData.getCharacterList(this.args.title as string);
  }

  template() {
    let title = this.args.title ? `<h3>${this.args.title}</h3>` : '';

    let items = this.data.map((data)=>(
      `<div class="character-item">
        <div class="character-avatar" style="background-image: url('${data.avatar}');"></div>
        <div class="character-name">
          <div>
            <span>${data.name}</span><br />
            <span>(${data.nameKanji})</span>
          </div>
        </div>
      </div>`
    )).join('');

    return (
      `<div class="character" id="character-${this.args.title}">${title}<div class="character-wrapper">${items}</div></div>`
    );
  }

}
