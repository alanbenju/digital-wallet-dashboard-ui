import { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useAppDispatch } from "../../store/hooks";
import { loginThunk } from "../../store/slices/auth";

export function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const dispatch = useAppDispatch();

    const handleLogin = async (e: any) => {
        setLoading(true);
        await dispatch(loginThunk({ username, password }))
        setLoading(false)
    }

    return (
        <Container style={{ display: 'flex', justifyContent: 'center', marginTop:'4rem' }}>
            <div>
                <h2>Login</h2>
                <div >
                    <Form onSubmit={handleLogin}>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Control type="string"
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                                placeholder='username'
                            />
                            <Form.Control type="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                placeholder='password'
                            />
                        </Form.Group>
                    </Form>
                </div>
                <div >
                    <button className="btn btn-primary btn-block" disabled={loading} onClick={handleLogin}>
                        {loading && (
                            <span className="spinner-border spinner-border-sm"></span>
                        )}
                        <span>Login</span>
                    </button>
                </div>
            </div >
        </Container>
    );
};

