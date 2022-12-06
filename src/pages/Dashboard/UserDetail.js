import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

function UserDetail() {
    const { id } = useParams();
    const location = useLocation();
    const [user, setUser] = useState(location.state);
    
    

    useEffect(() => {
        
        if (id) {
            fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
                .then((res) => res.json())
                .then((data) => setUser(data));
        };
        

    }, [id]);



    return (
        <div>
            <div>
                <h2>Kullanıcı Detayı</h2>
                {user && <pre>{JSON.stringify(user, null, 2)}</pre>}
                <div>
                    {id && id != 1 && <Link to={`/users/${Number(id) - 1}`} className="first-link">Önceki Kullanıcı</Link>}
                    {id && id != 10 && <Link to={`/users/${Number(id) + 1}`} className="second-link">Sonraki Kullanıcı</Link>}
                </div>              
            </div>
        </div>

    )
}

export default UserDetail;