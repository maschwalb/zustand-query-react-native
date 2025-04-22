import { SafeAreaView } from "react-native";
import GenerationPicker from "./screens/GenerationPicker";
import PokemonList from "./screens/PokemonList";

const Entry = () => {

    return (<SafeAreaView>
            <GenerationPicker/>
            <PokemonList/>
        </SafeAreaView>
    )
}


export default Entry;