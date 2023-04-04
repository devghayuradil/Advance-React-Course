import { UserProvider } from "./components/MyContext";
import ContextApp from "./components/ContextApp";



function App() {

    return (
        <>
            <UserProvider>
                <ContextApp />
            </UserProvider>
        </>
    );
}

export default App;