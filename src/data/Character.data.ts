import { ICharacter } from "./interface/Character.interface"
import { ApiUtil } from ".root./utils"
import { characterList } from ".root./constants/Character.constant";

async function getCharacterList(title: string): Promise<ICharacter[]> {
  return ApiUtil.DummyApi<ICharacter[]>(characterList.filter(e=>e.anime === title));
}

export default {
  getCharacterList
}
