import { Switch, Route } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import SignupForm from 'components/SignupForm/SignupForm';


const containerStyles = {
  maxWidth: 1170,
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: 15,
  paddingRight: 15,
};

export default function App() {
    return (
        <div style={containerStyles}>
            <AppBar />

            <Switch>
                <Route path="/signup">
                    <SignupForm />
                </Route>

                <Route path="/colorpicker">
                    <ColorPicker options={colorPickerOptions} />
                </Route>

                <Route path="/counter">
                    <Counter />
                </Route>

                <Route path="/clock">
                    <Clock />
                </Route>

                <Route path="/pokemon">
                    <PokemonView />
                </Route>
            </Switch>
        </div>
    );
}