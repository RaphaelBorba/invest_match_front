import LoginOrOut from "./LoginOrOut";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import { HeaderCss } from "./style";


export default function Header(){

    return(

        <HeaderCss>
            <Logo/>
            <SearchBar/>
            <LoginOrOut/>
        </HeaderCss>
    );
}