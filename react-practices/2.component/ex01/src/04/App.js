import React from 'react';
import MyComponent from './MyComponent';

function App() {
    return (
        <div id = 'App'>
            <MyComponent 
                // props01={'문자열'}
                props02={200}
                props03={1-1 === 0}
                props04={{no:1,name:'돌리'}}
                props05={['Hello','World','React','JS','ES6']}
                props06={() => '함수'}
                props07={200}
                props08={[true, false, true, true]}
                props09={{
                    no:10,
                    name:'돌리',
                    email: 'doly@gmail.com'
                }}
            />
        </div>
    );
}

export default App;