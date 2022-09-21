import { useContext } from "react";
import ctx from '../context/authContext';

const styles = {
     container: {
    display: 'flex',
    alignItems: 'center',
  },
  tag: {
    fontSize: 24,
    margin: `0 20px 0 0`,
  },
}

export default function UserMenu() { 
    const authContext = useContext(ctx);
console.log('UserMenu');
console.log(authContext);

    return (
        <div style={styles.container}>
            <button type="button" onClick={() => console.log('Входим')}>
                Войти
            </button>
            <p style={styles.tag}>Юзер</p>
            <button type="button" onClick={() => console.log('Вьіходим')}>
                Вьійти
                </button>
        </div>
    )
}

