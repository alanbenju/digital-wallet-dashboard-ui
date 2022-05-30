import { Form } from "react-bootstrap"
import { RateFormProps } from "../../../common/interfaces"

export function RateForm(props: RateFormProps) {
    const { rate, onChange } = props
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasic">
                <Form.Control 
                    type="number"
                    value={rate}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(Number(e.target.value))}
                />
            </Form.Group>
        </Form>
    )
}